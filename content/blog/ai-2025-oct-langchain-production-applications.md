---
title: LangChain for Production Applications — Build Reliable LLM Apps at Scale
description: Master LangChain for production deployments. Learn chains, agents, memory, callbacks, and optimization techniques for enterprise applications.
date: 2025-10-01
category: AI Development
readTime: 15 min read
---

# LangChain for Production Applications

LangChain has become the de facto framework for building LLM applications, but moving from prototype to production requires understanding its advanced features and best practices. This comprehensive guide shows you how to build reliable, scalable LLM applications with LangChain.

## Why LangChain?

**Without LangChain:**
- 500+ lines of boilerplate code for basic LLM app
- Manual handling of prompts, parsing, retries
- Reinventing wheels for common patterns
- Difficult to switch between models

**With LangChain:**
- ✅ 50 lines of code for same functionality
- ✅ Built-in best practices and error handling
- ✅ Reusable components and patterns
- ✅ Model-agnostic abstractions
- ✅ Production-ready observability

## Core Concepts

### 1. Models & Prompts

```python
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

# Chat model (recommended for most use cases)
chat_model = ChatOpenAI(
    model="gpt-4o",
    temperature=0.7,
    max_tokens=1000,
    request_timeout=30
)

# Structured prompts with variables
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} who specializes in {specialty}."),
    ("human", "{user_input}")
])

# Create chain
chain = prompt | chat_model

# Execute
result = chain.invoke({
    "role": "financial analyst",
    "specialty": "risk assessment",
    "user_input": "Analyze this portfolio..."
})
```

### 2. Chains — Composable Workflows

**Simple Sequential Chain:**
```python
from langchain.chains import LLMChain, SequentialChain

# Chain 1: Translate to English
translate_chain = LLMChain(
    llm=chat_model,
    prompt=ChatPromptTemplate.from_template(
        "Translate the following to English:\n{text}"
    ),
    output_key="english_text"
)

# Chain 2: Summarize
summarize_chain = LLMChain(
    llm=chat_model,
    prompt=ChatPromptTemplate.from_template(
        "Summarize the following text in 3 sentences:\n{english_text}"
    ),
    output_key="summary"
)

# Combine chains
translation_summary_chain = SequentialChain(
    chains=[translate_chain, summarize_chain],
    input_variables=["text"],
    output_variables=["english_text", "summary"]
)

# Execute
result = translation_summary_chain({
    "text": "Texte français ici..."
})
```

**Router Chain — Dynamic Routing:**
```python
from langchain.chains.router import MultiPromptChain
from langchain.chains.router.llm_router import LLMRouterChain, RouterOutputParser

# Define specialized prompts
customer_service_prompt = ChatPromptTemplate.from_template(
    "You are a customer service agent. Help with: {input}"
)

technical_support_prompt = ChatPromptTemplate.from_template(
    "You are a technical support specialist. Solve: {input}"
)

sales_prompt = ChatPromptTemplate.from_template(
    "You are a sales representative. Address: {input}"
)

# Create destination chains
destinations = {
    "customer_service": LLMChain(llm=chat_model, prompt=customer_service_prompt),
    "technical_support": LLMChain(llm=chat_model, prompt=technical_support_prompt),
    "sales": LLMChain(llm=chat_model, prompt=sales_prompt)
}

# Router chain automatically selects appropriate destination
router_chain = MultiPromptChain(
    router_chain=LLMRouterChain.from_llm(chat_model),
    destination_chains=destinations,
    default_chain=destinations["customer_service"]
)

# Automatically routes to correct specialist
result = router_chain.run("I need help with a refund")  # → customer_service
result = router_chain.run("API returning 500 errors")   # → technical_support
result = router_chain.run("What's included in Pro plan?")  # → sales
```

### 3. Memory — Maintaining Context

**Conversation Buffer Memory:**
```python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

# Store full conversation history
memory = ConversationBufferMemory()

conversation = ConversationChain(
    llm=chat_model,
    memory=memory,
    verbose=True
)

# Multi-turn conversation
response1 = conversation.predict(input="Hi, I'm John")
# AI remembers context in next turn
response2 = conversation.predict(input="What's my name?")
# → "Your name is John"

# Access conversation history
print(memory.load_memory_variables({}))
```

