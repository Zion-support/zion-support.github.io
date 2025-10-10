'use client';
import React from 'react';
import { Users, Search, FileText, Brain, Target, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const AIRecruitmentAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Recruitment Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Intelligent hiring solutions powered by AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Streamline your recruitment process with our advanced AI-powered assistant. 
            Find the best candidates 10x faster with intelligent screening, automated interviews, and predictive analytics.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Search className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Candidate Search</h3>
              <p className="text-gray-300">
                AI-powered candidate sourcing across multiple platforms with intelligent matching algorithms.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Resume Analysis</h3>
              <p className="text-gray-300">
                Automated resume parsing, skills extraction, and candidate scoring with 95% accuracy.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI Interviews</h3>
              <p className="text-gray-300">
                Conduct automated video interviews with AI-powered question generation and response analysis.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Job Matching</h3>
              <p className="text-gray-300">
                Intelligent job-candidate matching based on skills, experience, and cultural fit analysis.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Clock className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Scheduling Automation</h3>
              <p className="text-gray-300">
                Automated interview scheduling with calendar integration and timezone management.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <TrendingUp className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Insights</h3>
              <p className="text-gray-300">
                Comprehensive recruitment analytics with hiring trends, success rates, and performance metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Recruitment Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">For HR Teams</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  90% reduction in time-to-hire
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  85% improvement in candidate quality
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Automated bias reduction
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Seamless ATS integration
                </li>
              </ul>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">For Candidates</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Faster application process
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Fair and unbiased evaluation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time feedback and updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Personalized job recommendations
                </li>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 50 job postings</li>
                <li>Basic AI screening</li>
                <li>Email support</li>
                <li>Standard analytics</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center border-2 border-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 200 job postings</li>
                <li>Advanced AI interviews</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
                <li>Advanced analytics</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited job postings</li>
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>White-label options</li>
                <li>Custom AI training</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Revolutionize Your Hiring Process?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies using our AI recruitment assistant to find the best talent faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Demo
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIRecruitmentAssistantPage;