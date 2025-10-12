

'use client';

import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
'use client';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;

export default function FuturisticLoader({ 
  const size = 'md', 
  color = 'cyan',
  text = 'Loading...' 
}: FuturisticLoaderProps) {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
  };

    switch (color) {
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';
  };
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function FuturisticLoader() {
  return (
<<<<<<< HEAD

        {/* Outer rotating ring */}
        {/* Inner pulsing ring */}
        {/* Center pulsing dot */}
        {/* Glow effect */}

      {text && (
          {text}
      )}
=======
    <>
      <Helmet>
        <title>Futuristic Loader - Zion Tech Group</title>
        <meta name="description" content="Professional futuristic loader by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Futuristic Loader</h1>
          <p className="text-lg text-gray-300 mb-8">Professional futuristic loader coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );

