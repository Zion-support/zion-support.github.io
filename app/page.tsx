'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology." />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge AI solutions and IT consulting to help businesses achieve unprecedented growth.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
