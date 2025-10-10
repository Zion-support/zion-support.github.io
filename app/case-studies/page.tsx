'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Users, Clock, CheckCircle } from 'lucide-react';

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
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'MediCare Plus needed to analyze large volumes of patient data to improve treatment outcomes and reduce costs.',
      solution: 'We developed a comprehensive AI-powered analytics platform that processes patient data in real-time, providing insights for better treatment decisions.',
      results: [
        '40% improvement in treatment accuracy',
        '60% reduction in data processing time',
        '25% increase in patient satisfaction',
        '30% cost savings in operational expenses'
      ],
      duration: '6 months',
      team: '8 specialists',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'Docker'],
      image: '/images/case-study-1.jpg',
      featured: true,
      published: '2024-01-15'
    },
    {
      id: '2',
      title: 'Enterprise Security Transformation',
      client: 'SecureCorp',
      industry: 'Financial Services',
      challenge: 'SecureCorp required a complete overhaul of their cybersecurity infrastructure to meet new regulatory requirements.',
      solution: 'We implemented a zero-trust security architecture with advanced threat detection and automated response capabilities.',
      results: [
        '99.9% reduction in security incidents',
        '50% faster threat detection',
        '100% compliance with regulatory requirements',
        '40% reduction in security operation costs'
      ],
      duration: '4 months',
      team: '12 specialists',
      technologies: ['Cybersecurity', 'SIEM', 'Zero Trust', 'Azure', 'Kubernetes'],
      image: '/images/case-study-2.jpg',
      featured: true,
      published: '2024-01-10'
    },
    {
      id: '3',
      title: 'Cloud Migration for E-commerce Platform',
      client: 'RetailMax',
      industry: 'Retail',
      challenge: 'RetailMax needed to migrate their legacy e-commerce platform to the cloud to improve scalability and performance.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using microservices architecture and auto-scaling capabilities.',
      results: [
        '300% improvement in page load times',
        '99.9% uptime during peak seasons',
        '50% reduction in infrastructure costs',
        '200% increase in concurrent user capacity'
      ],
      duration: '5 months',
      team: '10 specialists',
      technologies: ['Cloud Computing', 'Microservices', 'Docker', 'AWS', 'React'],
      image: '/images/case-study-3.jpg',
      featured: false,
      published: '2024-01-05'
    }
  ];

  const industries = ['all', 'Healthcare', 'Financial Services', 'Retail', 'Manufacturing', 'Education'];

  const filteredCaseStudies = caseStudies.filter(study => 
    selectedIndustry === 'all' || study.industry === selectedIndustry
  );

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, AI solutions, IT transformation, success stories, business results" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with AI and IT solutions across various industries.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h2>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="mr-4">{study.client}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="mr-4">{study.duration}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(study.published).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Solution</h3>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No case studies found for the selected industry.</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;