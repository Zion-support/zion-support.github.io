'use client';
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'AI-Powered Analytics Transformation for Fortune 500 Retailer',
      client: 'TechCorp Retail',
      industry: 'Retail & E-commerce',
      challenge: 'Manual data analysis processes were taking weeks and missing critical insights, leading to poor inventory management and lost sales opportunities.',
      solution: 'Implemented our AI analytics platform with machine learning algorithms for real-time inventory optimization and customer behavior prediction.',
      results: [
        '300% increase in data processing speed',
        '95% reduction in manual analysis time',
        '$2.5M annual savings in inventory costs',
        '40% improvement in sales forecasting accuracy'
      ],
      duration: '6 months',
      teamSize: '8 specialists',
      investment: '$500K',
      image: '/case-studies/retail-ai-analytics.jpg',
      slug: 'techcorp-retail-ai-analytics'
    },
    {
      title: 'Cloud Migration and DevOps Automation for Financial Services',
      client: 'SecureBank Financial',
      industry: 'Financial Services',
      challenge: 'Legacy on-premise systems were causing security vulnerabilities, scalability issues, and high maintenance costs.',
      solution: 'Complete cloud migration to AWS with automated CI/CD pipelines, containerization, and advanced security measures.',
      results: [
        '99.9% uptime achieved',
        '60% reduction in infrastructure costs',
        '50% faster deployment cycles',
        'Zero security incidents post-migration'
      ],
      duration: '8 months',
      teamSize: '12 specialists',
      investment: '$750K',
      image: '/case-studies/financial-cloud-migration.jpg',
      slug: 'securebank-cloud-migration'
    },
    {
      title: 'Custom AI Chatbot for Healthcare Provider',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      challenge: 'High call volume was overwhelming customer service staff, leading to long wait times and poor patient satisfaction.',
      solution: 'Developed an intelligent chatbot with natural language processing capabilities for patient inquiries and appointment scheduling.',
      results: [
        '80% reduction in call volume',
        '24/7 patient support availability',
        '90% patient satisfaction rate',
        '$300K annual savings in staffing costs'
      ],
      duration: '4 months',
      teamSize: '6 specialists',
      investment: '$200K',
      image: '/case-studies/healthcare-chatbot.jpg',
      slug: 'medicare-ai-chatbot'
    },
    {
      title: 'Cybersecurity Overhaul for Manufacturing Company',
      client: 'GlobalManufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated security infrastructure was vulnerable to cyber attacks, with multiple security breaches in the past year.',
      solution: 'Comprehensive cybersecurity suite including threat detection, vulnerability assessment, and incident response protocols.',
      results: [
        'Zero security breaches in 12 months',
        '99.8% threat detection accuracy',
        '2-hour average incident response time',
        'Full compliance with industry standards'
      ],
      duration: '5 months',
      teamSize: '10 specialists',
      investment: '$400K',
      image: '/case-studies/manufacturing-cybersecurity.jpg',
      slug: 'globalmanufacturing-cybersecurity'
    },
    {
      title: 'Data Analytics Platform for Logistics Company',
      client: 'FastLogistics Corp',
      industry: 'Logistics & Transportation',
      challenge: 'Fragmented data across multiple systems made it impossible to optimize routes and reduce delivery times.',
      solution: 'Integrated data analytics platform with real-time route optimization and predictive maintenance capabilities.',
      results: [
        '25% reduction in delivery times',
        '30% fuel cost savings',
        '15% increase in customer satisfaction',
        'Real-time fleet monitoring'
      ],
      duration: '7 months',
      teamSize: '9 specialists',
      investment: '$350K',
      image: '/case-studies/logistics-data-analytics.jpg',
      slug: 'fastlogistics-data-analytics'
    },
    {
      title: 'Micro SaaS Solution for Real Estate Agency',
      client: 'PrimeReal Estate',
      industry: 'Real Estate',
      challenge: 'Manual property management processes were inefficient and error-prone, leading to lost deals and unhappy clients.',
      solution: 'Custom micro SaaS platform for property management, client relationship management, and automated workflows.',
      results: [
        '50% increase in deal closure rate',
        '70% reduction in administrative tasks',
        '40% improvement in client response time',
        'Automated lead scoring and follow-up'
      ],
      duration: '3 months',
      teamSize: '5 specialists',
      investment: '$150K',
      image: '/case-studies/realestate-microsaas.jpg',
      slug: 'primerealestate-microsaas'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99%', label: 'Client Satisfaction', icon: TrendingUp },
    { number: '50+', label: 'Industry Experts', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how we've helped businesses across industries transform their operations 
              with our AI and IT solutions. Real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our solutions drive measurable business results
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {study.industry}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">{study.client}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="text-cyan-400 font-semibold">
                    Investment: {study.investment}
                  </div>
                  <a
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;