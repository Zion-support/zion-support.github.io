import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, BookOpen, Users, Zap } from 'lucide-react';

const NewContentPromotionalBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">New Content Available</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover Our Latest AI Insights
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
            Fresh content, expert analysis, and proven strategies to accelerate your AI transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">200-Page Master Guide</h3>
            <p className="text-sm text-indigo-100 mb-4">
              Complete AI implementation playbook with templates, case studies, and expert insights
            </p>
            <Link 
              href="/resources/ai-implementation-complete-guide-2025"
              className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-200 transition-colors"
            >
              Download Guide
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Transformation</h3>
            <p className="text-sm text-indigo-100 mb-4">
              Proven strategies and frameworks for successful enterprise AI adoption
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-transformation"
              className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-200 transition-colors"
            >
              Read Article
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-semibold mb-2">AI Trends 2025</h3>
            <p className="text-sm text-indigo-100 mb-4">
              Expert predictions and market analysis for the most impactful AI trends
            </p>
            <Link 
              href="/blog/ai-2025-trends-predictions"
              className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-200 transition-colors"
            >
              Explore Trends
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
            <p className="text-sm text-indigo-100 mb-4">
              Real-world case studies showcasing 300% revenue growth through AI
            </p>
            <Link 
              href="/case-studies/ai-retail-transformation-success-2025"
              className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-200 transition-colors"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Expert Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner;