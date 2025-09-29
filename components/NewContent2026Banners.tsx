import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function NewContent2026Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
          >
            <span className="text-sm font-semibold">✨ New 2026 Content</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Revolutionary AI Insights for 2026
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          >
            Discover groundbreaking AI trends, implementation strategies, and success stories that will 
            reshape your business in 2026. From autonomous systems to quantum AI, stay ahead of the curve.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link 
              href="/blog/ai-industry-trends-2026" 
              className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                AI Industry Trends 2026
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Top 10 AI trends that will reshape industries
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>18 min read</span>
                <span className="group-hover:text-yellow-300 transition-colors">Read More →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link 
              href="/blog/ai-implementation-strategies-2026" 
              className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                Implementation Strategies
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Complete enterprise AI transformation guide
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>22 min read</span>
                <span className="group-hover:text-yellow-300 transition-colors">Read More →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link 
              href="/case-studies/global-manufacturing-ai-transformation-2026" 
              className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                Manufacturing Success Story
              </h3>
              <p className="text-sm opacity-90 mb-3">
                $8.5M ROI with comprehensive AI transformation
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>15 min read</span>
                <span className="group-hover:text-yellow-300 transition-colors">Read More →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link 
              href="/tools/ai-roi-calculator" 
              className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                AI ROI Calculator
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Calculate your potential AI transformation ROI
              </p>
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>Interactive Tool</span>
                <span className="group-hover:text-yellow-300 transition-colors">Try Now →</span>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/blog" 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Explore All 2026 Content →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function InteractiveToolsBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🛠️ Interactive Tools</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            AI Tools & Calculators
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the power of AI with our interactive tools. Calculate ROI, assess readiness, 
            and explore AI solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/tools/ai-roi-calculator" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              ROI Calculator
            </h3>
            <p className="text-sm opacity-90 mb-3">
              Calculate potential savings and ROI for AI implementation
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Try Calculator →
            </div>
          </Link>

          <Link 
            href="/tools/ai-readiness-assessment" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Readiness Assessment
            </h3>
            <p className="text-sm opacity-90 mb-3">
              Evaluate your organization's AI readiness and capabilities
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Start Assessment →
            </div>
          </Link>

          <Link 
            href="/tools/ai-cost-estimator" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Cost Estimator
            </h3>
            <p className="text-sm opacity-90 mb-3">
              Estimate implementation costs for AI projects
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Get Estimate →
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link 
            href="/tools" 
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Explore All Tools →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SuccessStoriesBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🏆 Success Stories</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Real Results, Real Impact
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See how organizations across industries are achieving unprecedented results with AI transformation. 
            From Fortune 500 companies to growing businesses, discover what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/case-studies/global-manufacturing-ai-transformation-2026" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Manufacturing Leader
            </h3>
            <p className="text-sm opacity-90 mb-3">
              $8.5M ROI with 85% efficiency gains across 50+ facilities
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Read Case Study →
            </div>
          </Link>

          <Link 
            href="/case-studies/fintech-ai-risk-compliance-2025" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              FinTech Pioneer
            </h3>
            <p className="text-sm opacity-90 mb-3">
              70% risk reduction and $2.5M savings with AI governance
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Read Case Study →
            </div>
          </Link>

          <Link 
            href="/case-studies/retail-ai-transformation" 
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="text-3xl mb-3">🛒</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
              Retail Giant
            </h3>
            <p className="text-sm opacity-90 mb-3">
              150% revenue growth with AI-powered customer experience
            </p>
            <div className="text-xs opacity-75 group-hover:text-yellow-300 transition-colors">
              Read Case Study →
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link 
            href="/case-studies" 
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
          >
            View All Success Stories →
          </Link>
        </div>
      </div>
    </div>
  );
}