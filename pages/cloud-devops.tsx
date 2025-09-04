import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Server, Database, Shield, Zap, Users } from 'lucide-react';

export default function CloudDevOps() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: 'https://ziontechgroup.com'
  };

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized cost structures.',
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security compliance', 'Performance monitoring']
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure deployment using Terraform, CloudFormation, and Kubernetes.',
      features: ['Terraform automation', 'Kubernetes orchestration', 'CI/CD pipelines', 'Infrastructure monitoring']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database solutions including migration, optimization, and backup strategies.',
      features: ['Database migration', 'Performance tuning', 'Backup & recovery', 'Security hardening']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation and compliance management across cloud environments.',
      features: ['Security audits', 'Compliance frameworks', 'Access management', 'Threat detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Advanced monitoring and optimization to ensure peak performance and cost efficiency.',
      features: ['Performance monitoring', 'Cost optimization', 'Auto-scaling', 'Load balancing']
    },
    {
      icon: Users,
      title: 'DevOps Consulting',
      description: 'Expert guidance on DevOps best practices, team training, and process optimization.',
      features: ['Process optimization', 'Team training', 'Tool selection', 'Best practices']
    }
  ];

  return (
    <>
      <Head>
        <title>Cloud DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud DevOps services including migration, infrastructure as code, and performance optimization." />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-devops" />
      </Head>
      
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Cloud DevOps Services
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your infrastructure with our comprehensive cloud DevOps solutions. 
                From migration to optimization, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Get Started
                </Link>
                <Link href="/services" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud DevOps Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cloud infrastructure and DevOps services designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you build a robust, scalable, and secure cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}