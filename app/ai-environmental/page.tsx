'use client';
import React from 'react';
import { Globe, Leaf, BarChart, Settings, Brain, Target, Users, Zap } from 'lucide-react';

const AIEnvironmentalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Environmental Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Environmental Monitoring & Sustainability
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered environmental solutions that monitor air quality, 
            track carbon emissions, and optimize sustainability initiatives.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Globe className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Air Quality Monitoring</h3>
              <p className="text-gray-300">
                Real-time air quality monitoring with AI analysis of pollutants, 
                weather patterns, and health impacts.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Leaf className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Carbon Tracking</h3>
              <p className="text-gray-300">
                Comprehensive carbon footprint tracking and reduction strategies 
                powered by machine learning.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Environmental Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics dashboard with environmental trends, 
                predictions, and sustainability metrics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Sensors</h3>
              <p className="text-gray-300">
                IoT sensor networks with AI processing for comprehensive 
                environmental data collection.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Predictive Modeling</h3>
              <p className="text-gray-300">
                AI models that predict environmental changes and suggest 
                proactive mitigation strategies.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance Management</h3>
              <p className="text-gray-300">
                Automated compliance tracking for environmental regulations 
                and sustainability standards.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Sustainability Goals</h3>
              <p className="text-gray-300 mb-4">
                Achieve your sustainability targets with AI-driven insights 
                and automated environmental management.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Reduce carbon emissions by 30%</li>
                <li>• Optimize resource usage</li>
                <li>• Improve air quality monitoring</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
              <p className="text-gray-300 mb-4">
                Stay compliant with environmental regulations through 
                automated monitoring and reporting.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Real-time compliance tracking</li>
                <li>• Automated reporting</li>
                <li>• Risk assessment and alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic air quality monitoring</li>
                <li>Up to 5 sensors</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced environmental monitoring</li>
                <li>Up to 25 sensors</li>
                <li>Carbon tracking</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited sensors</li>
                <li>Custom AI models</li>
                <li>Full analytics suite</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Our Environment?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free environmental assessment and see how AI can help you achieve your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
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

export default AIEnvironmentalPage;