'use client';
import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHealthcarePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Healthcare
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions for healthcare organizations to improve patient care and operational efficiency.
            </p>
          </div>
          
          <div className="cyber-card p-8 text-center">
            <Heart className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're developing cutting-edge AI healthcare solutions. Contact us to learn more.
            </p>
            <a href="/contact" className="cyber-button px-6 py-3 inline-flex items-center">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIHealthcarePage;