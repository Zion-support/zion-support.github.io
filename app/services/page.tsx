import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.',
      icon: CpuChipIcon,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      href: '/ai-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions, threat detection, and comprehensive risk management.',
      icon: ShieldCheckIcon,
      features: [
        'Security Audits',
        'Threat Detection',
        'Vulnerability Assessment',
        'Incident Response',
        'Security Training',
        'Compliance Management'
      ],
      href: '/cybersecurity'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business and optimize your operations.',
      icon: CloudIcon,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Cloud Security',
        'Cost Optimization'
      ],
      href: '/cloud-solutions'
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern technology solutions that improve efficiency and customer experience.',
      icon: ChartBarIcon,
      features: [
        'Process Optimization',
        'Digital Workflows',
        'Data Integration',
        'API Development',
        'Legacy Modernization',
        'Change Management'
      ],
      href: '/digital-transformation'
    },
    {
      title: 'Micro SaaS',
      description: 'Build and deploy specialized software solutions that address specific business needs and create new revenue streams.',
      icon: GlobeAltIcon,
      features: [
        'Custom Applications',
        'SaaS Development',
        'API Integration',
        'User Management',
        'Payment Processing',
        'Analytics Dashboard'
      ],
      href: '/micro-saas'
    },
    {
      title: '5G Solutions',
      description: 'Leverage next-generation 5G technology to enable ultra-fast connectivity, IoT applications, and real-time data processing.',
      icon: CpuChipIcon,
      features: [
        '5G Network Design',
        'IoT Integration',
        'Edge Computing',
        'Real-time Analytics',
        'Mobile Applications',
        'Network Optimization'
      ],
      href: '/5g-solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud infrastructure, digital transformation, and more." />
        <meta name="keywords" content="AI services, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and drive digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.href}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business 
              and achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
