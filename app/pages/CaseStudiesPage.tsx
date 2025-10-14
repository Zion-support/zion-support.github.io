import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        '40% increase in conversion rates',
        '25% reduction in cart abandonment',
        '60% improvement in customer engagement',
        '35% increase in average order value'
      ],
      duration: '3 months',
      team: '5 developers'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Inefficient patient data analysis and reporting',
      solution: 'Built comprehensive data analytics platform with AI-powered insights',
      results: [
        '50% faster data processing',
        '90% reduction in manual reporting time',
        'Improved patient outcomes by 30%',
        'Cost savings of $2M annually'
      ],
      duration: '6 months',
      team: '8 developers'
    },
    {
      title: 'Manufacturing IoT Integration',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time production monitoring and predictive maintenance',
      solution: 'Implemented IoT sensors and AI-powered predictive analytics',
      results: [
        '25% reduction in downtime',
        '40% improvement in production efficiency',
        '60% reduction in maintenance costs',
        'Real-time production monitoring'
      ],
      duration: '4 months',
      team: '6 developers'
    },
    {
      title: 'Financial Services Fraud Detection',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing fraud incidents and false positives',
      solution: 'Deployed AI-powered fraud detection system with machine learning',
      results: [
        '95% accuracy in fraud detection',
        '80% reduction in false positives',
        'Real-time transaction monitoring',
        'Prevented $5M in fraudulent transactions'
      ],
      duration: '5 months',
      team: '7 developers'
    },
    {
      title: 'Educational Learning Management System',
      client: 'EduTech Academy',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes',
      solution: 'Created AI-powered personalized learning platform with adaptive content',
      results: [
        '70% improvement in student engagement',
        '45% increase in course completion rates',
        'Personalized learning paths',
        'Real-time progress tracking'
      ],
      duration: '4 months',
      team: '5 developers'
    },
    {
      title: 'Real Estate Market Analysis Platform',
      client: 'PropertyMax Realty',
      industry: 'Real Estate',
      challenge: 'Manual market analysis and inaccurate property valuations',
      solution: 'Built AI-powered market analysis platform with predictive modeling',
      results: [
        '85% accuracy in property valuations',
        '60% faster market analysis',
        'Automated report generation',
        'Improved client satisfaction by 50%'
      ],
      duration: '3 months',
      team: '4 developers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT projects, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Real success stories from our clients
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries transform 
                their operations and achieve remarkable results with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our solutions have transformed businesses across different industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                        {study.client}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{study.team}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Let's discuss how we can help transform your business with our proven solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;