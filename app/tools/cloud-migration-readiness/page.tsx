'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Server, Database, Shield, Clock, DollarSign, ArrowRight, ChevronLeft, Check, AlertTriangle, Mail, Phone, MapPin, ExternalLink, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  text: string;
  weight: number;
  options: { label: string; score: number; description: string }[];
}

interface Assessment {
  section: string;
  questions: Question[];
}

const assessment: Assessment[] = [
  {
    section: 'Technical Readiness',
    questions: [
      { id: 'arch', text: 'How well-documented is your current architecture?', weight: 3, options: [
        { label: 'None/Ad-hoc', score: 1, description: 'No diagrams or documentation' },
        { label: 'Basic', score: 3, description: 'Some diagrams, outdated' },
        { label: 'Current', score: 5, description: 'Architecture diagrams up-to-date' },
        { label: 'Automated', score: 7, description: 'Auto-discovered and maintained' },
      ]},
      { id: 'dependencies', text: 'How complex are your application dependencies?', weight: 3, options: [
        { label: 'Monolithic', score: 2, description: 'Single app with many interdependencies' },
        { label: 'Coupled', score: 3, description: 'Some modularity but tight coupling' },
        { label: 'Microservices', score: 5, description: 'Service-oriented with APIs' },
        { label: 'Serverless', score: 7, description: 'Cloud-native serverless architecture' },
      ]},
      { id: 'cloud-exp', text: 'Does your team have cloud experience?', weight: 2, options: [
        { label: 'None', score: 1, description: 'Only on-premise experience' },
        { label: 'Limited', score: 3, description: 'Some team members have cloud skills' },
        { label: 'Moderate', score: 5, description: 'Core team has cloud experience' },
        { label: 'Expert', score: 7, description: 'Team certified in cloud technologies' },
      ]},
    ],
  },
  {
    section: 'Data Readiness',
    questions: [
      { id: 'data-volume', text: 'What is your total data volume?', weight: 2, options: [
        { label: '< 100 GB', score: 7, description: 'Minimal data, easy migration' },
        { label: '100 GB - 1 TB', score: 5, description: 'Manageable with planning' },
        { label: '1 TB - 10 TB', score: 3, description: 'Requires careful bandwidth planning' },
        { label: '> 10 TB', score: 2, description: 'Major transfer project needed' },
      ]},
      { id: 'data-quality', text: 'How would you rate data quality and consistency?', weight: 3, options: [
        { label: 'Poor', score: 1, description: 'Duplicates, inconsistencies common' },
        { label: 'Fair', score: 3, description: 'Some cleanup needed' },
        { label: 'Good', score: 5, description: 'Well-structured with governance' },
        { label: 'Excellent', score: 7, description: 'Automated quality monitoring' },
      ]},
    ],
  },
  {
    section: 'Security & Compliance',
    questions: [
      { id: 'compliance', text: 'Do you have specific compliance requirements?', weight: 3, options: [
        { label: 'None', score: 7, description: 'No regulated data' },
        { label: 'Basic', score: 5, description: 'Standard security practices' },
        { label: 'Industry', score: 3, description: 'HIPAA, PCI, or SOC 2 required' },
        { label: 'Government', score: 1, description: 'FedRAMP, ITAR, or similar' },
      ]},
      { id: 'backup-dr', text: 'What is your current backup and DR state?', weight: 2, options: [
        { label: 'None/Manual', score: 1, description: 'No automated backup or DR plan' },
        { label: 'Basic', score: 3, description: 'Daily backups, no DR testing' },
        { label: 'Good', score: 5, description: 'Automated backups, periodic DR tests' },
        { label: 'Enterprise', score: 7, description: 'Real-time replication, automated failover' },
      ]},
    ],
  },
  {
    section: 'Business Readiness',
    questions: [
      { id: 'budget', text: 'Is migration budget allocated?', weight: 3, options: [
        { label: 'No budget', score: 1, description: 'No funding secured' },
        { label: 'Partial', score: 3, description: 'Some budget, but incomplete' },
        { label: 'Approved', score: 5, description: 'Full budget approved' },
        { label: 'Reserved', score: 7, description: 'Budget with 20% contingency' },
      ]},
      { id: 'timeline', text: 'What is your target migration timeline?', weight: 2, options: [
        { label: '< 3 months', score: 2, description: 'Very aggressive, high risk' },
        { label: '3-6 months', score: 3, description: 'Fast but manageable for simple apps' },
        { label: '6-12 months', score: 5, description: 'Standard enterprise timeline' },
        { label: '12+ months', score: 7, description: 'Phased approach, lowest risk' },
      ]},
    ],
  },
];

export default function CloudMigrationReadiness() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState<'assess' | 'report'>('assess');

  const allAnswered = Object.keys(answers).length === assessment.reduce((n, s) => n + s.questions.length, 0);

  const scores = useMemo(() => {
    const sections = assessment.map(s => ({
      section: s.section,
      maxScore: s.questions.reduce((n, q) => n + (q.weight * 7), 0),
      score: s.questions.reduce((n, q) => n + (q.weight * (answers[q.id] || 0)), 0),
    }));

    const totalMax = sections.reduce((n, s) => n + s.maxScore, 0);
    const totalScore = sections.reduce((n, s) => n + s.score, 0);
    const pct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

    const readiness = pct >= 80 ? 'Ready' : pct >= 60 ? 'Almost Ready' : pct >= 40 ? 'Needs Preparation' : 'Not Ready';
    const color = pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-blue-400' : pct >= 40 ? 'text-yellow-400' : 'text-red-400';
    const barColor = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-blue-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500';

    const weakSections = sections.filter(s => s.maxScore > 0 && Math.round((s.score / s.maxScore) * 100) < 50);
    const strongSections = sections.filter(s => s.maxScore > 0 && Math.round((s.score / s.maxScore) * 100) >= 70);

    return { sections, totalScore, totalMax, pct, readiness, color, barColor, weakSections, strongSections };
  }, [answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
            <Cloud className="w-4 h-4" />
            Migration Readiness Assessment
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Cloud Migration Readiness Scorecard</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Assess your infrastructure readiness for cloud migration and get a personalized roadmap.
          </p>
        </motion.div>

        {step === 'assess' ? (
          <div className="space-y-6">
            {assessment.map(sec => (
              <div key={sec.section} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  {sec.section === 'Technical Readiness' && <Server className="w-5 h-5 text-blue-400" />}
                  {sec.section === 'Data Readiness' && <Database className="w-5 h-5 text-purple-400" />}
                  {sec.section === 'Security & Compliance' && <Shield className="w-5 h-5 text-amber-400" />}
                  {sec.section === 'Business Readiness' && <DollarSign className="w-5 h-5 text-green-400" />}
                  {sec.section}
                </h2>
                <div className="space-y-4">
                  {sec.questions.map(q => (
                    <div key={q.id}>
                      <label className="text-white text-sm font-medium mb-2 block">{q.text}</label>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {q.options.map(opt => (
                          <button key={opt.label} onClick={() => setAnswers(p => ({ ...p, [q.id]: opt.score }))}
                            className={`text-left p-3 rounded-lg border transition-all ${
                              answers[q.id] === opt.score ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                            }`}>
                            <p className="text-sm font-medium">{opt.label}</p>
                            <p className="text-xs text-slate-500">{opt.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center sticky bottom-4">
              <button onClick={() => setStep('report')} disabled={!allAnswered}
                className={`px-8 py-4 rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto ${
                  allAnswered ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}><TrendingUp className="w-5 h-5" /> Generate Readiness Report</button>
              <p className="text-slate-500 text-xs mt-2">{Object.keys(answers).length}/{assessment.reduce((n, s) => n + s.questions.length, 0)} answered</p>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Hero */}
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 rounded-2xl p-8 text-center mb-8">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Cloud Migration Readiness</h2>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(51 65 85)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" className={scores.color.replace('text', 'stroke')} strokeWidth="8" strokeDasharray={`${scores.pct * 2.64} 264`} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-4xl font-bold ${scores.color}`}>{scores.pct}%</span>
                    <span className="text-slate-400 text-xs">Ready</span>
                  </div>
                </div>
                <p className={`text-xl font-semibold ${scores.color} mb-1`}>{scores.readiness}</p>
                <p className="text-slate-400">{scores.pct >= 60 ? 'Strong foundation. Focus on gaps for a smooth migration.' : 'Significant preparation needed before migrating.'}</p>
              </div>

              {/* Sections */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {scores.sections.map(s => {
                  const pct = s.maxScore > 0 ? Math.round((s.score / s.maxScore) * 100) : 0;
                  const color = pct >= 70 ? 'text-green-400' : pct >= 50 ? 'text-blue-400' : pct >= 30 ? 'text-yellow-400' : 'text-red-400';
                  const barColor = pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-blue-500' : pct >= 30 ? 'bg-yellow-500' : 'bg-red-500';
                  return (
                    <div key={s.section} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                      <h3 className="text-white font-semibold mb-3">{s.section}</h3>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 mb-2"><div className={`h-3 rounded-full ${barColor} transition-all`} style={{ width: `${pct}%` }} /></div>
                      <div className="flex justify-between text-sm"><span className={color}>{pct}%</span><span className="text-slate-500">Ready</span></div>
                    </div>
                  );
                })}
              </div>

              {/* Gaps & Recommendations */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-400" /> Priority Areas to Address</h3>
                <ul className="space-y-3">
                  {scores.weakSections.length > 0
                    ? scores.weakSections.map(s => (<li key={s.section} className="flex items-start gap-3 text-slate-300"><AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />{s.section} needs significant preparation</li>))
                    : (<li className="flex items-start gap-3 text-slate-300"><Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />All areas show good readiness</li>)}
                </ul>
              </div>

              {/* Contact & Services */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Let Zion Guide Your Cloud Migration</h3>
                <p className="text-slate-400 mb-6">Our cloud architects ensure smooth, zero-downtime transitions with optimized architecture.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">Free Migration Assessment <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/it-services/cloud-migration" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">View: Cloud Migration Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => { setStep('assess'); setAnswers({}); }} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Retake Assessment
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free assessment tool by Zion Tech Group — based on cloud migration best practices</p>
        </div>
      </div>
    </div>
  );
}
