import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Download, BookOpen, Zap } from 'lucide-react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 New AI Content Just Released!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our latest AI insights, success stories, and implementation guides. 
            Join 10,000+ professionals transforming their businesses with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Success Stories</h3>
            <p className="text-blue-100 text-sm mb-4">
              Real Fortune 500 transformations with 300% productivity gains and $50M+ savings
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-success"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Read Now <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Revolutionary Breakthroughs</h3>
            <p className="text-blue-100 text-sm mb-4">
              Explore quantum AI, autonomous systems, and technologies reshaping our world
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold mb-2">Retail Transformation</h3>
            <p className="text-blue-100 text-sm mb-4">
              $200M revenue boost case study with 150% customer satisfaction improvement
            </p>
            <Link 
              href="/case-studies/ai-retail-transformation-success-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">Master Guide 2025</h3>
            <p className="text-blue-100 text-sm mb-4">
              200-page implementation playbook with frameworks, templates, and strategies
            </p>
            <Link 
              href="/resources/ai-implementation-master-guide-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Download Free <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Content
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm">10,000+ Downloads</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-sm">300% Success Rate</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-sm">Free Resources</span>
            </div>
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