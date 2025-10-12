import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
=======
import { Box, Palette, Zap, CheckCircle, ArrowRight, Star, Brain, Layers } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-0a63

const Ai3DGenerationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-3d-generation, AI solutions, IT services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">AI 3D Generation</h1>
        <p className="text-lgtext-gray-300 mb-8">Professional AI 3D generation services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Ai3DGenerationPage;