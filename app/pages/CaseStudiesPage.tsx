import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon,
CheckIcon
  ChartBarIcon,
TrendingUpIcon
  ClockIcon,
CurrencyDollarIcon } from '@heroicons/react/24/outline';
const CaseStudiesPage: React.FC = () => {,
  return null;
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [,
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUpIcon }
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUpIcon }
        { metric: 'Revenue Growth', value: '+60%', icon: CurrencyDollarIcon }
      ]
      duration: '6 months',
      image: '/.jpg'
    }
    {
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'FinanceCorp',
      industry: 'Financial Services',
      challenge: 'Outdated security systems vulnerable to modern threats',
      solution: 'Deployed comprehensive cybersecurity suite with real-time threat detection',
      results: [,
        { metric: 'Security Incidents', value: '-95%', icon: CheckIcon }
        { metric: 'Response Time', value: '-80%', icon: ClockIcon }
        { metric: 'Compliance Score', value: '100%', icon: ChartBarIcon }
      ]
      duration: '4 months',
      image: '/case-studies/cybersecurity.jpg'
    }
    {
      title: 'Cloud Migration & Optimization',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'On-premise infrastructure limiting scalability and performance',
      solution: 'Migrated to cloud infrastructure with auto-scaling and performance optimization',
      results: [,
        { metric: 'Performance', value: '+200%', icon: TrendingUpIcon }
        { metric: 'Cost Savings', value: '-40%', icon: CurrencyDollarIcon }
        { metric: 'Uptime', value: '99.9%', icon: CheckIcon }
      ]
      duration: '8 months',
      image: '/.jpg'
    }
    {
      title: 'AI-Powered Customer Service',
      client: 'ServiceMax',
      industry: 'Customer Service',
      challenge: 'High support costs and slow response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [,
        { metric: 'Response Time', value: '-70%', icon: ClockIcon }
        { metric: 'Customer Satisfaction', value: '+85%', icon: TrendingUpIcon }
        { metric: 'Support Costs', value: '-50%', icon: CurrencyDollarIcon }
      ]
      duration: '3 months',
      image: '/.jpg';
    };
  ];
  return (
    <></>
      <Helmet /></Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI, cybersecurity, cloud infrastructure, and IT solutions." / /></meta>
        <meta name="keywords" content="case studies, success stories, AI solutions, cybersecurity, cloud infrastructure, IT solutions, business transformation" / /></meta>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden" /></section>
        <div className="absolute inset-0 opacity-20" /></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20" /></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center" /></div>
          <div className="max-w-4 xl mx-auto" /></div>
            <h1 className="text-6 xl md: text-7 xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" />,
              Success Stories
            </h1>
            <p className="text-xl md: text-2 xl text-gray-300 mb-8 leading-relaxed" />,
              Real Results for Real Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3 xl mx-auto" /></p>
              Discover how we've helped businesses across various industries transform their operations,
and achieve remarkable growth with our technology solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900" /></section>
        <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />,
          <div className="text-center mb-16" /></div>
            <h2 className="text-4 xl md: text-5 xl font-bold text-white mb-6" />,
              Our Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
              See how our solutions have transformed businesses across different industries
            </p>
          </div>)
          <div className="space-y-16" />)
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg: grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}""
                <div className={`${index % 2 === 1 ? 'lg: col-start-2' : ''}""
                <div className={`${index % 2 === 1 ? 'lg: col-start-1' : ''}""