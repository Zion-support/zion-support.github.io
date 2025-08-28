import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Star,
  ArrowRight,
  Filter,
  Search,
  Building,
  Heart,
  Globe,
  Zap,
  Shield,
  Rocket,
  Lightbulb,
  Award,
  CheckCircle,
  BarChart3,
  Calendar,
  MapPin,
  Factory,
  Brain,
  Cloud,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'technology', name: 'Technology', icon: Zap },
    { id: 'government', name: 'Government', icon: Shield }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Target },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MetroHealth Systems',
      industry: 'healthcare',
      service: 'ai',
      description: 'Developed an AI-powered diagnostic platform that improved diagnostic accuracy by 40% and reduced patient wait times by 60%.',
      challenge: 'MetroHealth needed to improve diagnostic accuracy and reduce patient wait times while maintaining HIPAA compliance.',
      solution: 'Implemented a comprehensive AI diagnostic platform with machine learning algorithms trained on millions of medical images and patient records.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in patient wait times',
        '30% increase in radiologist productivity',
        'Full HIPAA compliance maintained'
      ],
      metrics: {
        roi: '350%',
        timeline: '8 months',
        teamSize: '12 developers',
        budget: '$2.5M'
      },
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Healthcare', 'Machine Learning', 'HIPAA', 'Diagnostics']
    },
    {
      id: 2,
      title: 'Financial Risk Management System',
      client: 'Global Capital Bank',
      industry: 'finance',
      service: 'ai',
      description: 'Built a real-time risk management system that processes millions of transactions per second and identifies potential fraud.',
      challenge: 'Global Capital needed a real-time system to monitor millions of daily transactions and identify fraudulent activities instantly.',
      solution: 'Developed a high-performance risk management platform using AI algorithms and real-time data processing.',
      results: [
        '99.9% fraud detection accuracy',
        'Real-time processing of 2M+ transactions/sec',
        '40% reduction in false positives',
        '$15M annual fraud prevention savings'
      ],
      metrics: {
        roi: '500%',
        timeline: '12 months',
        teamSize: '18 developers',
        budget: '$4.2M'
      },
      featured: true,
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Finance', 'Risk Management', 'Real-time', 'Fraud Detection']
    },
    {
      id: 3,
      title: 'Manufacturing IoT Platform',
      client: 'Industrial Dynamics Corp',
      industry: 'manufacturing',
      service: 'digital-transformation',
      description: 'Transformed traditional manufacturing operations with IoT sensors and predictive maintenance capabilities.',
      challenge: 'Industrial Dynamics needed to modernize their manufacturing operations and implement predictive maintenance to reduce downtime.',
      solution: 'Deployed a comprehensive IoT platform with sensors, data analytics, and predictive maintenance algorithms.',
      results: [
        '35% reduction in unplanned downtime',
        '25% improvement in equipment efficiency',
        '20% reduction in maintenance costs',
        'Real-time production monitoring'
      ],
      metrics: {
        roi: '280%',
        timeline: '10 months',
        teamSize: '15 developers',
        budget: '$3.1M'
      },
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['IoT', 'Manufacturing', 'Predictive Maintenance', 'Data Analytics', 'Digital Transformation']
    },
    {
      id: 4,
      title: 'E-commerce AI Recommendation Engine',
      client: 'ShopSmart Retail',
      industry: 'retail',
      service: 'ai',
      description: 'Implemented an AI-powered recommendation engine that increased sales by 45% and improved customer satisfaction.',
      challenge: 'ShopSmart wanted to personalize the shopping experience and increase conversion rates through intelligent product recommendations.',
      solution: 'Built a machine learning recommendation engine that analyzes customer behavior and provides personalized product suggestions.',
      results: [
        '45% increase in sales conversion',
        '35% improvement in customer satisfaction',
        '25% increase in average order value',
        'Real-time personalization'
      ],
      metrics: {
        roi: '420%',
        timeline: '6 months',
        teamSize: '10 developers',
        budget: '$1.8M'
      },
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['AI', 'E-commerce', 'Recommendations', 'Machine Learning', 'Personalization']
    },
    {
      id: 5,
      title: 'Government Digital Services Platform',
      client: 'City of Innovation',
      industry: 'government',
      service: 'digital-transformation',
      description: 'Modernized government services with a digital platform that improved citizen access and operational efficiency.',
      challenge: 'The city needed to digitize government services and improve citizen access while maintaining security and compliance.',
      solution: 'Developed a secure digital services platform with citizen portals, automated workflows, and compliance management.',
      results: [
        '80% reduction in service processing time',
        '90% improvement in citizen satisfaction',
        '50% reduction in operational costs',
        'Enhanced security and compliance'
      ],
      metrics: {
        roi: '320%',
        timeline: '14 months',
        teamSize: '20 developers',
        budget: '$5.5M'
      },
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Digital Transformation', 'Government', 'Citizen Services', 'Compliance', 'Security']
    },
    {
      id: 6,
      title: 'Cloud Migration & DevOps Automation',
      client: 'TechStart Solutions',
      industry: 'technology',
      service: 'cloud',
      description: 'Migrated legacy systems to cloud infrastructure and implemented DevOps automation for faster development cycles.',
      challenge: 'TechStart needed to modernize their infrastructure and implement DevOps practices to accelerate development.',
      solution: 'Executed a comprehensive cloud migration strategy with automated CI/CD pipelines and infrastructure as code.',
      results: [
        '70% reduction in deployment time',
        '60% improvement in development velocity',
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved'
      ],
      metrics: {
        roi: '380%',
        timeline: '9 months',
        teamSize: '14 developers',
        budget: '$2.8M'
      },
      featured: false,
      image: '/api/placeholder/400/250',
      tags: ['Cloud Migration', 'DevOps', 'CI/CD', 'Infrastructure', 'Automation']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    
    return matchesSearch && matchesIndustry && matchesService;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and client transformations. See how our AI-powered solutions deliver measurable business results."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real-world transformations that demonstrate the power of our AI-powered solutions. 
              See how we've helped clients across industries achieve remarkable results.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies, clients, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">{caseStudies.length}+</div>
                <div className="text-gray-300">Case Studies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-gray-300">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">350%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16 bg-slate-800/50">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured Success Stories
              </h2>
              <p className="text-gray-300">
                Our most impactful client transformations and implementations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-slate-800/70 rounded-2xl p-8 hover:bg-slate-800/90 transition-all duration-300 hover:scale-105 border border-cyan-400/20"
                >
                  <div className="mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                      <Target className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                        {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                      </span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.metrics.timeline}</div>
                      <div className="text-sm text-gray-400">Timeline</div>
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Case Studies */}
      <section className="py-16">
        <div className="container-responsive">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 font-medium">Filter by:</span>
              </div>
              
              {/* Industry Filter */}
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                    }`}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>

              {/* Service Filter */}
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedService === service.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700/70'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 border border-slate-700/50"
              >
                <div className="mb-4">
                  <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 flex items-center justify-center">
                    <Target className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                    <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                      {study.service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {study.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Client:</h4>
                  <p className="text-gray-300 text-sm">{study.client}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{study.metrics.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{study.metrics.timeline}</div>
                    <div className="text-xs text-gray-400">Timeline</div>
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered solutions can transform your business 
            and deliver measurable results like the ones you see here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
