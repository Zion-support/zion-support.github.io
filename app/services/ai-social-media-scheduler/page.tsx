// import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  Share2,
  MessageSquare,
  Image,
  Video,
  Hash
} from 'lucide-react';

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Revolutionary AI-powered social media scheduling platform that automates content distribution across all platforms with intelligent optimization.',
  keywords: 'AI social media scheduler, automated social media posting, social media automation, AI content scheduling, social media management platform',
  openGraph: {
    title: 'AI Social Media Scheduler | Zion Tech Group',
    description: 'Revolutionary AI-powered social media scheduling platform that automates content distribution across all platforms with intelligent optimization.',
    type: 'website',
    url: 'https://ziontechgroup.com/services/ai-social-media-scheduler',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Social Media Scheduler - Zion Tech Group',
      },
    ],
  },
};

export default function AISocialMediaSchedulerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Social Media Scheduler
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Revolutionary AI-powered social media scheduling platform that automates content distribution 
            across all platforms with intelligent optimization and engagement prediction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your social media strategy with AI-powered automation and intelligent optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                AI analyzes optimal posting times based on audience engagement patterns and platform algorithms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Optimal timing prediction
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cross-platform coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Timezone optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Automation</h3>
              <p className="text-gray-600 mb-4">
                Automatically generate, optimize, and distribute content across all your social media platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  AI content generation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Platform-specific optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Hashtag optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Engagement Analytics</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and insights to optimize your social media performance and ROI.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time performance tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Engagement prediction
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  ROI measurement
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Intelligence</h3>
              <p className="text-gray-600 mb-4">
                AI-powered audience analysis to understand your followers and optimize content strategy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Audience segmentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Behavior analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Content preference insights
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Platform Support</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly manage and schedule content across all major social media platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Facebook, Instagram, Twitter
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  LinkedIn, TikTok, YouTube
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Pinterest, Snapchat
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Continuous learning and optimization to improve your social media performance over time.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  A/B testing automation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance benchmarking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Continuous improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Scheduler?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and results with our AI-powered social media management platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save 95% of Your Time</h3>
                  <p className="text-gray-600">
                    Automate your entire social media workflow, from content creation to posting and engagement tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increase Engagement by 300%</h3>
                  <p className="text-gray-600">
                    AI-optimized posting times and content strategies lead to significantly higher engagement rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Boost ROI by 500%</h3>
                  <p className="text-gray-600">
                    Data-driven insights and optimization lead to measurable improvements in your social media ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Platform Support</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">f</span>
                  </div>
                  <span className="font-medium">Facebook</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                    <Image className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Instagram</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Twitter</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">in</span>
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">YouTube</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <span className="font-medium">TikTok</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your social media management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 5 social media accounts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  100 posts per month
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic AI scheduling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-blue-100">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Up to 20 social media accounts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Unlimited posts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Content generation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited accounts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom AI training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  API access
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using our AI-powered social media scheduler to achieve unprecedented results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}