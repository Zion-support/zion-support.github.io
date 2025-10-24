'use client';
import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: 'page, AI solutions, technology services',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/it-services',
  },
};

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive page solutions for modern businesses.
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="Page - ZionTechGroup"
        description="ZionTechGroup page"
        keywords="ziontechgroup"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page Title
          </h1>
          <p className="text-xl text-gray-600">
            Page content coming soon.
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
<<<<<<< HEAD
};

export default PagePage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
