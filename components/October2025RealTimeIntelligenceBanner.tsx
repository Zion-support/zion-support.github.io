import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function October2025RealTimeIntelligenceBanner() {
  return (
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-blue-900/40 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="container mx-auto px-6">
        {/* Breaking News Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 backdrop-blur-lg animate-pulse">
            <span className="text-cyan-300 font-extrabold text-xl tracking-wider uppercase">
              🚀 BREAKING NEWS: OCTOBER 1, 2025 - REAL-TIME INTELLIGENCE REVOLUTION
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent leading-tight">
            Real-Time AI Orchestration: Sub-50ms Intelligence at Scale
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 font-semibold mb-4">
            $2.4B Value Creation • 10M+ Events/Second • 99.94% Uptime
          </p>
          <p className="text-xl text-cyan-200 max-w-4xl mx-auto">
            Fortune 500 companies are revolutionizing decision-making with real-time AI systems 
            that process and respond to business events in under 50 milliseconds. Discover the 
            architecture patterns, deployment strategies, and proven ROI of 8-12x.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">47ms</div>
            <div className="text-sm text-cyan-200 font-medium">Median Decision Latency</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-3xl font-extrabold text-blue-300 mb-2">99.94%</div>
            <div className="text-sm text-blue-200 font-medium">Platform Uptime SLA</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">💰</div>
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">$2.4B</div>
            <div className="text-sm text-cyan-200 font-medium">Average ROI Created</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105">
            <div className="text-5xl mb-4">📊</div>
            <div className="text-3xl font-extrabold text-blue-300 mb-2">10M+</div>
            <div className="text-sm text-blue-200 font-medium">Events per Second</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-4 uppercase tracking-wider">
              📘 Technical Guide
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Real-Time AI Orchestration: Enterprise Implementation Guide
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Comprehensive guide to deploying real-time AI systems with proven architecture patterns, 
              infrastructure requirements, and production deployment strategies. Includes real-world 
              success story achieving 92% fraud detection rate with 43ms latency.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">Event-Driven Architecture</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">Microservices AI</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">Production MLOps</span>
            </div>
            <a
              href="/blog/ai-2025-oct-real-time-ai-orchestration-enterprise-guide"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Read Technical Guide →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-4 uppercase tracking-wider">
              💰 $87B Success Story
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pharmaceutical AI: $87 Billion Drug Discovery Transformation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fortune 100 pharmaceutical leader reduces drug development time by 65%, identifies 23 
              promising candidates, and creates $87B in pipeline value using AI-powered drug discovery 
              platform. Includes complete technical architecture and implementation roadmap.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">65% Faster Development</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">23 Clinical Candidates</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">$87B Pipeline Value</span>
            </div>
            <a
              href="/case-studies/ai-2025-oct-pharmaceutical-ai-drug-discovery-87-billion-success"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              View Success Story →
            </a>
          </div>

          {/* Service */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-4 uppercase tracking-wider">
              🚀 New Service Launch
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Real-Time AI Orchestration Platform Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enterprise-grade real-time AI orchestration platform with sub-50ms latency, 99.95% uptime 
              SLA, and proven 8-12x ROI. Includes assessment, design, deployment, and managed services 
              with 24/7 support and continuous optimization.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">24/7 Support</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs">99.95% Uptime</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">8-12x ROI</span>
            </div>
            <a
              href="/services/ai-2025-october-real-time-orchestration-platform"
              className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/50"
            >
              Explore Services →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <p className="text-lg text-cyan-200 mb-4">
              <strong className="text-cyan-100">Ready to deploy real-time AI intelligence?</strong> 
              <br />Schedule a complimentary architecture review and ROI assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Schedule Consultation →
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Watch Platform Demo
              </a>
=======
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-950 rounded-2xl shadow-2xl mb-12 border border-cyan-500/20"
    >
      {/* Animated circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" stroke="currentColor" fill="none" strokeWidth="1" className="text-cyan-400" />
              <path d="M 50 100 L 50 50 L 100 50" stroke="currentColor" fill="none" strokeWidth="1" className="text-blue-400" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-cyan-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Pulse effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: '50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Icon section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl"
              />
              <div className="relative bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-2xl">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                ⚡ Real-Time Revolution • October 2025
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-Time Enterprise Intelligence Systems
            </h2>

            <p className="text-cyan-100 text-lg mb-6 leading-relaxed max-w-4xl">
              Experience the future of business intelligence with <span className="font-bold text-white">sub-100ms decision-making</span>, 
              <span className="font-bold text-white"> 96.7% predictive accuracy</span>, and <span className="font-bold text-white">autonomous 
              intelligence</span> that transforms enterprise operations in real-time.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">&lt;100ms</div>
                </div>
                <div className="text-cyan-200 text-sm">Decision Speed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20">
                <div className="text-2xl font-bold text-white mb-1">96.7%</div>
                <div className="text-blue-200 text-sm">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-2xl font-bold text-white mb-1">400%+</div>
                <div className="text-green-200 text-sm">First Year ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-2xl font-bold text-white mb-1">$47M+</div>
                <div className="text-purple-200 text-sm">Proven Savings</div>
              </div>
            </div>

            {/* Industry success badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏦 Financial Services
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🛒 Retail & E-commerce
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏥 Healthcare
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                🏭 Manufacturing
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog/ai-2025-oct-real-time-enterprise-intelligence"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore the Technology
                <Sparkles className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 border border-white/20"
              >
                Schedule Demo
                <TrendingUp className="w-5 h-5" />
              </Link>
>>>>>>> origin/cursor/create-and-deploy-new-content-b01b
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent with animated gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
