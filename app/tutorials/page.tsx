import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials & Learning Center - Zion Tech Group</title>
        <meta name="description" content="Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources. Learn from industry experts." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tutorials & Learning Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working on bringing you comprehensive tutorials and learning resources. 
              Contact us to learn more about our services.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;