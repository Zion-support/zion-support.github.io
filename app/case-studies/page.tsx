import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI transformation success stories. See how companies achieved $500M+ savings, 99% automation, and 600% ROI with our AI solutions.',
  keywords: 'AI case studies, success stories, AI transformation, enterprise AI, automation success, AI ROI, digital transformation',
};

const caseStudies = [
  {
    title: 'AI Mega Transformation Success 2026: $500M+ Savings Achieved',
    slug: 'ai-mega-transformation-success-2026',
    excerpt: 'Discover how a Fortune 500 company achieved $500M+ annual savings and 99% process automation through comprehensive AI transformation.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$500M+',
      automation: '99%',
      roi: '600%',
      timeline: '18 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    slug: 'ai-supply-chain-optimization-2025',
    excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: {
      savings: '$12M',
      efficiency: '90%',
      costReduction: '60%',
      timeline: '12 months'
    },
    image: '📦',
    color: 'blue'
  },
  {
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    slug: 'fintech-ai-risk-compliance-2025',
    excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
    company: 'FinTech Solutions Inc',
    industry: 'Financial Services',
    results: {
      savings: '$2.5M',
      riskReduction: '70%',
      compliance: '100%',
      timeline: '9 months'
    },
    image: '💰',
    color: 'purple'
  },
  {
    title: 'TechCorp: 90% Efficiency Gain with AI',
    slug: 'techcorp-ai-transformation',
    excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
    company: 'TechCorp Inc',
    industry: 'E-commerce',
    results: {
      savings: '$500K',
      efficiency: '90%',
      roi: '300%',
      timeline: '6 months'
    },
    image: '🛒',
    color: 'orange'
  },
  {
    title: 'HealthTech Solutions: 80% Faster Response Time',
    slug: 'healthtech-ai-transformation',
    excerpt: 'Achieved 80% faster response time, 24/7 support, and 95% customer satisfaction with AI virtual assistant.',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    results: {
      responseTime: '80% faster',
      satisfaction: '95%',
      uptime: '24/7',
      timeline: '4 months'
    },
    image: '🏥',
    color: 'teal'
  },
  {
    title: 'RetailAI Corp: 150% Revenue Growth',
    slug: 'retail-ai-transformation',
    excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
    company: 'RetailAI Corp',
    industry: 'Retail',
    results: {
      revenueGrowth: '150%',
      costReduction: '80%',
      roi: '400%',
      timeline: '8 months'
    },
    image: '🛍️',
    color: 'pink'
  },
  {
    title: 'FinanceFlow Ltd: 75% Process Efficiency Improvement',
    slug: 'financeflow-ai-automation',
    excerpt: 'Achieved 75% process efficiency improvement and 300% ROI in 6 months with AI workflow automation.',
    company: 'FinanceFlow Ltd',
    industry: 'Fintech',
    results: {
      efficiency: '75%',
      roi: '300%',
      automation: '85%',
      timeline: '6 months'
    },
    image: '💳',
    color: 'indigo'
  },
  {
    title: 'Manufacturing Excellence: Zero-Defect Production',
    slug: 'ai-manufacturing-excellence-2026',
    excerpt: 'Achieved zero-defect manufacturing with 99.99% quality assurance and 60% increase in production efficiency.',
    company: 'Global Manufacturing Ltd',
    industry: 'Manufacturing',
    results: {
      quality: '99.99%',
      efficiency: '60%',
      defects: '0%',
      timeline: '10 months'
    },
    image: '⚙️',
    color: 'red'
  }
];

const industries = [
  { name: 'All Industries', count: caseStudies.length, active: true },
  { name: 'Manufacturing', count: caseStudies.filter(item => item.industry === 'Manufacturing').length },
  { name: 'Financial Services', count: caseStudies.filter(item => item.industry === 'Financial Services' || item.industry === 'Fintech').length },
  { name: 'Healthcare', count: caseStudies.filter(item => item.industry === 'Healthcare').length },
  { name: 'E-commerce', count: caseStudies.filter(item => item.industry === 'E-commerce' || item.industry === 'Retail').length }
];

export default function CaseStudiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover real-world AI transformation success stories. See how companies achieved 
          $500M+ savings, 99% automation, and 600% ROI with our proven AI solutions.
        </p>
      </header>

      {/* Industry Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {industries.map((industry) => (
          <button
            key={industry.name}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              industry.active
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {industry.name} ({industry.count})
          </button>
        ))}
      </div>

      {/* Featured Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`bg-${caseStudy.color}-100 text-${caseStudy.color}-800 px-3 py-1 rounded-full text-sm font-semibold`}>
                      {caseStudy.industry}
                    </span>
                    <span className="text-sm text-gray-500">{caseStudy.company}</span>
                  </div>
                  <div className="text-5xl mb-6">{caseStudy.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {caseStudy.excerpt}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(caseStudy.results).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      Read Full Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}`} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-${caseStudy.color}-100 text-${caseStudy.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                    {caseStudy.industry}
                  </span>
                </div>
                <div className="text-3xl mb-4">{caseStudy.image}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {caseStudy.excerpt}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(caseStudy.results).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{caseStudy.company}</span>
                  <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}