**Conversation Summary Memory (for long conversations):**
```python
from langchain.memory import ConversationSummaryMemory

# Automatically summarizes old messages
memory = ConversationSummaryMemory(
    llm=chat_model,
    max_token_limit=500  # Summarize when context exceeds this
)

conversation = ConversationChain(
    llm=chat_model,
    memory=memory
)

# Handles very long conversations efficiently
for i in range(100):
    response = conversation.predict(input=f"Message {i}")
# Memory stays under token limit through summarization
```

**Vector Store Memory (semantic recall):**
```python
from langchain.memory import VectorStoreRetrieverMemory
from langchain.vectorstores import Pinecone

# Store memories in vector database
memory = VectorStoreRetrieverMemory(
    retriever=Pinecone.from_existing_index(
        index_name="conversation-memory"
    ).as_retriever(search_kwargs=dict(k=5))
)

conversation = ConversationChain(
    llm=chat_model,
    memory=memory
)

# Remembers semantically similar past conversations
response = conversation.predict(
    input="What did we discuss about pricing last week?"
)
# Retrieves relevant past discussion even if not recent
```

### 4. Agents — Dynamic Tool Use

**Production-Ready Agent:**
```python
from langchain.agents import initialize_agent, Tool, AgentType
from langchain.tools import DuckDuckGoSearchRun

# Define tools
search = DuckDuckGoSearchRun()

tools = [
    Tool(
        name="Search",
        func=search.run,
        description="Search the internet for current information"
    ),
    Tool(
        name="Calculator",
        func=lambda x: eval(x),
        description="Calculate mathematical expressions. Input should be a valid Python expression."
    ),
    Tool(
        name="Company Database",
        func=query_company_db,
        description="Search internal company database. Input should be a SQL query."
    )
]

# Initialize agent with error handling
agent = initialize_agent(
    tools=tools,
    llm=chat_model,
    agent=AgentType.OPENAI_FUNCTIONS,  # Most reliable agent type
    verbose=True,
    max_iterations=5,  # Prevent infinite loops
    early_stopping_method="generate",  # Graceful degradation
    handle_parsing_errors=True  # Automatically retry on parsing errors
)

# Execute complex task
result = agent.run("""
What's the current stock price of our top 3 competitors,
and what's the average?
""")

# Agent automatically:
# 1. Searches for competitor names in company DB
# 2. Searches web for current stock prices
# 3. Calculates average using calculator tool
```

## Production Patterns

### 1. Error Handling & Retries

```python
from langchain.callbacks import get_openai_callback
from tenacity import retry, stop_after_attempt, wait_exponential
import logging

class ProductionChain:
    def __init__(self, llm, prompt):
        self.chain = prompt | llm
        self.logger = logging.getLogger(__name__)
    
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=10)
    )
    def invoke_with_retry(self, inputs: dict) -> str:
        """Invoke chain with automatic retries"""
        try:
            with get_openai_callback() as cb:
                result = self.chain.invoke(inputs)
                
                # Log metrics
                self.logger.info(f"LLM call successful", extra={
                    "tokens": cb.total_tokens,
                    "cost": cb.total_cost,
                    "latency_ms": cb.total_time
                })
                
                return result
                
        except Exception as e:
            self.logger.error(f"LLM call failed: {str(e)}")
            
            # Try fallback model if primary fails
            if "rate_limit" in str(e):
                return self.invoke_with_fallback(inputs)
            
            raise
    
    def invoke_with_fallback(self, inputs: dict) -> str:
        """Fallback to cheaper/faster model"""
        fallback_llm = ChatOpenAI(model="gpt-3.5-turbo")
        fallback_chain = self.chain.prompt | fallback_llm
        return fallback_chain.invoke(inputs)
```

### 2. Caching for Performance

```python
from langchain.cache import InMemoryCache, SQLiteCache
from langchain.globals import set_llm_cache

# Option 1: In-memory cache (fastest, not persistent)
set_llm_cache(InMemoryCache())

# Option 2: SQLite cache (persistent across restarts)
set_llm_cache(SQLiteCache(database_path=".langchain.db"))

# Option 3: Redis cache (distributed, production-ready)
from langchain.cache import RedisCache
import redis

set_llm_cache(RedisCache(
    redis_=redis.Redis(host='localhost', port=6379)
))

# Now LangChain automatically caches identical requests
llm = ChatOpenAI(model="gpt-4o")

# First call: hits API
response1 = llm.predict("What is the capital of France?")  # 2000ms

# Second call: returns cached result
response2 = llm.predict("What is the capital of France?")  # 20ms
```

