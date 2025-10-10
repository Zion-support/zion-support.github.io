'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

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
  team: string});
}
<<<<<<< HEAD
=======
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
import { ArrowRight, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
<<<<<<< HEAD
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
=======
      id: 1,
      title: 'AI-Powered E-commerce Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service queries',
        '35% increase in average order value'
      ],
<<<<<<< HEAD
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
<<<<<<< HEAD
      team: '8 specialists'
=======
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '5 specialists'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
      image: '/images/case-studies/ecommerce-ai.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
    },
=======
      team: '8 specialists'});;)
},
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',
=======
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      results: [
        '50% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in operational costs'
      ],
<<<<<<< HEAD
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '12 specialists'});;)
},
    {
      id: '3',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'HealthTech Systems',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities and compliance requirements for patient data protection.',
      solution: 'Comprehensive cybersecurity overhaul with zero-trust architecture and advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security breaches in 12 months',
        '95% reduction in security incidents',
        'Automated threat response system'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
<<<<<<< HEAD
      team: '10 specialists'});;)
},
    {
      id: '4',
      title: 'Machine Learning for Predictive Analytics',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.',
      solution: 'ML-powered demand forecasting system with real-time inventory optimization.',
      results: [
        '40% reduction in stockouts',
        '25% decrease in excess inventory',
        '15% increase in revenue',
        'Real-time demand prediction accuracy of 92%'
      ],
      image: '/images/case-studies/ml-predictive-analytics.jpg',
      duration: '5 months',
      team: '6 specialists'});;)
},
    {
      id: '5',
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Manual processes and lack of real-time visibility into production efficiency.',
      solution: 'IoT integration with AI-powered analytics dashboard and automated quality control.',
      results: [
        '30% increase in production efficiency',
        '50% reduction in quality defects',
        'Real-time production monitoring',
        'Predictive maintenance implementation'
      ],
      image: '/images/case-studies/digital-transformation.jpg',
      duration: '8 months',
      team: '15 specialists'});;)
},
    {
      id: '6',
      title: 'Blockchain Integration for Supply Chain',
      client: 'GlobalLogistics',
=======
      image: '/images/case-studies/cloud-finance.jpg'
    },
    {
      id: 3,
      title: 'Blockchain Supply Chain Optimization',
      company: 'GlobalLogistics Corp.',
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in supply chain',
      solution: 'Blockchain-based tracking and verification system',
      results: [
        '100% supply chain transparency',
        '45% reduction in fraud cases',
        '25% improvement in delivery times'
      ],
<<<<<<< HEAD
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      duration: '7 months',
<<<<<<< HEAD
      team: '11 specialists'
=======
      image: '/images/case-studies/cybersecurity-healthcare.jpg',
      challenge: 'Increasing cyber threats targeting patient data',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        '100% compliance with HIPAA',
        'Zero data breaches',
        '24/7 threat monitoring'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Institute',
      industry: 'Research & Development',
      image: '/images/case-studies/quantum-computing.jpg',
      challenge: 'Need for advanced computing power for complex simulations',
      solution: 'Custom quantum computing platform with AI integration',
      results: [
        '1000x faster calculations',
        'Breakthrough research capabilities',
        'International recognition'
      ],
      duration: '12 months',
      team: '12 specialists'
    },
    {
      id: '5',
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/images/case-studies/ecommerce-ai.jpg',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalization',
      results: [
        '35% increase in conversions',
        '25% higher average order value',
        '80% improvement in user engagement'
      ],
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'Autonomous Vehicle Fleet Management',
      client: 'AutoLogistics',
      industry: 'Transportation',
      image: '/images/case-studies/autonomous-vehicles.jpg',
      challenge: 'Inefficient fleet operations and high maintenance costs',
      solution: 'AI-driven autonomous vehicle management system',
      results: [
        '30% reduction in fuel costs',
        '45% decrease in maintenance',
        '99.5% safety record'
      ],
      duration: '8 months',
      team: '10 specialists'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
      image: '/images/case-studies/blockchain-logistics.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
      team: '10 specialists'
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
    }
=======
      team: '11 specialists'});;)
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
  ];

  return (
    <>
<<<<<<< HEAD
      <Helmet></Helmet>
        <titl></titl>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
=======
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT implementations. Real case studies showcasing measurable results and client transformations." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, client results, digital transformation" />
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
      </Helmet>

      <div></div>
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
=======
        <section></section>
          <div></div>
            <h1></h1>
              Success <spa></spa>Stories</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </h1>
            <p></p>
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform with AI and IT solutions.
=======
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </p>
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
                <br />
                <span className="text-white">& Success Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform with our AI and IT solutions.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15

<<<<<<< HEAD
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
=======
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
=======
            {/* Stats */}
            <div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              {stats.map((stat, index) => (
                <div></div>
                  <div></div>
                    <stat.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
=======
                ))}
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
                  <di></di>{stat.value}</div>
                  <di></di>{stat.label}</div>
                </div>
              ));
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </div>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. Real results, real impact.
            </p>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
          </div>
        </section>

        {/* Case Studies Grid */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4"><strong>Client:</strong> {study.company}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
<<<<<<< HEAD
                  </button>
=======
        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
                  </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
        <section></section>
          <div></div>
            <div></div>
              {caseStudies.map((study) => (
                <div></div>
                  <div></div>
                    <div></div>
                    <div></div>
                      <div></div>
                        <spa></spa>{study.industry}</span>
                        <spa></spa>{study.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div></div>
                    <h3></h3>
                      {study.title}
                    </h3>
                    
                    <div></div>
                      <h></h>Client: {study.client}</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.team}</p>
                    </div>

                    <div></div>
                      <h></h>Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    </div>

                    <div></div>
                      <h></h>Solution</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>

                    <div></div>
                      <h></h>Results</h4>
                      <ul></ul>
                        {study.results.map((result, index) => (
                          <li></li>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {result}
=======
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-cyan-400 font-semibold text-sm mb-1">Client: {study.client}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                          </li>
                        ));
                      </ul>
                    </div>
<<<<<<< HEAD

                    <div></div>
                      <Link></Link>
=======
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button></button>
                        <ExternalLink className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
                </div>
<<<<<<< HEAD
              ));
=======
              ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section></section>
          <div></div>
            <div></div>
              <h2></h2>
                Ready to Write Your Success Story?
              </h2>
              <p></p>
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div></div>
                <Link></Link>
=======
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your business with our proven AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                  Start Your Project
                </Link>
<<<<<<< HEAD
                <Link></Link>
                  Explore Our Services
=======
                <Link
                  to="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default CaseStudiesPage;