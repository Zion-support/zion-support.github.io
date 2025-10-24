'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Video, Scissors, Play, CheckCircle } from 'lucide-react';

export default function AIVideoEditorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Video Editor</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional videos with AI-powered editing, effects, and automation.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>;

import { ArrowRight } from 'lucide-react';

export default function AiVideoEditorPage() {
  return (
    <>
      <title>AiVideoEditor - Zion Tech Group</title>
        <meta name="description" content="Professional aivideoeditor services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">AiVideoEditor</h1>
          <p className="text-lg text-gray-300 mb-8">Professional aivideoeditor services by Zion Tech Group.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>;
  );
}