"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NewContent2027PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { text: "🚀 Revolutionary AI Technologies", color: "text-purple-400" },
    { text: "⚛️ Quantum Computing Breakthroughs", color: "text-blue-400" },
    { text: "🧠 Neural Interface Innovations", color: "text-pink-400" },
    { text: "🤖 Autonomous Business Systems", color: "text-green-400" },
    { text: "🌟 Synthetic Intelligence", color: "text-yellow-400" }
  ];

  const stats = [
    { value: "25,000%", label: "Maximum ROI" },
    { value: "50+", label: "New Articles" },
    { value: "15", label: "Categories" },
    { value: "99.9%", label: "Success Rate" }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-6000"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🎉 NEW CONTENT 2027 LAUNCH</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                The Ultimate Content Revolution is Here
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Discover groundbreaking AI technologies, quantum computing breakthroughs, and neural interface innovations 
                that will transform your business in 2027 and beyond. Get exclusive access to our most revolutionary content.
              </p>

              {/* Rotating Features */}
              <div className="mb-8">
                <div className="text-lg font-semibold mb-2">Featured This Week:</div>
                <div className="h-8 flex items-center">
                  <span className={`text-xl transition-all duration-500 ${features[currentFeature].color}`}>
                    {features[currentFeature].text}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#new-content-showcase"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore New Content →
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  View All Resources
                </Link>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Breakthrough Technologies</h3>
              <p className="text-gray-300">Latest AI innovations and quantum computing advances</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven ROI Results</h3>
              <p className="text-gray-300">Real case studies with documented success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Implementation</h3>
              <p className="text-gray-300">Step-by-step guides from industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Limited Time</div>
              <div className="text-sm text-gray-400">Early Access Offer</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-600 px-4 py-2 rounded-lg">
                <div className="text-lg font-bold">24</div>
                <div className="text-xs text-purple-200">Hours</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="bg-blue-600 px-4 py-2 rounded-lg">
                <div className="text-lg font-bold">59</div>
                <div className="text-xs text-blue-200">Minutes</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="bg-indigo-600 px-4 py-2 rounded-lg">
                <div className="text-lg font-bold">45</div>
                <div className="text-xs text-indigo-200">Seconds</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">50% Off</div>
              <div className="text-sm text-gray-400">Premium Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewContent2027PromotionBanner;