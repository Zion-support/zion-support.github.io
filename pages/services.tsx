import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Code, Cloud, Shield, Database, Building2, Rocket, Factory, Network, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';

interface Service {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: React.ComponentType<any>;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

const services: Service[] = [
  {
    title: 'AI Services',
    description: '80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics',
    features: [
      'Machine Learning Model Development',
      'Computer Vision Solutions',
      'Natural Language Processing',
      'AI-Powered Automation',
      'Predictive Analytics',
      'Quantum AI Integration'
    ],
    pricing: 'Starting from $5k/month',
    icon: Brain
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, infrastructure management, and digital transformation',
    features: [
      'Cloud Migration & Management',
      'Cybersecurity Solutions',
      'DevOps & CI/CD',
      'Infrastructure as Code',
      'System Administration',
      'Network Security'
    ],
    pricing: 'Starting from $3k/month',
    icon: Code
  },
  {
    title: 'Micro SaaS Development',
    description: 'Custom micro SaaS applications tailored to your business needs with rapid deployment and scalable architecture',
    features: [
      'Custom SaaS Development',
      'API Integration',
      'User Management Systems',
      'Payment Processing',
      'Analytics Dashboard',
      'Multi-tenant Architecture'
    ],
    pricing: 'Starting from $10k project',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from threats with 24/7 monitoring and incident response',
    features: [
      'Security Assessment',
      'Penetration Testing',
      'Incident Response',
      'Security Training',
      'Compliance Management',
      'Threat Monitoring'
    ],
    pricing: 'Starting from $2k/month',
    icon: Shield
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure solutions optimized for performance, security, and cost-effectiveness',
    features: [
      'Cloud Architecture Design',
      'Migration Services',
      'Cost Optimization',
      'Security Implementation',
      'Monitoring & Alerting',
      'Disaster Recovery'
    ],
    pricing: 'Starting from $1.5k/month',
    icon: Database
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale business solutions designed to streamline operations and drive growth across your organization',
    features: [
      'Enterprise Architecture',
      'System Integration',
      'Process Automation',
      'Data Management',
      'Workflow Optimization',
      'Change Management'
    ],
    pricing: 'Starting from $15k/month',
    icon: Building2
  }
];

const benefits = [
  {
    title: 'Expert Team',
    description: '50+ certified professionals with years of experience',
    icon: Users
  },
  {
    title: 'Proven Results',
    description: '500+ successful projects delivered on time',
    icon: Award
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance',
    icon: CheckCircle
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business needs',
    icon: Rocket
  }
];

const contact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  site: 'https://ziontechgroup.com'
};

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our comprehensive range of AI services, IT solutions, and micro SaaS development. 350+ innovative services to transform your business."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SaaS, cloud computing, automation, machine learning, DevOps, cybersecurity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
      </Head>

      <ErrorBoundary>
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Our Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                From cutting-edge AI services to comprehensive IT solutions and
                specialized micro SaaS products, we provide everything your
                business needs to thrive in the digital age.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-blue-600 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We deliver exceptional results through our proven expertise and commitment to excellence.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts today to discuss your project requirements
                and discover how our innovative solutions can transform your
                business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
}