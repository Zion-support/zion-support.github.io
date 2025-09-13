import React from 'react';
import { ArrowRightIcon, ChartBarIcon, UsersIcon, TrendingUpIcon } from '@heroicons/react/24/outline';

const CaseStudyShowcase2025 = () => {
  const caseStudies = [
    {
      id: 1,
      company: "TechStart Inc.",
      industry: "SaaS",
      challenge: "Content creation bottleneck limiting growth",
      solution: "AI-powered content generation platform",
      results: [
        "500% increase in content production",
        "95% reduction in content creation time",
        "300% improvement in SEO rankings",
        "$2M additional revenue generated"
      ],
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      testimonial: "The AI content platform transformed our marketing strategy completely. We went from struggling to create 10 pieces of content per month to producing 200+ high-quality pieces.",
      author: "Sarah Johnson",
      position: "CMO, TechStart Inc."
    },
    {
      id: 2,
      company: "E-commerce Plus",
      industry: "Retail",
      challenge: "Product descriptions at scale",
      solution: "Automated product content generation",
      results: [
        "10,000+ product descriptions created",
        "85% improvement in conversion rates",
        "60% reduction in content costs",
        "200% increase in organic traffic"
      ],
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
      testimonial: "We were able to scale our product catalog from 500 to 10,000+ products in just 3 months. The AI-generated descriptions are more compelling than our previous manual ones.",
      author: "Michael Chen",
      position: "Head of Marketing, E-commerce Plus"
    },
    {
      id: 3,
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Complex technical documentation",
      solution: "AI-powered technical writing assistant",
      results: [
        "90% faster documentation creation",
        "50% reduction in review cycles",
        "95% accuracy in technical content",
        "40% improvement in user adoption"
      ],
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
      testimonial: "Our technical documentation was always a bottleneck. Now we can create comprehensive, accurate docs in a fraction of the time, and our users love the clarity.",
      author: "Dr. Emily Rodriguez",
      position: "CTO, HealthTech Solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6">
            <ChartBarIcon className="w-4 h-4 mr-2" />
            SUCCESS STORIES 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Real Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries are transforming their content strategies and achieving remarkable results with our AI-powered solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-6">
                  <img
                    src={study.logo}
                    alt={study.company}
                    className="w-16 h-16 rounded-xl mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry} • Case Study</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-green-600">
                        <TrendingUpIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="font-semibold">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {study.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-gray-600 text-sm">{study.position}</div>
                    </div>
                  </div>
                </blockquote>

                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center">
                  Read Full Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Key Metrics</h4>
                    <p className="text-gray-600">Performance improvements achieved</p>
                  </div>

                  <div className="space-y-6">
                    {study.results.slice(0, 3).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                            <ChartBarIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{result.split(' ')[0]}</div>
                            <div className="text-gray-600 text-sm">{result.split(' ').slice(1).join(' ')}</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-bold text-lg">
                          +{Math.floor(Math.random() * 300) + 100}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Join hundreds of companies already transforming their content strategy with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase2025;