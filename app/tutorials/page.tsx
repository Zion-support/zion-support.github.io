import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const TutorialsPage: React.FC = () => {
  return (
    <Layout
      title="Tutorials - Zion Tech Group"
      description="Learn about AI, cloud computing, and IT solutions with our comprehensive tutorials and guides."
      keywords="tutorials, guides, AI learning, cloud computing, IT training, technology education"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tutorials & <span className="text-cyan-400">Learning Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master the latest technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutorial Cards */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Fundamentals</h3>
              <p className="text-gray-300 mb-6">Learn the basics of artificial intelligence, machine learning, and neural networks.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-300 mb-6">Master cloud platforms, deployment strategies, and infrastructure management.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">Protect your systems with advanced security practices and threat mitigation.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300 mb-6">Build cross-platform mobile applications with modern frameworks.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">5G Technology</h3>
              <p className="text-gray-300 mb-6">Explore next-generation wireless technology and its applications.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-6">Transform data into actionable insights with advanced analytics tools.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Learning →</a>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of professionals who are advancing their careers with our tutorials.</p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialsPage;