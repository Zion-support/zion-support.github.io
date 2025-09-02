import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, BarChart3, Brain, CheckCircle, Clock, DollarSign, Globe, Shield, TrendingUp, Users } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Needed to analyze patient data and predict health outcomes to improve treatment decisions.',
      solution: 'Developed an AI-powered analytics platform with predictive modeling and real-time patient monitoring.',
      results: [
        '40% improvement in treatment accuracy',
        '60% reduction in readmission rates',
        '$2.5M annual cost savings',
        '99.9% system uptime achieved'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Real-time Processing', 'HIPAA Compliance'],
      duration: '6 months',
      icon: Brain,
      category: 'AI Services'
    },
    {
      title: 'Zero Trust Security Architecture',
      client: 'Financial Services Corp',
      industry: 'Finance',
      challenge: 'Required comprehensive security overhaul to meet regulatory compliance and protect sensitive financial data.',
      solution: 'Implemented zero trust security architecture with advanced threat detection and identity management.',
      results: [
        '99.99% security incident reduction',
        'Full regulatory compliance achieved',
        '50% faster incident response time',
        'Zero data breaches since implementation'
      ],
      technologies: ['Zero Trust Architecture', 'Identity Management', 'Threat Detection', 'Compliance Automation'],
      duration: '4 months',
      icon: Shield,
      category: 'IT Services'
    },
    {
      title: 'Micro SaaS E-commerce Platform',
      client: 'Retail Innovations',
      industry: 'E-commerce',
      challenge: 'Needed a scalable, cost-effective e-commerce solution with advanced analytics and automation.',
      solution: 'Built a comprehensive micro SaaS platform with AI-powered recommendations and automated inventory management.',
      results: [
        '300% increase in conversion rates',
        '45% reduction in operational costs',
        '80% improvement in inventory accuracy',
        '50% faster time-to-market for new products'
      ],
      technologies: ['Microservices', 'AI Recommendations', 'Inventory Automation', 'Real-time Analytics'],
      duration: '3 months',
      icon: TrendingUp,
      category: 'Micro SaaS'
    },
    {
      title: 'Cloud Migration & Digital Transformation',
      client: 'Manufacturing Giant',
      industry: 'Manufacturing',
      challenge: 'Legacy systems were limiting growth and needed complete digital transformation with cloud migration.',
      solution: 'Executed comprehensive cloud migration with modern architecture and process automation.',
      results: [
        '70% reduction in infrastructure costs',
        '90% improvement in system performance',
        '85% faster deployment cycles',
        '100% business continuity maintained'
      ],
      technologies: ['Cloud Migration', 'Process Automation', 'Microservices', 'DevOps'],
      duration: '8 months',
      icon: Globe,
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Logistics',
      industry: 'Logistics',
      challenge: 'Complex supply chain needed optimization to reduce costs and improve delivery times.',
      solution: 'Implemented AI-driven supply chain optimization with predictive analytics and automated routing.',
      results: [
        '35% reduction in logistics costs',
        '25% improvement in delivery times',
        '60% reduction in inventory waste',
        '$5M annual savings achieved'
      ],
      technologies: ['AI Optimization', 'Predictive Analytics', 'Route Optimization', 'Real-time Tracking'],
      duration: '5 months',
      icon: BarChart3,
      category: 'AI Services'
    },
    {
      title: 'Cybersecurity Operations Center',
      client: 'Tech Startup',
      industry: 'Technology',
      challenge: 'Growing startup needed enterprise-grade security without the enterprise budget.',
      solution: 'Built a cost-effective SOC with AI-powered threat detection and automated response.',
      results: [
        '95% reduction in security incidents',
        '24/7 automated monitoring achieved',
        '70% faster threat response time',
        '50% lower security costs vs traditional SOC'
      ],
      technologies: ['SOC Implementation', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],
      duration: '2 months',
      icon: Shield,
      category: 'IT Services'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Client Satisfaction', icon: Users },
    { number: '$50M+', label: 'Cost Savings Delivered', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <Head>
        <title>Case Studies — Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and client success stories. See how we've helped businesses transform with AI, IT, and micro SaaS solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Success <span className="text-blue-600">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Discover how we've helped businesses across industries transform their operations 
                with innovative technology solutions and achieve remarkable results.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-lg text-gray-600">
                Real results from real clients across various industries
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Overview */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-blue-100 mr-4">
                          <study.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {study.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600 mb-4">
                        <strong>Client:</strong> {study.client} | <strong>Industry:</strong> {study.industry} | <strong>Duration:</strong> {study.duration}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Column - Results */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );


