'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Target, BarChart, Clock, Globe, Brain, Cloud, Shield, Code, Database, Smartphone, Settings, Lock, Zap, Star, Phone, Mail, Eye, MessageSquare, Share2, Download, ExternalLink } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 Retail Chain: AI-Powered Inventory Optimization',
      company: 'Global Retail Corp',
      industry: 'Retail',
      challenge: 'Managing inventory across 500+ stores with 95% accuracy while reducing waste by 30%',
      solution: 'Implemented AI-powered demand forecasting and automated inventory management system',
      results: [
        '40% reduction in inventory costs',
        '95% accuracy in demand forecasting',
        '30% reduction in waste',
        '25% increase in profit margins'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Cloud Computing', 'IoT Sensors'],
      duration: '6 months',
      teamSize: '12 experts',
      image: '/case-studies/retail-inventory.jpg',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Provider: Cybersecurity Transformation',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Securing patient data across multiple systems while maintaining HIPAA compliance',
      solution: 'Comprehensive cybersecurity overhaul with AI-powered threat detection and zero-trust architecture',
      results: [
        '99.9% security uptime achieved',
        'Zero data breaches in 18 months',
        '50% faster threat response time',
        'Full HIPAA compliance certification'
      ],
      technologies: ['Cybersecurity', 'AI Threat Detection', 'Zero Trust', 'Compliance'],
      duration: '4 months',
      teamSize: '8 experts',
      image: '/case-studies/healthcare-security.jpg',
      category: 'Cybersecurity',
      featured: true
    },
    {
      id: 3,
      title: 'Financial Services: Cloud Migration & AI Integration',
      company: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Migrating legacy systems to cloud while implementing AI for fraud detection',
      solution: 'Complete cloud migration with AI-powered fraud detection and real-time analytics',
      results: [
        '60% reduction in infrastructure costs',
        '85% improvement in fraud detection accuracy',
        '99.9% system uptime',
        '40% faster transaction processing'
      ],
      technologies: ['Cloud Migration', 'AI/ML', 'Real-time Analytics', 'Microservices'],
      duration: '8 months',
      teamSize: '15 experts',
      image: '/case-studies/fintech-cloud.jpg',
      category: 'Cloud Computing',
      featured: false
    },
    {
      id: 4,
      title: 'Manufacturing: IoT & AI-Powered Predictive Maintenance',
      company: 'Industrial Manufacturing Co',
      industry: 'Manufacturing',
      challenge: 'Reducing equipment downtime and maintenance costs across 20 production facilities',
      solution: 'IoT sensor network with AI-powered predictive maintenance and automated scheduling',
      results: [
        '45% reduction in unplanned downtime',
        '35% decrease in maintenance costs',
        '90% accuracy in failure prediction',
        '25% increase in overall equipment effectiveness'
      ],
      technologies: ['IoT', 'AI/ML', 'Predictive Analytics', 'Edge Computing'],
      duration: '5 months',
      teamSize: '10 experts',
      image: '/case-studies/manufacturing-iot.jpg',
      category: 'AI & Machine Learning',
      featured: false
    },
    {
      id: 5,
      title: 'E-commerce Platform: Micro SAAS Integration',
      company: 'Online Marketplace Inc',
      industry: 'E-commerce',
      challenge: 'Scaling operations and improving customer experience with limited resources',
      solution: 'Integrated multiple micro SAAS solutions for analytics, customer service, and marketing automation',
      results: [
        '200% increase in customer satisfaction',
        '50% reduction in support ticket volume',
        '35% increase in conversion rates',
        '60% improvement in marketing ROI'
      ],
      technologies: ['Micro SAAS', 'API Integration', 'Analytics', 'Automation'],
      duration: '3 months',
      teamSize: '6 experts',
      image: '/case-studies/ecommerce-microsaas.jpg',
      category: 'Micro SAAS',
      featured: false
    },
    {
      id: 6,
      title: 'Government Agency: Digital Transformation',
      company: 'State Government Department',
      industry: 'Government',
      challenge: 'Modernizing citizen services and improving data security across multiple departments',
      solution: 'Complete digital transformation with secure cloud infrastructure and citizen portal',
      results: [
        '70% reduction in processing time',
        '90% citizen satisfaction rate',
        '100% data security compliance',
        '50% reduction in operational costs'
      ],
      technologies: ['Cloud Computing', 'Security', 'Digital Transformation', 'Citizen Portal'],
      duration: '12 months',
      teamSize: '20 experts',
      image: '/case-studies/government-digital.jpg',
      category: 'Digital Transformation',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: caseStudies.length },
    { name: 'AI & Machine Learning', count: caseStudies.filter(cs => cs.category === 'AI & Machine Learning').length },
    { name: 'Cybersecurity', count: caseStudies.filter(cs => cs.category === 'Cybersecurity').length },
    { name: 'Cloud Computing', count: caseStudies.filter(cs => cs.category === 'Cloud Computing').length },
    { name: 'Micro SAAS', count: caseStudies.filter(cs => cs.category === 'Micro SAAS').length },
    { name: 'Digital Transformation', count: caseStudies.filter(cs => cs.category === 'Digital Transformation').length }
  ];

  const industries = [
    'Retail', 'Healthcare', 'Financial Services', 'Manufacturing', 'E-commerce', 'Government', 'Education', 'Technology'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <div><SEOOptimizer
        title="Case Studies - Zion Tech Group"
        description="Explore our successful case studies and client success stories. See how we've helped businesses achieve remarkable results with AI and IT solutions."
        keywords={['case studies', 'success stories', 'client results', 'AI solutions', 'IT projects', 'business transformation']}
        canonicalUrl="https://ziontechgroup.com/case-studies"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Real Results, Real Impact
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions. 
                Each case study showcases real challenges, innovative solutions, and measurable outcomes.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="cyber-card p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Filter by Industry</h3>
                    <div className="flex flex-wrap gap-2">
                      {industries.map((industry, index) => (
                        <button
                          key={index}
                          className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">Featured Case Studies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
                  <div key={caseStudy.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {caseStudy.category}
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 neon-text">{caseStudy.title}</h3>
                    <div className="mb-4">
                      <p className="text-gray-300 font-medium mb-2">{caseStudy.company} • {caseStudy.industry}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {caseStudy.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {caseStudy.teamSize}
                        </span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{caseStudy.challenge}</p>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={`/case-studies/${caseStudy.id}`}
                        className="cyber-button flex items-center space-x-2"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Case Studies */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 neon-text">All Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                  <div key={caseStudy.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">
                        {caseStudy.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-xs">
                        <Eye className="w-4 h-4" />
                        <span>2.3k views</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-text">{caseStudy.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{caseStudy.company} • {caseStudy.industry}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{caseStudy.challenge}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                      <div className="space-y-1">
                        {caseStudy.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {caseStudy.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {caseStudy.teamSize}
                        </span>
                      </div>
                      <a
                        href={`/case-studies/${caseStudy.id}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                Let us help you achieve similar results. Our expert team is ready to transform your business with cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Start Your Project</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudiesPage;