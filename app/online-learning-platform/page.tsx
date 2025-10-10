'use client';
import React from 'react';
import { BookOpen, Users, BarChart, Settings, Zap, Shield, Target, Clock } from 'lucide-react';

const OnlineLearningPlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Online Learning Platform
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Educational Technology Platform
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive online learning platform that delivers personalized education, 
            tracks progress, and provides interactive learning experiences.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <BookOpen className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Course Management</h3>
              <p className="text-gray-300">
                Comprehensive course management with content 
                creation, organization, and delivery tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Student Management</h3>
              <p className="text-gray-300">
                Complete student management with enrollment, 
                progress tracking, and communication tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Advanced learning analytics with progress 
                insights, engagement metrics, and outcomes.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                Automated assessment tools with quizzes, 
                assignments, and grading capabilities.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI Personalization</h3>
              <p className="text-gray-300">
                AI-powered personalization with adaptive 
                learning paths and content recommendations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">
                Enterprise-grade security with data protection, 
                access controls, and compliance features.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Improved Learning</h3>
              <p className="text-gray-300 mb-4">
                Enhance learning outcomes with personalized 
                content and adaptive learning technologies.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Personalized learning paths</li>
                <li>• Adaptive content</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Engagement</h3>
              <p className="text-gray-300 mb-4">
                Increase student engagement with interactive 
                content and gamification features.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Interactive content</li>
                <li>• Gamification</li>
                <li>• Social learning</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Educator</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 100 students</li>
                <li>Basic course creation</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Institution</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1,000 students</li>
                <li>Advanced course creation</li>
                <li>AI-powered insights</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited students</li>
                <li>Full learning suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free learning platform assessment and see how we can improve your educational delivery.
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

export default OnlineLearningPlatformPage;