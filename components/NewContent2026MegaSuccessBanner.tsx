import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// New Content 2026 Mega Success Banner
export const NewContent2026MegaSuccessBanner: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW MEGA SUCCESS 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content:
            <span className="block text-yellow-200">$25M ROI Case Studies</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Discover the complete blueprint for AI transformation success. New comprehensive guides and 
            case studies showing how Fortune 500 companies achieve $25M+ ROI with 99% automation.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">$25M</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99%</div>
              <div className="text-sm opacity-90">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">90%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">300%</div>
              <div className="text-sm opacity-90">Productivity</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/ai-next-generation-automation-2026"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              🚀 Read Next-Gen Automation Guide
            </Link>
            <Link
              href="/blog/ai-transformation-mega-success-2026"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📊 View $25M Success Story
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {/* Featured Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Next-Gen Automation Guide</h3>
                <p className="text-sm opacity-90">25 min read</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Master the future of business automation with AI-powered systems that achieve 99% process 
              efficiency and $10M+ annual savings.
            </p>
            <Link
              href="/blog/ai-next-generation-automation-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🏆</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">$25M ROI Case Study</h3>
                <p className="text-sm opacity-90">30 min read</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Complete Fortune 500 transformation story with 99% automation, 90% cost reduction, 
              and revolutionary business outcomes.
            </p>
            <Link
              href="/blog/ai-transformation-mega-success-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              View Case Study →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Implementation Framework</h3>
                <p className="text-sm opacity-90">Complete blueprint</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Step-by-step implementation guide with proven strategies, best practices, and 
              real-world success metrics.
            </p>
            <Link
              href="/services/ai-transformation-consulting"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Implementation Guide →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12 pt-8 border-t border-white/20"
      >
        <p className="text-lg mb-6 opacity-90">
          Join thousands of companies transforming their operations with AI automation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Explore All AI Content
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            View All Success Stories
          </Link>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// AI Customer Experience Revolution Banner
export const AICustomerExperienceRevolutionBanner: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              💬 CUSTOMER EXPERIENCE REVOLUTION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Customer Experience Revolution:
            <span className="block text-cyan-200">95% Satisfaction Rate</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Transform customer service with hyper-personalization, predictive support, and intelligent 
            automation that delivers 95% satisfaction rates and 80% faster response times.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">80%</div>
              <div className="text-sm opacity-90">Faster Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">90%</div>
              <div className="text-sm opacity-90">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-90">Availability</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/ai-customer-experience-revolution-2026"
              className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              💬 Read Experience Guide
            </Link>
            <Link
              href="/services/ai-customer-service-automation"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              🚀 Transform Your Service
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-bold mb-4">🎯 Customer Experience Features</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Hyper-personalized interactions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Predictive issue resolution</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Omnichannel experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>Intelligent routing & escalation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-bold mb-4">📊 Proven Results</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">95%</div>
                <div className="text-xs opacity-90">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">80%</div>
                <div className="text-xs opacity-90">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">90%</div>
                <div className="text-xs opacity-90">Cost Saved</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs opacity-90">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

// AI Sustainability Transformation Banner
export const AISustainabilityTransformationBanner: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white py-16"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              🌱 SUSTAINABILITY TRANSFORMATION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Sustainability Transformation:
            <span className="block text-yellow-200">$10M ROI & Carbon Neutral</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Achieve carbon-neutral AI operations with 80% energy reduction and $10M+ ROI through 
            sustainable technology and green computing practices.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">$10M</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">80%</div>
              <div className="text-sm opacity-90">Energy Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">Carbon Neutral</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">$2M+</div>
              <div className="text-sm opacity-90">Annual Savings</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/ai-sustainability-green-tech-2026"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              🌱 Read Sustainability Guide
            </Link>
            <Link
              href="/case-studies/ai-sustainability-transformation-2026"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📊 View $10M Case Study
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-bold mb-4">🌍 Sustainability Benefits</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Carbon-neutral AI operations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Green computing optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Renewable energy integration</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>ESG compliance automation</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-bold mb-4">💰 Financial Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">$10M</div>
                <div className="text-xs opacity-90">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">80%</div>
                <div className="text-xs opacity-90">Energy Saved</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">$2M+</div>
                <div className="text-xs opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">100%</div>
                <div className="text-xs opacity-90">Carbon Neutral</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default NewContent2026MegaSuccessBanner;