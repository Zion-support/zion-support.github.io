'use client';
import React from 'react';
import { Calendar, Users, Zap, Shield, CheckCircle, Star, Phone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AISchedulerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Scheduler
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Meeting & Event Scheduling
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Never miss another meeting with our AI-powered scheduling assistant. Automatically find
            the best meeting times, coordinate complex team schedules, and optimize your calendar
            for maximum productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
            <div className="text-white font-semibold mb-2">Hours Saved</div>
            <div className="text-gray-300 text-sm">Per week on scheduling tasks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-white font-semibold mb-2">Accuracy</div>
            <div className="text-gray-300 text-sm">In meeting time predictions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Fewer No-shows</div>
            <div className="text-gray-300 text-sm">With smart reminders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Conflict-Free</div>
            <div className="text-gray-300 text-sm">Scheduling guaranteed</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Smart Scheduling Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Smart Scheduling</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                AI-powered scheduling that automatically finds the best meeting times based on availability, preferences, and time zones.
              </p>
              <div className="text-cyan-400 font-semibold text-sm">Save 5+ hours per week</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Team Coordination</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Coordinate complex team schedules with intelligent conflict resolution and resource optimization.
              </p>
              <div className="text-cyan-400 font-semibold text-sm">Eliminate scheduling conflicts</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <Zap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Automated Reminders</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Smart reminder system that adapts to each participant's preferences and communication style.
              </p>
              <div className="text-cyan-400 font-semibold text-sm">Reduce no-shows by 60%</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Your Schedule?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using AI Scheduler to eliminate scheduling headaches
            and maximize productivity.
          </p>
        </section>
      </section>
    </div>
  );
};

export default AISchedulerPage;