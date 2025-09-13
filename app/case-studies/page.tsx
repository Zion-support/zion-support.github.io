import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { 
  ChartBarIcon, 
  BuildingOfficeIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered E-commerce Transformation",
      company: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Manual inventory management causing 30% stockouts and 25% overstock",
      solution: "Implemented AI-driven demand forecasting and automated restocking system",
      results: {
        revenue: "+45%",
        efficiency: "+60%",
        cost: "-35%",
        timeframe: "6 months"
      },
      image: "/api/placeholder/600/400",
      featured: true,
      rating: 4.9,
      views: 12500
    },
    {
      id: 2,
      title: "Quantum-Enhanced Financial Modeling",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Complex risk calculations taking 8+ hours to complete",
      solution: "Deployed quantum computing algorithms for real-time risk assessment",
      results: {
        revenue: "+120%",
        efficiency: "+95%",
        cost: "-50%",
        timeframe: "4 months"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      rating: 4.8,
      views: 8900
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
      featured: false,
      rating: 4.9,
      views: 15600
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
      featured: false,
      rating: 4.7,
      views: 9800
    },
    {
      id: 5,
      title: "Micro SaaS Success Story",
      company: "StartupFlow",
      industry: "SaaS",
      challenge: "Manual project management causing team inefficiencies",
      solution: "Built custom micro SaaS solution for project automation",
      results: {
        revenue: "+200%",
        efficiency: "+90%",
        cost: "-25%",
        timeframe: "5 months"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      rating: 4.8,
      views: 11200
    },
    {
      id: 6,
      title: "AI-Powered Customer Service",
      company: "ServicePro",
      industry: "Customer Service",
      challenge: "High customer service costs and long response times",
      solution: "Implemented AI chatbot and automated ticket routing system",
      results: {
        revenue: "+55%",
        efficiency: "+75%",
        cost: "-45%",
        timeframe: "4 months"
      },
      image: "/api/placeholder/600/400",
      featured: false,
      rating: 4.6,
      views: 7600
    }
  ];

  const industries = [
    "All Industries",
    "E-commerce",
    "Financial Services",
    "Healthcare",
    "Technology",
    "SaaS",
    "Customer Service"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementation examples from our clients across various industries."
        keywords="case studies, success stories, AI implementation, business transformation, client results"
        url="/case-studies"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how our clients achieved remarkable transformations using 
              cutting-edge AI and technology solutions.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    industry === "All Industries"
                      ? "bg-white text-blue-600"
                      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Case Study
          </h2>
          
          {(() => {
            const featured = caseStudies.find(cs => cs.featured);
            return featured ? (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
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
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <StarIcon className="w-5 h-5 text-yellow-400" />
                        <span className="font-bold">{featured.rating}</span>
                        <span className="text-sm opacity-90">({featured.views.toLocaleString()} views)</span>
                      </div>
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
      </section>

      {/* Other Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            All Case Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
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
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    {caseStudy.rating}
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

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <EyeIcon className="w-4 h-4" />
                      {caseStudy.views.toLocaleString()} views
                    </div>
                    <div className="text-sm text-gray-500">
                      {caseStudy.results.timeframe}
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of companies that have achieved remarkable results with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              <BuildingOfficeIcon className="w-5 h-5" />
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              <ChartBarIcon className="w-5 h-5" />
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;