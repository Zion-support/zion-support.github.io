import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-neural-interface-healthcare-breakthrough-2025',
      title: 'Neural Interface Healthcare Breakthrough: $500M Savings with AI-Enhanced Brain-Computer Interfaces',
      excerpt: 'Discover how a leading healthcare system achieved $500M in cost savings and improved patient outcomes by implementing AI-enhanced neural interface technology for stroke rehabilitation and neurological care.',
      company: 'Leading Healthcare System',
      industry: 'Healthcare',
      result: '$500M cost savings',
      improvement: '85% recovery rate',
      category: 'Neural Interfaces',
      icon: '🧠',
      href: '/case-studies/ai-neural-interface-healthcare-breakthrough-2025',
      featured: true,
      date: '2025-01-28'
    },
    {
      id: 'ai-automation-manufacturing-success-2025',
      title: 'AI Manufacturing Success: 40% Cost Reduction and 60% Faster Processing',
      excerpt: 'How a Fortune 500 manufacturing company achieved unprecedented results with AI automation, reducing costs by 40% and improving processing speed by 60%.',
      company: 'Fortune 500 Manufacturer',
      industry: 'Manufacturing',
      result: '40% cost reduction',
      improvement: '60% faster processing',
      category: 'AI Automation',
      icon: '🏭',
      href: '/case-studies/ai-automation-manufacturing-success-2025',
      featured: true,
      date: '2025-01-20'
    },
    {
      id: 'ai-financial-services-transformation-2025',
      title: 'Financial Services AI Transformation: $50M Savings and 300% Efficiency Gains',
      excerpt: 'Complete case study showing how a major financial services company transformed operations with AI, achieving $50M in cost savings and 300% efficiency improvements.',
      company: 'Major Financial Services',
      industry: 'Financial Services',
      result: '$50M cost savings',
      improvement: '300% efficiency gains',
      category: 'AI Transformation',
      icon: '🏦',
      href: '/case-studies/ai-financial-services-transformation-2025',
      featured: true,
      date: '2025-01-15'
    },
    {
      id: 'ai-sustainability-transformation-2025',
      title: 'AI Sustainability Success: 60% Energy Reduction and Carbon Neutrality',
      excerpt: 'Learn how AI-powered sustainability initiatives helped a global company achieve 60% energy reduction and complete carbon neutrality while improving profitability.',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      result: '60% energy reduction',
      improvement: 'Carbon neutrality',
      category: 'Sustainability',
      icon: '🌱',
      href: '/case-studies/ai-sustainability-transformation-2025',
      featured: false,
      date: '2025-01-10'
    },
    {
      id: 'ai-autonomous-manufacturing-success-2025',
      title: 'Autonomous Manufacturing Revolution: $200M in Operational Savings',
      excerpt: 'Case study of how autonomous AI systems transformed manufacturing operations, achieving $200M in operational savings and 99.7% uptime.',
      company: 'Global Manufacturing Leader',
      industry: 'Manufacturing',
      result: '$200M operational savings',
      improvement: '99.7% uptime',
      category: 'Autonomous Systems',
      icon: '🤖',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      featured: false,
      date: '2025-01-05'
    },
    {
      id: 'ai-cybersecurity-transformation-breakthrough-2025',
      title: 'AI Cybersecurity Transformation: Zero Breaches with 90% Faster Threat Detection',
      excerpt: 'How AI-powered cybersecurity transformed threat detection and response, achieving zero breaches and 90% faster incident response times.',
      company: 'Fortune 500 Technology',
      industry: 'Technology',
      result: 'Zero security breaches',
      improvement: '90% faster detection',
      category: 'Cybersecurity',
      icon: '🛡️',
      href: '/case-studies/ai-cybersecurity-transformation-breakthrough-2025',
      featured: false,
      date: '2025-01-01'
    }
  ];

  const categories = [
    { name: 'All Case Studies', count: caseStudies.length, active: true },
    { name: 'Healthcare', count: caseStudies.filter(c => c.industry === 'Healthcare').length },
    { name: 'Manufacturing', count: caseStudies.filter(c => c.industry === 'Manufacturing').length },
    { name: 'Financial Services', count: caseStudies.filter(c => c.industry === 'Financial Services').length },
    { name: 'Technology', count: caseStudies.filter(c => c.industry === 'Technology').length }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Success Stories & Case Studies | Zion Tech Group"
        description="Explore real-world AI success stories and case studies from leading companies. Learn how organizations achieved breakthrough results with AI implementation."
        keywords="AI case studies, success stories, AI implementation results, business transformation, AI ROI, real-world AI examples"
        url="/case-studies"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📊 SUCCESS STORIES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Success Stories & Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies achieved breakthrough results with AI implementation. 
            Learn from real-world success stories and get insights for your own AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured-case-studies"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Case Studies
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <div className="text-3xl font-bold text-green-600 mb-2">$1.2B+</div>
            <div className="text-gray-700">Total Cost Savings</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-700">Companies Transformed</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <div className="text-3xl font-bold text-purple-600 mb-2">340%</div>
            <div className="text-gray-700">Average ROI</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-orange-600" />
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-700">Success Rate</div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Industry</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        <section id="featured-case-studies" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.filter(c => c.featured).map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                      {caseStudy.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {caseStudy.industry}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {caseStudy.excerpt}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="text-sm text-green-600 font-medium mb-1">Key Result</div>
                          <div className="text-lg font-semibold text-green-800">{caseStudy.result}</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="text-sm text-blue-600 font-medium mb-1">Improvement</div>
                          <div className="text-lg font-semibold text-blue-800">{caseStudy.improvement}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(caseStudy.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                          <span className="font-medium">Read Case Study</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="text-center mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform mb-4">
                      {caseStudy.icon}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {caseStudy.industry}
                      </span>
                      {caseStudy.featured && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {caseStudy.excerpt}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Result:</span>
                      <span className="font-semibold text-green-600">{caseStudy.result}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Improvement:</span>
                      <span className="font-semibold text-blue-600">{caseStudy.improvement}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(caseStudy.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the companies achieving breakthrough results with AI. Let us help you 
            transform your business with proven AI strategies and implementation expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Latest AI Articles & Insights
                </h3>
                <p className="text-gray-600 text-sm">
                  Read our latest articles on AI trends, implementation strategies, and industry insights
                </p>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Free AI Resources & Guides
                </h3>
                <p className="text-gray-600 text-sm">
                  Download our comprehensive collection of free AI resources, implementation guides, and templates
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}