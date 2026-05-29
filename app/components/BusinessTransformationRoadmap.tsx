'use client';

import { useState } from 'react';

interface Dimension {
  id: string;
  label: string;
  description: string;
  emoji: string;
  questions: {
    id: string;
    text: string;
    options: { value: number; label: string; description: string }[];
  }[];
}

const DIMENSIONS: Dimension[] = [
  {
    id: 'digital-maturity',
    label: 'Digital Maturity',
    description: 'Current state of technology adoption and digital capabilities',
    emoji: '💻',
    questions: [
      {
        id: 'dm-1',
        text: 'How would you describe your current technology stack?',
        options: [
          { value: 1, label: 'Legacy Systems', description: 'Mostly on-premise, outdated tools, manual processes' },
          { value: 2, label: 'Basic Cloud', description: 'Some cloud services, mixed infrastructure' },
          { value: 3, label: 'Modern Stack', description: 'Cloud-native, API-first, some automation' },
          { value: 4, label: 'Advanced', description: 'Microservices, DevOps, extensive automation' },
          { value: 5, label: 'Cutting-Edge', description: 'AI/ML integrated, real-time analytics, full automation' },
        ],
      },
      {
        id: 'dm-2',
        text: 'What percentage of your business processes are automated?',
        options: [
          { value: 1, label: '< 10%', description: 'Mostly manual workflows' },
          { value: 2, label: '10-25%', description: 'Some automation in key areas' },
          { value: 3, label: '25-50%', description: 'Moderate automation across departments' },
          { value: 4, label: '50-75%', description: 'Most processes automated' },
          { value: 5, label: '> 75%', description: 'Nearly full automation with AI oversight' },
        ],
      },
    ],
  },
  {
    id: 'data-capabilities',
    label: 'Data & Analytics',
    description: 'How effectively you collect, analyze, and act on data',
    emoji: '📊',
    questions: [
      {
        id: 'dc-1',
        text: 'How do you currently use data for decision-making?',
        options: [
          { value: 1, label: 'Ad-hoc Reports', description: 'Manual spreadsheets, reactive analysis' },
          { value: 2, label: 'Basic Dashboards', description: 'Some BI tools, periodic reporting' },
          { value: 3, label: 'Real-time Analytics', description: 'Live dashboards, automated insights' },
          { value: 4, label: 'Predictive Analytics', description: 'ML models, forecasting capabilities' },
          { value: 5, label: 'AI-Driven Decisions', description: 'Prescriptive analytics, autonomous systems' },
        ],
      },
      {
        id: 'dc-2',
        text: 'How is your data infrastructure organized?',
        options: [
          { value: 1, label: 'Siloed', description: 'Data trapped in individual systems' },
          { value: 2, label: 'Partial Integration', description: 'Some data warehouses, manual ETL' },
          { value: 3, label: 'Data Lake', description: 'Centralized storage, some governance' },
          { value: 4, label: 'Data Mesh', description: 'Domain-oriented, self-serve analytics' },
          { value: 5, label: 'Data Fabric', description: 'Unified, AI-managed data ecosystem' },
        ],
      },
    ],
  },
  {
    id: 'ai-readiness',
    label: 'AI & Automation',
    description: 'Your readiness to leverage AI and intelligent automation',
    emoji: '🤖',
    questions: [
      {
        id: 'ai-1',
        text: 'What is your current AI/ML adoption level?',
        options: [
          { value: 1, label: 'No AI', description: 'Not using AI/ML in any capacity' },
          { value: 2, label: 'Exploring', description: 'Researching AI, some POCs' },
          { value: 3, label: 'Piloting', description: 'AI in 1-2 use cases, early results' },
          { value: 4, label: 'Scaling', description: 'AI across multiple departments' },
          { value: 5, label: 'AI-First', description: 'AI embedded in core business processes' },
        ],
      },
      {
        id: 'ai-2',
        text: 'Do you have the talent and infrastructure for AI?',
        options: [
          { value: 1, label: 'None', description: 'No AI expertise or infrastructure' },
          { value: 2, label: 'Limited', description: '1-2 data scientists, basic cloud' },
          { value: 3, label: 'Growing', description: 'Small AI team, ML platform in place' },
          { value: 4, label: 'Established', description: 'Dedicated AI team, MLOps pipeline' },
          { value: 5, label: 'World-Class', description: 'AI research team, custom infrastructure' },
        ],
      },
    ],
  },
  {
    id: 'customer-experience',
    label: 'Customer Experience',
    description: 'How you engage and delight customers across touchpoints',
    emoji: '🎯',
    questions: [
      {
        id: 'cx-1',
        text: 'How personalized is your customer experience?',
        options: [
          { value: 1, label: 'Generic', description: 'One-size-fits-all approach' },
          { value: 2, label: 'Segmented', description: 'Basic customer segments' },
          { value: 3, label: 'Personalized', description: 'Individual recommendations' },
          { value: 4, label: 'Hyper-Personalized', description: 'Real-time, context-aware experiences' },
          { value: 5, label: 'Predictive', description: 'Anticipates needs before customers ask' },
        ],
      },
      {
        id: 'cx-2',
        text: 'How do you measure customer satisfaction?',
        options: [
          { value: 1, label: 'Anecdotally', description: 'Informal feedback, no metrics' },
          { value: 2, label: 'Surveys', description: 'Periodic NPS/CSAT surveys' },
          { value: 3, label: 'Multi-Channel', description: 'Surveys + social + support tickets' },
          { value: 4, label: 'Real-time Monitoring', description: 'Live sentiment analysis' },
          { value: 5, label: 'Predictive CX', description: 'AI predicts churn, proactively intervenes' },
        ],
      },
    ],
  },
  {
    id: 'operational-efficiency',
    label: 'Operational Efficiency',
    description: 'How streamlined and cost-effective your operations are',
    emoji: '⚡',
    questions: [
      {
        id: 'oe-1',
        text: 'How do you manage operational costs?',
        options: [
          { value: 1, label: 'Reactive', description: 'Address issues as they arise' },
          { value: 2, label: 'Budget-Based', description: 'Annual budgets, quarterly reviews' },
          { value: 3, label: 'Real-time Tracking', description: 'Live cost monitoring, alerts' },
          { value: 4, label: 'Optimized', description: 'Automated cost optimization' },
          { value: 5, label: 'Predictive', description: 'AI-driven cost forecasting and optimization' },
        ],
      },
      {
        id: 'oe-2',
        text: 'How efficient are your internal workflows?',
        options: [
          { value: 1, label: 'Manual', description: 'Paper-based, email-heavy, lots of handoffs' },
          { value: 2, label: 'Partially Digital', description: 'Some digital tools, manual steps remain' },
          { value: 3, label: 'Integrated', description: 'Connected systems, automated workflows' },
          { value: 4, label: 'Optimized', description: 'Lean processes, minimal waste' },
          { value: 5, label: 'Autonomous', description: 'Self-optimizing, AI-managed operations' },
        ],
      },
    ],
  },
];

