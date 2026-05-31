'use client';

import { useState, useCallback, useMemo } from 'react';
import { allServices, Service } from '../data/servicesData';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Answers {
  industry: string;
  companySize: string;
  budget: string;
  challenge: string;
  techStack: string;
}

interface ScoredService {
  service: Service;
  score: number;
}

// ─── Quiz Data ───────────────────────────────────────────────────────────────

const STEPS = [
  { key: 'industry', label: 'Industry', icon: '🏢' },
  { key: 'companySize', label: 'Company Size', icon: '👥' },
  { key: 'budget', label: 'Budget Range', icon: '💰' },
  { key: 'challenge', label: 'Primary Challenge', icon: '🎯' },
  { key: 'techStack', label: 'Tech Stack', icon: '⚡' },
] as const;

type StepKey = (typeof STEPS)[number]['key'];

const INDUSTRY_OPTIONS: { value: string; label: string; icon: string }[] = [
  { value: 'General', label: 'Technology', icon: '' },
  { value: 'Finance', label: 'Finance & Banking', icon: '' },
  { value: 'Healthcare', label: 'Healthcare', icon: '' },
  { value: 'E-Commerce', label: 'E-Commerce', icon: '' },
  { value: 'Manufacturing', label: 'Manufacturing', icon: '' },
  { value: 'Marketing', label: 'Marketing & Advertising', icon: '' },
  { value: 'Education', label: 'Education', icon: '' },
  { value: 'Real Estate', label: 'Real Estate', icon: '' },
];

const COMPANY_SIZE_OPTIONS: { value: string; label: string; desc: string; icon: string }[] = [
  { value: 'startup', label: 'Startup', desc: '1–10 employees', icon: '' },
  { value: 'smb', label: 'Small / Medium', desc: '11–200 employees', icon: '' },
  { value: 'midmarket', label: 'Mid-Market', desc: '201–1,000 employees', icon: '' },
  { value: 'enterprise', label: 'Enterprise', desc: '1,000+ employees', icon: '' },
];

const BUDGET_OPTIONS: { value: string; label: string; range: string; icon: string }[] = [
  { value: 'starter', label: 'Starter', range: 'Under $500/mo', icon: '' },
  { value: 'growth', label: 'Growth', range: '$500 – $2,000/mo', icon: '' },
  { value: 'scale', label: 'Scale', range: '$2,000 – $5,000/mo', icon: '' },
  { value: 'enterprise', label: 'Enterprise', range: '$5,000+/mo', icon: '' },
];

const CHALLENGE_OPTIONS: { value: string; label: string; icon: string }[] = [
  { value: 'automation', label: 'Process Automation', icon: '' },
  { value: 'customer-experience', label: 'Customer Experience', icon: '' },
  { value: 'security', label: 'Security & Compliance', icon: '' },
  { value: 'cost-reduction', label: 'Cost Reduction', icon: '' },
  { value: 'data-analytics', label: 'Data & Analytics', icon: '' },
  { value: 'infrastructure', label: 'Infrastructure & Cloud', icon: '' },
  { value: 'ai-ml', label: 'AI & Machine Learning', icon: '' },
  { value: 'digital-transformation', label: 'Digital Transformation', icon: '' },
];

const TECH_STACK_OPTIONS: { value: string; label: string; icon: string }[] = [
  { value: 'aws', label: 'Amazon Web Services', icon: '' },
  { value: 'azure', label: 'Microsoft Azure', icon: '' },
  { value: 'gcp', label: 'Google Cloud Platform', icon: '' },
  { value: 'multi-cloud', label: 'Multi-Cloud', icon: '' },
  { value: 'on-premise', label: 'On-Premise', icon: '' },
  { value: 'hybrid', label: 'Hybrid Cloud', icon: '' },
  { value: 'kubernetes', label: 'Kubernetes / Containers', icon: '' },
  { value: 'serverless', label: 'Serverless', icon: '' },
];

// ─── Challenge → keyword map ────────────────────────────────────────────────

