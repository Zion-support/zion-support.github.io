import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Latest2026ContentMegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Star className="w-4 h-4" />
            BREAKTHROUGH 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              That Are Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies and strategies that are delivering unprecedented 
            business results in 2026. From Neural Architecture Search to Federated Learning, 
            explore the innovations that matter.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Architecture Search */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Neural Architecture Search</h3>
                <p className="text-blue-200 text-sm">10x Faster Model Optimization</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Discover how NAS is revolutionizing AI development with automated architecture optimization 
              that delivers 40-60% better performance than human-designed models.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-neural-architecture-search-2026"
                className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
            </div>
          </div>

          {/* Federated Learning */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Federated Learning</h3>
                <p className="text-blue-200 text-sm">Privacy-Preserving AI</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Learn how federated learning enables collaborative AI training while maintaining complete 
              data privacy and regulatory compliance across industries.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-federated-learning-2026"
                className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
            </div>
          </div>

          {/* Synthetic Data */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Synthetic Data</h3>
                <p className="text-blue-200 text-sm">Privacy-Compliant ML</p>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Explore how synthetic data generation is enabling faster AI development while maintaining 
              complete privacy and regulatory compliance.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEW
              </span>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Proven Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">$25M</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Manufacturing Transformation</h4>
                <p className="text-blue-200 text-sm mb-2">
                  Neural Architecture Search delivered 60% cost reduction and 45% accuracy improvement 
                  for a Fortune 500 automotive manufacturer.
                </p>
                <Link
                  href="/case-studies/ai-neural-architecture-success-2026"
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">$18M</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Healthcare Consortium</h4>
                <p className="text-blue-200 text-sm mb-2">
                  15-hospital consortium achieved 35% accuracy improvement while maintaining complete 
                  HIPAA compliance using federated learning.
                </p>
                <Link
                  href="/case-studies/ai-federated-learning-success-2026"
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore All 2026 Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all flex items-center gap-2"
            >
              View Success Stories
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            Join 500+ enterprises already transforming their business with our AI solutions
          </p>
        </div>
      </div>
    </div>
  );
}