import React from 'react';
import { ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">About</h1>
        <p className="text-gray-300 mb-8">Coming Soon</p>
        <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
          Go Home <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
