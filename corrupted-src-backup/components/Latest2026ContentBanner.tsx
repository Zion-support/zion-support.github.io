import React from 'react';
import { Link } from 'react-router-dom';

const Latest2026ContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-y border-emerald-500/20 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase animate-pulse">
              🚀 LATEST 2026 CONTENT
            </span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Latest AI Content & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our comprehensive collection of AI articlestutorialsand industry
            insights for 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Featured Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">Featured Content:</h3>
            <div className="space-y-4">
              {[
                {
                  icon: '📚',
                  title: 'AI Implementation Guide 2026',
                  description:
                    'Complete roadmap for enterprise AI adoption with practical examples and best practices.',
                  readTime: '15 min read',
                  category: 'AI Strategy',
                  featured: true,
                },
                {
                  icon: '🎯',
                  title: 'ROI Optimization Strategies',
                  description:
                    'Maximize returns on your AI investments with proven optimization techniques.',
                  readTime: '12 min read',
                  category: 'Business',
                  featured: false,
                },
                {
                  icon: '🔧',
                  title: 'Technical Deep Dive: Neural Networks',
                  description:
                    'Advanced concepts for AI practitioners with hands-on examples and code.',
                  readTime: '20 min read',
                  category: 'Technical',
                  featured: false,
                },
                {
                  icon: '📊',
                  title: 'Industry Case Studies',
                  description:
                    'Real-world AI success stories from leading companies across industries.',
                  readTime: '10 min read',
                  category: 'Case Studies',
                  featured: false,
                },
              ].map((content, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white flex-1">{content.title}</h4>
                    {content.featured && (
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded ml-2">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{content.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.readTime}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                      {content.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Newsletter & CTA */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-emerald-500/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                <span className="text-emerald-400 font-bold text-sm">📧 NEWSLETTER</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest AI insightstutorialsand industry news delivered to your inbox weekly.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Weekly AI research updates</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Exclusive technical tutorials</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Industry case studies & insights</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">Early access to new content</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓</span>
                <span className="text-gray-300">No spam, unsubscribe anytime</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <Link
                to="/blog"
                className="w-full border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block"
              >
                Explore All Articles →
              </Link>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                📚 500+ articles • 50+ tutorials • Updated weekly
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get personalized AI consultation and implementation guidance from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?source=latest-2026-content"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Get AI Consultation
            </Link>
            <Link
              to="/ai-tutorials"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Browse AI Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest2026ContentBanner;
