'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

interface LicenseCheck {
  id: string;
  category: string;
  question: string;
  options: { score: number; label: string }[];
}

interface AuditResult {
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  totalScore: number;
  maxScore: number;
  compliance: { area: string; status: 'Pass' | 'Warning' | 'Fail'; issue: string; fix: string }[];
  recommendations: string[];
}

const LICENSE_CHECKS: LicenseCheck[] = [
  {
    id: 'license1', category: 'Open Source',
    question: 'Do you maintain an up-to-date inventory of all open-source dependencies and their licenses?',
    options: [{ score: 0, label: 'No inventory' }, { score: 1, label: 'Partial, manual tracking' }, { score: 2, label: 'Full automated inventory' }],
  },
  {
    id: 'license2', category: 'Open Source',
    question: 'Can you identify all copyleft (GPL, AGPL, LGPL) licenses in your project?',
    options: [{ score: 0, label: 'Cannot identify' }, { score: 1, label: 'Manual review possible' }, { score: 2, label: 'Automated detection' }],
  },
  {
    id: 'license3', category: 'Open Source',
    question: 'Do you review license changes when dependencies are updated?',
    options: [{ score: 0, label: 'Never' }, { score: 1, label: 'Occasionally' }, { score: 2, label: 'Every update' }],
  },
  {
    id: 'license4', category: 'Commercial',
    question: 'Do you track commercial license expirations and usage limits?',
    options: [{ score: 0, label: 'No tracking' }, { score: 1, label: 'Spreadsheet tracking' }, { score: 2, label: 'Automated alerts' }],
  },
  {
    id: 'license5', category: 'Commercial',
    question: 'Are commercial software licenses validated for proper allocation and compliance?',
    options: [{ score: 0, label: 'No validation' }, { score: 1, label: 'Annual review' }, { score: 2, label: 'Continuous monitoring' }],
  },
  {
    id: 'license6', category: 'Compliance',
    question: 'Do you have a Software Bill of Materials (SBOM) for all shipped products?',
    options: [{ score: 0, label: 'No SBOM' }, { score: 1, label: 'Partial SBOM' }, { score: 2, label: 'Complete SBOM' }],
  },
  {
    id: 'license7', category: 'Compliance',
    question: 'Is there a process to review dual-licensed or multi-licensed components?',
    options: [{ score: 0, label: 'No process' }, { score: 1, label: 'Ad-hoc review' }, { score: 2, label: 'Standardized review' }],
  },
  {
    id: 'license8', category: 'Governance',
    question: 'Do you have an approved open-source license policy?',
    options: [{ score: 0, label: 'No policy' }, { score: 1, label: 'Informal guidelines' }, { score: 2, label: 'Formal policy' }],
  },
  {
    id: 'license9', category: 'Governance',
    question: 'Are license audits performed before releasing new software versions?',
    options: [{ score: 0, label: 'Never' }, { score: 1, label: 'Sometimes' }, { score: 2, label: 'Always' }],
  },
  {
    id: 'license10', category: 'Governance',
    question: 'Do you maintain a registry of all third-party SaaS subscriptions and their terms?',
    options: [{ score: 0, label: 'No registry' }, { score: 1, label: 'Basic tracking' }, { score: 2, label: 'Full lifecycle management' }],
  },
];

function calcRiskLevel(score: number, max: number): 'Low' | 'Medium' | 'High' | 'Critical' {
  const pct = score / max;
  if (pct >= 0.8) return 'Low';
  if (pct >= 0.5) return 'Medium';
  if (pct >= 0.3) return 'High';
  return 'Critical';
}

function riskColor(level: string) {
  switch (level) {
    case 'Low': return 'text-emerald-400';
    case 'Medium': return 'text-amber-400';
    case 'High': return 'text-orange-400';
    case 'Critical': return 'text-rose-400';
    default: return 'text-gray-400';
  }
}

export default function AutonomousLicenseAuditor() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentQ, setCurrentQ] = useState(0);

  const totalScore = useMemo(() => Object.values(answers).reduce((s, v) => s + v, 0), [answers]);
  const maxScore = LICENSE_CHECKS.length * 2;
  const pct = Math.round((totalScore / maxScore) * 100);
  const riskLevel = calcRiskLevel(totalScore, maxScore);

  const isComplete = Object.keys(answers).length === LICENSE_CHECKS.length;

  const compliance = useMemo(() => {
    const results: { area: string; status: 'Pass' | 'Warning' | 'Fail'; issue: string; fix: string }[] = [];
    if (!isComplete) return results;

    const osScore = LICENSE_CHECKS.filter(q => q.category === 'Open Source').reduce((s, q) => s + (answers[q.id] || 0), 0);
    const osMax = LICENSE_CHECKS.filter(q => q.category === 'Open Source').length * 2;
    const comScore = LICENSE_CHECKS.filter(q => q.category === 'Compliance').reduce((s, q) => s + (answers[q.id] || 0), 0);
    const comMax = LICENSE_CHECKS.filter(q => q.category === 'Compliance').length * 2;
    const govScore = LICENSE_CHECKS.filter(q => q.category === 'Governance').reduce((s, q) => s + (answers[q.id] || 0), 0);
    const govMax = LICENSE_CHECKS.filter(q => q.category === 'Governance').length * 2;
    const comScore2 = LICENSE_CHECKS.filter(q => q.category === 'Commercial').reduce((s, q) => s + (answers[q.id] || 0), 0);
    const comMax2 = LICENSE_CHECKS.filter(q => q.category === 'Commercial').length * 2;

    const check = (name: string, score: number, max: number) => {
      const r = score / max;
      if (r >= 0.7) results.push({ area: name, status: 'Pass', issue: 'Strong compliance', fix: 'Continue monitoring' });
      else if (r >= 0.4) results.push({ area: name, status: 'Warning', issue: 'Partial coverage', fix: 'Expand tracking and automate' });
      else results.push({ area: name, status: 'Fail', issue: 'Significant gaps', fix: 'Implement inventory system immediately' });
    };
    check('Open Source License Tracking', osScore, osMax);
    check('Commercial License Compliance', comScore2, comMax2);
    check('Compliance (SBOM)', comScore, comMax);
    check('Governance & Policy', govScore, govMax);
    return results;
  }, [answers, isComplete]);

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    if (!isComplete) return recs;
    if (riskLevel === 'Critical' || riskLevel === 'High') {
      recs.push('Implement automated license scanning (FOSSA, Snyk, or Dependabot)');
      recs.push('Create a Software Bill of Materials (SBOM) for all products');
      recs.push('Establish an open-source license review policy');
    } else if (riskLevel === 'Medium') {
      recs.push('Add license expiration alerts for commercial software');
      recs.push('Integrate license checks into CI/CD pipeline');
    } else {
      recs.push('Maintain current practices and schedule quarterly audits');
      recs.push('Consider AI-driven license compliance monitoring');
    }
    return recs;
  }, [answers, isComplete, riskLevel]);

  const handleNext = () => {
    if (currentQ < LICENSE_CHECKS.length - 1) setCurrentQ(currentQ + 1);
  };
  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  return (
    <AILabToolLayout
      breadcrumb={{ label: 'AI Lab', href: '/ai-lab' }}
      title="Autonomous License Auditor"
      slug="autonomous-license-auditor"
      description="Audit your software licenses — open-source, commercial, and compliance — with automated risk scoring, gap detection, and prioritized remediation steps."
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1.5 text-sm text-cyan-300">
            <span>🛡️</span> License Compliance Scanner
          </div>
          <h2 className="text-2xl font-bold text-white">Software License Audit</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Answer 10 targeted questions about your license tracking practices. Get an instant risk assessment
            with actionable remediation steps.
          </p>
        </div>

        {!started ? (
          <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-8 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: '📦', title: 'Open Source', desc: 'GPL, MIT, Apache, BSD tracking' },
                { icon: '💼', title: 'Commercial', desc: 'License expirations & usage limits' },
                { icon: '📋', title: 'Compliance', desc: 'SBOM generation & policy alignment' },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-700/50 bg-slate-800/40 p-4">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStarted(true)}
              className="rounded-full bg-cyan-500/20 border border-cyan-400/60 px-6 py-3 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/30"
            >
              Start License Audit →
            </button>
          </div>
        ) : isComplete ? (
          /* === RESULTS === */
          <div className="space-y-6">
            {/* Risk Score */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 text-center">
              <div className="text-5xl font-black text-white mb-1">{pct}%</div>
              <div className={`text-lg font-semibold ${riskColor(riskLevel)}`}>{riskLevel} Risk Level</div>
              <div className="mt-3 w-full bg-slate-800 rounded-full h-2.5">
                <div className="h-2.5 rounded-full transition-all transition-100" style={{ width: `${pct}%`, backgroundColor: riskLevel === 'Low' ? '#34d399' : riskLevel === 'Medium' ? '#fbbf24' : riskLevel === 'High' ? '#fb923c' : '#fb7185' }} />
              </div>
              <p className="text-xs text-slate-500 mt-2">Score: {totalScore}/{maxScore}</p>
            </div>

            {/* Compliance Matrix */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Compliance Area Results</h3>
              <div className="space-y-3">
                {compliance.map((c) => (
                  <div key={c.area} className="flex items-start justify-between gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/40">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.status === 'Pass' ? 'bg-emerald-500/10 text-emerald-400' : c.status === 'Warning' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'}`}>{c.status}</span>
                        <span className="text-sm font-medium text-white">{c.area}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{c.issue}</p>
                    </div>
                    <p className="text-xs text-cyan-300 whitespace-nowrap">→ {c.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Priority Recommendations</h3>
              <ol className="space-y-2">
                {recommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    {r}
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={() => { setStarted(false); setAnswers({}); setCurrentQ(0); }} className="rounded-full bg-slate-700/60 border border-slate-600 px-5 py-2.5 text-sm text-slate-300 hover:bg-slate-600/60">
                Retake Audit
              </button>
              <Link href="/ai-lab" className="rounded-full bg-cyan-500/20 border border-cyan-400/60 px-5 py-2.5 text-sm text-cyan-300 hover:bg-cyan-500/30">
                Back to AI Lab
              </Link>
              <Link href="/contact" className="rounded-full bg-violet-500/20 border border-violet-400/60 px-5 py-2.5 text-sm text-violet-300 hover:bg-violet-500/30">
                Contact for Help
              </Link>
            </div>
          </div>
        ) : (
          /* === QUESTION FLOW === */
          <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6">
            {/* Progress */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-slate-500">{currentQ + 1} of {LICENSE_CHECKS.length}</span>
              <span className="text-xs text-slate-500">{Object.keys(answers).length} answered</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mb-6">
              <div className="h-1.5 rounded-full bg-cyan-400" style={{ width: `${((currentQ + 1) / LICENSE_CHECKS.length) * 100}%` }} />
            </div>

            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-slate-700/50 px-2.5 py-0.5 text-xs font-medium text-cyan-300 mb-2">
                {LICENSE_CHECKS[currentQ].category}
              </span>
              <h3 className="text-lg font-medium text-white">{LICENSE_CHECKS[currentQ].question}</h3>
            </div>

            <div className="space-y-2 mb-6">
              {LICENSE_CHECKS[currentQ].options.map((opt, oi) => {
                const selected = answers[LICENSE_CHECKS[currentQ].id] === opt.score;
                return (
                  <button
                    key={oi}
                    onClick={() => setAnswers(prev => ({ ...prev, [LICENSE_CHECKS[currentQ].id]: opt.score }))}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ${selected ? 'border-cyan-400/60 bg-cyan-500/10 text-cyan-300' : 'border-slate-700/50 bg-slate-800/40 text-slate-300 hover:bg-slate-700/40'}`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between">
              <button onClick={handlePrev} disabled={currentQ === 0} className="rounded-lg px-4 py-2 text-sm text-slate-400 disabled:text-slate-700 hover:text-white">
                ← Previous
              </button>
              <button onClick={handleNext} disabled={answers[LICENSE_CHECKS[currentQ].id] === undefined} className="rounded-full bg-cyan-500/20 border border-cyan-400/60 px-5 py-2 text-sm text-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500/30">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-6 text-center">
          <p className="text-sm text-slate-400 mb-3">Need professional license compliance support?</p>
          <p className="text-sm text-cyan-300">
            📧 kleber@ziontechgroup.com · 📱 +1 302 464 0950 · 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>

        {/* Related Tools */}
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Related Tools</h4>
          <div className="flex flex-wrap gap-2">
            <Link href="/ai-lab/autonomous-compliance-auditor" className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-700/60 hover:text-cyan-300">Compliance Auditor</Link>
            <Link href="/ai-lab/autonomous-security-scanner" className="rounded-full bg-slate-800/60 border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:bg-slate-700/60 hover:text-cyan-300">Security Scanner</Link>
          </div>
        </div>
      </div>
    </AILabToolLayout>
  );
}

// Register this tool in ~/app/ai-lab/ai-lab-tools.ts
export const LICENSE_AUDITOR_TOOL = {
  id: 'autonomous-license-auditor',
  slug: 'autonomous-license-auditor',
  title: 'Autonomous License Auditor',
  shortDescription: 'Audit open-source, commercial, and compliance licenses with risk scoring and remediation.',
  category: 'Governance & Risk',
  status: 'experimental',
  href: '/ai-lab/autonomous-license-auditor',
  badge: 'New',
};
