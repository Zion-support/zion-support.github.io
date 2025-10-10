'use client';
import React from 'react';
import { Trophy, BarChart, Users, Brain, Target, Zap, Shield, Activity } from 'lucide-react';

const AISportsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Sports Analytics
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Sports Performance & Analytics
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered sports analytics that enhance performance, 
            prevent injuries, and optimize training strategies.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Performance Analysis</h3>
              <p className="text-gray-300">
                AI-driven performance analysis that tracks metrics, 
                identifies strengths, and suggests improvements.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Activity className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Injury Prevention</h3>
              <p className="text-gray-300">
                Predictive models that identify injury risks and 
                recommend preventive measures.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Live performance tracking with instant insights 
                and coaching recommendations.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Training Optimization</h3>
              <p className="text-gray-300">
                AI-optimized training programs that adapt to 
                individual athlete needs and goals.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Tactical Analysis</h3>
              <p className="text-gray-300">
                Advanced tactical analysis with opponent scouting 
                and game strategy optimization.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Team Management</h3>
              <p className="text-gray-300">
                Comprehensive team management tools with player 
                tracking and roster optimization.
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
              <h3 className="text-2xl font-bold text-white mb-4">Individual</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Personal performance tracking</li>
                <li>Basic analytics</li>
                <li>Training recommendations</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Team</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 25 athletes</li>
                <li>Advanced analytics</li>
                <li>Injury prevention</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited athletes</li>
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
            Ready to Elevate Your Sports Performance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free performance analysis and see how AI can improve your athletic performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Analysis
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

export default AISportsPage;