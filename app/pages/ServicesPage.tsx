import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Shield, Zap, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services to automate and optimize your business processes.',
      features: [
        'AI Chatbot Development',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Intelligent Automation'
      ],
      pricing: 'Starting at $5,000'
    },
    {
      icon: Cpu,
      title: '5G Technology',
      description: 'Cutting-edge 5G solutions for ultra-fast connectivity and IoT implementations.',
      features: [
        '5G Network Infrastructure',
        'IoT Device Management',
        'Edge Computing Solutions',
        'Mobile Application Development',
        'Real-time Data Processing',
        'Network Optimization'
      ],
      pricing: 'Starting at $25,000'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: [
        'Security Audits & Assessments',
        'Threat Detection & Response',
        'Data Protection & Encryption',
        'Compliance Management',
        'Security Training',
        '24/7 Monitoring'
      ],
      pricing: 'Starting at $3,000'
    },
    {
      icon: Zap,
      title: 'Micro SaaS',
      description: 'Scalable micro-SaaS solutions designed for modern business needs.',
      features: [
        'Custom SaaS Development',
        'API Integration Services',
        'Cloud Infrastructure Setup',
        'Scalable Architecture Design',
        'User Management Systems',
        'Payment Integration'
      ],
      pricing: 'Starting at $10,000'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services for scalable and reliable business operations.',
      features: [
        'Cloud Migration Services',
        'Multi-cloud Strategy',
        'DevOps Implementation',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Cloud Security'
      ],
      pricing: 'Starting at $8,000'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert technology consulting to guide your digital transformation journey.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Technology Assessment',
        'Implementation Planning',
        'Ongoing Support'
      ],
      pricing: 'Starting at $2,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and current technology stack to understand your requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive technology strategy tailored to your business goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with regular updates and quality assurance.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, 5G, Cybersecurity & Micro-SaaS Solutions</title>
        <meta name="description" content="Explore our comprehensive AI, 5G technology, cybersecurity, and micro-SaaS services. Custom solutions designed to accelerate your business growth and digital transformation." />
        <meta name="keywords" content="AI services, 5G solutions, cybersecurity services, micro-SaaS development, cloud solutions, technology consulting, digital transformation" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive AI, 5G technology, cybersecurity, and micro-SaaS services for businesses." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and drive digital transformation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 inline" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}