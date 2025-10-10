'use client';
import React from 'react';
import { Heart, Brain, Users, Shield, BarChart, Target, Zap, Clock } from 'lucide-react';

const AIMentalHealthPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Mental Health Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Mental Health Support & Wellness
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered mental health solutions that provide personalized support, 
            early intervention, and wellness tracking with privacy and compassion.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Heart className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Emotional Support</h3>
              <p className="text-gray-300">
                AI-powered emotional support with empathetic responses 
                and personalized wellness recommendations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Mood Tracking</h3>
              <p className="text-gray-300">
                Intelligent mood tracking and analysis that identifies 
                patterns and suggests interventions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Peer Support</h3>
              <p className="text-gray-300">
                AI-facilitated peer support networks and 
                community connections for mental wellness.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Privacy Protection</h3>
              <p className="text-gray-300">
                Enterprise-grade privacy and security with 
                encrypted data and HIPAA compliance.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Progress Analytics</h3>
              <p className="text-gray-300">
                Comprehensive progress tracking with insights 
                and recommendations for continued wellness.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Crisis Intervention</h3>
              <p className="text-gray-300">
                AI-powered crisis detection and immediate 
                intervention with professional support connections.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Mental Health Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300 mb-4">
                Round-the-clock mental health support with AI companions 
                that are always available when you need them.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Immediate emotional support</li>
                <li>• Crisis intervention</li>
                <li>• Wellness check-ins</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Personalized Care</h3>
              <p className="text-gray-300 mb-4">
                AI-driven personalized mental health care that adapts 
                to individual needs and preferences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Customized wellness plans</li>
                <li>• Targeted interventions</li>
                <li>• Progress tracking</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Individual</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic mood tracking</li>
                <li>AI emotional support</li>
                <li>Wellness recommendations</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced AI support</li>
                <li>Progress analytics</li>
                <li>Peer support networks</li>
                <li>Priority support</li>
                <li>Custom wellness plans</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited users</li>
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
            Ready to Prioritize Your Mental Health?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free mental health assessment and see how AI can support your wellness journey.
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

export default AIMentalHealthPage;