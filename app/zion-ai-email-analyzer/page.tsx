import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  TrendingUp,
  Users,
  Clock,
  Star
} from 'lucide-react';

const ZionAIEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer - Advanced Email Intelligence & Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your email communications with Zion AI Email Analyzer. Get intelligent insights, sentiment analysis, and automated email optimization for better engagement." />
        <meta name="keywords" content="AI email analyzer, email intelligence, email analytics, sentiment analysis, email optimization, email insights, AI email tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Email Analyzer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email communications with advanced AI-powered analysis, sentiment tracking, and intelligent optimization recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Email Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your email communications with our comprehensive AI-powered analysis suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Sentiment Analysis</h3>
                <p className="text-gray-300">
                  Analyze email tone, sentiment, and emotional impact to improve communication effectiveness.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Track email engagement, response rates, and communication patterns with detailed analytics.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Optimization</h3>
                <p className="text-gray-300">
                  Get AI-powered suggestions to improve email clarity, tone, and engagement rates.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Scanning</h3>
                <p className="text-gray-300">
                  Detect potential security issues, phishing attempts, and compliance violations in emails.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Trend Analysis</h3>
                <p className="text-gray-300">
                  Identify communication trends and patterns to optimize your email strategy over time.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Insights</h3>
                <p className="text-gray-300">
                  Monitor team communication patterns and provide coaching recommendations for better collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Email Analyzer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of email communication with our cutting-edge AI technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Transform Your Email Communication</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Improved Response Rates</h4>
                      <p className="text-gray-300">Increase email engagement by up to 40% with AI-optimized content.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Enhanced Professional Image</h4>
                      <p className="text-gray-300">Maintain consistent, professional communication across all team members.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Time Savings</h4>
                      <p className="text-gray-300">Reduce email composition time by 60% with smart suggestions and templates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Data-Driven Insights</h4>
                      <p className="text-gray-300">Make informed decisions with comprehensive email analytics and reporting.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-gray-300 mb-6">
                    Join thousands of businesses already using Zion AI Email Analyzer to improve their communication.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core AI email analysis features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Up to 1,000 emails/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Basic sentiment analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Email optimization suggestions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Basic analytics dashboard
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500 rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Up to 10,000 emails/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Advanced sentiment analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Team collaboration features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Advanced analytics & reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Unlimited emails
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    Advanced security features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    24/7 dedicated support
                  </li>
                </ul>
                <button className="w-full border border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Email Analyzer to improve their email effectiveness and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEmailAnalyzerPage;