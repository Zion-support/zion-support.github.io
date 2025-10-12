'use client';


import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

  return (

        <title>5G Data Analytics - Zion Tech Group</title>

        {/* Hero Section */
    
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* CTA Section */
    
                Ready to Get Started?

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View All Services

  );
};

export default Page;

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function 5GDataAnalyticsZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration services coming soon.</p>
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