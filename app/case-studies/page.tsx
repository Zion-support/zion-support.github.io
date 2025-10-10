'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
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
      challenge: 'The client was struggling with high customer service costs and long response times, handling over 100,000 customer inquiries monthly.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing capabilities, integrated with their existing CRM and knowledge base.',
      results: [
        'Reduced customer service costs by 60%',
        'Improved response time from 24 hours to under 2 minutes',
        'Increased customer satisfaction scores by 40%',
        'Handled 80% of inquiries without human intervention'
      ],
      image: '/images/case-studies/ai-customer-service.jpg',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Financial Services Company',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure was causing scalability issues and high maintenance costs, limiting business growth.',
      solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implementing microservices architecture and automated scaling.',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 300%',
        'Achieved 99.9% uptime',
        'Enabled rapid scaling for peak loads'
      ],
      image: '/images/case-studies/cloud-migration.jpg',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'The organization needed to strengthen its security posture and achieve HIPAA compliance while maintaining operational efficiency.',
      solution: 'We implemented a comprehensive security framework including multi-factor authentication, encryption, monitoring systems, and staff training.',
      results: [
        'Achieved full HIPAA compliance',
        'Reduced security incidents by 90%',
        'Improved security awareness by 95%',
        'Passed all security audits with flying colors'
      ],
      image: '/images/case-studies/cybersecurity.jpg',
      featured: false
    },
    {
      id: '4',
      title: 'Machine Learning for Predictive Analytics',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Equipment failures were causing costly downtime and production delays, with no predictive maintenance capabilities.',
      solution: 'We developed a machine learning model that analyzes sensor data to predict equipment failures before they occur.',
      results: [
        'Reduced unplanned downtime by 70%',
        'Saved $2M annually in maintenance costs',
        'Improved equipment lifespan by 25%',
        'Increased overall equipment effectiveness by 35%'
      ],
      image: '/images/case-studies/predictive-analytics.jpg',
      featured: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-400" />, value: '500+', label: 'Projects Completed' },
    { icon: <Star className="w-8 h-8 text-yellow-400" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '150%', label: 'Average ROI' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '99.9%', label: 'Uptime Achieved' }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI, cloud computing, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, cybersecurity, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with cutting-edge AI, cloud computing, and cybersecurity solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Studies</h2>
            <div className="space-y-12">
              {featuredStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                        <span className="text-gray-400 text-sm">{study.client}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                          <p className="text-gray-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                          <p className="text-gray-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Case Studies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our proven expertise in AI, cloud computing, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;