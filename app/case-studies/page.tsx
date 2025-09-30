import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover how we\'ve helped businesses achieve remarkable results with AI. Real success stories, proven results, and implementation insights.',
  keywords: 'AI case studies, success stories, AI implementation, business transformation, ROI results',
  openGraph: {
    title: 'AI Success Stories & Case Studies',
    description: 'Discover how we\'ve helped businesses achieve remarkable results with AI.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Manufacturing AI Transformation: 60% Cost Reduction & 90% Efficiency Gain',
      slug: 'manufacturing-ai-transformation-2026',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement through AI-powered supply chain optimization and predictive maintenance.',
      industry: 'Manufacturing',
      results: {
        costReduction: '60%',
        efficiencyGain: '90%',
        annualSavings: '$12M',
        roi: '300%'
      },
      featured: true,
    },
    {
      title: 'Multimodal AI Customer Service: 80% Faster Response Times',
      slug: 'multimodal-ai-customer-service-transformation',
      excerpt: 'See how a leading e-commerce company achieved 80% faster response times, 95% accuracy, and 60% cost reduction with multimodal AI.',
      industry: 'E-commerce',
      results: {
        responseTime: '80% faster',
        accuracy: '95%',
        costReduction: '60%',
        satisfaction: '95%'
      },
      featured: true,
    },
    {
      title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
      slug: 'ai-supply-chain-optimization-2025',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.',
      industry: 'Manufacturing',
      results: {
        costReduction: '60%',
        efficiencyGain: '90%',
        annualSavings: '$12M',
        roi: '300%'
      },
      featured: false,
    },
    {
      title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
      slug: 'fintech-ai-risk-compliance-2025',
      excerpt: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
      industry: 'FinTech',
      results: {
        riskReduction: '70%',
        savings: '$2.5M',
        compliance: '100%',
        roi: '250%'
      },
      featured: false,
    },
    {
      title: 'TechCorp: 90% Efficiency Gain with AI',
      slug: 'techcorp-ai-transformation',
      excerpt: 'See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.',
      industry: 'E-commerce',
      results: {
        efficiencyGain: '90%',
        annualSavings: '$500K',
        roi: '300%',
        timeReduction: '90%'
      },
      featured: false,
    },
    {
      title: 'FinServe: GenAI Risk Mitigation & Compliance',
      slug: 'finserve-genai-risk-mitigation',
      excerpt: 'How a fintech leader cut AI risk by 70% and achieved audit-ready compliance.',
      industry: 'Fintech',
      results: {
        riskReduction: '70%',
        compliance: '100%',
        accuracy: '95%',
        roi: '200%'
      },
      featured: false,
    },
    {
      title: 'RetailAI Corp: 150% Revenue Growth',
      slug: 'retail-ai-transformation',
      excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
      industry: 'Retail',
      results: {
        revenueGrowth: '150%',
        costReduction: '80%',
        roi: '400%',
        efficiencyGain: '85%'
      },
      featured: false,
    },
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Success Stories & Case Studies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how we've helped businesses achieve remarkable results with AI. 
          Real success stories, proven results, and implementation insights from our clients.
        </p>
      </header>

      {/* Featured Case Studies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </span>
                  <span className="text-gray-500 text-sm">{study.industry}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {study.excerpt}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-green-600">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
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
          {regularStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-gray-500 text-sm">{study.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {study.excerpt}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-green-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-semibold">
                  View Case Study →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
          <p className="text-xl opacity-90">
            Our AI solutions have delivered measurable results for clients across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
            <div className="text-gray-300">Efficiency Gain</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our clients who have achieved remarkable results with AI. 
            Get your free assessment and personalized transformation roadmap.
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
              Get Free Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}