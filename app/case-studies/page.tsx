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
  team: string});
}
import { ArrowRight, ExternalLink, Building2, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
id: 1,
      title: 'AI-Powered E-commerce Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'Implemented AI-powered recommendation engine and chatbot',

      results: [
        '40% increase in conversion rates',
        '60% reduction in customer service queries',
        '35% increase in average order value'
      ],
image: '/images/case-studies/ai-customer-service.jpg',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticketing system',
      results: [
        '60% reduction in response time',
        '40% cost savings',
        '95% customer satisfaction rate'
      ],
      duration: '3 months',
      team: '5 specialists'

    },

    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',

      challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.',

      results: [
        '50% improvement in system performance',
        '99.9% uptime achieved',
        '30% reduction in operational costs'
      ],
image: '/images/case-studies/cloud-finance.jpg'
    },
    {
      id: 3,
      title: 'Blockchain Supply Chain Optimization',
      company: 'GlobalLogistics Corp.',

      industry: 'Logistics',
      challenge: 'Lack of transparency and traceability in supply chain',
      solution: 'Blockchain-based tracking and verification system',
      results: [
        '100% supply chain transparency',
        '45% reduction in fraud cases',
        '25% improvement in delivery times'
      ],
image: '/images/case-studies/cybersecurity-healthcare.jpg',
      challenge: 'Increasing cyber threats targeting patient data',
      solution: 'Comprehensive security audit and implementation of advanced protection',
      results: [
        '100% compliance with HIPAA',
        'Zero data breaches',
        '24/7 threat monitoring'
      ],
      duration: '4 months',
      team: '6 specialists'
    },
    {
      id: '4',
      title: 'Quantum Computing Research Platform',
      client: 'Quantum Research Institute',
      industry: 'Research & Development',
      image: '/images/case-studies/quantum-computing.jpg',
      challenge: 'Need for advanced computing power for complex simulations',
      solution: 'Custom quantum computing platform with AI integration',
      results: [
        '1000x faster calculations',
        'Breakthrough research capabilities',
        'International recognition'
      ],
      duration: '12 months',
      team: '12 specialists'
    },
    {
      id: '5',
      title: 'E-commerce AI Optimization',
      client: 'RetailMax',
      industry: 'E-commerce',
      image: '/images/case-studies/ecommerce-ai.jpg',
      challenge: 'Low conversion rates and poor customer experience',
      solution: 'AI-powered recommendation engine and personalization',
      results: [
        '35% increase in conversions',
        '25% higher average order value',
        '80% improvement in user engagement'
      ],
      duration: '5 months',
      team: '7 specialists'
    },
    {
      id: '6',
      title: 'Autonomous Vehicle Fleet Management',
      client: 'AutoLogistics',
      industry: 'Transportation',
      image: '/images/case-studies/autonomous-vehicles.jpg',
      challenge: 'Inefficient fleet operations and high maintenance costs',
      solution: 'AI-driven autonomous vehicle management system',
      results: [
        '30% reduction in fuel costs',
        '45% decrease in maintenance',
        '99.5% safety record'
      ],
      duration: '8 months',
      team: '10 specialists'

    }

  ];

  const stats = [
    { label: 'Projects Completed', value: '150+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];

  return (
    <>
      <Helmet>
        <titl></titl>Case Studies | Zion Tech Group | Success Stories & Client Results</title>
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions. Real results from real clients." />
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation, client results" />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Success stories and client results from our AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/case-studies" />
      </Helmet>

      <div></div>
        {/* Hero Section */}
<section></section>
          <div></div>
            <h1></h1>
              Success <spa></spa>Stories</span>

            </h1>
            <p></p>
              Discover how we've helped businesses across industries transform their operations with cutting-edge AI and IT solutions.
<section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform with AI and IT solutions.

            </p>

</p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

                  </div>
))}
              </div>

            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
{/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>

                </div>
              ));
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section></section>
          <div></div>
            <div></div>
              <h2></h2>
                Ready to Write Your Success Story?
              </h2>
              <p></p>
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div></div>
                <Link></Link>
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link></Link>
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default CaseStudiesPage;