import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Clock, DollarSign } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechStart Inc.',
      industry: 'E-commerce',
      duration: '6 months',
      budget: '$150,000',
      challenge: 'Low conversion rates and poor customer experience due to outdated technology stack.',
      solution: 'Implemented AI-powered recommendation engine, automated customer service, and modern cloud infrastructure.',
      results: [
        '300% increase in conversion rates',
        '50% reduction in customer service costs',
        '99.9% uptime achieved',
        '40% increase in average order value'
      ],
      technologies: ['AI/ML', 'Cloud Infrastructure', 'React', 'Node.js', 'MongoDB'],
      image: '/images/case-studies/ecommerce.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      duration: '8 months',
      budget: '$200,000',
      challenge: 'Fragmented patient data across multiple systems preventing effective treatment decisions.',
      solution: 'Built comprehensive data analytics platform with AI-powered insights and real-time monitoring.',
      results: [
        '60% faster diagnosis times',
        '35% reduction in readmission rates',
        '90% improvement in data accuracy',
        '25% cost savings in operations'
      ],
      technologies: ['AI Analytics', 'Data Pipeline', 'Python', 'PostgreSQL', 'Docker'],
      image: '/images/case-studies/healthcare.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Financial Services Automation',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      duration: '4 months',
      budget: '$100,000',
      challenge: 'Manual loan processing causing delays and errors in customer service.',
      solution: 'Automated loan processing system with AI-powered risk assessment and fraud detection.',
      results: [
        '80% reduction in processing time',
        '95% accuracy in risk assessment',
        '70% decrease in fraud cases',
        '50% improvement in customer satisfaction'
      ],
      technologies: ['AI Automation', 'Machine Learning', 'Java', 'Spring Boot', 'Redis'],
      image: '/images/case-studies/finance.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Corp',
      industry: 'Manufacturing',
      duration: '10 months',
      budget: '$300,000',
      challenge: 'Lack of real-time visibility into production processes and equipment performance.',
      solution: 'Implemented comprehensive IoT solution with predictive maintenance and real-time monitoring.',
      results: [
        '45% reduction in downtime',
        '30% increase in production efficiency',
        '25% decrease in maintenance costs',
        '90% improvement in quality control'
      ],
      technologies: ['IoT', 'Edge Computing', '5G', 'Python', 'InfluxDB'],
      image: '/images/case-studies/manufacturing.jpg',
      featured: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Explore our successful projects and client transformations across various industries. See how we've helped businesses achieve their goals with AI and technology solutions."
        />
        <meta
          name="keywords"
          content="case studies, success stories, client projects, AI solutions, technology implementations, business transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Case
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Studies
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable results with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    study.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {study.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-cyan-400/50" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{study.budget}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Industry:</strong> {study.industry}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-1">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our growing list of satisfied clients and transform your business with our proven AI and technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}