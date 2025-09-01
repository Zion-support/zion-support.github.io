import React from 'react';
import ModernLayout from '../components/layout/ModernLayout';
import { ExternalLink, ArrowRight, Users, TrendingUp, Shield, Zap, Brain, Cloud } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'fintech-automation',
      title: 'FinTech Compliance Automation',
      client: 'Regional Credit Union',
      industry: 'Financial Services',
      challenge: 'Manual compliance processes causing delays and errors in regulatory reporting.',
      solution: 'Implemented AI-powered compliance automation platform with real-time monitoring.',
      results: [
        '85% reduction in compliance processing time',
        '99.9% accuracy in regulatory reporting',
        '40% cost savings in compliance operations'
      ],
      technologies: ['AI/ML', 'Cloud Native', 'Security'],
      duration: '6 months',
      icon: Shield
    },
    {
      id: 'ecommerce-optimization',
      title: 'E-commerce Performance Optimization',
      client: 'Mid-Market Retailer',
      industry: 'Retail',
      challenge: 'Slow website performance and poor conversion rates affecting revenue.',
      solution: 'Implemented performance optimization, CDN, and A/B testing framework.',
      results: [
        '60% improvement in page load speed',
        '35% increase in conversion rates',
        '25% boost in mobile revenue'
      ],
      technologies: ['Performance', 'CDN', 'Analytics'],
      duration: '4 months',
      icon: TrendingUp
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI Assistant',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Overwhelmed support staff and long patient wait times.',
      solution: 'Deployed AI-powered patient support assistant with natural language processing.',
      results: [
        '70% reduction in support ticket volume',
        '50% faster patient response times',
        '95% patient satisfaction rate'
      ],
      technologies: ['AI/ML', 'NLP', 'Healthcare APIs'],
      duration: '8 months',
      icon: Brain
    },
    {
      id: 'manufacturing-iot',
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Lack of real-time visibility into production processes and equipment health.',
      solution: 'Implemented IoT sensor network with predictive maintenance analytics.',
      results: [
        '30% reduction in unplanned downtime',
        '20% improvement in production efficiency',
        '15% decrease in maintenance costs'
      ],
      technologies: ['IoT', 'Data Analytics', 'Cloud'],
      duration: '10 months',
      icon: Cloud
    }
  ];

  const industries = ['All Industries', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Technology'];

  return (
    <ModernLayout
      title="Case Studies | Zion Tech Group"
      description="Explore real-world examples of how Zion Tech Group has helped clients achieve digital transformation and business success."
      canonical="https://ziontechgroup.com/case-studies"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real results from real clients. See how we've helped businesses transform their operations and achieve measurable outcomes.
          </p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  industry === 'All Industries'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <study.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                        <p className="text-blue-600 font-medium">{study.client}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Duration: {study.duration}</span>
                      <span>•</span>
                      <span>{study.technologies.join(', ')}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions have delivered measurable results across industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how Zion Tech Group can help you achieve similar results and transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </ModernLayout>
  );
}