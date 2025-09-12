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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;