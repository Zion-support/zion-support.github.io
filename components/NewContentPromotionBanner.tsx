import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  className?: string;
}

const NewContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">New Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content: Transform Your Business in 2025
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, success stories, and implementation guides that are helping Fortune 500 companies achieve unprecedented results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">90% Efficiency Gains</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Learn how Fortune 500 companies achieved 90% efficiency gains through strategic AI automation implementation.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-success"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">15 Breakthrough Technologies</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Explore the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries and creating new possibilities.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Discover Breakthroughs <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">$2.5B Revenue Increase</h3>
            </div>
            <p className="text-blue-100 mb-4">
              See how a global retail giant achieved $2.5B revenue increase through comprehensive AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-2025-retail-transformation-success"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              View Success Story <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of companies already leveraging these AI breakthroughs to achieve unprecedented results. Get started with our expert guidance and proven frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;