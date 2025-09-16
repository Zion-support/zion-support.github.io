"use client";
'use client';

import React, { useState, useEffect } from 'react';
BellZapTrendingUpUsersAwardGlobeArrowRightClock
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryTechAnnouncementBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentAnnouncementsetCurrentAnnouncement] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % 3);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const announcements = [
    {
      title: "AI 2025 Breakthrough Achieved",
      description: "Revolutionary AI technology delivering 5,000% ROI increase",
      icon: Zap,
      color: "from-purple-500 to-blue-500",
      urgency: "Just Announced"
    },
    {
      title: "Quantum Supremacy Unlocked",
      description: "Error-corrected quantum computers now available",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      urgency: "Breaking News"
    },
    {
      title: "Global Implementation Success",
      description: "10M+ users transformed across 150+ countries",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      urgency: "Worldwide Impact"
    }
  ];

  const stats = [
    { icon: Awardvalue: "99.9%"label: "Success Rate" },
    { icon: Globevalue: "150+"label: "Countries" },
    { icon: Usersvalue: "10M+"label: "Users" }
  ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 py-12"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22%239C92AC%22 fill-opacity%3D%220.1%22%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Bell className="w-4 h-4" />
                Revolutionary Tech Announcement
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent mb-4">
                Breaking: Technology Revolution
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Revolutionary breakthroughs in AIquantum computingand automation are reshaping the future of technology. 
                Be among the first to experience the transformation.
              </p>
            </div>

            {/* Animated Announcement */}
            <div
              key={currentAnnouncement}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${announcements[currentAnnouncement].color}`}>
                  <announcements[currentAnnouncement].icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-orange-400 font-semibold mb-1">
                    {announcements[currentAnnouncement].urgency}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {announcements[currentAnnouncement].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {announcements[currentAnnouncement].description}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/revolutionary-tech"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-800/50 transition-all duration-300"
              >
                Get Early Access
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div
            className="flex-shrink-0"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 min-w-[300px]">
              <h3 className="text-xl font-bold text-white text-center mb-6">Revolution Impact</h3>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6">
                {stats.map((statindex) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Urgency Indicator */}
              <div
                className="mt-6 flex items-center justify-center gap-2 text-orange-400 text-sm"
              >
                <Clock className="w-4 h-4" />
                <span>Limited time - Act now!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechAnnouncementBanner;