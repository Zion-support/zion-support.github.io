import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Success Stories & Case Studies - Zion Tech Group',
  description: 'Real-world success stories of companies achieving extraordinary results with our AI, quantum computing, and technology solutions.',
  keywords: ['case studies', 'success stories', 'AI implementation', 'quantum computing', 'business transformation', 'ROI'],
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
  description: 'Discover how our clients achieved remarkable results with AI, quantum computing, and technology solutions. Real success stories with quantified results.',
  keywords: ['case studies', 'success stories', 'AI implementation', 'ROI results', 'client testimonials'],
};

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "AI Automation in Manufacturing: 340% Efficiency Increase",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      duration: "12 months",
      roi: "340%",
      challenge: "Manual quality control processes with 15% defect rate",
      solution: "AI-powered computer vision system",
      results: [
        "99.2% defect detection accuracy",
        "78% reduction in quality control costs",
        "$2.3M annual savings"
      ],
      featured: true,
      slug: "ai-automation-manufacturing-success"
    },
    {
      title: "Quantum Computing in Financial Services: Portfolio Optimization",
      client: "Investment Bank",
      industry: "Financial Services",
      duration: "8 months",
      roi: "156%",
      challenge: "Portfolio optimization for high-net-worth clients",
      solution: "Quantum portfolio management system",
      results: [
        "156% improvement in portfolio returns",
        "89% reduction in risk exposure",
        "$340M additional client assets"
      ],
      featured: true,
      slug: "quantum-financial-services"
    },
    {
      title: "AI-Powered Healthcare Diagnostics: 89% Error Reduction",
      client: "Regional Medical Center",
      industry: "Healthcare",
      duration: "10 months",
      roi: "245%",
      challenge: "High diagnostic error rates in radiology",
      solution: "AI diagnostic assistance system",
      results: [
        "89% reduction in diagnostic errors",
        "67% faster diagnosis times",
        "45% improvement in patient outcomes"
      ],
      featured: false,
      slug: "ai-healthcare-diagnostics"
    },
    {
      title: "Autonomous Supply Chain Optimization: 45% Cost Reduction",
      client: "Global Logistics Company",
      industry: "Logistics",
      duration: "6 months",
      roi: "280%",
      challenge: "Optimizing delivery routes for 50,000+ packages daily",
      solution: "Quantum routing algorithm",
      results: [
        "34% reduction in fuel costs",
        "28% faster delivery times",
        "$12M annual savings"
      ],
      featured: false,
      slug: "autonomous-supply-chain"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Success Stories & Case Studies - Zion Tech Group"
        description="Real-world success stories of companies achieving extraordinary results with our AI, quantum computing, and technology solutions."
        keywords="case studies, success stories, AI implementation, quantum computing, business transformation, ROI"
        description="Discover how our clients achieved remarkable results with AI, quantum computing, and technology solutions. Real success stories with quantified results."
        keywords="case studies, success stories, AI implementation, ROI results, client testimonials"
        url="/case-studies"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">💼 SUCCESS STORIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real-World Success Stories
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how leading companies are achieving extraordinary results with our AI, quantum computing, and technology solutions.
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📊 SUCCESS STORIES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proven Results
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    {study.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-600">Our most impactful client transformations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <p className="text-gray-600">{study.client} • {study.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">{study.roi}</div>
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
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Duration: {study.duration}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-lg text-gray-600 mb-2">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                      <span className="font-semibold">Solution:</span> {study.solution}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">395%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
      {/* All Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-600">Complete collection of our client success stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{study.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {study.duration}
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Quantified results across all industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2.3B</div>
              <div className="text-gray-600">Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement these revolutionary technologies and achieve extraordinary results for your business.
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of companies that have transformed their operations with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;