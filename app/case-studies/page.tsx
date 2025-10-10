'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce AI Transformation',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'High customer service costs and low conversion rates',
      solution: 'Implemented AI-powered chatbots and personalized recommendations',
      results: [
        '60% reduction in customer service costs',
        '35% increase in conversion rates',
        '24/7 customer support availability',
        '40% improvement in customer satisfaction'
      ],
      metrics: {
        costReduction: '60%',
        conversionIncrease: '35%',
        satisfactionImprovement: '40%'
      },
      duration: '6 months',
      teamSize: '8 developers'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Solutions',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient reporting',
      solution: 'Built comprehensive data analytics platform with AI insights',
      results: [
        '50% faster report generation',
        '30% improvement in patient outcomes',
        'Real-time data visualization',
        'Compliance with healthcare regulations'
      ],
      metrics: {
        reportSpeed: '50%',
        patientOutcomes: '30%',
        complianceRate: '100%'
      },
      duration: '8 months',
      teamSize: '12 developers'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes and quality control issues',
      solution: 'AI-powered workflow automation and computer vision quality control',
      results: [
        '45% increase in production efficiency',
        '70% reduction in quality defects',
        'Automated quality control',
        'Predictive maintenance implementation'
      ],
      metrics: {
        efficiencyGain: '45%',
        defectReduction: '70%',
        maintenanceCosts: '25%'
      },
      duration: '10 months',
      teamSize: '15 developers'
    },
    {
      id: 4,
      title: 'Financial Services Security Enhancement',
      client: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Increasing cybersecurity threats and compliance requirements',
      solution: 'Comprehensive cybersecurity solution with AI threat detection',
      results: [
        '85% reduction in security incidents',
        '100% compliance achievement',
        'Real-time threat monitoring',
        'Automated incident response'
      ],
      metrics: {
        incidentReduction: '85%',
        complianceRate: '100%',
        responseTime: '90%'
      },
      duration: '4 months',
      teamSize: '6 developers'
    },
    {
      id: 5,
      title: 'SaaS Platform Migration',
      client: 'CloudTech Solutions',
      industry: 'Technology',
      challenge: 'Legacy system migration and scalability issues',
      solution: 'Complete cloud migration with microservices architecture',
      results: [
        '99.9% uptime achievement',
        '40% cost reduction',
        'Unlimited scalability',
        'Improved performance'
      ],
      metrics: {
        uptime: '99.9%',
        costReduction: '40%',
        performanceGain: '60%'
      },
      duration: '12 months',
      teamSize: '20 developers'
    },
    {
      id: 6,
      title: 'Retail Customer Experience Revolution',
      client: 'FashionForward Retail',
      industry: 'Retail',
      challenge: 'Poor customer experience and low engagement',
      solution: 'AI-powered personalization and omnichannel experience',
      results: [
        '55% increase in customer engagement',
        '25% boost in sales revenue',
        'Personalized shopping experience',
        'Cross-channel integration'
      ],
      metrics: {
        engagementIncrease: '55%',
        revenueBoost: '25%',
        customerRetention: '40%'
      },
      duration: '7 months',
      teamSize: '10 developers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our AI and IT solutions
            </p>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-slate-800/50 rounded-2xl p-8 cyber-card-enhanced group hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {study.title}
                    </h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold text-white">Client:</span> {study.client}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold text-white">Duration:</span> {study.duration}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold text-white">Team Size:</span> {study.teamSize}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More About This Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-8 cyber-card-enhanced max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
              <p className="text-gray-300 mb-6">
                Let us help you achieve similar results with our AI and IT solutions. 
                Contact our experts for a free consultation.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 futuristic-btn glow"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
