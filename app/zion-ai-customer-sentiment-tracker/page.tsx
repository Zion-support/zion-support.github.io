import React from 'react';
import { Link } from 'react-router-dom';
export default function ZionAICustomerSentimentTracker() {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="AI-powered customer sentiment analysis and tracking solution. Monitor customer emotions, feedback, and satisfaction in real-time." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Customer Sentiment Tracker
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered customer sentiment analysis and tracking solution that monitors customer emotions, feedback, and satisfaction in real-time.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Analysis</h3>
              <p className="text-gray-300">Monitor customer sentiment across all channels in real-time.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Emotion Detection</h3>
              <p className="text-gray-300">Advanced AI detects emotions from text, voice, and visual cues.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Actionable Insights</h3>
              <p className="text-gray-300">Get actionable insights to improve customer experience.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}