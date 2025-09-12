import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';

export default function AI2025NewContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025: The Generative AI Revolution",
      description: "Complete business transformation guide with proven strategies for 300-500% ROI through generative AI implementation.",
      href: "/blog/ai-2025-generative-ai-revolution",
      category: "Blog Post",
      readTime: "15 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "from-purple-500 to-pink-500",
      icon: "🚀"
    },
    {
      title: "AI 2025: Automation Mastery",
      description: "Master intelligent automation with our comprehensive framework for achieving 200-400% efficiency gains.",
      href: "/blog/ai-2025-automation-mastery",
      category: "Mastery Guide",
      readTime: "18 min read",
      badge: "MASTERY",
      badgeColor: "from-green-500 to-blue-500",
      icon: "🤖"
    },
    {
      title: "Global Enterprise AI Automation Success",
      description: "Fortune 500 case study showing how strategic AI automation delivered 800% ROI within 18 months.",
      href: "/case-studies/ai-2025-global-enterprise-automation-success",
      category: "Case Study",
      readTime: "12 min read",
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-blue-500",
      icon: "🏆"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025: Neural Interface Breakthrough",
      description: "Explore the future of human-AI interaction through advanced neural interface technologies.",
      href: "/blog/ai-2025-neural-interface-breakthrough",
      category: "Future Tech",
      readTime: "10 min read",
      icon: "🧠"
    },
    {
      title: "Quantum AI Financial Optimization",
      description: "Revolutionary quantum computing applications in financial services and investment optimization.",
      href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      category: "Case Study",
      readTime: "14 min read",
      icon: "⚛️"
    },
    {
      title: "AI 2025: Edge Computing Revolution",
      description: "Transform your infrastructure with edge computing solutions that deliver real-time AI processing.",
      href: "/blog/ai-2025-edge-computing-revolution",
      category: "Technology",
      readTime: "12 min read",
      icon: "🌐"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 FEATURED CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025: Revolutionary Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, strategies, and success stories that are transforming businesses worldwide
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{content.icon}</div>
                <div className={`inline-block bg-gradient-to-r ${content.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {content.badge}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{content.category}</span>
                <span className="text-sm text-gray-500">{content.readTime}</span>
              </div>
              
              <Link 
                href={content.href}
                className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Read More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{content.icon}</div>
                  <span className="text-sm text-gray-500">{content.category}</span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h4>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <Link 
                    href={content.href}
                    className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm"
                  >
                    Read →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Get expert guidance and start your AI transformation journey with our proven frameworks and strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/resources" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}