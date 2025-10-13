import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceRecognitionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Recognition - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice recognition services for speech-to-text, voice commands, and audio analysis." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-6">AI Voice Recognition</h1>
        <p className="text-xl text-gray-300">Coming Soon - Advanced voice recognition solutions</p>
      </div>
    </div>
  );
};

export default AIVoiceRecognitionPage;