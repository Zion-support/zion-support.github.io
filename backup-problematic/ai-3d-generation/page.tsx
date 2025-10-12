import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Ai3dGenerationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into stunning 3D models with our advanced AI-powered generation technology." />
        <meta name="keywords" content="AI 3D generation, 3D modeling, AI technology, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AI 3D Generation</h1>
          <p className="text-lg text-gray-300 mb-8">
            Transform your ideas into stunning 3D models with our advanced AI-powered generation technology.
            Create detailed 3D assets from text descriptions or 2D images in seconds.
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
              Try Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}