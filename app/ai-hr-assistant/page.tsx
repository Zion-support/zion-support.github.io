'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';

const AIHRAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI HR Assistant - Zion Tech Group"
        description="Advanced AI-powered HR assistant for recruitment, employee management, and HR automation. Streamline your HR processes with intelligent technology."
        keywords="AI HR assistant, recruitment automation, employee management, HR automation, human resources technology, HR AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 holographic-text">AI HR Assistant</h1>
          <p className="text-xl text-gray-300 mb-8">Coming Soon - Advanced AI-powered HR assistance</p>
          <div className="cyber-loader mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default AIHRAssistantPage;