interface RoadmapPhase {
  phase: number;
  title: string;
  duration: string;
  investment: string;
  roi: string;
  actions: string[];
  services: string[];
}

export default function BusinessTransformationRoadmap() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const totalQuestions = DIMENSIONS.reduce((sum, dim) => sum + dim.questions.length, 0);
  const currentDimension = DIMENSIONS[currentStep];
  const currentQuestionIndex = DIMENSIONS.slice(0, currentStep).reduce((sum, dim) => sum + dim.questions.length, 0);

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Auto-advance after short delay
    setTimeout(() => {
      const allAnswered = DIMENSIONS.slice(0, currentStep + 1).every(dim =>
        dim.questions.every(q => newAnswers[q.id] !== undefined)
      );

      if (allAnswered && currentStep < DIMENSIONS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (allAnswered && currentStep === DIMENSIONS.length - 1) {
        setShowResults(true);
      }
    }, 300);
  };

  const calculateScores = () => {
    const scores: Record<string, number> = {};
    DIMENSIONS.forEach(dim => {
      const dimAnswers = dim.questions.map(q => answers[q.id] || 0);
      scores[dim.id] = dimAnswers.reduce((sum, val) => sum + val, 0) / dim.questions.length;
    });
    return scores;
  };

  const generateRoadmap = (): RoadmapPhase[] => {
    const scores = calculateScores();
    const avgScore = Object.values(scores).reduce((sum, s) => sum + s, 0) / Object.keys(scores).length;

    const roadmap: RoadmapPhase[] = [];

    // Phase 1: Foundation (0-3 months)
    roadmap.push({
      phase: 1,
      title: 'Foundation & Quick Wins',
      duration: '0-3 months',
      investment: '$15,000 - $50,000',
      roi: '150-300%',
      actions: [
        'Conduct comprehensive technology audit',
        'Identify and prioritize high-impact automation opportunities',
        'Implement basic cloud infrastructure',
        'Establish data collection and governance framework',
        'Deploy customer feedback system',
      ],
      services: [
        'Cloud Migration Assessment',
        'Process Automation Audit',
        'Data Strategy Consulting',
        'Customer Experience Baseline',
      ],
    });

    // Phase 2: Modernization (3-6 months)
    roadmap.push({
      phase: 2,
      title: 'Modernization & Integration',
      duration: '3-6 months',
      investment: '$50,000 - $150,000',
      roi: '200-400%',
      actions: [
        'Migrate critical systems to cloud',
        'Implement API-first architecture',
        'Build unified data platform',
        'Deploy AI-powered analytics',
        'Automate core business processes',
      ],
      services: [
        'Cloud Migration Services',
        'API Integration Platform',
        'Data Lake Implementation',
        'Business Intelligence Dashboard',
        'RPA Implementation',
      ],
    });

    // Phase 3: Intelligence (6-12 months)
    roadmap.push({
      phase: 3,
      title: 'Intelligence & Optimization',
      duration: '6-12 months',
      investment: '$150,000 - $500,000',
      roi: '300-600%',
      actions: [
        'Deploy machine learning models',
        'Implement predictive analytics',
        'Build AI-powered customer insights',
        'Optimize operations with AI',
        'Create real-time decision support systems',
      ],
      services: [
        'ML Model Development',
        'Predictive Analytics Platform',
        'AI Customer Intelligence',
        'Operational AI Optimization',
        'Real-time Analytics Engine',
      ],
    });

    // Phase 4: Transformation (12-18 months)
    roadmap.push({
      phase: 4,
      title: 'Transformation & Innovation',
      duration: '12-18 months',
      investment: '$500,000 - $2,000,000',
      roi: '400-800%',
      actions: [
        'Build autonomous AI systems',
        'Implement advanced AI/ML capabilities',
        'Create self-optimizing operations',
        'Deploy AI-first customer experiences',
        'Establish innovation lab for emerging tech',
      ],
      services: [
        'Autonomous AI Systems',
        'Advanced ML Platform',
        'AI Operations Center',
        'Hyper-Personalization Engine',
        'Innovation Lab Setup',
      ],
    });

    // Phase 5: Leadership (18-24 months)
    if (avgScore < 4) {
      roadmap.push({
        phase: 5,
        title: 'Industry Leadership',
        duration: '18-24 months',
        investment: '$2,000,000+',
        roi: '500-1000%',
        actions: [
          'Become AI-first organization',
          'Lead industry with innovative solutions',
          'Monetize AI capabilities as services',
          'Build ecosystem partnerships',
          'Establish thought leadership',
        ],
        services: [
          'AI Strategy Consulting',
          'Product Innovation Lab',
          'AI-as-a-Service Platform',
          'Ecosystem Development',
          'Executive AI Training',
        ],
      });
    }

    return roadmap;
  };

  const calculateOverallScore = () => {
    const scores = calculateScores();
    const avg = Object.values(scores).reduce((sum, s) => sum + s, 0) / Object.keys(scores).length;
    return Math.round(avg * 20); // Convert to 0-100 scale
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return { label: 'World-Class', color: 'text-green-400', emoji: '🏆' };
    if (score >= 75) return { label: 'Advanced', color: 'text-blue-400', emoji: '🚀' };
    if (score >= 60) return { label: 'Developing', color: 'text-yellow-400', emoji: '📈' };
    if (score >= 40) return { label: 'Emerging', color: 'text-orange-400', emoji: '🌱' };
    return { label: 'Foundational', color: 'text-red-400', emoji: '🏗️' };
  };

  const handleDownload = () => {
    const scores = calculateScores();
    const roadmap = generateRoadmap();
    const overallScore = calculateOverallScore();
    const scoreInfo = getScoreLabel(overallScore);

    const report = `
BUSINESS TRANSFORMATION ROADMAP
Generated by Zion Tech Group AI
${new Date().toLocaleDateString()}

═══════════════════════════════════════════
OVERALL SCORE: ${overallScore}/100 - ${scoreInfo.label} ${scoreInfo.emoji}
═══════════════════════════════════════════

DIMENSION SCORES:
${DIMENSIONS.map(dim => `${dim.emoji} ${dim.label}: ${Math.round(scores[dim.id] * 20)}/100`).join('\n')}

═══════════════════════════════════════════
TRANSFORMATION ROADMAP
═══════════════════════════════════════════

${roadmap.map(phase => `
PHASE ${phase.phase}: ${phase.title}
Duration: ${phase.duration}
Investment: ${phase.investment}
Expected ROI: ${phase.roi}

Key Actions:
${phase.actions.map(a => `  • ${a}`).join('\n')}

Recommended Services:
${phase.services.map(s => `  → ${s}`).join('\n')}
`).join('\n')}

═══════════════════════════════════════════
NEXT STEPS
═══════════════════════════════════════════

1. Schedule a free consultation with our transformation experts
2. Prioritize Phase 1 quick wins for immediate impact
3. Secure executive sponsorship and budget approval
4. Begin implementation with our proven methodology
5. Track progress with our AI-powered dashboard

═══════════════════════════════════════════
CONTACT US
═══════════════════════════════════════════

Mobile: +1 302 464 0950
Email: kleber@ziontechgroup.com
Address: 364 E Main St STE 1008, Middletown, DE 19709
Website: https://ziontechgroup.com

Free consultation available - no commitment required!
`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Business-Transformation-Roadmap-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  if (showResults) {
    const scores = calculateScores();
    const roadmap = generateRoadmap();
    const overallScore = calculateOverallScore();
    const scoreInfo = getScoreLabel(overallScore);

    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container-page max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Business Transformation Roadmap
            </h2>
            <p className="text-slate-400 text-lg">
              Based on your assessment, here's your personalized transformation journey
            </p>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 mb-8 border border-purple-500/30">
            <div className="text-center">
              <div className="text-6xl mb-4">{scoreInfo.emoji}</div>
              <div className="text-5xl font-bold text-white mb-2">{overallScore}/100</div>
              <div className={`text-2xl font-semibold ${scoreInfo.color} mb-4`}>
                {scoreInfo.label}
              </div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Your organization is positioned for significant transformation. 
                Follow the roadmap below to accelerate your digital journey and achieve measurable ROI.
              </p>
            </div>
          </div>

          {/* Dimension Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {DIMENSIONS.map(dim => {
              const score = Math.round(scores[dim.id] * 20);
              const scoreInfo = getScoreLabel(score);
              return (
                <div key={dim.id} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{dim.emoji}</span>
                      <h3 className="text-sm font-semibold text-white">{dim.label}</h3>
                    </div>
                    <span className={`text-lg font-bold ${scoreInfo.color}`}>{score}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-400">{dim.description}</p>
                </div>
              );
            })}
          </div>

          {/* Roadmap Phases */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              🗺️ Your Transformation Roadmap
            </h3>
            {roadmap.map((phase, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        Phase {phase.phase}
                      </span>
                      <h4 className="text-xl font-bold text-white">{phase.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-slate-400">
                        <span className="font-semibold text-blue-400">⏱️ Duration:</span> {phase.duration}
                      </span>
                      <span className="text-slate-400">
                        <span className="font-semibold text-green-400">💰 Investment:</span> {phase.investment}
                      </span>
                      <span className="text-slate-400">
                        <span className="font-semibold text-yellow-400">📈 ROI:</span> {phase.roi}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Key Actions:</h5>
                    <ul className="space-y-1">
                      {phase.actions.map((action, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Recommended Services:</h5>
                    <ul className="space-y-1">
                      {phase.services.map((service, i) => (
                        <li key={i} className="text-sm text-purple-300 flex items-start gap-2">
                          <span className="text-purple-400">→</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get a free 30-minute consultation with our transformation experts. 
              We'll help you prioritize quick wins and create an actionable implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={handleDownload}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                📥 Download Full Roadmap
              </button>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                📞 Book Free Consultation
              </a>
            </div>
            <div className="text-sm text-slate-400">
              <p>📱 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p className="mt-1">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                setShowResults(false);
              }}
              className="text-purple-400 hover:text-purple-300 text-sm underline"
            >
              ← Retake Assessment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container-page max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🗺️ Business Transformation Roadmap Generator
          </h2>
          <p className="text-slate-400 text-lg mb-2">
            Get a personalized AI-powered transformation roadmap with ROI projections
          </p>
          <p className="text-slate-500 text-sm">
            Answer {totalQuestions} quick questions • Get instant results • 100% free
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
            <span>
              {currentDimension.emoji} {currentDimension.label}
            </span>
            <span>
              Question {Object.keys(answers).length + 1} of {totalQuestions}
            </span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
              style={{ width: `${(Object.keys(answers).length / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Dimension */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <span className="text-5xl mb-4 block">{currentDimension.emoji}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{currentDimension.label}</h3>
            <p className="text-slate-400">{currentDimension.description}</p>
          </div>

          {/* Questions */}
          {currentDimension.questions.map((question, qIdx) => {
            const globalQIdx = currentQuestionIndex + qIdx;
            const answered = answers[question.id] !== undefined;

            return (
              <div key={question.id} className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {globalQIdx + 1}. {question.text}
                </h4>
                <div className="space-y-3">
                  {question.options.map((option, oIdx) => {
                    const isSelected = answers[question.id] === option.value;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(question.id, option.value)}
                        disabled={answered}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-purple-600/30 border-purple-500 text-white'
                            : answered
                            ? 'bg-slate-800/30 border-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-lg font-bold text-purple-400">{option.value}</span>
                          <div className="flex-1">
                            <div className="font-semibold mb-1">{option.label}</div>
                            <div className="text-sm text-slate-400">{option.description}</div>
                          </div>
                          {isSelected && <span className="text-green-400 text-xl">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
          <h4 className="text-white font-semibold mb-2">💡 What You'll Get:</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>✓ Personalized transformation roadmap with 4-5 phases</li>
            <li>✓ ROI projections and investment estimates</li>
            <li>✓ Recommended services for each phase</li>
            <li>✓ Actionable next steps and quick wins</li>
            <li>✓ Downloadable report for executive presentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
