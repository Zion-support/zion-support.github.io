import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Users, Zap, Brain, TrendingUp } from 'lucide-react';

export default function AIMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Marketing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI marketing solutions by Zion Tech Group. Transform your marketing strategy with intelligent AI-powered tools." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Marketing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your marketing strategy with AI-powered solutions. 
            Target the right audience, optimize campaigns, and maximize ROI with intelligent automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Target className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Audience Targeting</h3>
            <p className="text-gray-300">
              Identify and target the most valuable customer segments using AI-powered insights.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <BarChart3 className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Campaign Optimization</h3>
            <p className="text-gray-300">
              Automatically optimize marketing campaigns for maximum performance and ROI.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Users className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Customer Segmentation</h3>
            <p className="text-gray-300">
              Create detailed customer personas and segments for personalized marketing.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Zap className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Content Personalization</h3>
            <p className="text-gray-300">
              Deliver personalized content and experiences to each customer automatically.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Brain className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300">
              Predict customer behavior and preferences to optimize marketing strategies.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <TrendingUp className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Performance Tracking</h3>
            <p className="text-gray-300">
              Track and analyze marketing performance with AI-powered insights and reporting.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Our AI Marketing Solutions?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Increase marketing ROI by up to 300% with AI optimization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Reduce customer acquisition costs by 40%</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Improve conversion rates with personalized experiences</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>Scale marketing efforts without proportional cost increase</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Implementation Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white">Marketing Audit</h4>
                  <p className="text-gray-300 text-sm">Analyze current marketing strategies and identify optimization opportunities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white">AI Model Development</h4>
                  <p className="text-gray-300 text-sm">Develop custom AI models for your specific marketing needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white">Deployment & Optimization</h4>
                  <p className="text-gray-300 text-sm">Deploy AI marketing tools and continuously optimize performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our AI marketing experts to see how we can boost your marketing performance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}