'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Star, TrendingUp, Users, Award } from 'lucide-react';

const NewContentPromotionBanner2025 = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant access to cutting-edge solutions"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Curated by industry experts and thought leaders"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of innovators and developers"
    },
    {
      icon: TrendingUp,
      title: "Always Updated",
      description: "Fresh content added daily with latest trends"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            NEW CONTENT ALERT
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              New Content
            </span>
            & Solutions
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore our latest breakthrough technologies, innovative solutions, and cutting-edge resources 
            that are transforming industries and shaping the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore New Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View All Solutions
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 font-medium">New Content Items</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-indigo-900">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Limited Time Offer</h3>
            </div>
            <p className="text-lg mb-6">
              Get exclusive access to premium content and early releases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                Claim Your Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold text-lg rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;