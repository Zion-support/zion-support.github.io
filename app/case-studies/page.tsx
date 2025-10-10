'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Award } from 'lucide-react';

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
  image: string;
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'High customer service costs and inconsistent response quality across multiple channels.',
      solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing capabilities.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time by 85%',
        'Increased customer satisfaction to 94%',
        'Handled 80% of inquiries automatically'
      ],
      duration: '6 months',
      team: '12 specialists',
      image: '/images/case-studies/customer-service.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration & Optimization',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Migrated entire infrastructure to cloud with microservices architecture and automated scaling.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 200%',
        'Achieved 99.9% uptime',
        'Reduced deployment time by 70%'
      ],
      duration: '8 months',
      team: '15 specialists',
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Organization',
      industry: 'Healthcare',
      challenge: 'Need to strengthen security posture and achieve HIPAA compliance.',
      solution: 'Implemented comprehensive security framework with advanced threat detection and compliance monitoring.',
      results: [
        'Achieved 100% HIPAA compliance',
        'Reduced security incidents by 90%',
        'Improved threat detection time by 75%',
        'Passed all security audits'
      ],
      duration: '5 months',
      team: '8 specialists',
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time insights and data-driven decision making capabilities.',
      solution: 'Built comprehensive analytics platform with real-time dashboards and predictive modeling.',
      results: [
        'Improved operational efficiency by 35%',
        'Reduced waste by 25%',
        'Increased production output by 20%',
        'Enabled data-driven decision making'
      ],
      duration: '7 months',
      team: '10 specialists',
      image: '/images/case-studies/analytics.jpg',
      featured: false
    },
    {
      id: '5',
      title: 'Mobile App Development & Digital Transformation',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Need to modernize customer experience and integrate online/offline channels.',
      solution: 'Developed comprehensive mobile app with AR features, loyalty program, and omnichannel integration.',
      results: [
        'Increased mobile engagement by 150%',
        'Boosted online sales by 40%',
        'Improved customer retention by 30%',
        'Enhanced brand loyalty'
      ],
      duration: '9 months',
      team: '18 specialists',
      image: '/images/case-studies/mobile-app.jpg',
      featured: false
    },
    {
      id: '6',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Logistics Company',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain operations and high transportation costs.',
      solution: 'Implemented AI-driven demand forecasting and route optimization system.',
      results: [
        'Reduced transportation costs by 30%',
        'Improved delivery accuracy by 95%',
        'Optimized inventory levels by 25%',
        'Enhanced customer satisfaction'
      ],
      duration: '6 months',
      team: '11 specialists',
      image: '/images/case-studies/supply-chain.jpg',
      featured: false
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Years Experience', value: '10+', icon: Clock }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories & Results</title>
        <meta name="description" content="Explore our successful projects and case studies. See how we've helped businesses transform with AI, cloud computing, and digital solutions." />
        <meta name="keywords" content="case studies, success stories, project results, AI implementation, cloud migration, digital transformation" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and project results from our technology solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">{study.industry.charAt(0)}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-purple-400 text-sm font-medium bg-purple-400/20 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.client}</p>
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Team: {study.team}</span>
                    <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-20">{study.industry.charAt(0)}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 text-xs font-medium bg-purple-400/20 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-xs">{study.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">{study.client}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs line-clamp-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Team: {study.team}</span>
                    <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help transform your business with our proven technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;