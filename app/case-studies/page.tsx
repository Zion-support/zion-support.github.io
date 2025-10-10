'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign, CheckCircle, Clock, Target } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain operations leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management',
      results: [
        '40% reduction in inventory costs',
        '60% improvement in delivery times',
        '25% increase in overall efficiency',
        '$2.5M annual savings'
      ],
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Machine Learning', 'Predictive Analytics', 'Cloud Computing'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Enhanced Financial Modeling',
      client: 'Fortune 500 Bank',
      industry: 'Financial Services',
      challenge: 'Complex risk calculations taking days to complete with traditional methods',
      solution: 'Developed quantum algorithms for real-time risk assessment and portfolio optimization',
      results: [
        '95% faster risk calculations',
        '30% improvement in portfolio returns',
        '50% reduction in computational costs',
        'Real-time decision making'
      ],
      duration: '8 months',
      team: '12 specialists',
      technologies: ['Quantum Computing', 'Financial Modeling', 'Risk Analytics'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Transformation',
      client: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Frequent security breaches and compliance violations',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture',
      results: [
        '99.9% reduction in security incidents',
        '100% compliance achievement',
        '50% faster threat detection',
        'Zero data breaches in 12 months'
      ],
      duration: '4 months',
      team: '6 specialists',
      technologies: ['Zero Trust', 'AI Security', 'Compliance Automation'],
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Migration & Optimization',
      client: 'E-commerce Platform',
      industry: 'Retail',
      challenge: 'Legacy infrastructure unable to handle peak traffic and scaling requirements',
      solution: 'Complete cloud migration with auto-scaling and performance optimization',
      results: [
        '300% improvement in performance',
        '80% reduction in infrastructure costs',
        '99.99% uptime achievement',
        '10x faster deployment cycles'
      ],
      duration: '5 months',
      team: '10 specialists',
      technologies: ['AWS', 'Kubernetes', 'Microservices'],
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics Platform',
      client: 'Media Company',
      industry: 'Entertainment',
      challenge: 'Fragmented data sources preventing effective audience insights',
      solution: 'Unified data platform with real-time analytics and predictive modeling',
      results: [
        '200% increase in audience engagement',
        '35% improvement in content recommendations',
        '60% faster reporting cycles',
        'Real-time insights dashboard'
      ],
      duration: '7 months',
      team: '9 specialists',
      technologies: ['Big Data', 'Machine Learning', 'Real-time Analytics'],
      featured: false
    },
    {
      id: 6,
      title: 'IoT Smart City Implementation',
      client: 'City Government',
      industry: 'Public Sector',
      challenge: 'Inefficient city services and lack of real-time monitoring',
      solution: 'Comprehensive IoT network with AI-powered city management system',
      results: [
        '40% reduction in energy consumption',
        '50% improvement in traffic flow',
        '30% decrease in emergency response time',
        'Citizen satisfaction increased by 80%'
      ],
      duration: '12 months',
      team: '15 specialists',
      technologies: ['IoT', 'Edge Computing', 'Smart City Analytics'],
      featured: false
    }
  ];

  const featuredStudy = caseStudies.find(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industries Served' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful client projects and case studies. See how we've helped businesses achieve remarkable results with AI, quantum computing, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI projects, quantum computing, cloud solutions, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Case
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real results from real clients. Discover how we've transformed businesses 
                across industries with cutting-edge technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredStudy && (
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">Featured Case Study</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{featuredStudy.title}</h2>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Client: {featuredStudy.client}</h3>
                      <p className="text-gray-300 mb-4">{featuredStudy.challenge}</p>
                      <p className="text-gray-300 mb-4">{featuredStudy.solution}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredStudy.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{featuredStudy.team}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                    <div className="space-y-3">
                      {featuredStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredStudy.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">More Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of successful projects across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{study.team}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;