<<<<<<< HEAD
'use client';

import React from 'react';
<<<<<<< HEAD

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-world success stories from our clients.
          </p>
        </div>
      </div>
    </div>
  );
};
=======
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
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
<<<<<<< HEAD
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Cloud Migration for Financial Services',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing operational costs.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated scaling.',
      results: [
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Cybersecurity Overhaul for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Vulnerable legacy systems and compliance requirements for patient data protection.',
      solution: 'Comprehensive security assessment and implementation of zero-trust architecture with advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '40% improvement in threat detection',
        'Streamlined compliance reporting'
      ],
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring processes and lack of real-time insights into production efficiency.',
      solution: 'Developed comprehensive IoT platform with real-time monitoring, predictive analytics, and automated alerts.',
      results: [
        '30% increase in production efficiency',
        '25% reduction in equipment downtime',
        'Real-time production insights',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-manufacturing.jpg',
      duration: '5 months',
      team: '15 specialists'
    },
    {
      id: '5',
      title: 'Data Analytics Dashboard for E-commerce',
      client: 'RetailMax Online',
      industry: 'E-commerce',
      challenge: 'Scattered data sources and lack of actionable insights for business decisions.',
      solution: 'Created unified data warehouse with real-time analytics dashboard and automated reporting.',
      results: [
        '40% improvement in decision-making speed',
        '25% increase in conversion rates',
        'Real-time business insights',
        'Automated reporting system'
      ],
      image: '/images/case-studies/data-analytics-ecommerce.jpg',
      duration: '3 months',
      team: '6 specialists'
    },
    {
      id: '6',
      title: 'DevOps Transformation for Software Company',
      client: 'CodeCraft Solutions',
      industry: 'Software Development',
      challenge: 'Manual deployment processes and frequent production issues affecting release cycles.',
      solution: 'Implemented CI/CD pipelines, infrastructure as code, and comprehensive monitoring systems.',
      results: [
        '80% reduction in deployment time',
        '90% decrease in production incidents',
        'Automated testing and deployment',
        'Improved team collaboration'
      ],
      image: '/images/case-studies/devops-transformation.jpg',
      duration: '4 months',
      team: '8 specialists'
=======
      title: 'E-commerce AI Optimization',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: ['40% increase in conversion rates', '25% reduction in cart abandonment', '60% improvement in customer satisfaction'],
      image: '/case-study-1.jpg'
    },
    {
      title: 'Manufacturing Process Automation',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'Deployed AI-driven quality control systems and automated production workflows',
      results: ['30% increase in production efficiency', '50% reduction in defects', '20% cost savings'],
      image: '/case-study-2.jpg'
    },
    {
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Created comprehensive AI analytics platform for patient data integration',
      results: ['35% faster diagnosis', '45% improvement in treatment accuracy', '25% reduction in costs'],
      image: '/case-study-3.jpg'
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
    }
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: '150+',
      label: 'Projects Completed'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      number: '200+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      number: '95%',
      label: 'Success Rate'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      number: '24/7',
      label: 'Support Available'
    }
  ];

  const industries = [
    { name: 'Technology', count: 45, icon: <Zap className="w-5 h-5" /> },
    { name: 'Healthcare', count: 32, icon: <Shield className="w-5 h-5" /> },
    { name: 'Financial Services', count: 28, icon: <Building2 className="w-5 h-5" /> },
    { name: 'Manufacturing', count: 25, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'E-commerce', count: 20, icon: <Users className="w-5 h-5" /> }
  ];

  return (
<<<<<<< HEAD
    <>
  </>
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
>>>>>>> origin/main
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with our AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.company}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 text-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Impact Summary</h3>
                    <p className="text-gray-300">
                      This project demonstrates the transformative power of AI and IT solutions in modern business operations.
                    </p>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Case Studies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                      <span className="text-sm text-gray-500">{caseStudy.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      <strong>Client:</strong> {caseStudy.client}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      <strong>Challenge:</strong> {caseStudy.challenge}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Team: {caseStudy.team}</span>
                      <Link
                        to={`/case-studies/${caseStudy.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-center mb-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">We analyze your current challenges and identify opportunities for improvement.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
                <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific needs and goals.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Our expert team implements the solution with minimal disruption to your operations.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600">We continuously monitor and optimize the solution to ensure maximum performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </div>

  );
};
=======
=======
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our proven AI and IT solutions.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Start Your Project
          </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
        </div>
      </section>
>>>>>>> origin/main
>>>>>>> origin/main

      <Footer />
    </div>
  )
}

export default CaseStudiesPage