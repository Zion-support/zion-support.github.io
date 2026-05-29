'use client';

import { useState, useRef, useEffect } from 'react';
import { allServices } from '@/app/data/servicesData';
import Link from 'next/link';

interface Message {
  role: 'bot' | 'user';
  text: string;
  options?: string[];
  recommendations?: RecommendedService[];
}

interface RecommendedService {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: Record<string, string>;
  href: string;
}

const QUESTIONS = [
  {
    id: 'industry',
    question: '👋 Hi! I\'m Zion AI Assistant. Let me find the perfect services for your business. What industry are you in?',
    options: ['Technology & SaaS', 'Healthcare', 'Finance & Banking', 'Retail & E-commerce', 'Manufacturing', 'Education', 'Other'],
  },
  {
    id: 'size',
    question: '📊 How big is your company?',
    options: ['Startup (1-10)', 'Small (11-50)', 'Medium (51-200)', 'Enterprise (200+)'],
  },
  {
    id: 'priority',
    question: '🎯 What\'s your top priority right now?',
    options: ['Reduce Costs', 'Increase Revenue', 'Improve Security', 'Automate Processes', 'Better Data Insights', 'Scale Infrastructure'],
  },
  {
    id: 'tech',
    question: '⚙️ What\'s your main technology focus?',
    options: ['AI & Machine Learning', 'Cloud Migration', 'Cybersecurity', 'DevOps & Automation', 'Data Analytics', 'Custom Software'],
  },
  {
    id: 'budget',
    question: '💰 What\'s your approximate monthly budget for new solutions?',
    options: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $20,000', '$20,000+'],
  },
];

// Category scoring based on user answers
const INDUSTRY_WEIGHTS: Record<string, Record<string, number>> = {
  'Technology & SaaS': { ai: 1.3, it: 1.2, cloud: 1.3, automation: 1.2, data: 1.1, security: 1.1 },
  'Healthcare': { ai: 1.2, security: 1.4, data: 1.3, it: 1.1, cloud: 1.0, automation: 1.0 },
  'Finance & Banking': { ai: 1.2, security: 1.5, data: 1.4, it: 1.1, cloud: 1.0, automation: 1.1 },
  'Retail & E-commerce': { ai: 1.3, data: 1.3, automation: 1.2, cloud: 1.1, it: 1.0, security: 1.0 },
  'Manufacturing': { ai: 1.2, automation: 1.4, it: 1.2, data: 1.1, cloud: 1.0, security: 1.0 },
  'Education': { ai: 1.2, cloud: 1.2, automation: 1.1, data: 1.1, it: 1.0, security: 1.0 },
  'Other': { ai: 1.1, it: 1.1, cloud: 1.1, security: 1.1, data: 1.1, automation: 1.1 },
};

const PRIORITY_WEIGHTS: Record<string, Record<string, number>> = {
  'Reduce Costs': { automation: 1.4, cloud: 1.3, ai: 1.2, it: 1.1, data: 1.0, security: 1.0 },
  'Increase Revenue': { ai: 1.4, data: 1.3, automation: 1.2, cloud: 1.1, it: 1.0, security: 1.0 },
  'Improve Security': { security: 1.6, it: 1.3, cloud: 1.2, ai: 1.0, data: 1.0, automation: 1.0 },
  'Automate Processes': { automation: 1.5, ai: 1.3, it: 1.2, cloud: 1.1, data: 1.0, security: 1.0 },
  'Better Data Insights': { data: 1.5, ai: 1.4, cloud: 1.1, it: 1.0, automation: 1.0, security: 1.0 },
  'Scale Infrastructure': { cloud: 1.5, it: 1.4, automation: 1.2, ai: 1.0, data: 1.0, security: 1.1 },
};

const TECH_WEIGHTS: Record<string, Record<string, number>> = {
  'AI & Machine Learning': { ai: 1.6, data: 1.3, automation: 1.2, cloud: 1.1, it: 1.0, security: 1.0 },
  'Cloud Migration': { cloud: 1.6, it: 1.3, automation: 1.2, security: 1.1, ai: 1.0, data: 1.0 },
  'Cybersecurity': { security: 1.6, it: 1.3, cloud: 1.1, ai: 1.0, data: 1.0, automation: 1.0 },
  'DevOps & Automation': { automation: 1.5, it: 1.4, cloud: 1.3, ai: 1.1, data: 1.0, security: 1.0 },
  'Data Analytics': { data: 1.6, ai: 1.4, cloud: 1.1, it: 1.0, automation: 1.0, security: 1.0 },
  'Custom Software': { it: 1.5, ai: 1.2, cloud: 1.2, automation: 1.1, data: 1.0, security: 1.0 },
};

