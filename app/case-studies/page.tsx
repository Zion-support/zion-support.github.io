'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, User, Building, Award, TrendingUp, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  team: string;
  technologies: string[];
  image: string;
  featured: boolean;
  published: string;
}

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes, but their existing systems were unable to process the data efficiently.',
      solution: 'We developed a comprehensive AI-powered analytics platform that processes patient data in real-time, uses machine learning algorithms to identify patterns, and provides actionable insights to healthcare providers.',
      results: [
        '40% improvement in treatment accuracy',
        '60% reduction in data processing time',
        '25% increase in patient satisfaction',
        '30% cost savings in operational expenses'
      ],
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      image: '/images/case-studies/healthcare-ai.jpg',
      featured: true,
      published: '2024-01-15'
    },
    {
      id: '2',
      title: 'Enterprise Cybersecurity Transformation',
      client: 'Global Finance Corp',
      industry: 'Finance',
      challenge: 'A major financial institution needed to modernize their cybersecurity infrastructure to protect against sophisticated cyber threats while maintaining compliance with strict regulatory requirements.',
      solution: 'We implemented a comprehensive cybersecurity framework including advanced threat detection, zero-trust architecture, and automated incident response systems.',
      results: [
        '99.9% reduction in security incidents',
        '50% faster threat detection',
        '100% compliance with regulatory requirements',
        '40% reduction in security operation costs'
      ],
      duration: '8 months',
      team: '12 specialists',
      technologies: ['SIEM', 'SOAR', 'Zero Trust', 'AWS Security', 'Python'],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: true,
      published: '2024-01-10'
    },
    {
      id: '3',
      title: 'Cloud Migration for E-commerce Platform',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'RetailMax needed to migrate their legacy e-commerce platform to the cloud to improve scalability and performance during peak shopping seasons.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using microservices architecture, containerization, and auto-scaling capabilities.',
      results: [
        '300% improvement in peak traffic handling',
        '50% reduction in infrastructure costs',
        '99.9% uptime during peak seasons',
        '60% faster page load times'
      ],
      duration: '4 months',
      team: '6 specialists',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'MongoDB'],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: false,
      published: '2024-01-05'
    },
    {
      id: '4',
      title: 'IoT Manufacturing Optimization',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      challenge: 'Industrial Dynamics wanted to implement IoT sensors across their manufacturing facilities to optimize production processes and reduce waste.',
      solution: 'We deployed a comprehensive IoT solution with real-time monitoring, predictive analytics, and automated optimization systems.',
      results: [
        '35% reduction in production waste',
        '20% increase in overall efficiency',
        '45% reduction in maintenance costs',
        '25% improvement in product quality'
      ],
      duration: '5 months',
      team: '10 specialists',
      technologies: ['IoT Sensors', 'Edge Computing', 'Machine Learning', 'Azure IoT', 'Power BI'],
      image: '/images/case-studies/iot-manufacturing.jpg',
      featured: false,
      published: '2024-01-01'
    },
    {
      id: '5',
      title: 'Data Analytics for Supply Chain Optimization',
      client: 'Logistics Pro',
      industry: 'Logistics',
      challenge: 'Logistics Pro needed to optimize their supply chain operations using data analytics to reduce costs and improve delivery times.',
      solution: 'We developed a comprehensive data analytics platform that processes supply chain data in real-time and provides optimization recommendations.',
      results: [
        '30% reduction in delivery times',
        '25% decrease in transportation costs',
        '40% improvement in inventory management',
        '50% reduction in stockouts'
      ],
      duration: '3 months',
      team: '5 specialists',
      technologies: ['Python', 'Apache Spark', 'Tableau', 'AWS', 'Machine Learning'],
      image: '/images/case-studies/supply-chain.jpg',
      featured: false,
      published: '2023-12-20'
    },
    {
      id: '6',
      title: 'Digital Transformation for Government Services',
      client: 'City of Innovation',
      industry: 'Government',
      challenge: 'A major city needed to digitize their citizen services to improve accessibility and reduce processing times for various government applications.',
      solution: 'We created a comprehensive digital platform that allows citizens to access all government services online with streamlined workflows and automated processing.',
      results: [
        '70% reduction in processing times',
        '85% increase in citizen satisfaction',
        '60% reduction in paper usage',
        '90% of services now available online'
      ],
      duration: '10 months',
      team: '15 specialists',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
      image: '/images/case-studies/digital-government.jpg',
      featured: false,
      published: '2023-12-15'
    }
  ];

  const industries = ['all', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects. See how we've helped clients achieve their goals through innovative solutions." />
        <meta name="keywords" content="case studies, technology solutions, digital transformation, AI implementation, cloud migration, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Discover how we've helped organizations transform their operations and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        {featuredCaseStudies.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
                <p className="text-xl text-gray-600">Our most impactful projects</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                        <span className="text-sm text-gray-500">{study.industry}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                      <p className="text-gray-600 mb-4 line-clamp-3">{study.challenge}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(study.published).toLocaleDateString()}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
              <p className="text-xl text-gray-600">
                {filteredCaseStudies.length} case stud{filteredCaseStudies.length !== 1 ? 'ies' : 'y'} found
              </p>
            </div>
            <div className="grid gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(study.published).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-4 h-4 mr-2" />
                          <span>{study.team}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 mr-2" />
                          <span>{study.results.length} key results</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                          {study.technologies.length > 3 && (
                            <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                              +{study.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try selecting a different industry filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help transform your organization with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;