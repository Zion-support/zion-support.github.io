"use client";

import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-4">
              "Zion Tech Group transformed our business with their AI solutions. The results have been outstanding."
            </p>
            <div className="text-white font-semibold">John Smith</div>
            <div className="text-gray-400 text-sm">CEO, TechCorp</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-4">
              "Their cloud infrastructure expertise helped us scale efficiently and securely."
            </p>
            <div className="text-white font-semibold">Sarah Johnson</div>
            <div className="text-gray-400 text-sm">CTO, InnovateLabs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-4">
              "Professional, reliable, and innovative. Highly recommend their services."
            </p>
            <div className="text-white font-semibold">Mike Chen</div>
            <div className="text-gray-400 text-sm">VP Engineering, StartupXYZ</div>
          </div>
        </div>
      </div>
    </section>
  );
}