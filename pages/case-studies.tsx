import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';
import Link from 'next/link';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Platform Transformation',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Legacy system modernization and AI integration for patient data analysis',
      solution: 'Developed a comprehensive AI-powered platform for patient data analysis and predictive healthcare insights',
      results: [
        '40% reduction in diagnosis time',
        '60% improvement in patient outcomes',
        '25% cost savings in operations'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'React', 'Node.js'],
      duration: '6 months',
      team: '8 developers',
      image: '/case-studies/healthcare-ai.jpg'
    },
    {
      id: 2,
      title: 'E-commerce Platform Scaling',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Handling 10x traffic growth during peak seasons with existing infrastructure',
      solution: 'Implemented microservices architecture with auto-scaling cloud infrastructure',
      results: [
        '99.9% uptime during peak traffic',
        '300% increase in concurrent users',
        '50% reduction in page load times'
      ],
      technologies: ['Microservices', 'Kubernetes', 'AWS', 'React', 'MongoDB'],
      duration: '4 months',
      team: '12 developers',
      image: '/case-studies/ecommerce-scaling.jpg'
    },
    {
      id: 3,
      title: 'Financial Services Security Enhancement',
      client: 'SecureBank',
      industry: 'Finance',
      challenge: 'Strengthening cybersecurity and compliance for financial transactions',
      solution: 'Implemented advanced security measures and compliance automation',
      results: [
        'Zero security breaches',
        '100% compliance with regulations',
        '80% reduction in manual compliance tasks'
      ],
      technologies: ['Cybersecurity', 'Blockchain', 'Compliance Automation', 'Python', 'PostgreSQL'],
      duration: '8 months',
      team: '10 developers',
      image: '/case-studies/finance-security.jpg'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'SmartManufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Connecting legacy manufacturing equipment with modern IoT systems',
      solution: 'Developed IoT platform for real-time monitoring and predictive maintenance',
      results: [
        '30% reduction in equipment downtime',
        '20% increase in production efficiency',
        '15% decrease in maintenance costs'
      ],
      technologies: ['IoT', 'Edge Computing', 'Machine Learning', 'React', 'Python'],
      duration: '5 months',
      team: '6 developers',
      image: '/case-studies/manufacturing-iot.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: TrendingUp },
    { number: '$2M+', label: 'Cost Savings Delivered', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore successful technology implementations and digital transformations delivered by Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Discover how we've helped businesses across industries transform their operations 
            with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🏢</div>
                      <p className="text-sm">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4"><strong>Client:</strong> {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-gray-600 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Team:</span> {study.team}
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;