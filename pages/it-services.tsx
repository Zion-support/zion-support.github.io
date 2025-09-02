import React from 'react';
import Head from 'next/head';
import { Network, Server, Shield, Cloud, Database, Monitor, Smartphone, Wifi, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function ITServices() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services for AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Multi-Cloud Strategy']
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Complete server administration, maintenance, and optimization for Windows and Linux environments.',
      features: ['Server Setup', 'Performance Tuning', 'Backup Solutions', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and threat monitoring services.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Round-the-clock technical support and helpdesk services to keep your business running smoothly.',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems are always running optimally.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Comprehensive security measures to protect your data and systems from cyber threats.'
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Experienced IT professionals with certifications in leading technologies and platforms.'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business, from startup to enterprise scale.'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Ansible', category: 'Automation' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Cache' }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current IT infrastructure, systems, and business requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a customized IT strategy aligned with your business goals and growth objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy and configure IT solutions with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Management',
      description: 'Ongoing monitoring, maintenance, and optimization to ensure peak performance and security.'
    }
  ];

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, network infrastructure, cybersecurity, and 24/7 technical support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-green-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Network className="h-8 w-8 text-green-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-green-600">IT Services</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive IT Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From cloud migration to cybersecurity, we provide end-to-end IT services to keep your business 
                running smoothly and securely. Our expert team ensures your technology infrastructure supports 
                your growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete IT solutions designed to support your business operations and growth
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the benefits of professional IT management and support
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to delivering reliable and efficient IT solutions
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We leverage industry-leading technologies to deliver robust and scalable IT solutions
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

        {/* Support Levels */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Levels</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the support level that best fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Support</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Business hours support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Email and phone support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Basic monitoring</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-gray-900 mb-2">$299/month</div>
                <div className="text-gray-600 text-sm">Perfect for small businesses</div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Support</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">24/7 support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Priority response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Advanced monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Monthly reports</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-gray-900 mb-2">$599/month</div>
                <div className="text-gray-600 text-sm">Ideal for growing businesses</div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">On-site support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Custom SLA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Strategic planning</span>
                  </li>
                </ul>
                <div className="text-2xl font-bold text-gray-900 mb-2">Custom Pricing</div>
                <div className="text-gray-600 text-sm">Tailored for large enterprises</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-green-600 to-emerald-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your efficiency, security, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get IT Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
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