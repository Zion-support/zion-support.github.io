import React from 'react';
import Link from 'next/link';

const EnterpriseAI2026TransformationBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-blue-400 text-2xl">🏢</span>
            <span className="font-semibold text-lg">Enterprise AI Transformation 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Enterprise AI
            </span>
            <br />
            <span className="text-white">Transformation Revolution</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your enterprise with cutting-edge AI solutions that deliver measurable results. 
            Join the AI revolution and achieve unprecedented efficiency, growth, and competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/services/enterprise-ai-transformation"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Start AI Transformation
            </Link>
            <Link
              href="/case-studies/enterprise-ai-success"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
        
        {/* Transformation Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-6">📈</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">300% ROI Increase</h3>
            <p className="text-gray-200 mb-6">
              Our enterprise AI solutions deliver an average 300% return on investment within the first year of implementation.
            </p>
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <span>Proven Results</span>
              <span className="text-xl">→</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">90% Efficiency Gain</h3>
            <p className="text-gray-200 mb-6">
              Streamline operations and automate processes with AI-powered solutions that boost efficiency by up to 90%.
            </p>
            <div className="flex items-center gap-2 text-purple-400 font-semibold">
              <span>Maximum Efficiency</span>
              <span className="text-xl">→</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-6">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">70% Cost Reduction</h3>
            <p className="text-gray-200 mb-6">
              Reduce operational costs by up to 70% through intelligent automation and optimized resource allocation.
            </p>
            <div className="flex items-center gap-2 text-green-400 font-semibold">
              <span>Significant Savings</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </div>
        
        {/* Industry Solutions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Industry-Leading AI Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🏭</div>
              <h4 className="font-bold text-blue-400 mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">Predictive maintenance & quality control</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="font-bold text-green-400 mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">Diagnostic AI & patient care optimization</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-bold text-purple-400 mb-2">Finance</h4>
              <p className="text-gray-300 text-sm">Risk assessment & fraud detection</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛒</div>
              <h4 className="font-bold text-orange-400 mb-2">Retail</h4>
              <p className="text-gray-300 text-sm">Demand forecasting & personalization</p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-lg">
            Ready to revolutionize your enterprise with AI? Join 500+ companies already transforming their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseAI2026TransformationBanner;