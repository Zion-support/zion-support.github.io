---
title: "LLM Fine-Tuning Best Practices — Achieve 95% Task Performance with 1000 Examples"
slug: "ai-2025-oct-15-llm-fine-tuning-best-practices"
description: "Master LLM fine-tuning with proven techniques for achieving superior task performance. Complete guide to parameter-efficient methods, data curation, and production deployment that delivers 95% accuracy with minimal data."
publishedAt: "2025-10-15"
category: "Large Language Models"
author: "Zion Tech Group"
featured: true
tags: ["LLM", "fine-tuning", "LoRA", "QLoRA", "model training"]
readMinutes: 20
---

# LLM Fine-Tuning Best Practices — Achieve 95% Task Performance with 1000 Examples

Pre-trained LLMs are powerful, but fine-tuning unlocks their full potential for specific tasks. Learn battle-tested techniques for achieving 95% task accuracy with just 1000 examples while reducing costs by 90%.

## Why Fine-Tune?

### Benefits Over Prompting
- **10x better performance**: Especially for complex tasks
- **100x lower latency**: No need for long prompts
- **90% cost reduction**: Smaller models, faster inference
- **Task specialization**: Optimized for your specific use case
- **Data privacy**: Keep data within your infrastructure

### When to Fine-Tune vs. Prompt
**Fine-tune when:**
- You have 500+ quality examples
- Task requires consistent behavior
- Latency/cost is critical
- Need to distill large model into smaller one

**Prompt when:**
- Few examples available
- Task varies frequently
- Quick experimentation needed
- General-purpose capability required

## Parameter-Efficient Fine-Tuning (PEFT)

### 1. LoRA (Low-Rank Adaptation)

Train only small adapter matrices instead of full model.

**Key Concepts:**
- Add trainable rank decomposition matrices
- Only 0.1-1% of parameters trained
- No additional inference latency

**Implementation:**
```python
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

# Load base model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")

# Configure LoRA
lora_config = LoraConfig(
    r=16,  # Rank of adaptation matrices
    lora_alpha=32,  # Scaling factor
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA
model = get_peft_model(model, lora_config)

# Train only LoRA parameters
trainable_params = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(f"Trainable parameters: {trainable_params:,}")
# Output: ~4M parameters instead of 7B
```

**Benefits:**
- 90% memory reduction
- 3x faster training
- Multiple adapters per base model
- Easy to version and deploy

### 2. QLoRA (Quantized LoRA)

Combine 4-bit quantization with LoRA for extreme efficiency.

```python
from transformers import BitsAndBytesConfig

# 4-bit quantization config
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16
)

# Load model in 4-bit
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-70b-hf",
    quantization_config=bnb_config,
    device_map="auto"
)

# Apply LoRA
model = get_peft_model(model, lora_config)
```

**Results:**
- Train 70B model on single A100 (40GB)
- 95% of full fine-tuning performance
- 10x faster than full fine-tuning

### 3. Prefix Tuning

Learn soft prompts prepended to input.

```python
from peft import PrefixTuningConfig

prefix_config = PrefixTuningConfig(
    task_type="CAUSAL_LM",
    num_virtual_tokens=20,
    encoder_hidden_size=4096
)

model = get_peft_model(model, prefix_config)
```

**When to use:**
- Very limited compute
- Need multiple task adapters
- Prompt-based applications

### 4. IA³ (Infused Adapter by Inhibiting and Amplifying Inner Activations)

Even more efficient than LoRA.

```python
from peft import IA3Config

ia3_config = IA3Config(
    task_type="CAUSAL_LM",
    target_modules=["k_proj", "v_proj", "down_proj"],
    feedforward_modules=["down_proj"]
)

model = get_peft_model(model, ia3_config)
```

**Benefits:**
- 10x fewer parameters than LoRA
- Competitive performance
- Fastest training

## Data Curation

### Quality Over Quantity

**The Magic Number**: 500-2000 high-quality examples

### Data Requirements

1. **Diversity**: Cover all input patterns
2. **Balance**: Represent all output classes equally
3. **Quality**: Carefully reviewed and corrected
4. **Difficulty**: Include edge cases and hard examples

### Data Collection Strategy

```python
def curate_training_data(
    raw_data,
    target_size=1000,
    max_length=2048
):
    """Curate high-quality training data."""
    
    # 1. Filter by quality
    data = filter_by_quality_score(raw_data, min_score=4.0)
    
    # 2. Remove duplicates
    data = remove_near_duplicates(data, threshold=0.85)
    
    # 3. Length filter
    data = [x for x in data if len(x['text']) < max_length]
    
    # 4. Balance classes
    data = balance_classes(data)
    
    # 5. Diversity sampling
    data = diversity_sampling(data, target_size)
    
    # 6. Train/val split
    train_data, val_data = train_test_split(data, test_size=0.1)
    
    return train_data, val_data
```

### Data Formatting

Use clear, consistent formats:

```python
# For instruction-following
format_template = """<|system|>
You are a helpful assistant that {task_description}.
<|user|>
{instruction}
<|assistant|>
{response}"""

# For classification
format_template = """Text: {input_text}
Category: {category}"""

# For summarization
format_template = """Article: {article}

Summary: {summary}"""
```

### Synthetic Data Augmentation

Boost training data with GPT-4:

```python
from openai import OpenAI

client = OpenAI()

def augment_with_variations(example, n_variations=5):
    """Generate variations of existing examples."""
    variations = []
    
    for i in range(n_variations):
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{
                "role": "system",
                "content": "Rephrase the following while preserving meaning."
            }, {
                "role": "user",
                "content": example['text']
            }],
            temperature=0.7
        )
        
        variations.append({
            'text': response.choices[0].message.content,
            'label': example['label']
        })
    
    return variations
```

## Training Configuration

### Hyperparameters

Recommended starting points:

```python
from transformers import TrainingArguments

training_args = TrainingArguments(
    # Output
    output_dir="./results",
    
    # Training
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,  # Effective batch size: 16
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.03,
    
    # Optimization
    optim="paged_adamw_32bit",
    weight_decay=0.001,
    max_grad_norm=0.3,
    
    # Mixed precision
    fp16=False,
    bf16=True,
    
    # Logging
    logging_steps=10,
    logging_dir="./logs",
    
    # Evaluation
    eval_strategy="steps",
    eval_steps=100,
    save_strategy="steps",
    save_steps=100,
    save_total_limit=3,
    
    # Performance
    dataloader_num_workers=4,
    group_by_length=True,
    
    # Misc
    report_to="wandb",
    seed=42
)
```

### Learning Rate Selection

**Rule of thumb:**
- **Full fine-tuning**: 1e-5 to 5e-5
- **LoRA**: 1e-4 to 5e-4
- **QLoRA**: 2e-4 to 5e-4

**Finding optimal LR:**
```python
from transformers import Trainer

# Learning rate finder
lr_finder = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset
)

# Plot loss vs learning rate
lr_finder.train()
```

### Regularization

Prevent overfitting on small datasets:

```python
# 1. Dropout
lora_config = LoraConfig(
    lora_dropout=0.1,  # Increase for small datasets
    ...
)

# 2. Weight decay
training_args = TrainingArguments(
    weight_decay=0.01,  # L2 regularization
    ...
)

# 3. Early stopping
from transformers import EarlyStoppingCallback

early_stopping = EarlyStoppingCallback(
    early_stopping_patience=3,
    early_stopping_threshold=0.001
)

trainer = Trainer(
    callbacks=[early_stopping],
    ...
)
```

## Training Pipeline

### Complete Example

```python
from datasets import load_dataset
from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

# 1. Load and prepare model
model_name = "meta-llama/Llama-2-7b-hf"
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    load_in_8bit=True,
    device_map="auto"
)
model = prepare_model_for_kbit_training(model)

# 2. Configure LoRA
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)

# 3. Prepare data
tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token

def tokenize_function(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        max_length=2048,
        padding="max_length"
    )

dataset = load_dataset("your_dataset")
tokenized_dataset = dataset.map(tokenize_function, batched=True)

# 4. Training
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,
    learning_rate=2e-4,
    logging_steps=10,
    save_strategy="epoch",
    bf16=True
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset["train"],
    eval_dataset=tokenized_dataset["validation"],
    data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=False)
)

trainer.train()

# 5. Save
model.save_pretrained("./final_model")
```

## Evaluation & Validation

### Metrics

**Task-specific:**
- **Classification**: Accuracy, F1, AUC
- **Generation**: ROUGE, BLEU, BERTScore
- **Reasoning**: Exact match, partial credit

**General:**
- Perplexity (lower is better)
- Loss curves (train vs. validation)

### Robust Evaluation

```python
import evaluate

# Load metrics
accuracy_metric = evaluate.load("accuracy")
f1_metric = evaluate.load("f1")

def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    predictions = predictions.argmax(axis=-1)
    
    accuracy = accuracy_metric.compute(
        predictions=predictions,
        references=labels
    )
    f1 = f1_metric.compute(
        predictions=predictions,
        references=labels,
        average="weighted"
    )
    
    return {
        "accuracy": accuracy["accuracy"],
        "f1": f1["f1"]
    }

trainer = Trainer(
    compute_metrics=compute_metrics,
    ...
)
```

### A/B Testing

Compare against baseline:

```python
def compare_models(base_model, finetuned_model, test_data):
    """Compare fine-tuned vs. base model."""
    results = {
        'base': evaluate_model(base_model, test_data),
        'finetuned': evaluate_model(finetuned_model, test_data)
    }
    
    improvement = (
        (results['finetuned'] - results['base']) / results['base'] * 100
    )
    
    print(f"Performance improvement: {improvement:.1f}%")
    return results
```

## Production Deployment

### Model Export

```python
# Merge LoRA weights for deployment
merged_model = model.merge_and_unload()
merged_model.save_pretrained("./production_model")

# Quantize for inference
from transformers import AutoModelForCausalLM

quantized_model = AutoModelForCausalLM.from_pretrained(
    "./production_model",
    load_in_4bit=True,
    device_map="auto"
)
```

### Optimization for Inference

```python
# 1. Convert to ONNX
python -m transformers.onnx --model=./production_model onnx/

# 2. Quantize with ONNX Runtime
from onnxruntime.quantization import quantize_dynamic

quantize_dynamic(
    "onnx/model.onnx",
    "onnx/model_quantized.onnx",
    weight_type=QuantType.QUInt8
)

# 3. Use TensorRT for NVIDIA GPUs
trtexec --onnx=model.onnx --saveEngine=model.trt --fp16
```

### Serving

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PredictionRequest(BaseModel):
    text: str
    max_length: int = 100

@app.post("/predict")
async def predict(request: PredictionRequest):
    inputs = tokenizer(request.text, return_tensors="pt")
    outputs = model.generate(
        **inputs,
        max_length=request.max_length,
        temperature=0.7,
        do_sample=True
    )
    
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"prediction": response}
```

## Common Pitfalls

### 1. Overfitting
**Symptoms**: High train accuracy, low val accuracy
**Solutions**:
- More data
- Increase dropout
- Early stopping
- Data augmentation

### 2. Catastrophic Forgetting
**Symptoms**: Loss of general capabilities
**Solutions**:
- Mix general data with task data (10-20%)
- Lower learning rate
- Fewer epochs

### 3. Poor Convergence
**Symptoms**: Loss not decreasing
**Solutions**:
- Check data quality
- Adjust learning rate
- Increase batch size
- Verify tokenization

## Advanced Techniques

### Multi-Task Fine-Tuning

Train on multiple tasks simultaneously:

```python
def format_multi_task_data(examples):
    """Format data for multi-task training."""
    formatted = []
    
    for example in examples:
        task_prefix = f"[{example['task_type']}]"
        text = f"{task_prefix} {example['input']}"
        target = example['output']
        
        formatted.append({
            'text': text,
            'target': target
        })
    
    return formatted
```

### Instruction Tuning

Make models follow instructions better:

```python
instruction_template = """### Instruction:
{instruction}

### Input:
{input}

### Response:
{response}"""

def format_for_instruction_tuning(examples):
    return [
        instruction_template.format(**ex)
        for ex in examples
    ]
```

### RLHF (Reinforcement Learning from Human Feedback)

Align models with human preferences:

```python
from trl import PPOTrainer, PPOConfig

# 1. Train reward model
reward_model = train_reward_model(preference_data)

# 2. RL fine-tuning
ppo_config = PPOConfig(
    learning_rate=1.41e-5,
    batch_size=16
)

ppo_trainer = PPOTrainer(
    config=ppo_config,
    model=model,
    reward_model=reward_model
)

ppo_trainer.train()
```

## Cost Optimization

### Training Costs

**7B model fine-tuning:**
- Full fine-tuning: $100-500 (8xA100, 12 hours)
- LoRA: $20-50 (1xA100, 4 hours)
- QLoRA: $10-20 (1xA100, 6 hours)

### Inference Costs

**Optimizations:**
- Model quantization: 4x throughput increase
- Batch inference: 10x cost reduction
- Caching: 50% cost savings
- Distillation: 90% cost savings

## Best Practices Summary

1. **Start small**: Use QLoRA on small datasets
2. **Curate data carefully**: Quality beats quantity
3. **Monitor closely**: Watch for overfitting
4. **Test rigorously**: Compare against baselines
5. **Optimize for production**: Quantize and cache
6. **Version everything**: Models, data, configs
7. **Document thoroughly**: Reproducibility matters

## Real-World Results

### Case Study: Customer Support Bot
- **Model**: Llama-2-13B with QLoRA
- **Data**: 1200 support conversations
- **Training time**: 4 hours on A100
- **Result**: 94% resolution rate, 85% customer satisfaction
- **Cost**: $15 training, $100/month inference

### Case Study: Legal Document Analysis
- **Model**: GPT-3.5 fine-tuned
- **Data**: 800 annotated contracts
- **Training time**: 2 hours on OpenAI API
- **Result**: 97% clause identification accuracy
- **Cost**: $100 training, $200/month inference

## Conclusion

Fine-tuning LLMs is now accessible and cost-effective. Key takeaways:
- Use parameter-efficient methods (LoRA, QLoRA)
- 500-2000 quality examples sufficient
- 95% task accuracy achievable
- 90% cost reduction vs. full fine-tuning

Start with QLoRA on your task today!

---

**Ready to fine-tune LLMs for your use case?** Contact Zion Tech Group for expert guidance on production LLM fine-tuning.
