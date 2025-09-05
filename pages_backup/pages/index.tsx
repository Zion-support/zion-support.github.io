import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Brain, Server, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Transform your business with intelligent automation and data-driven insights.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions tailored to your business needs.',
    features: ['Cloud Migration', 'DevOps & CI/CD', 'Container Orchestration', 'Auto-scaling']
  },
  {
    icon: Zap,
    title: 'Micro SaaS Solutions',
    description: 'Custom software-as-a-service applications that drive growth and efficiency.',
    features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'User Management']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cloud services, and technology consulting. Transform your business with innovative technology." />
        <meta name="keywords" content="AI solutions, cloud services, technology consulting, software development, cybersecurity" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-300">AI Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Leading provider of AI solutions, cloud services, and technology consulting
              </p>
              <p className="text-lg mb-8 text-gray-300">
                We help businesses harness the power of artificial intelligence and cutting-edge technology to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
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

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Learn More
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's work together to create innovative solutions that drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Started
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