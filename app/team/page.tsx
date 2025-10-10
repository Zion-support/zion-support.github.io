'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Brain, Code, Shield, BarChart, Globe } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. AI specialists, software engineers, and technology consultants driving innovation in AI and IT solutions." />
        <meta name="keywords" content="team, experts, AI specialists, software engineers, technology consultants, Zion Tech Group team" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Expert
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Meet the talented professionals behind Zion Tech Group. Our diverse team of AI specialists, 
                software engineers, and technology consultants are dedicated to delivering innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber Santos</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  AI and technology visionary with over 15 years of experience in enterprise solutions and innovation.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
                <p className="text-cyan-400 mb-3">CTO</p>
                <p className="text-gray-300 text-sm">
                  Software architecture expert specializing in scalable AI systems and cloud infrastructure.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Michael Chen</h3>
                <p className="text-cyan-400 mb-3">Head of Security</p>
                <p className="text-gray-300 text-sm">
                  Cybersecurity specialist with expertise in AI security and enterprise protection strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
                <p className="text-gray-300">
                  Our AI specialists develop cutting-edge machine learning models and intelligent automation solutions.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Software Development</h3>
                <p className="text-gray-300">
                  Expert developers creating robust, scalable applications using the latest technologies and frameworks.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Analytics</h3>
                <p className="text-gray-300">
                  Data scientists and analysts transforming raw data into actionable insights and business intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and technology. 
              Explore career opportunities with Zion Tech Group.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              View Careers
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;