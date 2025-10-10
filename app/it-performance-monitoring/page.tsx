'use client';
import React from 'react';
import { BarChart, Zap, Settings, Shield, Users, Clock, Target, Globe } from 'lucide-react';

const ITPerformanceMonitoringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Performance Monitoring
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Real-time IT Infrastructure Monitoring & Analytics
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive IT performance monitoring solutions that provide real-time insights, 
            proactive alerts, and optimization recommendations for your infrastructure.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring of servers, networks, and applications 
                with real-time performance metrics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Proactive Alerts</h3>
              <p className="text-gray-300">
                Intelligent alerting system that notifies you of issues 
                before they impact your business.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Custom Dashboards</h3>
              <p className="text-gray-300">
                Customizable dashboards with key performance indicators 
                and visual analytics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security Monitoring</h3>
              <p className="text-gray-300">
                Comprehensive security monitoring with threat detection 
                and incident response.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">User Experience</h3>
              <p className="text-gray-300">
                End-user experience monitoring with application 
                performance and availability tracking.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Capacity Planning</h3>
              <p className="text-gray-300">
                Predictive capacity planning with resource utilization 
                analysis and scaling recommendations.
              </p>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10 servers</li>
                <li>Basic monitoring</li>
                <li>Standard alerts</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 50 servers</li>
                <li>Advanced monitoring</li>
                <li>Custom dashboards</li>
                <li>Priority support</li>
                <li>Security monitoring</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited servers</li>
                <li>Full monitoring suite</li>
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
            Ready to Optimize Your IT Performance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free performance assessment and see how we can improve your IT infrastructure.
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

export default ITPerformanceMonitoringPage;