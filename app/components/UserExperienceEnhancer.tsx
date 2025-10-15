import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const UserExperienceEnhancerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>UserExperienceEnhancer - Zion Tech Group</title>
        <meta name="description" content="Professional userexperienceenhancer solutions for modern businesses" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              UserExperienceEnhancer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional userexperienceenhancer solutions designed to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Solutions</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge technology solutions tailored to your business needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300 mb-4">
                Dedicated support team to ensure your success.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with your existing systems.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Start Now
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserExperienceEnhancerPage;
