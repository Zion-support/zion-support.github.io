'use client'
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react'
const ContentPromotionBanner: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment with local support and compliance'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Customers',
      description: 'Businesses trust our solutions'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service guarantee'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by clients'
    }
  ]
  return (
<div className=&quot;bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4&quot;></div>
      <div className=&quot;max-w-7xl mx-auto&quot;></div>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;></div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            Transform Your Business with <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>AI Solutions</span>
          </h1>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto mb-8&quot;>
            Join thousands of businesses that have revolutionized their operations with our cutting-edge AI and IT solutions.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105&quot;>
              <Zap className=&quot;w-5 h-5&quot; />
              Get Started Today

            <button className=&quot;inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300&quot;>
              <ArrowRight className=&quot;w-5 h-5&quot; />
              Learn More

          </div>
        </div>
        {/* Stats Section */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-16&quot;></div>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center&quot;></div>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center&quot;></div>
                <stat.icon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-gray-400 text-sm&quot;>{stat.label}</div>
              <div className=&quot;text-gray-500 text-xs mt-1&quot;>{stat.description}</div>
            </div>
          ))}
        </div>
<div className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-8&quot;></div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;></div>
            <div></div>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Why Choose Us?</h3>
              <ul className=&quot;space-y-2&quot;>
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li key={index} className=&quot;flex items-center&quot;>
                    <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                    <span className=&quot;text-purple-100&quot;>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div></div>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Additional Benefits</h3>
              <ul className=&quot;space-y-2&quot;>
                {benefits.slice(4).map((benefit, index) => (
                  <li key={index} className=&quot;flex items-center&quot;>
                    <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                    <span className=&quot;text-purple-100&quot;>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=&quot;text-center mt-8&quot;></div>
            <button className=&quot;bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold&quot;>
              Get Started Today

          </div>
        </div>
        {/* Features Grid */}
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16&quot;></div>
          {features.map((feature, index) => (
            <div key={index} className=&quot;text-center&quot;></div>
              <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;></div>
                <feature.icon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className=&quot;bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16&quot;></div>
          <div className=&quot;text-center mb-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Why Choose Our Solutions?</h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We provide comprehensive AI and IT solutions that deliver real results for your business.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
        {/* Stats Section */}
        <div className=&quot;grid md:grid-cols-3 gap-8 mb-16&quot;></div>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center&quot;></div>
              <div className=&quot;flex justify-center mb-4&quot;></div>
                <stat.icon className=&quot;w-12 h-12 text-blue-400&quot; />
              </div>
              <div className=&quot;text-4xl font-bold text-white mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-lg font-semibold text-gray-300 mb-1&quot;>{stat.label}</div>
              <div className=&quot;text-sm text-gray-400&quot;>{stat.description}</div>
            </div>
          ))}
        </div>
        {/* Benefits Section */}
        <div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16&quot;></div>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-8&quot;>Why Choose Our Solutions?</h2>
          <div className=&quot;grid md:grid-cols-2 gap-4&quot;></div>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;flex items-center gap-3&quot;></div>
                <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                <span className=&quot;text-gray-300&quot;>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className=&quot;text-center&quot;></div>
          <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-white/90 mb-8 max-w-2xl mx-auto&quot;>
              Join the future of business technology. Get started with our AI solutions today and see the difference.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                <Zap className=&quot;w-5 h-5&quot; />
                <span>Start Free Trial</span>
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Schedule Demo

            </div>
          </div>
        </div>
      <div className=&quot;text-center&quot;></div>
        <button className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center&quot;>
          Get Started Now
          <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
        </button>
      </div>
    </div>
  )
}
export default ContentPromotionBanner
</button>
</button>
</button>
</button>