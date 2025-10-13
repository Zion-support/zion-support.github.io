import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGPrivateNetworksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G private networks solutions by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">5G Private Networks</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional 5G private networks solutions designed to meet your business needs.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
