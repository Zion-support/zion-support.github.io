'use client';
import React from 'react';
import { Users, Brain, BarChart, Settings, Target, Zap, Shield, Clock } from 'lucide-react';

const AIRecruitmentAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Recruitment Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Talent Acquisition & HR Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered recruitment platform that streamlines hiring processes, 
            identifies top talent, and automates candidate screening and assessment.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Candidate Sourcing</h3>
              <p className="text-gray-300">
                AI-powered candidate sourcing from multiple 
                job boards, social networks, and databases.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Resume Screening</h3>
              <p className="text-gray-300">
                Intelligent resume screening with keyword 
                matching, skill assessment, and ranking.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Comprehensive recruitment analytics with 
                hiring metrics, time-to-fill, and success rates.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Interview Scheduling</h3>
              <p className="text-gray-300">
                Automated interview scheduling with calendar 
                integration and candidate communication.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Skill Matching</h3>
              <p className="text-gray-300">
                Advanced skill matching algorithms that 
                identify the best candidates for each role.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated recruitment workflows with 
                candidate communication and status updates.
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
              <h3 className="text-xl font-bold text-white mb-4">Faster Hiring</h3>
              <p className="text-gray-300 mb-4">
                Reduce time-to-hire by up to 60% with automated 
                screening and intelligent candidate matching.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated screening</li>
                <li>• Smart matching</li>
                <li>• Streamlined workflows</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Better Quality</h3>
              <p className="text-gray-300 mb-4">
                Improve hiring quality with AI-powered 
                assessment and candidate evaluation.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Skill assessment</li>
                <li>• Cultural fit analysis</li>
                <li>• Performance prediction</li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 5 job postings</li>
                <li>Basic candidate screening</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 25 job postings</li>
                <li>Advanced candidate screening</li>
                <li>AI-powered matching</li>
                <li>Priority support</li>
                <li>Custom workflows</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited job postings</li>
                <li>Full recruitment suite</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free recruitment assessment and see how we can improve your hiring process.
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

export default AIRecruitmentAssistantPage;