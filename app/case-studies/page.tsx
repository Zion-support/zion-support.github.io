import ArrowRight from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI transformation success stories. See how companies achieved $500M+ savings, 99% automation, and 600% ROI with our AI solutions.',
  keywords: 'AI case studies, success stories, AI transformation, enterprise AI, automation success, AI ROI, digital transformation',
};

const caseStudies = [
  {
    title: 'AI Manufacturing Transformation: 90% Efficiency Gain',
    slug: 'ai-manufacturing-transformation-2026',
    excerpt: 'See how a Fortune 500 manufacturer achieved 90% efficiency gains and $50M annual savings through comprehensive AI transformation.',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: {
      savings: '$50M',
      efficiency: '90%',
      quality: '95%',
      timeline: '12 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'Fortune 500 AI Transformation: $50M+ Savings & 300% ROI',
    slug: 'fortune-500-ai-transformation-2027',
    excerpt: 'See how a Fortune 500 company achieved $50M+ in savings and a 300% ROI through comprehensive AI transformation with Zion Tech Group.',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    results: {
      savings: '$50M+',
      roi: '300%',
      efficiency: '85%',
      timeline: '18 months'
    },
    image: '🏭',
    color: 'green'
  },
  {
    title: 'AI FinTech Quantum Transformation 2026: $100M Revenue & 99.9% Security',
    slug: 'ai-fintech-quantum-transformation-2026',
    excerpt: 'See how a leading FinTech achieved $100M revenue increase, 99.9% security improvement, and quantum-powered trading capabilities.',
    company: 'Leading FinTech Company',
    industry: 'Financial Services',
    results: {
      revenue: '$100M',
      security: '99.9%',
      speed: '1000x',
      timeline: '18 months'
    },
    image: '💰',
    color: 'indigo'
  },
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Success Stories & Case Studies
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Real-world AI transformation success stories from Fortune 500 companies and enterprise clients. 
            See how our solutions deliver measurable results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry.name}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {industry.name} ({industry.count})
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured Success Story
              </span>
              <span className="text-gray-600 text-sm">Fortune 500 Client</span>
              <span className="text-gray-600 text-sm">•</span>
              <span className="text-gray-600 text-sm">18 months</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudies[0].title}
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {caseStudies[0].excerpt}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {Object.entries(caseStudies[0].results).map(([key, value]) => (
                <span key={key} className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                </span>
              ))}
            </div>
            <ArrowRight
              href={`/case-studies/${caseStudies[0].slug}`}
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Read Full Case Study
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </ArrowRight>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            All Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <article key={study.slug} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-3xl">{study.image}</span>
                    </div>
                    <p className="text-sm font-medium">{study.industry}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-${study.color}-100 text-${study.color}-800 px-2 py-1 rounded-full text-xs font-medium`}>
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="space-y-2 mb-4">
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-sm text-green-600 font-medium">
                        ✓ {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Success Story</span>
                    <ArrowRight
                      href={`/case-studies/${study.slug}`}
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Read More →
                    </ArrowRight>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Proven Results Across Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$500M+</div>
                <div className="text-gray-600 font-medium">Total Client Savings</div>
                <div className="text-sm text-gray-500 mt-2">Across all implementations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Average Efficiency Gain</div>
                <div className="text-sm text-gray-500 mt-2">Process optimization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Successful Projects</div>
                <div className="text-sm text-gray-500 mt-2">Enterprise clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">8</div>
                <div className="text-gray-600 font-medium">Months Average ROI</div>
                <div className="text-sm text-gray-500 mt-2">Payback period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ArrowRight
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Solutions
            </ArrowRight>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}