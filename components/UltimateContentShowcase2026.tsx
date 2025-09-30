import React, { useState } from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');

  const contentCategories = {
    breakthroughs: [
      {
        title: "AI Revolution 2026: The Next Frontier",
        description: "Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains.",
        type: "Featured Article",
        readTime: "25 min",
        href: "/blog/ai-revolution-2026-next-frontier",
        icon: "🚀",
        color: "red"
      },
      {
        title: "Quantum AI Breakthrough: 500x Processing",
        description: "Revolutionary quantum-enhanced AI solving impossible optimization problems in seconds.",
        type: "Breakthrough",
        readTime: "20 min",
        href: "/blog/quantum-ai-breakthrough-2026",
        icon: "⚛️",
        color: "purple"
      },
      {
        title: "Neural Interface Systems: Human-AI Fusion",
        description: "Direct brain-computer interfaces enabling seamless human-AI collaboration.",
        type: "Revolutionary",
        readTime: "30 min",
        href: "/blog/neural-interface-systems-2026",
        icon: "🧠",
        color: "blue"
      }
    ],
    caseStudies: [
      {
        title: "Fortune 500: $50M Savings & 95% Efficiency",
        description: "Global manufacturing transformation across 47 countries with comprehensive AI implementation.",
        type: "Success Story",
        company: "Manufacturing",
        href: "/case-studies/global-manufacturing-ai-transformation",
        icon: "🏭",
        color: "green"
      },
      {
        title: "TechCorp: 90% Efficiency with AI Automation",
        description: "E-commerce giant achieved $500K annual savings through intelligent workflow automation.",
        type: "Case Study",
        company: "E-commerce",
        href: "/case-studies/techcorp-ai-transformation",
        icon: "🛒",
        color: "blue"
      },
      {
        title: "FinServe: 70% Risk Reduction & Compliance",
        description: "Leading fintech achieved audit-ready compliance with automated governance frameworks.",
        type: "Success Story",
        company: "Fintech",
        href: "/case-studies/finserve-genai-risk-mitigation",
        icon: "💰",
        color: "yellow"
      }
    ],
    guides: [
      {
        title: "AI Enterprise Transformation: Complete Guide",
        description: "Master AI implementation with proven strategies, ROI frameworks, and deployment patterns.",
        type: "Implementation Guide",
        readTime: "35 min",
        href: "/blog/ai-enterprise-transformation-2026",
        icon: "📚",
        color: "indigo"
      },
      {
        title: "Autonomous AI Agents: 2026 Playbook",
        description: "Practical guide to rolling out autonomous AI agents with 300% ROI strategies.",
        type: "Playbook",
        readTime: "28 min",
        href: "/blog/ai-autonomous-agents-2025",
        icon: "🤖",
        color: "purple"
      },
      {
        title: "AI Governance Framework: Enterprise Guide",
        description: "Comprehensive governance frameworks achieving 70% risk reduction and compliance.",
        type: "Framework",
        readTime: "22 min",
        href: "/blog/ai-governance-framework-2025",
        icon: "⚖️",
        color: "gray"
      }
    ]
  };

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-800 border-red-200 hover:border-red-300",
      purple: "bg-purple-100 text-purple-800 border-purple-200 hover:border-purple-300",
      blue: "bg-blue-100 text-blue-800 border-blue-200 hover:border-blue-300",
      green: "bg-green-100 text-green-800 border-green-200 hover:border-green-300",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:border-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200 hover:border-indigo-300",
      gray: "bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-sm font-semibold text-white mb-4">
            📚 Ultimate Content Hub 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master AI Transformation with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Expert Content & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our comprehensive library of AI breakthroughs, case studies, and implementation guides. 
            Join 10,000+ professionals transforming their enterprises with cutting-edge AI solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(contentCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {category === 'breakthroughs' && '🚀 AI Breakthroughs'}
              {category === 'caseStudies' && '📊 Success Stories'}
              {category === 'guides' && '📚 Implementation Guides'}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentCategories[activeTab as keyof typeof contentCategories].map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-transparent hover:scale-105 ${getColorClasses(item.color)}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getColorClasses(item.color)}`}>
                        {item.type}
                      </span>
                      {item.readTime && (
                        <span className="text-sm text-gray-500">{item.readTime} read</span>
                      )}
                      {item.company && (
                        <span className="text-sm text-gray-500">{item.company}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  {activeTab === 'breakthroughs' && 'Read Article →'}
                  {activeTab === 'caseStudies' && 'View Case Study →'}
                  {activeTab === 'guides' && 'Read Guide →'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">75+</div>
              <div className="text-gray-600 font-medium">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Implementation Guides</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Ahead with AI Insights</h3>
          <p className="text-xl mb-8 opacity-90">
            Get weekly updates on AI breakthroughs, case studies, and exclusive implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;