function recommendServices(answers: Record<string, string>): RecommendedService[] {
  const categoryScores: Record<string, number> = {
    ai: 1, it: 1, cloud: 1, security: 1, data: 1, automation: 1,
  };

  // Apply weights from answers
  const industry = answers.industry || 'Other';
  const priority = answers.priority || 'Reduce Costs';
  const tech = answers.tech || 'Custom Software';

  const industryW = INDUSTRY_WEIGHTS[industry] || INDUSTRY_WEIGHTS['Other'];
  const priorityW = PRIORITY_WEIGHTS[priority] || PRIORITY_WEIGHTS['Reduce Costs'];
  const techW = TECH_WEIGHTS[tech] || TECH_WEIGHTS['Custom Software'];

  for (const cat of Object.keys(categoryScores)) {
    categoryScores[cat] *= (industryW[cat] || 1) * (priorityW[cat] || 1) * (techW[cat] || 1);
  }

  // Budget adjustment
  const budget = answers.budget || '';
  if (budget.includes('20,000')) {
    // Enterprise budget favors enterprise-grade services
    categoryScores.security *= 1.1;
    categoryScores.cloud *= 1.1;
  }

  // Score each service
  const scored = allServices.map(s => {
    const catScore = categoryScores[s.category] || 1;
    const featureScore = (s.features?.length || 0) * 0.5;
    const popularBonus = s.popular ? 2 : 0;
    const descScore = (s.description?.length || 0) * 0.005;
    return {
      ...s,
      _score: catScore * 10 + featureScore + popularBonus + descScore,
    };
  });

  // Sort and return top 3
  return scored
    .sort((a: any, b: any) => b._score - a._score)
    .slice(0, 3)
    .map(s => ({
      id: s.id,
      title: s.title,
      description: s.description,
      category: s.category,
      pricing: s.pricing,
      href: s.href || `/services/${s.id}`,
    }));
}

const CATEGORY_EMOJI: Record<string, string> = {
  ai: '🧠', it: '🖥️', cloud: '☁️', security: '🔐', data: '📊', automation: '🤖',
};

export default function ServiceRecommenderChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'bot', text: QUESTIONS[0].question, options: QUESTIONS[0].options }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAnswer = (answer: string) => {
    const question = QUESTIONS[currentStep];
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', text: answer },
    ];

    if (currentStep < QUESTIONS.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      newMessages.push({
        role: 'bot',
        text: QUESTIONS[nextStep].question,
        options: QUESTIONS[nextStep].options,
      });
    } else {
      // Generate recommendations
      const recs = recommendServices(newAnswers);
      newMessages.push({
        role: 'bot',
        text: '🎉 Based on your answers, here are my top 3 service recommendations for your business:',
        recommendations: recs,
      });
      setIsComplete(true);
    }

    setMessages(newMessages);
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    setTimeout(() => {
      setMessages([{ role: 'bot', text: QUESTIONS[0].question, options: QUESTIONS[0].options }]);
    }, 100);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl group"
        aria-label="AI Service Recommender"
      >
        {isOpen ? '✕' : '💬'}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
            AI
          </span>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg max-w-[200px] animate-bounce-slow">
          🚀 Find your perfect service in 30 seconds!
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">AI Service Recommender</h3>
              <p className="text-white/70 text-xs">Find your perfect match • Free</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-white/70 hover:text-white text-lg">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.role === 'user'
                  ? 'bg-purple-600 text-white rounded-2xl rounded-br-md px-4 py-2'
                  : 'bg-slate-800 text-slate-200 rounded-2xl rounded-bl-md px-4 py-2'
                }`}>
                  <p className="text-sm">{msg.text}</p>

                  {/* Options */}
                  {msg.options && (
                    <div className="mt-3 space-y-2">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(opt)}
                          className="block w-full text-left px-3 py-2 bg-slate-700/50 hover:bg-purple-600/30 border border-slate-600 hover:border-purple-500 rounded-lg text-xs text-slate-300 hover:text-white transition-all"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Recommendations */}
                  {msg.recommendations && (
                    <div className="mt-3 space-y-3">
                      {msg.recommendations.map((rec, j) => (
                        <div key={rec.id} className="bg-slate-700/50 rounded-xl p-3 border border-slate-600">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{CATEGORY_EMOJI[rec.category] || '⚡'}</span>
                            <span className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                              {rec.category}
                            </span>
                            <span className="ml-auto text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                              #{j + 1} Pick
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-white">{rec.title}</h4>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2">{rec.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-green-400">
                              From ${rec.pricing?.basic || '99'}/mo
                            </span>
                            <Link
                              href={rec.href}
                              className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                              onClick={() => setIsOpen(false)}
                            >
                              View Details →
                            </Link>
                          </div>
                        </div>
                      ))}

                      {/* CTA */}
                      <div className="text-center pt-2">
                        <Link
                          href="/contact"
                          className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:opacity-90 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          📧 Get Custom Quote
                        </Link>
                        <p className="text-[10px] text-slate-500 mt-2">
                          Or call: +1 302 464 0950
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Reset button */}
            {isComplete && (
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-purple-400 transition-colors"
                >
                  🔄 Start Over
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700 px-4 py-2 text-center">
            <p className="text-[10px] text-slate-500">
              Powered by Zion Tech Group • {allServices.length}+ services
            </p>
          </div>
        </div>
      )}
    </>
  );
}
