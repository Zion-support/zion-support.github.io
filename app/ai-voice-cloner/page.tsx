import React from 'react';
import SEOHead from '../components/SEOHead';

const AIVoiceClonerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Voice Cloner Pro - Zion Tech Group"
        description="Advanced voice cloning technology that creates realistic voice replicas for various applications."
        keywords="ai voice cloning, voice synthesis, voice replication, text to speech, voice technology"
        canonicalUrl="https://ziontechgroup.com/ai-voice-cloner"
      />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Voice Cloner Pro</h1>
          <p className="text-xl text-gray-300 mb-8">Coming Soon</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default AIVoiceClonerPage;