import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Shield, TrendingUp, CheckCircle, DollarSign, Activity, Target } from 'lucide-react';

export default function AiFintechPage() {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Payments',
      description: 'Secure, intelligent payment processing with fraud detection and risk assessment.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Advanced Security',
      description: 'Bank-grade security with AI-driven threat detection and prevention.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Smart Analytics',
      description: 'Real-time financial analytics and insights for better decision making.'
    },
    {
      icon: <Activity className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Trading',
      description: 'AI-driven trading algorithms for optimized investment strategies.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: 'Risk Management',
      description: 'Advanced risk assessment and portfolio optimization using machine learning.'
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      title: 'Compliance Automation',
      description: 'Automated regulatory compliance and reporting for financial institutions.'
    }
  ];

  const benefits = [
    'Reduce fraud by 95% with AI detection',
    'Improve transaction processing speed by 80%',
    'Automate compliance and regulatory reporting',
    'Enhance customer experience with smart features',
    'Optimize investment strategies with AI insights',
    'Scale financial operations efficiently'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered fintech solutions for payments, trading, risk management, and financial analytics." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Fintech Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize financial services with our AI-powered fintech platform. 
            Secure payments, intelligent trading, risk management, and automated compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Fintech Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need for next-generation financial services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Fintech Platform?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your financial services with AI-powered solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Discover how our AI fintech platform can revolutionize your financial services.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Financial Services Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading financial institutions already using our AI platform for innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}