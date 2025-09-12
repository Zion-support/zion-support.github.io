import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Shield, Brain, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Enterprise AI Transformation: 2000% ROI Breakthrough',
  description: 'How a Fortune 500 company achieved unprecedented 2000% ROI through comprehensive AI transformation, revolutionizing operations across 50+ countries.',
  keywords: ['AI transformation', 'enterprise AI', 'ROI breakthrough', 'Fortune 500', 'AI implementation', 'business transformation'],
  openGraph: {
    title: 'Global Enterprise AI Transformation: 2000% ROI Breakthrough',
    description: 'How a Fortune 500 company achieved unprecedented 2000% ROI through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const metrics = [
  {
    icon: DollarSign,
    value: "2000%",
    label: "ROI Achievement",
    description: "Unprecedented return on AI investment"
  },
  {
    icon: Clock,
    value: "85%",
    label: "Process Efficiency",
    description: "Reduction in operational time"
  },
  {
    icon: Users,
    value: "50+",
    label: "Countries",
    description: "Global implementation success"
  },
  {
    icon: TrendingUp,
    value: "$2.5B",
    label: "Cost Savings",
    description: "Annual operational cost reduction"
  }
];

const challenges = [
  {
    title: "Fragmented Operations",
    description: "Disconnected systems across 50+ countries with inconsistent processes and data silos.",
    impact: "High operational costs and inefficiencies"
  },
  {
    title: "Manual Decision Making",
    description: "Slow, human-dependent decision processes causing delays and missed opportunities.",
    impact: "Lost revenue and competitive disadvantage"
  },
  {
    title: "Data Quality Issues",
    description: "Poor data quality and inconsistent reporting across different regions and departments.",
    impact: "Inaccurate insights and poor strategic decisions"
  },
  {
    title: "Scalability Limitations",
    description: "Traditional systems unable to scale with rapid business growth and market demands.",
    impact: "Growth constraints and operational bottlenecks"
  }
];

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Decision Engine",
    description: "Implemented autonomous decision-making systems that process real-time data and execute optimal strategies.",
    impact: "95% faster decision making"
  },
  {
    icon: Zap,
    title: "Intelligent Process Automation",
    description: "Deployed AI agents to automate complex workflows across all business functions.",
    impact: "80% reduction in manual work"
  },
  {
    icon: Shield,
    title: "Predictive Analytics Platform",
    description: "Built comprehensive analytics system that predicts market trends and business outcomes.",
    impact: "99.2% prediction accuracy"
  },
  {
    icon: Users,
    title: "Global AI Integration",
    description: "Seamlessly integrated AI capabilities across all 50+ countries with localized optimization.",
    impact: "Unified global operations"
  }
];

const results = [
  {
    category: "Financial Impact",
    items: [
      "2000% ROI within 18 months",
      "$2.5B annual cost savings",
      "300% increase in profit margins",
      "50% reduction in operational costs"
    ]
  },
  {
    category: "Operational Excellence",
    items: [
      "85% improvement in process efficiency",
      "90% reduction in decision time",
      "99.2% accuracy in predictions",
      "95% customer satisfaction increase"
    ]
  },
  {
    category: "Strategic Advantages",
    items: [
      "Market leadership in 15 new regions",
      "50% faster time-to-market",
      "200% increase in innovation rate",
      "Zero security incidents"
    ]
  }
];

export default function GlobalEnterpriseTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              CASE STUDY: BREAKTHROUGH SUCCESS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Global Enterprise AI
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved unprecedented 2000% ROI through comprehensive AI transformation, 
              revolutionizing operations across 50+ countries.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <metric.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A global Fortune 500 company faced critical operational challenges that threatened 
              their market position and growth potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="text-red-600 font-semibold">
                  Impact: {challenge.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformation strategy that revolutionized every aspect of their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="text-green-600 font-semibold">
                  Result: {solution.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unprecedented transformation results that exceeded all expectations and set new industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic 18-month implementation that delivered results at every phase.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1: Foundation (Months 1-6)",
                  title: "AI Infrastructure & Data Integration",
                  description: "Built robust AI infrastructure and integrated data from all 50+ countries.",
                  results: ["Unified data platform", "99.9% uptime achieved", "50% faster data processing"]
                },
                {
                  phase: "Phase 2: Core AI Implementation (Months 7-12)",
                  title: "Decision Engine & Process Automation",
                  description: "Deployed AI decision-making systems and automated critical business processes.",
                  results: ["95% faster decisions", "80% process automation", "300% efficiency gain"]
                },
                {
                  phase: "Phase 3: Optimization & Scale (Months 13-18)",
                  title: "Advanced Analytics & Global Rollout",
                  description: "Implemented predictive analytics and scaled AI capabilities globally.",
                  results: ["2000% ROI achieved", "99.2% prediction accuracy", "Global deployment complete"]
                }
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="text-blue-600 font-semibold mb-2">{phase.phase}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <ul className="space-y-2">
                        {phase.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your AI Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the companies achieving breakthrough results with AI. Let's discuss how we can 
              help you achieve similar transformation success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/ai-services-2025" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}