import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock, Target, Award } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI chatbot and automated ticket routing system',
      results: [
        '60% reduction in support costs',
        '80% faster response times',
        '95% customer satisfaction rate',
        '50% increase in ticket resolution',
      ],
      duration: '6 months',
      team: '8 members',
      image: '/case-studies/techcorp.jpg',
    },
    {
      id: 2,
      title: 'Cloud Migration for Financial Services',
      client: 'FinanceFirst Bank',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing performance issues and security concerns',
      solution: 'Complete cloud migration with enhanced security measures',
      results: [
        '40% improvement in system performance',
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        'Enhanced security compliance',
      ],
      duration: '8 months',
      team: '12 members',
      image: '/case-studies/financefirst.jpg',
    },
    {
      id: 3,
      title: 'Cybersecurity Overhaul for Healthcare',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Vulnerable systems and compliance requirements',
      solution: 'Comprehensive cybersecurity framework and compliance implementation',
      results: [
        'Zero security breaches',
        '100% compliance with HIPAA',
        '75% reduction in security incidents',
        'Enhanced patient data protection',
      ],
      duration: '4 months',
      team: '6 members',
      image: '/case-studies/medicare.jpg',
    },
    {
      id: 4,
      title: 'Digital Transformation for Manufacturing',
      client: 'ManufacturingPro',
      industry: 'Manufacturing',
      challenge: 'Outdated processes and lack of real-time visibility',
      solution: 'IoT integration and real-time analytics platform',
      results: [
        '30% increase in production efficiency',
        '25% reduction in downtime',
        'Real-time monitoring capabilities',
        'Predictive maintenance implementation',
      ],
      duration: '10 months',
      team: '15 members',
      image: '/case-studies/manufacturingpro.jpg',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Projects Completed' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  const industries = [
    'Technology',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Education',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results 
              through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed businesses across industries.
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white text-lg font-bold">{study.client.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{study.title}</h3>
                        <p className="text-gray-600">{study.client} • {study.industry}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have experience across various industries, delivering tailored solutions for each sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-lg font-semibold text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business and achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;