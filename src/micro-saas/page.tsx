'use client';
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          </p>
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Micro SAAS Solutions</h2>
            <p className="text-gray-300 mb-6">
              Get access to powerful AI tools and applications designed for small to medium businesses.
            </p>
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}