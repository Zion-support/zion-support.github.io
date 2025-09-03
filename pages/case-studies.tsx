<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CaseStudiesPage: NextPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system causing 40% cart abandonment and poor user experience',
      solution: 'Complete platform rebuild with modern architecture and AI-powered recommendations',
      results: [
        '60% increase in conversion rate',
        '45% reduction in cart abandonment',
        '80% improvement in page load speed',
        '200% increase in mobile traffic'
      ],
      image: '/case-studies/ecommerce.jpg',
      duration: '6 months',
      team: '8 developers'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems affecting care quality',
      solution: 'Integrated data platform with predictive analytics and real-time monitoring',
      results: [
        '30% improvement in patient outcomes',
        '50% reduction in readmission rates',
        '25% increase in operational efficiency',
        '99.9% system uptime achieved'
      ],
      image: '/case-studies/healthcare.jpg',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual processes causing production delays and quality issues',
      solution: 'IoT sensors integration with predictive maintenance and quality control',
      results: [
        '35% reduction in downtime',
        '20% increase in production efficiency',
        '90% improvement in quality control',
        '40% reduction in maintenance costs'
      ],
      image: '/case-studies/manufacturing.jpg',
      duration: '10 months',
      team: '10 engineers'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'On-premise infrastructure limiting scalability and increasing costs',
      solution: 'Complete cloud migration with enhanced security and compliance',
      results: [
        '50% reduction in infrastructure costs',
        '99.99% uptime achieved',
        '3x faster application deployment',
        'Full compliance with financial regulations'
      ],
      image: '/case-studies/finance.jpg',
      duration: '12 months',
      team: '15 experts'
    },
    {
      title: 'Startup MVP Development',
      client: 'TechStartup Inc.',
      industry: 'Technology',
      challenge: 'Need to quickly validate product-market fit with limited resources',
      solution: 'Rapid MVP development with scalable architecture and user analytics',
      results: [
        'Launched in 3 months',
        '10,000+ users in first 6 months',
        'Series A funding secured',
        'Product-market fit achieved'
      ],
      image: '/case-studies/startup.jpg',
      duration: '3 months',
      team: '5 developers'
    },
    {
      title: 'Government Digital Services',
      client: 'City of Innovation',
      industry: 'Government',
      challenge: 'Citizen services were paper-based and inefficient',
      solution: 'Digital transformation with citizen portal and automated workflows',
      results: [
        '70% reduction in processing time',
        '85% citizen satisfaction rate',
        '60% reduction in operational costs',
        '24/7 service availability'
      ],
      image: '/case-studies/government.jpg',
      duration: '18 months',
      team: '20 specialists'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Users className="w-8 h-8" /> },
    { number: '$50M+', label: 'Cost Savings Delivered', icon: <DollarSign className="w-8 h-8" /> },
    { number: '99.9%', label: 'Average Uptime', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses transform their operations and achieve remarkable results
          </p>
=======
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
=======
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';
>>>>>>> main

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Needed to process and analyze large volumes of patient data to improve diagnostic accuracy and treatment outcomes.',
      solution: 'Developed a comprehensive AI platform using machine learning algorithms to analyze medical imaging, patient records, and treatment histories.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in analysis time',
        '35% increase in patient satisfaction',
        '50% cost savings in diagnostic processes'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
      duration: '6 months',
      team: '12 specialists',
      image: '/case-studies/healthcare-ai.jpg',
      slug: 'ai-healthcare-analytics-platform'
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Risk Assessment',
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Required advanced risk modeling capabilities to handle complex financial instruments and market volatility.',
      solution: 'Implemented quantum computing algorithms for real-time risk assessment and portfolio optimization.',
      results: [
        '75% faster risk calculations',
        '90% improvement in prediction accuracy',
        '25% reduction in portfolio risk',
        '40% increase in trading efficiency'
      ],
      technologies: ['Quantum Computing', 'Financial Modeling', 'Risk Analytics', 'Blockchain'],
      duration: '8 months',
      team: '15 specialists',
      image: '/case-studies/quantum-finance.jpg',
      slug: 'quantum-financial-risk-assessment'
    },
    {
      id: 3,
      title: 'Micro SaaS Content Management System',
      client: 'Creative Agency Network',
      industry: 'Marketing & Advertising',
      challenge: 'Needed a scalable content management solution for managing multiple client campaigns and assets.',
      solution: 'Built a custom micro SaaS platform with AI-powered content optimization and automated workflow management.',
      results: [
        '80% reduction in content creation time',
        '45% increase in campaign performance',
        '60% improvement in client satisfaction',
        '30% cost reduction in operations'
      ],
      technologies: ['React', 'Node.js', 'AI Content Generation', 'Cloud Infrastructure'],
      duration: '4 months',
      team: '8 specialists',
      image: '/case-studies/micro-saas-cms.jpg',
      slug: 'micro-saas-content-management'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Transparency',
      client: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Required complete supply chain visibility and traceability for compliance and quality assurance.',
      solution: 'Implemented a blockchain-based supply chain management system with IoT integration and real-time tracking.',
      results: [
        '100% supply chain visibility',
        '70% reduction in compliance costs',
        '50% improvement in quality control',
        '35% faster issue resolution'
      ],
      technologies: ['Blockchain', 'IoT', 'Smart Contracts', 'Data Analytics'],
      duration: '10 months',
      team: '18 specialists',
      image: '/case-studies/blockchain-supply-chain.jpg',
      slug: 'blockchain-supply-chain-transparency'
    },
    {
      id: 5,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'E-commerce Giant',
      industry: 'Retail & E-commerce',
      challenge: 'Needed to migrate legacy systems to cloud infrastructure while maintaining 99.9% uptime.',
      solution: 'Executed a comprehensive cloud migration strategy with automated scaling and disaster recovery.',
      results: [
        '99.99% uptime achievement',
        '65% reduction in infrastructure costs',
        '80% improvement in scalability',
        '50% faster deployment cycles'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
      duration: '12 months',
      team: '20 specialists',
      image: '/case-studies/cloud-migration.jpg',
      slug: 'cloud-migration-infrastructure-optimization'
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity Platform',
      client: 'Fortune 500 Corporation',
      industry: 'Technology',
      challenge: 'Required advanced threat detection and response capabilities to protect against sophisticated cyber attacks.',
      solution: 'Developed an AI-driven cybersecurity platform with real-time threat detection and automated response.',
      results: [
        '95% reduction in false positives',
        '85% faster threat detection',
        '70% improvement in incident response time',
        '60% reduction in security incidents'
      ],
      technologies: ['AI/ML', 'Cybersecurity', 'Threat Intelligence', 'Automation'],
      duration: '9 months',
      team: '14 specialists',
      image: '/case-studies/ai-cybersecurity.jpg',
      slug: 'ai-powered-cybersecurity-platform'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '50+', label: 'Industries Served', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock },
=======
      title: "Healthcare AI Platform Transformation",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual patient data analysis was taking 40+ hours per week, leading to delayed diagnoses and treatment plans.",
      solution: "Developed an AI-powered diagnostic platform that analyzes medical images and patient data in real-time.",
      results: [
        "95% reduction in analysis time",
        "40% improvement in diagnostic accuracy",
        "$2.3M annual cost savings",
        "99.9% system uptime"
      ],
      technologies: ["Machine Learning", "Computer Vision", "Cloud Computing", "API Integration"],
      duration: "6 months",
      team: "8 specialists",
      image: "/case-studies/healthcare-ai.jpg",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform Migration to Cloud",
      client: "RetailMax",
      industry: "E-commerce",
      challenge: "Legacy on-premise infrastructure couldn't handle peak traffic, causing frequent downtime and lost sales.",
      solution: "Migrated entire platform to AWS with auto-scaling capabilities and implemented microservices architecture.",
      results: [
        "300% increase in peak traffic capacity",
        "99.99% uptime achieved",
        "60% reduction in infrastructure costs",
        "50% faster page load times"
      ],
      technologies: ["AWS", "Kubernetes", "Docker", "Microservices"],
      duration: "4 months",
      team: "12 specialists",
      image: "/case-studies/ecommerce-cloud.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Financial Services Cybersecurity Overhaul",
      client: "SecureBank",
      industry: "Financial Services",
      challenge: "Multiple security breaches exposed vulnerabilities in their legacy security infrastructure.",
      solution: "Implemented zero-trust security architecture with advanced threat detection and response systems.",
      results: [
        "100% security incident prevention",
        "Real-time threat detection",
        "Compliance with all regulations",
        "24/7 security monitoring"
      ],
      technologies: ["Zero Trust", "SIEM", "AI Security", "Blockchain"],
      duration: "8 months",
      team: "15 specialists",
      image: "/case-studies/cybersecurity.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "SmartManufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual production monitoring led to inefficiencies and quality control issues.",
      solution: "Deployed IoT sensors and AI analytics to create a smart manufacturing ecosystem.",
      results: [
        "25% increase in production efficiency",
        "90% reduction in quality defects",
        "Predictive maintenance capabilities",
        "$1.8M annual savings"
      ],
      technologies: ["IoT", "Edge Computing", "Predictive Analytics", "Machine Learning"],
      duration: "5 months",
      team: "10 specialists",
      image: "/case-studies/manufacturing-iot.jpg",
      featured: false
    },
    {
      id: 5,
      title: "SaaS Platform Development",
      client: "TechStartup Inc.",
      industry: "Technology",
      challenge: "Needed a scalable SaaS platform to serve 100,000+ users with complex workflow management.",
      solution: "Built a cloud-native SaaS platform with advanced workflow automation and real-time collaboration features.",
      results: [
        "150,000+ active users",
        "99.95% uptime",
        "Sub-second response times",
        "$5M ARR achieved"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      duration: "10 months",
      team: "20 specialists",
      image: "/case-studies/saas-platform.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Data Analytics Platform for Retail",
      client: "RetailChain",
      industry: "Retail",
      challenge: "Lack of real-time insights into customer behavior and inventory management.",
      solution: "Developed a comprehensive data analytics platform with predictive modeling and real-time dashboards.",
      results: [
        "35% increase in sales",
        "20% reduction in inventory costs",
        "Real-time customer insights",
        "Automated demand forecasting"
      ],
      technologies: ["Big Data", "Machine Learning", "Data Visualization", "Cloud Computing"],
      duration: "7 months",
      team: "14 specialists",
      image: "/case-studies/retail-analytics.jpg",
      featured: false
    }
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);
  const regularCaseStudies = caseStudies.filter(study => !study.featured);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: TrendingUp },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Industries Served", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock }
>>>>>>> main
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
<<<<<<< HEAD
      description="Explore our successful technology implementations and see how we've helped businesses transform their operations with cutting-edge solutions."
      keywords="case studies, technology implementations, AI solutions, quantum computing, blockchain, cloud migration, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories & Case Studies
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped businesses across industries transform their operations 
            with innovative technology solutions and achieve remarkable results.
          </motion.p>
>>>>>>> main
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
=======
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
>>>>>>> main
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results, real impact on businesses across industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Case Study Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-zion-cyan/10 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan font-medium hover:text-zion-cyan/80 transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
=======
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{study.industry}</div>
                    <div className="text-sm opacity-80">Case Study</div>
=======
      description="Explore our successful technology implementations and digital transformation projects. Real results from real clients across various industries."
      keywords="case studies, technology projects, digital transformation, AI implementation, cloud migration, cybersecurity"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Real results from real clients. Discover how we've helped businesses 
              transform their operations with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Our Services
              </Link>
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let us help you achieve similar results for your business. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
>>>>>>> main
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
<<<<<<< HEAD
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {study.industry}
                    </span>
                    <div className="text-sm text-gray-500">
                      {study.duration} • {study.team}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {study.title}
                  </h2>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Client:</h3>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Key Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
=======
              ))}
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Success Story?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can help transform your business with innovative technology solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
=======
        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Study</h2>
                <p className="text-xl text-gray-600">Our most impactful project to date</p>
              </div>

              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Featured Project Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {featuredCaseStudy.industry}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredCaseStudy.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    <strong>Client:</strong> {featuredCaseStudy.client}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-600 mb-6">{featuredCaseStudy.challenge}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Solution</h4>
                      <p className="text-gray-600">{featuredCaseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {featuredCaseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4 mb-4">
                      {featuredCaseStudy.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {featuredCaseStudy.team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-600">Explore our complete portfolio of successful projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                    <span className="text-white font-semibold">Project Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">+{study.technologies.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.team}
                        </div>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the ranks of successful businesses that have transformed their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
>>>>>>> main
>>>>>>> main
    </MainLayout>
  );
};

export default CaseStudiesPage;