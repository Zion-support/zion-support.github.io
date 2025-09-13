'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Award, 
  Users,
  Clock,
  Star
} from 'lucide-react';

const UltimateContentPromotionBanner2025 = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unlock the Ultimate
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Content Experience
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our premium content library, advanced AI tools, and personalized learning paths. 
            <span className="font-semibold"> Save 50% for the first 3 months!</span>
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Access</h3>
              <p className="text-white/80">Get immediate access to 500+ premium resources</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Content</h3>
              <p className="text-white/80">Curated by industry experts and thought leaders</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm text-white mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-white/80">Join 25,000+ successful learners worldwide</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-xl text-white/70 ml-2">/month</span>
              <span className="ml-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                -50% OFF
              </span>
            </div>
            <p className="text-white/80 mb-6">Regular price: $58/month</p>
            <div className="flex items-center justify-center text-white/90">
              <Clock className="w-4 h-4 mr-2" />
              <span>Offer expires in 7 days</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/subscribe"
              className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Zap className="w-6 h-6 mr-3" />
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>25,000+ users</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Industry leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotionBanner2025;