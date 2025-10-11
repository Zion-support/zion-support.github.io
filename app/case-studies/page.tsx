import React from 'react';
import { CheckCircle, ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer service bottlenecks',
      solution: 'Implemented AI-powered inventory optimization and chatbot system',
      results: [
        '40% reduction in inventory costs',
        '60% faster customer response times',
        '25% increase in sales conversion',
        '99.9% uptime achieved'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Healthcare Data Analytics Implementation',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Large volumes of patient data without actionable insights',
      solution: 'Deployed AI analytics platform for predictive healthcare insights',
      results: [
        '30% improvement in patient outcomes',
        '50% reduction in readmission rates',
        '35% cost savings in operations',
        'Real-time health monitoring'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Financial Services Security Enhancement',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and fraud attempts',
      solution: 'Advanced AI-powered fraud detection and security monitoring system',
      results: [
        '95% reduction in fraud incidents',
        '99.8% accuracy in threat detection',
        '24/7 automated monitoring',
        'Compliance with all regulations'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'AI-driven process automation and quality prediction system',
      results: [
        '45% increase in production efficiency',
        '80% reduction in defects',
        '30% cost savings in operations',
        'Predictive maintenance implementation'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-blue-500" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <TrendingUp className="w-8 h-8 text-green-500" /> },
    { number: '50+', label: 'Industry Experts', icon: <Users className="w-8 h-8 text-purple-500" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-8 h-8 text-orange-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations. Real case studies showcasing our AI, cloud, and cybersecurity solutions." />
        <meta name="keywords" content="case studies, success stories, client projects, AI solutions, cloud migration, cybersecurity" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations with our AI, cloud, 
              and cybersecurity solutions. Real results from real clients.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real transformations, measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">Z</span>
                      </div>
                      <p className="text-gray-400">Case Study Image</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;