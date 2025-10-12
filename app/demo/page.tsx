import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const DemoPage: React.FC = () => {
  return (
    <Layout
      title="Live Demo - Zion Tech Group"
      description="Experience our AI and IT solutions through interactive demos and live demonstrations."
      keywords="demo, live demo, AI demo, cloud demo, technology showcase"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Live <span className="text-cyan-400">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our cutting-edge solutions through interactive demonstrations and see the power of our technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Chatbot Demo</h3>
              <p className="text-gray-300 mb-6">Experience our advanced AI chatbot in action with natural language processing.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Try Demo →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Migration Demo</h3>
              <p className="text-gray-300 mb-6">See how we can migrate your infrastructure to the cloud seamlessly.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Try Demo →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Dashboard</h3>
              <p className="text-gray-300 mb-6">Monitor your security posture with our real-time security dashboard.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Try Demo →</a>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">Contact us to schedule a personalized demo tailored to your needs.</p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;