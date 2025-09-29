import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Target } from 'lucide-react';

export default function UltimateContentShowcase2026() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold">
              🌟 ULTIMATE 2026 CONTENT SHOWCASE
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Most Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              AI Innovation Collection
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Access the complete library of 2026 AI breakthroughs, implementation guides, 
            and success stories that are transforming enterprises worldwide.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>50+ New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>25+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>1000x Performance Gains</span>
            </div>
          </div>
        </motion.div>

        {/* Content Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Revolutionary Breakthroughs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Revolutionary Breakthroughs</h3>
                <p className="text-blue-200 text-sm">Game-Changing AI Innovations</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Quantum AI Computing</h4>
                      <p className="text-sm text-blue-200">1000x Performance Breakthrough</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-agent-orchestration-advanced-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Agent Orchestration</h4>
                      <p className="text-sm text-blue-200">Advanced Enterprise Implementation</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-autonomous-enterprise-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Autonomous Enterprise</h4>
                      <p className="text-sm text-blue-200">Self-Operating Business Systems</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </div>
            
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Explore All Breakthroughs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Success Stories</h3>
                <p className="text-green-200 text-sm">Proven ROI & Results</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <Link href="/case-studies/ai-agent-orchestration-mega-success-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">$15M Orchestration Success</h4>
                      <p className="text-sm text-green-200">TechCorp Global Case Study</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">$25M Autonomous Success</h4>
                      <p className="text-sm text-green-200">Complete Business Autonomy</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-enterprise-transformation-mega-success-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">$50M Mega Transformation</h4>
                      <p className="text-sm text-green-200">Enterprise-Wide Success</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </div>
            
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Implementation Guides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Implementation Guides</h3>
                <p className="text-orange-200 text-sm">Step-by-Step Blueprints</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <Link href="/blog/ai-implementation-playbook-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">AI Implementation Playbook</h4>
                      <p className="text-sm text-orange-200">Complete Enterprise Guide</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-platform-architecture-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Platform Architecture</h4>
                      <p className="text-sm text-orange-200">Scalable AI Infrastructure</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-governance-maturity-model-2026" className="block group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-yellow-300 transition-colors">Governance Framework</h4>
                      <p className="text-sm text-orange-200">AI Maturity & Compliance</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </div>
            
            <Link
              href="/content-hub"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Access All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Content Performance Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">New Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1000x</div>
              <div className="text-gray-300">Performance Improvements</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">$100M+</div>
              <div className="text-gray-300">Total ROI Achieved</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl mb-8 opacity-90">
              Access the complete library of 2026 AI innovations and join the companies 
              achieving unprecedented success with AI transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-hub"
                className="bg-black text-yellow-400 hover:bg-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                🌟 Explore Content Hub
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>

export default function UltimateContentShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🔥</span>
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Premium AI Content & Exclusive Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our most valuable content library featuring exclusive insights, breakthrough technologies, 
            and transformative success stories that drive real business results
          </p>
        </div>

        {/* Premium Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Exclusive Masterclass */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
            <div className="relative h-64 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">AI Masterclass</h3>
                  <p className="text-amber-100">Exclusive Training</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  EXCLUSIVE
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">Masterclass</span>
                <span className="text-gray-500 text-sm">45 min intensive</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                AI Transformation Masterclass: From Strategy to $10M ROI
              </h4>
              <p className="text-gray-600 mb-6 text-lg">
                Exclusive masterclass revealing the complete framework for AI transformation success. 
                Learn proven strategies, implementation methodologies, and real-world tactics that deliver $10M+ ROI.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">$10M+</div>
                  <div className="text-xs text-gray-500">ROI Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">18</div>
                  <div className="text-xs text-gray-500">Months ROI</div>
                </div>
              </div>
              <Link
                href="/masterclass/ai-transformation-2026"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
              >
                Access Masterclass →
              </Link>
            </div>
          </div>

          {/* Ultimate Case Study */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
            <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Ultimate Success</h3>
                  <p className="text-green-100">$50M Transformation</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ULTIMATE CASE STUDY
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  FORTUNE 100
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                <span className="text-gray-500 text-sm">Fortune 100 company</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Ultimate AI Transformation: $50M ROI Success Story
              </h4>
              <p className="text-gray-600 mb-6 text-lg">
                Exclusive deep-dive into how a Fortune 100 company achieved $50M ROI through comprehensive 
                AI transformation, revolutionizing their entire business model and competitive position.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$50M</div>
                  <div className="text-xs text-gray-500">Total ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-xs text-gray-500">Months</div>
                </div>
              </div>
              <Link
                href="/case-studies/ultimate-ai-transformation-2026"
                className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
              >
                View Ultimate Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Content Collection */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/whitepaper/ai-future-enterprise-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-amber-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  WHITEPAPER
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  EXCLUSIVE
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-amber-600 font-medium">📄 Whitepaper</span>
                <span className="text-sm text-gray-500">Strategic Guide</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                The Future of AI in Enterprise: 2026 Strategic Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Exclusive 50-page whitepaper revealing the strategic roadmap for AI adoption, 
                implementation frameworks, and future-proofing strategies for enterprise success.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-amber-600">50</div>
                  <div className="text-xs text-gray-500">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">2026</div>
                  <div className="text-xs text-gray-500">Roadmap</div>
                </div>
              </div>
              <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">
                Download Whitepaper →
              </div>
            </div>
          </Link>

          <Link href="/webinar/ai-implementation-mastery-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  WEBINAR
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  LIVE
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-600 font-medium">🎥 Webinar</span>
                <span className="text-sm text-gray-500">Live Session</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Implementation Mastery: Live Expert Session
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Exclusive live webinar with AI implementation experts sharing insider knowledge, 
                best practices, and real-time Q&A for successful AI deployment.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">90</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-600">Live</div>
                  <div className="text-xs text-gray-500">Q&A</div>
                </div>
              </div>
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                Register for Webinar →
              </div>
            </div>
          </Link>

          <Link href="/toolkit/ai-transformation-toolkit-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  TOOLKIT
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  COMPLETE
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-green-600 font-medium">🛠️ Toolkit</span>
                <span className="text-sm text-gray-500">Complete Package</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Transformation Toolkit: Complete Implementation Package
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive toolkit including templates, frameworks, checklists, and tools 
                for successful AI transformation with step-by-step implementation guides.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">25+</div>
                  <div className="text-xs text-gray-500">Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-teal-600">Complete</div>
                  <div className="text-xs text-gray-500">Package</div>
                </div>
              </div>
              <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                Get Complete Toolkit →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/premium-content"
            className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🔥</span>
            Access All Premium Content
          </Link>
        </div>
      </div>
    </section>
  );
}