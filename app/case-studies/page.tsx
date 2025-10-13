import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Cloud, Database } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Needed to implement AI-driven personalization and inventory management',
      solution: 'Developed custom AI algorithms for product recommendations and demand forecasting',
      results: [
        '40% increase in conversion rates',
        '25% reduction in inventory costs',
        '60% improvement in customer satisfaction'
      ],
      technologies: ['AI/ML', 'React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Cloud Migration & Security Enhancement',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Legacy system migration to cloud with enhanced security compliance',
      solution: 'Complete cloud infrastructure redesign with zero-downtime migration',
      results: [
        '99.9% uptime achieved',
        '50% reduction in operational costs',
        '100% compliance with financial regulations'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Security'],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '4 months'
    },
    {
      id: 3,
      title: '5G IoT Smart Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Implement 5G connectivity for real-time IoT monitoring and automation',
      solution: 'Deployed 5G private network with edge computing for smart factory operations',
      results: [
        '30% increase in production efficiency',
        '45% reduction in equipment downtime',
        'Real-time predictive maintenance'
      ],
      technologies: ['5G', 'IoT', 'Edge Computing', 'AI Analytics', 'Real-time Systems'],
      image: '/images/case-studies/5g-manufacturing.jpg',
      duration: '8 months'
    },
    {
      id: 4,
      title: 'Micro-SaaS Development Platform',
      client: 'StartupHub',
      industry: 'SaaS',
      challenge: 'Build scalable micro-SaaS platform for multiple business applications',
      solution: 'Created modular microservices architecture with automated deployment',
      results: [
        '10x faster application deployment',
        '90% reduction in development time',
        'Support for 50+ concurrent applications'
      ],
      technologies: ['Microservices', 'Docker', 'Kubernetes', 'React', 'Node.js'],
      image: '/images/case-studies/micro-saas.jpg',
      duration: '5 months'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '150+', label: 'Projects Completed' },
    { icon: <TrendingUp className="w-8 h-8" />, number: '95%', label: 'Client Satisfaction' },
    { icon: <Zap className="w-8 h-8" />, number: '40%', label: 'Average Cost Reduction' },
    { icon: <Shield className="w-8 h-8" />, number: '100%', label: 'Security Compliance' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Transformations</title>
        <meta name="description" content="Explore our successful projects and client transformations across AI, cloud computing, 5G, and micro-SaaS solutions. See real results and business impact." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, cloud migration, 5G implementation, micro-SaaS" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Case Studies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge technology solutions. 
              Real projects, real results, real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Projects
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most impactful projects across different industries and technologies
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="text-white text-2xl font-bold">{study.id}</div>
                        </div>
                        <p className="text-gray-300">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {study.duration}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Client: {study.client}</h4>
                        <p className="text-gray-300 mb-4">{study.challenge}</p>
                        <p className="text-gray-300 mb-4">{study.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
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
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven technology solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}