'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type FeatureGap = {
  name: string;
  category: string;
  demand: number;
  complexity: number;
  roi: number;
  reason: string;
  existingCompetitors: number;
  implementationEffort: 'Low' | 'Medium' | 'High';
};

const SECTOR_GAPS: Record<string, FeatureGap[]> = {
  'AI & Automation': [
    {
      name: 'AI-Powered Knowledge Base',
      category: 'AI Features',
      demand: 92,
      complexity: 45,
      roi: 88,
      reason: '78% of buyers want self-service documentation with AI search. Only 12% of competitors offer it.',
      existingCompetitors: 1,
      implementationEffort: 'Medium',
    },
    {
      name: 'Automated Code Review Assistant',
      category: 'DevOps',
      demand: 85,
      complexity: 60,
      roi: 79,
      reason: 'Teams spending 6+ hrs/week on reviews. AI can cut this by 60%.',
      existingCompetitors: 3,
      implementationEffort: 'High',
    },
    {
      name: 'Intelligent Chat Routing',
      category: 'Customer Experience',
      demand: 78,
      complexity: 35,
      roi: 82,
      reason: 'AI can classify intent and route to correct department instantly.',
      existingCompetitors: 2,
      implementationEffort: 'Low',
    },
  ],
  'Cloud & Infrastructure': [
    {
      name: 'Real-Time Cost Optimization Dashboard',
      category: 'Cloud Management',
      demand: 95,
      complexity: 50,
      roi: 91,
      reason: 'Companies waste average 30% on cloud. Real-time detection + auto-scaling saves $50K+/month.',
      existingCompetitors: 2,
      implementationEffort: 'Medium',
    },
    {
      name: 'Multi-Cloud Failover Orchestrator',
      category: 'Reliability',
      demand: 82,
      complexity: 75,
      roi: 86,
      reason: 'Zero-downtime requirement growing. Automated failover between AWS/GCP/Azure.',
      existingCompetitors: 1,
      implementationEffort: 'High',
    },
    {
      name: 'Infrastructure-as-Code Generator',
      category: 'Automation',
      demand: 74,
      complexity: 55,
      roi: 73,
      reason: 'AI converts architecture diagrams to Terraform/CloudFormation automatically.',
      existingCompetitors: 3,
      implementationEffort: 'Medium',
    },
  ],
  'Cybersecurity': [
    {
      name: 'Autonomous Threat Hunting',
      category: 'Security',
      demand: 90,
      complexity: 70,
      roi: 93,
      reason: 'AI that proactively hunts threats before they materialize. SOC teams understaffed by 40%.',
      existingCompetitors: 2,
      implementationEffort: 'High',
    },
    {
      name: 'Compliance Auto-Verifier',
      category: 'Governance',
      demand: 87,
      complexity: 60,
      roi: 85,
      reason: 'Continuous SOC2/GDPR/HIPAA compliance checking. Saves 200+ audit hours/year.',
      existingCompetitors: 3,
      implementationEffort: 'Medium',
    },
    {
      name: 'Zero-Trust Access Manager',
      category: 'Identity',
      demand: 80,
      complexity: 50,
      roi: 78,
      reason: 'AI-driven access decisions based on behavior analytics, not static rules.',
      existingCompetitors: 4,
      implementationEffort: 'Medium',
    },
  ],
};

const EFFORT_COLORS: Record<string, string> = {
  Low: 'text-emerald-300',
  Medium: 'text-amber-300',
  High: 'text-rose-300',
};

export default function AutonomousFeatureGapAnalyzer() {
  const [sector, setSector] = useState('AI & Automation');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const gaps = useMemo(() => SECTOR_GAPS[sector] || [], [sector]);

  const topOpportunity = useMemo(() => {
    if (gaps.length === 0) return null;
    return [...gaps].sort((a, b) => b.roi - a.roi)[0];
  }, [gaps]);

  const avgDemand = useMemo(
    () => Math.round(gaps.reduce((s, g) => s + g.demand, 0) / (gaps.length || 1)),
    [gaps]
  );

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 min-h-screen">
      <AILabToolLayout
        breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
        title="Autonomous Feature Gap Analyzer"
        slug="autonomous-feature-gap-analyzer"
        description="Detect missing high-value features your competitors lack. Prioritize by ROI, demand, and implementation effort."
      >
        <section>
          <div className="mb-6">
            <label htmlFor="sector" className="block text-xs font-medium text-slate-300 mb-2">
              Industry sector to analyze
            </label>
            <select
              id="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-sky-400 focus:outline-none"
            >
              {Object.keys(SECTOR_GAPS).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full rounded-full bg-sky-500/20 border border-sky-400/60 px-5 py-3 text-sm font-semibold text-sky-50 hover:bg-sky-500/30 disabled:opacity-50 transition"
          >
            {isAnalyzing ? 'Scanning market for missing features...' : 'Run Feature Gap Analysis'}
          </button>

          {analyzed && gaps.length > 0 && (
            <>
              {/* Summary Cards */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Feature gaps found</p>
                  <p className="mt-1 text-2xl font-bold text-sky-300">{gaps.length}</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Avg. market demand</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-300">{avgDemand}%</p>
                </div>
                <div className="rounded-lg border border-slate-700/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">Top ROI opportunity</p>
                  <p className="mt-1 text-2xl font-bold text-violet-300">{topOpportunity?.roi}%</p>
                </div>
              </div>

              {/* Top Recommendation */}
              {topOpportunity && (
                <div className="mt-6 rounded-xl border border-violet-400/30 bg-violet-400/10 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-violet-300 font-semibold mb-1">🏆 Top Recommendation</p>
                  <h4 className="text-base font-bold text-slate-50">{topOpportunity.name}</h4>
                  <p className="text-sm text-slate-300 mt-1">{topOpportunity.reason}</p>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500">Demand: </span>
                      <span className="text-emerald-300 font-semibold">{topOpportunity.demand}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500">ROI: </span>
                      <span className="text-violet-300 font-semibold">{topOpportunity.roi}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Effort: </span>
                      <span className={`font-semibold ${EFFORT_COLORS[topOpportunity.implementationEffort]}`}>
                        {topOpportunity.implementationEffort}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* All Gaps */}
              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-200">All Feature Opportunities</h3>
                {gaps.map((g, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-slate-100">{g.name}</h4>
                      <span className={`text-xs font-semibold ${EFFORT_COLORS[g.implementationEffort]}`}>
                        {g.implementationEffort} effort
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{g.category} • {g.existingCompetitors} competitor{g.existingCompetitors !== 1 ? 's' : ''} offer this</p>
                    <p className="text-xs text-slate-300 mb-3">{g.reason}</p>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                          <span>Demand</span><span>{g.demand}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800">
                          <div className="h-1.5 rounded-full bg-emerald-400" style={{ width: `${g.demand}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                          <span>Complexity</span><span>{g.complexity}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800">
                          <div className="h-1.5 rounded-full bg-amber-400" style={{ width: `${g.complexity}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                          <span>ROI</span><span>{g.roi}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800">
                          <div className="h-1.5 rounded-full bg-violet-400" style={{ width: `${g.roi}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Items */}
              <div className="mt-6 rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
                <h3 className="text-sm font-semibold text-slate-200 mb-3">Recommended Action Plan</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">1.</span>
                    Start with {topOpportunity?.implementationEffort === 'Low' ? 'quick wins' : topOpportunity?.implementationEffort === 'Medium' ? 'medium-complexity features' : 'high-impact features'} —
                    build <strong>{topOpportunity?.name}</strong> first (ROI: {topOpportunity?.roi}%).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">2.</span>
                    Target sectors with low competitor saturation — {sector} has gaps in {gaps.filter(g => g.existingCompetitors <= 2).length} areas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">3.</span>
                    Use Autonomous Competitive Intelligence to validate positioning before committing to build.
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/ai-lab/autonomous-competitive-intelligence"
                  className="rounded-full border border-sky-300/70 bg-sky-400/20 px-4 py-2 text-xs font-semibold text-sky-50 hover:bg-sky-400/30"
                >
                  Open competitive intelligence
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
