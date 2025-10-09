import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quick Start Guide - Zion Tech Group Documentation',
  description: 'Get started with Zion Tech Group AI services quickly with our comprehensive quick start guide. Learn how to integrate our APIs and services.',
  keywords: 'quick start, documentation, API guide, getting started, Zion Tech Group, AI services',
  openGraph: {
    title: 'Quick Start Guide - Zion Tech Group Documentation',
    description: 'Get started with Zion Tech Group AI services quickly with our comprehensive quick start guide.',
    type: 'website',
  },
};

export default function QuickStartGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Quick Start Guide
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get up and running with Zion Tech Group AI services in minutes. This guide will help you integrate our APIs and start building intelligent applications.
            </p>
          </header>

          <div className="space-y-12">
            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">1. Get Your API Key</h2>
              <p className="text-gray-300 mb-6">
                First, you'll need to obtain an API key to access our services. Sign up for a free account to get started.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <pre className="text-green-400 text-sm">
{`# Sign up for an account
curl -X POST https://api.ziontechgroup.com/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your-email@example.com",
    "password": "your-password",
    "company": "Your Company"
  }'`}
                </pre>
              </div>
              <Link 
                href="/contact" 
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get API Key
              </Link>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. Install the SDK</h2>
              <p className="text-gray-300 mb-6">
                Install our official SDK for your preferred programming language to get started quickly.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Python</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`pip install zion-ai-sdk

# Or with conda
conda install -c ziontechgroup zion-ai-sdk`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">JavaScript/Node.js</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`npm install @ziontechgroup/ai-sdk

# Or with yarn
yarn add @ziontechgroup/ai-sdk`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Java</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`<dependency>
  <groupId>com.ziontechgroup</groupId>
  <artifactId>ai-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">3. Your First API Call</h2>
              <p className="text-gray-300 mb-6">
                Here's a simple example of how to make your first API call to our text analysis service.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Python Example</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`from zion_ai import Client

# Initialize the client
client = Client(api_key="your-api-key")

# Analyze text sentiment
result = client.text_analysis.analyze_sentiment(
    text="I love using Zion Tech Group's AI services!"
)

print(f"Sentiment: {result.sentiment}")
print(f"Confidence: {result.confidence}")`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">JavaScript Example</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-green-400 text-sm">
{`const { Client } = require('@ziontechgroup/ai-sdk');

// Initialize the client
const client = new Client('your-api-key');

// Analyze text sentiment
async function analyzeText() {
  const result = await client.textAnalysis.analyzeSentiment(
    'I love using Zion Tech Group\'s AI services!'
  );
  
  console.log('Sentiment:', result.sentiment);
  console.log('Confidence:', result.confidence);
}

analyzeText();`}
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Available Services</h2>
              <p className="text-gray-300 mb-6">
                Explore our comprehensive suite of AI services and choose the ones that best fit your needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Text Analysis</h3>
                  <p className="text-gray-300 text-sm mb-3">Sentiment analysis, language detection, and text classification</p>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 text-sm">
                    Learn More →
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
                  <p className="text-gray-300 text-sm mb-3">Image analysis, object detection, and visual recognition</p>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 text-sm">
                    Learn More →
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                  <p className="text-gray-300 text-sm mb-3">Custom models, predictive analytics, and data insights</p>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 text-sm">
                    Learn More →
                  </Link>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
                  <p className="text-gray-300 text-sm mb-3">Process automation and intelligent workflow optimization</p>
                  <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </section>

            <section className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Next Steps</h2>
              <p className="text-gray-300 mb-6">
                Now that you have the basics, here are some recommended next steps to get the most out of our services.
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Explore our <Link href="/docs/api" className="text-purple-400 hover:text-purple-300">API documentation</Link> for detailed endpoint information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Check out our <Link href="/case-studies" className="text-purple-400 hover:text-purple-300">case studies</Link> to see real-world implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Join our <Link href="/contact" className="text-purple-400 hover:text-purple-300">developer community</Link> for support and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Schedule a <Link href="/contact" className="text-purple-400 hover:text-purple-300">consultation</Link> with our AI experts</span>
                </li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h2>
              <p className="text-gray-200 mb-6">
                Our team of experts is here to help you succeed. Get personalized assistance with your implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Support
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}