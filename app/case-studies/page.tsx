'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, 
  TrendingUp, DollarSign, Clock, Target,
  Brain, Cloud, Shield, Code, Smartphone,
  BarChart3, Award, Lightbulb, Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer service costs',
      solution: 'AI-powered chatbot and recommendation engine',
      results: [
        '300% increase in conversion rates',
        '60% reduction in customer service costs',
        '45% improvement in customer satisfaction',
        '$2.5M additional revenue in first year'
      ],
      duration: '6 months',
      team: '8 experts',
      technologies: ['AI/ML', 'React', 'Node.js', 'AWS'],
      image: '/case-studies/ecommerce-ai.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Comprehensive data analytics and visualization platform',
      results: [
        '80% faster report generation',
        '50% reduction in data processing time',
        '99.9% data accuracy improvement',
        '30% cost savings in operations'
      ],
      duration: '8 months',
      team: '12 experts',
      technologies: ['Data Analytics', 'Python', 'PostgreSQL', 'Azure'],
      image: '/case-studies/healthcare-analytics.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy infrastructure and compliance requirements',
      solution: 'Complete cloud migration with enhanced security',
      results: [
        '70% reduction in infrastructure costs',
        '99.99% uptime achieved',
        '100% compliance with regulations',
        '50% faster application deployment'
      ],
      duration: '10 months',
      team: '15 experts',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      image: '/case-studies/cloud-migration.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring and predictive maintenance needs',
      solution: 'IoT sensors and AI-powered predictive analytics',
      results: [
        '40% reduction in equipment downtime',
        '25% increase in production efficiency',
        '35% decrease in maintenance costs',
        '90% improvement in quality control'
      ],
      duration: '7 months',
      team: '10 experts',
      technologies: ['IoT', 'Machine Learning', 'Python', 'Azure IoT'],
      image: '/case-studies/manufacturing-iot.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Mobile App Development',
      client: 'PropertyMax Realty',
      industry: 'Real Estate',
      challenge: 'Outdated systems and poor customer experience',
      solution: 'Modern mobile app with AR property viewing',
      results: [
        '200% increase in user engagement',
        '150% more property inquiries',
        '85% customer satisfaction rating',
        '40% faster property sales cycle'
      ],
      duration: '5 months',
      team: '6 experts',
      technologies: ['React Native', 'AR/VR', 'Node.js', 'MongoDB'],
      image: '/case-studies/real-estate-mobile.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity Enhancement Project',
      client: 'GlobalTech Corp',
      industry: 'Technology',
      challenge: 'Increasing cyber threats and compliance gaps',
      solution: 'Comprehensive security framework and monitoring system',
      results: [
        '95% reduction in security incidents',
        '100% compliance with industry standards',
        '24/7 threat monitoring implemented',
        '60% faster incident response time'
      ],
      duration: '4 months',
      team: '8 experts',
      technologies: ['Cybersecurity', 'SIEM', 'Python', 'AWS Security'],
      image: '/case-studies/cybersecurity.jpg',
      featured: false
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '$50M+', label: 'Value Delivered', icon: DollarSign },
  ];

  const industries = [
    'All Industries',
    'E-commerce',
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Real Estate',
    'Technology',
    'Education',
    'Retail'
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI implementations, cloud migrations, mobile app development, and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, AI implementation, cloud migration, mobile app development, digital transformation, success stories" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Success
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses across industries transform their operations 
                and achieve remarkable results with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-10">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Star className="w-8 h-8 text-yellow-400 mr-3" />
                  Featured Case Study
                </h2>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BarChart3 className="w-24 h-24 text-cyan-400" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {featuredCaseStudy.industry}
                        </span>
                        <span className="text-gray-400 text-sm">Featured</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        {featuredCaseStudy.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        <strong>Client:</strong> {featuredCaseStudy.client}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        <strong>Challenge:</strong> {featuredCaseStudy.challenge}
                      </p>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        <strong>Solution:</strong> {featuredCaseStudy.solution}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{featuredCaseStudy.duration}</div>
                          <div className="text-gray-400 text-sm">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{featuredCaseStudy.team}</div>
                          <div className="text-gray-400 text-sm">Team Size</div>
                        </div>
                      </div>
                      <Link
                        to={`/case-studies/${featuredCaseStudy.id}`}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.filter(study => !study.featured).map((study) => (
                  <div
                    key={study.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <BarChart3 className="w-16 h-16 text-cyan-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs font-medium">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-xs">{study.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        <strong>Client:</strong> {study.client}
                      </p>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {study.challenge}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">{study.duration}</div>
                          <div className="text-gray-400 text-xs">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{study.team}</div>
                          <div className="text-gray-400 text-xs">Team</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {study.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            +{study.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 inline-flex items-center space-x-1"
                      >
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our expert team help you achieve similar results with our proven AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;