'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="accessibility, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Accessibility
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            We are committed to making technology accessible to everyone. Our accessibility solutions ensure that all users can benefit from our AI and IT services.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Web Accessibility</h3>
              <p className="text-gray-300">
                Ensure your websites and applications meet WCAG guidelines and are accessible to all users.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Assistive Technology</h3>
              <p className="text-gray-300">
                Integrate assistive technologies to enhance user experience for people with disabilities.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Accessibility Testing</h3>
              <p className="text-gray-300">
                Comprehensive testing to identify and resolve accessibility issues in your applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;