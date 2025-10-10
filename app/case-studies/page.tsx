'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Transformation',
      client: 'Fortune 500 Retail Company',
      industry: 'Retail',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in customer service costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '$2M annual savings'
      ],
      duration: '6 months',
      team: '8 specialists',
      investment: '$500K',
      image: '/images/case-studies/retail-ai.jpg'
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'Healthcare Technology Company',
      industry: 'Healthcare',
      challenge: 'Legacy system migration and scalability issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment times',
        'Enhanced security compliance'
      ],
      duration: '8 months',
      team: '12 specialists',
      investment: '$1.2M',
      image: '/images/case-studies/healthcare-cloud.jpg'
    },
    {
      id: 3,
      title: 'Predictive Maintenance Implementation',
      client: 'Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures and maintenance costs',
      solution: 'AI-powered predictive maintenance system with IoT sensors',
      results: [
        '70% reduction in unplanned downtime',
        '40% decrease in maintenance costs',
        '25% increase in equipment lifespan',
        'ROI of 300% in first year'
      ],
      duration: '4 months',
      team: '6 specialists',
      investment: '$300K',
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      id: 4,
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Financial Services Firm',
      industry: 'Finance',
      challenge: 'Security vulnerabilities and compliance requirements',
      solution: 'Comprehensive cybersecurity suite with 24/7 monitoring',
      results: [
        'Zero security breaches',
        '100% compliance achievement',
        '50% faster threat detection',
        'Reduced security incidents by 90%'
      ],
      duration: '3 months',
      team: '10 specialists',
      investment: '$400K',
      image: '/images/case-studies/finance-security.jpg'
    },
    {
      id: 5,
      title: 'Supply Chain Optimization with AI',
      client: 'Global Logistics Company',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain and high operational costs',
      solution: 'AI-driven demand forecasting and route optimization',
      results: [
        '35% reduction in inventory costs',
        '40% improvement in delivery times',
        '25% decrease in fuel consumption',
        '$5M annual cost savings'
      ],
      duration: '5 months',
      team: '8 specialists',
      investment: '$600K',
      image: '/images/case-studies/logistics-ai.jpg'
    },
    {
      id: 6,
      title: 'Micro SAAS Platform Development',
      client: 'Startup Incubator',
      industry: 'Technology',
      challenge: 'Need for scalable micro SAAS solutions',
      solution: 'Developed 15+ micro SAAS tools with AI integration',
      results: [
        '50+ active micro SAAS tools',
        '10,000+ users acquired',
        '$2M ARR generated',
        '95% customer retention rate'
      ],
      duration: '12 months',
      team: '15 specialists',
      investment: '$800K',
      image: '/images/case-studies/micro-saas.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies showcasing how we've helped businesses transform with AI, cloud computing, and innovative technology solutions." />
        <meta name="keywords" content="case studies, success stories, AI implementation, cloud migration, business transformation, technology solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text glitch-text" data-text="Success Stories">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="quantum-card hologram-card p-8 hover:scale-105 transition-all duration-300 card-hover-lift group">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-gray-400 text-sm">{study.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-white/5 rounded-lg p-3">
                      <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm text-gray-400">Duration</div>
                      <div className="text-white font-semibold">{study.duration}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <Users className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm text-gray-400">Team</div>
                      <div className="text-white font-semibold">{study.team}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <DollarSign className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-sm text-gray-400">Investment</div>
                      <div className="text-white font-semibold">{study.investment}</div>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium py-3 border border-cyan-400/30 rounded-lg hover:border-cyan-400/50 group">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the ranks of successful businesses that have transformed their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
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