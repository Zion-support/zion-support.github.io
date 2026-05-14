'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Check, ChevronLeft, ChevronRight, ArrowRight, ExternalLink, Globe, Lock, FileText, Mail, Phone, MapPin, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  text: string;
  description: string;
  affects: { gdpr: boolean; ccpa: boolean; lgpd: boolean };
}

const questions: Question[] = [
  { id: 'consent', text: 'Do you obtain explicit consent before collecting personal data?', description: 'Users must actively opt-in, not just have pre-checked boxes.', affects: { gdpr: true, ccpa: true, lgpd: true } },
  { id: 'privacy-policy', text: 'Do you have a clear, accessible privacy policy?', description: 'Must explain what data you collect, why, and how to exercise rights.', affects: { gdpr: true, ccpa: true, lgpd: true } },
  { id: 'data-subject-rights', text: 'Can users request deletion/export of their data easily?', description: 'Users must be able to access, correct, or delete their data.', affects: { gdpr: true, ccpa: true, lgpd: true } },
  { id: 'data-breach-plan', text: 'Do you have a documented data breach response plan?', description: 'GDPR requires 72-hour notification; other laws have similar requirements.', affects: { gdpr: true, ccpa: true, lgpd: true } },
  { id: 'data-processing-records', text: 'Do you maintain records of data processing activities?', description: 'Documentation of what data you process, why, and who has access.', affects: { gdpr: true, ccpa: false, lgpd: true } },
  { id: 'cross-border', text: 'Do you transfer personal data across international borders?', description: 'GDPR restricts transfers outside EU/EEA without safeguards.', affects: { gdpr: true, ccpa: false, lgpd: false } },
  { id: 'dpia', text: 'Have you conducted Data Protection Impact Assessments?', description: 'Required for high-risk processing (profiling, sensitive data, etc.).', affects: { gdpr: true, ccpa: false, lgpd: true } },
  { id: 'do-not-sell', text: 'Do you offer a "Do Not Sell My Info" option?', description: 'CCPA requires an easy opt-out for data sales/sharing.', affects: { gdpr: false, ccpa: true, lgpd: false } },
  { id: 'children-consent', text: 'Do you have age verification and parental consent mechanisms?', description: 'GDPR: 13-16; CCPA: 13-15; LGPD: under 18.', affects: { gdpr: true, ccpa: true, lgpd: true } },
  { id: 'dpo', text: 'Have you appointed a Data Protection Officer?', description: 'Required under GDPR for organizations processing sensitive data at scale.', affects: { gdpr: true, ccpa: false, lgpd: true } },
];

function getResult(score: number, max: number) {
  const pct = Math.round((score / max) * 100);
  if (pct >= 80) return { level: 'Strong', color: 'text-green-400', bar: 'bg-green-500', bg: 'bg-green-500/10', border: 'border-green-500/30' };
  if (pct >= 50) return { level: 'Partial', color: 'text-yellow-400', bar: 'bg-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' };
  return { level: 'Weak', color: 'text-red-400', bar: 'bg-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30' };
}

export default function DataPrivacyQuickCheck() {
  const [step, setStep] = useState<'input' | 'results'>('input');
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allAnswered = useMemo(() => Object.keys(answers).length === questions.length, [answers]);

  const results = useMemo(() => {
    const frameworks = [
      { key: 'gdpr', name: 'GDPR', icon: <Globe className="w-5 h-5" />, country: 'European Union' },
      { key: 'ccpa', name: 'CCPA', icon: <Lock className="w-5 h-5" />, country: 'California, USA' },
      { key: 'lgpd', name: 'LGPD', icon: <Shield className="w-5 h-5" />, country: 'Brazil' },
    ];
    
    return frameworks.map(fw => {
      const relevant = questions.filter(q => q.affects[fw.key as keyof Question['affects']]);
      const yes = relevant.filter(q => answers[q.id]).length;
      const total = relevant.length;
      const gaps = relevant.filter(q => !answers[q.id]);
      return {
        ...fw,
        score: yes,
        total,
        pct: total > 0 ? Math.round((yes / total) * 100) : 0,
        gaps,
        ...getResult(yes, total),
      };
    });
  }, [answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4">
            <Shield className="w-4 h-4" />
            Privacy Compliance Check
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Data Privacy Quick-Check</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Assess your compliance with GDPR, CCPA, and LGPD. Answer 10 questions and get an instant compliance score per regulation.
          </p>
        </motion.div>

        {step === 'input' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="space-y-3 mb-8">
              {questions.map((q, i) => {
                const answered = answers[q.id];
                return (
                  <div key={q.id} className={`bg-slate-800/50 border rounded-xl p-5 transition-all ${answered !== undefined ? (answered ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-700') : 'border-slate-700/50'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-emerald-400 text-xs font-mono">{i + 1}.</span>
                          <h3 className="text-white font-medium">{q.text}</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{q.description}</p>
                        <div className="flex gap-2">
                          {Object.entries(q.affects).filter(([, v]) => v).map(([k]) => (
                            <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">{k.toUpperCase()}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button onClick={() => setAnswers(p => ({ ...p, [q.id]: true }))}
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${answers[q.id] === true ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'border-slate-600 text-slate-600 hover:border-emerald-500/50'}`}>
                          ✓
                        </button>
                        <button onClick={() => setAnswers(p => ({ ...p, [q.id]: false }))}
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${answers[q.id] === false ? 'bg-red-500/20 border-red-500 text-red-400' : 'border-slate-600 text-slate-600 hover:border-red-500/50'}`}>
                          ✗
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <button onClick={() => setStep('results')} disabled={!allAnswered}
                className={`px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto ${allAnswered ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>
                <TrendingUp className="w-5 h-5" /> View Compliance Report
              </button>
              <p className="text-slate-500 text-xs mt-2">{Object.keys(answers).length}/{questions.length} answered</p>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {results.map(r => (
                <div key={r.key} className={`bg-slate-800/50 border ${r.border} rounded-xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={r.color}>{r.icon}</div>
                    <div>
                      <h3 className="text-white font-bold">{r.name}</h3>
                      <p className="text-slate-400 text-xs">{r.country}</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 mb-2">
                    <div className={`h-3 rounded-full ${r.bar} transition-all`} style={{ width: `${r.pct}%` }} />
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-2xl font-bold ${r.color}`}>{r.pct}%</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${r.bg} ${r.color}`}>{r.level}</span>
                  </div>
                  {r.gaps.length > 0 && (
                    <div>
                      <p className="text-red-400 text-xs font-semibold mb-1">Gaps remaining:</p>
                      <ul className="space-y-1">{r.gaps.map(g => (
                        <li key={g.id} className="text-slate-400 text-xs flex items-start gap-1"><AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />{g.text}</li>
                      ))}</ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-blue-400" /> Zion&apos;s Recommended Actions</h3>
              <ul className="space-y-4">
                {results.some(r => r.pct < 80) && (
                  <>
                    <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /><div><p className="text-white font-medium">Privacy Policy & Compliance Audit</p><p className="text-slate-400 text-sm">We&apos;ll review your current practices and bring you into compliance with all applicable regulations.</p><Link href="/ai-services/ai-compliance" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: AI Compliance & Governance <ExternalLink className="w-3 h-3" /></Link></div></li>
                    <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" /><div><p className="text-white font-medium">Security Controls & Data Protection</p><p className="text-slate-400 text-sm">Implement encryption, access controls, and automated breach detection to protect personal data.</p><Link href="/it-services/managed-soc-threat-intelligence" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Managed SOC & Threat Intelligence <ExternalLink className="w-3 h-3" /></Link></div></li>
                  </>
                )}
                {results.every(r => r.pct >= 80) && (
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" /><div><p className="text-white font-medium">Great baseline! Consider continuous compliance monitoring.</p><p className="text-slate-400 text-sm">Automated monitoring ensures you stay compliant as regulations evolve.</p><Link href="/it-services/enterprise-backup-dr" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Compliance Monitoring Solutions <ExternalLink className="w-3 h-3" /></Link></div></li>
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Need Help Achieving Full Compliance?</h3>
              <p className="text-slate-400 mb-6">Zion Tech Group provides end-to-end privacy compliance consulting and implementation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">Free Privacy Audit <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse Services</Link>
              </div>
              <div className="text-slate-400 text-sm space-y-1">
                <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>

            <div className="text-center">
              <button onClick={() => { setStep('input'); setAnswers({}); }} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                <ChevronLeft className="w-4 h-4" /> Retake Assessment
              </button>
            </div>
          </motion.div>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free compliance check by Zion Tech Group — for guidance purposes only, not legal advice</p>
        </div>
      </div>
    </div>
  );
}
