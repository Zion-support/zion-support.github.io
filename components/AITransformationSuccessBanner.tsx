import React from 'react';
import Link from 'next/link';

const AITransformationSuccessBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-green-600">🎯</span>
            <span className="text-sm font-semibold">TRANSFORMATION SUCCESS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Proven AI Transformation Results
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              {' '}Across Industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Fortune 500 companies and enterprises worldwide are achieving unprecedented 
            success with our AI transformation solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Manufacturing Success */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manufacturing</h3>
                <p className="text-sm text-gray-500">Fortune 500 Global</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Annual Savings</span>
                <span className="text-2xl font-bold text-green-600">$50M+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Efficiency Gains</span>
                <span className="text-2xl font-bold text-teal-600">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Countries</span>
                <span className="text-2xl font-bold text-blue-600">47</span>
              </div>
            </div>
            
            <Link
              href="/case-studies/global-manufacturing-ai-transformation"
              className="block w-full bg-gradient-to-r from-green-600 to-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
          
          {/* FinTech Success */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">FinTech</h3>
                <p className="text-sm text-gray-500">Leading Platform</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Risk Reduction</span>
                <span className="text-2xl font-bold text-purple-600">70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cost Savings</span>
                <span className="text-2xl font-bold text-indigo-600">$2.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Compliance</span>
                <span className="text-2xl font-bold text-green-600">100%</span>
              </div>
            </div>
            
            <Link
              href="/case-studies/fintech-ai-risk-compliance-2025"
              className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
          
          {/* Healthcare Success */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                <p className="text-sm text-gray-500">HealthTech Solutions</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Response Time</span>
                <span className="text-2xl font-bold text-blue-600">80%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Satisfaction</span>
                <span className="text-2xl font-bold text-cyan-600">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Support</span>
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
            </div>
            
            <Link
              href="/case-studies/healthtech-ai-transformation"
              className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              View Case Study →
            </Link>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry-Leading Transformation Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600 font-semibold">Average ROI</div>
              <div className="text-sm text-gray-500">Within 12 months</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-gray-600 font-semibold">Efficiency Gains</div>
              <div className="text-sm text-gray-500">Process automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600 font-semibold">Annual Savings</div>
              <div className="text-sm text-gray-500">Cost reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Projects</div>
              <div className="text-sm text-gray-500">Successfully delivered</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/services/ai-enterprise-transformation"
              className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your AI Transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationSuccessBanner;