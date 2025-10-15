import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation with AI',
      client: 'TechStart Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '60% improvement in customer engagement',
        '35% increase in average order value',
        '99.9% uptime achieved'
      ],
      duration: '6 months',
      team: '8 members',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Management System Modernization',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Outdated patient management system causing inefficiencies',
      solution: 'Complete system overhaul with AI-powered patient insights and automated workflows',
      results: [
        '50% reduction in administrative time',
        '90% patient satisfaction rate',
        '100% HIPAA compliance',
        'Real-time patient monitoring'
      ],
      duration: '8 months',
      team: '12 members',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Smart City IoT Platform Implementation',
      client: 'City of Innovation',
      industry: 'Smart City',
      challenge: 'Need for real-time city monitoring and data-driven decisions',
      solution: 'Comprehensive IoT platform with 5G connectivity and AI analytics',
      results: [
        '30% energy savings',
        '25% traffic reduction',
        'Real-time insights dashboard',
        'Improved citizen services'
      ],
      duration: '12 months',
      team: '15 members',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Financial Analytics Dashboard Development',
      client: 'FinancePro Ltd.',
      industry: 'FinTech',
      challenge: 'Manual financial reporting and lack of predictive insights',
      solution: 'AI-powered financial analytics platform with predictive modeling',
      results: [
        '35% better predictions',
        '20% risk reduction',
        'Automated reporting',
        'Real-time financial insights'
      ],
      duration: '4 months',
      team: '6 members',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Educational Learning Platform with AI Tutoring',
      client: 'EduTech Academy',
      industry: 'EdTech',
      challenge: 'Low student engagement and personalized learning needs',
      solution: 'AI-powered learning platform with personalized tutoring and adaptive content',
      results: [
        '45% improvement in learning outcomes',
        '80% student engagement rate',
        'Scalable platform for 100k+ students',
        'Personalized learning paths'
      ],
      duration: '7 months',
      team: '10 members',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Supply Chain Optimization with AI',
      client: 'Global Logistics Co.',
      industry: 'Supply Chain',
      challenge: 'Inefficient supply chain operations and high costs',
      solution: 'AI-powered supply chain management with predictive analytics and automation',
      results: [
        '25% cost reduction',
        '40% efficiency improvement',
        'Automated processes',
        'Real-time tracking'
      ],
      duration: '9 months',
      team: '14 members',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const industries = ['All', 'E-commerce', 'Healthcare', 'Smart City', 'FinTech', 'EdTech', 'Supply Chain'];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '150+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Success Rate', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> }
  ];

  const featuredCaseStudy = caseStudies.find(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform their operations with AI, cloud solutions, and digital innovation." />
        <meta name="keywords" content="case studies, success stories, client projects, AI implementation, digital transformation, business results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and case studies from our client projects" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Discover how we've helped businesses transform their operations and achieve remarkable results with our innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Case Study</h2>
              <div className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredCaseStudy.image}
                      alt={featuredCaseStudy.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {featuredCaseStudy.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredCaseStudy.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredCaseStudy.solution}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {featuredCaseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div>Client: {featuredCaseStudy.client}</div>
                        <div>Team: {featuredCaseStudy.team}</div>
                      </div>
                      <a
                        href={`/case-studies/${featuredCaseStudy.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Industry Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    industry === 'All'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">All Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">{study.solution}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </div>
                        ))}
                        {study.results.length > 2 && (
                          <div className="text-xs text-cyan-400">
                            +{study.results.length - 2} more results
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        <div>Client: {study.client}</div>
                        <div>Team: {study.team}</div>
                      </div>
                      <a
                        href={`/case-studies/${study.id}`}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business and achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/portfolio"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;