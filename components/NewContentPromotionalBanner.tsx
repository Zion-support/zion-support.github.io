import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

const NewContentPromotionalBanner: React.FC = () => {
  const newContent = [
    {
      title: "AI Enterprise Automation Revolution 2025",
      description: "Complete Implementation Guide",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      icon: "🤖",
      badge: "FEATURED",
      badgeColor: "bg-blue-100 text-blue-800",
      metrics: "300% Efficiency Gains"
    },
    {
      title: "AI Startup Funding Playbook 2025",
      description: "From Seed to Series A",
      href: "/blog/ai-startup-funding-playbook-2025",
      icon: "💰",
      badge: "HOT",
      badgeColor: "bg-green-100 text-green-800",
      metrics: "$47B+ Funding"
    },
    {
      title: "AI Enterprise Transformation Success",
      description: "$100M Revenue Impact Case Study",
      href: "/case-studies/ai-2025-enterprise-transformation-success",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-emerald-100 text-emerald-800",
      metrics: "$100M Impact"
    },
    {
      title: "AI Implementation Master Guide 2025",
      description: "Complete 150-Page Playbook",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      badge: "MASTER",
      badgeColor: "bg-purple-100 text-purple-800",
      metrics: "150+ Pages"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Content Alert
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fresh AI Content Just Dropped! 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover our latest comprehensive guides, case studies, and resources 
            designed to accelerate your AI transformation journey in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newContent.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="flex items-center mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 text-sm font-medium">{item.metrics}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">4</div>
              <div className="text-white/80">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">150+</div>
              <div className="text-white/80">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$200M+</div>
              <div className="text-white/80">Value Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-white/80">Actionable</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving remarkable results with our proven AI strategies and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors text-lg"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-sm">Fortune 500 Tested</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-sm">Expert-Reviewed</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-sm">Proven Results</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span className="text-sm">Free Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionalBanner;