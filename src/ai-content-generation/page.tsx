import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiContentGenerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-4">Ai Content Generation</h1><p className="text-gray-300 mb-8">Coming Soon - Advanced ai content generation solutions</p><a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a></div></div>
  );
};

export default AiContentGenerationPage;