import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Shield, Database, Smartphone, Globe, Code, Server, BarChart3 } from 'lucide-react';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud DevOps & SRE',
      description: 'Complete cloud infrastructure management with CI/CD pipelines, infrastructure as code, and site reliability engineering.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring, logging, and alerting systems',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup strategies'
      ],
      pricing: '$120 – $220/hour',
      projectPricing: '$6000 – $30,000/project',
      timeline: '2–8 weeks',
      benefits: [
        '99.9% uptime guarantee',
        'Automated deployment processes',
        'Reduced infrastructure costs',
        'Improved system reliability'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5000 – $40,000/project',
      projectPricing: '$5000 – $40,000/project',
      timeline: '4–12 weeks',
      benefits: [
        '100% compliance coverage',
        'Proactive threat detection',
        'Reduced security incidents',
        'Enhanced security posture'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Database Architecture & Optimization',
      description: 'Database design, migration, optimization, and management for high-performance, scalable applications.',
      features: [
        'Database design and architecture',
        'Migration and data transformation',
        'Performance tuning and optimization',
        'Backup and disaster recovery',
        'Database monitoring and maintenance',
        'Cloud database management'
      ],
      pricing: '$100 – $180/hour',
      projectPricing: '$3000 – $25,000/project',
      timeline: '2–6 weeks',
      benefits: [
        '50% improvement in query performance',
        'Automated backup and recovery',
        'Reduced database costs',
        'Enhanced data security'
      ],
      category: 'Data Management'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android platforms.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store deployment and management',
        'Performance optimization and testing',
        'Backend integration and APIs'
      ],
      pricing: '$80 – $150/hour',
      projectPricing: '$5000 – $50,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Native performance and user experience',
        'Cross-platform compatibility',
        'App store optimization',
        'Scalable architecture'
      ],
      category: 'Mobile Development'
    },
    {
      icon: Globe,
      name: 'Web Development & E-commerce',
      description: 'Custom web applications, e-commerce platforms, and digital solutions for modern businesses.',
      features: [
        'Custom web application development',
        'E-commerce platform development',
        'Content management systems',
        'API development and integration',
        'Performance optimization',
        'SEO and digital marketing integration'
      ],
      pricing: '$60 – $120/hour',
      projectPricing: '$2000 – $40,000/project',
      timeline: '2–12 weeks',
      benefits: [
        'Modern, responsive design',
        'SEO-optimized performance',
        'Scalable architecture',
        'Integrated payment processing'
      ],
      category: 'Web Development'
    },
    {
      icon: Code,
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development, third-party integrations, and microservices architecture.',
      features: [
        'RESTful and GraphQL API development',
        'Third-party service integration',
        'Microservices architecture',
        'API documentation and testing',
        'Rate limiting and security',
        'API monitoring and analytics'
      ],
      pricing: '$80 – $140/hour',
      projectPricing: '$3000 – $20,000/project',
      timeline: '2–8 weeks',
      benefits: [
        'Scalable API architecture',
        'Comprehensive documentation',
        'Security and rate limiting',
        'Real-time monitoring'
      ],
      category: 'API Development'
    }
  ];

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group | Cloud, Security & Development Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud DevOps, cybersecurity, database optimization, mobile development, and web solutions. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud DevOps, cybersecurity, database optimization, mobile development, web development, API development" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
        <meta property="og:title" content="IT Services - Zion Tech Group | Cloud, Security & Development Solutions" />
        <meta property="og:description" content="Comprehensive IT services including cloud DevOps, cybersecurity, and development solutions." />
        <meta property="og:url" content={`${contact.site}/it-services`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your technology infrastructure with our comprehensive IT services. From cloud DevOps to cybersecurity, we deliver enterprise-grade solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get IT Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, our IT services cover every aspect of modern technology needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Hourly Rate</p>
                        <p className="font-semibold text-gray-900">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Timeline</p>
                        <p className="font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your IT projects are delivered on time and within budget.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Assessment</h3>
                <p className="text-gray-600">We analyze your current infrastructure and identify improvement opportunities.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Planning</h3>
                <p className="text-gray-600">We create a detailed project plan with timelines and milestones.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Implementation</h3>
                <p className="text-gray-600">We implement the solution with minimal disruption to your operations.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Support</h3>
                <p className="text-gray-600">We provide ongoing support and maintenance to ensure optimal performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8">
              Let our IT experts help you build a robust, scalable, and secure technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule IT Consultation
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}