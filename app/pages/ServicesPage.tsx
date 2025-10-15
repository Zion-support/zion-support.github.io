import React from 'react';
import SEOHead from '../components/SEOHead';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'AI-Powered Automation'
      ],
      link: '/ai-solutions',
      icon: '🤖'
    },
    {
      title: 'Micro-SaaS Development',
      description: 'Custom micro-SaaS applications tailored to your specific business needs and requirements.',
      features: [
        'Custom Web Applications',
        'API Development',
        'Database Design',
        'User Authentication',
        'Payment Integration',
        'Scalable Architecture'
      ],
      link: '/micro-saas-solutions',
      icon: '⚡'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and technical support.',
      features: [
        'Cloud Migration',
        'Infrastructure Management',
        'Network Security',
        'Data Backup & Recovery',
        'Technical Support',
        'System Monitoring'
      ],
      link: '/it-solutions',
      icon: '💻'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to support your business growth and digital transformation.',
      features: [
        'AWS/Azure/GCP Setup',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening'
      ],
      link: '/cloud-solutions',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure compliance.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Compliance Management',
        'Incident Response'
      ],
      link: '/cybersecurity',
      icon: '🔒'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations and processes.',
      features: [
        'Process Automation',
        'Legacy System Migration',
        'Workflow Optimization',
        'Change Management',
        'Training & Support',
        'Performance Monitoring'
      ],
      link: '/digital-transformation',
      icon: '🚀'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements and current systems to understand your needs.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project plan tailored to your goals.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team builds and implements the solution using cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest quality standards.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your solution and provide comprehensive training and documentation.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance and continuous improvement.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI solutions, micro-SaaS development, IT services, cloud infrastructure, and cybersecurity. Transform your business with our expert technology services."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth through innovation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-slate-800 p-8 rounded-lg mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
