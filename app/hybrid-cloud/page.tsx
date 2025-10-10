'use client';
import React from 'react';
import { Cloud, Zap, Shield, Settings, BarChart, Users, Globe, Lock } from 'lucide-react';

const HybridCloudPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Hybrid Cloud Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Seamless Integration of On-Premise & Cloud Infrastructure
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced hybrid cloud solutions that combine the best of on-premise and cloud 
            infrastructure for optimal performance, security, and cost efficiency.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Cloud className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud Integration</h3>
              <p className="text-gray-300">
                Seamless integration between on-premise and cloud 
                environments with unified management.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Workload Optimization</h3>
              <p className="text-gray-300">
                Intelligent workload placement and optimization 
                across hybrid cloud infrastructure.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Unified Security</h3>
              <p className="text-gray-300">
                Consistent security policies and controls across 
                on-premise and cloud environments.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Management Platform</h3>
              <p className="text-gray-300">
                Single management platform for monitoring and 
                controlling hybrid cloud resources.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">
                Cost optimization strategies that reduce overall 
                infrastructure spending by up to 40%.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Globe className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-gray-300">
                Global cloud presence with local data residency 
                and compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Hybrid Cloud Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Flexibility & Scalability</h3>
              <p className="text-gray-300 mb-4">
                Scale resources up or down based on demand while maintaining 
                control over sensitive data and applications.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Burst to cloud during peak demand</li>
                <li>• Keep sensitive data on-premise</li>
                <li>• Gradual cloud migration</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cost Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Optimize costs by running workloads in the most 
                cost-effective environment for each use case.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Pay only for what you use</li>
                <li>• Avoid over-provisioning</li>
                <li>• Reduce capital expenditures</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$999/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic hybrid cloud setup</li>
                <li>Up to 10 servers</li>
                <li>Standard monitoring</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,999/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced hybrid cloud</li>
                <li>Up to 50 servers</li>
                <li>Advanced monitoring</li>
                <li>Priority support</li>
                <li>Cost optimization</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full hybrid cloud suite</li>
                <li>Unlimited servers</li>
                <li>Custom integrations</li>
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
            Ready to Build Your Hybrid Cloud?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free hybrid cloud assessment and see how we can optimize your infrastructure.
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

export default HybridCloudPage;