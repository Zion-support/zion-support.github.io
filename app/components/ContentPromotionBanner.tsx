'use client';

import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join 500+ companies already using our AI solutions to increase efficiency, reduce costs, and drive growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">500+ Companies</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">99.9% Uptime</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-6 h-6 text-white" />
                <span className="text-white font-semibold">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPromotionBanner;