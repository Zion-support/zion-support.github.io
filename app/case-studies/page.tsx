'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Star,
  ExternalLink,
  BarChart3,
  Shield,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer support costs and long response times',
      solution: 'Implemented AI chatbot system with natural language processing',
      results: [
        '60% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '$2M annual savings'
      ],
      duration: '3 months',
      team: 'AI & Development Team',
      image: '🤖',
      category: 'AI Services',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
      challenge: 'Outdated on-premise infrastructure causing performance issues',
      solution: 'Complete cloud migration to AWS with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '300% performance improvement',
        'Zero downtime migration'
      ],
      duration: '6 months',
      team: 'Cloud & DevOps Team',
      image: '☁️',
      category: 'IT Services',
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance and security vulnerabilities',
      solution: 'Comprehensive security audit and implementation of advanced security measures',
      results: [
        '100% HIPAA compliance',
        'Zero security incidents',
        'Advanced threat detection',
        '24/7 security monitoring'
      ],
      duration: '4 months',
      team: 'Security Team',
      image: '🔒',
      category: 'Cybersecurity',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corp.',
      industry: 'Retail',
      challenge: 'Lack of data insights for business decision making',
      solution: 'Custom analytics platform with real-time dashboards and predictive analytics',
      results: [
        '40% increase in sales',
        'Real-time business insights',
        'Predictive inventory management',
        'Data-driven decision making'
      ],
      duration: '5 months',
      team: 'Data & Analytics Team',
      image: '📊',
      category: 'Data Analytics',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development & Digital Transformation',
      client: 'EduTech Innovations',
      industry: 'Education',
      challenge: 'Outdated systems and poor user experience',
      solution: 'Cross-platform mobile app with AI-powered features',
      results: [
        '50% increase in user engagement',
        '4.8/5 app store rating',
        'Seamless user experience',
        'AI-powered personalization'
      ],
      duration: '4 months',
      team: 'Mobile Development Team',
      image: '📱',
      category: 'Mobile Development',
      featured: false
    },
    {
      id: 6,
      title: 'Micro SaaS Platform Development',
      client: 'StartupHub',
      industry: 'SaaS',
      challenge: 'Need for scalable, cost-effective business tools',
      solution: 'Custom micro SaaS platform with multiple integrated tools',
      results: [
        '90% cost reduction vs enterprise solutions',
        'Rapid deployment and scaling',
        'High user adoption rate',
        'Profitable within 6 months'
      ],
      duration: '3 months',
      team: 'Full-Stack Development Team',
      image: '⚡',
      category: 'Micro SaaS',
      featured: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '$50M+', label: 'Client Savings' }
  ];

  const categories = ['All', 'AI Services', 'IT Services', 'Cybersecurity', 'Data Analytics', 'Mobile Development', 'Micro SaaS'];

  return (
    <React.Fragment>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Discover how Zion Tech Group has helped businesses transform with AI and IT solutions. Read our success stories and case studies." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT transformation, client results, business outcomes" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real results from real clients. See how we've transformed businesses across industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {caseStudies.filter(study => study.featured).map((study) => (
                  <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-6xl">{study.image}</div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="font-semibold">Client:</span>
                        <span className="ml-2">{study.client}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Building className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="font-semibold">Industry:</span>
                        <span className="ml-2">{study.industry}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="font-semibold">Duration:</span>
                        <span className="ml-2">{study.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Case Studies */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Case Studies</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our complete portfolio of successful projects and transformations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{study.image}</div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-cyan-400" />
                        {study.client}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        {study.duration}
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {study.challenge}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      >
                        Read More
                      </Link>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss your project and see how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default CaseStudiesPage;