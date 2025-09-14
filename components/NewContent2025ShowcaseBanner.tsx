import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewContent2025ShowcaseBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 mb-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                🚀 New Content Alert!
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Discover our latest AI transformation insights, enterprise case studies, and revolutionary automation strategies
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">📚 New Blog Posts</span>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">📊 Case Studies</span>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">🎯 ROI Guides</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/blog/ai-2025-next-gen-business-automation"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Read Automation Guide
                </Link>
                <Link 
                  href="/blog/ai-2025-enterprise-ai-transformation-mastery"
                  className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
                >
                  View Transformation Guide
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-white font-semibold mb-1">Next-Gen Automation</h3>
              <p className="text-blue-100 text-sm">Revolutionary AI business automation strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="text-white font-semibold mb-1">Enterprise Mastery</h3>
              <p className="text-blue-100 text-sm">Complete AI transformation roadmap</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-white font-semibold mb-1">$100M ROI</h3>
              <p className="text-blue-100 text-sm">Proven enterprise success story</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-white font-semibold mb-1">Instant Results</h3>
              <p className="text-blue-100 text-sm">18-month transformation timeline</p>
            </div>
          </motion.div>
        </div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 2 }}
          className="mt-6 bg-white/20 rounded-full h-2 overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
        </motion.div>
        
        <div className="mt-4 text-center">
          <p className="text-blue-100 text-sm">
            <span className="font-semibold">New Content Added:</span> 3 comprehensive guides, 1 detailed case study, and implementation frameworks
          </p>
        </div>
      </div>
    </motion.div>
  );
}