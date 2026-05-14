'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Database,
  Users,
  Shield,
  Target,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertTriangle,
  Star,
  TrendingUp,
  Zap,
  Mail,
  Phone,
  ExternalLink,
  Lightbulb,
  BarChart3,
  Rocket,
} from 'lucide-react';

interface Question {
  id: string;
  category: string;
  question: string;
  description: string;
  icon: React.ReactNode;
  options: {
    score: number;
    label: string;
    description: string;
  }[];
}

const questions: Question[] = [
  // Data Maturity
  {
    id: 'data-centralization',
    category: 'Data Maturity',
    question: 'How centralized is your business data?',
    description: 'Do you have a single source of truth, or is data scattered across spreadsheets and silos?',
    icon: <Database className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Spreadsheet chaos', description: 'Data lives across Excel files, emails, and individual drives' },
      { score: 2, label: 'Partially organized', description: 'Some databases exist but they\'re not connected' },
      { score: 3, label: 'Integrated systems', description: 'CRM, ERP, and analytics are connected' },
      { score: 4, label: 'Data warehouse', description: 'Centralized data lake with governed access' },
      { score: 5, label: 'Real-time analytics', description: 'Streaming data pipeline with live dashboards' },
    ],
  },
  {
    id: 'data-quality',
    category: 'Data Maturity',
    question: 'How would you rate your data quality?',
    description: 'Are your datasets clean, complete, and reliable for decision-making?',
    icon: <Database className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Very poor', description: 'Frequent duplicates, missing fields, no validation' },
      { score: 2, label: 'Inconsistent', description: 'Some cleaning exists but standards vary by team' },
      { score: 3, label: 'Acceptable', description: 'Basic data governance with periodic cleanup' },
      { score: 4, label: 'High quality', description: 'Automated validation, deduplication, and monitoring' },
      { score: 5, label: 'Excellent', description: 'ML-driven data quality scoring and auto-correction' },
    ],
  },
  // Infrastructure
  {
    id: 'cloud-adoption',
    category: 'Infrastructure',
    question: 'What is your current cloud infrastructure state?',
    description: 'How modern and scalable is your technology infrastructure?',
    icon: <Zap className="w-6 h-6" />,
    options: [
      { score: 1, label: 'On-premise only', description: 'All systems run on local servers with manual management' },
      { score: 2, label: 'Partial cloud', description: 'Some workloads migrated but no unified strategy' },
      { score: 3, label: 'Cloud-first', description: 'Mostly cloud-native with some legacy holdovers' },
      { score: 4, label: 'Hybrid optimized', description: 'Multi-cloud with IaC, auto-scaling, and CI/CD' },
      { score: 5, label: 'Cloud-native + AI', description: 'Serverless, event-driven, with AI-optimized resource allocation' },
    ],
  },
  {
    id: 'security-posture',
    category: 'Infrastructure',
    question: 'How mature is your cybersecurity posture?',
    description: 'Do you have proactive security measures and compliance frameworks?',
    icon: <Shield className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Reactive', description: 'Security issues are addressed after they occur' },
      { score: 2, label: 'Basic', description: 'Firewall, antivirus, and annual penetration tests' },
      { score: 3, label: 'Structured', description: 'SOC monitoring, regular audits, incident response plan' },
      { score: 4, label: 'Advanced', description: 'Zero-trust architecture, automated threat detection' },
      { score: 5, label: 'AI-driven', description: 'ML-powered threat intelligence and autonomous response' },
    ],
  },
  // Team & Culture
  {
    id: 'ai-literacy',
    category: 'Team & Culture',
    question: 'How AI-literate is your team?',
    description: 'Does your workforce understand and feel comfortable with AI tools?',
    icon: <Users className="w-6 h-6" />,
    options: [
      { score: 1, label: 'None', description: 'Most team members haven\'t used AI tools' },
      { score: 2, label: 'Early adopters', description: 'A few individuals experiment with ChatGPT and similar' },
      { score: 3, label: 'Growing awareness', description: 'Some training provided; AI tools are being explored' },
      { score: 4, label: 'AI-enabled', description: 'AI tools are part of daily workflows for many teams' },
      { score: 5, label: 'AI-native culture', description: 'AI-first mindset; continuous learning and experimentation' },
    ],
  },
  {
    id: 'decision-making',
    category: 'Team & Culture',
    question: 'How are strategic decisions made today?',
    description: 'Do you rely on gut feel, reports, or data-driven analytics?',
    icon: <Brain className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Intuition-based', description: 'Experience and gut feel drive most decisions' },
      { score: 2, label: 'Retrospective', description: 'We look at past reports but they\'re often outdated' },
      { score: 3, label: 'Data-informed', description: 'Dashboards and BI tools guide key decisions' },
      { score: 4, label: 'Predictive', description: 'Forecasting models and scenario planning are standard' },
      { score: 5, label: 'Prescriptive AI', description: 'AI recommends optimal actions with confidence intervals' },
    ],
  },
  // Process & Automation
  {
    id: 'process-maturity',
    category: 'Process & Automation',
    question: 'How standardized are your business processes?',
    description: 'Are workflows documented, optimized, and ready for AI integration?',
    icon: <Target className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Ad hoc', description: 'Processes exist mostly in people\'s heads' },
      { score: 2, label: 'Documented', description: 'SOPs exist but aren\'t always followed' },
      { score: 3, label: 'Standardized', description: 'Clear workflows with defined roles and KPIs' },
      { score: 4, label: 'Automated', description: 'Key processes are digitized and partially automated' },
      { score: 5, label: 'AI-optimized', description: 'Processes self-optimize using AI feedback loops' },
    ],
  },
  {
    id: 'automation-readiness',
    category: 'Process & Automation',
    question: 'What level of automation exists today?',
    description: 'How many repetitive tasks are already automated versus manual?',
    icon: <BarChart3 className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Manual everything', description: 'Almost all work is done manually' },
      { score: 2, label: 'Basic scripts', description: 'Some spreadsheet macros and simple scripts' },
      { score: 3, label: 'Workflow tools', description: 'Zapier/Make integrations handle some cross-app tasks' },
      { score: 4, label: 'AI-assisted', description: 'Copilot agents, AI content generation, and smart routing' },
      { score: 5, label: 'Autonomous ops', description: 'Self-healing systems with AI agents managing workflows' },
    ],
  },
  // Strategy & Investment
  {
    id: 'ai-strategy',
    category: 'Strategy & Investment',
    question: 'Do you have a defined AI strategy?',
    description: 'Is AI part of your business roadmap with clear goals and budget?',
    icon: <Rocket className="w-6 h-6" />,
    options: [
      { score: 1, label: 'None', description: 'AI is not yet on our business roadmap' },
      { score: 2, label: 'Exploring', description: 'We\'re researching and discussing AI possibilities' },
      { score: 3, label: 'Planned', description: 'AI initiatives are in the 12-month roadmap with tentative budget' },
      { score: 4, label: 'Active investment', description: 'Dedicated AI budget, team, and pilot projects underway' },
      { score: 5, label: 'Core competency', description: 'AI is central to our strategy with sustained investment' },
    ],
  },
  {
    id: 'budget-allocation',
    category: 'Strategy & Investment',
    question: 'What is your annual technology innovation budget?',
    description: 'How much does your organization invest in new technology each year?',
    icon: <TrendingUp className="w-6 h-6" />,
    options: [
      { score: 1, label: 'Minimal', description: 'Under $10K — mostly maintenance spend' },
      { score: 2, label: 'Modest', description: '$10K–$50K with some room for new tools' },
      { score: 3, label: 'Growing', description: '$50K–$200K with dedicated innovation line items' },
      { score: 4, label: 'Strategic', description: '$200K–$1M with formal AI/tech investment planning' },
      { score: 5, label: 'Enterprise-class', description: '$1M+ with C-level sponsorship and multi-year commitments' },
    ],
  },
];

