import React, { useState } from 'react';
import Link from 'next/link';

const NewContent2026DiscoveryWidget = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const contentItems = {
    featured: [
      {
        title: "AI 2026: Ultimate Business Transformation Guide",
        description: "Complete roadmap to AI transformation with $2.8T market insights and 450% ROI strategies.",
        href: "/blog/ai-2026-ultimate-business-transformation",
        category: "Ultimate Guide",
        stats: "450% ROI",
        color: "purple"
      },
      {
        title: "AI Automation Success Stories 2026: Real ROI Results",
        description: "Real success stories from Fortune 500 companies achieving 340% ROI and $200M+ revenue increases.",
        href: "/blog/ai-automation-success-stories-2026",
        category: "Success Stories",
        stats: "340% ROI",
        color: "green"
      },
      {
        title: "AI 2026: Hyperautomation Business Playbook",
        description: "Practical playbook to design, deploy, and scale AI-driven hyperautomation across the enterprise.",
        href: "/blog/ai-2026-hyperautomation-business-playbook",
        category: "Playbook",
        stats: "85% Automation",
        color: "blue"
      }
    ],
    guides: [
      {
        title: "Quantum AI 2026: Business Transformation Guide",
        description: "Explore how quantum computing is revolutionizing AI and business operations.",
        href: "/blog/quantum-ai-2026-business-transformation-ultimate-guide",
        category: "Quantum AI",
        stats: "Quantum Speed",
        color: "indigo"
      },
      {
        title: "Next-Generation Autonomous Business Systems",
        description: "Discover the future of self-managing business operations and autonomous workflows.",
        href: "/blog/ai-2026-next-generation-autonomous-business-systems-revolution",
        category: "Autonomous Systems",
        stats: "24/7 Operations",
        color: "teal"
      },
      {
        title: "Enterprise AI Agents: 2025 Breakthrough",
        description: "How enterprise AI agents are transforming operations and enabling autonomous workflows.",
        href: "/blog/ai-2025-enterprise-ai-agents-breakthrough",
        category: "AI Agents",
        stats: "98% Accuracy",
        color: "pink"
      }
    ],
    insights: [
      {
        title: "AI Trends 2025-2030: Future Predictions",
        description: "Comprehensive analysis of AI trends and predictions for the next decade.",
        href: "/blog/ai-trends-2025-2030-comprehensive-future-predictions",
        category: "Trends",
        stats: "2030 Vision",
        color: "orange"
      },
      {
        title: "AI 2027: Future Predictions Ultimate Breakthrough",
        description: "Forward-looking insights into AI development and business applications.",
        href: "/blog/ai-2027-future-predictions-ultimate-breakthrough",
        category: "Future AI",
        stats: "2027 Preview",
        color: "red"
      }
    ]
  };

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700',
      blue: 'bg-blue-600 hover:bg-blue-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      pink: 'bg-pink-600 hover:bg-pink-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      red: 'bg-red-600 hover:bg-red-700'
    };
    return colors[color] || 'bg-gray-600 hover:bg-gray-700';
  };

  const getBorderColor = (color) => {
    const colors = {
      purple: 'border-purple-200',
      green: 'border-green-200',
      blue: 'border-blue-200',
      indigo: 'border-indigo-200',
      teal: 'border-teal-200',
      pink: 'border-pink-200',
      orange: 'border-orange-200',
      red: 'border-red-200'
    };
    return colors[color] || 'border-gray-200';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover New AI Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest comprehensive guides, success stories, and insights 
            to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'featured'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Featured Content
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'guides'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Ultimate Guides
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'insights'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Future Insights
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems[activeTab].map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 ${getBorderColor(item.color)} hover:shadow-xl transition-shadow overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    {item.stats}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className={`inline-block w-full text-center ${getColorClasses(item.color)} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized AI transformation strategies tailored to your industry and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get AI Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026DiscoveryWidget;