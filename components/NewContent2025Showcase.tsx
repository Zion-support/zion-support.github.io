import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';

export default function NewContent2025Showcase() {
  const newContent = [
    {
      title: "Advanced Neural Networks: The Future of AI Architecture",
      description: "Explore cutting-edge neural network architectures including transformers, GANs, and reinforcement learning systems that are revolutionizing AI in 2025.",
      href: "/blog/ai-2025-advanced-neural-networks",
      category: "AI Architecture",
      icon: "🧠",
      readTime: "15 min read",
      featured: true,
      stats: "10x Performance Improvement"
    },
    {
      title: "AI Financial Services Transformation: 1500% ROI Success Story",
      description: "Discover how a leading financial institution achieved 1500% ROI through comprehensive AI transformation, including fraud detection, risk assessment, and automated trading systems.",
      href: "/case-studies/ai-2025-financial-services-transformation",
      category: "Case Study",
      icon: "💰",
      readTime: "20 min read",
      featured: true,
      stats: "1500% ROI Achieved"
    },
    {
      title: "AI Cybersecurity Defense Guide 2025: Complete Protection Strategy",
      description: "Master AI-powered cybersecurity defense with comprehensive strategies, advanced threat detection, and automated incident response systems.",
      href: "/resources/ai-2025-cybersecurity-defense-guide",
      category: "Security Guide",
      icon: "🛡️",
      readTime: "25 min read",
      featured: true,
      stats: "95% Detection Accuracy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 FRESH CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Revolutionary AI Content Just Dropped!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our latest breakthroughs in AI architecture, financial transformation, and cybersecurity defense. 
            Expert insights, proven strategies, and actionable implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link key={index} to={content.href} className="group">
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-indigo-200">
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    NEW
                  </div>
                )}
                
                {/* Icon and Category */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-green-800">
                    ⚡ {content.stats}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span className="text-indigo-600 font-medium group-hover:text-indigo-800">
                    Read More →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get expert consultation and implementation support for your AI transformation journey. 
              Our proven methodologies have helped companies achieve 1500% ROI and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Expert Consultation
              </Link>
              <Link
                to="/resources/ai-implementation-master-guide-2026"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Download Master Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <p className="text-sm text-gray-600">New Articles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1500%</div>
            <p className="text-sm text-gray-600">ROI Case Study</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
            <p className="text-sm text-gray-600">AI Detection Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
            <p className="text-sm text-gray-600">Latest Strategies</p>
          </div>
        </div>
      </div>
    </section>
  );
}