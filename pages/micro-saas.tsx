import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Cost Guard (FinOps Assistant)',
      description: 'Intelligent anomaly detection, rightsizing recommendations, cost forecasting, and budget guardrails across AWS, Azure, and GCP.',
      features: ['Anomaly detection', 'Cost optimization', 'Budget alerts', 'Multi-cloud support', 'Forecasting'],
      pricing: '$299–$1,499/month'
    },
    {
      title: 'Customer Feedback & NPS Micro-App',
      description: 'Embedded survey system with sentiment analysis, automated issue routing, and comprehensive feedback management.',
      features: ['Embedded surveys', 'Sentiment analysis', 'Issue routing', 'NPS tracking', 'Analytics dashboard'],
      pricing: '$149–$799/month'
    },
    {
      title: 'LLM Evaluation & Safety Suite',
      description: 'Comprehensive evaluation platform for prompt testing, bias detection, toxicity checks, and safety policy enforcement.',
      features: ['Prompt evaluation', 'Bias detection', 'Toxicity screening', 'Safety policies', 'Performance metrics'],
      pricing: '$799–$3,500/month'
    },
    {
      title: 'Custom Micro SaaS Solutions',
      description: 'Tailored micro SaaS applications built to solve specific business problems with rapid deployment and scalability.',
      features: ['Custom development', 'Rapid deployment', 'Scalable architecture', 'API integration', 'Analytics'],
      pricing: 'Starting at $8,000'
    }
  ];

  return (
    <Layout title="Micro SaaS - Zion Tech Group" description="Specialized micro SaaS solutions to solve specific business challenges.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
          <p className="text-gray-600 mb-10 max-w-3xl text-lg">
            Focused, specialized software solutions that solve specific business problems. 
            Our micro SaaS products deliver targeted value with rapid deployment and easy integration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-600 font-semibold mb-4">{service.pricing}</div>
                <Link href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Your Micro SaaS</h2>
            <p className="text-gray-600 mb-6">
              Have a specific business problem? Let&apos;s build a targeted solution that delivers immediate value.
            </p>
            <Link href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicroSaaSPage;