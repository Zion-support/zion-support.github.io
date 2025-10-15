import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet our talented team of engineers, designers, and technology experts who are driving innovation at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented professionals who are driving innovation and excellence at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-indigo-400">John Doe</h3>
              <p className="text-purple-400 mb-4">Chief Technology Officer</p>
              <p className="text-gray-300 text-sm">
                Leading our technology strategy with 15+ years of experience in AI and cloud computing.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">Jane Smith</h3>
              <p className="text-blue-400 mb-4">Head of AI Research</p>
              <p className="text-gray-300 text-sm">
                PhD in Machine Learning, specializing in natural language processing and computer vision.
              </p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-green-400">Mike Johnson</h3>
              <p className="text-teal-400 mb-4">Lead DevOps Engineer</p>
              <p className="text-gray-300 text-sm">
                Expert in cloud infrastructure and automation with certifications in AWS and Azure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;