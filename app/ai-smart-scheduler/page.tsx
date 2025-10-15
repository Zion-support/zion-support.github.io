import React from 'react';
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';

const AiSmartSchedulerPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Smart Scheduler - Zion Tech Group"
        description="Intelligent AI-powered scheduling solutions for optimal time management and resource allocation."
      />
=======
import { Helmet } from 'react-helmet-async';

export default function AiSmartSchedulerPage() {
  return (
    <>
      <Helmet>
        <title>AI Smart Scheduler - Zion Tech Group</title>
        <meta name="description" content="AI-powered smart scheduling solution for optimal time management and resource allocation." />
      </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">AI Smart Scheduler</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default AiSmartSchedulerPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
