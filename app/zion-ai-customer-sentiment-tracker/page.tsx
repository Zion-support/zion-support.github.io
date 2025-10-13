import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAiCustomerSentimentTrackerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered customer sentiment tracking solution by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Zion AI Customer Sentiment Tracker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered customer sentiment tracking solution designed to help your business understand customer emotions and feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZionAiCustomerSentimentTrackerPage;