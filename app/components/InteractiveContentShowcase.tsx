import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentShowcase() {
  const [activeTab, setActiveTab] = useState('trends');

  const content = {
    trends: {
      title: "AI Trends 2026",
      description: "Revolutionary breakthroughs transforming enterprise operations",
      items: [
        {
          title: "Autonomous AI Systems",
          description: "Self-managing systems that operate without human intervention",
          link: "/blog/ai-autonomous-enterprise-systems-2026",
          icon: "🤖",
          stats: "60% cost reduction"
        },
        {
          title: "Quantum-Enhanced AI",
          description: "Exponentially faster processing for complex problems",
          link: "/blog/ai-2026-revolutionary-breakthroughs",
          icon: "⚡",
          stats: "10,000x faster"
        },
        {
          title: "Neural Interfaces",
          description: "Direct thought-to-AI communication for enhanced productivity",
          link: "/blog/ai-2026-revolutionary-breakthroughs",
          icon: "🧠",
          stats: "5x faster coding"
        }
      ]
    },
    caseStudies: {
      title: "Success Stories",
      description: "Real-world transformations delivering measurable results",
      items: [
        {
          title: "Fortune 500 Transformation",
          description: "$2.3B in value created through comprehensive AI implementation",
          link: "/case-studies/fortune-500-ai-transformation-2027",
          icon: "🏆",
          stats: "340% ROI"
        },
        {
          title: "Manufacturing Excellence",
          description: "45% increase in production efficiency with autonomous systems",
          link: "/case-studies",
          icon: "🏭",
          stats: "70% less downtime"
        },
        {
          title: "Financial Services Innovation",
          description: "99.9% fraud detection accuracy with AI-powered systems",
          link: "/case-studies",
          icon: "💳",
          stats: "50% faster processing"
        }
      ]
    },
    services: {
      title: "AI Services",
      description: "Cutting-edge solutions for every business need",
      items: [
        {
          title: "Autonomous Enterprise Systems",
          description: "Self-optimizing systems that learn and adapt continuously",
          link: "/services/ai-autonomous-enterprise-systems",
          icon: "🔄",
          stats: "24/7 operation"
        },
        {
          title: "AI Data Analytics",
          description: "Transform data into actionable insights with predictive modeling",
          link: "/services/ai-data-analytics",
          icon: "📊",
          stats: "95% accuracy"
        },
        {
          title: "AI Workflow Automation",
          description: "Intelligent workflow design with smart triggers and optimization",
          link: "/services/ai-workflow-automation",
          icon: "⚙️",
          stats: "300% faster"
        }
      ]
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Latest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, success stories, and solutions that are 
            transforming businesses across industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            {Object.keys(content).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {content[tab as keyof typeof content].title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-lg text-gray-600">
              {content[activeTab as keyof typeof content].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content[activeTab as keyof typeof content].items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                  <Link
                    href={item.link}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Join hundreds of companies already using our AI solutions to achieve 
              unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Call +1 302 464 0950
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}