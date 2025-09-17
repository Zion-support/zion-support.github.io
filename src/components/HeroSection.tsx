import React from 'react';
import Link from '../lib/CompatLink';
import { ArrowRight, Play, Star, Users, Award, Globe } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Revolutionary AI Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Transform your business with cutting-edge artificial intelligence and automation technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
          >
            <Play className="mr-2 w-5 h-5" />
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;