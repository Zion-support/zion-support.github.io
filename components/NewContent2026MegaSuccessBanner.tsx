// import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent2026MegaSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW: Mega Success Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            $50M AI Transformation Success Story
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            See how a Fortune 500 company achieved <span className="font-bold text-yellow-300">400% ROI</span> and 
            <span className="font-bold text-yellow-300"> $50M annual savings</span> with our AI implementation framework
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Preview */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Transformation Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">$50M</div>
                  <div className="text-sm opacity-90">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">400%</div>
                  <div className="text-sm opacity-90">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">90%</div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">8</div>
                  <div className="text-sm opacity-90">Months</div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Fortune 500 manufacturing company achieved these results through comprehensive AI transformation 
                across supply chain, predictive maintenance, quality control, and process automation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold mb-3">Key AI Solutions Implemented</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Supply Chain AI Optimization - $18M savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Predictive Maintenance AI - $12M savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Quality Control Automation - $8M savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Process Automation - $12M savings
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join 200+ companies that have achieved 300%+ ROI with our proven AI implementation framework
              </p>
              
              <div className="space-y-4">
                <Link to="/case-studies/ai-enterprise-transformation-mega-success-2026"
                  className="block w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Read Full Success Story
                </Link>
                
                <Link to="/blog/ai-enterprise-implementation-2026"
                  className="block w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  View Implementation Guide
                </Link>
                
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-3">What You'll Learn</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Complete AI implementation roadmap</li>
                <li>• Proven ROI strategies and metrics</li>
                <li>• Real-world challenges and solutions</li>
                <li>• 6-month implementation timeline</li>
                <li>• Governance and risk management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75 mb-4">Trusted by Fortune 500 companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">🏢</div>
            <div className="text-2xl font-bold">🏭</div>
            <div className="text-2xl font-bold">🏦</div>
            <div className="text-2xl font-bold">🏥</div>
            <div className="text-2xl font-bold">🛒</div>
          </div>
        </div>
      </div>
    </section>
  );
}