'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT technologies with our comprehensive tutorials." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Tutorials</h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn AI and IT technologies with our comprehensive tutorials
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TutorialsPage;
