'use client';

import React, { useState } from 'react';

interface CostBreakdown {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  inputCost: number;
  outputCost: number;
  totalCost: number;
  costPer1000: number;
  estimatedLatency: string;
}

interface ModelDef {
  id: string;
  name: string;
  inputPerM: number; // $/M tokens
  outputPerM: number;
  provider: string;
  free: boolean;
  latency: string;
}

const MODELS: ModelDef[] = [
  { id: 'gpt-4o', name: 'GPT-4o', inputPerM: 5.0, outputPerM: 15.0, provider: 'OpenAI', free: false, latency: '~1.5s' },
  { id: 'claude-sonnet', name: 'Claude Sonnet 4', inputPerM: 3.0, outputPerM: 15.0, provider: 'Anthropic', free: false, latency: '~2s' },
  { id: 'claude-haiku', name: 'Claude Haiku 3.5', inputPerM: 0.25, outputPerM: 1.25, provider: 'Anthropic', free: false, latency: '~0.5s' },
  { id: 'llama3-8b-ollama', name: 'Llama 3 8B (Ollama)', inputPerM: 0.0, outputPerM: 0.0, provider: 'Ollama', free: true, latency: '~0.3s' },
  { id: 'llama3-70b-ollama', name: 'Llama 3 70B (Ollama)', inputPerM: 0.0, outputPerM: 0.0, provider: 'Ollama', free: true, latency: '~2s' },
  { id: 'gemini-flash', name: 'Gemini 2.0 Flash', inputPerM: 0.35, outputPerM: 1.05, provider: 'Google', free: false, latency: '~0.5s' },
  { id: 'gemini-pro', name: 'Gemini 2.0 Pro', inputPerM: 1.25, outputPerM: 5.0, provider: 'Google', free: false, latency: '~3s' },
  { id: 'mistral-large', name: 'Mistral Large', inputPerM: 2.0, outputPerM: 6.0, provider: 'Mistral', free: false, latency: '~1s' },
  { id: 'qwen-max', name: 'Qwen Max', inputPerM: 0.4, outputPerM: 1.2, provider: 'Alibaba', free: false, latency: '~1s' },
];

