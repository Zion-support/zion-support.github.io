import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const AiTranslationServicePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Translation Service - Zion Tech Group"
        description="Advanced AI-powered translation services with high accuracy and support for multiple languages."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function AiTranslationServicePage() {
  return (
    <>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="AI-powered translation service with advanced language processing and cultural adaptation." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Translation Service</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default AiTranslationServicePage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
