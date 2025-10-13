import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Mail, Brain, BarChart3, Shield, Zap, CheckCircle, Star } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIEmailAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer - Advanced Email Intelligence & Analytics</title>
        <meta name="description" content="Transform your email communication with Zion AI Email Analyzer. Get intelligent insights, sentiment analysis, and automated email optimization powered by advanced AI technology." />
        <meta name="keywords" content="AI email analyzer, email intelligence, email analytics, sentiment analysis, email optimization, AI-powered email insights" />
      </Helmet>
      <EnhancedSEO 
        title="Zion AI Email Analyzer - Advanced Email Intelligence & Analytics"
        description="Transform your email communication with Zion AI Email Analyzer. Get intelligent insights, sentiment analysis, and automated email optimization powered by advanced AI technology."
        keywords="AI email analyzer, email intelligence, email analytics, sentiment analysis, email optimization, AI-powered email insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <Mail className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Email Analyzer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email communication with advanced AI-powered analysis. Get intelligent insights, 
                sentiment analysis, and automated optimization for better email performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Watch Demo
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
                Unlock the full potential of your email communication with our comprehensive AI-powered analysis tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Sentiment Analysis</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Analyze email tone and sentiment to understand communication effectiveness and emotional impact.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Real-time sentiment scoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Emotion detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Tone recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Performance Analytics</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Track email performance metrics and get actionable insights to improve your communication strategy.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Open rate analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Response time tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Engagement scoring
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Security Analysis</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Detect potential security threats and phishing attempts in your email communications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Phishing detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Malware scanning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Spam filtering
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Auto-Optimization</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Automatically optimize your emails for better performance and engagement rates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Subject line optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Content suggestions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Timing recommendations
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Email Classification</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Automatically categorize and prioritize emails based on content and importance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart categorization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Priority scoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Auto-tagging
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Personalization</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Create personalized email experiences based on recipient preferences and behavior.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Behavioral insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Preference learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion AI Email Analyzer to improve their email performance and communication effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEmailAnalyzerPage;