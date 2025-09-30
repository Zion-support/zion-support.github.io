import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Case Studies - Real Success Stories & ROI Results | Zion Tech Group',
  description: 'Discover real AI transformation success stories with measurable ROI results. See how companies achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.',
  keywords: 'AI case studies, AI success stories, AI ROI, AI transformation, AI implementation, business results',
  openGraph: {
    title: 'AI Case Studies - Real Success Stories & ROI Results',
    description: 'Discover real AI transformation success stories with measurable ROI results.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
    images: [
      {
        url: '/og-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Case Studies',
      },
    ],
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Manufacturing AI Transformation: 60% Cost Reduction & 90% Efficiency Gain',
      slug: 'manufacturing-ai-transformation-2026',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually through comprehensive AI transformation.',
      industry: 'Manufacturing',
      company: 'Global Manufacturing Corp',
      results: {
        costReduction: '60%',
        efficiencyGain: '90%',
        annualSavings: '$12M',
        roi: '300%'
      },
      featured: true
    },
    {
      title: 'Multimodal AI Customer Service: 80% Faster Response Times',
      slug: 'multimodal-ai-customer-service-transformation',
      excerpt: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with multimodal AI.',
      industry: 'E-commerce',
      company: 'E-commerce Leader',
      results: {
        responseTime: '80% faster',
        accuracy: '95%',
        costReduction: '60%',
        satisfaction: '90%'
      },
      featured: true
    },
    {
      title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
      slug: 'ai-supply-chain-optimization-2025',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
      industry: 'Manufacturing',
      company: 'Global Manufacturer',
      results: {
        costReduction: '60%',
        efficiencyGain: '90%',
        annualSavings: '$12M',
        accuracy: '95%'
      },
      featured: false
    },
    {
      title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
      slug: 'fintech-ai-risk-compliance-2025',
      excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
      industry: 'FinTech',
      company: 'Leading FinTech',
      results: {
        riskReduction: '70%',
        annualSavings: '$2.5M',
        compliance: '99.9%',
        roi: '250%'
      },
      featured: false
    },
    {
      title: 'TechCorp: 90% Efficiency Gain with AI',
      slug: 'techcorp-ai-transformation',
      excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
      industry: 'E-commerce',
      company: 'TechCorp Inc.',
      results: {
        efficiencyGain: '90%',
        annualSavings: '$500K',
        timeReduction: '90%',
        roi: '300%'
      },
      featured: false
    },
    {
      title: 'FinServe: GenAI Risk Mitigation & Compliance',
      slug: 'finserve-genai-risk-mitigation',
      excerpt: 'How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.',
      industry: 'FinTech',
      company: 'FinServe',
      results: {
        riskReduction: '70%',
        compliance: 'Audit-ready',
        accuracy: '99.7%',
        roi: '200%'
      },
      featured: false
    },
    {
      title: 'RetailAI Corp: 150% Revenue Growth',
      slug: 'retail-ai-transformation',
      excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
      industry: 'Retail',
      company: 'RetailAI Corp',
      results: {
        revenueGrowth: '150%',
        costReduction: '80%',
        efficiencyGain: '85%',
        roi: '400%'
      },
      featured: false
    },
    {
      title: 'HealthTech Solutions: 80% Faster Response Time',
      slug: 'healthtech-ai-transformation',
      excerpt: 'See how HealthTech Solutions achieved 80% faster response time and 24/7 support with AI Virtual Assistant implementation.',
      industry: 'Healthcare',
      company: 'HealthTech Solutions',
      results: {
        responseTime: '80% faster',
        support: '24/7',
        satisfaction: '95%',
        costReduction: '70%'
      },
      featured: false
    },
    {
      title: 'FinanceFlow Ltd: 75% Process Efficiency Improvement',
      slug: 'financeflow-ai-automation',
      excerpt: 'See how FinanceFlow Ltd achieved 75% process efficiency improvement with AI Workflow Automation platform.',
      industry: 'FinTech',
      company: 'FinanceFlow Ltd',
      results: {
        efficiencyGain: '75%',
        roi: '300%',
        automation: '90%',
        costReduction: '60%'
      },
      featured: false
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Case Studies: Real Success Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover real AI transformation success stories with measurable ROI results. 
          See how companies achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.
        </p>
      </header>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredStudies.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <span className="text-6xl">🏆</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Success Story
                    </span>
                    <span className="text-sm text-gray-500">{study.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  
                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(study.results).slice(0, 4).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-green-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{study.company}</span>
                    <span className="text-green-600 font-semibold group-hover:text-green-700">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularStudies.map((study, index) => (
            <Link key={index} href={`/case-studies/${study.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
                <div className="h-40 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {study.excerpt}
                  </p>
                  
                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {Object.entries(study.results).slice(0, 2).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{study.company}</span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Across Industries</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Manufacturing</h3>
            <p className="text-sm text-gray-600 mb-2">60% cost reduction</p>
            <p className="text-sm text-gray-600">90% efficiency gain</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">FinTech</h3>
            <p className="text-sm text-gray-600 mb-2">70% risk reduction</p>
            <p className="text-sm text-gray-600">$2.5M+ savings</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
            <p className="text-sm text-gray-600 mb-2">80% faster response</p>
            <p className="text-sm text-gray-600">95% accuracy</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600 mb-2">24/7 support</p>
            <p className="text-sm text-gray-600">95% satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join 500+ companies that have achieved remarkable results with AI transformation. 
          Get your free AI assessment and transformation roadmap.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}