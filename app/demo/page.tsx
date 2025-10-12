import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group</title>
        <meta name="description" content="See our AI and IT solutions in action with live demonstrations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Live <span className="text-cyan-400">Demos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand with interactive demonstrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">AI Chatbot Demo</h3>
              <p className="text-gray-300 mb-6">See how our AI chatbots can handle customer inquiries.</p>
              <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Data Analytics Demo</h3>
              <p className="text-gray-300 mb-6">Explore our advanced analytics dashboard.</p>
              <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration Demo</h3>
              <p className="text-gray-300 mb-6">See how we migrate applications to the cloud.</p>
              <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;