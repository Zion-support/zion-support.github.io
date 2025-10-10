'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  duration: string;
  teamSize: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-healthcare-diagnosis',
      title: 'AI-Powered Medical Diagnosis System',
      client: 'MedTech Solutions Inc.',
      industry: 'Healthcare',
      challenge: 'MedTech Solutions needed to reduce diagnostic errors and improve patient outcomes through AI-powered medical imaging analysis.',
      solution: 'We developed a comprehensive AI system that analyzes medical images with 99.5% accuracy, reducing diagnostic time by 70% and improving patient outcomes.',
      results: [
        '99.5% diagnostic accuracy achieved',
        '70% reduction in diagnostic time',
        '40% improvement in patient outcomes',
        '50% reduction in false positives'
      ],
      image: '/images/case-studies/healthcare-ai.jpg',
      duration: '6 months',
      teamSize: '12 developers'
    },
    {
      id: 'fintech-trading-platform',
      title: 'AI Trading Platform for Financial Services',
      client: 'Quantum Capital',
      industry: 'Financial Services',
      challenge: 'Quantum Capital required a high-frequency trading platform with AI-powered market analysis and automated trading capabilities.',
      solution: 'We built a sophisticated trading platform with real-time market analysis, predictive algorithms, and automated trading execution.',
      results: [
        '35% increase in trading profits',
        '90% reduction in manual trading errors',
        'Real-time market analysis',
        '99.9% platform uptime'
      ],
      image: '/images/case-studies/fintech-trading.jpg',
      duration: '8 months',
      teamSize: '15 developers'
    },
    {
      id: 'ecommerce-personalization',
      title: 'AI-Powered E-commerce Personalization',
      client: 'RetailMax Corporation',
      industry: 'E-commerce',
      challenge: 'RetailMax needed to improve customer experience and increase sales through personalized product recommendations.',
      solution: 'We implemented an AI-driven personalization engine that analyzes customer behavior and provides tailored product recommendations.',
      results: [
        '45% increase in conversion rates',
        '60% improvement in customer engagement',
        '30% increase in average order value',
        '25% reduction in cart abandonment'
      ],
      image: '/images/case-studies/ecommerce-ai.jpg',
      duration: '4 months',
      teamSize: '8 developers'
    },
    {
      id: 'manufacturing-optimization',
      title: 'Smart Manufacturing Optimization',
      client: 'Industrial Dynamics Ltd.',
      industry: 'Manufacturing',
      challenge: 'Industrial Dynamics needed to optimize their manufacturing processes and reduce waste through AI-powered predictive maintenance.',
      solution: 'We developed an IoT-integrated AI system that monitors equipment health and predicts maintenance needs, reducing downtime and costs.',
      results: [
        '50% reduction in unplanned downtime',
        '30% decrease in maintenance costs',
        '25% improvement in production efficiency',
        '40% reduction in waste'
      ],
      image: '/images/case-studies/manufacturing-ai.jpg',
      duration: '7 months',
      teamSize: '10 developers'
    },
    {
      id: 'logistics-optimization',
      title: 'AI Logistics and Supply Chain Optimization',
      client: 'Global Logistics Corp',
      industry: 'Logistics',
      challenge: 'Global Logistics needed to optimize their supply chain operations and reduce delivery times through AI-powered route optimization.',
      solution: 'We created an AI system that optimizes delivery routes, predicts demand, and manages inventory levels automatically.',
      results: [
        '40% reduction in delivery times',
        '35% decrease in fuel costs',
        '50% improvement in inventory accuracy',
        '60% reduction in stockouts'
      ],
      image: '/images/case-studies/logistics-ai.jpg',
      duration: '5 months',
      teamSize: '9 developers'
    },
    {
      id: 'cybersecurity-threat-detection',
      title: 'AI Cybersecurity Threat Detection',
      client: 'SecureNet Technologies',
      industry: 'Cybersecurity',
      challenge: 'SecureNet needed to enhance their cybersecurity capabilities with AI-powered threat detection and response systems.',
      solution: 'We developed an advanced AI cybersecurity platform that detects threats in real-time and automatically responds to security incidents.',
      results: [
        '95% improvement in threat detection accuracy',
        '80% reduction in response time',
        '99.9% security incident prevention',
        '70% decrease in false positives'
      ],
      image: '/images/case-studies/cybersecurity-ai.jpg',
      duration: '6 months',
      teamSize: '11 developers'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | AI & IT Success Stories</title>
        <meta name="description" content="Explore our successful AI and IT projects. Real case studies showcasing our expertise in healthcare, fintech, e-commerce, manufacturing, and more." />
        <meta name="keywords" content="AI case studies, IT success stories, AI projects, technology case studies, AI implementation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success Stories
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions. Real projects, real results.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-cyan-400 font-semibold">{study.client}</p>
                      <p className="text-gray-400 text-sm">{study.industry}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Award className="w-4 h-4" />
                      <span>{study.duration}</span>
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
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold"
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

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve similar results with our AI and IT solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;