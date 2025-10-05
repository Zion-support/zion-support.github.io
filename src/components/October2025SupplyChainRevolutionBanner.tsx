import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  CheckCircleIcon, 
  TruckIcon, 
  SparklesIcon, 
  ClockIcon, 
  GlobeAltIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const October2025SupplyChainRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-16 px-6 rounded-3xl shadow-2xl my-12 border-4 border-emerald-400/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Breaking News Badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border-2 border-red-400 rounded-full px-6 py-2 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-200 font-bold text-sm tracking-wider uppercase">BREAKING NEWS</span>
          </div>
          <div className="text-emerald-200 text-sm font-medium">October 1, 2025</div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Supply Chain Revolution
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              AI-Powered Transformation
            </span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI system that optimizes supply chains in real-time, reducing costs by 40% 
            and improving efficiency by 60% across all enterprise operations.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
            <div className="text-emerald-200 text-sm">Cost Reduction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-teal-400/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">60%</div>
            <div className="text-emerald-200 text-sm">Efficiency Gain</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-emerald-200 text-sm">Accuracy Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-emerald-200 text-sm">Monitoring</div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TruckIcon className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Smart Logistics</h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              AI-powered route optimization, demand forecasting, and inventory management 
              that adapts to real-time conditions and market changes.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-400/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <ChartBarIcon className="w-8 h-8 text-teal-400" />
              <h3 className="text-xl font-bold text-white">Predictive Analytics</h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Advanced machine learning models predict demand patterns, supply disruptions, 
              and optimize procurement strategies with 99.9% accuracy.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <GlobeAltIcon className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Global Integration</h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Seamless integration across global supply networks with real-time visibility 
              and coordination across all partners and suppliers.
            </p>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Fortune 500 Success Story</h3>
          </div>
          <div className="text-center mb-6">
            <p className="text-lg text-emerald-100 max-w-4xl mx-auto">
              "Zion Tech Group's AI supply chain system transformed our operations completely. 
              We reduced costs by 45% and improved delivery times by 65% while maintaining 
              perfect quality standards across all our facilities."
            </p>
            <div className="mt-4 text-sm text-emerald-300">
              — Chief Operations Officer, Fortune 500 Manufacturing Company
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-emerald-400 mb-1">45%</div>
              <div className="text-sm text-emerald-200">Cost Reduction</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-teal-400 mb-1">65%</div>
              <div className="text-sm text-emerald-200">Faster Delivery</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">100%</div>
              <div className="text-sm text-emerald-200">Quality Maintained</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            <div className="bg-slate-900 rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Transform Your Supply Chain Today
              </h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Join leading enterprises already optimizing their supply chains with AI. 
                Get a free assessment and discover how we can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
                >
                  <SparklesIcon className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View All Services</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Footer */}
        <div className="mt-8 pt-6 border-t border-emerald-400/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span><strong>15+</strong> Fortune 500 Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span><strong>$20B+</strong> Total Value Created</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span><strong>99.97%</strong> Platform Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span><strong>0</strong> Security Breaches</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span><strong>SOC 2 Type II</strong> Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025SupplyChainRevolutionBanner;