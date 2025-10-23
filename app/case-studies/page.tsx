'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'TechCorp was struggling with high customer service costs and long response times. Their traditional support system couldn\'t handle the increasing volume of inquiries, leading to customer dissatisfaction and lost revenue.',
      solution: 'We implemented an AI-powered chatbot system integrated with their existing CRM, using natural language processing to understand customer queries and provide instant, accurate responses. The system was trained on their historical support data and continuously learns from new interactions.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '5 specialists'
    },
    {
      id: '2',
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Financial Services Inc.',
      industry: 'Finance',
      challenge: 'A major financial institution needed to modernize their security infrastructure to comply with new regulations and protect against sophisticated cyber threats. Their legacy systems were vulnerable and couldn\'t provide real-time threat detection.',
      solution: 'We designed and implemented a comprehensive security framework including advanced threat detection, automated incident response, and employee training programs. The solution included multi-factor authentication, encryption, and continuous monitoring systems.',
      results: [
        '99.9% security uptime achieved',
        'Zero security breaches in 12 months',
        '50% faster threat detection',
        'Full regulatory compliance'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: '3',
      title: 'Cloud Migration & Optimization',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'RetailMax needed to migrate their on-premises infrastructure to the cloud while maintaining 99.9% uptime during peak shopping seasons. Their legacy systems were causing performance bottlenecks and high maintenance costs.',
      solution: 'We executed a phased cloud migration strategy using AWS, implementing auto-scaling, load balancing, and CDN optimization. The solution included database migration, application modernization, and comprehensive monitoring.',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% uptime during peak season',
        '3x faster page load times',
        'Seamless migration with zero downtime'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'A manufacturing company had vast amounts of operational data but lacked the tools to extract meaningful insights. They needed real-time analytics to optimize production, reduce waste, and improve efficiency.',
      solution: 'We built a comprehensive data analytics platform that processes real-time data from IoT sensors, production lines, and business systems. The solution includes predictive analytics, automated reporting, and interactive dashboards.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in waste',
        'Real-time operational insights',
        '$2M annual cost savings'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '5',
      title: 'DevOps Automation & CI/CD Pipeline',
      client: 'Software Solutions Ltd.',
      industry: 'Software',
      challenge: 'A software company was struggling with manual deployment processes, frequent production issues, and slow release cycles. Their development and operations teams were working in silos, leading to inefficiencies.',
      solution: 'We implemented a complete DevOps transformation including automated CI/CD pipelines, infrastructure as code, containerization with Docker and Kubernetes, and comprehensive monitoring and logging systems.',
      results: [
        '80% reduction in deployment time',
        '90% decrease in production incidents',
        '3x faster release cycles',
        'Improved team collaboration'
      ],
      image: '/images/case-studies/devops.jpg',
      duration: '3 months',
      team: '4 specialists'
    },
    {
      id: '6',
      title: 'Mobile App Development & Integration',
      client: 'Healthcare Partners',
      industry: 'Healthcare',
      challenge: 'A healthcare organization needed a mobile app to improve patient engagement and streamline appointment scheduling. The app had to integrate with their existing EHR system while maintaining HIPAA compliance.',
      solution: 'We developed a secure, HIPAA-compliant mobile application with features including appointment scheduling, prescription management, telemedicine capabilities, and secure messaging. The app integrates seamlessly with their existing systems.',
      results: [
        '50% increase in patient engagement',
        '30% reduction in no-show rates',
        '95% patient satisfaction score',
        'Full HIPAA compliance maintained'
      ],
      image: '/images/case-studies/mobile-app.jpg',
      duration: '6 months',
      team: '6 specialists'
    }
  ];

  const industries = [
    { name: 'Technology', icon: <Zap className="w-5 h-5" />, count: 12 },
    { name: 'Finance', icon: <Building2 className="w-5 h-5" />, count: 8 },
    { name: 'Healthcare', icon: <Shield className="w-5 h-5" />, count: 6 },
    { name: 'Retail', icon: <TrendingUp className="w-5 h-5" />, count: 10 },
    { name: 'Manufacturing', icon: <Users className="w-5 h-5" />, count: 7 }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average ROI', value: '300%' },
    { label: 'Years Experience', value: '10+' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and see how we've helped businesses transform their operations with AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="case studies, technology solutions, AI implementation, cybersecurity projects, cloud migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`bg-white rounded-xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}>
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="w-8 h-8" />
                        </div>
                        <p className="text-sm font-medium">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.team}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">{study.industry}</span> industry
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;