'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap, CheckCircle, Award } from 'lucide-react';

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
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'TechCorp was struggling with high customer service costs and long response times, handling over 10,000 support tickets monthly with only 15 agents.',
      solution: 'Implemented an AI-powered chatbot system with natural language processing, integrated with their existing CRM, and trained on 5 years of historical support data.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 availability for customers'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: 'AI Engineers, UX Designers, DevOps',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'SecureBank International',
      industry: 'Financial Services',
      challenge: 'SecureBank needed to migrate their legacy on-premises infrastructure to the cloud while maintaining strict security and compliance requirements.',
      solution: 'Designed and implemented a hybrid cloud architecture using AWS, with multi-region deployment, automated security scanning, and comprehensive monitoring.',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        '50% faster deployment times',
        'Full compliance with financial regulations'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: 'Cloud Architects, Security Specialists, DevOps Engineers',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare Provider',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'MediCare faced increasing cyber threats and needed to strengthen their security posture to protect sensitive patient data and maintain HIPAA compliance.',
      solution: 'Conducted comprehensive security audit and implemented zero-trust architecture, advanced threat detection, and employee security training program.',
      results: [
        'Zero security incidents in 12 months',
        '100% HIPAA compliance achieved',
        '95% reduction in phishing attempts',
        'Complete security awareness training for all staff'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: 'Cybersecurity Experts, Compliance Specialists, Training Team',
      featured: false
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'ManufacturingPlus',
      industry: 'Manufacturing',
      challenge: 'ManufacturingPlus wanted to implement IoT sensors across their production lines to optimize efficiency and predict maintenance needs.',
      solution: 'Developed a comprehensive IoT platform with real-time data collection, predictive analytics, and automated maintenance scheduling.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in unplanned downtime',
        '20% decrease in maintenance costs',
        'Real-time production monitoring'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '5 months',
      team: 'IoT Engineers, Data Scientists, Manufacturing Specialists',
      featured: false
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'ShopSmart Global',
      industry: 'E-commerce',
      challenge: 'ShopSmart needed better insights into customer behavior and sales performance to optimize their online platform and increase revenue.',
      solution: 'Built a comprehensive analytics dashboard with real-time data visualization, customer segmentation, and predictive analytics for sales forecasting.',
      results: [
        '35% increase in conversion rates',
        '50% improvement in customer retention',
        'Real-time business insights',
        'Data-driven decision making'
      ],
      image: '/images/case-studies/data-analytics-ecommerce.jpg',
      duration: '2 months',
      team: 'Data Scientists, Frontend Developers, UX Designers',
      featured: false
    },
    {
      id: '6',
      title: 'DevOps Transformation for Software Company',
      client: 'CodeCraft Studios',
      industry: 'Software Development',
      challenge: 'CodeCraft was experiencing slow deployment cycles and frequent production issues, hindering their ability to deliver features quickly.',
      solution: 'Implemented CI/CD pipelines, automated testing, infrastructure as code, and comprehensive monitoring and alerting systems.',
      results: [
        '80% faster deployment cycles',
        '90% reduction in production incidents',
        'Automated testing coverage increased to 95%',
        'Zero-downtime deployments achieved'
      ],
      image: '/images/case-studies/devops-transformation.jpg',
      duration: '3 months',
      team: 'DevOps Engineers, QA Specialists, Platform Engineers',
      featured: false
    }
  ];

  const industries = ['All', ...new Set(caseStudies.map(study => study.industry))];
  const featuredStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, technology solutions, digital transformation, AI implementation, cloud migration, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover how we've helped organizations transform their operations 
                and achieve remarkable results through innovative technology solutions
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4 mr-2" />
                  50+ Projects Completed
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  98% Client Satisfaction
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  $2M+ Cost Savings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredStudies.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our most impactful technology implementations that delivered exceptional results
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">{study.duration}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Building2 className="w-4 h-4 mr-2" />
                          {study.client}
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive overview of our technology implementations across different industries
              </p>
            </div>
            <div className="space-y-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-2/3 p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="ml-2 text-sm text-gray-500">{study.duration}</span>
                        {study.featured && (
                          <span className="ml-2 bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                      <div className="flex items-center mb-4 text-sm text-gray-500">
                        <Building2 className="w-4 h-4 mr-2" />
                        {study.client}
                        <Users className="w-4 h-4 ml-4 mr-2" />
                        {study.team}
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-3">{study.challenge}</p>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-3">{study.solution}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your organization with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;