'use client';
import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Careers</span> at Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team of innovative professionals and help shape the future 
            of AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Why Work With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">Work on cutting-edge AI and IT projects that push the boundaries of technology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Collaborative Environment</h3>
                  <p className="text-gray-300">Join a team of passionate professionals who support and learn from each other.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
                  <p className="text-gray-300">Flexible working arrangements and comprehensive benefits package.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
                  <p className="text-gray-300">Continuous learning and development opportunities to advance your career.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Open Positions</h3>
            <div className="space-y-4">
              <div className="border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Senior AI Engineer</h4>
                <p className="text-gray-300 text-sm mb-2">Full-time • Remote</p>
                <p className="text-gray-400 text-sm">Lead AI projects and mentor junior developers.</p>
              </div>

              <div className="border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">DevOps Engineer</h4>
                <p className="text-gray-300 text-sm mb-2">Full-time • Hybrid</p>
                <p className="text-gray-400 text-sm">Manage cloud infrastructure and deployment pipelines.</p>
              </div>

              <div className="border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Data Scientist</h4>
                <p className="text-gray-300 text-sm mb-2">Full-time • Remote</p>
                <p className="text-gray-400 text-sm">Develop machine learning models and analytics solutions.</p>
              </div>

              <div className="border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Frontend Developer</h4>
                <p className="text-gray-300 text-sm mb-2">Full-time • On-site</p>
                <p className="text-gray-400 text-sm">Build responsive and interactive user interfaces.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Join Our Team?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Apply Now
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Send Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
