import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Building, DollarSign, TrendingUp, Users } from 'lucide-react';

export const metadata = {
  title: 'AI Case Studies - Success Stories & ROI Results | Zion Tech Group',
  description: 'Explore real-world AI success stories and case studies. See how Fortune 500 companies achieved $50M+ ROI with our AI solutions.',
  keywords: 'AI case studies, success stories, ROI results, Fortune 500, AI transformation, business results',
};

export default function CaseStudiesPage() {
  const featuredCaseStudies = [
    {
      title: 'AI Metaverse Transformation 2026: $25M ROI Case Study',
      slug: '/case-studies/ai-metaverse-transformation-2026',
      description: 'See how a Fortune 500 company achieved $25M ROI and 95% efficiency gains with comprehensive AI metaverse transformation.',
      readTime: '18 min read',
      company: 'Fortune 500',
      industry: 'Global Manufacturing',
      results: { roi: '$25M', efficiency: '95%', savings: '$2M' },
      icon: Building,
      gradient: 'from-green-600 via-blue-600 to-purple-600',
      featured: true
    }
  ];

  const allCaseStudies = [
    ...featuredCaseStudies,
    {
      title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
      slug: '/case-studies/ai-sustainability-transformation-2026',
      description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
      readTime: '15 min read',
      company: 'Fortune 500',
      industry: 'Sustainability',
      results: { roi: '$10M', carbon: '100%', savings: '$2M' },
      icon: TrendingUp,
      gradient: 'from-green-600 via-teal-600 to-blue-600'
    },
    {
      title: 'AI Quantum Optimization 2026: 1000x Speed Improvement Case Study',
      slug: '/case-studies/ai-quantum-optimization-2026',
      description: 'See how a financial services company achieved 1000x optimization speed and $12M additional returns with quantum-enhanced AI.',
      readTime: '12 min read',
      company: 'Financial Services',
      industry: 'FinTech',
      results: { speed: '1000x', returns: '$12M', accuracy: '95%' },
      icon: DollarSign,
      gradient: 'from-purple-600 via-indigo-600 to-blue-600'
    },
    {
      title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
      slug: '/case-studies/fintech-ai-risk-compliance-2025',
      description: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
      readTime: '14 min read',
      company: 'FinTech Leader',
      industry: 'Financial Services',
      results: { risk: '70%', savings: '$2.5M', compliance: '100%' },
      icon: TrendingUp,
      gradient: 'from-blue-600 via-purple-600 to-pink-600'
    },
    {
      title: 'TechCorp: 90% Efficiency Gain with AI',
      slug: '/case-studies/techcorp-ai-transformation',
      description: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
      readTime: '16 min read',
      company: 'TechCorp Inc.',
      industry: 'E-commerce',
      results: { efficiency: '90%', savings: '$500K', roi: '300%' },
      icon: Building,
      gradient: 'from-green-600 via-blue-600 to-purple-600'
    },
    {
      title: 'RetailAI Corp: 150% Revenue Growth',
      slug: '/case-studies/retail-ai-transformation',
      description: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
      readTime: '13 min read',
      company: 'RetailAI Corp',
      industry: 'Retail',
      results: { growth: '150%', reduction: '80%', roi: '400%' },
      icon: TrendingUp,
      gradient: 'from-orange-600 via-red-600 to-pink-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium mb-6">
          <Building className="w-4 h-4 mr-2" />
          SUCCESS STORIES & ROI RESULTS
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore real-world success stories and see how leading companies achieved 
          remarkable results with our AI solutions. From Fortune 500 transformations 
          to startup innovations.
        </p>
      </div>

      {/* Featured Case Studies */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Case Studies</h2>
        <div className="grid lg:grid-cols-1 gap-8">
          {featuredCaseStudies.map((caseStudy, index) => (
            <Link key={index} href={caseStudy.slug} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`relative h-64 bg-gradient-to-br ${caseStudy.gradient}`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <caseStudy.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.title.split(':')[0]}</h3>
                      <p className="text-sm opacity-90">{caseStudy.industry}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Case Study</span>
                    <span className="text-gray-500 text-sm">{caseStudy.readTime}</span>
                    <span className="text-gray-500 text-sm">{caseStudy.company}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {caseStudy.title}
                  </h4>
                  <p className="text-gray-600 mb-6 text-lg">
                    {caseStudy.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-8">
                      {Object.entries(caseStudy.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-3xl font-bold text-green-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((caseStudy, index) => (
            <Link key={index} href={caseStudy.slug} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {caseStudy.featured ? 'FEATURED' : 'SUCCESS STORY'}
                  </span>
                  <span className="text-xs text-gray-500">{caseStudy.company}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-green-600 font-medium">📊 Case Study</span>
                  <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {caseStudy.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {Object.entries(caseStudy.results).map(([key, value], resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-lg font-bold text-green-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {caseStudy.readTime}
                  </div>
                  <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="mt-20 py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results by Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions have delivered exceptional results across multiple industries, 
            from Fortune 500 companies to innovative startups.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-sm text-gray-500">Efficiency Gain</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
            <div className="text-3xl font-bold text-green-600 mb-1">$50M+</div>
            <div className="text-sm text-gray-500">ROI Achieved</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Retail</h3>
            <div className="text-3xl font-bold text-purple-600 mb-1">150%</div>
            <div className="text-sm text-gray-500">Revenue Growth</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
            <div className="text-3xl font-bold text-orange-600 mb-1">80%</div>
            <div className="text-sm text-gray-500">Cost Reduction</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the companies that have already transformed their business with AI. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}