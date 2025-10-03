// import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, DollarSign, Factory, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const October2025AutomotiveEdgeAISuccessBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 shadow-2xl animate-bounce">
            <Trophy className="w-5 h-5 mr-2" />
            🏆 NEW SUCCESS STORY: $18.4B Value Creation - Industry Record! 🏆
          </span>
        </div>

        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold mb-4">
            <span className="block text-white">Fortune 50 Automotive Leader</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mt-2">
              $18.4B Edge AI Transformation
            </span>
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto mt-6">
            The world's largest industrial Edge AI deployment: 127 factories, 47,000+ AI devices, 99.97% uptime, and revolutionary business results.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-lg mb-4 mx-auto">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-center text-white mb-2">$18.4B</div>
            <div className="text-sm text-center text-gray-300 font-semibold">Annual Value Creation</div>
            <div className="text-xs text-center text-gray-400 mt-1">Net of all costs</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4 mx-auto">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-center text-white mb-2">3,733%</div>
            <div className="text-sm text-center text-gray-300 font-semibold">First Year ROI</div>
            <div className="text-xs text-center text-gray-400 mt-1">Industry-leading returns</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-lg mb-4 mx-auto">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-center text-white mb-2">127</div>
            <div className="text-sm text-center text-gray-300 font-semibold">Global Factories</div>
            <div className="text-xs text-center text-gray-400 mt-1">Across 34 countries</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mb-4 mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-center text-white mb-2">9.5</div>
            <div className="text-sm text-center text-gray-300 font-semibold">Day Payback</div>
            <div className="text-xs text-center text-gray-400 mt-1">Record-breaking</div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center">
                <Sparkles className="w-6 h-6 mr-2" />
                Production Excellence
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Overall Equipment Effectiveness (OEE)</span>
                  <span className="font-bold text-white">59% → 94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">First Pass Yield</span>
                  <span className="font-bold text-white">97.3% → 99.96%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Defects Per Million</span>
                  <span className="font-bold text-white">27,000 → 400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Production Throughput</span>
                  <span className="font-bold text-white">+42% increase</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Quality Transformation
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Defect Detection Accuracy</span>
                  <span className="font-bold text-white">99.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">False Positive Rate</span>
                  <span className="font-bold text-white">0.02%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Inspection Speed vs Human</span>
                  <span className="font-bold text-white">847% faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Complaints</span>
                  <span className="font-bold text-white">-94% reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center">
                <Factory className="w-6 h-6 mr-2" />
                Operational Impact
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Unplanned Downtime</span>
                  <span className="font-bold text-white">12.3% → 0.03%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Predictive Maintenance Accuracy</span>
                  <span className="font-bold text-white">97.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Energy Consumption</span>
                  <span className="font-bold text-white">-34% reduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Carbon Emissions</span>
                  <span className="font-bold text-white">-42% (3.2M tons CO₂)</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-orange-400 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Safety & Sustainability
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Workplace Incidents</span>
                  <span className="font-bold text-white">2,847 → 87/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lost Time Injuries</span>
                  <span className="font-bold text-white">-98% reduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Near Miss Detection</span>
                  <span className="font-bold text-white">127,000+ prevented</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Manufacturing Waste</span>
                  <span className="font-bold text-white">-89% reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Scale */}
        <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/30 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            🚀 Largest Industrial Edge AI Deployment in History 🚀
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">47,000+</div>
              <div className="text-sm text-gray-300">AI-Powered Devices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">28,400</div>
              <div className="text-sm text-gray-300">Computer Vision Systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">184,000</div>
              <div className="text-sm text-gray-300">Industrial IoT Sensors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">99.97%</div>
              <div className="text-sm text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Manufacturing Operations?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Learn how Zion Tech Group can deliver similar world-class results for your organization with Edge AI + 5G technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/case-studies/ai-2025-october-automotive-edge-ai-transformation-18-billion-success"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-xl hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105"
            >
              Read Full Case Study
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>

            <Link
              to="/services/edge-ai-5g-integration-platform-2025"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border-3 border-white/40 hover:border-white/60"
            >
              Explore Our Solutions
              <Sparkles className="ml-3 w-6 h-6" />
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-400">
              💎 <span className="font-bold text-white">127 Patents Filed</span> | 
              <span className="font-bold text-white"> 5 Industry Awards</span> | 
              <span className="font-bold text-white"> Third-Party Verified by Deloitte</span> 💎
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025AutomotiveEdgeAISuccessBanner;