const categories = [...new Set(questions.map((q) => q.category))];

interface ScoreCategory {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  icon: React.ReactNode;
  recommendation: string;
}

export default function AIReadinessAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = questions.length;
  const isLastStep = currentStep === totalQuestions - 1;
  const progress = ((currentStep + 1) / totalQuestions) * 100;

  const handleSelect = useCallback((optionIndex: number) => {
    setSelectedOption(optionIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;
    const question = questions[currentStep];
    setAnswers((prev) => ({
      ...prev,
      [question.id]: question.options[selectedOption].score,
    }));
    setSelectedOption(null);

    if (isLastStep) {
      setShowResults(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [selectedOption, currentStep, isLastStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      const prevQuestion = questions[currentStep - 1];
      setSelectedOption(answers[prevQuestion.id] !== undefined
        ? questions[currentStep - 1].options.findIndex((o) => o.score === answers[prevQuestion.id])
        : null);
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, answers]);

  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
  }, []);

  const scoreCategories = useMemo((): ScoreCategory[] => {
    return categories.map((category) => {
      const categoryQuestions = questions.filter((q) => q.category === category);
      const maxScore = categoryQuestions.length * 5;
      const score = categoryQuestions.reduce(
        (sum, q) => sum + (answers[q.id] || 0),
        0
      );
      const percentage = Math.round((score / maxScore) * 100);

      let icon = <Brain className="w-5 h-5" />;
      let recommendation = '';

      switch (category) {
        case 'Data Maturity':
          icon = <Database className="w-5 h-5" />;
          recommendation = percentage < 50
            ? 'Start with a data audit and consolidation plan. Zion can help build your data foundation.'
            : percentage < 75
            ? 'Your data is organized — consider upgrading to real-time analytics and predictive models.'
            : 'Excellent data maturity! You\'re ready for advanced AI and ML workloads.';
          break;
        case 'Infrastructure':
          icon = <Zap className="w-5 h-5" />;
          recommendation = percentage < 50
            ? 'Modernize your infrastructure first. Zion offers cloud migration and security hardening.'
            : percentage < 75
            ? 'Solid foundation. Next: implement AI-driven monitoring and auto-scaling.'
            : 'Enterprise-grade infrastructure. You\'re primed for AI integration.';
          break;
        case 'Team & Culture':
          icon = <Users className="w-5 h-5" />;
          recommendation = percentage < 50
            ? 'Invest in AI literacy training. Zion can design a custom upskilling program.'
            : percentage < 75
            ? 'Good awareness. Build on this with hands-on AI workshops and pilot teams.'
            : 'AI-native culture! Leverage it to accelerate adoption across departments.';
          break;
        case 'Process & Automation':
          icon = <Target className="w-5 h-5" />;
          recommendation = percentage < 50
            ? 'Document and standardize processes first. Zion\'s process mapping service can help.'
            : percentage < 75
            ? 'Processes are defined — now automate them with AI-powered workflows.'
            : 'Excellent! Your processes are ripe for autonomous AI agents.';
          break;
        case 'Strategy & Investment':
          icon = <Rocket className="w-5 h-5" />;
          recommendation = percentage < 50
            ? 'Develop a clear AI roadmap. Zion offers free strategy consultations to get started.'
            : percentage < 75
            ? 'Good planning. Align your AI initiatives with measurable ROI targets.'
            : 'Strong commitment. You\'re positioned for enterprise AI transformation.';
          break;
      }

      return { name: category, score, maxScore, percentage, icon, recommendation };
    });
  }, [answers]);

  const overallScore = useMemo(() => {
    const total = Object.values(answers).reduce((sum, s) => sum + s, 0);
    const max = totalQuestions * 5;
    return Math.round((total / max) * 100);
  }, [answers]);

  const getScoreLabel = (score: number) => {
    if (score >= 80) return { label: 'AI-Ready', color: 'text-green-400', bg: 'bg-green-500' };
    if (score >= 60) return { label: 'Progressing', color: 'text-blue-400', bg: 'bg-blue-500' };
    if (score >= 40) return { label: 'Getting Started', color: 'text-yellow-400', bg: 'bg-yellow-500' };
    return { label: 'Early Stage', color: 'text-orange-400', bg: 'bg-orange-500' };
  };

  const scoreInfo = getScoreLabel(overallScore);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-6">
              <Star className="w-4 h-4" />
              Assessment Complete
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your AI Readiness Report
            </h1>
            <p className="text-slate-400 text-lg">
              Here is your personalized AI maturity analysis with specific recommendations
            </p>
          </motion.div>

          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgb(51 65 85)" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="45" fill="none"
                    className={scoreInfo.color.replace('text', 'stroke')}
                    strokeWidth="8"
                    strokeDasharray={`${overallScore * 2.83} 283`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-bold ${scoreInfo.color}`}>{overallScore}%</span>
                  <span className="text-slate-400 text-sm">{scoreInfo.label}</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {overallScore >= 60
                    ? 'You are on the right track!'
                    : 'There is significant opportunity ahead'}
                </h2>
                <p className="text-slate-400">
                  {overallScore >= 80
                    ? 'Your organization is highly prepared for AI adoption. Focus on targeted AI projects to maximize ROI.'
                    : overallScore >= 60
                    ? 'Strong foundations are in place. Strategic AI investments will accelerate your transformation.'
                    : overallScore >= 40
                    ? 'You have early wins available. Start with data consolidation and process automation for quick wins.'
                    : 'Begin with infrastructure modernization and AI literacy programs. Contact us for a free consultation.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Breakdown by Category
            </h3>
            {scoreCategories.map((cat) => (
              <div key={cat.name} className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">{cat.icon}</div>
                    <span className="text-white font-medium">{cat.name}</span>
                  </div>
                  <span className={`text-lg font-bold ${cat.percentage >= 60 ? 'text-green-400' : cat.percentage >= 40 ? 'text-yellow-400' : 'text-orange-400'}`}>
                    {cat.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full transition-all duration-700 ${cat.percentage >= 60 ? 'bg-green-500' : cat.percentage >= 40 ? 'bg-yellow-500' : 'bg-orange-500'}`}
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                <p className="text-slate-400 text-sm">{cat.recommendation}</p>
              </div>
            ))}
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Recommended Next Steps
            </h3>
            <ul className="space-y-3">
              {scoreCategories
                .sort((a, b) => a.percentage - b.percentage)
                .slice(0, 3)
                .map((cat) => (
                  <li key={cat.name} className="flex items-start gap-3 text-slate-300">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>{cat.name}</strong> ({cat.percentage}%): {cat.recommendation}</span>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Accelerate Your AI Journey?
            </h3>
            <p className="text-slate-400 mb-6">
              Get a personalized AI transformation roadmap from our experts. Free consultation, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Schedule Free Consultation
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors"
              >
                Explore Our Services
              </a>
            </div>
            <div className="text-slate-400 text-sm space-y-1">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> kleber@ziontechgroup.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> +1 302 464 0950
              </p>
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>

          {/* Restart */}
          <div className="text-center mt-8">
            <button
              onClick={handleRestart}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              <ChevronLeft className="w-4 h-4" />
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question view
  const question = questions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
            <Brain className="w-4 h-4" />
            Interactive Assessment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            AI Readiness Assessment
          </h1>
          <p className="text-slate-400 text-lg">
            Evaluate your organization&apos;s readiness for AI adoption in under 3 minutes
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {currentStep + 1} of {totalQuestions}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-blue-500"
              initial={{ width: `${((currentStep) / totalQuestions) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {/* Category indicators */}
          <div className="flex justify-between mt-2 px-1">
            {categories.map((cat, i) => {
              const catStart = questions.findIndex((q) => q.category === cat);
              const catEnd = catStart + questions.filter((q) => q.category === cat).length;
              const isInCategory = currentStep >= catStart && currentStep < catEnd;
              const isPastCategory = currentStep >= catEnd;
              return (
                <div
                  key={cat}
                  className={`w-8 h-1 rounded-full ${isInCategory ? 'bg-blue-400' : isPastCategory ? 'bg-blue-500/50' : 'bg-slate-700/50'}`}
                  title={cat}
                />
              );
            })}
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400">{question.icon}</div>
                <span className="text-blue-400 text-sm font-medium">{question.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{question.question}</h2>
              <p className="text-slate-400 mb-6">{question.description}</p>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedOption === idx
                        ? 'border-blue-500 bg-blue-500/10 text-white'
                        : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:border-slate-600 hover:bg-slate-700/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedOption === idx
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-slate-600'
                        }`}
                      >
                        {selectedOption === idx && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-slate-400 text-sm">{option.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedOption === null
                ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isLastStep ? 'See Results' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>Free assessment by Zion Tech Group • No sign-up required</p>
          <p className="mt-1">
            Mobile: +1 302 464 0950 • Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
