import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  Clock,
  Users,
  MessageSquare
} from 'lucide-react';

const ZionAISocialMediaManagerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Automated Social Media Management</title>
        <meta name="description" content="Automate your social media management with Zion AI Social Media Manager. AI-powered content creation, scheduling, analytics, and engagement optimization." />
        <meta name="keywords" content="social media management, AI social media, content automation, social media analytics, engagement optimization, social media scheduling" />
        <meta property="og:title" content="Zion AI Social Media Manager - Automated Social Media Management" />
        <meta property="og:description" content="Automate your social media management with Zion AI Social Media Manager. AI-powered content creation, scheduling, analytics, and engagement optimization." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Social Media Manager - Automated Social Media Management" />
        <meta name="twitter:description" content="Automate your social media management with Zion AI Social Media Manager. AI-powered content creation, scheduling, analytics, and engagement optimization." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Social Media Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Social
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Media Manager
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your social media presence with AI-powered content creation, 
                automated scheduling, and intelligent engagement optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Social Media Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media platforms with AI-powered automation and intelligent insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Share2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Content Creation</h3>
                <p className="text-gray-300">
                  Generate engaging posts, captions, and hashtags automatically with AI-powered content creation.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Scheduling</h3>
                <p className="text-gray-300">
                  Schedule posts at optimal times for maximum engagement across all platforms.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Analytics</h3>
                <p className="text-gray-300">
                  Track performance metrics and get insights to optimize your social media strategy.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Audience Insights</h3>
                <p className="text-gray-300">
                  Understand your audience better with detailed demographic and behavioral analytics.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Engagement Automation</h3>
                <p className="text-gray-300">
                  Automatically respond to comments and messages with AI-powered engagement tools.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Growth Optimization</h3>
                <p className="text-gray-300">
                  Get recommendations to increase followers, engagement, and brand awareness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Social Media Manager?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Streamline your social media management and grow your online presence with AI-powered automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Save 10+ Hours Weekly</h3>
                      <p className="text-gray-300">
                        Automate content creation, scheduling, and engagement to focus on strategy and growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Increase Engagement by 300%</h3>
                      <p className="text-gray-300">
                        AI-optimized content and timing lead to significantly higher engagement rates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform Management</h3>
                      <p className="text-gray-300">
                        Manage all your social media accounts from one unified dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Strategy</h3>
                      <p className="text-gray-300">
                        Make informed decisions with comprehensive analytics and performance insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h3>
                  <p className="text-gray-300 mb-6">
                    Start automating your social media management and grow your online presence today.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Managing Your Social Media with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to grow their social media presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISocialMediaManagerPage;