'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, TrendingUp, Shield, BarChart, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AIFinancialAdvisorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Financial Advisor - Zion Tech Group</title>
        <meta name="description" content="Personalized financial planning and investment recommendations powered by AI. Get 25% better returns with our intelligent financial advisory platform." />
        <meta name="keywords" content="AI financial advisor, investment recommendations, financial planning, portfolio optimization, risk assessment" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Financial Advisor
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Personalized financial planning and investment recommendations powered by advanced AI algorithms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Interest in AI Financial Advisor"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started - $199/month
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Portfolio Optimization</h3>
                <p className="text-gray-300">AI-powered portfolio analysis and rebalancing recommendations for maximum returns</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Risk Assessment</h3>
                <p className="text-gray-300">Advanced risk analysis and personalized risk management strategies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BarChart className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Market Analysis</h3>
                <p className="text-gray-300">Real-time market analysis and investment opportunity identification</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Rebalancing</h3>
                <p className="text-gray-300">Intelligent portfolio rebalancing based on market conditions and goals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Target className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Goal Tracking</h3>
                <p className="text-gray-300">Track and adjust financial goals with AI-powered recommendations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous portfolio monitoring and instant alerts for opportunities</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Financial Advisor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">25% Better Returns</h3>
                <p className="text-gray-300">Our AI algorithms consistently outperform traditional investment strategies</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4">60% Risk Reduction</h3>
                <p className="text-gray-300">Advanced risk management reduces portfolio volatility and protects your investments</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous monitoring ensures you never miss important market opportunities</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Personalized Strategy</h3>
                <p className="text-gray-300">AI adapts to your unique financial situation and investment goals</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Optimize Your Investments?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to start your AI-powered financial journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Financial Advisor Inquiry"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIFinancialAdvisorPage;