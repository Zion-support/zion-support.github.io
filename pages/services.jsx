import React, { useState } from 'react';
import SEO from '../components/SEO';
import Modal from '../components/Modal';
import Link from 'next/link';

interface Service {
  name: string;
  description: string;
  features: string[];
  pricing: string;
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Advanced AI solutions and machine learning implementations',
      services: [
        {
          name: 'Custom AI Model Development',
          description: 'Tailored machine learning models for your specific business needs',
          features: ['Data preprocessing', 'Model training', 'Performance optimization', 'Deployment'],
          pricing: 'Starting at $5,000'
        },
        {
          name: 'Natural Language Processing',
          description: 'Text analysis, sentiment analysis, and language understanding systems',
          features: ['Text classification', 'Sentiment analysis', 'Language translation', 'Chatbots'],
          pricing: 'Starting at $3,000'
        },
        {
          name: 'Computer Vision Solutions',
          description: 'Image recognition, object detection, and visual analysis systems',
          features: ['Image classification', 'Object detection', 'Facial recognition', 'Quality inspection'],
          pricing: 'Starting at $4,000'
        },
        {
          name: 'Predictive Analytics',
          description: 'Data-driven insights and forecasting for business optimization',
          features: ['Trend analysis', 'Risk assessment', 'Demand forecasting', 'Performance prediction'],
          pricing: 'Starting at $6,000'
        }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: '⚡',
      description: 'Comprehensive IT infrastructure and enterprise solutions',
      services: [
        {
          name: 'Cloud Infrastructure Setup',
          description: 'Scalable cloud architecture design and implementation',
          features: ['AWS/Azure/GCP setup', 'Auto-scaling', 'Load balancing', 'Monitoring'],
          pricing: 'Starting at $10,000'
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Automated deployment pipelines and infrastructure management',
          features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring', 'Security'],
          pricing: 'Starting at $8,000'
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Comprehensive security measures and threat protection',
          features: ['Security audits', 'Penetration testing', 'Compliance', 'Incident response'],
          pricing: 'Starting at $12,000'
        },
        {
          name: 'System Integration',
          description: 'Seamless integration of existing and new systems',
          features: ['API development', 'Data migration', 'Legacy system integration', 'Testing'],
          pricing: 'Starting at $7,000'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Development',
      icon: '🚀',
      description: 'Rapid prototyping and scalable SaaS platform development',
      services: [
        {
          name: 'MVP Development',
          description: 'Fast-track minimum viable product development',
          features: ['Rapid prototyping', 'User testing', 'Iterative development', 'Launch support'],
          pricing: 'Starting at $15,000'
        },
        {
          name: 'SaaS Platform Architecture',
          description: 'Scalable multi-tenant architecture design',
          features: ['Multi-tenancy', 'User management', 'Billing integration', 'Analytics'],
          pricing: 'Starting at $25,000'
        },
        {
          name: 'API Development',
          description: 'RESTful and GraphQL API development and documentation',
          features: ['REST/GraphQL APIs', 'Authentication', 'Rate limiting', 'Documentation'],
          pricing: 'Starting at $5,000'
        },
        {
          name: 'Mobile App Development',
          description: 'Cross-platform mobile applications',
          features: ['React Native/Flutter', 'iOS/Android', 'Push notifications', 'Offline support'],
          pricing: 'Starting at $12,000'
        }
      ]
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      icon: '💡',
      description: 'Strategic technology consulting and digital transformation',
      services: [
        {
          name: 'Digital Transformation Strategy',
          description: 'Comprehensive digital transformation roadmap',
          features: ['Technology assessment', 'Strategy development', 'Implementation plan', 'Change management'],
          pricing: 'Starting at $20,000'
        },
        {
          name: 'Technology Architecture Review',
          description: 'Comprehensive review and optimization of existing systems',
          features: ['Architecture audit', 'Performance analysis', 'Security review', 'Recommendations'],
          pricing: 'Starting at $8,000'
        },
        {
          name: 'AI Strategy & Implementation',
          description: 'AI adoption strategy and implementation guidance',
          features: ['AI readiness assessment', 'Use case identification', 'Implementation roadmap', 'Training'],
          pricing: 'Starting at $15,000'
        },
        {
          name: 'Data Strategy & Analytics',
          description: 'Data-driven decision making and analytics implementation',
          features: ['Data audit', 'Analytics strategy', 'Dashboard development', 'Training'],
          pricing: 'Starting at $10,000'
        }
      ]
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div>
      <SEO
        title="Our Services - AI, IT & Micro SaaS Solutions"
        description="Comprehensive AI solutions, enterprise IT services, micro SaaS development, and technology consulting. Expert solutions for your business needs."
        keywords="AI services, IT solutions, micro SaaS, technology consulting, machine learning, cloud infrastructure, DevOps"
        canonical="https://ziontechgroup.com/services"
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-white font-semibold">Services</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Technology
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI and machine learning to enterprise IT infrastructure and micro SaaS development, 
              we provide end-to-end technology solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Explore Services
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                Get Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive technology solutions across four main categories, 
                each designed to address specific business needs and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleServiceClick(service)}
                        className="block w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <div className="font-semibold text-sm">{service.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{service.pricing}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and discover how our technology solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Free Consultation
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Service Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.name}
        size="lg"
      >
        {selectedService && (
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {selectedService.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pricing:</h4>
              <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">
                {selectedService.pricing}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Quote
              </a>
              <a
                href="tel:+13024640950"
                className="flex-1 border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}