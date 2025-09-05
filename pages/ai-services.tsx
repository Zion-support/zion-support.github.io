import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to customer emails with personalized, context-aware replies.',
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation'],
    pricing: '$500 - $2,000/month'
  },
  {
    title: 'Smart Document Analyzer',
    description: 'Extract insights and data from documents using advanced AI and machine learning.',
    features: ['Document Classification', 'Data Extraction', 'Content Analysis'],
    pricing: '$800 - $3,000/month'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Forecast business trends and outcomes using machine learning algorithms.',
    features: ['Time Series Analysis', 'Predictive Modeling', 'Risk Assessment'],
    pricing: '$1,200 - $5,000/month'
  }
];

export default function AIServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transform your business with cutting-edge artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}