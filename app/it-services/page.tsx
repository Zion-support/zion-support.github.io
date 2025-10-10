'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions with AWS, Azure, and GCP',
      category: 'Cloud',
      icon: Cloud,
      features: [
        'Cloud migration and setup',
        'Auto-scaling capabilities',
        'Load balancing',
        'Disaster recovery',
        'Cost optimization',
        '24/7 monitoring'
      ],
      price: 'Starting at $999/month',
      popular: true
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      category: 'Security',
      icon: Shield,
      features: [
        'Threat detection and prevention',
        'Vulnerability assessments',
        'Compliance management',
        'Incident response',
        'Security training',
        'Regular security audits'
      ],
      price: 'Starting at $799/month',
      popular: false
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance',
      category: 'Database',
      icon: Database,
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Monitoring and maintenance'
      ],
      price: 'Starting at $599/month',
      popular: false
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      category: 'Development',
      icon: Smartphone,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Performance optimization',
        'Ongoing support and updates'
      ],
      price: 'Starting at $2,000/month',
      popular: true
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites',
      category: 'Development',
      icon: Globe,
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'API development',
        'Performance optimization',
        'SEO optimization'
      ],
      price: 'Starting at $1,500/month',
      popular: false
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Strategic IT guidance and technology roadmaps',
      category: 'Consulting',
      icon: Settings,
      features: [
        'Technology strategy',
        'Digital transformation',
        'Process optimization',
        'Vendor management',
        'Project management',
        'Training and support'
      ],
  ];

  const benefits = [
    'Expert team with 10+ years experience',
    '24/7 technical support',
    'Scalable solutions that grow with your business',
    'Cutting-edge technology and best practices',
    'Competitive pricing and flexible plans',
    'Proven track record of successful implementations'
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, database management, web development, mobile development" />
      </Helmet>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
  );
};

export default ItServicesPage;
