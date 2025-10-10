'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, BarChart, Shield, Brain, Cloud, Code, Target, Zap, Globe, Award, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 5 },
    { id: 'cloud', name: 'Cloud Migration', count: 4 },
    { id: 'security', name: 'Cybersecurity', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      category: 'ai',
      duration: '6 months',
      teamSize: '8 members',
      image: '/images/case-studies/ai-customer-service.webp',
      challenge: 'TechCorp was struggling with high customer service costs and long response times, handling over 10,000 tickets monthly.',
      solution: 'Implemented an AI-powered chatbot system with natural language processing and automated ticket routing.',
      results: [
        '75% reduction in response time',
        '60% decrease in support costs',
        '95% customer satisfaction rate',
        '40% increase in first-call resolution'
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'AWS', 'React'],
      featured: true
    },
    {
      id: 2,
      title: 'Enterprise Cloud Migration',
      client: 'Global Finance Ltd.',
      industry: 'Financial Services',
      category: 'cloud',
      duration: '8 months',
      teamSize: '12 members',
      image: '/images/case-studies/cloud-migration.webp',
      challenge: 'Global Finance needed to migrate their legacy on-premises infrastructure to the cloud while maintaining compliance and security.',
      solution: 'Designed and executed a comprehensive cloud migration strategy using AWS with zero-downtime deployment.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment cycles',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      category: 'security',
      duration: '4 months',
      teamSize: '6 members',
      image: '/images/case-studies/cybersecurity.webp',
      challenge: 'HealthCare Plus faced increasing cyber threats and needed to strengthen their security posture to protect patient data.',
      solution: 'Implemented a comprehensive cybersecurity framework including threat detection, incident response, and staff training.',
      results: [
        'Zero security breaches',
        '99.8% threat detection rate',
        '50% faster incident response',
        'Full compliance with HIPAA'
      ],
      technologies: ['SIEM', 'Firewall', 'EDR', 'Security Awareness Training'],
      featured: false
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Manufacturing Co.',
      industry: 'Manufacturing',
      category: 'ai',
      duration: '10 months',
      teamSize: '10 members',
      image: '/images/case-studies/supply-chain-ai.webp',
      challenge: 'Manufacturing Co. needed to optimize their supply chain to reduce costs and improve efficiency across 50+ suppliers.',
      solution: 'Developed an AI-powered supply chain optimization platform with predictive analytics and automated decision-making.',
      results: [
        '30% reduction in supply chain costs',
        '25% improvement in delivery times',
        '90% accuracy in demand forecasting',
        '15% increase in overall efficiency'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Python', 'Azure'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform Development',
      client: 'RetailMax',
      industry: 'Retail',
      category: 'ai',
      duration: '5 months',
      teamSize: '7 members',
      image: '/images/case-studies/data-analytics.webp',
      challenge: 'RetailMax needed to analyze customer behavior and sales data to improve their marketing strategies and inventory management.',
      solution: 'Built a comprehensive data analytics platform with real-time dashboards and machine learning insights.',
      results: [
        '40% increase in sales',
        '35% improvement in inventory turnover',
        '60% better customer targeting',
        'Real-time business insights'
      ],
      technologies: ['Python', 'Apache Spark', 'Tableau', 'Machine Learning'],
      featured: false
    },
    {
      id: 6,
      title: 'Multi-Cloud Security Implementation',
      client: 'E-commerce Giant',
      industry: 'E-commerce',
      category: 'security',
      duration: '6 months',
      teamSize: '9 members',
      image: '/images/case-studies/multi-cloud-security.webp',
      challenge: 'E-commerce Giant needed to secure their multi-cloud environment spanning AWS, Azure, and GCP.',
      solution: 'Implemented a unified security framework across all cloud platforms with centralized monitoring and management.',
      results: [
        'Unified security posture',
        '99.9% security compliance',
        '50% reduction in security incidents',
        'Centralized threat management'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Security Orchestration'],
      featured: false
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const featuredStudy = caseStudies.find(study => study.featured);

  return (
    <>
      <SEOOptimizer 
        title="Case Studies - Success Stories | Zion Tech Group"
        description="Explore our successful AI and IT implementations across various industries. See how we've helped businesses transform and achieve their goals."
        keywords="case studies, success stories, AI implementation, cloud migration, cybersecurity, business transformation"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Case Studies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses across industries transform 
                their operations with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredStudy && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8">Featured Case Study</h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative">
                      <img
                        src={featuredStudy.image}
                        alt={featuredStudy.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {categories.find(cat => cat.id === featuredStudy.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{featuredStudy.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featuredStudy.title}</h3>
                      <p className="text-gray-300 mb-6">{featuredStudy.challenge}</p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-gray-400 text-sm">Duration</p>
                          <p className="text-white font-semibold">{featuredStudy.duration}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Team Size</p>
                          <p className="text-white font-semibold">{featuredStudy.teamSize}</p>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                        Read Full Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">All Case Studies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {categories.find(cat => cat.id === study.category)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 mb-3">{study.client} • {study.industry}</p>
                      <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                      <div className="space-y-2 mb-4">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            {result}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business 
              and help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
