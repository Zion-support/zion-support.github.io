import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const AI2026ContentShowcaseBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Insights for 2026
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies and strategies that will transform your enterprise. 
            Get exclusive access to our latest research and case studies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quantum AI Breakthroughs</h3>
            <p className="text-blue-100 text-sm">400% ROI with quantum computing integration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold mb-2">Autonomous Systems</h3>
            <p className="text-blue-100 text-sm">95% automation with self-managing operations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Neural Interfaces</h3>
            <p className="text-blue-100 text-sm">Direct human-AI collaboration technology</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-2026-mega-trends-comprehensive"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore 2026 AI Trends →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export const AIEnterpriseAutomationRevolutionBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🏭 ENTERPRISE AUTOMATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Enterprise Automation Revolution
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Transform your enterprise with autonomous AI systems that self-optimize, 
              predict maintenance needs, and adapt to changing conditions in real-time.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-emerald-200">Process Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">$25M</div>
                <div className="text-sm text-emerald-200">Annual Savings</div>
              </div>
            </div>
            <Link
              href="/services/ai-enterprise-automation"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Transformation →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Success Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Operational Efficiency</span>
                <span className="text-2xl font-bold">+95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Cost Reduction</span>
                <span className="text-2xl font-bold">-85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Response Time</span>
                <span className="text-2xl font-bold">-90%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Quality Consistency</span>
                <span className="text-2xl font-bold">99.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const AIQuantumComputingBreakthroughBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">⚛️ QUANTUM AI BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quantum AI Computing Breakthrough
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            Experience the next frontier in computational power with quantum AI that solves 
            previously intractable optimization problems and achieves breakthrough performance gains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4">Exponential Speed</h3>
            <p className="text-purple-100 mb-4">
              Process complex calculations 1000x faster than classical computers
            </p>
            <div className="text-3xl font-bold text-yellow-400">1000x</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Perfect Optimization</h3>
            <p className="text-purple-100 mb-4">
              Solve optimization problems with 99.9% accuracy and efficiency
            </p>
            <div className="text-3xl font-bold text-yellow-400">99.9%</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-4">Massive ROI</h3>
            <p className="text-purple-100 mb-4">
              Achieve unprecedented returns on quantum AI investments
            </p>
            <div className="text-3xl font-bold text-yellow-400">500%</div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-quantum-computing-2026"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Learn About Quantum AI →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export const AIMegaTransformationSuccessBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🏆 MEGA SUCCESS STORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Transformation Mega Success
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              See how a Fortune 500 company achieved 500% ROI, $25M annual savings, 
              and 95% efficiency gains through comprehensive AI transformation in just 6 months.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">500%</div>
                <div className="text-sm text-pink-200">ROI Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm text-pink-200">Months to ROI</div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Success Story →
            </Link>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Transformation Results</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span className="text-pink-200">Process Automation</span>
                <span className="text-2xl font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span className="text-pink-200">Quality Consistency</span>
                <span className="text-2xl font-bold">99.2%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span className="text-pink-200">Supply Chain Efficiency</span>
                <span className="text-2xl font-bold">87%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span className="text-pink-200">Predictive Accuracy</span>
                <span className="text-2xl font-bold">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const AI2026InnovationShowcaseBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">🌟 2026 INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Innovation Showcase 2026
          </h2>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
            Explore the latest AI innovations and breakthrough technologies that are reshaping 
            industries and creating unprecedented opportunities for growth and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
            <p className="text-cyan-100 text-sm">Direct brain-computer collaboration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold mb-2">Multimodal AI</h3>
            <p className="text-cyan-100 text-sm">Text, voice, and visual integration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-lg font-bold mb-2">Green AI</h3>
            <p className="text-cyan-100 text-sm">Sustainable AI solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-bold mb-2">AI Security</h3>
            <p className="text-cyan-100 text-sm">Advanced threat protection</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore All Innovations →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export const LatestContent2026MegaBanner: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">📚 LATEST 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Content & Insights
          </h2>
          <p className="text-xl text-orange-100 max-w-4xl mx-auto">
            Stay ahead with our comprehensive collection of AI insights, case studies, 
            and breakthrough technologies that are shaping the future of enterprise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-4">Comprehensive Guides</h3>
            <p className="text-orange-100 mb-6">
              In-depth analysis of AI trends, implementation strategies, and best practices for enterprise transformation.
            </p>
            <Link
              href="/blog/ai-2026-mega-trends-comprehensive"
              className="text-white font-semibold hover:text-orange-200 transition-colors"
            >
              Read Latest Guide →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4">Success Stories</h3>
            <p className="text-orange-100 mb-6">
              Real-world case studies showcasing 500% ROI achievements and transformative business outcomes.
            </p>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="text-white font-semibold hover:text-orange-200 transition-colors"
            >
              View Success Stories →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-bold mb-4">Interactive Tools</h3>
            <p className="text-orange-100 mb-6">
              Calculate your potential ROI and explore AI solutions with our interactive calculators and tools.
            </p>
            <Link
              href="/services"
              className="text-white font-semibold hover:text-orange-200 transition-colors"
            >
              Try Our Tools →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/content-hub"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Content Hub →
          </Link>
        </div>
      </div>
    </motion.section>
  );
};