### 3. Streaming Responses

```python
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.callbacks.base import BaseCallbackHandler

class CustomStreamHandler(BaseCallbackHandler):
    """Custom streaming handler for real-time updates"""
    
    def __init__(self, websocket):
        self.websocket = websocket
    
    def on_llm_new_token(self, token: str, **kwargs) -> None:
        """Called when new token is generated"""
        # Send token to client in real-time
        self.websocket.send_text(token)

# Setup streaming chain
streaming_llm = ChatOpenAI(
    model="gpt-4o",
    streaming=True,
    callbacks=[CustomStreamHandler(websocket)]
)

chain = prompt | streaming_llm

# Tokens stream to client as they're generated
response = chain.invoke({"input": "Write a long article..."})
```

### 4. Monitoring & Observability

```python
from langchain.callbacks import LangChainTracer
from langsmith import Client

# Setup LangSmith (LangChain's observability platform)
client = Client()
tracer = LangChainTracer(project_name="production-app")

chain = (prompt | llm).with_config(callbacks=[tracer])

# Every invocation is tracked with:
# - Latency
# - Token usage
# - Cost
# - Input/output
# - Errors
result = chain.invoke({"input": "..."})

# View in LangSmith dashboard:
# - Request traces
# - Performance analytics
# - Error rates
# - Cost tracking
```

### 5. Custom Output Parsers

```python
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class ProductReview(BaseModel):
    """Structured product review output"""
    rating: int = Field(description="Rating from 1-5")
    sentiment: str = Field(description="positive, negative, or neutral")
    summary: str = Field(description="Brief summary of review")
    key_points: list[str] = Field(description="List of key points")

# Create parser
parser = PydanticOutputParser(pydantic_object=ProductReview)

# Create prompt with formatting instructions
prompt = ChatPromptTemplate.from_template(
    """Analyze the following product review:
    
    {review}
    
    {format_instructions}
    """
).partial(format_instructions=parser.get_format_instructions())

# Chain automatically returns structured output
chain = prompt | llm | parser

result = chain.invoke({
    "review": "This product is amazing! Great quality and fast shipping..."
})

# result is a ProductReview object
print(result.rating)  # 5
print(result.sentiment)  # "positive"
print(result.key_points)  # ["Great quality", "Fast shipping"]
```

## Advanced Use Cases

### 1. Document Question Answering

```python
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chains import RetrievalQA

# Load and process documents
loader = PyPDFLoader("company_handbook.pdf")
documents = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# Create vector store
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_documents(
    chunks,
    embeddings,
    index_name="company-docs"
)

# Create QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=chat_model,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 5}),
    return_source_documents=True
)

# Ask questions about documents
result = qa_chain({
    "query": "What is the vacation policy?"
})

print(result["result"])  # Answer
print(result["source_documents"])  # Source chunks with page numbers
```

### 2. SQL Database Agent

```python
from langchain.agents import create_sql_agent
from langchain.agents.agent_toolkits import SQLDatabaseToolkit
from langchain.sql_database import SQLDatabase

# Connect to database
db = SQLDatabase.from_uri("postgresql://user:pass@localhost/company_db")

# Create SQL agent
sql_agent = create_sql_agent(
    llm=chat_model,
    toolkit=SQLDatabaseToolkit(db=db, llm=chat_model),
    verbose=True,
    agent_type=AgentType.OPENAI_FUNCTIONS,
    # Safety: only allow SELECT queries
    return_intermediate_steps=True
)

# Natural language to SQL
result = sql_agent.run("""
What were our top 5 customers by revenue last quarter,
and what was their average order value?
""")

# Agent automatically:
# 1. Understands database schema
# 2. Generates correct SQL query
# 3. Executes query
# 4. Formats results in natural language
```

### 3. API Integration Chain

