import React from 'react';
import Link from 'next/link';

export default function InteractivePromotionalSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Interactive AI Solutions & Tools
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our interactive AI tools and calculators to discover your transformation potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-bold mb-3">AI ROI Calculator</h3>
            <p className="text-sm opacity-90 mb-4">
              Calculate your potential AI transformation ROI in minutes with our interactive calculator.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Calculate ROI →
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">AI Readiness Assessment</h3>
            <p className="text-sm opacity-90 mb-4">
              Evaluate your organization's AI readiness with our comprehensive assessment tool.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Assessment →
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">AI Strategy Planner</h3>
            <p className="text-sm opacity-90 mb-4">
              Get personalized AI strategy recommendations based on your industry and goals.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Plan Strategy →
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get a free consultation with our AI experts to discover your transformation potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}