'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award, Building2, Shield, Zap } from 'lucide-react';

interface CaseStudy {id: string;}
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  team: string;
}

const CaseStudiesPage: React.FC = () => {const caseStudies: CaseStudy[] = [}
    {id: '1',}
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and inconsistent response times across multiple channels.',
      solution: 'Implemented AI-powered chatbot system with natural language processing and automated ticket routing.',
      results: []
        '60% reduction in customer service costs',
        '85% improvement in response time',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      duration: '3 months',
      team: '4 specialists'
    },
    {id: '2',}
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Global Finance Inc.',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to AWS cloud with microservices architecture and automated CI/CD pipelines.',
      results: []
        '70% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '50% faster deployment times',
        'Enhanced security and compliance'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      duration: '6 months',
      team: '8 specialists'
    },
    {id: '3',}
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'MediCare Health Systems',
      industry: 'Healthcare',
      challenge: 'Need to strengthen security posture and achieve HIPAA compliance for patient data protection.',
      solution: 'Comprehensive security audit, implementation of zero-trust architecture, and staff training programs.',
      results: []
        '100% HIPAA compliance achieved',
        'Zero security incidents in 12 months',
        '40% reduction in security vulnerabilities',
        'Enhanced patient data protection'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      duration: '4 months',
      team: '6 specialists'
    },
    {id: '4',}
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      challenge: 'Lack of real-time insights into customer behavior and inventory management.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive analytics.',
      results: []
        '35% increase in sales through better insights',
        '25% reduction in inventory costs',
        'Real-time business intelligence',
        'Improved customer targeting'
      ],
      image: '/images/case-studies/data-analytics.jpg',
      duration: '5 months',
      team: '5 specialists'
    }
  ];

  const industries = ['All', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Logistics'];
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const stats = []
    { icon: <Building2 className="w-8 h-8 text-blue-600" />, value: '150+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-600" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Award className="w-8 h-8 text-purple-600" />, value: '50+', label: 'Industry Awards' },
    { icon: <TrendingUp className="w-8 h-8 text-orange-600" />, value: '200%', label: 'Average ROI' }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve their goals through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (}
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (}
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${}
                  selectedIndustry === industry
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (}
              <div key={study.id} className="bg-slate-800/50 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="aspect-video bg-slate-700">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{study.duration}</span>
                      <span>•</span>
                      <span>{study.team}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4"><strong>Client:</strong> {study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (}
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage