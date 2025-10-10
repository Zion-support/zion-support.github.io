'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Platform',
      client: 'TechCorp',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      description: 'Implemented an AI-powered customer service platform that reduced response time by 70% and improved customer satisfaction by 85%.',
      results: [
        '70% reduction in response time',
        '85% improvement in customer satisfaction',
        '50% cost reduction in support operations',
        '99.9% uptime achieved'
      ],
      technologies: ['AI/ML', 'React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Successfully migrated legacy financial systems to cloud infrastructure, improving scalability and reducing operational costs.',
      results: [
        '60% reduction in infrastructure costs',
        '300% improvement in scalability',
        '99.99% uptime achieved',
        '50% faster deployment cycles'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python']
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Enhanced cybersecurity infrastructure for healthcare organization, ensuring HIPAA compliance and protecting sensitive patient data.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security breaches since implementation',
        '40% reduction in security incidents',
        '99.8% system availability'
      ],
      technologies: ['Cybersecurity', 'SIEM', 'Firewall', 'Encryption', 'Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">ZT</span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">Client: {study.client}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{study.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm">
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
