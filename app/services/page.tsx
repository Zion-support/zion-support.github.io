'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions for business automation and optimization.',
      icon: Brain,
      category: 'AI',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $5,000/month'
    },
    {
      id: 2,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      icon: Cloud,
      category: 'Cloud',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $2,000/month'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and data.',
      icon: Shield,
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      price: 'Starting at $3,000/month'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      icon: BarChart3,
      category: 'Analytics',
      features: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'],
      price: 'Starting at $1,500/month'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      category: 'Development',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform', 'UI/UX Design'],
      price: 'Starting at $8,000/project'
    },
    {
      id: 6,
      title: 'Database Services',
      description: 'Database design, optimization, and management services.',
      icon: Database,
      category: 'Database',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $1,000/month'
    }
  ];
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud services, cybersecurity, data analytics, and more." />
        <meta name="keywords" content="services, AI solutions, cloud services, cybersecurity, data analytics, mobile development, database services" />
      </Helmet>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services;
  </
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth.
            </p>
          </div>
        </section>
        {/* Search and Filter Section */}
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
