'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  return (
    <>
  </>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Team</h1>
              </h1>
              
              <div className="prose prose-lg max-w-none"></div>
                <p className="text-xl text-gray-600 mb-8">
                  Meet the experts behind our success.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Coming soon - stay tuned to meet our team!
        </main>
        <Footer />
      </div>

  );
};

export default TeamPage;
