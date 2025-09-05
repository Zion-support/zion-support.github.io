import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight } from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions for scalable and secure infrastructure.',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    price: 'Starting at $3,000/month'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your digital assets.',
    icon: Shield,
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
    price: 'Starting at $2,500/month'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development and deployment with modern DevOps practices.',
    icon: Code,
    features: ['Automated Testing', 'Continuous Integration', 'Container Orchestration', 'Monitoring'],
    price: 'Starting at $4,000/month'
  },
  {
    title: 'Database Management',
    description: 'Optimize and maintain your database infrastructure for peak performance.',
    icon: Server,
    features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
    price: 'Starting at $2,000/month'
  }
];

export default function ITServices() {
  return (
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and DevOps solutions." />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                IT <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive IT solutions to power your business
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From cloud infrastructure to cybersecurity, we provide the technology foundation your business needs to thrive.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to keep your business running smoothly and securely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's work together to build a robust, secure, and scalable IT foundation for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}