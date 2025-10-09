import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Users, BarChart, Zap, Shield, Send, Target, Analytics } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    'AI-powered email content generation',
    'Automated A/B testing and optimization',
    'Intelligent send time optimization',
    'Advanced segmentation and personalization',
    'Predictive analytics for campaign performance',
    'Automated follow-up sequences',
    'Spam score optimization',
    'Real-time performance tracking'
  ];

  const benefits = [
    'Increase email open rates by 65%',
    'Boost click-through rates by 120%',
    'Reduce unsubscribe rates by 40%',
    'Save 20+ hours per week on email campaigns',
    'Improve ROI by 300%',
    'Automate complex email workflows'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing with automated optimization, personalization, and analytics. Starting at $179/month." />
        <meta name="keywords" content="ai email marketing, email automation, email optimization, email personalization, email analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your email marketing with AI-powered automation, personalization, and optimization.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">65%</div>
              <div className="text-gray-300">Higher Open Rates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$179</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">ROI Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">20+</div>
              <div className="text-gray-300">Hours Saved/Week</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Create Any Type of Email Campaign
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Send className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletters</h3>
              <p className="text-gray-600">Automated newsletter creation and distribution</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Promotional</h3>
              <p className="text-gray-600">AI-optimized promotional campaigns</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Series</h3>
              <p className="text-gray-600">Automated onboarding email sequences</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Analytics className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Advanced performance tracking and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$179<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Up to 10,000 subscribers</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Basic AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Email support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />5 campaigns/month</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">$399<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Up to 50,000 subscribers</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Advanced AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Unlimited campaigns</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$799<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Unlimited subscribers</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />All AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />24/7 phone support</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Custom integrations</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating high-converting email campaigns with AI-powered automation and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingPage;