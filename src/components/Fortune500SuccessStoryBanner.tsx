import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  TrophyIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Fortune500SuccessStoryBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
      {/* Success Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-16 left-16 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-24 left-32 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <TrophyIcon className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🏆 FORTUNE 500 SUCCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fortune 500 AI Transformation
            <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              $500M ROI Success Story
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how a global manufacturing leader achieved <strong>$500M ROI</strong> in just 18 months through comprehensive AI transformation. 
            Complete case study with implementation details, challenges overcome, and measurable results.
          </p>
        </div>

        {/* Key Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">$500M</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Total ROI achieved in 18 months with 280% return on investment
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <ArrowTrendingUpIcon className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">95.2%</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Equipment uptime achieved (up from 67% before AI implementation)
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">45%</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Improvement in product quality with 99.2% first-pass quality rate
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <StarIcon className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">92%</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Customer satisfaction achieved (up from 68% before transformation)
            </p>
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-8 text-center">Transformation Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Predictive Maintenance</h4>
              <p className="text-gray-300 text-sm">
                75% reduction in unplanned downtime and $120M annual savings through AI-powered maintenance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Supply Chain AI</h4>
              <p className="text-gray-300 text-sm">
                40% improvement in demand forecasting and $85M reduction in inventory carrying costs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Manufacturing AI</h4>
              <p className="text-gray-300 text-sm">
                35% increase in production efficiency and $95M savings from reduced waste and rework.
              </p>
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-lg font-bold mb-4 text-green-400">Cost Savings</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Maintenance</span>
                <span className="font-bold">$120M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Inventory</span>
                <span className="font-bold">$85M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Waste Reduction</span>
                <span className="font-bold">$95M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Customer Service</span>
                <span className="font-bold">$70M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Autonomous Ops</span>
                <span className="font-bold">$130M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-lg font-bold mb-4 text-blue-400">Revenue Impact</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Customer Experience</span>
                <span className="font-bold">$70M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Market Expansion</span>
                <span className="font-bold">$20M</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Revenue</span>
                <span className="text-green-400">$90M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-lg font-bold mb-4 text-purple-400">Implementation</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Technology</span>
                <span className="font-bold">$120M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Consulting</span>
                <span className="font-bold">$40M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Training</span>
                <span className="font-bold">$20M</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Investment</span>
                <span className="text-red-400">$180M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/case-studies/fortune-500-ai-transformation-success-story"
              className="group bg-gradient-to-r from-yellow-400 to-green-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Read Full Case Study
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="/services/enterprise-ai-transformation"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Start Your Transformation
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
          
          <p className="text-gray-300 text-sm">
            Join the ranks of Fortune 500 leaders achieving massive ROI through AI transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fortune500SuccessStoryBanner;