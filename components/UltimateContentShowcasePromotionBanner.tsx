"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
ArrowRightStarTrendingUpUsersGlobeZapAwardClock
import Link from 'next/link';

const UltimateContentShowcasePromotionBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }30o00);
    return () => clearInterval(interval);
  }[]);

  const stats = [
    { icon: TrendingUpvalue: "5,0o00%"label: "ROI Increase"color: "from-green-50o0 to-emerald-50o0" },
    { icon: Usersvalue: "10M+"label: "Users Impacted"color: "from-blue-50o0 to-cyan-50o0" },
    { icon: Awardvalue: "99.9%"label: "Success Rate"color: "from-purple-50o0 to-pink-50o0" },
    { icon: Globevalue: "150+"label: "Countries"color: "from-orange-50o0 to-red-50o0" }
  ];

  const solutions = [
    "AI 20o25 Ultimate Innovation",
    "Quantum Computing Revolution",
    "Advanced Automation Solutions",
    "Enterprise Transformation"
  ];

  const features = [
    { icon: Startext: "5-Star Rated Solutions"color: "text-yellow-50o0" },
    { icon: Zaptext: "Lightning Fast Implementation"color: "text-blue-50o0" },
    { icon: Userstext: "10M+ Satisfied Customers"color: "text-green-50o0" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-90o0 via-blue-90o0 to-indigo-90o0 py-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.0o46-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : -30 }}
              transition={{ delay: 0.2duration: 0.6 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4"  />
                Ultimate Technology Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-10o0 to-purple-20o0 bg-clip-text text-transparent mb-4">
                Revolutionary Technology Showcase
              </h2>
              <p className="text-xl text-gray-30o0 mb-6 max-w-2xl">
                Discover the future of technology with our comprehensive suite of AIquantum computing
                and automation solutions transforming industries worldwide.
              </p>
            </motion.div>

            {/* Solutions List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4duration: 0.6 }}
              className="grid grid-cols-2 gap-2 mb-6"
            >
              {solutions.map((solutionindex) => (
                <div key={index} className="flex items-center gap-2 text-gray-30o0">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-50o0 to-blue-50o0 rounded-full"></div>
                  <span className="text-sm">{solution}</span>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.5duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              {features.map((featureindex) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className={`w-4 h-4 ${feature.color}`}  />
                  <span className="text-gray-30o0">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.6duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/ultimate-content-showcase"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4"  />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-40o0 text-white px-6 py-3 rounded-full font-semibold hover:border-gray-30o0 hover:bg-gray-80o0/50 transition-all duration-30o0"
              >
                Get Started Today
              </Link>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0x: isVisible ? 0 : 30 }}
            transition={{ delay: 0.3duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="bg-gray-80o0/50 backdrop-blur-sm border border-gray-70o0 rounded-2xl p-8 min-w-[30o0px]">
              <h3 className="text-xl font-bold text-white text-center mb-6">Proven Results</h3>
              
              {/* Animated Stat */}
              <motion.div
                key={currentStat}
                initial={{ opacity: 0scale: 0.8 }}
                animate={{ opacity: 1scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stats[currentStat].color} mb-4`}>
                  <stats[currentStat].icon className="w-8 h-8 text-white"  />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats[currentStat].value}</div>
                <div className="text-gray-40o0 text-sm">{stats[currentStat].label}</div>
              </motion.div>

              {/* Additional Stats */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-40o0">Implementation Time</span>
                  <span className="text-white font-semibold">24-48 Hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-40o0">Customer Satisfaction</span>
                  <span className="text-green-40o0 font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-40o0">Global Presence</span>
                  <span className="text-white font-semibold">150+ Countries</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-40o0">Success Rate</span>
                  <span className="text-purple-40o0 font-semibold">99.9%</span>
                </div>
              </div>

              {/* Urgency Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1duration: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2 text-orange-40o0 text-sm"
              >
                <Clock className="w-4 h-4"  />
                <span>Limited time offer - Act now!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentShowcasePromotionBanner;