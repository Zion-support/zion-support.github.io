import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function CloudMigrationPage() {

  const features = [
    {
      icon: <Cloud className="w-5h-5ml-2" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments.',
      benefits: ['AWS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Performance Enhancement',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <Database className="w-5h-5ml-2" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <Network className="w-5h-5ml-2" />,
      title: 'Network Architecture',
      description: 'Design and implement robust cloud network architecture with high availability and scalability.',
      benefits: ['VPC design', 'Load balancing', 'CDN setup', 'Global distribution']
    }
  ]

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment and migration planning',
      features: [
        'Current infrastructure audit',
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Cost analysis and optimization',
        'Security compliance review',
        'Timeline and roadmap creation',
        'Risk assessment and mitigation',
        'Detailed migration report'
      ],
      popular: false,
      cta: 'Get Assessment'
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration for small to medium businesses',
      features: [
        'Full infrastructure migration',
        'Application modernization',
        'Database migration',
        'Security implementation',
        'Performance optimization',
        '30 days post-migration support',
        'Documentation and training',
        'Monitoring setup'
      ],
      popular: true,
      cta: 'Start Migration'
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'project',
      description: 'Large-scale enterprise cloud transformation with dedicated support',
      features: [
        'Complex multi-cloud migration',
        'Legacy system modernization',
        'Custom application development',
        'Advanced security implementation',
        '24/7 dedicated support',
        'Unlimited post-migration support',
        'Custom integrations',
        'White-label solutions',
        'Dedicated project manager',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion's cloud migration reduced our infrastructure costs by 45% while improving performance by 60%. The zero-downtime migration was flawless.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      content: 'The migration team was exceptional. They handled our complex legacy systems with expertise and delivered ahead of schedule.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      role: 'VP of Engineering',
      company: 'StartupHub',
      content: 'Our applications now run 3 x faster in the cloud. The cost savings alone paid for the migration in 6 months.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness assessment.',
      icon: <Search className="w-5h-5ml-2" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requirements.',
      icon: <Target className="w-5h-5ml-2" />,
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configuration, and testing environment setup.',
      icon: <Settings className="w-5h-5ml-2" />,
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-time validation.',
      icon: <Database className="w-5h-5ml-2" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Application Migration',
      description: 'Application deployment, configuration, and optimization in the cloud environment.',
      icon: <Server className="w-5h-5ml-2" />,
      duration: '2-4 weeks'
    },
    {
      step: '06',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <CheckCircle className="w-5h-5ml-2" />,
      duration: '1-2 weeks'
    }
  ]

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: <Cloud className="w-5h-5ml-2" />,
      description: 'Leading cloud platform with comprehensive services and global reach',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <Cloud className="w-5h-5ml-2" />,
      description: 'Enterprise-focused cloud platform with strong Microsoft integration',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <Cloud className="w-5h-5ml-2" />,
      description: 'AI and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <Network className="w-5h-5ml-2" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      features: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]

  return (
export default function CloudMigrationPage() {
  return (
    <><Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div></>
  );
}
      </>
    <></>
      <Helmet></Helmet>
        <title>Cloud Migration Services - Expert Cloud Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. AWS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." /></meta>
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration"  /></link>
export default function CloudMigrationPage() {
  return (
    <><Helmet>
        <title>CloudMigration - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">CloudMigration</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div></>
  );
}
