import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
ArrowRightZapStarTrendingUpUsersAwardClockCheckCircle

export default function UltimatePromotionalBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2type: "spring"stiffness: 200 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">LIMITED TIME OFFER - ENDS SOON</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            🚀 Transform Your Business with AI Automation
            <br />
            <span className="text-yellow-300">Get 50% Off Your First 3 Months!</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Join 10,000+ businesses already saving 60% on costs and increasing productivity by 300%. 
            'Don', 't miss this exclusive offer - limited time only!
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">60%</div>
              <div className="text-sm text-blue-100">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">300%</div>
              <div className="text-sm text-blue-100">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">3 Months</div>
              <div className="text-sm text-blue-100">ROI Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">24/7</div>
              <div className="text-sm text-blue-100">Support</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link
              href="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Claim 50% Discount Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/ai-automation-services"
              className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-100"
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              30-Day Money Back
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              Free Consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
              Cancel Anytime
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-sm text-blue-100 mb-2">Offer Expires In:</div>
              <div className="flex justify-center space-x-4 text-2xl font-bold">
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">07</div>
                  <div className="text-xs text-blue-100">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">23</div>
                  <div className="text-xs text-blue-100">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2">
                  <div className="text-yellow-300">45</div>
                  <div className="text-xs text-blue-100">Minutes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}