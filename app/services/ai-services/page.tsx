import React from 'react';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including machine learning, NLP, computer vision, and autonomous systems.',
  keywords: 'AI services, machine learning, NLP, computer vision, autonomous systems, AI consulting',
};

export default function AIServicesPage() {
  const services = [
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models tailored to your specific business needs and data',
      features: ['Custom Model Architecture', 'Data Preprocessing', 'Model Training & Validation', 'Performance Optimization'],
      pricing: 'Starting at $5,000'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
      features: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition', 'Language Translation'],
      pricing: 'Starting at $3,500'
    },
    {
      title: 'Computer Vision & Image Recognition',
      description: 'Visual AI solutions for image analysis, object detection, and visual understanding',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Visual Search'],
      pricing: 'Starting at $4,500'
    },
    {
      title: 'Autonomous Systems Development',
      description: 'AI-powered autonomous systems for automation and decision-making',
      features: ['Autonomous Agents', 'Decision Making Systems', 'Process Automation', 'Self-Learning Systems'],
      pricing: 'Starting at $15,000'
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and business intelligence powered by AI',
      features: ['Predictive Analytics', 'Data Visualization', 'Automated Reporting', 'Insight Generation'],
      pricing: 'Starting at $7,500'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI consulting to help you plan and implement AI initiatives',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Team Training'],
      pricing: 'Starting at $2,500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Services
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions to transform your business with cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning to autonomous systems, we provide end-to-end AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 font-medium">Starting at:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Implement AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}