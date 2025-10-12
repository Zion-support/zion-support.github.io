import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how we use cookies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="text-cyan-400">Policy</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
                <p className="text-gray-300 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you 
                  visit our website. They help us provide you with a better experience.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 mb-6">
                  We use cookies to analyze website traffic, personalize content, and improve our services. 
                  We also use cookies for security and performance optimization.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-6">
                  You can control and manage cookies through your browser settings. However, disabling 
                  cookies may affect the functionality of our website.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at 
                  <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;