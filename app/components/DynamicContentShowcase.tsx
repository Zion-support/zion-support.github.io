'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that provide deep insights into your business data.",
      icon: Brain,
      stats: "95% accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 1,
      title: "Lightning Fast Processing",
      description: "Process massive datasets in seconds with our optimized AI infrastructure.",
      icon: Zap,
      stats: "10x faster",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      icon: Shield,
      stats: "99.9% secure",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Scalable Solutions",
      description: "Grow from startup to enterprise with our flexible, scalable AI platform.",
      icon: TrendingUp,
      stats: "Unlimited scale",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const achievements = [
    { icon: Users, label: "500+ Clients", value: "500+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: TrendingUp, label: "ROI Increase", value: "300%" },
    { icon: Shield, label: "Uptime", value: "99.9%" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We combine cutting-edge AI technology with proven business expertise to deliver results that matter.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`w-16 h-16 bg-gradient-to-r ${features[activeTab].color} rounded-xl flex items-center justify-center mb-6`}>
                  {React.createElement(features[activeTab].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {features[activeTab].description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    {features[activeTab].stats}
                  </span>
                  <span className="text-gray-400">performance improvement</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Performance</span>
                      <span className="text-cyan-400 font-semibold">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Reliability</span>
                      <span className="text-cyan-400 font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full w-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Security</span>
                      <span className="text-cyan-400 font-semibold">Enterprise</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {achievement.value}
              </div>
              <div className="text-gray-400 text-sm">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;