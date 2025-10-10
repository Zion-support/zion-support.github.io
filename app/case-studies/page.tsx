'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered E-commerce Platform',
      client: 'RetailTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI-driven recommendation engine and automated inventory management system.',
      results: ['40% increase in sales', '60% reduction in inventory costs', '95% customer satisfaction'],
      technologies: ['React', 'Node.js', 'Machine Learning', 'AWS'],
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with enhanced security and compliance.',
      results: ['50% cost reduction', '99.9% uptime', 'Enhanced security compliance'],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      duration: '8 months'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity framework and HIPAA compliance solutions.',
      results: ['100% HIPAA compliance', 'Zero security breaches', '50% faster incident response'],
      technologies: ['SIEM', 'Firewall', 'Encryption', 'Monitoring'],
      duration: '4 months'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Solution',
      client: 'LogiChain Global',
      industry: 'Logistics',
      image: '/api/placeholder/600/400',
      description: 'Developed blockchain-based supply chain tracking and verification system.',
      results: ['30% efficiency improvement', 'Real-time tracking', 'Reduced fraud incidents'],
      technologies: ['Ethereum', 'Smart Contracts', 'Web3', 'IPFS'],
      duration: '10 months'
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      client: 'AnalyticsPro',
      industry: 'Consulting',
      image: '/api/placeholder/600/400',
      description: 'Created comprehensive data visualization and analytics platform for business intelligence.',
      results: ['80% faster reporting', 'Real-time insights', 'Improved decision making'],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      duration: '5 months'
    },
    {
      id: 6,
      title: 'Mobile App for Healthcare',
      client: 'HealthTech Innovations',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Developed patient management and telemedicine mobile application.',
      results: ['500K+ downloads', '4.8 app store rating', 'Improved patient engagement'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC'],
      duration: '7 months'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-4xl">📊</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">Client: {study.client}</p>
                    <p className="text-gray-300 text-sm mb-4">{study.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Duration: {study.duration}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>5.0</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