```python
from langchain.tools import Tool, APIOperation
from langchain.agents import initialize_agent

# Define API tools
def search_salesforce(query: str) -> dict:
    """Search Salesforce CRM"""
    # API call implementation
    pass

def create_hubspot_contact(data: dict) -> str:
    """Create contact in HubSpot"""
    # API call implementation
    pass

def send_sendgrid_email(to: str, subject: str, body: str) -> bool:
    """Send email via SendGrid"""
    # API call implementation
    pass

tools = [
    Tool(
        name="SearchSalesforce",
        func=search_salesforce,
        description="Search Salesforce for customer information"
    ),
    Tool(
        name="CreateHubSpotContact",
        func=create_hubspot_contact,
        description="Create new contact in HubSpot CRM"
    ),
    Tool(
        name="SendEmail",
        func=send_sendgrid_email,
        description="Send email to customer"
    )
]

# Agent can orchestrate multi-system workflows
api_agent = initialize_agent(
    tools=tools,
    llm=chat_model,
    agent=AgentType.OPENAI_FUNCTIONS
)

result = api_agent.run("""
Find all customers in Salesforce who signed up this month,
create corresponding contacts in HubSpot,
and send them a welcome email.
""")
```

## Performance Optimization

### 1. Batch Processing

```python
from langchain.schema import Document

# Process multiple documents efficiently
documents = [...]  # 1000 documents

# Bad: Sequential processing (slow)
results = []
for doc in documents:
    result = chain.invoke({"text": doc.page_content})
    results.append(result)

# Good: Batch processing (10x faster)
results = chain.batch([
    {"text": doc.page_content} for doc in documents
], 
config={"max_concurrency": 10})  # Process 10 at a time
```

### 2. Async Execution

```python
import asyncio

# Async chain for non-blocking execution
async def process_requests(requests: list[dict]) -> list[str]:
    """Process multiple requests concurrently"""
    
    # Create tasks
    tasks = [
        chain.ainvoke(request) for request in requests
    ]
    
    # Execute concurrently
    results = await asyncio.gather(*tasks)
    
    return results

# Process 100 requests in parallel
requests = [{"input": f"Request {i}"} for i in range(100)]
results = asyncio.run(process_requests(requests))
```

## Real-World Results

**Customer Support Automation**
- **Before**: 10,000 tickets/month, 48h average response time
- **After**: 6,000 auto-resolved (60%), 2h response time for escalated
- **Impact**: $500K annual savings, 95% satisfaction score

**Document Analysis Pipeline**
- **Before**: 40 hours/week manual document review
- **After**: 2 hours/week oversight of automated analysis
- **Impact**: 95% time savings, consistent quality

**Sales Intelligence Agent**
- **Before**: 2 days per prospect research
- **After**: 30 minutes automated research per prospect
- **Impact**: 32x productivity increase, 3x more prospects contacted

## Best Practices

1. **Use Appropriate Chain Types**
   - Simple tasks: `LLMChain`
   - Multi-step: `SequentialChain`
   - Dynamic routing: `RouterChain`
   - Iterative: `Agent`

2. **Implement Comprehensive Error Handling**
   - Always use retries with exponential backoff
   - Have fallback models for reliability
   - Log errors with full context

3. **Monitor Everything**
   - Track latency, token usage, cost
   - Use LangSmith or custom observability
   - Set up alerts for anomalies

4. **Optimize for Cost**
   - Cache aggressively
   - Use smaller models when possible
   - Batch requests when appropriate

5. **Test Thoroughly**
   - Unit test individual components
   - Integration test full chains
   - Load test at expected scale

## Conclusion

LangChain transforms LLM application development from artisanal coding to engineering with reusable components and battle-tested patterns. By following these production practices, you can build reliable, scalable LLM applications that deliver business value.

**Key Takeaways:**
1. Use chains for sequential workflows, agents for dynamic tasks
2. Implement proper error handling and retries from day one
3. Cache aggressively to reduce costs and improve latency
4. Monitor comprehensively with LangSmith or custom tooling
5. Test at production scale before launch

The future of software development includes LLMs as core components, and LangChain is the framework that makes it practical.

**Ready to build with LangChain?** Our team can help you architect and implement production LLM applications. [Contact us](/contact) for a consultation.
