'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';

const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>ServiceWorker - Zion Tech Group</title>
        <meta name="description" content="Advanced serviceworker solutions powered by AI technology." />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service Worker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced service worker solutions for enhanced performance and offline capabilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWorker;