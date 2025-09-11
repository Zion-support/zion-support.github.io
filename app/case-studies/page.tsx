import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign, Award, Clock, Target } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-healthcare-transformation',
      title: 'AI Healthcare Transformation',
      description: 'Revolutionizing patient care with AI-powered diagnostic assistance and predictive analytics.',
      industry: 'Healthcare',
      results: {
        efficiency: '40%',
        savings: '$12M',
        satisfaction: '95%'
      },
      duration: '18 months',
      icon: '🏥',
      href: '/case-studies/ai-healthcare-transformation'
    },
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Revolution',
      description: 'Comprehensive AI transformation for a Fortune 500 company across all business units.',
      industry: 'Enterprise',
      results: {
        efficiency: '35%',
        savings: '$25M',
        satisfaction: '92%'
      },
      duration: '24 months',
      icon: '🚀',
      href: '/case-studies/enterprise-ai-transformation'
    },
    {
      id: 'financial-ai-transformation',
      title: 'Financial Services AI Transformation',
      description: 'AI-powered risk management and fraud detection for a major banking institution.',
      industry: 'Financial Services',
      results: {
        efficiency: '50%',
        savings: '$8M',
        satisfaction: '98%'
      },
      duration: '12 months',
      icon: '🏦',
      href: '/case-studies/financial-ai-transformation'
    },
    {
      id: 'manufacturing-ai-optimization',
      title: 'Manufacturing AI Optimization',
      description: 'Predictive maintenance and quality control transformation for industrial manufacturing.',
      industry: 'Manufacturing',
      results: {
        efficiency: '45%',
        savings: '$15M',
        satisfaction: '90%'
      },
      duration: '15 months',
      icon: '🏭',
      href: '/case-studies/manufacturing-ai-optimization'
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - AI Transformation Success Stories | Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group has transformed businesses across industries with AI solutions. Real results, measurable impact, and proven success stories." />
        <meta name="keywords" content="AI case studies, business transformation, AI success stories, enterprise AI, Zion Tech Group" />
        <meta property="og:title" content="Case Studies - AI Transformation Success Stories" />
        <meta property="og:description" content="Discover how Zion Tech Group has transformed businesses across industries with AI solutions. Real results, measurable impact, and proven success stories." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Transformation Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Real results from real businesses. Discover how our AI solutions have transformed 
                organizations across industries, delivering measurable impact and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Start Your Transformation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.5B+</div>
                <p className="text-gray-600">Client Savings Generated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">40%</div>
                <p className="text-gray-600">Average Efficiency Gain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore detailed case studies showcasing the transformative power of AI across different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link key={study.id} href={study.href} className="group">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{study.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-sm text-gray-500">{study.industry}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">{study.results.efficiency}</div>
                          <p className="text-xs text-gray-500">Efficiency Gain</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{study.results.savings}</div>
                          <p className="text-xs text-gray-500">Annual Savings</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">{study.results.satisfaction}</div>
                          <p className="text-xs text-gray-500">Satisfaction</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industries We Transform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI solutions have delivered results across diverse industries, from healthcare to finance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">AI-powered diagnostics and patient care optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-sm text-gray-600">Risk management and fraud detection</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-sm text-gray-600">Predictive maintenance and quality control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-sm text-gray-600">Comprehensive business transformation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of companies that have transformed their operations with our AI solutions. 
              Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}