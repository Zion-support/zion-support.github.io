import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services - Comprehensive Artificial Intelligence Solutions | Zion Tech Group',
  description: 'Discover our comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions for your business.',
  keywords: 'AI services, machine learning, artificial intelligence, NLP, computer vision, AI consulting, custom AI solutions',
  openGraph: {
    title: 'AI Services - Comprehensive Artificial Intelligence Solutions',
    description: 'Discover our comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions.',
    type: 'website',
  },
};

export default function AIServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive artificial intelligence solutions designed to transform your business operations and drive unprecedented growth.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Machine Learning</h3>
              <p className="text-gray-300 mb-6 text-center">
                Custom machine learning models tailored to your specific business needs and data requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Predictive Analytics</li>
                <li>• Classification Models</li>
                <li>• Regression Analysis</li>
                <li>• Clustering Solutions</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400 mb-2">Starting at $1,500/month</div>
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">💬</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6 text-center">
                Advanced NLP solutions for text analysis, sentiment analysis, and automated content generation.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Text Classification</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
                <li>• Chatbot Development</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-pink-400 mb-2">Starting at $999/month</div>
                <Link href="/contact" className="text-pink-400 hover:text-pink-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">👁️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Computer Vision</h3>
              <p className="text-gray-300 mb-6 text-center">
                Image and video analysis solutions for object detection, recognition, and automated visual processing.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Object Detection</li>
                <li>• Image Classification</li>
                <li>• Facial Recognition</li>
                <li>• Video Analytics</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400 mb-2">Starting at $1,299/month</div>
                <Link href="/contact" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Automation</h3>
              <p className="text-gray-300 mb-6 text-center">
                Intelligent automation solutions that streamline business processes and reduce manual workload.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Process Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Decision Support Systems</li>
                <li>• Intelligent Document Processing</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400 mb-2">Starting at $399/month</div>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Data Analytics</h3>
              <p className="text-gray-300 mb-6 text-center">
                Advanced analytics solutions that extract insights from your data using artificial intelligence.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Predictive Analytics</li>
                <li>• Anomaly Detection</li>
                <li>• Pattern Recognition</li>
                <li>• Real-time Insights</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400 mb-2">Starting at $799/month</div>
                <Link href="/contact" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Cybersecurity</h3>
              <p className="text-gray-300 mb-6 text-center">
                AI-powered security solutions that protect your systems and data from evolving cyber threats.
              </p>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>• Threat Detection</li>
                <li>• Fraud Prevention</li>
                <li>• Security Monitoring</li>
                <li>• Incident Response</li>
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-red-400 mb-2">Starting at $1,199/month</div>
                <Link href="/contact" className="text-red-400 hover:text-red-300 font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-200">$50M+ in annual savings delivered to our clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-200">Get your AI solutions up and running in weeks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-200">Bank-level security and compliance standards</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of AI experts is ready to help you implement cutting-edge artificial intelligence solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}