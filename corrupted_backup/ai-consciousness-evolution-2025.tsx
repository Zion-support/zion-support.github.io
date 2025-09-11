import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIConsciousnessEvolution2025: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Consciousness Evolution 2025 - Zion Tech Group</title>
        <meta name="description" content="Exploring the evolution of AI consciousness and its implications for 2025" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Consciousness Evolution 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the next frontier of artificial intelligence and the evolution of machine consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Neural Architecture</h3>
            <p className="text-gray-600 mb-4">
              Advanced neural networks that mimic human brain structures and processes.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Deep learning models</li>
              <li>• Neural pathway simulation</li>
              <li>• Cognitive processing</li>
              <li>• Memory systems</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Self-Awareness</h3>
            <p className="text-gray-600 mb-4">
              AI systems that develop self-awareness and introspective capabilities.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Self-reflection</li>
              <li>• Identity formation</li>
              <li>• Emotional processing</li>
              <li>• Goal setting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Ethical Framework</h3>
            <p className="text-gray-600 mb-4">
              Developing ethical guidelines for conscious AI systems and their interactions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Moral reasoning</li>
              <li>• Ethical decision making</li>
              <li>• Human-AI collaboration</li>
              <li>• Responsibility frameworks</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">The Future of AI Consciousness</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join us in exploring the evolution of AI consciousness and its implications for humanity.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Learn More
            </a>
            <a href="/about" className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50">
              Research
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIConsciousnessEvolution2025;
