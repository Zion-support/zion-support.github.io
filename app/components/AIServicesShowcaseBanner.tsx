import React from 'react';
import Link from 'next/link';

export default function AIServicesShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 Service Portfolio
              </span>
              <span className="text-emerald-200 text-sm">Comprehensive Solutions</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              AI Services Showcase: Complete Solution Portfolio
            </h2>
            <p className="text-xl text-emerald-100 mb-6 leading-relaxed">
              Explore our comprehensive AI services portfolio. From strategy and consulting to implementation and optimization, we deliver end-to-end AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Browse All Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-center"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">Service Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span>AI Strategy & Consulting</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                <span>Implementation & Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Analytics & Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Governance & Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}