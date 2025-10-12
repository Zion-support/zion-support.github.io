import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiDrugDiscoveryProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical research, drug development, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AI Drug Discovery Pro</h1>
          <p className="text-lg text-gray-300 mb-8">
            Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.
            Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center bg-transparent border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}