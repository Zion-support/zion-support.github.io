'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiContentGenerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content at scale with AI-powered writing, design, and multimedia creation tools." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Content Generation</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Create compelling content at scale with AI-powered writing, design, and multimedia generation tools.
          </p>
        </div>
      </div>
    </>);

};

export default AiContentGenerationPage;
