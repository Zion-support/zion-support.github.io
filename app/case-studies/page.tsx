import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Success Stories & Case Studies | Zion Tech Group',
  description: 'Discover real-world AI transformation success stories. See how Fortune 500 companies achieved 300% ROI, $12M savings, and 95% automation with our AI solutions.',
  keywords: 'AI success stories, AI case studies, Fortune 500 AI transformation, AI ROI, enterprise AI results, AI implementation success',
  openGraph: {
    title: 'AI Success Stories & Case Studies | Zion Tech Group',
    description: 'Discover real-world AI transformation success stories. See how Fortune 500 companies achieved 300% ROI.',
    type: 'website',
    url: 'https://ziontechgroup.com/case-studies',
    images: [
      {
        url: '/case-studies/ai-success-stories.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Success Stories and Case Studies',
      },
    ],
  },
};

const caseStudies = [
  {
    id: 'fortune-500-ai-transformation-success',
    title: 'Fortune 500 AI Success: 300% ROI in 8 Months',
    company: 'Fortune 500 Manufacturing',
    industry: 'Manufacturing',
    challenge: 'Manual processes, quality control issues, and supply chain inefficiencies',
    solution: 'Comprehensive AI transformation including quality control, predictive maintenance, and supply chain optimization',
    results: {
      roi: '300%',
      savings: '$12M',
      automation: '95%',
      downtime: '85%'
    },
    description: 'See how a Fortune 500 manufacturing company achieved 300% ROI and $12M annual savings through comprehensive AI transformation.',
    image: '/case-studies/fortune-500-success.jpg',
    featured: true
  },
  {
    id: 'ecommerce-customer-service-revolution',
    title: 'E-commerce Customer Service Revolution: 80% Faster Response Times',
    company: 'Leading E-commerce Platform',
    industry: 'E-commerce',
    challenge: 'Overwhelmed customer service team with 40,000+ monthly inquiries',
    solution: 'Multimodal AI customer service system with text, voice, and video processing',
    results: {
      responseTime: '80% faster',
      satisfaction: '95%',
      costReduction: '60%',
      availability: '24/7'
    },
    description: 'Discover how a major e-commerce platform implemented multimodal AI customer service, achieving 80% faster response times and 95% customer satisfaction.',
    image: '/case-studies/ecommerce-ai-success.jpg',
    featured: true
  },
  {
    id: 'healthcare-ai-diagnostic-breakthrough',
    title: 'Healthcare AI Diagnostic Breakthrough: 99.7% Accuracy',
    company: 'Regional Healthcare System',
    industry: 'Healthcare',
    challenge: 'Manual diagnostic processes causing delays and inconsistencies',
    solution: 'AI-powered diagnostic system with computer vision and machine learning',
    results: {
      accuracy: '99.7%',
      speed: '90% faster',
      costSavings: '$5M',
      patientSatisfaction: '98%'
    },
    description: 'Learn how a regional healthcare system achieved 99.7% diagnostic accuracy and 90% faster processing with AI-powered diagnostic tools.',
    image: '/case-studies/healthcare-ai-diagnostic.jpg',
    featured: false
  },
  {
    id: 'financial-services-fraud-detection',
    title: 'Financial Services Fraud Detection: 99.9% Accuracy',
    company: 'Major Financial Institution',
    industry: 'Financial Services',
    challenge: 'Increasing fraud attempts and manual detection processes',
    solution: 'AI-powered fraud detection system with real-time monitoring and analysis',
    results: {
      accuracy: '99.9%',
      falsePositives: '95% reduction',
      costSavings: '$8M',
      detectionSpeed: 'Real-time'
    },
    description: 'See how a major financial institution achieved 99.9% fraud detection accuracy and $8M in cost savings with AI-powered security systems.',
    image: '/case-studies/financial-fraud-detection.jpg',
    featured: false
  },
  {
    id: 'retail-inventory-optimization',
    title: 'Retail Inventory Optimization: 60% Cost Reduction',
    company: 'National Retail Chain',
    industry: 'Retail',
    challenge: 'Inventory management inefficiencies and stockout issues',
    solution: 'AI-powered inventory optimization system with predictive analytics',
    results: {
      costReduction: '60%',
      stockouts: '85% reduction',
      efficiency: '70% improvement',
      revenue: '25% increase'
    },
    description: 'Discover how a national retail chain achieved 60% cost reduction and 85% fewer stockouts with AI-powered inventory optimization.',
    image: '/case-studies/retail-inventory-optimization.jpg',
    featured: false
  },
  {
    id: 'logistics-supply-chain-optimization',
    title: 'Logistics Supply Chain Optimization: $1B+ Savings',
    company: 'Global Logistics Company',
    industry: 'Logistics',
    challenge: 'Complex supply chain with millions of variables and inefficiencies',
    solution: 'AI-powered supply chain optimization with quantum-enhanced algorithms',
    results: {
      savings: '$1B+',
      efficiency: '75% improvement',
      deliveryTime: '50% faster',
      customerSatisfaction: '95%'
    },
    description: 'Learn how a global logistics company achieved $1B+ in savings and 75% efficiency improvement with AI-powered supply chain optimization.',
    image: '/case-studies/logistics-supply-chain.jpg',
    featured: false
  }
];

const industries = [
  { name: 'All Industries', count: caseStudies.length, active: true },
  { name: 'Manufacturing', count: caseStudies.filter(caseStudy => caseStudy.industry === 'Manufacturing').length },
  { name: 'Financial Services', count: caseStudies.filter(caseStudy => caseStudy.industry === 'Financial Services').length },
  { name: 'Healthcare', count: caseStudies.filter(caseStudy => caseStudy.industry === 'Healthcare').length },
  { name: 'E-commerce', count: caseStudies.filter(caseStudy => caseStudy.industry === 'E-commerce' || caseStudy.industry === 'Retail').length },
  { name: 'Logistics', count: caseStudies.filter(caseStudy => caseStudy.industry === 'Logistics').length }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Success Stories &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover real-world AI transformation success stories. See how Fortune 500 companies 
              achieved 300% ROI, $12M savings, and 95% automation with our AI solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">300%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">$12M+</div>
                <div className="text-blue-100">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">95%</div>
                <div className="text-blue-100">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  industry.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry.name} ({industry.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful AI transformation success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.filter(caseStudy => caseStudy.featured).map((caseStudy) => (
              <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl text-white opacity-80">🏆</div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Success
                      </span>
                      <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {caseStudy.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(caseStudy.results).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      View Full Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of AI transformation success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300">
                  <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-4xl text-white opacity-80">📊</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the companies achieving 300% ROI with AI transformation. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free AI Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}