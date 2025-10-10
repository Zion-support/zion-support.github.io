'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization for Global Manufacturing',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      image: '/images/case-studies/supply-chain-optimization.jpg',
      challenge: 'Inefficient supply chain management leading to 15% waste and delayed deliveries',
      solution: 'Implemented AI-driven demand forecasting and inventory optimization system',
      results: [
        '35% reduction in inventory costs',
        '50% improvement in delivery times',
        '$2.5M annual savings',
        '99.2% on-time delivery rate'
      ],
      duration: '6 months',
      teamSize: '8 specialists'
    },
    {
      id: 2,
      title: 'Cloud Migration and Security Enhancement for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/images/case-studies/cloud-migration-finance.jpg',
      challenge: 'Legacy systems causing security vulnerabilities and compliance issues',
      solution: 'Complete cloud migration with advanced security protocols and compliance automation',
      results: [
        '99.9% uptime achieved',
        '60% reduction in security incidents',
        '100% compliance with financial regulations',
        '40% faster transaction processing'
      ],
      duration: '8 months',
      teamSize: '12 specialists'
    },
    {
      id: 3,
      title: 'AI Customer Support Transformation for E-commerce Platform',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/images/case-studies/ai-customer-support.jpg',
      challenge: 'High customer support costs and long response times affecting customer satisfaction',
      solution: 'Deployed AI-powered chatbots and automated ticket routing system',
      results: [
        '70% reduction in support costs',
        '85% faster response times',
        '95% customer satisfaction rate',
        '24/7 multilingual support'
      ],
      duration: '4 months',
      teamSize: '6 specialists'
    },
    {
      id: 4,
      title: 'Predictive Maintenance for Industrial Equipment',
      client: 'Industrial Dynamics',
      industry: 'Industrial',
      image: '/images/case-studies/predictive-maintenance.jpg',
      challenge: 'Unexpected equipment failures causing production downtime and high maintenance costs',
      solution: 'Implemented AI-powered predictive maintenance system with IoT sensors',
      results: [
        '45% reduction in unplanned downtime',
        '30% decrease in maintenance costs',
        '90% accuracy in failure prediction',
        '25% increase in equipment lifespan'
      ],
      duration: '5 months',
      teamSize: '7 specialists'
    },
    {
      id: 5,
      title: 'AI-Powered Medical Diagnosis Assistant for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/images/case-studies/medical-ai-diagnosis.jpg',
      challenge: 'Need for faster and more accurate medical diagnosis to improve patient outcomes',
      solution: 'Developed AI-powered medical imaging analysis and diagnostic assistance system',
      results: [
        '40% faster diagnosis times',
        '95% accuracy in image analysis',
        '30% reduction in misdiagnosis',
        'HIPAA compliant implementation'
      ],
      duration: '10 months',
      teamSize: '15 specialists'
    },
    {
      id: 6,
      title: 'Blockchain-Based Supply Chain Transparency',
      client: 'FoodChain Global',
      industry: 'Food & Agriculture',
      image: '/images/case-studies/blockchain-supply-chain.jpg',
      challenge: 'Lack of transparency in food supply chain affecting consumer trust and safety',
      solution: 'Implemented blockchain-based traceability system with IoT integration',
      results: [
        '100% supply chain transparency',
        '60% reduction in food waste',
        'Real-time tracking capabilities',
        'Enhanced consumer trust'
      ],
      duration: '7 months',
      teamSize: '9 specialists'
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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📊</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{study.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                      
                      <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 3).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                        {study.results.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{study.results.length - 3} more results
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-300">Cost Savings Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View All Case Studies
                <ExternalLink className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;