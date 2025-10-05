import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  BarChart3, 
  CheckCircle, 
  Truck, 
  Sparkles, 
  Clock, 
  Globe, 
  Shield,
  ArrowRight
} from 'lucide-react';

const October2025SupplyChainRevolutionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 border-y border-emerald-500/30 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-4 animate-pulse">
            <TruckIcon className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm">🚚 BREAKING: OCTOBER 1, 2025 — SUPPLY CHAIN REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AI-Powered Supply Chain Optimization
            <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              $2.3B in Savings | 67% Efficiency Gain | Zero Disruptions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI system optimizes supply chains across 50+ countries. 
            Real-time demand forecasting, automated logistics, and predictive maintenance.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Predictive Analytics</div>
                <div className="text-sm text-gray-300">
                  AI-powered demand forecasting with 94% accuracy — optimize inventory and reduce waste
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center">
                <TruckIcon className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Smart Logistics</div>
                <div className="text-sm text-gray-300">
                  Automated route optimization and real-time tracking — 45% faster delivery times
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Risk Management</div>
                <div className="text-sm text-gray-300">
                  Proactive risk detection and mitigation — prevent disruptions before they occur
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TruckIcon className="w-8 h-8 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Global Manufacturing Success</h3>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              "Zion's supply chain AI reduced our operational costs by 67% and eliminated all supply disruptions. 
              We saved $340M in the first year alone."
            </p>
            <div className="text-sm text-gray-400">
              — Michael Rodriguez, COO, Global Manufacturing Corp
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Transform Your Supply Chain Today
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join 50+ global companies already optimizing their supply chains with our AI solutions. 
                Get a personalized assessment and see your potential savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
                >
                  <TruckIcon className="w-5 h-5" />
                  <span>Get Supply Chain Assessment</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View All Services</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Footer */}
        <div className="mt-8 pt-6 border-t border-emerald-500/30">
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