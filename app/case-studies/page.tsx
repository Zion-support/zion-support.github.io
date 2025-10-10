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
  featured: boolean;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'The client was struggling with high customer service costs and long response times, handling over 100,000 customer inquiries monthly with only 40% first-contact resolution.',
      solution: 'Implemented an AI-powered customer service platform with natural language processing, automated ticket routing, and intelligent response suggestions, reducing response time by 70% and improving customer satisfaction scores.',
      results: [
        '70% reduction in response time',
        '85% first-contact resolution rate',
        '60% reduction in support costs',
        '40% increase in customer satisfaction'
      ],
      duration: '6 months',
      team: '8 specialists',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure was causing scalability issues and high maintenance costs, with 99.5% uptime requirements that were difficult to meet.',
      solution: 'Migrated entire infrastructure to AWS with microservices architecture, implemented automated scaling, and established comprehensive monitoring and disaster recovery procedures.',
      results: [
        '99.9% uptime achievement',
        '50% reduction in infrastructure costs',
        '300% improvement in scalability',
        'Zero data loss during migration'
      ],
      duration: '8 months',
      team: '12 specialists',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Organization',
      industry: 'Healthcare',
      challenge: 'The organization needed to achieve HIPAA compliance and strengthen their security posture after a minor security incident, with 50,000+ patient records requiring protection.',
      solution: 'Implemented comprehensive security framework including multi-factor authentication, encryption, network segmentation, and continuous monitoring with 24/7 security operations center.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents post-implementation',
        '95% reduction in security vulnerabilities',
        '24/7 threat monitoring established'
      ],
      duration: '4 months',
      team: '6 specialists',
      featured: false
    },
    {
      id: '4',
      title: 'Data Analytics & Business Intelligence Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'The company had vast amounts of production data but lacked insights to optimize operations, with manual reporting processes taking weeks to complete.',
      solution: 'Built a comprehensive data analytics platform with real-time dashboards, predictive analytics for maintenance, and automated reporting systems using machine learning algorithms.',
      results: [
        '80% reduction in reporting time',
        '25% improvement in production efficiency',
        '30% reduction in maintenance costs',
        'Real-time operational insights'
      ],
      duration: '5 months',
      team: '10 specialists',
      featured: false
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', description: 'Successful implementations across various industries' },
    { number: '99.9%', label: 'Client Satisfaction', description: 'Average satisfaction rating from our clients' },
    { number: '50+', label: 'Enterprise Clients', description: 'Fortune 500 and growing companies served' },
    { number: '24/7', label: 'Support Available', description: 'Round-the-clock technical support and monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform their operations with AI, cloud computing, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity, business transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover how we've helped businesses transform their operations and achieve remarkable results with our cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Featured Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most impactful projects and see the transformative results we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-semibold">Featured Project</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{study.team}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">All Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful projects across different industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                    {study.industry}
                  </span>
                  {study.featured && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {study.challenge}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                    {study.results.length > 2 && (
                      <li className="text-gray-400 text-sm">
                        +{study.results.length - 2} more results
                      </li>
                    )}
                  </ul>
                </div>

                <button className="w-full border border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you transform your business with our proven expertise and cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