const CHALLENGE_KEYWORDS: Record<string, string[]> = {
  'automation': ['automat', 'workflow', 'process', 'orchestrat', 'task', 'schedul', 'pipeline', 'robotic', 'bot', 'bdr', 'sdr'],
  'customer-experience': ['chatbot', 'support', 'customer', 'voice', 'omnichannel', 'satisfaction', 'experience', 'call center', 'crm'],
  'security': ['secur', 'complianc', 'threat', 'vulnerab', 'audit', 'protect', 'risk', 'governance', 'hipaa', 'soc 2', 'gdpr', 'phish', 'siem', 'soc'],
  'cost-reduction': ['cost', 'optim', 'finops', 'reduc', 'efficiency', 'waste', 'budget', 'roi', 'saving', 'spend'],
  'data-analytics': ['analytics', 'data', 'insight', 'report', 'dashboard', 'bi', 'business intelligence', 'predict', 'forecast', 'metric', 'kpi'],
  'infrastructure': ['cloud', 'infrastructure', 'devops', 'deploy', 'server', 'network', 'edge', '5g', 'hosting', 'migration'],
  'ai-ml': ['ai', 'machine learning', 'model', 'neural', 'deep learning', 'nlp', 'computer vision', 'llm', 'rag', 'mlops', 'gpu', 'agent'],
  'digital-transformation': ['digital', 'moderniz', 'transform', 'legacy', 'migrate', 'cloud-native', 'microservice', 'api', 'integration'],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseBudgetValue(pricing: string): number {
  // Extract numeric monthly value from pricing strings like "$149/mo", "Custom", "Contact us"
  const match = pricing.match(/\$?([\d,]+(?:\.\d+)?)/);
  if (!match) return -1; // Enterprise / custom
  return parseInt(match[1].replace(/,/g, ''), 10);
}

function getPricingForBudget(budget: string, service: Service): string {
  const basicVal = parseBudgetValue(service.pricing.basic);
  const proVal = parseBudgetValue(service.pricing.pro);
  const entVal = parseBudgetValue(service.pricing.enterprise);

  // Determine which tier fits best
  const budgetLimits: Record<number, number> = { starter: 500, growth: 2000, scale: 5000, enterprise: Infinity };
  const limit = budgetLimits[budget] ?? Infinity;

  // Find the best tier within budget
  if (basicVal >= 0 && basicVal <= limit) {
    // Check if pro also fits and is not too crazy
    if (proVal >= 0 && proVal <= limit && proVal <= basicVal * 3) {
      return service.pricing.pro;
    }
    return service.pricing.basic;
  }
  if (proVal >= 0 && proVal <= limit) return service.pricing.pro;
  if (entVal >= 0 && entVal <= limit) return service.pricing.enterprise;

  // If nothing fits, return the cheapest
  if (basicVal >= 0) return service.pricing.basic;
  return service.pricing.enterprise;
}

function getBudgetLimit(budget: string): number {
  const map: Record<string, number> = { starter: 500, growth: 2000, scale: 5000, enterprise: 999999 };
  return map[budget] ?? 999999;
}

// ─── Scoring Engine ──────────────────────────────────────────────────────────

function scoreServices(answers: Answers): ScoredService[] {
  const scores: ScoredService[] = allServices.map((service) => {
    let score = 0;

    // 1. Industry match (weight: 30)
    if (service.industry === 'All' || service.industry === answers.industry) {
      score += 30;
    }

    // 2. Budget compatibility (weight: 25)
    const budgetLimit = getBudgetLimit(answers.budget);
    const basicVal = parseBudgetValue(service.pricing.basic);
    const proVal = parseBudgetValue(service.pricing.pro);

    // Prefer services where at least basic tier fits in budget
    if (basicVal >= 0 && basicVal <= budgetLimit) {
      score += 20;
      // Bonus if pro tier also fits
      if (proVal >= 0 && proVal <= budgetLimit) score += 5;
    } else if (proVal >= 0 && proVal <= budgetLimit) {
      score += 15;
    } else if (basicVal === -1 || proVal === -1) {
      // Enterprise service — give partial score for enterprise budgets
      if (answers.budget === 'enterprise') score += 15;
      else score += 3;
    }

    // 3. Challenge keyword match (weight: 30)
    const keywords = CHALLENGE_KEYWORDS[answers.challenge] || [];
    if (keywords.length > 0) {
      const searchable = [
        service.title,
        service.description,
        ...service.features,
        ...service.benefits,
      ]
        .join(' ')
        .toLowerCase();

      let keywordHits = 0;
      for (const kw of keywords) {
        if (searchable.includes(kw.toLowerCase())) keywordHits++;
      }
      // Normalize: max 30 for hitting 60% of keywords
      const hitRatio = keywordHits / keywords.length;
      score += Math.round(hitRatio * 30);
    }

    // 4. Company size fit (weight: 15)
    const entVal = parseBudgetValue(service.pricing.enterprise);
    if (answers.companySize === 'enterprise') {
      // Enterprise orgs: prefer services with enterprise pricing or high-tier plans
      if (entVal === -1 || entVal > 0) score += 15;
      else if (proVal > 1000) score += 10;
      else score += 5;
    } else if (answers.companySize === 'midmarket') {
      if (proVal >= 500 && proVal <= 5000) score += 15;
      else if (entVal === -1) score += 5;
      else score += 10;
    } else if (answers.companySize === 'smb') {
      if (basicVal >= 0 && basicVal <= 1000) score += 15;
      else if (proVal >= 0 && proVal <= 2000) score += 12;
      else score += 5;
    } else if (answers.companySize === 'startup') {
      if (basicVal >= 0 && basicVal <= 500) score += 15;
      else if (proVal >= 0 && proVal <= 1000) score += 10;
      else score += 3;
    }

    // 5. Tech stack affinity (weight: 10)
    const serviceText = [service.title, service.description, ...service.features].join(' ').toLowerCase();
    const techKeywords: Record<string, string[]> = {
      aws: ['aws', 'amazon', 's3', 'lambda', 'ec2', 'cloudformation'],
      azure: ['azure', 'microsoft', 'office 365', 'active directory'],
      gcp: ['gcp', 'google cloud', 'bigquery', 'firebase'],
      'multi-cloud': ['multi-cloud', 'multi cloud', 'hybrid', 'cross-cloud'],
      'on-premise': ['on-premise', 'on premise', 'on-prem', 'self-hosted', 'private cloud'],
      hybrid: ['hybrid', 'multi-cloud', 'edge', 'private cloud'],
      kubernetes: ['kubernetes', 'k8s', 'container', 'docker', 'helm', 'pod', 'orchestration'],
      serverless: ['serverless', 'lambda', 'cloud functions', 'faas', 'edge function'],
    };
    const tKeywords = techKeywords[answers.techStack] || [];
    let techHits = 0;
    for (const kw of tKeywords) {
      if (serviceText.includes(kw.toLowerCase())) techHits++;
    }
    score += Math.min(10, techHits * 3);

    // 6. Popularity bonus (small nudge)
    if (service.popular) score += 3;

    return { service, score };
  });

  // Sort by score descending
  scores.sort((a, b) => b.score - a.score);
  return scores;
}

// ─── Step Components ─────────────────────────────────────────────────────────

interface StepProps<T extends string> {
  options: { value: string; label: string; icon: string; desc?: string; range?: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

function OptionGrid<T extends string>({ options, selected, onSelect }: StepProps<T>) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className={[
              'group relative flex flex-col items-start rounded-2xl border-2 px-5 py-4 text-left transition-all duration-300',
              'hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950',
              isSelected
                ? 'border-purple-500 bg-purple-500/15 shadow-lg shadow-purple-500/20'
                : 'border-slate-700/60 bg-slate-800/40 hover:border-purple-400/50 hover:bg-slate-800/70',
            ].join(' ')}
          >
            {/* Selection indicator */}
            <div
              className={[
                'absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300',
                isSelected
                  ? 'scale-100 bg-purple-500 text-white'
                  : 'scale-75 border-2 border-slate-600 bg-transparent opacity-0 group-hover:opacity-100',
              ].join(' ')}
            >
              {isSelected && (
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <span className="mb-1 text-2xl">{opt.icon}</span>
            <span
              className={[
                'text-base font-semibold transition-colors duration-200',
                isSelected ? 'text-purple-300' : 'text-slate-200 group-hover:text-white',
              ].join(' ')}
            >
              {opt.label}
            </span>
            {(opt.desc || opt.range) && (
              <span className="mt-0.5 text-sm text-slate-400">{opt.desc || opt.range}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ServiceConfigurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    industry: '',
    companySize: '',
    budget: '',
    challenge: '',
    techStack: '',
  });
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [animDir, setAnimDir] = useState<'in' | 'out'>('in');

  const stepKey = STEPS[currentStep].key;
  const isLastStep = currentStep === STEPS.length - 1;
  const canProceed = answers[stepKey] !== '';
  const progress = hasStarted ? ((currentStep + (showResults ? 1 : 0)) / STEPS.length) * 100 : 0;

  const updateAnswer = useCallback(
    (key: StepKey, value: string) => {
      setAnswers((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const goNext = useCallback(() => {
    if (!canProceed) return;
    if (isLastStep) {
      setAnimDir('out');
      setTimeout(() => {
        setShowResults(true);
        setAnimDir('in');
      }, 200);
    } else {
      setAnimDir('out');
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
        setAnimDir('in');
      }, 200);
    }
  }, [canProceed, isLastStep]);

  const goBack = useCallback(() => {
    if (showResults) {
      setAnimDir('out');
      setTimeout(() => {
        setShowResults(false);
        setAnimDir('in');
      }, 200);
    } else if (currentStep > 0) {
      setAnimDir('out');
      setTimeout(() => {
        setCurrentStep((s) => s - 1);
        setAnimDir('in');
      }, 200);
    }
  }, [showResults, currentStep]);

  const restart = useCallback(() => {
    setAnimDir('out');
    setTimeout(() => {
      setAnswers({ industry: '', companySize: '', budget: '', challenge: '', techStack: '' });
      setCurrentStep(0);
      setShowResults(false);
      setHasStarted(false);
      setAnimDir('in');
    }, 200);
  }, []);

  // ── Compute results ──────────────────────────────────────────────────────

  const results = useMemo<ScoredService[]>(() => {
    if (!showResults) return [];
    const scored = scoreServices(answers);
    return scored.slice(0, 8);
  }, [showResults, answers]);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section id="service-configurator" className="relative w-full">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 rounded-3xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">
        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            AI Service Configurator
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Find Your Perfect{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Solution
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            Answer 5 quick questions and we'll match you with the best AI & IT services for your business.
          </p>
        </div>

        {/* ── Progress Bar ───────────────────────────────────────────── */}
        {hasStarted && (
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>
                Step {currentStep + 1} of {STEPS.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Step indicators */}
            <div className="mt-4 flex justify-between">
              {STEPS.map((step, i) => {
                const done = showResults || i < currentStep;
                const active = i === currentStep && !showResults;
                return (
                  <div key={step.key} className="flex flex-col items-center">
                    <div
                      className={[
                        'flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all duration-300',
                        done
                          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                          : active
                            ? 'border-2 border-purple-400 bg-purple-500/20 text-purple-300'
                            : 'border border-slate-700 bg-slate-800 text-slate-500',
                      ].join(' ')}
                    >
                      {done ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span>{i + 1}</span>
                      )}
                    </div>
                    <span
                      className={[
                        'mt-1.5 hidden text-[10px] font-medium sm:block',
                        active ? 'text-purple-300' : done ? 'text-slate-300' : 'text-slate-600',
                      ].join(' ')}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Content Area ───────────────────────────────────────────── */}
        <div
          className={[
            'transition-all duration-200',
            animDir === 'in' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ].join(' ')}
        >
          {/* ── Welcome Screen ──────────────────────────────────────── */}
          {!hasStarted && !showResults && (
            <div className="py-8 text-center sm:py-12">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-5xl shadow-xl shadow-purple-500/10">
                ⚡
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Ready to discover your ideal solution?
              </h3>
              <p className="mx-auto mb-8 max-w-md text-slate-400">
                Our smart configurator analyzes thousands of service combinations to recommend the perfect fit for your
                business needs. Takes less than 2 minutes.
              </p>
              <button
                type="button"
                onClick={() => setHasStarted(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          )}

          {/* ── Quiz Steps ──────────────────────────────────────────── */}
          {hasStarted && !showResults && (
            <div>
              {/* Step title */}
              <div className="mb-6 text-center">
                <span className="mb-2 inline-block text-4xl">{STEPS[currentStep].icon}</span>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {currentStep === 0 && 'What industry are you in?'}
                  {currentStep === 1 && "What's your company size?"}
                  {currentStep === 2 && 'What is your monthly budget?'}
                  {currentStep === 3 && 'What is your primary challenge?'}
                  {currentStep === 4 && 'Which tech stack do you use?'}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {currentStep === 0 && 'Select the option that best describes your business.'}
                  {currentStep === 1 && 'This helps us recommend the right scale of solution.'}
                  {currentStep === 2 && 'Choose a comfortable monthly investment range.'}
                  {currentStep === 3 && 'Pick the main problem you want to solve.'}
                  {currentStep === 4 && 'Select your primary infrastructure platform.'}
                </p>
              </div>

              {/* Step options */}
              {currentStep === 0 && (
                <OptionGrid
                  options={INDUSTRY_OPTIONS}
                  selected={answers.industry}
                  onSelect={(v) => updateAnswer('industry', v)}
                />
              )}
              {currentStep === 1 && (
                <OptionGrid
                  options={COMPANY_SIZE_OPTIONS}
                  selected={answers.companySize}
                  onSelect={(v) => updateAnswer('companySize', v)}
                />
              )}
              {currentStep === 2 && (
                <OptionGrid
                  options={BUDGET_OPTIONS}
                  selected={answers.budget}
                  onSelect={(v) => updateAnswer('budget', v)}
                />
              )}
              {currentStep === 3 && (
                <OptionGrid
                  options={CHALLENGE_OPTIONS}
                  selected={answers.challenge}
                  onSelect={(v) => updateAnswer('challenge', v)}
                />
              )}
              {currentStep === 4 && (
                <OptionGrid
                  options={TECH_STACK_OPTIONS}
                  selected={answers.techStack}
                  onSelect={(v) => updateAnswer('techStack', v)}
                />
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={currentStep === 0}
                  className={[
                    'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200',
                    currentStep === 0
                      ? 'cursor-not-allowed text-slate-600'
                      : 'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white',
                  ].join(' ')}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Back
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceed}
                  className={[
                    'inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300',
                    canProceed
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30'
                      : 'cursor-not-allowed bg-slate-800 text-slate-600',
                  ].join(' ')}
                >
                  {isLastStep ? 'See Results' : 'Continue'}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* ── Results ──────────────────────────────────────────────── */}
          {showResults && (
            <div>
              {/* Results header */}
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 text-3xl shadow-lg shadow-emerald-500/10">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Your Recommended Services
                </h3>
                <p className="mx-auto mt-2 max-w-lg text-slate-400">
                  Based on your answers, here are the top AI & IT solutions matched to your needs.
                </p>
              </div>

              {/* Answer summary chips */}
              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {answers.industry && (
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    {INDUSTRY_OPTIONS.find((o) => o.value === answers.industry)?.label || answers.industry}
                  </span>
                )}
                {answers.companySize && (
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    {COMPANY_SIZE_OPTIONS.find((o) => o.value === answers.companySize)?.label}
                  </span>
                )}
                {answers.budget && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {BUDGET_OPTIONS.find((o) => o.value === answers.budget)?.range}
                  </span>
                )}
              </div>

              {/* Service cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {results.map((item, i) => {
                  const service = item.service;
                  const displayPrice = getPricingForBudget(answers.budget, service);
                  const isPopular = service.popular;
                  const rank = i + 1;

                  return (
                    <div
                      key={service.id}
                      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-purple-500/5"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {/* Popular badge */}
                      {isPopular && (
                        <div className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          Popular
                        </div>
                      )}

                      <div className="flex flex-1 flex-col p-5">
                        {/* Header */}
                        <div className="mb-3 flex items-start gap-3">
                          <div
                            className={[
                              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg',
                              rank <= 3
                                ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/20'
                                : 'bg-slate-700/50',
                            ].join(' ')}
                          >
                            {service.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-base font-bold leading-tight text-white group-hover:text-purple-200 transition-colors">
                              {service.title}
                            </h4>
                            <div className="mt-0.5 flex items-center gap-2">
                              <span className="text-sm font-semibold text-emerald-400">
                                From {displayPrice}
                              </span>
                              {rank <= 3 && (
                                <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-[10px] font-bold text-yellow-400">
                                  #{rank} Match
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                          {service.description && service.description !== 'Service description.'
                            ? service.description.slice(0, 140) + (service.description.length > 140 ? '…' : '')
                            : 'Comprehensive managed service with expert support and proven delivery methodology.'}
                        </p>

                        {/* Features */}
                        {service.features.length > 0 && (
                          <ul className="mb-4 space-y-1">
                            {service.features.slice(0, 3).map((f, fi) => (
                              <li key={fi} className="flex items-start gap-2 text-xs text-slate-400">
                                <svg
                                  className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="line-clamp-1">{f}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* CTA */}
                        <a
                          href={service.href}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600/80 to-blue-600/80 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                          Learn More
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Contact CTA ──────────────────────────────────────────── */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-blue-900/40 p-6 sm:p-8">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-white sm:text-2xl">
                      Need a custom proposal?
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">
                      Our team of experts will craft a tailored solution specifically for your business.
                    </p>
                  </div>
                  <a
                    href="/configurator/"
                    className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                  >
                    Get Custom Proposal
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center gap-4 border-t border-slate-700/50 pt-6 sm:flex-row sm:gap-8">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-purple-300"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    kleber@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-purple-300"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>

              {/* Restart */}
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-sm font-medium text-slate-400 transition-all duration-200 hover:border-purple-500/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
