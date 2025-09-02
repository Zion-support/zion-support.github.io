import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { TrendingUp, Brain, DollarSign, Shield, Zap, CheckCircle, ArrowRight, BarChart3, Target, Users, Clock, Globe, Star, Award, Rocket, Lightbulb, Code, Analytics, Monitor, Smartphone, Laptop, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const seoData = {
  title: "AI Financial Trading Platform | Zion Tech Group",
  description: "Revolutionary AI-powered financial trading platform that uses machine learning to analyze markets, predict trends, and execute trades with precision.",
  keywords: "AI trading, financial AI, algorithmic trading, machine learning trading, AI investment, automated trading",
  ogImage: "/images/services/ai-financial-trading.jpg",
  canonicalUrl: "https://ziontechgroup.com/services/ai-financial-trading"
};

export default function AIFinancialTradingPlatform() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Market Analysis",
      description: "Advanced machine learning algorithms analyze market data, news, and sentiment to identify profitable trading opportunities."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Predict market movements with high accuracy using deep learning models trained on historical data and real-time market conditions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Intelligent risk assessment and portfolio optimization to maximize returns while minimizing exposure to market volatility."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Trading",
      description: "Execute trades automatically based on AI predictions with customizable parameters and real-time market monitoring."
    }
  ];

  const benefits = [
    "24/7 Market Monitoring",
    "Real-time Risk Assessment",
    "Automated Portfolio Rebalancing",
    "Advanced Pattern Recognition",
    "Multi-Asset Support",
    "Regulatory Compliance"
  ];

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Financial
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Trading Platform
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Revolutionize your trading with AI-powered market analysis, predictive analytics, and automated execution. 
              Maximize returns while minimizing risk with intelligent trading algorithms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Trading Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with financial expertise to deliver superior trading performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Trading Platform?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of trading with our comprehensive AI-powered platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start AI-Powered Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders who are already using AI to maximize their returns and minimize risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}