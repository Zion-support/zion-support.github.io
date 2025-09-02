import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { ArrowRight, TrendingUp, Users, Clock, Award, Building, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';
=======
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
<<<<<<< HEAD
      id: 'fintech-startup',
      title: 'FinTech Startup Digital Transformation',
      company: 'TechFinance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy system modernization and AI integration',
      solution: 'Complete cloud migration with AI-powered analytics',
      results: [
        '300% increase in processing speed',
        '50% reduction in operational costs',
        '99.9% system uptime achieved'
      ],
      duration: '6 months',
      teamSize: '12 developers',
      technologies: ['AWS', 'AI/ML', 'Microservices', 'React'],
      image: '/case-studies/fintech.jpg',
      featured: true
    },
    {
      id: 'healthcare-platform',
      title: 'Healthcare Platform Development',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'HIPAA-compliant patient data management system',
      solution: 'Secure cloud platform with advanced analytics',
      results: [
        '40% improvement in patient outcomes',
        '60% reduction in administrative time',
        '100% HIPAA compliance achieved'
      ],
      duration: '8 months',
      teamSize: '15 developers',
      technologies: ['Azure', 'React', 'Node.js', 'PostgreSQL'],
      image: '/case-studies/healthcare.jpg',
      featured: true
    },
    {
      id: 'ecommerce-optimization',
      title: 'E-commerce Performance Optimization',
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Slow website performance and poor user experience',
      solution: 'Performance optimization and mobile-first redesign',
      results: [
        '70% faster page load times',
        '45% increase in conversion rates',
        '80% improvement in mobile experience'
      ],
      duration: '4 months',
      teamSize: '8 developers',
      technologies: ['Next.js', 'CDN', 'Redis', 'MongoDB'],
      image: '/case-studies/ecommerce.jpg',
      featured: false
    },
    {
      id: 'manufacturing-iot',
      title: 'Manufacturing IoT Integration',
      company: 'Industrial Corp',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time monitoring',
      solution: 'IoT platform with predictive maintenance',
      results: [
        '25% reduction in downtime',
        '30% improvement in efficiency',
        'Real-time production monitoring'
      ],
      duration: '10 months',
      teamSize: '20 developers',
      technologies: ['IoT', 'Python', 'TensorFlow', 'Kubernetes'],
      image: '/case-studies/manufacturing.jpg',
      featured: false
    },
    {
      id: 'education-platform',
      title: 'Online Education Platform',
      company: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Scalable learning management system',
      solution: 'Cloud-native platform with AI-powered recommendations',
      results: [
        '500% increase in user engagement',
        '90% student satisfaction rate',
        'Support for 100k+ concurrent users'
      ],
      duration: '7 months',
      teamSize: '14 developers',
      technologies: ['AWS', 'React', 'GraphQL', 'Machine Learning'],
      image: '/case-studies/education.jpg',
      featured: false
    },
    {
      id: 'logistics-optimization',
      title: 'Logistics Route Optimization',
      company: 'LogiFlow Systems',
      industry: 'Logistics',
      challenge: 'Inefficient delivery routes and high fuel costs',
      solution: 'AI-powered route optimization system',
      results: [
        '35% reduction in fuel costs',
        '20% faster delivery times',
        'Real-time tracking and updates'
      ],
      duration: '5 months',
      teamSize: '10 developers',
      technologies: ['AI/ML', 'Python', 'React Native', 'PostgreSQL'],
      image: '/case-studies/logistics.jpg',
      featured: false
    }
  ];

  const industries = ['All', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Education', 'Logistics'];
=======
      title: 'E-commerce Platform Migration to Cloud',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      challenge: 'Legacy system causing performance issues and high maintenance costs',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '75% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster page load times',
        '300% increase in concurrent users'
      ],
      image: '/case-studies/ecommerce-migration.jpg',
      slug: 'ecommerce-platform-cloud-migration'
    },
    {
      title: 'AI-Powered Customer Support Automation',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'High volume of customer inquiries overwhelming support team',
      solution: 'Custom AI chatbot with natural language processing',
      results: [
        '80% reduction in support ticket volume',
        '24/7 customer support availability',
        '95% customer satisfaction rate',
        '60% faster response times'
      ],
      image: '/case-studies/ai-customer-support.jpg',
      slug: 'ai-customer-support-automation'
    },
    {
      title: 'Micro SaaS Development for Project Management',
      client: 'StartupHub',
      industry: 'SaaS',
      challenge: 'Need for specialized project management tool for remote teams',
      solution: 'Custom micro SaaS platform with real-time collaboration',
      results: [
        '40% increase in team productivity',
        '90% user adoption rate',
        '50% reduction in project delays',
        'ROI achieved in 6 months'
      ],
      image: '/case-studies/micro-saas-project-management.jpg',
      slug: 'micro-saas-project-management'
    },
    {
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Compliance requirements and increasing security threats',
      solution: 'Comprehensive security audit and infrastructure upgrade',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '99.8% system availability',
        '50% reduction in security-related downtime'
      ],
      image: '/case-studies/cybersecurity-healthcare.jpg',
      slug: 'cybersecurity-healthcare-infrastructure'
    },
    {
      title: 'Data Analytics Platform Implementation',
      client: 'ManufacturingCorp',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights into production processes',
      solution: 'Custom analytics platform with predictive modeling',
      results: [
        '25% improvement in production efficiency',
        '30% reduction in waste',
        'Real-time monitoring capabilities',
        'Predictive maintenance implementation'
      ],
      image: '/case-studies/data-analytics-manufacturing.jpg',
      slug: 'data-analytics-manufacturing-platform'
    },
    {
      title: 'Digital Transformation for Legacy Systems',
      client: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Outdated systems hindering growth and efficiency',
      solution: 'Complete digital transformation with modern architecture',
      results: [
        '60% improvement in operational efficiency',
        '45% reduction in manual processes',
        'Real-time tracking capabilities',
        'Scalable infrastructure for growth'
      ],
      image: '/case-studies/digital-transformation-logistics.jpg',
      slug: 'digital-transformation-logistics'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$2M+', label: 'Cost Savings Delivered' },
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
<<<<<<< HEAD
      description="Explore our successful projects and see how we've helped businesses transform their digital presence."
=======
      description="Explore real-world success stories and see how we've helped businesses transform their operations with cutting-edge technology solutions."
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries transform their digital presence 
            and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise and results.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="text-gray-600 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6"><strong>{study.company}</strong></p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                    <span className="text-gray-500">Case Study Image</span>
                  </div>
                </div>
=======
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries achieve their goals through 
            innovative technology solutions and strategic implementation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* All Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Case Study Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4"><strong>{study.company}</strong></p>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-500 mr-2" />
=======
      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how our technology solutions have transformed 
              businesses across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                    <span className="bg-blue-100 px-2 py-1 rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Client:</h4>
                    <p className="text-gray-600 text-sm">{study.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Key Results:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More
                    </Link>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
=======
                  
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our success and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
=======
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Your Project
            </Link>
<<<<<<< HEAD
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Explore Services
=======
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
>>>>>>> cursor/website-audit-content-update-and-deployment-47e3
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;