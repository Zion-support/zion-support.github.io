'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building, Users, TrendingUp } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 'ai-ecommerce-customer-service',
      title: 'AI-Powered Customer Service for E-commerce',
      client: 'ShopTech Solutions',
      industry: 'E-commerce',
      image: '/api/placeholder/600/400',
      description: 'Implemented AI chatbots and automated customer service solutions resulting in 40% reduction in response time.',
      results: ['40% faster response time', '60% cost reduction', '95% customer satisfaction'],
      duration: '3 months',
      challenge: 'High customer service costs and slow response times',
      solution: 'AI-powered chatbot system with human escalation',
      impact: 'Reduced support costs by 60% while improving customer satisfaction'
    },
    {
      id: 'cloud-migration-financial',
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      image: '/api/placeholder/600/400',
      description: 'Migrated legacy systems to cloud infrastructure with zero downtime and enhanced security.',
      results: ['Zero downtime migration', '50% cost savings', 'Enhanced security compliance'],
      duration: '6 months',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with security-first approach',
      impact: 'Improved performance by 200% while reducing operational costs'
    },
    {
      id: 'cybersecurity-healthcare',
      title: 'Cybersecurity Enhancement for Healthcare',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Implemented comprehensive cybersecurity solutions to protect sensitive patient data.',
      results: ['100% compliance achieved', 'Zero security breaches', 'Reduced risk by 80%'],
      duration: '4 months',
      challenge: 'HIPAA compliance and data security vulnerabilities',
      solution: 'Multi-layered security architecture with continuous monitoring',
      impact: 'Achieved full HIPAA compliance and eliminated security risks'
    },
    {
      id: 'ai-manufacturing-optimization',
      title: 'AI Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      image: '/api/placeholder/600/400',
      description: 'Deployed AI-driven predictive maintenance and quality control systems.',
      results: ['30% reduction in downtime', '25% increase in efficiency', '99.9% quality rate'],
      duration: '5 months',
      challenge: 'Unplanned downtime and quality control issues',
      solution: 'AI-powered predictive analytics and automated quality inspection',
      impact: 'Increased production efficiency by 25% while reducing waste'
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Transparency',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      image: '/api/placeholder/600/400',
      description: 'Implemented blockchain technology for end-to-end supply chain visibility and traceability.',
      results: ['100% traceability', '50% faster dispute resolution', 'Enhanced trust'],
      duration: '8 months',
      challenge: 'Lack of transparency and trust in supply chain',
      solution: 'Blockchain-based tracking and verification system',
      impact: 'Improved customer trust and reduced supply chain disputes'
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI Medical Diagnostics Platform',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      image: '/api/placeholder/600/400',
      description: 'Developed AI-powered diagnostic tools for faster and more accurate medical assessments.',
      results: ['90% diagnostic accuracy', '60% faster diagnosis', 'Reduced misdiagnosis'],
      duration: '12 months',
      challenge: 'Long diagnosis times and human error in medical assessments',
      solution: 'AI-powered diagnostic platform with machine learning models',
      impact: 'Improved patient outcomes and reduced diagnostic errors'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Case Studies | Zion Tech Group - Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how we've helped businesses transform with cutting-edge AI and IT solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="cyber-card hologram-card overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-sm opacity-80">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="w-full cyber-button text-center py-2 flex items-center justify-center"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center cyber-card hologram-card p-12">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve similar results with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Our Services
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;