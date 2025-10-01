import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, CheckCircle, TrendingUp, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const October2025AutonomousDataGovernanceBanner = () => {
  const features = [
    '97% Compliance Violation Reduction',
    '$247M Healthcare Network Success',
    '847% Average ROI',
    'Self-Regulating Compliance',
    '87% FTE Hour Reduction',
    'Real-Time Governance',
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-400/20 border-2 border-emerald-400 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold text-sm tracking-wide">
              🔒 NEW: OCTOBER 2025 - AUTONOMOUS DATA GOVERNANCE REVOLUTION 🔒
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent leading-tight"
        >
          Autonomous Data Governance Platform
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-center text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Self-Regulating Enterprise Data Governance with AI-Powered Compliance, Quality Assurance & Security at Scale
        </motion.p>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">97%</h3>
            </div>
            <p className="text-cyan-100 text-sm">Compliance Violation Reduction - Proven Results</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">$247M</h3>
            </div>
            <p className="text-cyan-100 text-sm">Healthcare Network Success - Real Value Creation</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">847%</h3>
            </div>
            <p className="text-cyan-100 text-sm">Average ROI Over 3 Years - Guaranteed Results</p>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-white text-sm font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-emerald-400" />
                Real-World Success
              </h3>
              <p className="text-cyan-100 leading-relaxed mb-4">
                <strong className="text-white">Global Healthcare Network:</strong> 847 hospitals, 27 countries, 2.4 exabytes of patient data
              </p>
              <ul className="space-y-2 text-cyan-100 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  HIPAA violations: 92 → 3 (97% reduction)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Data quality: 67% → 96% (+29 points)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Patient safety incidents: 93% reduction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Research data access: 18 days → 4 hours
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-cyan-400" />
                Core Capabilities
              </h3>
              <ul className="space-y-3 text-cyan-100 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Self-Regulating Compliance:</strong> Automatic GDPR, HIPAA, CCPA enforcement across 50+ regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">AI-Powered Quality:</strong> 99.7% anomaly detection accuracy, self-healing pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Intelligent Access Control:</strong> Context-aware permissions, behavioral threat detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span><strong className="text-white">Cognitive Catalog:</strong> AI-powered discovery, natural language search</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Typical Value Creation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold text-emerald-400 mb-2">$61M+</p>
              <p className="text-cyan-100 text-sm">Annual Value</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">847%</p>
              <p className="text-cyan-100 text-sm">3-Year ROI</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400 mb-2">96%</p>
              <p className="text-cyan-100 text-sm">Faster Compliance</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-400 mb-2">3-6mo</p>
              <p className="text-cyan-100 text-sm">Payback Period</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/blog/ai-2025-oct-autonomous-data-governance-revolution"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
          >
            Read Full Blog Post
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/case-studies/ai-2025-oct-global-healthcare-autonomous-governance-247m-success"
            className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View $247M Case Study
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services/autonomous-data-governance"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Industry Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {['Healthcare', 'Financial Services', 'Retail', 'Manufacturing', 'Technology', 'Government'].map((industry) => (
            <span
              key={industry}
              className="bg-white/10 backdrop-blur-sm text-cyan-100 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default October2025AutonomousDataGovernanceBanner;
