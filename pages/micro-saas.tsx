import React from 'react';
import Head from 'next/head';
import { Code, Zap, Users, BarChart3, Shield, Clock, CheckCircle, ArrowRight, Rocket, Database, Smartphone, Globe } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function MicroSaaS() {
  const services = [
    {
      icon: Code,
      title: 'Custom SaaS Development',
      description: 'Build tailored software-as-a-service solutions that address your specific business needs and workflows.',
      features: ['Custom Development', 'API Integration', 'User Management', 'Payment Processing']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quickly develop and test SaaS concepts with our rapid prototyping and MVP development services.',
      features: ['MVP Development', 'User Testing', 'Iterative Design', 'Fast Deployment']
    },
    {
      icon: Users,
      title: 'Multi-Tenant Architecture',
      description: 'Scalable multi-tenant solutions that efficiently serve multiple customers from a single platform.',
      features: ['Tenant Isolation', 'Scalable Infrastructure', 'Custom Branding', 'Data Security']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting features to help you understand user behavior and business metrics.',
      features: ['User Analytics', 'Business Intelligence', 'Custom Dashboards', 'Real-time Reports']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security features and compliance management for your SaaS application.',
      features: ['Data Encryption', 'Access Control', 'Audit Logs', 'GDPR Compliance']
    },
    {
      icon: Clock,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your SaaS application running smoothly.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization']
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Faster Time to Market',
      description: 'Launch your SaaS product quickly with our streamlined development process and proven frameworks.'
    },
    {
      icon: BarChart3,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise scale with automatic scaling capabilities.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces and user experiences that drive adoption and customer satisfaction.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance features to protect your data and your customers\' data.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'Auth0', category: 'Authentication' },
    { name: 'SendGrid', category: 'Email' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your business requirements, target audience, and define the scope of your SaaS solution.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create user experience designs and technical architecture for scalable, secure SaaS platform.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your SaaS application with rigorous testing and quality assurance at every step.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring, analytics, and launch support to ensure smooth rollout.'
    },
    {
      step: '05',
      title: 'Growth & Optimization',
      description: 'Monitor performance, gather user feedback, and continuously optimize for growth and success.'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Development - Zion Tech Group</title>
        <meta name="description" content="Build scalable micro SaaS solutions with custom development, rapid prototyping, and enterprise-grade security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-purple-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-purple-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-purple-600">Micro SaaS</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Build Scalable SaaS Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your ideas into profitable SaaS products with our comprehensive development services. 
                From concept to launch, we help you build, scale, and optimize software-as-a-service solutions 
                that drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our SaaS Development Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                End-to-end SaaS development solutions designed for success and scalability
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our SaaS Development?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the advantages of working with experienced SaaS development experts
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our SaaS Development Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A proven methodology to deliver successful SaaS products on time and within budget
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Modern technologies and frameworks for building robust, scalable SaaS applications
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-1">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Features */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential SaaS Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Core features that every successful SaaS application needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">User Management</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">User Registration & Login</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Role-Based Access Control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Profile Management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Analytics Dashboard</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Usage Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Performance Metrics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Custom Reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Security & Compliance</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Data Encryption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">GDPR Compliance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Audit Logs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-600 to-pink-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Build Your SaaS Product?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's turn your SaaS idea into a successful, scalable business with our expert development team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Your SaaS Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}