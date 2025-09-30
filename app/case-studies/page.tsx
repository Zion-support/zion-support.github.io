import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories & Case Studies - Zion Tech Group',
  description: 'Real-world AI transformation success stories from Fortune 500 companies and enterprise clients.',
};

const caseStudies = [
  {
    id: 'fortune-500-ai-transformation-2027',
    title: 'Fortune 500 AI Transformation Success',
    excerpt: 'How a Fortune 500 company achieved 40% cost reduction and 300% efficiency gains with comprehensive AI transformation.',
    industry: 'Manufacturing',
    results: ['40% Cost Reduction', '300% Efficiency Gains', '$50M Annual Savings'],
    image: '/images/fortune-500-transformation.jpg',
    readTime: '8 min read'
  },
  {
    id: 'ai-autonomous-manufacturing-success-2026',
    title: 'Autonomous Manufacturing Revolution',
    excerpt: 'A leading automotive manufacturer achieved 99.9% production efficiency with autonomous AI systems.',
    industry: 'Automotive',
    results: ['99.9% Efficiency', '60% Downtime Reduction', '25% Quality Improvement'],
    image: '/images/autonomous-manufacturing.jpg',
    readTime: '6 min read'
  },
  {
    id: 'ai-cognitive-enterprise-success-2026',
    title: 'Cognitive Enterprise Transformation',
    excerpt: 'A financial services company implemented cognitive AI to enhance decision-making and customer experience.',
    industry: 'Financial Services',
    results: ['95% Decision Accuracy', '50% Faster Processing', '30% Customer Satisfaction'],
    image: '/images/cognitive-enterprise.jpg',
    readTime: '7 min read'
  },
  {
    id: 'ai-neural-interface-healthcare-success-2026',
    title: 'Neural Interface Healthcare Breakthrough',
    excerpt: 'Revolutionary brain-computer interface implementation in medical diagnostics and treatment.',
    industry: 'Healthcare',
    results: ['90% Diagnostic Accuracy', '70% Treatment Speed', '40% Recovery Time'],
    image: '/images/neural-healthcare.jpg',
    readTime: '9 min read'
  },
  {
    id: 'ai-sustainability-transformation-2026',
    title: 'Green AI Sustainability Initiative',
    excerpt: 'A global energy company achieved carbon neutrality through AI-powered sustainability solutions.',
    industry: 'Energy',
    results: ['100% Carbon Neutral', '60% Energy Efficiency', '80% Waste Reduction'],
    image: '/images/sustainability-ai.jpg',
    readTime: '5 min read'
  },
  {
    id: 'ai-quantum-optimization-manufacturing-2026',
    title: 'Quantum AI Manufacturing Optimization',
    excerpt: 'Quantum-enhanced AI optimization reduced production costs by 35% while improving quality.',
    industry: 'Advanced Manufacturing',
    results: ['35% Cost Reduction', '45% Quality Improvement', '55% Speed Increase'],
    image: '/images/quantum-manufacturing.jpg',
    readTime: '10 min read'
  }
];

const industries = ['All', 'Manufacturing', 'Financial Services', 'Healthcare', 'Energy', 'Automotive', 'Advanced Manufacturing'];

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
                key={industry}
                className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
              >
                {industry}
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
              <span className="text-gray-600 text-sm">{caseStudies[0].readTime}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudies[0].title}
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {caseStudies[0].excerpt}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {caseStudies[0].results.map((result, index) => (
                <span key={index} className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  {result}
                </span>
              ))}
            </div>
            <Link
              href={`/case-studies/${caseStudies[0].id}`}
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Read Full Case Study
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
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
              <article key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">{study.industry}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-sm text-green-600 font-medium">
                        ✓ {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Success Story</span>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Read More →
                    </Link>
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
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Solutions
            </Link>
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