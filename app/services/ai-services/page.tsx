import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  const services = [
    {
      title: 'Custom LLM Development',
      description: 'Build and deploy custom large language models tailored to your specific business needs.',
      features: ['Fine-tuned models', 'Custom training data', 'API integration', 'Performance optimization']
    },
    {
      title: 'RAG Systems',
      description: 'Retrieval-Augmented Generation systems that combine your data with AI for accurate responses.',
      features: ['Vector databases', 'Semantic search', 'Context-aware responses', 'Real-time updates']
    },
    {
      title: 'AI Agents',
      description: 'Intelligent agents that can perform complex tasks and interact with your systems autonomously.',
      features: ['Task automation', 'Multi-step workflows', 'Human-in-the-loop', 'Continuous learning']
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for various business applications.',
      features: ['Object detection', 'Image classification', 'Video analysis', 'Real-time processing']
    },
    {
      title: 'MLOps Solutions',
      description: 'Complete machine learning operations pipeline for model deployment and monitoring.',
      features: ['Model versioning', 'Automated deployment', 'Performance monitoring', 'A/B testing']
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on AI implementation and digital transformation initiatives.',
      features: ['AI strategy', 'Technology assessment', 'Implementation planning', 'Team training']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed for enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Our AI specialists have years of experience in machine learning and deep learning.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">We deliver AI solutions quickly without compromising on quality or performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Scalable</h3>
              <p className="text-gray-300">Enterprise-grade security and scalability built into every solution.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your AI needs and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}