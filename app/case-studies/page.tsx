'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      duration: '6 months',
      teamSize: '8 members',
      image: '/api/placeholder/600/400',
      challenge: 'TechCorp was struggling with high customer support costs and long response times, leading to customer dissatisfaction and increased churn rates.',
      solution: 'We implemented an AI-powered customer support system with intelligent chatbots, automated ticket routing, and sentiment analysis capabilities.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '90% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      technologies: ['AI Chatbots', 'Natural Language Processing', 'Sentiment Analysis', 'Automated Routing'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      duration: '8 months',
      teamSize: '12 members',
      image: '/api/placeholder/600/400',
      challenge: 'FinanceCorp needed to migrate their legacy on-premises infrastructure to the cloud while maintaining compliance and security standards.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing zero-downtime migration and enhanced security measures.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Zero data loss during migration',
        'Full compliance with financial regulations'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Security Compliance'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      duration: '4 months',
      teamSize: '6 members',
      image: '/api/placeholder/600/400',
      challenge: 'MediCare Plus faced increasing cybersecurity threats and needed to strengthen their security posture to protect patient data and maintain HIPAA compliance.',
      solution: 'We implemented a comprehensive cybersecurity framework including threat detection, vulnerability assessment, and automated incident response.',
      results: [
        '95% reduction in security incidents',
        '100% HIPAA compliance achieved',
        '24/7 threat monitoring established',
        'Zero data breaches since implementation'
      ],
      technologies: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'HIPAA Compliance'],
      featured: false
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      duration: '10 months',
      teamSize: '15 members',
      image: '/api/placeholder/600/400',
      challenge: 'Global Manufacturing Co. needed to optimize their complex supply chain operations to reduce costs and improve efficiency across multiple facilities.',
      solution: 'We developed an AI-powered supply chain optimization platform with predictive analytics, demand forecasting, and automated inventory management.',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        '20% increase in overall efficiency',
        '15% reduction in waste and overstock'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Integration', 'Real-time Monitoring'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform for E-commerce',
      client: 'ShopSmart Retail',
      industry: 'E-commerce',
      duration: '5 months',
      teamSize: '10 members',
      image: '/api/placeholder/600/400',
      challenge: 'ShopSmart Retail needed to gain better insights from their customer data to improve marketing campaigns and increase sales.',
      solution: 'We built a comprehensive data analytics platform with real-time dashboards, customer segmentation, and predictive marketing capabilities.',
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        '50% better targeting accuracy',
        '25% increase in average order value'
      ],
      technologies: ['Big Data', 'Real-time Analytics', 'Customer Segmentation', 'Predictive Modeling'],
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App Development for Banking',
      client: 'SecureBank',
      industry: 'Banking',
      duration: '7 months',
      teamSize: '14 members',
      image: '/api/placeholder/600/400',
      challenge: 'SecureBank wanted to modernize their customer experience with a mobile banking app that offers advanced features while maintaining security.',
      solution: 'We developed a secure, feature-rich mobile banking application with biometric authentication, real-time transactions, and AI-powered financial insights.',
      results: [
        '4.8/5 app store rating',
        '60% increase in mobile transactions',
        'Zero security incidents',
        '85% customer adoption rate'
      ],
      technologies: ['React Native', 'Biometric Authentication', 'Real-time APIs', 'AI Integration'],
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Case Study</h2>
            {(() => {
              const featured = caseStudies.find(study => study.featured);
              return featured ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <div className="text-6xl">📊</div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">{featured.industry}</span>
                        <span>{featured.duration}</span>
                        <span>{featured.teamSize}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featured.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{featured.challenge}</p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {featured.results.slice(0, 4).map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-green-400">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl">📈</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">{study.industry}</span>
                      <span>{study.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {study.challenge}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-xs text-green-400">
                          <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-cyan-400 text-sm font-medium">{study.client}</div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
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