import React from 'react';
import Link from 'next/link';

const ComprehensiveCaseStudiesShowcase = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy system integration and process automation",
      solution: "AI-powered automation platform with real-time analytics",
      results: {
        efficiency: "340% increase in operational efficiency",
        cost: "$2.3M annual cost savings",
        time: "75% reduction in processing time",
        roi: "1,200% ROI in first year"
      },
      image: "/images/case-studies/manufacturing-ai.jpg",
      tags: ["AI Automation", "Process Optimization", "ROI", "Enterprise"]
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Platform",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes and patient data management",
      solution: "Neural network-powered diagnostic assistant with predictive analytics",
      results: {
        efficiency: "280% faster diagnosis",
        cost: "$1.8M in operational savings",
        time: "90% reduction in diagnostic time",
        roi: "850% ROI within 8 months"
      },
      image: "/images/case-studies/healthcare-ai.jpg",
      tags: ["AI Diagnostics", "Healthcare", "Neural Networks", "Predictive Analytics"]
    },
    {
      id: 3,
      title: "Financial Services AI Transformation",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Fraud detection and risk assessment automation",
      solution: "Advanced AI fraud detection system with real-time monitoring",
      results: {
        efficiency: "420% improvement in fraud detection",
        cost: "$3.1M prevented losses",
        time: "95% faster risk assessment",
        roi: "1,500% ROI in 6 months"
      },
      image: "/images/case-studies/fintech-ai.jpg",
      tags: ["AI Security", "Fraud Detection", "Risk Management", "Real-time Analytics"]
    },
    {
      id: 4,
      title: "E-commerce Personalization Engine",
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Customer personalization and recommendation systems",
      solution: "AI-powered recommendation engine with behavioral analytics",
      results: {
        efficiency: "380% increase in conversion rates",
        cost: "$2.7M additional revenue",
        time: "85% improvement in customer engagement",
        roi: "1,100% ROI in first year"
      },
      image: "/images/case-studies/ecommerce-ai.jpg",
      tags: ["AI Personalization", "E-commerce", "Recommendation Engine", "Customer Analytics"]
    },
    {
      id: 5,
      title: "Supply Chain Optimization AI",
      company: "LogiTech Global",
      industry: "Logistics",
      challenge: "Supply chain visibility and optimization",
      solution: "AI-driven supply chain management with predictive logistics",
      results: {
        efficiency: "320% improvement in delivery accuracy",
        cost: "$2.1M in logistics savings",
        time: "70% reduction in delivery time",
        roi: "950% ROI in 10 months"
      },
      image: "/images/case-studies/logistics-ai.jpg",
      tags: ["Supply Chain AI", "Logistics", "Predictive Analytics", "Optimization"]
    },
    {
      id: 6,
      title: "Real Estate AI Platform",
      company: "PropTech Solutions",
      industry: "Real Estate",
      challenge: "Property valuation and market analysis automation",
      solution: "AI-powered property valuation and market prediction system",
      results: {
        efficiency: "450% faster property valuations",
        cost: "$1.9M in operational savings",
        time: "80% reduction in analysis time",
        roi: "1,300% ROI in 7 months"
      },
      image: "/images/case-studies/realestate-ai.jpg",
      tags: ["AI Valuation", "Real Estate", "Market Analysis", "Predictive Modeling"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🎯 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies transformed their operations and achieved 
            extraordinary results with our AI solutions. From Fortune 500 enterprises 
            to innovative startups.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium opacity-90">{study.industry}</div>
                  <div className="text-lg font-bold">{study.company}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">Case Study</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Results:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Efficiency:</span>
                      <span className="text-sm font-semibold text-green-600">{study.results.efficiency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cost Savings:</span>
                      <span className="text-sm font-semibold text-green-600">{study.results.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Time Reduction:</span>
                      <span className="text-sm font-semibold text-green-600">{study.results.time}</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-sm font-semibold text-gray-700">ROI:</span>
                      <span className="text-sm font-bold text-purple-600">{study.results.roi}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI solutions. 
            Let's discuss how we can help you achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveCaseStudiesShowcase;