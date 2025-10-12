'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice assistant solutions for your business. Speech recognition and natural language processing." />
        <meta name="keywords" content="AI voice assistant, speech recognition, voice AI, natural language processing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Voice Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI voice assistant solutions for your business. Speech recognition and natural language processing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;