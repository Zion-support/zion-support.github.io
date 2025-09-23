import Link from 'next/link';
import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import SEO from '../../components/SEO';

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>On-device perception with quantized multimodal models</li>
              <li>Local planning and policy optimization</li>
              <li>Safe actuation with guardrails and fallbacks</li>
              <li>Federated learning for continuous improvement</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reference Architecture</h2>
            <p className="text-gray-700 mb-8">Edge device inference stack, local memory, safety sandboxing, and cloud coordination for fleet management.</p>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Deploy Edge Agents Confidently</h3>
              <p className="text-lg mb-6 opacity-90">We help design, benchmark, and scale edge-native autonomy with safety and reliability.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/ai-automation" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Explore Services</Link>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">Schedule Consultation</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </ErrorBoundary>
  );
}

import React from 'react';
export const metadata = {
  title: 'Edge AI Agents: Real-Time Autonomy',
  description: 'How edge-native agents enable ultra-low-latency decisioning at the edge.'
};

export default function EdgeAIAgents2026() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Edge AI Agents: Real-Time Autonomy</h1>
      <p className="text-gray-600 mb-8">
        Discover how edge AI agents combine on-device inference, event streaming, and local control loops to act instantly where data originates.
      </p>
      <section className="prose max-w-none">
        <h2>Key Capabilities</h2>
        <ul>
          <li>Sub-50ms decisioning with quantized models</li>
          <li>Offline resilience and seamless cloud sync</li>
          <li>Privacy-by-design with local data processing</li>
        </ul>
        <h2>Use Cases</h2>
        <p>
          From industrial automation and smart retail to autonomous robotics, edge agents deliver reliability and speed for mission-critical operations.
        </p>
      </section>
    </main>
  );
}

