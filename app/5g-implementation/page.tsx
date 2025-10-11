'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Wifi} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services for businesses." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">5G Implementation</h1>
            <p className="text-gray-300">This page is under construction.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiveGImplementationPage;