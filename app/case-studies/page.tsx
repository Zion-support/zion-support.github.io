'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, User, Building, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Solutions',
      industry: 'Technology',
      duration: '6 months',
      results: {
        efficiency: '85%',
        costReduction: '60%',
        satisfaction: '95%'
      },
      description: 'Implemented AI chatbot and automated customer service solutions that reduced response time and improved customer satisfaction.',
      challenges: [
        'High customer service costs',
        'Long response times',
        'Inconsistent service quality'
      ],
      solutions: [
        'AI-powered chatbot implementation',
        'Automated ticket routing',
        'Real-time analytics dashboard'
      ],
      image: '/images/case-studies/techcorp-ai-customer-service.jpg',
      slug: 'techcorp-ai-customer-service-transformation'
    },
    {
      id: 2,
      title: 'Cloud Migration and Infrastructure Optimization',
      client: 'Global Finance Inc',
      industry: 'Finance',
      duration: '8 months',
      results: {
        efficiency: '70%',
        costReduction: '45%',
        satisfaction: '98%'
      },
      description: 'Migrated legacy systems to cloud infrastructure with enhanced security and scalability for a major financial institution.',
      challenges: [
        'Legacy system limitations',
        'Security compliance requirements',
        'Scalability issues'
      ],
      solutions: [
        'AWS cloud migration',
        'Security hardening',
        'Auto-scaling implementation'
      ],
      image: '/images/case-studies/global-finance-cloud-migration.jpg',
      slug: 'global-finance-cloud-migration-optimization'
    },
    {
      id: 3,
      title: 'Cybersecurity Enhancement and Threat Detection',
      client: 'Healthcare Plus',
      industry: 'Healthcare',
      duration: '4 months',
      results: {
        efficiency: '90%',
        costReduction: '35%',
        satisfaction: '92%'
      },
      description: 'Deployed comprehensive cybersecurity solutions including threat detection, incident response, and compliance management.',
      challenges: [
        'HIPAA compliance requirements',
        'Advanced persistent threats',
        'Legacy security gaps'
      ],
      solutions: [
        'AI-powered threat detection',
        'Automated incident response',
        'Compliance monitoring system'
      ],
      image: '/images/case-studies/healthcare-plus-cybersecurity.jpg',
      slug: 'healthcare-plus-cybersecurity-enhancement'
    },
    {
      id: 4,
      title: 'Data Analytics and Business Intelligence Platform',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      duration: '5 months',
      results: {
        efficiency: '75%',
        costReduction: '50%',
        satisfaction: '96%'
      },
      description: 'Built a comprehensive data analytics platform that provided real-time insights and predictive analytics for business decisions.',
      challenges: [
        'Data silos across departments',
        'Manual reporting processes',
        'Limited predictive capabilities'
      ],
      solutions: [
        'Unified data warehouse',
        'Real-time analytics dashboard',
        'Machine learning predictions'
      ],
      image: '/images/case-studies/retailmax-data-analytics.jpg',
      slug: 'retailmax-data-analytics-business-intelligence'
    },
    {
      id: 5,
      title: 'Micro SAAS Development and Deployment',
      client: 'StartupHub Ventures',
      industry: 'Startup',
      duration: '3 months',
      results: {
        efficiency: '80%',
        costReduction: '70%',
        satisfaction: '94%'
      },
      description: 'Developed and deployed multiple micro SAAS applications for startup ecosystem, enabling rapid scaling and market entry.',
      challenges: [
        'Rapid development requirements',
        'Scalable architecture needs',
        'Cost optimization'
      ],
      solutions: [
        'Microservices architecture',
        'Containerized deployment',
        'Auto-scaling infrastructure'
      ],
      image: '/images/case-studies/startuphub-micro-saas.jpg',
      slug: 'startuphub-micro-saas-development-deployment'
    },
    {
      id: 6,
      title: 'Mobile App Development and Integration',
      client: 'LogisticsPro Ltd',
      industry: 'Logistics',
      duration: '7 months',
      results: {
        efficiency: '65%',
        costReduction: '40%',
        satisfaction: '97%'
      },
      description: 'Created cross-platform mobile applications with real-time tracking and integration with existing logistics systems.',
      challenges: [
        'Cross-platform compatibility',
        'Real-time data synchronization',
        'Legacy system integration'
      ],
      solutions: [
        'React Native development',
        'Real-time API integration',
        'Legacy system connectors'
      ],
      image: '/images/case-studies/logisticspro-mobile-app.jpg',
      slug: 'logisticspro-mobile-app-development-integration'
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: caseStudies.length },
    { id: 'Technology', name: 'Technology', count: caseStudies.filter(cs => cs.industry === 'Technology').length },
    { id: 'Finance', name: 'Finance', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
    { id: 'Healthcare', name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
    { id: 'Retail', name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length },
    { id: 'Startup', name: 'Startup', count: caseStudies.filter(cs => cs.industry === 'Startup').length },
    { id: 'Logistics', name: 'Logistics', count: caseStudies.filter(cs => cs.industry === 'Logistics').length }
  ];

  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Case Studies | Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Success <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable results with our AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {caseStudy.industry === 'Technology' && '💻'}
                    {caseStudy.industry === 'Finance' && '💰'}
                    {caseStudy.industry === 'Healthcare' && '🏥'}
                    {caseStudy.industry === 'Retail' && '🛒'}
                    {caseStudy.industry === 'Startup' && '🚀'}
                    {caseStudy.industry === 'Logistics' && '📦'}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {caseStudy.industry}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {caseStudy.duration}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {caseStudy.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{caseStudy.client}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {caseStudy.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{caseStudy.results.efficiency}</div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{caseStudy.results.costReduction}</div>
                      <div className="text-sm text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{caseStudy.results.satisfaction}</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Challenges:</h4>
                      <ul className="space-y-1">
                        {caseStudy.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-1 h-1 bg-red-400 rounded-full mr-2"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Solutions:</h4>
                      <ul className="space-y-1">
                        {caseStudy.solutions.map((solution, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/case-studies/${caseStudy.slug}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growing list of successful businesses that have transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;