import React from 'react';
import { Zap, BarChart3, TrendingUp, Target, Shield } from 'lucide-react';

export default function ZionAiCustomerChurnPredictorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Ai Customer Churn Predictor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced Zion Ai Customer Churn Predictor solutions powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Technology</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our zion ai customer churn predictor solutions leverage cutting-edge technology to deliver exceptional results. 
              We combine industry expertise with innovative approaches to solve complex business challenges 
              and drive growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Zap className="w-6 h-6 text-blue-400 mr-3" />
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-6 h-6 text-blue-400 mr-3" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center text-gray-300">
                <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <Zap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-green-400 mr-3" />
                  <span>High Performance</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Target className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-green-400 mr-3" />
                  <span>Secure & Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}