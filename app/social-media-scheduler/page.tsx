import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Share2, 
  Calendar, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  FileText,
  MessageSquare,
  Image
} from 'lucide-react';

const SocialMediaSchedulerPage = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Scheduler - Zion Tech Group</title>
        <meta name="description" content="Powerful social media scheduling tool for managing multiple platforms, scheduling posts, and analyzing engagement. Streamline your social media marketing." />
        <meta name="keywords" content="social media scheduler, social media management, content scheduling, social media marketing, engagement analytics" />
        <meta property="og:title" content="Social Media Scheduler - Zion Tech Group" />
        <meta property="og:description" content="Powerful social media scheduling tool for managing multiple platforms, scheduling posts, and analyzing engagement." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/social-media-scheduler" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Social Media Scheduler
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Streamline your social media marketing with our comprehensive scheduling tool. 
                Manage multiple platforms, schedule posts, and analyze engagement all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Social Media Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your social media presence and grow your audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Multi-Platform Management */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Multi-Platform Management</h3>
                <p className="text-gray-300 mb-6">
                  Manage all your social media accounts from one centralized dashboard.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Facebook, Twitter, Instagram</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>LinkedIn, TikTok, YouTube</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Unified dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Content Scheduling */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Content Scheduling</h3>
                <p className="text-gray-300 mb-6">
                  Schedule posts across multiple platforms with optimal timing recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Bulk scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Optimal timing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Content calendar</span>
                  </li>
                </ul>
              </div>

              {/* Content Creation */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
                <p className="text-gray-300 mb-6">
                  Create engaging content with built-in design tools and templates.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Design templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Image editing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Content library</span>
                  </li>
                </ul>
              </div>

              {/* Analytics & Insights */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
                <p className="text-gray-300 mb-6">
                  Track performance and gain insights into your social media engagement.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Engagement metrics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Audience insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Performance reports</span>
                  </li>
                </ul>
              </div>

              {/* Team Collaboration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
                <p className="text-gray-300 mb-6">
                  Collaborate with your team on content creation and approval workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Content approval</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Team comments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Role management</span>
                  </li>
                </ul>
              </div>

              {/* Automation */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Automation</h3>
                <p className="text-gray-300 mb-6">
                  Automate your social media tasks and save time with smart workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Auto-posting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Content recycling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Social Media Strategy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of efficient social media management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaSchedulerPage;