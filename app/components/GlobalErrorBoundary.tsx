'use client';
import { CheckCircle } from 'lucide-react';
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, Check } from 'lucide-react';;
=======
>>>>>>> origin/main

const GlobalErrorBoundary: React.FC = () => {
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              {benefit}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
          >
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalErrorBoundary;
