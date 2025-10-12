import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Professional contact services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with our team to discuss your AI and IT solution needs.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-6">Get Started Today</h2>
                <p className="text-gray-300 mb-6">
                  Ready to transform your business with cutting-edge AI and IT solutions? 
                  Contact our team to discuss your project requirements.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold mr-2">Email:</span>
                    <a href="mailto:contact@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                      contact@ziontechgroup.com
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold mr-2">Phone:</span>
                    <a href="tel:+1-555-0123" className="text-blue-400 hover:text-blue-300">
                      +1 (555) 012-3456
                    </a>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold mr-2">Address:</span>
                    <span>123 Tech Street, Innovation City, IC 12345</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}