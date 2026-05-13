'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

const API_PROVIDERS = [
  { id: 'openai', name: 'OpenAI (GPT-4/GPT-3.5)', icon: '🟢', pricing: { input: 10, output: 30, cache: 5 } },
  { id: 'anthropic', name: 'Anthropic (Claude)', icon: '🟠', pricing: { input: 8, output: 24, cache: 2 } },
  { id: 'google', name: 'Google AI (Gemini)', icon: '🔵', pricing: { input: 3.5, output: 10.5, cache: 0.875 } },
  { id: 'meta', name: 'Meta AI (Llama via provider)', icon: '🟣', pricing: { input: 0.25, output: 1.25, cache: 0 } },
  { id: 'mistral', name: 'Mistral AI', icon: '🔶', pricing: { input: 0.25, output: 0.8, cache: 0 } },
];

const SERVICE_TYPES = [
  { id: 'llm', label: 'LLM Text Generation', multiplier: 1 },
  { id: 'embeddings', label: 'Embeddings / Vector Search', multiplier: 0.3 },
  { id: 'image', label: 'Image Generation', multiplier: 5 },
  { id: 'vision', label: 'Vision / Image Analysis', multiplier: 2.5 },
  { id: 'moderation', label: 'Content Moderation', multiplier: 0.15 },
  { id: 'speech', label: 'Speech-to-Text', multiplier: 0.6 },
];

interface LineItem {
  id: number;
  provider: string;
  serviceType: string;
  monthlyCalls: number;
  avgInputTokens: number;
  avgOutputTokens: number;
}

function formatDollars(cents: number): string {
  const d = cents / 1_000_000;
  if (d >= 1000) return `$${d.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/mo`;
  if (d >= 1) return `$${d.toFixed(2)}/mo`;
  return `$${d.toFixed(4)}/mo`;
}

export default function AutonomousAPICostEstimator() {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, provider: 'openai', serviceType: 'llm', monthlyCalls: 10000, avgInputTokens: 500, avgOutputTokens: 200 },
  ]);
  const [showOptimization, setShowOptimization] = useState(false);

  const addItem = () => setLineItems(prev => [...prev, { id: prev.length + 1, provider: 'openai', serviceType: 'llm', monthlyCalls: 1000, avgInputTokens: 200, avgOutputTokens: 100 }]);
  const removeItem = (id: number) => setLineItems(prev => prev.filter(item => item.id !== id));
  const updateItem = (id: number, field: keyof LineItem, val: string | number) => setLineItems(prev => prev.map(item => item.id === id ? { ...item, [field]: val } : item));

  const totalCost = useMemo(() => {
    return lineItems.reduce((total, item) => {
      const provider = API_PROVIDERS.find(p => p.id === item.provider);
      const serviceType = SERVICE_TYPES.find(s => s.id === item.serviceType);
      if (!provider || !serviceType) return total;
      const inCost = (item.avgInputTokens * item.monthlyCalls * provider.pricing.input) / 1_000_000;
      const outCost = (item.avgOutputTokens * item.monthlyCalls * provider.pricing.output) / 1_000_000;
      return total + (inCost + outCost) * serviceType.multiplier;
    }, 0);
  }, [lineItems]);

  const optimizedCost = useMemo(() => Math.max(0, totalCost * 0.6), [totalCost]);

  const optimizations = useMemo(() => {
    const recs: string[] = [];
    if (totalCost > 5000) recs.push('Implement response caching for high-frequency identical queries — potential 30-60% reduction');
    if (lineItems.some(i => i.avgOutputTokens > 1000)) recs.push('Reduce output token length or use streaming with early stop — saves per-token output costs');
    if (lineItems.some(i => i.provider === 'openai')) recs.push('Evaluate Gemini Flash for bulk tasks — 11x cheaper than GPT-3.5 for equivalent accuracy');
    if (lineItems.some(i => i.provider === 'anthropic')) recs.push('Use Claude Prompt Caching for repeated system prompts — up to 90% cheaper on repeated context');
    if (lineItems.some(i => i.serviceType === 'embeddings')) recs.push('Batch embedding requests (up to 2,048 per call) — reduces API overhead by 50%+');
    if (lineItems.length > 3) recs.push('Consolidate providers — multi-provider billing complexity hidden costs (~10% overhead)');
    if (recs.length === 0) recs.push('Your current setup is optimized. Monitor price changes quarterly.');
    return recs;
  }, [lineItems, totalCost]);

  return (
    <AILabToolLayout
      breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
      title="Autonomous API Cost Estimator"
      slug="autonomous-api-cost-estimator"
      description="Calculate and optimize your AI API costs across OpenAI, Anthropic, Google, Meta, and Mistral. Get projections and savings recommendations."
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1.5 text-sm text-cyan-300">
            <span>📊</span> Multi-Provider Cost Calculator
          </div>
          <h2 className="text-2xl font-bold text-white">AI API Cost Estimator</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Input your API usage across providers and services. Get instant cost projections and
            personalized optimization recommendations.
          </p>
        </div>

        {/* Cost Summary */}
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Projected Monthly Cost</div>
              <div className="text-3xl font-black text-white mt-1">{formatDollars(totalCost * 1_000_000)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Optimized Cost (est.)</div>
              <div className="text-3xl font-black text-emerald-400 mt-1">{formatDollars(optimizedCost * 1_000_000)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Potential Savings</div>
              <div className="text-3xl font-black text-violet-400 mt-1">{formatDollars((totalCost - optimizedCost) * 1_000_000)}</div>
            </div>
          </div>
        </div>

        {/* Line Items */}
        {lineItems.map((item, idx) => (
          <div key={item.id} className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">Service Line #{idx + 1}</h3>
              {lineItems.length > 1 && (
                <button onClick={() => removeItem(item.id)} className="text-xs text-rose-400 hover:text-rose-300">✕ Remove</button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Provider</label>
                <select value={item.provider} onChange={e => updateItem(item.id, 'provider', e.target.value)} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2">
                  {API_PROVIDERS.map(p => <option key={p.id} value={p.id}>{p.icon} {p.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Service Type</label>
                <select value={item.serviceType} onChange={e => updateItem(item.id, 'serviceType', e.target.value)} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2">
                  {SERVICE_TYPES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Monthly API Calls</label>
                <input type="number" min={0} value={item.monthlyCalls} onChange={e => updateItem(item.id, 'monthlyCalls', parseInt(e.target.value) || 0)} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Avg Input Tokens</label>
                <input type="number" min={0} value={item.avgInputTokens} onChange={e => updateItem(item.id, 'avgInputTokens', parseInt(e.target.value) || 0)} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Avg Output Tokens</label>
                <input type="number" min={0} value={item.avgOutputTokens} onChange={e => updateItem(item.id, 'avgOutputTokens', parseInt(e.target.value) || 0)} className="w-full rounded-lg bg-slate-800 border border-slate-700 text-sm text-white px-3 py-2" />
              </div>
              <div className="flex items-end">
                <div className="text-sm text-cyan-300">
                  Subtotal: {formatDollars(
                    (() => {
                      const provider = API_PROVIDERS.find(p => p.id === item.provider)!;
                      const st = SERVICE_TYPES.find(s => s.id === item.serviceType)!;
                      const inC = (item.avgInputTokens * item.monthlyCalls * provider.pricing.input) / 1_000_000;
                      const outC = (item.avgOutputTokens * item.monthlyCalls * provider.pricing.output) / 1_000_000;
                      return (inC + outC) * st.multiplier;
                    })() * 1_000_000
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={addItem} className="w-full rounded-xl border-2 border-dashed border-slate-600 p-4 text-sm text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors">
          + Add Service Line
        </button>

        {/* Optimizations */}
        <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">🎯 Optimization Recommendations</h3>
            <button onClick={() => setShowOptimization(!showOptimization)} className="text-xs text-violet-400 hover:text-violet-300">
              {showOptimization ? 'Hide' : 'Show'} Details
            </button>
          </div>
          {showOptimization && (
            <ol className="space-y-2">
              {optimizations.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs">{i + 1}</span>
                  {r}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 text-center">
          <p className="text-sm text-slate-400 mb-3">Need help optimizing your AI infrastructure costs?</p>
          <p className="text-sm text-cyan-300">
            📧 kleber@ziontechgroup.com · 📱 +1 302 464 0950 · 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>

        {/* Related */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Related Tools</h4>
          <div className="flex flex-wrap gap-2">
            <Link href="/ai-lab/autonomous-api-profiler" className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-700/60 hover:text-cyan-300">API Profiler</Link>
            <Link href="/ai-lab/autonomous-api-test-generator" className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-700/60 hover:text-cyan-300">API Test Generator</Link>
          </div>
        </div>
      </div>
    </AILabToolLayout>
  );
}

export const API_COST_ESTIMATOR_TOOL = {
  id: 'autonomous-api-cost-estimator',
  slug: 'autonomous-api-cost-estimator',
  title: 'Autonomous API Cost Estimator',
  shortDescription: 'Calculate and optimize AI API costs across providers with projections and savings recommendations.',
  category: 'Cost Intelligence',
  status: 'experimental',
  href: '/ai-lab/autonomous-api-cost-estimator',
  badge: 'New',
};
