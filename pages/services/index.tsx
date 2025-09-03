import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../../src/components/header/ModernHeader';
import { SimpleFooter } from '../../src/components/layout/SimpleFooter';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  Server,
  Lock,
  BarChart3
} from 'lucide-react';

export default function ServicesIndex() {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations',
      href: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Scalable cloud infrastructure and managed services for modern businesses',
      href: '/cloud-platforms',
      features: ['AWS Solutions', 'Azure Migration', 'Google Cloud', 'Multi-Cloud Strategy']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance',
      href: '/cybersecurity',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms',
      href: '/data-analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics']
    },
    {
      icon: Server,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure management and support services',
      href: '/it-services',
      features: ['Infrastructure Management', 'System Administration', 'Network Security', 'Technical Support']
    },
    {
      icon: Code,
      title: 'Micro SaaS',
      description: 'Custom software solutions and digital transformation services',
      href: '/micro-saas',
      features: ['Custom Development', 'API Integration', 'Mobile Apps', 'Web Applications']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Award }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We analyze your needs and create a comprehensive project plan'
    },
    {
      step: '2',
      title: 'Design & Development',
      description: 'Our expert team designs and develops your solution'
    },
    {
      step: '3',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance'
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud platforms, cybersecurity, data analytics, IT services, and custom software development." />
        <meta name="keywords" content="services, AI services, cloud platforms, cybersecurity, data analytics, IT services, software development" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions to accelerate your business growth and digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600 mr-2" />
                    <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end technology solutions designed to meet your unique business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}