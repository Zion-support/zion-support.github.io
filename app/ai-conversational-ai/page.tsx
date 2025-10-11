'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const AiConversationalAiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Conversational Ai - Zion Tech Group</title>
        <meta name="description" content="Professional ai conversational ai services and solutions" />
        <meta name="keywords" content="ai conversational ai, technology, solutions, services" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Conversational Ai
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai conversational ai services and solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiConversationalAiPage;
