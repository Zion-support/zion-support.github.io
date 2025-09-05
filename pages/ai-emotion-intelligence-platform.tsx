import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIEmotionIntelligencePlatform: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Emotion Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Real-time emotion analysis and response for customer interactions" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Emotion Intelligence Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time emotion analysis and response for customer interactions powered by advanced AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Emotion Detection</h3>
            <p className="text-gray-600 mb-4">
              Analyze customer emotions in real-time across text, voice, and video interactions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Text sentiment analysis</li>
              <li>• Voice emotion recognition</li>
              <li>• Facial expression analysis</li>
              <li>• Multi-modal detection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Response Adaptation</h3>
            <p className="text-gray-600 mb-4">
              Automatically adapt responses and actions based on detected emotions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Tone adjustment</li>
              <li>• Escalation triggers</li>
              <li>• Response personalization</li>
              <li>• Context awareness</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Emotional Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track and analyze emotional trends to improve customer experience.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Emotion trend analysis</li>
              <li>• Customer satisfaction metrics</li>
              <li>• Agent performance insights</li>
              <li>• Experience optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Understand Customer Emotions</h2>
          <p className="text-lg text-gray-700 mb-6">
            Enhance customer interactions with AI-powered emotion intelligence and response adaptation.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700">
              Get Started
            </a>
            <a href="/about" className="border border-rose-600 text-rose-600 px-6 py-3 rounded-lg hover:bg-rose-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIEmotionIntelligencePlatform;