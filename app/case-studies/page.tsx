'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
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

const CaseStudiesPage: React.FC = () => {
  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: CheckCircle, value: '99%', label: 'Success Rate' }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered E-commerce Transformation',
      client: 'TechRetail Corp',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience on their online platform',
      solution: 'Implemented AI-powered recommendation engine, chatbot, and personalized shopping experience',
      results: [
        'Increased conversion rates by 250%',
        'Reduced cart abandonment by 40%',
        'Improved customer satisfaction by 85%',
        'Generated $2M additional revenue in 6 months'
      ],
      image: '/images/case-studies/ecommerce.jpg',
      duration: '4 months',
      team: '8 specialists'
    },
    {
      id: '2',
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems affecting treatment decisions',
      solution: 'Built comprehensive AI-powered data analytics platform with predictive insights',
      results: [
        'Reduced diagnosis time by 60%',
        'Improved treatment accuracy by 35%',
        'Saved $1.5M in operational costs',
        'Enhanced patient outcomes by 45%'
      ],
      image: '/images/case-studies/healthcare.jpg',
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: '3',
      title: 'Manufacturing Process Optimization',
      client: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes leading to high costs and delays',
      solution: 'Deployed AI-driven process optimization and predictive maintenance systems',
      results: [
        'Reduced production costs by 30%',
        'Increased efficiency by 50%',
        'Minimized downtime by 70%',
        'Achieved $5M annual savings'
      ],
      image: '/images/case-studies/manufacturing.jpg',
      duration: '8 months',
      team: '15 specialists'
    },
    {
      id: '4',
      title: 'Financial Services Automation',
      client: 'SecureBank Ltd',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'Implemented AI-powered loan processing automation and risk assessment',
      results: [
        'Reduced processing time by 80%',
        'Improved accuracy by 95%',
        'Increased loan approvals by 40%',
        'Saved $3M in operational costs'
      ],
      image: '/images/case-studies/finance.jpg',
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: '5',
      title: 'Supply Chain Intelligence',
      client: 'LogisticsPro',
      industry: 'Logistics',
      challenge: 'Poor visibility and inefficiencies in supply chain operations',
      solution: 'Created AI-powered supply chain visibility and optimization platform',
      results: [
        'Improved delivery times by 45%',
        'Reduced costs by 25%',
        'Enhanced visibility by 90%',
        'Increased customer satisfaction by 60%'
      ],
      image: '/images/case-studies/logistics.jpg',
      duration: '7 months',
      team: '14 specialists'
    },
    {
      id: '6',
      title: 'Real Estate Market Analysis',
      client: 'PropertyMax',
      industry: 'Real Estate',
      challenge: 'Difficulty in pricing properties accurately and predicting market trends',
      solution: 'Developed AI-powered property valuation and market prediction system',
      results: [
        'Improved pricing accuracy by 85%',
        'Increased sales by 60%',
        'Reduced time on market by 40%',
        'Generated $8M additional revenue'
      ],
      image: '/images/case-studies/real-estate.jpg',
      duration: '3 months',
      team: '6 specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how Zion Tech Group has helped businesses achieve remarkable results with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT solutions, business transformation, ROI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white/60 text-sm">Case Study Image</span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{study.client}</p>
                    <p className="text-purple-400 text-sm mb-4">{study.industry}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-1">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;