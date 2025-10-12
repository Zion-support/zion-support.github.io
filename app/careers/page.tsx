import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const CareersPage: React.FC = () => {
  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join our team of innovative professionals and help shape the future of technology."
      keywords="careers, jobs, employment, AI jobs, tech careers, remote work"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a dynamic team that's revolutionizing technology and creating solutions that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Job Openings */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Senior AI Engineer</h3>
                <p className="text-gray-300 mb-6">
                  Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Remote / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  5+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  Python, TensorFlow, PyTorch
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Cloud Solutions Architect</h3>
                <p className="text-gray-300 mb-6">
                  Design and implement scalable cloud infrastructure solutions using AWS, Azure, and GCP.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Remote / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  7+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  AWS, Azure, Kubernetes
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Specialist</h3>
                <p className="text-gray-300 mb-6">
                  Protect our clients' digital assets with advanced security solutions and threat detection systems.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Remote / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  4+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  CISSP, CEH, Security+
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">5G Network Engineer</h3>
                <p className="text-gray-300 mb-6">
                  Design and deploy next-generation 5G networks and IoT solutions for smart city projects.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  On-site / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  6+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                  5G, IoT, Network Design
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">DevOps Engineer</h3>
                <p className="text-gray-300 mb-6">
                  Streamline development workflows and automate deployment processes for our development teams.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Remote / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  5+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                  Docker, Kubernetes, CI/CD
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium mb-4">
                  Full-time
                </span>
                <h3 className="text-xl font-bold text-white mb-4">Data Scientist</h3>
                <p className="text-gray-300 mb-6">
                  Extract insights from complex datasets and build predictive models for business intelligence.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Remote / Hybrid
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  4+ years experience
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Python, R, SQL, ML
                </div>
              </div>
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">Apply Now →</a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">Work on cutting-edge projects that shape the future of technology.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Remote Friendly</h3>
                  <p className="text-gray-300">Work from anywhere with flexible schedules and remote-first culture.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth Opportunities</h3>
                  <p className="text-gray-300">Continuous learning, mentorship, and career advancement opportunities.</p>
                </div>
              </div>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >
                Apply Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareersPage;