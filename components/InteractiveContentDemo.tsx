import React, { useState } from 'react';
import Link from 'next/link';

const InteractiveContentDemo = () => {
  const [activeTab, setActiveTab] = useState('ai-tools');
  const [hoveredCard, setHoveredCard] = useState(null);

  const contentCategories = {
    'ai-tools': {
      title: 'AI Tools & Calculators',
      description: 'Interactive tools to help you understand AI impact',
      items: [
        {
          title: 'AI ROI Calculator',
          description: 'Calculate your potential return on AI investment',
          icon: '💰',
          link: '/tools/ai-roi-calculator',
          metrics: '300% avg ROI'
        },
        {
          title: 'Automation Impact Analyzer',
          description: 'See how automation can transform your processes',
          icon: '⚙️',
          link: '/tools/automation-analyzer',
          metrics: '90% efficiency gain'
        },
        {
          title: 'AI Readiness Assessment',
          description: 'Evaluate your organization\'s AI readiness',
          icon: '📊',
          link: '/tools/ai-readiness',
          metrics: 'Free assessment'
        }
      ]
    },
    'case-studies': {
      title: 'Success Stories',
      description: 'Real-world examples of AI transformation',
      items: [
        {
          title: 'Fortune 500 AI Transformation',
          description: 'How a global corporation achieved $50M savings',
          icon: '🏢',
          link: '/case-studies/fortune-500-ai',
          metrics: '$50M saved'
        },
        {
          title: 'Healthcare AI Revolution',
          description: '40% better patient outcomes with AI',
          icon: '🏥',
          link: '/case-studies/healthcare-ai',
          metrics: '40% improvement'
        },
        {
          title: 'Manufacturing Automation',
          description: '60% cost reduction through smart automation',
          icon: '🏭',
          link: '/case-studies/manufacturing-ai',
          metrics: '60% cost cut'
        }
      ]
    },
    'insights': {
      title: 'Latest Insights',
      description: 'Cutting-edge research and industry analysis',
      items: [
        {
          title: 'AI Trends 2026 Report',
          description: 'Comprehensive analysis of emerging AI trends',
          icon: '📈',
          link: '/insights/ai-trends-2026',
          metrics: '50+ trends'
        },
        {
          title: 'Enterprise AI Adoption',
          description: 'Best practices for large-scale AI implementation',
          icon: '🎯',
          link: '/insights/enterprise-ai-adoption',
          metrics: '300% ROI'
        },
        {
          title: 'AI Ethics & Governance',
          description: 'Framework for responsible AI deployment',
          icon: '⚖️',
          link: '/insights/ai-ethics-governance',
          metrics: '70% risk reduction'
        }
      ]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-xl">🎯</span>
            <span className="font-semibold">Interactive Content Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore, Learn, and Transform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into our interactive content library featuring tools, case studies, 
            and insights that will accelerate your AI journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg border border-gray-200">
            {Object.keys(contentCategories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {contentCategories[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {contentCategories[activeTab].title}
            </h3>
            <p className="text-gray-600">
              {contentCategories[activeTab].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentCategories[activeTab].items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 group cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110' : ''
                  } ${
                    activeTab === 'ai-tools' ? 'bg-blue-100' :
                    activeTab === 'case-studies' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-sm text-gray-500 font-semibold">
                      {item.metrics}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className={`inline-flex items-center font-semibold transition-colors ${
                    activeTab === 'ai-tools' ? 'text-blue-600 hover:text-blue-700' :
                    activeTab === 'case-studies' ? 'text-green-600 hover:text-green-700' : 'text-purple-600 hover:text-purple-700'
                  }`}
                >
                  {activeTab === 'ai-tools' ? 'Try Tool →' :
                   activeTab === 'case-studies' ? 'View Case Study →' : 'Read Insight →'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already transforming their businesses 
              with our AI solutions and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentDemo;