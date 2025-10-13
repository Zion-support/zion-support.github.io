'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Building, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  team: string;
  image: string;
  featured: boolean;
  date: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient supply chain management leading to 30% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and automated inventory management system',
      results: [
        'Reduced inventory costs by 40%',
        'Improved delivery times by 60%',
        'Eliminated 25% of waste',
        'Increased customer satisfaction by 45%'
      ],
      technologies: ['Machine Learning', 'Python', 'AWS', 'TensorFlow'],
      duration: '6 months',
      team: '8 specialists',
      image: '/images/case-studies/supply-chain.jpg',
      featured: true,
      date: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cloud Migration & Digital Transformation',
      client: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Legacy systems causing security vulnerabilities and operational inefficiencies',
      solution: 'Complete cloud migration with modern security protocols and automated workflows',
      results: [
        '99.9% uptime achieved',
        '50% reduction in operational costs',
        'Enhanced security compliance',
        'Improved system performance by 300%'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      duration: '8 months',
      team: '12 specialists',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true,
      date: '2024-01-10'
    },
    {
      id: '3',
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'Healthcare Systems Ltd',
      industry: 'Healthcare',
      challenge: 'Critical security vulnerabilities exposing patient data and system integrity',
      solution: 'Comprehensive security audit and implementation of zero-trust architecture',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security incidents in 12 months',
        'Reduced security response time by 80%',
        'Improved system monitoring capabilities'
      ],
      technologies: ['Zero Trust', 'SIEM', 'Firewall', 'Encryption'],
      duration: '4 months',
      team: '6 specialists',
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false,
      date: '2024-01-05'
    },
    {
      id: '4',
      title: 'IoT Integration for Smart Manufacturing',
      client: 'Industrial Solutions Group',
      industry: 'Manufacturing',
      challenge: 'Manual monitoring processes causing production delays and quality issues',
      solution: 'IoT sensor network with real-time monitoring and predictive maintenance',
      results: [
        '30% reduction in downtime',
        '25% improvement in product quality',
        'Real-time production monitoring',
        'Predictive maintenance capabilities'
      ],
      technologies: ['IoT', 'Edge Computing', 'Machine Learning', 'Azure'],
      duration: '5 months',
      team: '10 specialists',
      image: '/images/case-studies/iot-manufacturing.jpg',
      featured: false,
      date: '2023-12-28'
    },
    {
      id: '5',
      title: 'Data Analytics Platform Development',
      client: 'Retail Chain Corp',
      industry: 'Retail',
      challenge: 'Lack of data-driven insights affecting business decisions and customer experience',
      solution: 'Custom analytics platform with real-time dashboards and predictive modeling',
      results: [
        '40% increase in sales',
        '35% improvement in customer retention',
        'Real-time business insights',
        'Automated reporting system'
      ],
      technologies: ['Big Data', 'Python', 'Tableau', 'PostgreSQL'],
      duration: '7 months',
      team: '9 specialists',
      image: '/images/case-studies/data-analytics.jpg',
      featured: false,
      date: '2023-12-20'
    },
    {
      id: '6',
      title: 'Blockchain-Based Supply Chain Transparency',
      client: 'Food Distribution Network',
      industry: 'Food & Beverage',
      challenge: 'Lack of transparency in food supply chain affecting consumer trust',
      solution: 'Blockchain implementation for end-to-end supply chain tracking and verification',
      results: [
        'Complete supply chain visibility',
        '100% food safety compliance',
        'Enhanced consumer trust',
        'Reduced fraud incidents by 90%'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Web3'],
      duration: '6 months',
      team: '7 specialists',
      image: '/images/case-studies/blockchain-supply.jpg',
      featured: false,
      date: '2023-12-15'
    }
  ];

  const industries = ['all', 'Manufacturing', 'Finance', 'Healthcare', 'Retail', 'Food & Beverage'];
  const technologies = ['all', 'Machine Learning', 'AWS', 'Zero Trust', 'IoT', 'Big Data', 'Blockchain'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const technologyMatch = selectedTechnology === 'all' || study.technologies.includes(selectedTechnology);
    return industryMatch && technologyMatch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects. See how we've helped businesses achieve their goals." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results through innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$50M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore some of our most impactful projects and the results we've achieved for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                      <p className="text-sm opacity-90">{study.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="mr-4">{study.industry}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{study.duration}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{study.team}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-gray-500 text-sm">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful technology implementations.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Industries</option>
                {industries.slice(1).map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Technologies</option>
                {technologies.slice(1).map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-bold mb-1">{study.title}</h3>
                    <p className="text-sm opacity-90">{study.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building className="h-4 w-4 mr-1" />
                    <span className="mr-4">{study.industry}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{study.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 2 && (
                      <span className="text-gray-500 text-sm">
                        +{study.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later for new case studies.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven technology solutions and expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
