import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tutorials & <span className="text-cyan-400">Learning Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">AI Fundamentals</h3>
              <p className="text-gray-300 mb-6">Learn the basics of artificial intelligence and machine learning.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Start Learning →</a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-300 mb-6">Master cloud platforms and deployment strategies.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Start Learning →</a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">Protect your systems with advanced security practices.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Start Learning →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;