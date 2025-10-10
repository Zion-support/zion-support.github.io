'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbots and automated ticket routing',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems limiting scalability and security concerns',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and increasing cyber threats',
      solution: 'Comprehensive security audit and implementation',
      results: [
        '100% HIPAA compliance',
        'Zero security breaches',
        '24/7 monitoring implemented'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'AI Analytics Dashboard for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of real-time insights and data-driven decisions',
      solution: 'Custom AI analytics platform with predictive modeling',
      results: [
        '40% increase in sales',
        'Real-time business insights',
        'Predictive inventory management'
      ],
      duration: '5 months',
      team: '10 specialists'
    },
    {
      id: 5,
      title: 'Process Automation for Manufacturing',
      client: 'AutoParts Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Manual processes causing delays and errors',
      solution: 'End-to-end process automation with AI integration',
      results: [
        '80% process efficiency improvement',
        '90% reduction in manual errors',
        'Significant cost savings'
      ],
      duration: '7 months',
      team: '15 specialists'
    },
    {
      id: 6,
      title: 'Mobile App Development for Education',
      client: 'EduTech Academy',
      industry: 'Education',
      image: '/api/placeholder/600/400',
      challenge: 'Need for modern learning platform',
      solution: 'Cross-platform mobile app with AI tutoring features',
      results: [
        '50,000+ active users',
        '4.8/5 app store rating',
        'Improved learning outcomes'
      ],
      duration: '4 months',
      team: '8 specialists'
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Case Studies
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI and IT solutions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="bg-gray-800 rounded-lg h-64 mb-6 flex items-center justify-center">
                    <span className="text-gray-400">Case Study Image</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-cyan-400 font-medium mb-4">{study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cyber-glow hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 cyber-glow"
                >
                  View Our Services
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