'use client';
import React from 'react';
import { Globe, Zap, Shield, Settings, BarChart, Users, Clock, Cloud } from 'lucide-react';

const WebsiteHostingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Website Hosting Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            High-Performance & Reliable Web Hosting
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Professional website hosting solutions with 99.9% uptime, 
            lightning-fast performance, and comprehensive security features.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Global CDN</h3>
              <p className="text-gray-300">
                Worldwide content delivery network for 
                lightning-fast website loading speeds.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">High Performance</h3>
              <p className="text-gray-300">
                Optimized servers with SSD storage and 
                advanced caching for maximum performance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">
                Advanced security features including SSL certificates, 
                firewalls, and malware protection.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
              <p className="text-gray-300">
                User-friendly control panel with one-click 
                installations and automated updates.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Comprehensive website analytics and 
                performance monitoring tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock technical support with 
                expert assistance and monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Hosting Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$9.99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>1 Website</li>
                <li>10GB SSD Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>Email Support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29.99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited Websites</li>
                <li>100GB SSD Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>Priority Support</li>
                <li>Daily Backups</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99.99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited Websites</li>
                <li>500GB SSD Storage</li>
                <li>Unlimited Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>24/7 Dedicated Support</li>
                <li>Real-time Backups</li>
                <li>Advanced Security</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Launch Your Website?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free hosting consultation and see how we can optimize your website performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Consultation
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsiteHostingPage;