import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterpriseTransformation2027Banner() {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-emerald-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-teal-400 rounded-full opacity-20 animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-18 h-18 bg-green-300 rounded-full opacity-20 animate-bounce delay-3000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>💰</span>
              SUCCESS STORY 2027
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              $2.3B ROI Enterprise 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Transformation</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Discover how a Fortune 500 manufacturing giant achieved unprecedented success with Zion Tech Group's 
              comprehensive AI transformation solutions, delivering extraordinary results that exceeded all expectations.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">$2.3B</div>
                <div className="text-xs text-green-100">Total ROI</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">98%</div>
                <div className="text-xs text-green-100">Efficiency</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">87%</div>
                <div className="text-xs text-green-100">Cost Savings</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/case-studies/enterprise-ai-transformation-2027-success"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Full Case Study
              </Link>
              <Link to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-green-100">$2.3B total ROI achieved in 12 months</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-green-100">98% operational efficiency improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-green-100">87% reduction in operational costs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-green-100">15x increase in productivity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-green-100">Zero operational disruptions during implementation</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg border border-yellow-400/30">
              <p className="text-yellow-100 text-center font-semibold">
                "Zion Tech Group's AI transformation has revolutionized our entire operation. The $2.3B ROI we've achieved exceeds our wildest expectations."
              </p>
              <p className="text-yellow-200 text-center text-sm mt-2">— John Davidson, CTO, Fortune 500 Manufacturing</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-200 text-sm">
            <span className="font-semibold">Industry:</span> Manufacturing • <span className="font-semibold">Company Size:</span> Fortune 500 • 
            <span className="font-semibold">Implementation:</span> 12 Months • <span className="font-semibold">ROI:</span> $2.3B
          </p>
        </div>
      </div>
    </section>
  );
}