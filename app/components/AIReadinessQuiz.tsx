'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Brain, Shield, Code, Database, Users, TrendingUp, AlertCircle, Home, Zap } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  }
  type Element = React.ReactElement;
}

interface Question {
  id: string;
  category: string;
  icon: string;
  question: string;
  description: string;
  options: {
    label: string;
    score: number;
    insight: string;
  }[];
}

const questions: Question[] = [
  {
    id: 'data-maturity',
    category: 'Data & Infrastructure',
    icon: '🗄️',
    question: 'How would you describe your organization\'s current data infrastructure?',
    description: 'Data is the fuel for AI. Understanding your current state helps us tailor recommendations.',
    options: [
      { label: 'Mostly spreadsheets, scattered files', score: 1, insight: 'Data foundations needed — start with centralization' },
      { label: 'Some databases but mostly siloed per team', score: 2, insight: 'Integration gaps identified — pipeline strategy recommended' },
      { label: 'Centralized data warehouse or lake', score: 3, insight: 'Solid foundation — ready for AI model deployment' },
      { label: 'Real-time data pipelines with governance', score: 5, insight: 'Excellent — position for advanced ML operations' },
    ],
  },
  {
    id: 'automation',
    category: 'Process & Automation',
    icon: '⚡',
    question: 'What is your current level of process automation?',
    description: 'Automation readiness determines how quickly AI can deliver ROI.',
    options: [
      { label: 'Almost everything is manual', score: 1, insight: 'High automation opportunity — focus on quick wins' },
      { label: 'Rudimentary scripts in some departments', score: 2, insight: 'Building momentum — expand automation scope' },
      { label: 'Established automation in multiple workflows', score: 3, insight: 'Good progress — layer AI on top for intelligence' },
      { label: 'End-to-end automated pipelines across org', score: 5, insight: 'Advanced — optimize with AI-driven orchestration' },
    ],
  },
  {
    id: 'team-skills',
    category: 'Team & Culture',
    icon: '👥',
    question: 'How AI-fluent is your team today?',
    description: 'Organizational readiness is about people as much as technology.',
    options: [
      { label: 'No AI experience, traditional IT stack', score: 1, insight: 'Start with AI literacy training + no-code tools' },
      { label: 'A few champions exploring AI tools', score: 2, insight: 'Emerging — invest in structured AI upskilling' },
      { label: 'ML engineers or data scientists on staff', score: 4, insight: 'Skilled team — accelerate with enterprise-grade platforms' },
      { label: 'Dedicated AI/ML team across departments', score: 5, insight: 'Mature — scale AI governance and advanced use cases' },
    ],
  },
  {
    id: 'security-governance',
    category: 'Security & Governance',
    icon: '🔒',
    question: 'How do you currently handle security and data governance?',
    description: 'AI systems must operate within your security and compliance framework.',
    options: [
      { label: 'Basic security, no formal AI governance', score: 1, insight: 'Prioritize security baseline before AI deployment' },
      { label: 'Standard IT security, exploring AI policies', score: 2, insight: 'Developing — align AI governance with existing framework' },
      { label: 'Formal security program with compliance tracking', score: 4, insight: 'Strong — implement AI-specific risk controls' },
      { label: 'Zero-trust + automated compliance scanning', score: 5, insight: 'Excellent — ready for regulated AI use cases' },
    ],
  },
  {
    id: 'budget-commitment',
    category: 'Budget & Strategy',
    icon: '📊',
    question: 'What is your leadership\'s commitment to AI investment?',
    description: 'Strategic alignment and budget determine scale and pace of AI adoption.',
    options: [
      { label: 'No budget allocated yet', score: 1, insight: 'Build ROI case with pilot project to secure funding' },
      { label: 'Exploratory budget for tools and training', score: 2, insight: 'Growing interest — focus on measurable quick wins' },
      { label: 'Dedicated AI budget, 1-2 initiatives underway', score: 4, insight: 'Committed — expand scope with structured roadmap' },
      { label: 'AI is a strategic priority with significant budget', score: 5, insight: 'Fully committed — maximize ROI with enterprise platform' },
    ],
  },
  {
    id: 'use-case-clarity',
    category: 'Use Case Definition',
    icon: '🎯',
    question: 'How clear are you about what you want AI to solve?',
    description: 'Well-defined use cases accelerate successful AI deployments by months.',
    options: [
      { label: 'General interest, no specific problems identified', score: 1, insight: 'Discovery workshop recommended to identify use cases' },
      { label: 'A few high-level ideas, not fully scoped', score: 2, insight: 'Good start — refine with AI opportunity assessment' },
      { label: 'Specific use cases defined, ready to validate', score: 4, insight: 'Well-defined — proceed to proof of concept' },
      { label: 'Prioritized backlog of AI projects mapped', score: 5, insight: 'Excellent — begin phased implementation plan' },
    ],
  },
  {
    id: 'tech-readiness',
    category: 'Technical Readiness',
    icon: '🛠️',
    question: 'What is your current technology stack\'s compatibility with AI?',
    description: 'Modern APIs and cloud-native infrastructure accelerate AI integration.',
    options: [
      { label: 'Legacy systems, difficult to integrate', score: 1, insight: 'Modernize core infrastructure before AI integration' },
      { label: 'Mix of legacy and cloud, API access varies', score: 2, insight: 'Partial readiness — identify integration pain points' },
      { label: 'Mostly cloud-based with REST APIs', score: 4, insight: 'Compatible — begin AI pilot integration' },
      { label: 'Cloud-native, microservices, event-driven architecture', score: 5, insight: 'Optimal — deploy AI services immediately' },
    ],
  },
];

