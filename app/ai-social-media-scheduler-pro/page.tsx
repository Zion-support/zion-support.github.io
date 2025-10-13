import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ShareIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  HashtagIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function AISocialMediaSchedulerProPage() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Scheduler Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered social media scheduling with optimal timing, content suggestions, and analytics. Increase engagement by 150% with our smart scheduler." />
        <meta name="keywords" content="social media scheduler, AI content optimization, social media automation, engagement analytics, content calendar" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Social Media Scheduler Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-Powered Social Media Management with Optimal Timing & Content Suggestions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your social media presence with our intelligent scheduler that learns from your audience behavior, suggests optimal posting times, and creates engaging content automatically. Increase engagement by up to 150%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI algorithms that understand your audience and optimize your social media strategy for maximum engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimal Timing AI</h3>
              <p className="text-gray-300 mb-6">
                Our AI analyzes your audience behavior to determine the best times to post for maximum engagement across all platforms.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShareIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Platform Support</h3>
              <p className="text-gray-300 mb-6">
                Schedule and manage content across Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube from one dashboard.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HashtagIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Content Suggestions</h3>
              <p className="text-gray-300 mb-6">
                Get AI-generated content ideas, hashtags, and captions tailored to your brand voice and audience preferences.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Track performance with detailed analytics, engagement rates, and AI-powered insights to optimize your strategy.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Calendar</h3>
              <p className="text-gray-300 mb-6">
                Plan and visualize your content strategy with our intuitive calendar that adapts to your posting schedule.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Audience Insights</h3>
              <p className="text-gray-300 mb-6">
                Understand your audience better with AI-powered demographic analysis and engagement pattern recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free plan and scale as your social media presence grows
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 social accounts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  10 posts per month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic scheduling
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Community support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border-2 border-purple-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Up to 10 social accounts
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Unlimited posts
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  AI content suggestions
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Optimal timing AI
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-all duration-300"
              >
                Start Pro Trial
              </Link>
            </div>

            {/* Business Plan */}
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited social accounts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Team collaboration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their social media presence with our AI-powered scheduler
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">150%</div>
              <div className="text-gray-300">Average Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
              <div className="text-gray-300">Time Saved on Scheduling</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">10,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and experience the power of AI-driven social media management
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}