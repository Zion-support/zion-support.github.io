'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Mail, DollarSign, Cpu, Lightbulb, Send, ArrowLeft, Building2, FolderOpen } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import type { Service } from '../data/servicesData';
import { saveQuizResult } from '../lib/portal-storage';
import type { QuizResult } from '../lib/portal-storage';
import toast from 'react-hot-toast';

type Industry = 'healthcare' | 'finance' | 'retail' | 'manufacturing' | 'technology' | 'government' | 'education' | 'other';
type PainPoint = 'security' | 'efficiency' | 'cost' | 'compliance' | 'customer-experience' | 'data-insights' | 'automation' | 'scale';
type Budget = 'under-10k' | '10k-50k' | '50k-100k' | '100k-plus';
type Maturity = 'beginner' | 'intermediate' | 'advanced' | 'expert';

interface BaseQuestion {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SingleQuestion extends BaseQuestion {
  multi: false;
  options: readonly { value: Industry | Budget | Maturity; label: string; icon: string }[];
}

interface MultiQuestion extends BaseQuestion {
  multi: true;
  options: readonly { value: PainPoint; label: string; icon: string }[];
  max: number;
}

type Question = SingleQuestion | MultiQuestion;

const QUESTIONS: readonly Question[] = [
  {
    id: 'industry',
    icon: <Building2 className="w-6 h-6" />,
    title: 'What industry are you in?',
    description: 'This helps us tailor recommendations to your vertical.',
    multi: false,
    options: [
      { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
      { value: 'finance', label: 'Finance & Banking', icon: '💼' },
      { value: 'retail', label: 'Retail & E-Commerce', icon: '🛍️' },
      { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
      { value: 'technology', label: 'Technology', icon: '💻' },
      { value: 'government', label: 'Government', icon: '🏛️' },
      { value: 'education', label: 'Education', icon: '🎓' },
      { value: 'other', label: 'Other', icon: '🌍' },
    ] as const,
  },
  {
    id: 'painPoints',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'What are your top challenges?',
    description: 'Select up to 2 primary pain points.',
    multi: true,
    max: 2,
    options: [
      { value: 'security', label: 'Security & Threats', icon: '🔒' },
      { value: 'efficiency', label: 'Operational Efficiency', icon: '⚡' },
      { value: 'cost', label: 'Cost Reduction', icon: '💰' },
      { value: 'compliance', label: 'Regulatory Compliance', icon: '📑' },
      { value: 'customer-experience', label: 'Customer Experience', icon: '🤝' },
      { value: 'data-insights', label: 'Data & Analytics', icon: '📊' },
      { value: 'automation', label: 'Process Automation', icon: '🤖' },
      { value: 'scale', label: 'Scaling Operations', icon: '📈' },
    ] as const,
  },
  {
    id: 'budget',
    icon: <DollarSign className="w-6 h-6" />,
    title: 'What is your monthly tech budget?',
    description: 'Approximate range for AI/IT solutions.',
    multi: false,
    options: [
      { value: 'under-10k', label: 'Under $10,000/mo', icon: '🌱' },
      { value: '10k-50k', label: '$10,000 – $50,000/mo', icon: '🌿' },
      { value: '50k-100k', label: '$50,000 – $100,000/mo', icon: '🌳' },
      { value: '100k-plus', label: '$100,000+/mo', icon: '🏔️' },
    ] as const,
  },
  {
    id: 'maturity',
    icon: <Cpu className="w-6 h-6" />,
    title: 'What is your AI/IT maturity level?',
    description: 'How experienced is your team with advanced tech?',
    multi: false,
    options: [
      { value: 'beginner', label: 'Beginner – just starting out', icon: '🥚' },
      { value: 'intermediate', label: 'Intermediate – some AI/Cloud projects', icon: '🐣' },
      { value: 'advanced', label: 'Advanced – mature DevOps/MLOps', icon: '🦅' },
      { value: 'expert', label: 'Expert – cutting-edge R&D', icon: '🚀' },
    ] as const,
  },
];

type AnswerKey = keyof Answer;

interface Answer {
  industry: Industry;
  painPoints: PainPoint[];
  budget: Budget;
  maturity: Maturity;
}

export default function ServiceRecommenderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answer>>({});
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const currentQ = QUESTIONS[step];

  const handleSingleSelect = (value: Industry | Budget | Maturity) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));
    setTimeout(() => setStep(s => Math.min(s + 1, QUESTIONS.length - 1)), 200);
  };

  const handleMultiSelect = (value: PainPoint) => {
    setAnswers(prev => {
      const key = currentQ.id as AnswerKey;
      const current = (prev[key] as PainPoint[] || []) as PainPoint[];
      const exists = current.includes(value);
      const max = (currentQ as MultiQuestion).max;
      const updated = exists
        ? current.filter(v => v !== value)
        : current.length < max ? [...current, value] : current;
      return { ...prev, [key]: updated };
    });
  };

  const recommendations = useMemo((): Service[] => {
    const { industry, painPoints, budget, maturity } = answers as Answer;
    if (!industry || !painPoints || !budget || !maturity) return [];

    const scored = servicesData.allServices.map(svc => {
      let score = 0;

      // Industry
      const industryKeywords: Record<Industry, string[]> = {
        healthcare: ['health', 'medical', 'patient', 'hipaa', 'clinical'],
        finance: ['finance', 'banking', 'risk', 'fraud', 'compliance', 'audit'],
        retail: ['retail', 'ecommerce', 'customer', 'recommend', 'inventory'],
        manufacturing: ['manufacturing', 'supply', 'predictive', 'maintenance', 'quality'],
        technology: ['devops', 'code', 'api', 'testing', 'security', 'database'],
        government: ['government', 'public', 'policy', 'grant', 'citizen'],
        education: ['education', 'learning', 'tutor', 'accessibility', 'student'],
        other: [],
      };
      const keywords = industryKeywords[industry];
      if (keywords.some(k => svc.title.toLowerCase().includes(k) || svc.description.toLowerCase().includes(k))) {
        score += 20;
      }

      // Pain points
      painPoints.forEach(pp => {
        if (
          svc.title.toLowerCase().includes(pp) ||
          svc.description.toLowerCase().includes(pp) ||
          svc.benefits.some(b => b.toLowerCase().includes(pp))
        ) {
          score += 25;
        }
      });

      // Budget
      const avgPrice = (Number(svc.pricing.basic) + Number(svc.pricing.pro) + Number(svc.pricing.enterprise)) / 3;
      if (budget === 'under-10k' && avgPrice < 10000) score += 15;
      else if (budget === '10k-50k' && avgPrice >= 10000 && avgPrice < 50000) score += 15;
      else if (budget === '50k-100k' && avgPrice >= 50000 && avgPrice < 100000) score += 15;
      else if (budget === '100k-plus' && avgPrice >= 100000) score += 15;

      // Maturity
      if (maturity === 'beginner' && svc.title.toLowerCase().includes('ai chatbot')) score += 10;
      if (maturity === 'expert' && (svc.title.toLowerCase().includes('autonomous') || svc.title.toLowerCase().includes('orchestrat'))) score += 10;

      return { svc, score };
    });

    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.svc);
  }, [answers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setShowResults(true);
  };

  const handleSaveQuiz = () => {
    const result: QuizResult = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      answers,
      recommendations: recommendations.map(s => s.id),
      email: email || undefined,
    };
    saveQuizResult(result);
    toast.success('Quiz results saved to Client Portal!');
  };

  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> AI-Powered Quiz
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find Your Perfect Service
          </h1>
          <p className="text-lg text-gray-600">
            Answer a few quick questions and we'll recommend the best AI & IT solutions for your business.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {step + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div className="h-full bg-purple-600" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          {!showResults ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-700">{currentQ.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{currentQ.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{currentQ.description}</p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-3"
                >
                  {currentQ.options.map(opt => {
                    const isSelected = currentQ.multi
                      ? ((answers[currentQ.id as AnswerKey] as PainPoint[] || []).includes(opt.value as PainPoint))
                      : answers[currentQ.id as AnswerKey] === opt.value;
                    const disabled = currentQ.multi
                      ? !isSelected && ((answers[currentQ.id as AnswerKey] as PainPoint[] || []).length >= (currentQ as MultiQuestion).max)
                      : false;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => currentQ.multi
                          ? handleMultiSelect(opt.value as PainPoint)
                          : handleSingleSelect(opt.value as Industry | Budget | Maturity)
                        }
                        disabled={disabled}
                        className={`p-4 border-2 rounded-xl text-left transition flex items-center gap-4 ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50 shadow-sm'
                            : 'border-gray-200 hover:border-purple-300'
                        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="text-3xl">{opt.icon}</span>
                        <span className="font-medium text-gray-900 flex-1">{opt.label}</span>
                        {currentQ.multi ? (
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            isSelected ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                          }`}>
                            {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        ) : (
                          isSelected && <CheckCircle className="w-5 h-5 text-purple-600" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                {step > 0 && (
                  <button
                    onClick={() => setStep(s => s - 1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                )}
                <div className="ml-auto" />
                {step < QUESTIONS.length - 1 && (
                  <button
                    onClick={() => setStep(s => s + 1)}
                    disabled={!answers[currentQ.id as AnswerKey] || (currentQ.multi && ((answers[currentQ.id as AnswerKey] as PainPoint[] | undefined)?.length ?? 0) < 1)}
                    className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                      !answers[currentQ.id as AnswerKey] || (currentQ.multi && ((answers[currentQ.id as AnswerKey] as PainPoint[] | undefined)?.length ?? 0) < 1)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" /> Your Recommendations
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Based on your answers, we recommend:</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {recommendations.map((svc, idx) => (
                  <motion.div
                    key={svc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="text-4xl mb-3">{svc.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{svc.title}</h3>
                    <p className="text-xs text-gray-600 mb-4 line-clamp-3">{svc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-indigo-700">From {svc.pricing.basic}/mo</span>
                      <a href="/proposal-generator" className="text-xs px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                        Generate Proposal
                      </a>
                    </div>
                  </motion.div>
                ))}
               </div>

               {/* Save & Email actions */}
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                 <div className="text-sm text-gray-600">
                   <strong>Step 2:</strong> Save these results or email them to yourself.
                 </div>
                 <div className="flex items-center gap-3">
                   <button
                     type="button"
                     onClick={handleSaveQuiz}
                     className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                   >
                     <FolderOpen className="w-4 h-4" />
                     Save to Portal
                   </button>
                   <form onSubmit={handleSubmit}>
                     <div className="flex gap-2">
                       <input
                         type="email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                         placeholder="Enter your email"
                         required
                         className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                       />
                       <button
                         type="submit"
                         disabled={submitting || !email}
                         className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                           submitting || !email
                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                             : 'bg-purple-600 text-white hover:bg-purple-700'
                         }`}
                       >
                         {submitting ? 'Sending…' : 'Send'}
                       </button>
                     </div>
                   </form>
                 </div>
               </div>
            </>
          )}

          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">Not satisfied with your results?</p>
            <a href="/tools" className="text-purple-600 font-medium hover:underline">
              Browse all {servicesData.allServices.length}+ services →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
