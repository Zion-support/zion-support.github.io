import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Professional case studies services and solutions." />
        <meta name="keywords" content="case studies, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional case studies services and solutions for your business.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}