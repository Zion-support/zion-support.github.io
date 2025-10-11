'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Giant Achieves 300% ROI with AI Analytics',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Struggling with customer data analysis and personalization',
      solution: 'Implemented AI-powered analytics and recommendation engine',
      results: [
        '300% increase in ROI within 6 months',
        '40% improvement in customer engagement',
        '25% increase in average order value',
        '60% reduction in cart abandonment'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      id: 2,
      title: 'Manufacturing Company Reduces Costs by 50% with AI Automation',
      company: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      challenge: 'High operational costs and inefficient processes',
      solution: 'Deployed AI automation across production lines',
      results: [
        '50% reduction in operational costs',
        '35% increase in production efficiency',
        '80% decrease in quality issues',
        '90% improvement in predictive maintenance'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 3,
      title: 'Financial Services Firm Enhances Security with AI Cybersecurity',
      company: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Increasing cyber threats and compliance requirements',
      solution: 'Implemented AI-powered cybersecurity monitoring system',
      results: [
        '99.9% threat detection accuracy',
        '70% reduction in false positives',
        '50% faster incident response time',
        '100% compliance with regulations'
      ],
      image: '/images/case-studies/finance-cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Healthcare Provider Improves Patient Care with AI Diagnostics',
      company: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Long diagnosis times and limited specialist availability',
      solution: 'Deployed AI diagnostic tools and patient monitoring systems',
      results: [
        '60% faster diagnosis times',
        '45% improvement in diagnostic accuracy',
        '30% reduction in patient wait times',
        '85% increase in patient satisfaction'
      ],
      image: '/images/case-studies/healthcare-ai.jpg'
    },
    {
      id: 5,
      title: 'Logistics Company Optimizes Operations with AI Supply Chain',
      company: 'FastLogistics Corp.',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and delivery optimization',
      solution: 'Implemented AI-powered supply chain optimization platform',
      results: [
        '35% reduction in delivery times',
        '25% decrease in fuel costs',
        '40% improvement in route optimization',
        '50% increase in customer satisfaction'
      ],
      image: '/images/case-studies/logistics-ai.jpg'
    },
    {
      id: 6,
      title: 'Education Platform Personalizes Learning with AI',
      company: 'EduTech Academy',
      industry: 'Education',
      challenge: 'One-size-fits-all learning approach and low engagement',
      solution: 'Developed AI-powered personalized learning platform',
      results: [
        '70% improvement in student engagement',
        '45% increase in learning outcomes',
        '60% reduction in dropout rates',
        '80% improvement in course completion rates'
      ],
      image: '/images/case-studies/education-ai.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-cyan-400">Case</span> Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-world success stories of companies that transformed their business with our AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">{study.industry.charAt(0)}</div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">{study.company}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-medium text-cyan-400 mb-2">Challenge</h3>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-cyan-400 mb-2">Solution</h3>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-cyan-400 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-300">
              Our clients consistently achieve remarkable outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already transformed their business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
