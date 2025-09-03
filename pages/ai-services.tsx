import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Customer Support Automation',
      description: 'Intelligent chatbots, automated triage, knowledge mining, and human-in-the-loop escalation systems.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Escalation management'],
      pricing: '$2k–$8k setup, $0.02–$0.2/session'
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced time-series forecasting for demand, revenue, churn prediction, and supply chain optimization.',
      features: ['Machine learning models', 'Real-time predictions', 'Custom dashboards', 'API integration'],
      pricing: '$4k–$20k project'
    },
    {
      title: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, editorial-quality drafts, SEO optimization, and content strategy.',
      features: ['Content generation', 'SEO optimization', 'Brand voice consistency', 'Content scheduling'],
      pricing: '$1k–$6k/month'
    },
    {
      title: 'LLM Evaluation & Safety Suite',
      description: 'Comprehensive evaluation tools for prompt testing, bias detection, toxicity checks, and safety guardrails.',
      features: ['Prompt evaluation', 'Bias detection', 'Toxicity screening', 'Safety policies'],
      pricing: '$799–$3,500/month'
    }
  ];

  return (
    <Layout title="AI Services - Zion Tech Group" description="Advanced AI and machine learning services to transform your business operations.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-gray-600 mb-10 max-w-3xl text-lg">
            Transform your business with cutting-edge AI solutions. From customer support automation 
            to predictive analytics, we help you harness the power of artificial intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{service.pricing}</div>
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how AI can transform your business operations and drive growth.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServicesPage;