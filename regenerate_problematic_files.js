const fs = require('fs');
const path = require('path');

// Function to create a proper page component
function createProperPageComponent(title, description, keywords, canonicalUrl, colorScheme) {
  return `'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <>
      <SEOHead 
        title="${title} - Zion Tech Group"
        description="${description}"
        keywords="${keywords}"
        canonicalUrl="${canonicalUrl}"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${colorScheme}-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-${colorScheme}-600/20 to-${colorScheme === 'orange' ? 'red' : colorScheme === 'blue' ? 'purple' : colorScheme === 'amber' ? 'orange' : colorScheme === 'emerald' ? 'teal' : 'blue'}-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-${colorScheme}-600 hover:bg-${colorScheme}-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-${colorScheme}-600 text-${colorScheme}-400 hover:bg-${colorScheme}-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Discover the powerful capabilities of our ${title.toLowerCase()} solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-${colorScheme}-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Feature {item}
                  </h3>
                  <p className="text-gray-300">
                    Advanced ${title.toLowerCase()} capabilities that enhance your workflow and productivity.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who are already using our ${title.toLowerCase()} solution.
            </p>
            <button className="bg-${colorScheme}-600 hover:bg-${colorScheme}-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}`;
}

// List of problematic files with their details
const problematicFiles = [
  {
    file: 'app/ai-audio-processor/page.tsx',
    title: 'AI Audio Processor',
    description: 'Advanced AI-powered audio processing service. Features noise reduction, audio enhancement, music generation, speech-to-text, and voice cloning.',
    keywords: 'AI audio processor, audio enhancement, noise reduction, music generation, speech to text, voice cloning, audio editing, sound processing',
    canonicalUrl: 'https://ziontechgroup.com/ai-audio-processor',
    colorScheme: 'orange'
  },
  {
    file: 'app/ai-code-assistant/page.tsx',
    title: 'AI Code Assistant',
    description: 'Revolutionary AI-powered code assistant that helps developers write better code faster. Features intelligent code generation, analysis, and documentation.',
    keywords: 'AI code assistant, code generation, code analysis, programming, development, AI coding, code review, documentation',
    canonicalUrl: 'https://ziontechgroup.com/ai-code-assistant',
    colorScheme: 'blue'
  },
  {
    file: 'app/ai-legal-assistant/page.tsx',
    title: 'AI Legal Assistant',
    description: 'Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and document generation. Streamline your legal practice with AI.',
    keywords: 'AI legal assistant, legal research, contract analysis, compliance, legal AI, document generation, law technology',
    canonicalUrl: 'https://ziontechgroup.com/ai-legal-assistant',
    colorScheme: 'amber'
  },
  {
    file: 'app/ai-medical-assistant/page.tsx',
    title: 'AI Medical Assistant',
    description: 'Advanced AI-powered medical assistant for diagnosis support, medical documentation, imaging analysis, and patient care. Enhance healthcare delivery with AI technology.',
    keywords: 'AI medical assistant, medical AI, diagnosis support, healthcare AI, medical documentation, imaging analysis, patient care',
    canonicalUrl: 'https://ziontechgroup.com/ai-medical-assistant',
    colorScheme: 'emerald'
  },
  {
    file: 'app/ai-translator/page.tsx',
    title: 'AI Translator',
    description: 'Advanced AI-powered translation service supporting 100+ languages. Features real-time translation, document processing, voice translation, and image translation.',
    keywords: 'AI translator, translation service, multilingual, real-time translation, document translation, voice translation, image translation',
    canonicalUrl: 'https://ziontechgroup.com/ai-translator',
    colorScheme: 'green'
  }
];

// Regenerate each problematic file
for (const fileInfo of problematicFiles) {
  try {
    console.log(`Regenerating ${fileInfo.file}...`);
    
    const content = createProperPageComponent(
      fileInfo.title,
      fileInfo.description,
      fileInfo.keywords,
      fileInfo.canonicalUrl,
      fileInfo.colorScheme
    );
    
    fs.writeFileSync(fileInfo.file, content);
    console.log(`✅ Regenerated ${fileInfo.file}`);
    
  } catch (error) {
    console.error(`❌ Error regenerating ${fileInfo.file}:`, error.message);
  }
}

console.log('File regeneration completed!');