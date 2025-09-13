import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ChartBarIcon, BuildingOfficeIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const CaseStudyShowcase2025 = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Manual inventory management causing 30% stockouts",
      solution: "Implemented AI-driven demand forecasting and automated restocking",
      results: {
        revenue: "+45%",
        efficiency: "+60%",
        cost: "-35%",
        timeframe: "6 months"
      },
      image: "/api/placeholder/600/400",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Enhanced Financial Modeling",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Complex risk calculations taking 8+ hours",
      solution: "Deployed quantum computing algorithms for real-time risk assessment",
      results: {
        revenue: "+120%",
        efficiency: "+95%",
        cost: "-50%",
        timeframe: "4 months"
      },
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 3,
      title: "Neural Interface Healthcare Platform",
      company: "MedTech Pioneers",
      industry: "Healthcare",
      challenge: "Patient monitoring requiring 24/7 staff presence",
      solution: "Developed AI-powered neural interface for continuous patient monitoring",
      results: {
        revenue: "+80%",
        efficiency: "+70%",
        cost: "-40%",
        timeframe: "8 months"
      },
      image: "/api/placeholder/600/400",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization",
      company: "CloudScale Enterprises",
      industry: "Technology",
      challenge: "High cloud costs and performance bottlenecks",
      solution: "Implemented advanced cloud optimization and auto-scaling solutions",
      results: {
        revenue: "+35%",
        efficiency: "+85%",
        cost: "-60%",
        timeframe: "3 months"
      },
      image: "/api/placeholder/600/400",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ChartBarIcon className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our clients achieved remarkable transformations using cutting-edge AI and technology solutions.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          {(() => {
            const featured = caseStudies.find(cs => cs.featured);
            return featured ? (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured Case Study
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-600 font-medium">{featured.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{featured.industry}</span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {featured.title}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{featured.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{featured.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {featured.results.revenue}
                        </div>
                        <div className="text-sm text-gray-600">Revenue Increase</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {featured.results.efficiency}
                        </div>
                        <div className="text-sm text-gray-600">Efficiency Gain</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {featured.results.cost}
                        </div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {featured.results.timeframe}
                        </div>
                        <div className="text-sm text-gray-600">Time to Results</div>
                      </div>
                    </div>

                    <Link
                      href={`/case-studies/${featured.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                      Read Full Case Study
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : null;
          })()}
        </div>

        {/* Other Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{caseStudy.company}</div>
                  <div className="text-xs opacity-90">{caseStudy.industry}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {caseStudy.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {caseStudy.challenge}
                </p>

                {/* Key Results */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {caseStudy.results.revenue}
                    </div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {caseStudy.results.efficiency}
                    </div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {caseStudy.results.cost}
                    </div>
                    <div className="text-xs text-gray-500">Costs</div>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that have achieved remarkable results with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              View All Case Studies
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Start Your Project
              <BuildingOfficeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase2025;