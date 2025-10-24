import React from 'react'
import React from 'react';
import { CheckCircle, Phone, Star, TrendingUp, Check } from 'lucide-react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, TrendingUp } from 'lucide-react'

constAISocialMediaManagerPage: React.FC= () =>{constfeatures= [
    'AI-powered content creation and curation',
    'Smart scheduling across all platforms',
    'Advanced analytics and performance insights',
    'Audience intelligence and targeting',
    'Hashtag optimization and trend analysis',
    'Competitor analysis and benchmarking',
    'Automated engagement and responses',
    'Multi-platform campaign management'
  ]

  const benefits = [
    '200% increase in engagement rates',
    '20+ hours saved per week',
    '40% improvement in reach',
    '50% better ROI on campaigns',
    '95% content quality consistency',
    '60% faster content creation'
  ]

  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B' },
    { name: 'Instagram', icon: '📷', users: '1.4B' },
    { name: 'Twitter', icon: '🐦', users: '450M' },
    { name: 'LinkedIn', icon: '💼', users: '900M' },
    { name: 'TikTok', icon: '🎵', users: '1B' },
    { name: 'YouTube', icon: '📺', users: '2.7B' }
  ]

const Page = () => {
  return (
    <>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          {/* Hero Section */}
          <section className=&quot;text-center mb-16&quot;></section>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
              AI Social Media Manager
            </h1>
            <p className=&quot;text-xl text-cyan-400 mb-8&quot;>
              Automate your social media with AI-powered content creation
            </p>
            <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Transform your social media presence with our intelligent AI system that creates,
              schedules, and optimizes content across all platforms automatically.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Start Free Trial
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              AI-Powered Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-green-400 mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{feature}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Platforms Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Supported Platforms
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {platforms.map((platform, index) => (
                <div key={index} className=&quot;quantum-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;text-4xl mb-4&quot;>{platform.icon}</div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{platform.name}</h3>
                  <p className=&quot;text-cyan-400&quot;>{platform.users} users</p>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Proven Results
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <TrendingUp className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <p className=&quot;text-lg text-white font-semibold&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section className=&quot;text-center&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 neon-text&quot;>
              Ready to Automate Your Social Media?
            </h2>
            <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join thousands of businesses already using AI to transform their social media presence.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Get Started
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Page;