const maxScore = 35;

function getLevel(score: number): {
  title: string;
  subtitle: string;
  color: string;
  recommendations: string[];
} {
  if (score >= 28) {
    return {
      title: 'AI-Optimized',
      subtitle: 'Your organization is ready to deploy advanced AI solutions.',
      color: 'from-green-500 to-emerald-500',
      recommendations: [
        'Deploy enterprise-scale AI models on existing infrastructure',
        'Implement AI governance frameworks and monitoring',
        'Explore cutting-edge capabilities like autonomous agents and multi-modal AI',
        'Consider custom model training for competitive advantage',
      ],
    };
  }
  if (score >= 21) {
    return {
      title: 'Growing',
      subtitle: 'Solid foundation — targeted AI initiatives will accelerate your ROI.',
      color: 'from-blue-500 to-cyan-500',
      recommendations: [
        'Focus on high-impact automation to build momentum',
        'Invest in upskilling — AI literacy for broader teams',
        'Establish data governance and security policies for AI',
        'Start with proven SaaS AI tools before custom builds',
      ],
    };
  }
  if (score >= 14) {
    return {
      title: 'Developing',
      subtitle: 'You have foundational elements — now it\'s time to build systematically.',
      color: 'from-amber-500 to-orange-500',
      recommendations: [
        'Prioritize data centralization and pipeline development',
        'Start with no-code/low-code AI tools to build familiarity',
        'Create an AI champion program in each department',
        'Develop a 12-month AI adoption roadmap with clear milestones',
      ],
    };
  }
  return {
    title: 'Emerging',
    subtitle: 'Early stages — significant opportunity for transformation.',
    color: 'from-rose-500 to-pink-500',
    recommendations: [
      'Begin with an AI fundamentals workshop for leadership',
      'Identify 2-3 quick-win use cases with clear ROI',
      'Consider free AI tools (like our AI Tools Directory)',
      'Plan a cloud migration strategy for modern infrastructure',
    ],
  };
}

const categoryIcons: Record<string, typeof Zap> = {
  data: Database,
  automation: Zap,
  team: Users,
  security: Shield,
  budget: BarChart3,
  usecase: TrendingUp,
  tech: Code,
};

const scoreBreakdownLabels: Record<string, string> = {
  'data-maturity': 'Data & Infrastructure',
  automation: 'Process & Automation',
  'team-skills': 'Team & Culture',
  'security-governance': 'Security & Governance',
  'budget-commitment': 'Budget & Strategy',
  'use-case-clarity': 'Use Case Definition',
  'tech-readiness': 'Technical Readiness',
};

export default function AIReadinessQuiz(): JSX.Element {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [insights, setInsights] = useState<Record<string, string>>({});

  const question = questions[current];
  const isAnswered = answers[question.id] !== undefined;
  const progressPercent = ((current + 1) / questions.length) * 100;

  const handleSelect = useCallback((score: number, insight: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: score }));
    setInsights((prev) => ({ ...prev, [question.id]: insight }));
  }, [question.id]);

  const handleNext = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResult(true);
    }
  }, [current]);

  const handlePrev = useCallback(() => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const totalScore = useMemo(() => Object.values(answers).reduce((sum, v) => sum + v, 0), [answers]);

  if (showResult) {
    const level = getLevel(totalScore);
    const pct = Math.round((totalScore / maxScore) * 100);

    return (
      <main className="flex min-h-[80vh] flex-col items-center bg-slate-950 px-4 py-12 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'AI Readiness Assessment',
              description: 'Evaluate your organization\'s AI maturity and get personalized recommendations.',
              url: 'https://ziontechgroup.com/ai-readiness-quiz',
            }),
          }}
        />

        <div className="w-full max-w-3xl space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Your AI Readiness Score</h1>
            <p className="mt-2 text-lg text-slate-400">Based on your responses across 7 key dimensions</p>
          </div>

          {/* Score Card */}
          <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 to-slate-900/80 p-8 shadow-2xl shadow-purple-500/10">
            <div className="flex flex-col items-center text-center">
              {/* Score circle */}
              <div className="relative">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/40">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">{pct}%</div>
                    <div className="text-sm opacity-90">AI Readiness</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h2 className={`bg-gradient-to-r ${level.color} bg-clip-text text-3xl font-bold text-transparent`}>
                  {level.title}
                </h2>
                <p className="mt-2 text-slate-300">{level.subtitle}</p>
              </div>

              {/* Score bar visualization */}
              <div className="mt-8 w-full max-w-md">
                <div className="mb-2 flex justify-between text-xs text-slate-500">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
                <div className="relative flex h-3 overflow-hidden rounded-full bg-slate-800">
                  {/* Zone markers */}
                  <div className="flex-1 bg-rose-500/10" />
                  <div className="flex-1 bg-amber-500/10" />
                  <div className="flex-1 bg-blue-500/10" />
                  <div className="flex-1 bg-green-500/10" />
                  {/* Progress */}
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {/* Needle indicator */}
                <div
                  className="absolute h-1.5 w-1.5 -translate-x-1/2 translate-y-1 rounded-full bg-white shadow-md"
                  style={{ marginLeft: `calc(${pct}% * 0.01)` }}
                />
              </div>
            </div>

            {/* Breakdown */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Score Breakdown</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {questions.map((q) => {
                  const score = answers[q.id] ?? 0;
                  const max = 5;
                  const pctScore = Math.round((score / max) * 100);
                  return (
                    <div key={q.id} className="flex flex-col gap-1.5 rounded-lg bg-slate-900/50 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-300">{q.icon} {scoreBreakdownLabels[q.id] ?? q.category}</span>
                        <span className="text-xs text-slate-500">{score}/{max}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${pctScore >= 80 ? 'from-green-500 to-emerald-500' : pctScore >= 60 ? 'from-blue-500 to-cyan-500' : pctScore >= 40 ? 'from-amber-500 to-orange-500' : 'from-rose-500 to-pink-500'}`}
                          style={{ width: `${pctScore}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-500">{insights[q.id]}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-8 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-5">
              <h3 className="text-lg font-semibold text-indigo-300 mb-3">Recommended Next Steps</h3>
              <ul className="space-y-3">
                {level.recommendations.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <ArrowRight className="h-4 w-4" />
              Schedule AI Consultation
            </Link>
            <Link
              href="/ai-tools"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-3.5 text-sm font-medium text-slate-300 transition hover:border-purple-400 hover:text-white"
            >
              <Brain className="h-4 w-4" />
              Explore AI Tools
            </Link>
            <button
              onClick={() => {
                setShowResult(false);
                setCurrent(0);
                setAnswers({});
                setInsights({});
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-3.5 text-sm font-medium text-slate-300 transition hover:border-purple-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retake Quiz
            </button>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-slate-500">
              Need help? Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <span className="text-purple-400">+1 302 464 0950</span>
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Quiz view
  return (
    <main className="flex min-h-[80vh] flex-col items-center bg-gradient-to-br from-slate-950 via-slate-950 to-purple-950/30 px-4 py-12 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'AI Readiness Assessment',
            description: 'Evaluate your organization\'s AI maturity with our free 7-question assessment.',
            url: 'https://ziontechgroup.com/ai-readiness-quiz',
          }),
        }}
      />

      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400">
            <Brain className="h-7 w-7" />
          </div>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">AI Readiness Assessment</h1>
          <p className="mt-2 max-w-xl text-base text-slate-400">
            Answer 7 quick questions to get your personalized AI maturity score and actionable recommendations.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-purple-900/20 p-6 shadow-2xl shadow-purple-500/10">
          {/* Progress */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-purple-400 font-medium">Question {current + 1} of {questions.length}</span>
              <span className="text-slate-500">{question.icon} {question.category}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-xl font-bold text-white">{question.question}</h2>
          <p className="mt-1 text-sm text-slate-400">{question.description}</p>

          {/* Options */}
          <div className="mt-6 space-y-3">
            {question.options.map((option, idx) => {
              const selected = answers[question.id] === option.score;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option.score, option.insight)}
                  className={`group flex items-start gap-3 w-full rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 ${
                    selected
                      ? 'border-purple-500/60 bg-purple-500/10 text-white'
                      : 'border-slate-700/60 bg-slate-900/50 text-slate-300 hover:border-purple-400/40 hover:bg-slate-900/70'
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition ${
                      selected ? 'border-purple-500 bg-purple-500' : 'border-slate-600'
                    }`}
                  >
                    {selected && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">{option.label}</p>
                    {selected && (
                      <p className="mt-1 text-xs text-purple-400/90">{option.insight}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition ${
                current === 0
                  ? 'cursor-not-allowed text-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  isAnswered
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-purple-500/20'
                    : 'cursor-not-allowed text-slate-500'
                }`}
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
                  isAnswered
                    ? 'bg-gradient-to-r from-purple-600 to-emerald-600 text-white hover:-translate-y-0.5 hover:shadow-lg shadow-md shadow-purple-500/20'
                    : 'cursor-not-allowed text-slate-500'
                }`}
              >
                See Results
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-xs text-slate-500">
            <Shield className="h-3.5 w-3.5 text-green-500" />
            Free assessment · No signup · Instant results
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            Looking for tools to get started?{' '}
            <Link href="/ai-tools" className="text-purple-400 hover:underline">
              Explore free AI tools →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
