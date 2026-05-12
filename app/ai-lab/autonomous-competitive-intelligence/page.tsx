'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type CompetitorProfile = {
  name: string;
  category: string;
  strengths: string[];
  weaknesses: string[];
  threatLevel: string;
  differentiationScore: number;
  marketShare: string;
};

const SAMPLE_COMPETITORS: Record<string, CompetitorProfile[]> = {
  'AI Services': [
    {
      name: 'Competitor A',
      category: 'AI Platform',
      strengths: ['Large model library', 'Easy onboarding'],
      weaknesses: ['No autonomous agents', 'Limited governance'],
      threatLevel: 'Medium',
      differentiationScore: 72,
      marketShare: '28%',
    },
    {
      name: 'Competitor B',
      category: 'Cloud AI',
      strengths: ['Enterprise scale', '24/7 support'],
      weaknesses: ['High cost per token', 'Vendor lock-in'],
      threatLevel: 'High',
      differentiationScore: 55,
      marketShare: '34%',
    },
    {
      name: 'Competitor C',
      category: 'Open Source',
      strengths: ['Free tier', 'Community support'],
      weaknesses: ['No SLA', 'Slow innovation'],
      threatLevel: 'Low',
      differentiationScore: 89,
      marketShare: '12%',
    },
  ],
  'Cloud Infrastructure': [
    {
      name: 'CloudAlpha',
      category: 'Enterprise Cloud',
      strengths: ['Global regions', 'Strong compliance'],
      weaknesses: ['Complex pricing', 'Steep learning curve'],
      threatLevel: 'High',
      differentiationScore: 58,
      marketShare: '40%',
    },
    {
      name: 'NimbusSoft',
      category: 'Startup Cloud',
      strengths: ['Simple setup', 'Good free tier'],
      weaknesses: ['Limited enterprise features', 'Small support team'],
      threatLevel: 'Low',
      differentiationScore: 85,
      marketShare: '8%',
    },
  ],
};

const THREAT_COLORS: Record<string, string> = {
  Low: 'text-emerald-300',
  Medium: 'text-amber-300',
  High: 'text-rose-300',
};

export default function AutonomousCompetitiveIntelligence() {
  const [industry, setIndustry] = useState('AI Services');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const competitors = useMemo(() => SAMPLE_COMPETITORS[industry] || [], [industry]);
  const avgDiff = useMemo(
    () => competitors.reduce((sum, c) => sum + c.diffentiationScore, 0) / (competitors.length || 1),
    [competitors]
  );

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  const industries = Object.keys(SAMPLE_COMPETITORS);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 min-h-screen">
      <AILabToolLayout
        breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
        title="Autonomous Competitive Intelligence"
        slug="autonomous-competitive-intelligence"
        description="Scan, profile, and score your competitive landscape. Zion's agents simulate rival strategies and surface defensible positioning."
      >
        <section>
          <div className="mb-6">
            <label htmlFor="industry" className="block text-xs font-medium text-slate-300 mb-2">
              Industry to analyze
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full rounded-full bg-cyan-500/20 border border-cyan-400/60 px-5 py-3 text-sm font-semibold text-cyan-50 hover:bg-cyan-500/30 disabled:opacity-50 transition"
          >
            {isAnalyzing ? 'Scanning competitive landscape...' : 'Run Competitive Scan'}
          </button>

          {analyzed && competitors.length > 0 && (
            <>
              {/* Summary Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Competitors found</p>
                  <p className="mt-1 text-2xl font-bold text-cyan-300">{competitors.length}</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Avg. differentiation score</p>
                  <p className="mt-1 text-2xl font-bold text-violet-300">{Math.round(avgDiff)}%</p>
                </div>
              </div>

              {/* Competitor Profiles */}
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-200">Competitor Profiles</h3>
                {competitors.map((c, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-semibold text-slate-100">{c.name}</h4>
                      <span className={`text-xs font-semibold ${THREAT_COLORS[c.threatLevel] || 'text-slate-300'}`}>
                        Threat: {c.threatLevel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{c.category} • Est. market share: {c.marketShare}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-emerald-400/80 mb-1">Strengths</p>
                        <ul className="space-y-1">
                          {c.strengths.map((s, i) => (
                            <li key={i} className="text-[13px] text-slate-300 flex items-start gap-1.5">
                              <span className="text-emerald-400 mt-0.5">&#9650;</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-rose-400/80 mb-1">Weaknesses</p>
                        <ul className="space-y-1">
                          {c.weaknesses.map((w, i) => (
                            <li key={i} className="text-[13px] text-slate-300 flex items-start gap-1.5">
                              <span className="text-rose-400 mt-0.5">&#9660;</span>
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Differentiation score</span>
                        <span>{c.differentiationScore}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all"
                          style={{ width: `${c.differentiationScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Recommendations */}
              <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
                <h3 className="text-sm font-semibold text-slate-200 mb-3">Strategic Recommendations</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&#8226;</span>
                    Focus on autonomous agent differentiation — no competitor offers full self-healing pipelines.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&#8226;</span>
                    Target the underserved mid-market segment: high budget, low vendor lock-in tolerance.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&#8226;</span>
                    Build transparent pricing model to contrast with Competitor A's hidden fees.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&#8226;</span>
                    Invest in governance & compliance tooling — a gap across all profiled competitors.
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ai-services/competitive-intelligence"
                  className="rounded-full border border-cyan-300/70 bg-cyan-400/20 px-4 py-2 text-xs font-semibold text-cyan-50 hover:bg-cyan-400/30"
                >
                  Open competitive intelligence service
                </Link>
                <Link
                  href="/ai-lab/autonomous-opportunity-radar"
                  className="rounded-full border border-violet-300/70 bg-violet-400/20 px-4 py-2 text-xs font-semibold text-violet-50 hover:bg-violet-400/30"
                >
                  Open opportunity radar
                </Link>
              </div>
            </>
          )}
        </section>
      </AILabToolLayout>
    </div>
  );
}
