'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Users, TrendingUp, Award, Globe } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Globe, value: '25+', label: 'Countries Served' }
  ];

  const caseStudies = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Platform',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Needed to scale their platform to handle 10x traffic growth while improving user experience',
      solution: 'Implemented AI-driven recommendation engine, automated inventory management, and real-time analytics',
      results: [
        '300% increase in conversion rates',
        '50% reduction in operational costs',
        '99.9% uptime achieved',
        '40% improvement in page load times'
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS', 'MongoDB'],
      image: '/images/case-studies/ecommerce.jpg'
    },
    {
      id: '2',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Required secure, HIPAA-compliant platform for analyzing patient data and predicting health outcomes',
      solution: 'Built comprehensive data analytics platform with machine learning models for predictive healthcare',
      results: [
        '60% improvement in diagnosis accuracy',
        '45% reduction in readmission rates',
        '100% HIPAA compliance maintained',
        '30% faster patient data processing'
      ],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'Kubernetes'],
      image: '/images/case-studies/healthcare.jpg'
    },
    {
      id: '3',
      title: 'Financial Services Automation',
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Needed to automate complex financial processes while maintaining regulatory compliance',
      solution: 'Developed AI-powered automation system for risk assessment, fraud detection, and compliance monitoring',
      results: [
        '80% reduction in manual processing time',
        '90% accuracy in fraud detection',
        '100% regulatory compliance',
        '50% cost savings on operations'
      ],
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'PostgreSQL'],
      image: '/images/case-studies/finance.jpg'
    },
    {
      id: '4',
      title: 'Smart Manufacturing System',
      client: 'Industrial Solutions Ltd',
      industry: 'Manufacturing',
      challenge: 'Required IoT integration and predictive maintenance for manufacturing equipment',
      solution: 'Implemented comprehensive IoT platform with real-time monitoring and predictive analytics',
      results: [
        '35% reduction in equipment downtime',
        '25% increase in production efficiency',
        '60% improvement in maintenance scheduling',
        '40% reduction in maintenance costs'
      ],
      technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
      image: '/images/case-studies/manufacturing.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI projects, IT solutions, business transformation, client results" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📊</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-purple-400 text-sm mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <span>View Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;