import React from 'react';
import Link from 'next/link';

const ComprehensiveCaseStudiesShowcase = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Manufacturing Revolution",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency",
      solution: "AI-powered automation and predictive maintenance",
      results: {
        efficiency: "340% increase in operational efficiency",
        costSavings: "$2.3M annual cost savings",
        downtime: "85% reduction in unplanned downtime",
        roi: "1,200% ROI in first year"
      },
      image: "/images/case-studies/manufacturing-ai.jpg",
      testimonial: "Zion Tech Group transformed our entire operation. The AI solutions delivered results beyond our wildest expectations.",
      author: "Sarah Chen, CTO",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Platform",
      company: "MedTech Innovations",
      industry: "Healthcare",
      challenge: "Manual diagnostic processes causing delays and errors",
      solution: "AI-powered diagnostic platform with 99.7% accuracy",
      results: {
        accuracy: "99.7% diagnostic accuracy",
        speed: "90% faster diagnosis times",
        lives: "15,000+ lives saved annually",
        efficiency: "300% improvement in patient throughput"
      },
      image: "/images/case-studies/healthcare-ai.jpg",
      testimonial: "The AI diagnostic platform revolutionized our patient care. We're seeing unprecedented accuracy and speed.",
      author: "Dr. Michael Rodriguez, Chief Medical Officer",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "FinTech Solutions Inc",
      industry: "Financial Services",
      challenge: "Manual processes causing compliance issues and delays",
      solution: "Comprehensive AI automation suite with real-time compliance monitoring",
      results: {
        compliance: "100% compliance rate",
        processing: "500% faster transaction processing",
        accuracy: "99.9% error reduction",
        savings: "$5.2M in operational savings"
      },
      image: "/images/case-studies/fintech-ai.jpg",
      testimonial: "Zion Tech Group's AI solutions transformed our financial operations. We're now the industry leader in efficiency.",
      author: "Jennifer Walsh, CEO",
      featured: false
    },
    {
      id: 4,
      title: "Retail Personalization Engine",
      company: "E-Commerce Giant",
      industry: "Retail",
      challenge: "Low customer engagement and conversion rates",
      solution: "AI-powered personalization engine with real-time recommendations",
      results: {
        conversion: "280% increase in conversion rates",
        engagement: "450% improvement in customer engagement",
        revenue: "$12M additional annual revenue",
        satisfaction: "95% customer satisfaction score"
      },
      image: "/images/case-studies/retail-ai.jpg",
      testimonial: "The personalization engine completely transformed our customer experience. Revenue has never been higher.",
      author: "David Kim, VP of Marketing",
      featured: false
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      company: "Global Logistics Corp",
      industry: "Logistics",
      challenge: "Inefficient supply chain causing 30% cost overruns",
      solution: "AI-powered supply chain optimization with predictive analytics",
      results: {
        efficiency: "250% improvement in supply chain efficiency",
        costs: "40% reduction in operational costs",
        delivery: "95% on-time delivery rate",
        savings: "$8.7M annual cost savings"
      },
      image: "/images/case-studies/logistics-ai.jpg",
      testimonial: "Zion Tech Group's AI solutions optimized our entire supply chain. We're now the most efficient in the industry.",
      author: "Lisa Thompson, COO",
      featured: false
    },
    {
      id: 6,
      title: "Energy Grid Intelligence",
      company: "Smart Energy Systems",
      industry: "Energy",
      challenge: "Outdated grid infrastructure causing frequent outages",
      solution: "AI-powered smart grid with predictive maintenance and load balancing",
      results: {
        reliability: "99.9% grid reliability",
        efficiency: "200% improvement in energy efficiency",
        outages: "95% reduction in power outages",
        savings: "$15M in infrastructure savings"
      },
      image: "/images/case-studies/energy-ai.jpg",
      testimonial: "The AI-powered smart grid transformed our energy infrastructure. We're now the most reliable provider in the region.",
      author: "Robert Martinez, Chief Engineer",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies across industries have transformed their operations 
            with our AI-powered solutions, achieving unprecedented results and ROI.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 font-medium">{study.company} • {study.industry}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700 mb-4">
                  "{study.testimonial}"
                </blockquote>
                <cite className="text-sm text-gray-600">— {study.author}</cite>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.filter(study => !study.featured).map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-white text-sm opacity-90">{study.company}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                  <div className="space-y-2">
                    {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-sm font-semibold text-purple-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-sm italic text-gray-600 mb-4">
                  "{study.testimonial.substring(0, 100)}..."
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <cite className="text-xs text-gray-500">— {study.author}</cite>
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  >
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already achieved remarkable results with our AI solutions. 
              Let's create your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveCaseStudiesShowcase;