'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Financial Services Transformation',
      client: 'FinanceCorp International',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'FinanceCorp needed to modernize their legacy systems and implement AI-driven fraud detection to stay competitive in the digital banking space.',
      solution: 'We implemented a comprehensive AI solution including machine learning models for fraud detection, automated customer service chatbots, and predictive analytics for risk assessment.',
      results: [
        '95% reduction in false fraud alerts',
        '60% improvement in customer satisfaction',
        '$2.3M annual cost savings',
        '40% faster loan processing'
      ],
      technologies: ['AI/ML', 'Cloud Migration', 'Data Analytics', 'Cybersecurity'],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'MediCare Plus required HIPAA-compliant AI solutions to improve patient care, streamline operations, and reduce medical errors.',
      solution: 'Deployed AI-powered medical imaging analysis, automated patient scheduling, and intelligent health monitoring systems with full HIPAA compliance.',
      results: [
        '85% reduction in diagnostic errors',
        '50% faster patient processing',
        '30% improvement in treatment outcomes',
        '99.9% HIPAA compliance rate'
      ],
      technologies: ['AI Medical Imaging', 'HIPAA Compliance', 'IoT Integration', 'Data Security'],
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: 3,
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'RetailMax needed to optimize their online platform with AI-powered personalization and inventory management to increase sales and reduce costs.',
      solution: 'Implemented AI recommendation engines, dynamic pricing algorithms, automated inventory management, and personalized customer experiences.',
      results: [
        '45% increase in conversion rates',
        '35% reduction in inventory costs',
        '70% improvement in customer engagement',
        '$5.2M additional revenue'
      ],
      technologies: ['AI Recommendations', 'Dynamic Pricing', 'Inventory AI', 'Personalization'],
      duration: '4 months',
      team: '10 specialists'
    },
    {
      id: 4,
      title: 'Manufacturing AI Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'AutoParts needed to implement AI-driven quality control and predictive maintenance to reduce defects and optimize production efficiency.',
      solution: 'Deployed computer vision for quality inspection, IoT sensors for equipment monitoring, and AI algorithms for predictive maintenance scheduling.',
      results: [
        '90% reduction in defective products',
        '65% decrease in unplanned downtime',
        '40% improvement in production efficiency',
        '$3.8M annual savings'
      ],
      technologies: ['Computer Vision', 'IoT Integration', 'Predictive Maintenance', 'Quality Control'],
      duration: '7 months',
      team: '14 specialists'
    },
    {
      id: 5,
      title: 'Government AI Security Enhancement',
      client: 'City of Innovation',
      industry: 'Government',
      image: '/api/placeholder/600/400',
      challenge: 'The city needed advanced cybersecurity solutions and AI-powered citizen services to protect sensitive data and improve public services.',
      solution: 'Implemented AI-driven threat detection, automated citizen service chatbots, and intelligent data analysis for better decision-making.',
      results: [
        '99.9% security incident prevention',
        '80% faster citizen service response',
        '50% reduction in manual processes',
        '95% citizen satisfaction rate'
      ],
      technologies: ['Cybersecurity AI', 'Citizen Services', 'Data Analytics', 'Automation'],
      duration: '10 months',
      team: '18 specialists'
    },
    {
      id: 6,
      title: 'Education AI Platform',
      client: 'EduTech University',
      industry: 'Education',
      image: '/api/placeholder/600/400',
      challenge: 'EduTech University wanted to create personalized learning experiences and automate administrative tasks to improve student outcomes.',
      solution: 'Developed AI-powered personalized learning paths, automated grading systems, and intelligent student support chatbots.',
      results: [
        '60% improvement in student performance',
        '75% reduction in administrative workload',
        '85% increase in student engagement',
        '40% faster course completion rates'
      ],
      technologies: ['Personalized Learning', 'Automated Grading', 'Student Analytics', 'AI Tutoring'],
      duration: '9 months',
      team: '16 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | Zion Tech Group | AI & IT Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results, proven success." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with AI and IT solutions. 
              Real results, proven success, measurable impact.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.client}
                        </span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">5.0</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-green-400">
                          <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div>{study.duration}</div>
                      <div>{study.team}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the companies that have transformed their business with our AI and IT solutions. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
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
