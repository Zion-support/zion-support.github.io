import React from 'react';
import Link from 'next/link';
CalculatorArrowRightZapDollarSignClockTarget

export default function AutomationSolutionsPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black opacity-15"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-white opacity-15 rotate-45 animate-bounce delay-500"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-white opacity-25 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white opacity-20 rotate-45 animate-bounce delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 mr-2 text-yellow-300" />
            ROI Calculator Available
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Advanced Automation Solutions
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
            Calculate your automation ROI and discover how intelligent automation can transform your business operations with measurable results.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <DollarSign className="w-6 h-6 text-green-300 mx-auto mb-2" />
              <div className="text-lg font-bold">340%</div>
              <div className="text-xs text-purple-100">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-blue-300 mx-auto mb-2" />
              <div className="text-lg font-bold">6mo</div>
              <div className="text-xs text-purple-100">Payback Period</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <Zap className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
              <div className="text-lg font-bold">85%</div>
              <div className="text-xs text-purple-100">Efficiency Gain</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <Target className="w-6 h-6 text-pink-300 mx-auto mb-2" />
              <div className="text-lg font-bold">$2.5M</div>
              <div className="text-xs text-purple-100">Average Savings</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/automation-solutions-showcase" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
            >
              <Calculator className="mr-2" />
              Calculate ROI <ArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/automation-solutions-showcase#solutions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              View Solutions
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Free Consultation
            </Link>
          </div>

          <div className="mt-8 text-sm text-purple-200">
            <p>Transform your business with intelligent automation • Join 500+ successful implementations</p>
          </div>
        </div>
      </div>
    </div>
  );
}