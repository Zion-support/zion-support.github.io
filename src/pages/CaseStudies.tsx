import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Case Studies
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Success stories from our clients
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">TechCorp Transformation</h3>
            <p className="text-gray-300">300% efficiency increase with AI-powered solutions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">InnovateLab Success</h3>
            <p className="text-gray-300">Revolutionary autonomous business platform deployment</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">DataFlow Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology partnership success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;