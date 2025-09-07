import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Research & Innovation | Zion Tech Group',
  description: 'Explore our cutting-edge research in AI, machine learning, and emerging technologies that drive innovation.',
  keywords: 'research, innovation, AI, machine learning, technology, patents, development',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Research & Innovation | Zion Tech Group',
    description: 'Explore our cutting-edge research in AI, machine learning, and emerging technologies that drive innovation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
}
export default function ResearchPage() {
  const researchAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Advanced AI algorithms and machine learning models for enterprise applications',
      icon: '🤖',
      metrics: [
        { metric: 'AI Models Deployed', value: '50+', description: 'Production-ready AI solutions' },
        { metric: 'Accuracy Rate', value: '99.2%', description: 'Average model performance' },
        { metric: 'Processing Speed', value: '10x', description: 'Faster than traditional methods' }
      ]
    },
    {
      title: 'Machine Learning',
      description: 'Cutting-edge ML techniques for predictive analytics and automation',
      icon: '🧠',
      metrics: [
        { metric: 'Data Points Processed', value: '1B+', description: 'Daily data processing capacity' },
        { metric: 'Prediction Accuracy', value: '98.5%', description: 'Average prediction accuracy' },
        { metric: 'Model Training Time', value: '50%', description: 'Reduced training time' }
      ]
    },
    {
      title: 'Blockchain Technology',
      description: 'Decentralized solutions and smart contract development',
      icon: '⛓️',
      metrics: [
        { metric: 'Transactions/sec', value: '10K+', description: 'High-throughput processing' },
        { metric: 'Security Score', value: '100%', description: 'Zero security breaches' },
        { metric: 'Energy Efficiency', value: '75%', description: 'Reduced energy consumption' }
      ]
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and microservices architecture',
      icon: '☁️',
      metrics: [
        { metric: 'Uptime', value: '99.9%', description: 'Service availability' },
        { metric: 'Scalability', value: '100x', description: 'Auto-scaling capability' },
        { metric: 'Cost Reduction', value: '40%', description: 'Infrastructure cost savings' }
      ]
    }
  ];
  
  const publications = [
    {
      title: 'Advanced Neural Networks for Enterprise Applications',
      authors: 'Zion Tech Research Team',
      journal: 'Journal of AI Engineering',
      year: '2024',
      impact: 'High'
    },
    {
      title: 'Scalable Microservices Architecture Patterns',
      authors: 'Zion Tech Research Team',
      journal: 'IEEE Software',
      year: '2024',
      impact: 'Medium'
    },
    {
      title: 'Blockchain Security in Enterprise Environments',
      authors: 'Zion Tech Research Team',
      journal: 'Computer Security Review',
      year: '2023',
      impact: 'High'
    }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of technology through cutting-edge research and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our research spans multiple cutting-edge technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">{area.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {area.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">{metric.metric}</div>
                      <div className="text-xs text-gray-500">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our research contributions to the scientific community
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-sm text-gray-500">{pub.journal} • {pub.year}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      pub.impact === 'High'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pub.impact} Impact
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Innovation Metrics
            </h2>
            <p className="text-xl text-blue-100">
              Our commitment to advancing technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$2M+</div>
              <div className="text-blue-100">R&D Investment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Collaborate with Us
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in partnering with our research team? Let's explore opportunities
            for collaboration and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Research Team
            </a>
            <a
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}