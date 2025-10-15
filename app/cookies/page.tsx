import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Usage</title>
        <meta name="description" content="Learn about how we use cookies on our website and how you can manage your cookie preferences." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                This policy explains how we use cookies and similar technologies on our website.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
                We also use cookies for security and authentication purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 mb-6">
                You can control and manage cookies through your browser settings. However, disabling cookies 
                may affect the functionality of our website.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us at 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800"> kleber@ziontechgroup.com</a> 
                or call us at <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;