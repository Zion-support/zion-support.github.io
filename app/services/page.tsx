import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Services & Solutions",
      description: "Advanced artificial intelligence solutions including machine learning, deep learning, and AI automation.",
      icon: "🤖",
      href: "/services/ai-services",
      features: [
        "Machine Learning Models",
        "Deep Learning Systems", 
        "AI Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Scalable software-as-a-service applications designed for rapid deployment and growth.",
      icon: "⚡",
      href: "/services/micro-saas",
      features: [
        "Rapid Development",
        "Scalable Architecture",
        "Cloud-Native Design",
        "API-First Approach",
        "Multi-tenant Systems",
        "Subscription Management"
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive IT infrastructure, cloud migration, and DevOps services.",
      icon: "☁️",
      href: "/services/it-services",
      features: [
        "Cloud Migration",
        "DevOps & SRE",
        "Infrastructure Management",
        "Security & Compliance",
        "System Integration",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "End-to-end cloud architecture and migration services for modern businesses.",
      icon: "🌩️",
      href: "/services/cloud-solutions",
      features: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "Cost Optimization",
        "Disaster Recovery",
        "Cloud Security",
        "Multi-cloud Strategies"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      icon: "🔒",
      href: "/services/cybersecurity",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
        "Security Training",
        "Risk Assessment"
      ]
    },
    {
      title: "Blockchain Solutions",
      description: "Blockchain development and integration services for decentralized applications.",
      icon: "⛓️",
      href: "/services/blockchain",
      features: [
        "Smart Contract Development",
        "DeFi Applications",
        "NFT Platforms",
        "Blockchain Integration",
        "Cryptocurrency Solutions",
        "Web3 Development"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, micro SaaS, and IT services. Explore our full range of technology solutions." />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;