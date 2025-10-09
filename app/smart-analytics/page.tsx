'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SmartAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 quantum-gradient">
              Smart Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time business analytics with AI-powered insights and predictive modeling. 
              Make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="cyber-card px-6 py-3 text-white">
                <span className="text-2xl font-bold text-cyan-400">$49</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <a 
                href="tel:+13024640950" 
                className="quantum-card px-6 py-3 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call Now: +1 (302) 464-0950
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Advanced Analytics Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '📊',
                  title: 'Real-time Dashboards',
                  description: 'Live data visualization with customizable widgets and real-time updates'
                },
                {
                  icon: '🔮',
                  title: 'Predictive Analytics',
                  description: 'AI-powered forecasting to predict trends and future performance'
                },
                {
                  icon: '📈',
                  title: 'Custom Reports',
                  description: 'Generate detailed reports tailored to your business needs'
                },
                {
                  icon: '🔌',
                  title: 'API Integration',
                  description: 'Connect with 100+ data sources and third-party applications'
                },
                {
                  icon: '🎯',
                  title: 'Goal Tracking',
                  description: 'Set and monitor KPIs with automated alerts and notifications'
                },
                {
                  icon: '👥',
                  title: 'Team Collaboration',
                  description: 'Share insights and collaborate with your team in real-time'
                }
              ].map((feature, index) => (
                <div key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Analytics Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Analytics Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Business Intelligence</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Revenue and sales analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Customer behavior analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Market trend analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Competitive intelligence
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Analytics</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Campaign performance tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    ROI and conversion analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Social media analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Email marketing insights
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center quantum-gradient">
              Flexible Pricing
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="hologram-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Pro Analytics</h3>
                <div className="text-5xl font-bold text-cyan-400 mb-4">$49<span className="text-xl text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Real-time dashboards
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Predictive analytics
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom reports
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    API integration
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Team collaboration
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-400 mr-3">✓</span>
                    24/7 support
                  </li>
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300 inline-block"
                >
                  Start Your Analytics Journey
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8 quantum-gradient">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent analytics and data-driven insights. 
              Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950" 
                className="cyber-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                📞 Call: +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="quantum-card px-8 py-4 text-white hover:text-cyan-400 transition-all duration-300"
              >
                ✉️ Email: kleber@ziontechgroup.com
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}