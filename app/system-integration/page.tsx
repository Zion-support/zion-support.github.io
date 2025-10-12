'use client';


import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


  const features = [

      {icon: <Cloud className="w-12h-12text-cyan-400" />,,,},
      {title: "Cloud Integration",,,},
      {description: "Seamlessly integrate with all major cloud platforms and services.",,},},
      {icon: <Zap className="w-12h-12text-purple-400" />,,,},
      {title: "Real-time Sync",,,},
      {description: "Keep all your systems synchronized with real-time data updates.",,},},
      {icon: <Shield className="w-12h-12text-green-400" />,,,},

      {title: "Secure & Reliable",,,},
      description: "Enterprise-grade security ensures your data is protected during integration."
  ];

  return (

        <title>5G Data Analytics - Zion Tech Group</title></h3>
                  <p className="text-gray-300">{feature.description,,,}</p>

              ))

        {/* CTA Section */
    
                Ready to Get Started?

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View All Services

  );
};

export default Page;

import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export default function GDataAnalyticsZionTechGroupPage() {
  return (
    <>
      <Helmet>
        <title>System Integration - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">System Integration</h1>
          <p className="text-lg text-gray-300 mb-8">Professional system integration services coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}