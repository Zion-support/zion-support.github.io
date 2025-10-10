'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

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
      image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times affecting customer satisfaction.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      duration: '3 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Institute',
      industry: 'Research & Development',
      image: '/images/case-studies/quantum-platform.jpg',
      challenge: 'Need for a scalable platform to conduct quantum computing research and algorithm development.',
      solution: 'Developed a comprehensive quantum computing platform with simulation capabilities and algorithm libraries.',
      results: [
        '50% faster algorithm development',
        'Support for 100+ concurrent researchers',
        'Integration with major quantum hardware providers',
        'Published 15+ research papers'
      ],
      duration: '6 months',
      team: '12 specialists',
      featured: true
    },
    {
      id: '3',
      title: 'Enterprise Cloud Migration',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      image: '/images/case-studies/cloud-migration.jpg',
      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Migrated entire infrastructure to multi-cloud environment with automated scaling and disaster recovery.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment times',
        'Enhanced security and compliance'
      ],
      duration: '4 months',
      team: '15 specialists',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity Framework Implementation',
      client: 'Financial Services Group',
      industry: 'Financial Services',
      image: '/images/case-studies/cybersecurity.jpg',
      challenge: 'Increasing cyber threats and regulatory compliance requirements.',
      solution: 'Implemented comprehensive cybersecurity framework with real-time threat detection and automated response.',
      results: [
        '95% reduction in security incidents',
        '100% compliance with industry regulations',
        'Real-time threat detection and response',
        '24/7 security monitoring'
      ],
      duration: '5 months',
      team: '10 specialists',
      featured: true
    },
    {
      id: '5',
      title: 'IoT Platform for Smart Manufacturing',
      client: 'Industrial Solutions Inc',
      industry: 'Manufacturing',
      image: '/images/case-studies/iot-platform.jpg',
      challenge: 'Need to monitor and optimize manufacturing processes in real-time.',
      solution: 'Developed comprehensive IoT platform with sensors, data analytics, and predictive maintenance.',
      results: [
        '30% improvement in production efficiency',
        '25% reduction in maintenance costs',
        'Real-time process monitoring',
        'Predictive maintenance capabilities'
      ],
      duration: '7 months',
      team: '18 specialists',
      featured: false
    },
    {
      id: '6',
      title: 'Data Analytics and Business Intelligence',
      client: 'Retail Chain Corporation',
      industry: 'Retail',
      image: '/images/case-studies/data-analytics.jpg',
      challenge: 'Lack of data-driven insights for business decision making and customer behavior analysis.',
      solution: 'Implemented advanced analytics platform with machine learning models for customer segmentation and demand forecasting.',
      results: [
        '35% increase in sales',
        '20% improvement in inventory management',
        'Real-time business intelligence dashboards',
        'Predictive customer behavior modeling'
      ],
      duration: '4 months',
      team: '12 specialists',
      featured: false
    }
  ];

  const industries = ['All', 'Technology', 'Research & Development', 'Manufacturing', 'Financial Services', 'Retail'];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and see how we've helped clients achieve their technology goals through innovative solutions." />
        <meta name="keywords" content="case studies, AI projects, quantum computing, cloud migration, cybersecurity, IoT solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped organizations transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <TrendingUp className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.team}
                      </span>
                      <span>{study.duration}</span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold py-3 rounded-xl hover:bg-cyan-300 transition-colors group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-500/20 relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {study.client}
                      </span>
                      <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.team}
                      </span>
                      <span>{study.duration}</span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results with innovative technology solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;