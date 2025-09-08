import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
export function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Ahead of the Technology Curve
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Get exclusive insights into the latest AI trends, technology breakthroughs, and industry updates. 
            Join thousands of professionals who trust Zion Tech Group for cutting-edge technology intelligence.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your professional email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 text-lg"
                required
              />
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-zion-slate-light mt-4">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Weekly insights delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Exclusive content access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Early access to new features</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
