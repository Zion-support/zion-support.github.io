'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, ChevronRight, ChevronLeft, Check, AlertTriangle, X,
  Mail, Phone, MapPin, ArrowRight, Lock, FileText, Users, Globe,
  Download, Award, TrendingUp, ExternalLink, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  options: {
    label: string;
    description: string;
    scores: { soc2: number; hipaa: number; gdpr: number; iso: number };
  }[];
}

const questions: Question[] = [
  {
    id: 'industry',
    label: 'What industry are you in?',
    description: 'Compliance requirements vary significantly by industry.',
    icon: <Shield className="w-5 h-5" />,
    options: [
      { label: 'Healthcare', description: 'Hospitals, clinics, health tech, medical devices', scores: { soc2: 2, hipaa: 5, gdpr: 3, iso: 3 } },
      { label: 'Financial Services', description: 'Banking, fintech, insurance, investment', scores: { soc2: 5, hipaa: 2, gdpr: 3, iso: 5 } },
      { label: 'Technology / SaaS', description: 'Software, cloud services, platforms', scores: { soc2: 4, hipaa: 2, gdpr: 4, iso: 4 } },
      { label: 'E-Commerce / Retail', description: 'Online stores, marketplaces, DTC brands', scores: { soc2: 3, hipaa: 1, gdpr: 4, iso: 3 } },
      { label: 'Government / Public Sector', description: 'Federal, state, local agencies, contractors', scores: { soc2: 5, hipaa: 2, gdpr: 3, iso: 5 } },
      { label: 'Manufacturing / Industrial', description: 'Production, supply chain, logistics', scores: { soc2: 3, hipaa: 1, gdpr: 3, iso: 4 } },
    ],
  },
  {
    id: 'dataTypes',
    label: 'What types of sensitive data do you handle?',
    description: 'Select all that apply. Each type triggers specific compliance requirements.',
    icon: <Lock className="w-5 h-5" />,
    options: [
      { label: 'Personal Health Information (PHI)', description: 'Medical records, patient data, health status', scores: { soc2: 3, hipaa: 5, gdpr: 2, iso: 3 } },
      { label: 'Payment / Financial Data', description: 'Credit cards, bank accounts, transactions', scores: { soc2: 4, hipaa: 2, gdpr: 3, iso: 4 } },
      { label: 'EU Personal Data', description: 'Names, emails, IP addresses of EU residents', scores: { soc2: 3, hipaa: 1, gdpr: 5, iso: 3 } },
      { label: 'Employee Records', description: 'HR files, salaries, performance data', scores: { soc2: 3, hipaa: 2, gdpr: 4, iso: 3 } },
      { label: 'Intellectual Property', description: 'Trade secrets, patents, proprietary algorithms', scores: { soc2: 4, hipaa: 1, gdpr: 2, iso: 5 } },
      { label: 'Only Public Data', description: 'No sensitive or regulated data stored', scores: { soc2: 2, hipaa: 1, gdpr: 1, iso: 2 } },
    ],
  },
  {
    id: 'teamSize',
    label: 'How large is your organization?',
    description: 'Company size affects the scope and complexity of compliance requirements.',
    icon: <Users className="w-5 h-5" />,
    options: [
      { label: 'Startup (1-10 employees)', description: 'Small team with limited resources', scores: { soc2: 2, hipaa: 2, gdpr: 2, iso: 2 } },
      { label: 'Small Business (11-50)', description: 'Growing company with basic processes', scores: { soc2: 3, hipaa: 3, gdpr: 3, iso: 3 } },
      { label: 'Mid-Market (51-250)', description: 'Established company with multiple departments', scores: { soc2: 4, hipaa: 4, gdpr: 4, iso: 4 } },
      { label: 'Enterprise (251-1000)', description: 'Large organization with complex needs', scores: { soc2: 5, hipaa: 5, gdpr: 5, iso: 5 } },
      { label: 'Large Enterprise (1000+)', description: 'Global operations, multi-jurisdiction', scores: { soc2: 5, hipaa: 5, gdpr: 5, iso: 5 } },
    ],
  },
  {
    id: 'currentControls',
    label: 'What security controls do you currently have?',
    description: 'Select the most accurate description of your current state.',
    icon: <FileText className="w-5 h-5" />,
    options: [
      { label: 'Ad-hoc / None', description: 'No formal security policies or tools', scores: { soc2: 1, hipaa: 1, gdpr: 1, iso: 1 } },
      { label: 'Basic', description: 'Firewalls, antivirus, password policies', scores: { soc2: 2, hipaa: 2, gdpr: 2, iso: 2 } },
      { label: 'Structured', description: 'MFA, access controls, logging, backups', scores: { soc2: 4, hipaa: 4, gdpr: 3, iso: 4 } },
      { label: 'Advanced', description: 'SIEM, threat detection, automated compliance', scores: { soc2: 5, hipaa: 5, gdpr: 4, iso: 5 } },
    ],
  },
  {
    id: 'certificationGoal',
    label: 'Which certifications are you targeting?',
    description: 'Select your primary goal. We will provide a tailored roadmap.',
    icon: <Award className="w-5 h-5" />,
    options: [
      { label: 'SOC 2', description: 'Service Organization Control Type II', scores: { soc2: 5, hipaa: 0, gdpr: 0, iso: 0 } },
      { label: 'HIPAA', description: 'Health Insurance Portability Act', scores: { soc2: 0, hipaa: 5, gdpr: 0, iso: 0 } },
      { label: 'GDPR', description: 'General Data Protection Regulation', scores: { soc2: 0, hipaa: 0, gdpr: 5, iso: 0 } },
      { label: 'ISO 27001', description: 'Information Security Management System', scores: { soc2: 0, hipaa: 0, gdpr: 0, iso: 5 } },
      { label: 'Multiple / All', description: 'Pursuing comprehensive compliance', scores: { soc2: 5, hipaa: 5, gdpr: 5, iso: 5 } },
    ],
  },
];

