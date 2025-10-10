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
      solution: 'Migrated entire infrastructure to AWS with microservices architecture and automated CI/CD pipelines.',
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
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats and compliance requirements for patient data protection.',
      solution: 'Implemented comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        '40% improvement in threat detection time',
        'Enhanced data encryption standards'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production processes and equipment performance.',
      solution: 'Developed comprehensive IoT platform with real-time monitoring and predictive analytics.',
      results: [
        '25% increase in production efficiency',
        '30% reduction in equipment downtime',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      image: '/images/case-studies/iot-platform.jpg',
      duration: '5 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      value: '150+',
      label: 'Projects Completed'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      value: '200+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      value: '95%',
      label: 'Success Rate'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      value: '50+',
      label: 'Industry Awards'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with cutting-edge technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI projects, cloud migration, cybersecurity, IoT solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've helped businesses across industries transform with innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Case Studies
            </h2>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-xl flex items-center justify-center">
                      <div className="text-6xl opacity-50">📊</div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-cyan-400 font-medium mb-4">Client: {study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-400" />
                          Challenge
                        </h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          Solution
                        </h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Team: {study.team}</span>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2">
                      View Full Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;