'use client';
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
      solution: 'Implemented AI chatbot and automated ticket routing',
      results: [
        '75% reduction in response time',
        '60% cost savings on customer service',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      teamSize: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      challenge: 'Legacy systems causing security vulnerabilities and scalability issues',
      solution: 'Complete cloud migration with enhanced security protocols',
      results: [
        '99.9% uptime achieved',
        '40% reduction in infrastructure costs',
        'Enhanced security compliance'
      ],
      duration: '6 months',
      teamSize: '12 specialists'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      challenge: 'HIPAA compliance and patient data security concerns',
      solution: 'Comprehensive cybersecurity framework with AI monitoring',
      results: [
        '100% HIPAA compliance',
        'Zero security breaches',
        'Real-time threat detection'
      ],
      duration: '4 months',
      teamSize: '10 specialists'
    },
    {
      id: 4,
      title: 'AI-Driven Supply Chain Optimization',
      client: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      challenge: 'Inefficient supply chain causing delays and increased costs',
      solution: 'AI-powered demand forecasting and inventory management',
      results: [
        '30% reduction in inventory costs',
        '25% improvement in delivery times',
        'Predictive maintenance implementation'
      ],
      duration: '5 months',
      teamSize: '15 specialists'
    },
    {
      id: 5,
      title: 'Digital Transformation for Retail',
      client: 'RetailMax',
      industry: 'Retail',
      image: '/api/placeholder/600/400',
      challenge: 'Outdated e-commerce platform and poor customer experience',
      solution: 'Complete digital overhaul with AI personalization',
      results: [
        '200% increase in online sales',
        'Enhanced customer experience',
        'Real-time inventory management'
      ],
      duration: '8 months',
      teamSize: '20 specialists'
    },
    {
      id: 6,
      title: 'AI-Powered Data Analytics Platform',
      client: 'DataInsights Corp',
      industry: 'Data Analytics',
      image: '/api/placeholder/600/400',
      challenge: 'Large volumes of unstructured data with no actionable insights',
      solution: 'Custom AI analytics platform with machine learning models',
      results: [
        '90% faster data processing',
        'Actionable business insights',
        'Automated reporting system'
      ],
      duration: '6 months',
      teamSize: '12 specialists'
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
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">📊</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.client}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {study.duration}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-1">Challenge</h4>
                        <p className="text-sm text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-cyan-400 mb-1">Solution</h4>
                        <p className="text-sm text-gray-300">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Results
                      </h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>Team Size: {study.teamSize}</span>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                          {study.industry}
                        </span>
                      </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Free Consultation
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
