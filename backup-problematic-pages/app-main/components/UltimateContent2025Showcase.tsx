import React from 'react';
import Link from 'next/link';

const UltimateContent2025Showcase: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-4">
              Streamline your operations with intelligent automation that reduces costs by 60% and increases productivity by 300%.
            </p>
            <Link href="/automation" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 mb-4">
              Transform your data into actionable insights with our AI-powered analytics platform.
            </p>
            <Link href="/analytics" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
            <p className="text-gray-300 mb-4">
              Experience the power of quantum computing combined with artificial intelligence.
            </p>
            <Link href="/ai-2026" className="text-blue-400 hover:text-blue-300 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
  };

export default UltimateContent2025Showcase;