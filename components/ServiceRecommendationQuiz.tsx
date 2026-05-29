'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizAnswer {
  questionId: string;
  answer: string;
}

interface ServiceRecommendation {
  id: string;
  name: string;
  category: string;
  reason: string;
  roi: number;
  monthlyCost: number;
  annualSavings: number;
  icon: string;
}

interface QuizResults {
  recommendations: ServiceRecommendation[];
  totalROI: number;
  totalMonthlyCost: number;
  totalAnnualSavings: number;
  industry: string;
  companySize: string;
  painPoints: string[];
}

const questions = [
  {
    id: 'industry',
    question: 'What industry is your business in?',
    type: 'select',
    options: [
      { value: 'technology', label: 'Technology / SaaS' },
      { value: 'healthcare', label: 'Healthcare / Medical' },
      { value: 'finance', label: 'Finance / Banking' },
      { value: 'retail', label: 'Retail / E-commerce' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'education', label: 'Education' },
      { value: 'professional', label: 'Professional Services' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'company_size',
    question: 'How many employees does your company have?',
    type: 'select',
    options: [
      { value: '1-10', label: '1-10 employees' },
      { value: '11-50', label: '11-50 employees' },
      { value: '51-200', label: '51-200 employees' },
      { value: '201-1000', label: '201-1000 employees' },
      { value: '1000+', label: '1000+ employees' },
    ],
  },
  {
    id: 'pain_points',
    question: 'What are your biggest business challenges? (Select all that apply)',
    type: 'multiselect',
    options: [
      { value: 'email_overload', label: 'Email overload and slow responses' },
      { value: 'customer_churn', label: 'Customer churn and retention' },
      { value: 'sales_efficiency', label: 'Sales team efficiency' },
      { value: 'data_analysis', label: 'Data analysis and insights' },
      { value: 'compliance', label: 'Compliance and security' },
      { value: 'marketing_roi', label: 'Marketing ROI and lead generation' },
      { value: 'operations', label: 'Operations and workflow automation' },
      { value: 'support_tickets', label: 'Support ticket volume' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your monthly budget for AI solutions?',
    type: 'select',
    options: [
      { value: 'under_1k', label: 'Under $1,000/month' },
      { value: '1k-5k', label: '$1,000 - $5,000/month' },
      { value: '5k-20k', label: '$5,000 - $20,000/month' },
      { value: '20k-100k', label: '$20,000 - $100,000/month' },
      { value: '100k+', label: '$100,000+/month' },
    ],
  },
  {
    id: 'timeline',
    question: 'When are you looking to implement solutions?',
    type: 'select',
    options: [
      { value: 'immediate', label: 'Immediately (within 30 days)' },
      { value: '1-3_months', label: '1-3 months' },
      { value: '3-6_months', label: '3-6 months' },
      { value: 'exploring', label: 'Just exploring options' },
    ],
  },
];

const serviceRecommendations: Record<string, ServiceRecommendation[]> = {
  email_overload: [
    {
      id: 'v80-email-intelligence',
      name: 'V80 Email Intelligence Suite',
      category: 'Email AI',
      reason: 'Solves email overload with smart responses, priority management, and reply-all enforcement',
      roi: 340,
      monthlyCost: 1499,
      annualSavings: 61164,
      icon: '📧',
    },
    {
      id: 'smart-response-generator',
      name: 'Smart Response Generator',
      category: 'Email AI',
      reason: '10x faster email responses with context-aware AI drafting',
      roi: 280,
      monthlyCost: 599,
      annualSavings: 20112,
      icon: '✨',
    },
  ],
  customer_churn: [
    {
      id: 'ai-customer-health-monitor',
      name: 'AI Customer Health Monitor',
      category: 'Customer Success',
      reason: 'Predicts churn 30 days in advance with 85% accuracy',
      roi: 420,
      monthlyCost: 1099,
      annualSavings: 55308,
      icon: '💊',
    },
    {
      id: 'ai-customer-journey-mapper',
      name: 'AI Customer Journey Mapper',
      category: 'Customer Success',
      reason: 'Identifies friction points and optimizes customer experience',
      roi: 380,
      monthlyCost: 1299,
      annualSavings: 59292,
      icon: '🗺️',
    },
  ],
  sales_efficiency: [
    {
      id: 'ai-lead-scorer',
      name: 'AI Lead Scorer',
      category: 'Sales AI',
      reason: 'Automatically prioritizes best leads for 35% higher conversion',
      roi: 450,
      monthlyCost: 799,
      annualSavings: 43146,
      icon: '🎯',
    },
    {
      id: 'ai-proposal-generator',
      name: 'AI Proposal Generator',
      category: 'Sales AI',
      reason: '80% faster proposal creation with 25% higher win rates',
      roi: 320,
      monthlyCost: 999,
      annualSavings: 38352,
      icon: '📄',
    },
  ],
  data_analysis: [
    {
      id: 'ai-data-quality-monitor',
      name: 'AI Data Quality Monitor',
      category: 'Data AI',
      reason: 'Ensures clean, reliable data for better decisions',
      roi: 290,
      monthlyCost: 999,
      annualSavings: 34764,
      icon: '🔍',
    },
    {
      id: 'ai-predictive-analytics',
      name: 'AI Predictive Analytics Platform',
      category: 'Analytics AI',
      reason: 'Forecasts trends and identifies opportunities with 92% accuracy',
      roi: 380,
      monthlyCost: 1699,
      annualSavings: 77454,
      icon: '📊',
    },
  ],
  compliance: [
    {
      id: 'compliance-guardian',
      name: 'Legal & Compliance Guardian',
      category: 'Security AI',
      reason: 'Prevents PII/PHI/PCI violations with real-time detection',
      roi: 520,
      monthlyCost: 749,
      annualSavings: 46716,
      icon: '⚖️',
    },
    {
      id: 'ai-compliance-report-generator',
      name: 'AI Compliance Report Generator',
      category: 'Compliance AI',
      reason: '90% time savings on compliance reporting with automated generation',
      roi: 340,
      monthlyCost: 1299,
      annualSavings: 52956,
      icon: '📋',
    },
  ],
  marketing_roi: [
    {
      id: 'ai-video-testimonial-platform',
      name: 'AI Video Testimonial Platform',
      category: 'Marketing AI',
      reason: '5x more video testimonials for 40% higher conversions',
      roi: 480,
      monthlyCost: 1299,
      annualSavings: 74844,
      icon: '🎥',
    },
    {
      id: 'ai-email-campaign-optimizer',
      name: 'AI Email Campaign Optimizer',
      category: 'Marketing AI',
      reason: '50% higher open rates with AI-powered optimization',
      roi: 360,
      monthlyCost: 699,
      annualSavings: 31884,
      icon: '📧',
    },
  ],
  operations: [
    {
      id: 'ai-workflow-automator',
      name: 'AI Workflow Automator',
      category: 'Operations AI',
      reason: '70% time savings with intelligent workflow automation',
      roi: 420,
      monthlyCost: 1299,
      annualSavings: 65508,
      icon: '⚙️',
    },
    {
      id: 'ai-document-classifier',
      name: 'AI Document Classifier',
      category: 'Productivity AI',
      reason: '95% accurate document categorization saves hours daily',
      roi: 280,
      monthlyCost: 499,
      annualSavings: 16764,
      icon: '📂',
    },
  ],
  support_tickets: [
    {
      id: 'ai-support-ticket-router',
      name: 'AI Support Ticket Router',
      category: 'Support AI',
      reason: 'Faster resolution with intelligent ticket routing',
      roi: 340,
      monthlyCost: 799,
      annualSavings: 32556,
      icon: '🎫',
    },
    {
      id: 'ai-knowledge-base-builder',
      name: 'AI Knowledge Base Builder',
      category: 'Support AI',
      reason: 'Self-maintaining knowledge base reduces tickets by 40%',
      roi: 380,
      monthlyCost: 899,
      annualSavings: 41004,
      icon: '📚',
    },
  ],
};

export default function ServiceRecommendationQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, answer }];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateResults(newAnswers);
    }
  };

  const handleMultiSelect = (value: string) => {
    const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
    let selectedValues: string[] = currentAnswer ? JSON.parse(currentAnswer.answer) : [];

    if (selectedValues.includes(value)) {
      selectedValues = selectedValues.filter(v => v !== value);
    } else {
      selectedValues.push(value);
    }

    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({ questionId: currentQuestion.id, answer: JSON.stringify(selectedValues) });
    setAnswers(newAnswers);
  };

  const generateResults = (quizAnswers: QuizAnswer[]) => {
    const painPointsAnswer = quizAnswers.find(a => a.questionId === 'pain_points');
    const painPoints: string[] = painPointsAnswer ? JSON.parse(painPointsAnswer.answer) : [];
    const industry = quizAnswers.find(a => a.questionId === 'industry')?.answer || 'other';
    const companySize = quizAnswers.find(a => a.questionId === 'company_size')?.answer || '1-10';

    let recommendations: ServiceRecommendation[] = [];
    painPoints.forEach(painPoint => {
      if (serviceRecommendations[painPoint]) {
        recommendations = [...recommendations, ...serviceRecommendations[painPoint]];
      }
    });

    // Remove duplicates and limit to top 6
    const uniqueRecommendations = recommendations.reduce((acc, current) => {
      const x = acc.find(item => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, [] as ServiceRecommendation[]).slice(0, 6);

    const totalMonthlyCost = uniqueRecommendations.reduce((sum, rec) => sum + rec.monthlyCost, 0);
    const totalAnnualSavings = uniqueRecommendations.reduce((sum, rec) => sum + rec.annualSavings, 0);
    const totalROI = Math.round((totalAnnualSavings / (totalMonthlyCost * 12)) * 100);

    setResults({
      recommendations: uniqueRecommendations,
      totalROI,
      totalMonthlyCost,
      totalAnnualSavings,
      industry,
      companySize,
      painPoints,
    });

    setShowResults(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to save lead
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate and download PDF
    generatePDF();

    setIsSubmitting(false);
  };

  const generatePDF = () => {
    if (!results) return;

    const pdfContent = `
ZION TECH GROUP - PERSONALIZED SERVICE RECOMMENDATIONS
=====================================================

Generated: ${new Date().toLocaleDateString()}

YOUR BUSINESS PROFILE
---------------------
Industry: ${results.industry}
Company Size: ${results.companySize} employees
Key Challenges: ${results.painPoints.join(', ')}

YOUR RECOMMENDED SOLUTIONS
---------------------------
${results.recommendations.map((rec, i) => `
${i + 1}. ${rec.name}
   Category: ${rec.category}
   Monthly Cost: $${rec.monthlyCost.toLocaleString()}/mo
   Annual Savings: $${rec.annualSavings.toLocaleString()}
   ROI: ${rec.roi}%
   
   Why: ${rec.reason}
`).join('\n')}

TOTAL INVESTMENT SUMMARY
------------------------
Total Monthly Investment: $${results.totalMonthlyCost.toLocaleString()}/mo
Total Annual Savings: $${results.totalAnnualSavings.toLocaleString()}
Overall ROI: ${results.totalROI}%

NEXT STEPS
----------
1. Review the recommended solutions above
2. Schedule a consultation with our team
3. Get a detailed implementation plan
4. Start seeing results in 30-60 days

CONTACT US
----------
Email: kleber@ziontechgroup.com
Phone: +1 302 464 0950
Website: https://ziontechgroup.com

=====================================================
Thank you for choosing Zion Tech Group!
`;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Zion_Tech_Group_Recommendations.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResults(null);
    setShowResults(false);
    setEmail('');
  };

  if (showResults && results) {
    return (
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container-page max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Personalized Recommendations
            </h2>
            <p className="text-xl text-slate-300">
              Based on your business needs, we recommend these AI-powered solutions
            </p>
          </motion.div>

          {/* ROI Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Investment Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  ${results.totalMonthlyCost.toLocaleString()}
                </div>
                <div className="text-slate-400">Monthly Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  ${results.totalAnnualSavings.toLocaleString()}
                </div>
                <div className="text-slate-400">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {results.totalROI}%
                </div>
                <div className="text-slate-400">Total ROI</div>
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {results.recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{rec.icon}</div>
                  <div className="flex-1">
                    <div className="text-xs text-purple-400 font-semibold mb-1">{rec.category}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{rec.name}</h4>
                    <p className="text-slate-300 text-sm mb-3">{rec.reason}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
                  <div className="text-center">
                    <div className="text-green-400 font-bold">${rec.monthlyCost}/mo</div>
                    <div className="text-slate-500 text-xs">Cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold">${(rec.annualSavings / 1000).toFixed(0)}K</div>
                    <div className="text-slate-500 text-xs">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold">{rec.roi}%</div>
                    <div className="text-slate-500 text-xs">ROI</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Your Full Recommendations Report
            </h3>
            <p className="text-slate-300 mb-6">
              Enter your email to download a detailed PDF with implementation timelines, case studies, and next steps
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Download Report'}
              </button>
            </form>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-transform text-center"
            >
              Schedule Consultation
            </a>
            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container-page max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold mb-4">
            🎯 AI-Powered Service Finder
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect AI Solutions
          </h2>
          <p className="text-xl text-slate-300">
            Answer 5 quick questions and get personalized service recommendations with ROI projections
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {currentQuestion.question}
            </h3>

            {currentQuestion.type === 'select' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all text-left"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'multiselect' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((option) => {
                  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
                  const selectedValues: string[] = currentAnswer ? JSON.parse(currentAnswer.answer) : [];
                  const isSelected = selectedValues.includes(option.value);

                  return (
                    <button
                      key={option.value}
                      onClick={() => handleMultiSelect(option.value)}
                      className={`px-6 py-4 border rounded-lg text-left transition-all ${
                        isSelected
                          ? 'bg-purple-500/20 border-purple-500 text-white'
                          : 'bg-slate-800/50 border-slate-700 text-white hover:border-purple-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          isSelected ? 'bg-purple-500 border-purple-500' : 'border-slate-600'
                        }`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === 'multiselect' && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    if (currentStep < questions.length - 1) {
                      setCurrentStep(currentStep + 1);
                    } else {
                      generateResults(answers);
                    }
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  {currentStep < questions.length - 1 ? 'Next' : 'Get Recommendations'}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Back Button */}
        {currentStep > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ← Back to previous question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
