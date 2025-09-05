import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function AIEvaluationOrchestratorPage() {
  return (
    <>
      <Head>
        <title>AI Evaluation Orchestrator | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Define evals, run batch tests, score prompts and models, and prevent regressions.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-evaluation-orchestrator&quot; />
      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
          <header className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>AI Evaluation Orchestrator</h1>
            <p className=&quot;text-gray-300 text-lg&quot;>Automated LLM and prompt evaluations with dashboards, baselines, and CI gates.</p>
          </header>
          <section className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {[
              'Create datasets and scoring functions',
              'Batch runs across models and versions',
              'Track regressions and enforce quality gates',
              'Integrations: OpenAI, Anthropic, Groq, OpenRouter, Langfuse',
              'Export reports, share baselines, and diff results',
              'From $199/mo'
            ].map((f) => (
              <div key={f} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200&quot;>{f}</div>
            ))}
          </section>
          <div className=&quot;text-center&quot;>
            <Button href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>Talk to Sales</Button>
          </div>
        </div>
      </div>
    </>
  );
}