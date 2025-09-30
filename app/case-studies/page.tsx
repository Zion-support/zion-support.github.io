import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI success stories and case studies. See how we helped 500+ companies achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.',
  keywords: 'AI case studies, success stories, AI ROI, enterprise AI, AI implementation, business transformation, AI results',
  openGraph: {
    title: 'AI Success Stories & Case Studies | Zion Tech Group',
    description: 'Real-world AI success stories and case studies showing 300% ROI, 70% cost reduction, and 90% efficiency gains.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
    images: [
      {
        url: '/case-studies/case-studies-index.jpg',
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
      title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
      excerpt: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI supply chain optimization solutions.',
      href: '/case-studies/ai-supply-chain-optimization-2025',
      industry: 'Manufacturing',
      company: 'Fortune 500 Manufacturer',
      results: {
        costReduction: '60%',
        efficiencyGain: '90%',
        annualSavings: '$12M',
        roi: '400%',
      },
      image: '/case-studies/supply-chain-optimization.jpg',
      featured: true,
    },
    {
      title: 'AI Finance Automation: 95% Process Reduction & $3M Savings',
      excerpt: 'Leading financial services firm achieved 95% process reduction and $3M annual savings through AI-powered finance automation and fraud detection.',
      href: '/case-studies/ai-finance-automation-2025',
      industry: 'Financial Services',
      company: 'Major Bank',
      results: {
        processReduction: '95%',
        annualSavings: '$3M',
        fraudDetection: '99.7%',
        roi: '350%',
      },
      image: '/case-studies/finance-automation.jpg',
      featured: false,
    },
    {
      title: 'AI Customer Service: 80% Faster Response & 95% Satisfaction',
      excerpt: 'E-commerce giant implemented AI virtual assistants achieving 80% faster response times and 95% customer satisfaction scores.',
      href: '/case-studies/ai-customer-service-2025',
      industry: 'E-commerce',
      company: 'Global Retailer',
      results: {
        responseTime: '80%',
        satisfaction: '95%',
        costReduction: '50%',
        roi: '280%',
      },
      image: '/case-studies/customer-service.jpg',
      featured: false,
    },
    {
      title: 'AI Healthcare: 90% Diagnostic Accuracy & 60% Time Savings',
      excerpt: 'Healthcare provider deployed AI diagnostic tools achieving 90% accuracy and 60% reduction in diagnosis time for critical conditions.',
      href: '/case-studies/ai-healthcare-diagnostics-2025',
      industry: 'Healthcare',
      company: 'Regional Hospital System',
      results: {
        accuracy: '90%',
        timeSavings: '60%',
        patientOutcomes: '40%',
        roi: '320%',
      },
      image: '/case-studies/healthcare-diagnostics.jpg',
      featured: false,
    },
    {
      title: 'AI Manufacturing: 75% Quality Improvement & 50% Downtime Reduction',
      excerpt: 'Automotive manufacturer implemented AI quality control achieving 75% improvement in defect detection and 50% reduction in production downtime.',
      href: '/case-studies/ai-manufacturing-quality-2025',
      industry: 'Automotive',
      company: 'Global Auto Manufacturer',
      results: {
        qualityImprovement: '75%',
        downtimeReduction: '50%',
        costSavings: '$8M',
        roi: '450%',
      },
      image: '/case-studies/manufacturing-quality.jpg',
      featured: false,
    },
    {
      title: 'AI Retail: 40% Sales Increase & 30% Inventory Optimization',
      excerpt: 'Retail chain deployed AI-powered demand forecasting and personalized recommendations achieving 40% sales increase and 30% inventory optimization.',
      href: '/case-studies/ai-retail-optimization-2025',
      industry: 'Retail',
      company: 'National Retail Chain',
      results: {
        salesIncrease: '40%',
        inventoryOptimization: '30%',
        customerRetention: '25%',
        roi: '380%',
      },
      image: '/case-studies/retail-optimization.jpg',
      featured: false,
    },
  ];

  const industries = [
    'All Industries',
    'Manufacturing',
    'Financial Services',
    'E-commerce',
    'Healthcare',
    'Automotive',
    'Retail',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Success Stories & Case Studies
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover real-world AI success stories and case studies. See how we helped 500+ companies achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Story</h2>
            <p className="text-lg text-gray-600">Our most impactful transformation</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Success Story
                  </span>
                  <span className="text-gray-600 text-sm">Manufacturing</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually with AI-powered supply chain optimization solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/case-studies/ai-supply-chain-optimization-2025"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    View Full Case Study
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
                  >
                    Get Similar Results
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">90%</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">$12M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">400%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Success Stories</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive collection of AI transformation success stories</p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  industry === 'All Industries'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {caseStudy.industry}
                      </span>
                      <span className="text-gray-500 text-sm">{caseStudy.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.excerpt}
                    </p>
                    
                    {/* Results Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          {Object.values(caseStudy.results)[0]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {Object.keys(caseStudy.results)[0].replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {Object.values(caseStudy.results)[1]}
                        </div>
                        <div className="text-xs text-gray-500">
                          {Object.keys(caseStudy.results)[1].replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">View Details</span>
                      <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600">Our AI solutions deliver consistent, measurable results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-600">Average Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join 500+ companies that have transformed their operations with our AI solutions. Get your free consultation and custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}