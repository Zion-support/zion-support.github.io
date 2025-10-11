import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Manual inventory management and customer service bottlenecks',
      solution: 'Implemented AI-powered inventory optimization and chatbot system',
      results: [
        '40% reduction in inventory costs',
        '60% faster customer response times',
        '25% increase in sales conversion'
      ],
      image: '/api/placeholder/600/400',
      duration: '6 months',
      team: '8 specialists'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-driven patient data integration and predictive analytics platform',
      results: [
        '35% improvement in treatment accuracy',
        '50% reduction in data processing time',
        '30% decrease in readmission rates'
      ],
      image: '/api/placeholder/600/400',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: 3,
      title: 'Financial Services Automation',
      company: 'FinanceFlow Corp',
      industry: 'Fintech',
      challenge: 'Manual loan processing and compliance reporting',
      solution: 'Automated loan assessment and regulatory compliance system',
      results: [
        '70% faster loan processing',
        '90% reduction in compliance errors',
        '45% increase in customer satisfaction'
      ],
      image: '/api/placeholder/600/400',
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: 4,
      title: 'Manufacturing IoT Integration',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime and inefficient production monitoring',
      solution: 'IoT sensor network with AI-powered predictive maintenance',
      results: [
        '55% reduction in equipment downtime',
        '30% increase in production efficiency',
        '20% decrease in maintenance costs'
      ],
      image: '/api/placeholder/600/400',
      duration: '10 months',
      team: '15 specialists'
    },
    {
      id: 5,
      title: 'Real Estate Market Intelligence',
      company: 'PropertyMax Realty',
      industry: 'Real Estate',
      challenge: 'Manual market analysis and property valuation',
      solution: 'AI-powered market analysis and automated valuation system',
      results: [
        '80% faster property valuations',
        '25% improvement in pricing accuracy',
        '40% increase in successful transactions'
      ],
      image: '/api/placeholder/600/400',
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      company: 'Global Logistics Co.',
      industry: 'Logistics',
      challenge: 'Complex supply chain visibility and route optimization',
      solution: 'AI-driven supply chain management and route optimization platform',
      results: [
        '45% reduction in delivery times',
        '30% decrease in transportation costs',
        '60% improvement in supply chain visibility'
      ],
      image: '/api/placeholder/600/400',
      duration: '7 months',
      team: '10 specialists'
    }
  ];

  const stats = [
    { icon: TrendingUp, label: 'Average ROI', value: '340%' },
    { icon: Users, label: 'Projects Completed', value: '150+' },
    { icon: Clock, label: 'Average Timeline', value: '6 months' },
    { icon: DollarSign, label: 'Cost Savings', value: '$2.5M+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our successful technology implementations and digital transformation projects across various industries." />
        <meta name="keywords" content="case studies, success stories, technology implementation, digital transformation, AI solutions" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm font-semibold">Case Study {study.id}</div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-cyan-400 font-medium">{study.company}</p>
                  <p className="text-gray-400 text-sm">{study.industry}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Solution:</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 pt-4 border-t border-gray-700">
                  <span>Duration: {study.duration}</span>
                  <span>Team: {study.team}</span>
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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;