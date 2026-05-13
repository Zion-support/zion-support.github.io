'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type KnowledgeDoc = {
  id: string;
  title: string;
  domain: 'product' | 'support' | 'governance' | 'engineering';
  freshness: number;
  relevance: number;
  quality: number;
};

const SAMPLE_DOCS: KnowledgeDoc[] = [
  {
    id: 'doc-product-roadmap',
    title: 'Q2 Product Roadmap',
    domain: 'product',
    freshness: 82,
    relevance: 88,
    quality: 79,
  },
  {
    id: 'doc-support-playbook',
    title: 'Customer Support Playbook',
    domain: 'support',
    freshness: 76,
    relevance: 84,
    quality: 86,
  },
  {
    id: 'doc-governance-controls',
    title: 'AI Governance Controls',
    domain: 'governance',
    freshness: 90,
    relevance: 73,
    quality: 92,
  },
  {
    id: 'doc-engineering-runbook',
    title: 'Platform Reliability Runbook',
    domain: 'engineering',
    freshness: 70,
    relevance: 91,
    quality: 81,
  },
];

function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function domainWeight(domain: KnowledgeDoc['domain']) {
  switch (domain) {
    case 'product':
      return 1.05;
    case 'support':
      return 1.0;
    case 'governance':
      return 0.96;
    case 'engineering':
      return 1.08;
    default:
      return 1;
  }
}

export default function AutonomousRagKnowledgeWorkspacePage() {
  const [queryComplexity, setQueryComplexity] = useState(64);
  const [retrievalDepth, setRetrievalDepth] = useState(58);
  const [rerankQuality, setRerankQuality] = useState(66);
  const [guardrailStrength, setGuardrailStrength] = useState(72);

  const metrics = useMemo(() => {
    const rankedDocs = SAMPLE_DOCS.map((doc) => {
      const base =
        doc.relevance * 0.5 + doc.freshness * 0.2 + doc.quality * 0.3 + retrievalDepth * 0.15 + rerankQuality * 0.2;
      const weightedScore = clamp(base * domainWeight(doc.domain) - queryComplexity * 0.12);
      return { ...doc, weightedScore };
    }).sort((a, b) => b.weightedScore - a.weightedScore);

    const topCitations = rankedDocs.slice(0, 3);
    const citationConfidence = clamp(
      topCitations.reduce((sum, doc) => sum + doc.weightedScore, 0) / Math.max(topCitations.length, 1),
    );
    const sourceDiversity = clamp(new Set(topCitations.map((doc) => doc.domain)).size * 28);
    const answerSafety = clamp(guardrailStrength * 0.6 + (100 - queryComplexity) * 0.15 + rerankQuality * 0.25);
    const ragReadiness = clamp(citationConfidence * 0.45 + sourceDiversity * 0.2 + answerSafety * 0.35);

    const recommendation =
      ragReadiness >= 80
        ? 'Ready for production pilot with citation-first responses and continuous source monitoring.'
        : ragReadiness >= 65
          ? 'Good baseline: increase retrieval depth and source freshness for higher trust.'
          : 'Strengthen reranking and guardrails before enabling user-facing autonomous responses.';

    return { rankedDocs, topCitations, citationConfidence, sourceDiversity, answerSafety, ragReadiness, recommendation };
  }, [guardrailStrength, queryComplexity, rerankQuality, retrievalDepth]);

  return (
    <div className="bg-slate-950/95">
      <AILabToolLayout
        title="Autonomous RAG Knowledge Workspace"
        subtitle="Simulate retrieval-augmented response quality with deterministic citation confidence, diversity, and safety scoring."
      >
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold text-slate-100">Retrieval configuration</h2>
            <div className="mt-4 space-y-4 text-xs">
              <label className="block">
                <span className="mb-1 block text-slate-300">Query complexity: {queryComplexity}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={queryComplexity}
                  onChange={(event) => setQueryComplexity(Number(event.target.value))}
                  className="w-full accent-cyan-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Retrieval depth: {retrievalDepth}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={retrievalDepth}
                  onChange={(event) => setRetrievalDepth(Number(event.target.value))}
                  className="w-full accent-emerald-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Rerank quality: {rerankQuality}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={rerankQuality}
                  onChange={(event) => setRerankQuality(Number(event.target.value))}
                  className="w-full accent-indigo-400"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-slate-300">Guardrail strength: {guardrailStrength}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={guardrailStrength}
                  onChange={(event) => setGuardrailStrength(Number(event.target.value))}
                  className="w-full accent-amber-400"
                />
              </label>
            </div>

            <div className="mt-5 rounded-lg border border-slate-800 bg-slate-950/70 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">Top citations</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-200">
                {metrics.topCitations.map((doc) => (
                  <li key={doc.id} className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
                    <p className="font-medium">{doc.title}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {doc.domain} · score {doc.weightedScore}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-200">
              Knowledge quality snapshot
            </p>
            <h2 className="mt-1 text-xl font-bold text-cyan-50">RAG readiness model</h2>
            <p className="mt-3 text-sm text-cyan-100">{metrics.recommendation}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Citation confidence</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">{metrics.citationConfidence}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Source diversity</p>
                <p className="mt-1 text-2xl font-bold text-emerald-300">{metrics.sourceDiversity}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">Answer safety</p>
                <p className="mt-1 text-2xl font-bold text-amber-300">{metrics.answerSafety}</p>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-400">RAG readiness</p>
                <p className="mt-1 text-2xl font-bold text-violet-300">{metrics.ragReadiness}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/ai-services/ai-rag-knowledge-systems"
                className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-xs font-semibold text-cyan-50 hover:bg-cyan-400/30"
              >
                Open RAG services
              </Link>
              <Link
                href="/ai-lab/autonomous-backlog-prioritizer"
                className="rounded-full border border-emerald-300/70 bg-emerald-400/20 px-4 py-2 text-xs font-semibold text-emerald-50 hover:bg-emerald-400/30"
              >
                Prioritize implementation backlog
              </Link>
            </div>
          </section>
        </div>
      </AILabToolLayout>
    </div>
  );
}
