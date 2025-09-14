import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Success Stories & Case Studies - Zion Tech Group',
  description: 'Discover how our clients achieved remarkable results with AI, quantum computing, and technology solutions. Real success stories with quantified results.',
  keywords: ['case studies', 'success stories', 'AI implementation', 'ROI results', 'client testimonials'],
};

const caseStudies = [
  {
    title: "Fortune 500 AI Transformation: $2.3B Revenue Increase",
    client: "Global Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "Digital Transformation",
    solution: "AI-Powered Enterprise Systems",
    results: "$2.3B Revenue Increase, 45% Cost Reduction",
    featured: true,
    slug: "fortune-500-ai-transformation",
    metrics: {
      revenue: "$2.3B",
      costReduction: "45%",
      roi: "340%",
      efficiency: "60%"
    }
  },
  {
    title: "Quantum Computing Logistics Optimization: 40% Cost Reduction",
    client: "Global Shipping Corporation",
    industry: "Logistics",
    challenge: "Route Optimization",
    solution: "Quantum Computing Algorithms",
    results: "40% Cost Reduction, 60% Faster Delivery",
    featured: true,
    slug: "quantum-computing-logistics-optimization",
    metrics: {
      costReduction: "40%",
      deliverySpeed: "60%",
      roi: "450%",
      fuelSavings: "$800M"
    }
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Success Stories & Case Studies - Zion Tech Group"
        description="Discover how our clients achieved remarkable results with AI, quantum computing, and technology solutions. Real success stories with quantified results."
        keywords="case studies, success stories, AI implementation, ROI results, client testimonials"
        url="/case-studies"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results, Real Impact
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              See how our clients achieved remarkable transformations with AI, quantum computing, 
              and cutting-edge technology solutions. Real results, real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our clients are transforming their businesses and achieving remarkable results with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600">{study.client} • {study.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{study.metrics.roi}</div>
                      <div className="text-sm text-gray-500">ROI</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <p className="text-gray-600">{study.results}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Industry: {study.industry}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions deliver measurable, transformative results for businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$5.1B+</div>
              <div className="text-gray-600">Total Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.7%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}