export default function PromptCostCalculatorPage() {
  const [promptLength, setPromptLength] = useState(500); // characters
  const [responseLength, setResponseLength] = useState(300);
  const [dailyUsage, setDailyUsage] = useState(50); // prompts/day
  const [includeHistory, setIncludeHistory] = useState(false);
  const [historyMultiplier, setHistoryMultiplier] = useState(2);
  const [selectedModel, setSelectedModel] = useState('llama3-8b-ollama');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const totalInput = includeHistory ? promptLength * historyMultiplier : promptLength;
  const charsToTokens = 4;
  const inputTokens = Math.ceil(totalInput / charsToTokens);
  const outputTokens = Math.ceil(responseLength / charsToTokens);
  const totalTokens = inputTokens + outputTokens;

  const calculateCost = (model: ModelDef): CostBreakdown => {
    const inputCost = (inputTokens / 1000000) * model.inputPerM;
    const outputCost = (outputTokens / 1000000) * model.outputPerM;
    const totalCost = inputCost + outputCost;
    const costPer1000 = totalCost * 1000;
    return {
      inputTokens, outputTokens, totalTokens,
      inputCost, outputCost, totalCost,
      costPer1000,
      estimatedLatency: model.latency,
    };
  };

  const results = MODELS.map(m => ({ model: m, cost: calculateCost(m) }));
  const selectedResult = results.find(r => r.model.id === selectedModel)!;
  const dailyCost = selectedResult.cost.totalCost * dailyUsage;
  const monthlyCost = dailyCost * 30;
  const yearlyCost = monthlyCost * 12;

  const freeAlternatives = results.filter(r => r.model.free);
  const paidAlternatives = results.filter(r => !r.model.free).sort((a, b) => a.cost.totalCost - b.cost.totalCost);

  const formatCurrency = (val: number) => {
    if (val === 0) return '$0.00 (FREE)';
    if (val < 0.001) return `$${val.toFixed(6)}`;
    if (val < 0.01) return `$${val.toFixed(4)}`;
    return `$${val.toFixed(2)}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          💰 AI Prompt Cost Calculator
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Compare pricing across 9 models. Calculate per-prompt, daily, monthly, and yearly costs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            <h3 style={{ marginBottom: '1rem' }}>⚙️ Configuration</h3>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Prompt Length (chars)</label>
              <input type="range" min={50} max={5000} value={promptLength} onChange={e => setPromptLength(Number(e.target.value))} style={{ width: '100%' }} />
              <div style={{ textAlign: 'center', marginTop: '0.25rem', fontSize: '1.1rem', fontWeight: '600' }}>{promptLength.toLocaleString()} chars ({Math.ceil(promptLength / charsToTokens)} tokens)</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Expected Response (chars)</label>
              <input type="range" min={50} max={3000} value={responseLength} onChange={e => setResponseLength(Number(e.target.value))} style={{ width: '100%' }} />
              <div style={{ textAlign: 'center', marginTop: '0.25rem', fontSize: '1.1rem', fontWeight: '600' }}>{responseLength.toLocaleString()} chars ({Math.ceil(responseLength / charsToTokens)} tokens)</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.25rem' }}>Prompts per Day</label>
              <input type="range" min={1} max={1000} value={dailyUsage} onChange={e => setDailyUsage(Number(e.target.value))} style={{ width: '100%' }} />
              <div style={{ textAlign: 'center', marginTop: '0.25rem', fontSize: '1.1rem', fontWeight: '600' }}>{dailyUsage} prompts/day</div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" checked={includeHistory} onChange={e => setIncludeHistory(e.target.checked)} />
                <span style={{ color: '#e2e8f0' }}>Include conversation history</span>
              </label>
              {includeHistory && (
                <div style={{ marginTop: '0.5rem' }}>
                  <label style={{ color: '#94a3b8', fontSize: '0.85rem' }}>History multiplier</label>
                  <input type="range" min={2} max={10} value={historyMultiplier} onChange={e => setHistoryMultiplier(Number(e.target.value))} style={{ width: '100%' }} />
                  <div style={{ textAlign: 'center', color: '#60a5fa' }}>×{historyMultiplier} (≈{totalInput.toLocaleString()} chars input)</div>
                </div>
              )}
            </div>
          </div>

          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
            <h3 style={{ marginBottom: '1rem' }}>🎯 Selected Model: {selectedResult.model.name}</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#161e36', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: selectedResult.cost.totalCost === 0 ? '#4ade80' : '#60a5fa' }}>{formatCurrency(selectedResult.cost.totalCost)}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Per Prompt</div>
              </div>
              <div style={{ background: '#161e36', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: dailyCost === 0 ? '#4ade80' : '#fbbf24' }}>{formatCurrency(dailyCost)}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Daily ({dailyUsage} prompts)</div>
              </div>
              <div style={{ background: '#161e36', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: monthlyCost === 0 ? '#4ade80' : '#f472b6' }}>{formatCurrency(monthlyCost)}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Monthly</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#0c4a6e', padding: '0.75rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#38bdf8' }}>{selectedResult.cost.inputTokens.toLocaleString()}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Input Tokens</div>
              </div>
              <div style={{ background: '#0c4a6e', padding: '0.75rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#818cf8' }}>{selectedResult.cost.outputTokens.toLocaleString()}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Output Tokens</div>
              </div>
              <div style={{ background: '#0c4a6e', padding: '0.75rem', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#e2e8f0' }}>⏱ {selectedResult.cost.estimatedLatency}</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Est. Latency</div>
              </div>
            </div>

            {yearlyCost > 0 && (
              <div style={{ background: '#1c1917', border: '1px solid #44403c', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#f59e0b', fontWeight: '600' }}>💰 Yearly Cost Projection</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fbbf24', marginTop: '0.5rem' }}>{formatCurrency(yearlyCost)}/year</div>
                {freeAlternatives.length > 0 && monthlyCost > 1 && (
                  <div style={{ marginTop: '0.5rem', color: '#4ade80', fontSize: '0.85rem' }}>
                    Save <strong>{formatCurrency(yearlyCost)}</strong> by switching to {freeAlternatives[0].model.name}!
                  </div>
                )}
              </div>
            )}

            <h4 style={{ marginBottom: '0.5rem' }}>Switch Model</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {results.map(r => (
                <button
                  key={r.model.id}
                  onClick={() => setSelectedModel(r.model.id)}
                  style={{
                    padding: '0.5rem', borderRadius: '8px',
                    background: selectedModel === r.model.id ? (r.model.free ? '#065f46' : '#1e3a8a') : '#0f172a',
                    color: selectedModel === r.model.id ? '#f8fafc' : '#94a3b8',
                    border: selectedModel === r.model.id ? (r.model.free ? '#059669' : '#3b82f6') : '#1e3a8a',
                    cursor: 'pointer', textAlign: 'left', fontSize: '0.8rem'
                  }}
                >
                  {r.model.free && '🆓 '}{r.model.name}
                  <div style={{ color: r.cost.totalCost === 0 ? '#4ade80' : '#94a3b8', fontWeight: '500' }}>{formatCurrency(r.cost.totalCost)}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>📊 Full Model Comparison</h3>
        <div style={{ background: '#0f172a', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e40af' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr', padding: '0.75rem 1rem', background: '#1e40af', fontWeight: '600', fontSize: '0.85rem' }}>
            <div>Model</div><div>Input $/M</div><div>Output $/M</div><div>Per Prompt</div><div>Monthly</div><div>Provider</div>
          </div>
          {results.sort((a, b) => a.cost.totalCost - b.cost.totalCost).map((r, idx) => (
            <div
              key={r.model.id}
              onClick={() => setSelectedModel(r.model.id)}
              style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr 1fr',
                padding: '0.75rem 1rem',
                background: selectedModel === r.model.id ? '#1e40af33' : idx % 2 === 0 ? 'transparent' : '#0c1a3333',
                borderBottom: '1px solid #1e40af22', cursor: 'pointer', fontSize: '0.85rem'
              }}
            >
              <div>{r.model.free ? '🆓' : '💲'} {r.model.name}</div>
              <div>{r.model.inputPerM === 0 ? 'FREE' : `$${r.model.inputPerM.toFixed(2)}`}</div>
              <div>{r.model.outputPerM === 0 ? 'FREE' : `$${r.model.outputPerM.toFixed(2)}`}</div>
              <div style={{ color: r.cost.totalCost === 0 ? '#4ade80' : '#fbbf24', fontWeight: '600' }}>{formatCurrency(r.cost.totalCost)}</div>
              <div style={{ color: r.cost.totalCost === 0 ? '#4ade80' : '#f59e0b' }}>{formatCurrency(r.cost.totalCost * dailyUsage * 30)}</div>
              <div style={{ color: '#94a3b8' }}>{r.model.provider}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e40af' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>💡 Smart Recommendations</h3>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#4ade80' }}>Best for free usage:</strong> Ollama (Llama 3) — zero cost, runs locally on your machine.
            </li>
            <li style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#60a5fa' }}>Best value paid:</strong> {paidAlternatives[0]?.model.name || 'N/A'} — only {formatCurrency(paidAlternatives[0]?.cost.totalCost || 0)} per prompt.
            </li>
            <li style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>
              <strong style={{ color: '#fbbf24' }}>High volume tip:</strong> At {dailyUsage} prompts/day, use Haiku-class models for cost efficiency.
            </li>
            {includeHistory && (
              <li style={{ color: '#cbd5e1', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#f87171' }}>Context window cost:</strong> History ×{historyMultiplier} adds {(totalInput - promptLength).toLocaleString()} input tokens per prompt.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
