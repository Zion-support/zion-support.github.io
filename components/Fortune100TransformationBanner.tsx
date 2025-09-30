import React from 'react';
import Link from 'next/link';
import { DollarSign, ArrowRight, TrendingUp, Award } from 'lucide-react';

export default function Fortune100TransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold text-sm">NEW SUCCESS STORY</span>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Gradient */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 lg:p-12 text-white flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  FORTUNE 100
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  Case Study
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                $30M ROI in Just 12 Months
              </h2>
              
              <p className="text-lg mb-6 opacity-95">
                See how a Fortune 100 manufacturer achieved extraordinary results through 
                comprehensive AI transformation across 47 global facilities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">$30M</div>
                  <div className="text-sm opacity-90">Total ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">85%</div>
                  <div className="text-sm opacity-90">Efficiency Gain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-sm opacity-90">System Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">12mo</div>
                  <div className="text-sm opacity-90">To Full ROI</div>
                </div>
              </div>
              
              <Link
                href="/case-studies/fortune-100-ai-transformation-30m-roi-2026"
                className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl group w-full sm:w-auto"
              >
                View Full Case Study
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right Side - Details */}
            <div className="p-8 lg:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Highlights</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Predictive Maintenance AI</h4>
                    <p className="text-sm text-gray-600">
                      Equipment downtime reduced from 18% to 3% with 92% prediction accuracy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Quality Control Automation</h4>
                    <p className="text-sm text-gray-600">
                      Defect detection improved from 75% to 98% with 15x faster inspection
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Supply Chain Optimization</h4>
                    <p className="text-sm text-gray-600">
                      94% demand forecasting accuracy with 45% lead time reduction
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">$35M Annual Savings</h4>
                    <p className="text-sm text-gray-600">
                      Ongoing yearly cost reductions across operations and logistics
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
                <p className="text-sm font-semibold mb-2">CLIENT TESTIMONIAL</p>
                <p className="text-sm italic mb-3">
                  "We achieved $30M ROI in 12 months. The operational excellence we've unlocked 
                  has positioned us as a digital leader in our industry."
                </p>
                <p className="text-xs font-semibold">Michael Reynolds, COO</p>
                <p className="text-xs opacity-90">Fortune 100 Manufacturing Company</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-white text-lg font-semibold mb-4">
            Ready to achieve similar results for your enterprise?
          </p>
          <a
            href="tel:+13024640950"
            className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Call +1 302 464 0950 for Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}