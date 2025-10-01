import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

export default function October2025ZeroTrustAISecurityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-amber-950 rounded-2xl shadow-2xl mb-12 border border-red-500/20"
    >
      {/* Security grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          color: '#ef4444',
        }} />
      </div>

      {/* Scanning effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent"
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Shield particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Shield className="w-6 h-6 text-red-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Icon section with animated shield */}
          <div className="flex-shrink-0">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50"
              />
              <div className="relative bg-gradient-to-br from-red-600 to-orange-600 p-6 rounded-2xl">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
                🔒 Zero-Trust Framework • October 2025
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise AI Security Revolution
            </h2>

            <p className="text-red-100 text-lg mb-6 leading-relaxed max-w-4xl">
              Protect your AI systems with the revolutionary Zero-Trust AI Security Framework. Achieve 
              <span className="font-bold text-white"> 99.97% threat detection</span>, 
              <span className="font-bold text-white"> &lt;50ms response time</span>, and 
              <span className="font-bold text-white"> autonomous protection</span> against sophisticated AI-specific threats.
            </p>

            {/* Security metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <div className="text-2xl font-bold text-white">99.97%</div>
                </div>
                <div className="text-red-200 text-sm">Threat Detection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-orange-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">&lt;50ms</div>
                </div>
                <div className="text-orange-200 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-400/20">
                <div className="text-2xl font-bold text-white mb-1">$180M</div>
                <div className="text-green-200 text-sm">Prevented Losses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-2xl font-bold text-white mb-1">Zero</div>
                <div className="text-purple-200 text-sm">Breaches</div>
              </div>
            </div>

            {/* Protection features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Model Protection</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Data Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Adversarial Defense</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Compliance Automation</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Quantum-Resistant</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>24/7 Monitoring</span>
              </div>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                SOC 2 Type II
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                ISO 27001
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                GDPR Compliant
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                HIPAA Ready
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blog/ai-2025-oct-zero-trust-ai-security-framework"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More
                <Shield className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 border border-white/20"
              >
                Get Protected
                <Lock className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Security pulse at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        animate={{
          background: [
            'linear-gradient(to right, #ef4444, #f97316, #ef4444)',
            'linear-gradient(to right, #f97316, #ef4444, #f97316)',
            'linear-gradient(to right, #ef4444, #f97316, #ef4444)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
