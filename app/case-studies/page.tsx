'use client';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      image: '/api/placeholder/600/400',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      technologies: ['AI/ML', 'Natural Language Processing', 'Cloud Computing'],
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing performance bottlenecks',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '80% improvement in system performance',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Comprehensive security framework and threat monitoring',
      results: [
        '100% compliance with HIPAA regulations',
        'Zero security breaches in 12 months',
        '24/7 threat monitoring implemented'
      ],
      technologies: ['Cybersecurity', 'Compliance', 'Threat Detection', 'SIEM'],
      duration: '4 months'
    },
    {
      id: 4,
      title: 'Data Analytics Platform for E-commerce',
      client: 'ShopSmart',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      challenge: 'Lack of actionable insights from customer data',
      solution: 'Advanced analytics platform with real-time dashboards',
      results: [
        '35% increase in conversion rates',
        '25% improvement in customer retention',
        'Real-time business intelligence'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Data Visualization', 'Python'],
      duration: '5 months'
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
                Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Stories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          {study.client}
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Challenge & Solution */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                      <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Duration */}
                    <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">Duration: {study.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/consultation"
                  className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Free Consultation
                  <ExternalLink className="ml-2 w-5 h-5" />
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