import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon,
  LightBulbIcon,
  DocumentTextIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function AIStartupFundingPlaybook2025() {
  const fundingStages = [
    {
      stage: "Pre-Seed",
      amount: "$100K - $1M",
      focus: "Product-Market Fit",
      timeline: "0-6 months",
      keyMetrics: "User validation, prototype development",
      icon: "🌱"
    },
    {
      stage: "Seed",
      amount: "$1M - $5M",
      focus: "Market Entry",
      timeline: "6-18 months",
      keyMetrics: "Revenue growth, customer acquisition",
      icon: "🌿"
    },
    {
      stage: "Series A",
      amount: "$5M - $25M",
      focus: "Scale & Growth",
      timeline: "18-36 months",
      keyMetrics: "Market expansion, team building",
      icon: "🌳"
    },
    {
      stage: "Series B+",
      amount: "$25M+",
      focus: "Market Leadership",
      timeline: "36+ months",
      keyMetrics: "Market dominance, international expansion",
      icon: "🏢"
    }
  ];

  const investors = [
    {
      name: "Andreessen Horowitz",
      focus: "AI Infrastructure & Platforms",
      avgCheck: "$5M - $50M",
      notable: "OpenAI, Anthropic, Stability AI",
      tier: "Tier 1"
    },
    {
      name: "Sequoia Capital",
      focus: "Enterprise AI & Automation",
      avgCheck: "$3M - $30M",
      notable: "Databricks, Snowflake, NVIDIA",
      tier: "Tier 1"
    },
    {
      name: "GV (Google Ventures)",
      focus: "AI Applications & ML Tools",
      avgCheck: "$2M - $20M",
      notable: "DeepMind, Waymo, Anthropic",
      tier: "Tier 1"
    },
    {
      name: "Accel",
      focus: "AI-First Companies",
      avgCheck: "$1M - $25M",
      notable: "Meta, Spotify, Slack",
      tier: "Tier 1"
    }
  ];

  const pitchTemplate = {
    sections: [
      {
        title: "Problem Statement",
        duration: "2 minutes",
        content: "Define the market problem you're solving with clear data and examples"
      },
      {
        title: "Solution & Product",
        duration: "3 minutes",
        content: "Present your AI solution with demos and technical differentiation"
      },
      {
        title: "Market Opportunity",
        duration: "2 minutes",
        content: "Show market size, growth potential, and competitive landscape"
      },
      {
        title: "Business Model",
        duration: "2 minutes",
        content: "Explain revenue streams, pricing strategy, and unit economics"
      },
      {
        title: "Traction & Metrics",
        duration: "3 minutes",
        content: "Demonstrate growth, customer validation, and key performance indicators"
      },
      {
        title: "Team & Execution",
        duration: "2 minutes",
        content: "Highlight team expertise and execution track record"
      },
      {
        title: "Financial Projections",
        duration: "2 minutes",
        content: "Present 3-5 year projections and funding utilization plan"
      },
      {
        title: "Ask & Use of Funds",
        duration: "1 minute",
        content: "Clearly state funding amount and specific use cases"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <SEO 
        title="AI Startup Funding Playbook 2025 - Master $47B+ AI Funding Landscape"
        description="Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates."
        keywords="AI startup funding, venture capital, AI investment, startup pitch, funding rounds, AI funding landscape"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-600/20 text-green-700 rounded-full px-6 py-3 mb-8">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-bold">💰 FUNDING PLAYBOOK</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              AI Startup Funding Playbook 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Master the $47B+ AI funding landscape with our comprehensive playbook. 
              Learn proven strategies to secure funding from seed to Series A with real examples and pitch templates.
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">$47B+</div>
                  <div className="text-gray-600">AI Funding in 2024</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                  <div className="text-gray-600">AI Startups Funded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Funding Stages & Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate each funding stage with confidence using our proven strategies and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fundingStages.map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-4 text-center">{stage.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {stage.stage}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Amount Range:</h4>
                    <p className="text-green-600 font-bold">{stage.amount}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focus:</h4>
                    <p className="text-gray-600">{stage.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Timeline:</h4>
                    <p className="text-gray-600">{stage.timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Key Metrics:</h4>
                    <p className="text-sm text-gray-600">{stage.keyMetrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Investors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top AI Investors & VCs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the most active AI investors and understand their investment focus areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investors.map((investor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{investor.name}</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {investor.tier}
                    </span>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment Focus:</h4>
                    <p className="text-gray-600">{investor.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Average Check Size:</h4>
                    <p className="text-green-600 font-bold">{investor.avgCheck}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Notable Investments:</h4>
                    <p className="text-gray-600">{investor.notable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Template */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect Pitch Template
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our proven 15-minute pitch template to maximize your chances of securing funding.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pitchTemplate.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {section.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Secure Your AI Funding?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Get personalized funding strategy consultation and pitch deck review from our AI startup experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Funding Consultation
            </Link>
            <Link 
              to="/resources" 
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors border border-green-500"
            >
              Download Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}