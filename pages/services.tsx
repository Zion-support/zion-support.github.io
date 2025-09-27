import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making',
        'Chatbot Development',
        'Data Mining & Analysis'
      ],
      pricing: 'Starting at $5,000/month',
      duration: '3-6 months'
    },
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your business needs.',
      features: [
        'AWS/Azure/GCP Migration',
        'Container Orchestration',
        'Serverless Architecture',
        'Database Optimization',
        'Security Implementation',
        '24/7 Monitoring'
      ],
      pricing: 'Starting at $3,000/month',
      duration: '2-4 months'
    },
    'digital-transformation': {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'Workflow Optimization',
        'Change Management',
        'Training & Support',
        'Performance Monitoring'
      ],
      pricing: 'Starting at $10,000/month',
      duration: '6-12 months'
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: [
        'Security Assessment',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        'Security Training',
        'Threat Monitoring'
      ],
      pricing: 'Starting at $4,000/month',
      duration: '2-3 months'
    },
    'data-analytics': {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Warehousing',
        'ETL Processes'
      ],
      pricing: 'Starting at $3,500/month',
      duration: '3-5 months'
    },
    'mobile-development': {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS/Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      pricing: 'Starting at $8,000/project',
      duration: '4-8 months'
    }
  };

  const handleServiceClick = (serviceId: string) => {
    trackClick('service_click', { service: serviceId });
  };

  return (
    <>
      <Head>
        <title>Our Services | Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI/ML, cloud infrastructure, digital transformation, cybersecurity, and more." />
        <meta name="keywords" content="AI services, cloud computing, digital transformation, cybersecurity, data analytics, mobile development" />
      </Head>
      
      <SEO
        title="Our Services - Zion Tech Solutions"
        description="Comprehensive technology services including AI/ML, cloud infrastructure, digital transformation, cybersecurity, and more."
        keywords={[
          'AI services',
          'cloud computing',
          'digital transformation',
          'cybersecurity',
          'data analytics',
          'mobile development',
          'technology consulting',
          'business automation'
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(serviceDetails).map(([id, service]) => (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="font-semibold text-gray-900">{service.duration}</span>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => handleServiceClick(id)}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block font-semibold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
              >
                Contact Us Today
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 border-2 border-white font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}