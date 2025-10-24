'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function AccessibilityPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Accessibility Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Making technology accessible to everyone through inclusive design and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Accessibility Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive accessibility solutions ensure your digital products are usable by everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                WCAG Compliance
              </h3>
              <p className="text-gray-600">
                Full compliance with WCAG 2.1 AA standards for web accessibility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Screen Reader Support
              </h3>
              <p className="text-gray-600">
                Optimized for screen readers and assistive technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⌨️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Keyboard Navigation
              </h3>
              <p className="text-gray-600">
                Full keyboard navigation support for all interactive elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}