interface ComplianceResult {
  framework: string;
  score: number;
  maxScore: number;
  percentage: number;
  status: 'non-compliant' | 'partial' | 'substantial' | 'certified';
  icon: React.ReactNode;
  gaps: string[];
  services: { name: string; href: string }[];
}

export default function AIComplianceRiskDashboard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = useCallback((optionIndex: number) => {
    const q = questions[step];
    setAnswers(prev => {
      const current = prev[q.id] || [];
      if (current.includes(optionIndex)) {
        return { ...prev, [q.id]: current.filter(i => i !== optionIndex) };
      }
      return { ...prev, [q.id]: [...current, optionIndex] };
    });
  }, [step]);

  const canProceed = useMemo(() => {
    const q = questions[step];
    return (answers[q.id]?.length || 0) > 0;
  }, [step, answers]);

  const handleNext = useCallback(() => {
    if (!canProceed) return;
    if (step < questions.length - 1) {
      setStep(s => s + 1);
    } else {
      setShowResults(true);
    }
  }, [canProceed, step]);

  const handleBack = useCallback(() => {
    if (step > 0) setStep(s => s - 1);
  }, [step]);

  const handleRestart = useCallback(() => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  }, []);

  const results = useMemo((): ComplianceResult[] => {
    const maxPerFramework = questions.length * 5;

    const compute = (framework: 'soc2' | 'hipaa' | 'gdpr' | 'iso'): number => {
      let total = 0;
      questions.forEach(q => {
        const selected = answers[q.id] || [];
        selected.forEach(idx => {
          total += q.options[idx]?.scores[framework] || 0;
        });
      });
      return Math.min(total, maxPerFramework);
    };

    const frameworks: {
      key: string; label: string; icon: React.ReactNode; compute: () => number;
      gaps: string[]; services: { name: string; href: string }[];
    }[] = [
      {
        key: 'soc2', label: 'SOC 2', icon: <Shield className="w-5 h-5" />,
        compute: () => compute('soc2'),
        gaps: ['Security policy documentation', 'Vendor security assessments', 'Audit logging infrastructure', 'Employee security training program'],
        services: [
          { name: 'Managed SOC & Threat Intelligence', href: '/it-services/managed-soc-threat-intelligence' },
          { name: 'AI Compliance & Governance', href: '/ai-services/ai-compliance' },
          { name: 'Identity & Access Management', href: '/it-services/identity-access-management' },
        ],
      },
      {
        key: 'hipaa', label: 'HIPAA', icon: <Lock className="w-5 h-5" />,
        compute: () => compute('hipaa'),
        gaps: ['PHI encryption at rest', 'Business Associate Agreements', 'Access audit trails', 'Breach notification procedures'],
        services: [
          { name: 'Enterprise Backup & DR', href: '/it-services/enterprise-backup-dr' },
          { name: 'AI Cybersecurity Training', href: '/micro-saas/ai-cybersecurity-trainer' },
          { name: 'Managed SOC & Threat Intelligence', href: '/it-services/managed-soc-threat-intelligence' },
        ],
      },
      {
        key: 'gdpr', label: 'GDPR', icon: <Globe className="w-5 h-5" />,
        compute: () => compute('gdpr'),
        gaps: ['Data Processing Agreement documentation', 'DPIA completion', 'Consent management system', 'Data subject request workflows'],
        services: [
          { name: 'AI Compliance & Governance', href: '/ai-services/ai-compliance' },
          { name: 'AI Knowledge Management', href: '/ai-services/ai-knowledge-management' },
          { name: 'Security Enhanced Data Engineering', href: '/it-services/data-engineering' },
        ],
      },
      {
        key: 'iso', label: 'ISO 27001', icon: <Award className="w-5 h-5" />,
        compute: () => compute('iso'),
        gaps: ['ISMS documentation', 'Risk assessment methodology', 'Security objectives and KPIs', 'Management review process'],
        services: [
          { name: 'Enterprise Backup & DR', href: '/it-services/enterprise-backup-dr' },
          { name: 'Managed SOC & Threat Intelligence', href: '/it-services/managed-soc-threat-intelligence' },
          { name: 'Network Architecture & SD-WAN', href: '/it-services/network-architecture-sdwan' },
        ],
      },
    ];

    return frameworks.map(f => {
      const score = f.compute();
      const percentage = Math.round((score / maxPerFramework) * 100);
      let status: ComplianceResult['status'];
      if (percentage >= 90) status = 'certified';
      else if (percentage >= 70) status = 'substantial';
      else if (percentage >= 40) status = 'partial';
      else status = 'non-compliant';

      const relevant = Math.min(f.gaps.length, Math.max(2, 4 - Math.floor(percentage / 25)));

      return {
        framework: f.label,
        score,
        maxScore: maxPerFramework,
        percentage,
        status,
        icon: f.icon,
        gaps: f.gaps.slice(0, relevant),
        services: f.services,
      };
    });
  }, [answers]);

  const getStatusConfig = (s: ComplianceResult['status']) => {
    switch (s) {
      case 'certified': return { label: 'Ready for Audit', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/50' };
      case 'substantial': return { label: 'Substantially Compliant', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50' };
      case 'partial': return { label: 'Partial Compliance', color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/50' };
      default: return { label: 'Not Compliant', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/50' };
    };
  };

  if (showResults) {
    const overall = Math.round(results.reduce((sum, r) => sum + r.percentage, 0) / results.length);
    const overallConfig = getStatusConfig(overall >= 90 ? 'certified' : overall >= 70 ? 'substantial' : overall >= 40 ? 'partial' : 'non-compliant');

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 md:py-16 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm mb-4">
              <Shield className="w-4 h-4" />
              Compliance Analysis Complete
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Your Compliance Risk Dashboard</h1>
            <p className="text-slate-400 text-lg">Personalized assessment with gap analysis and remediation roadmap</p>
          </motion.div>

          {/* Overall Score */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
            className={`bg-slate-800/50 border ${overallConfig.border} rounded-2xl p-8 mb-8`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(51 65 85)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" strokeWidth="8" strokeDasharray={`${overall * 2.64} 264`} strokeLinecap="round"
                    className={overallConfig.color.replace('text', 'stroke')} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${overallConfig.color}`}>{overall}%</span>
                  <span className="text-slate-400 text-xs">Overall</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className={`text-2xl font-bold ${overallConfig.color} mb-2`}>{overallConfig.label}</h2>
                <p className="text-slate-400">
                  {overall >= 70
                    ? 'Your organization has strong foundations. Focus on the specific gaps below to achieve full compliance.'
                    : 'Significant remediation is required. Contact us to build a prioritized compliance roadmap.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Framework Breakdown */}
          <div className="space-y-4 mb-10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Framework Compliance Scores
            </h3>
            {results.map((r, i) => {
              const cfg = getStatusConfig(r.status);
              return (
                <motion.div key={r.framework} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={cfg.color}>{r.icon}</div>
                      <span className="text-white font-medium">{r.framework}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                    </div>
                    <span className={`text-xl font-bold ${cfg.color}`}>{r.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 mb-4">
                    <div className={`h-2 rounded-full ${r.percentage >= 70 ? 'bg-green-500' : r.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${r.percentage}%` }} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" /> Critical Gaps
                      </h4>
                      <ul className="space-y-1.5">
                        {r.gaps.map((g, gi) => (
                          <li key={gi} className="flex items-start gap-2 text-slate-300 text-sm">
                            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Recommended Services
                      </h4>
                      <ul className="space-y-1.5">
                        {r.services.map((s, si) => (
                          <li key={si}>
                            <Link href={s.href} className="text-sm text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1">
                              <ArrowRight className="w-3 h-3 flex-shrink-0" /> {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Help Achieving Compliance?</h3>
            <p className="text-slate-400 mb-6">Our security team provides end-to-end compliance consulting, from gap analysis to certification.</p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
              <div className="bg-slate-700/30 rounded-xl p-4">
                <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-medium">Compliance Readiness Audit</h4>
                <p className="text-slate-400 text-sm mt-1">Free gap assessment and prioritized action plan</p>
                <Link href="/consultation" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Book Free Audit <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <Lock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-medium">Implementation Support</h4>
                <p className="text-slate-400 text-sm mt-1">Hands-on deployment of security controls</p>
                <Link href="/services" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  View Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="bg-slate-700/30 rounded-xl p-4">
                <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="text-white font-medium">Managed Compliance</h4>
                <p className="text-slate-400 text-sm mt-1">Ongoing monitoring and automated evidence collection</p>
                <Link href="/consultation" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="text-slate-400 text-sm space-y-1">
              <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
              <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
              <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <button onClick={handleRestart} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
              <ChevronLeft className="w-4 h-4" /> Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question view
  const q = questions[step];
  const selectedIndices = answers[q.id] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm mb-4">
            <Shield className="w-4 h-4" />
            Compliance & Risk Assessment
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">AI Compliance Risk Dashboard</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Evaluate your compliance posture across SOC 2, HIPAA, GDPR, and ISO 27001 with a personalized remediation roadmap.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Step {step + 1} of {questions.length}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}% complete</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div className="h-2 rounded-full bg-green-500 transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-green-400">{q.icon}</div>
              <span className="text-green-400 text-sm font-medium">Step {step + 1}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{q.label}</h2>
            <p className="text-slate-400 mb-6">{q.description}</p>

            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const isSelected = selectedIndices.includes(idx);
                return (
                  <motion.button key={idx} onClick={() => handleSelect(idx)}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected ? 'border-green-500 bg-green-500/10 text-white' : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600 hover:bg-slate-700/30'
                    }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-green-500 bg-green-500' : 'border-slate-600'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <div className="font-medium">{opt.label}</div>
                        <div className="text-slate-400 text-sm">{opt.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 ml-auto" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button onClick={handleBack} disabled={step === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              step === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}><ChevronLeft className="w-4 h-4" /> Back</button>
          <button onClick={handleNext} disabled={!canProceed}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              canProceed ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
            }`}>
            {step === questions.length - 1 ? 'Generate Report' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>Free compliance assessment by Zion Tech Group — no sign-up required</p>
          <p className="mt-1">Mobile: +1 302 464 0950 · Email: <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </div>
  );
}
