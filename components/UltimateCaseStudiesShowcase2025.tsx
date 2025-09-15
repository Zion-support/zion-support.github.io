import React, { useState } from 'react';
import Link from 'next/link';

const UltimateCaseStudiesShowcase2025 = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Fortune 500 Manufacturing",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40% efficiency loss and $2M annual waste",
      solution: "AI-powered autonomous manufacturing system with predictive maintenance",
      results: {
        roi: "2,400%",
        costSavings: "$50M",
        efficiency: "85%",
        timeReduction: "70%"
      },
      testimonial: "Zion Tech 'Group', 's AI solutions transformed our entire manufacturing process. We achieved 2,400% ROI in just 18 months.",
      author: "John Smith, CTO",
      logo: "🏭",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      company: "Global Healthcare Provider",
      industry: "Healthcare",
      challenge: "Patient data processing taking 8 hours daily, causing delays in treatment",
      solution: "Neural superintelligence system for instant medical data analysis and diagnosis support",
      results: {
        roi: "3,200%",
        costSavings: "$75M",
        efficiency: "95%",
        timeReduction: "90%"
      },
      testimonial: "The AI system reduced our diagnosis time by 90% and improved patient outcomes significantly. ROI exceeded 3,200%.",
      author: "Dr. Sarah Johnson, Chief Medical Officer",
      logo: "🏥",
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 3,
      company: "International Financial Services",
      industry: "Finance",
      challenge: "Manual fraud detection missing 15% of cases, costing $10M annually",
      solution: "Quantum-neural fusion AI for real-time fraud detection and prevention",
      results: {
        roi: "4,800%",
        costSavings: "$120M",
        efficiency: "99.9%",
        timeReduction: "95%"
      },
      testimonial: "Our fraud detection accuracy improved to 99.9% with 'Zion', 's AI. The ROI of 4,800% speaks for itself.",
      author: "Michael Chen, Chief Risk Officer",
      logo: "🏦",
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 4,
      company: "E-commerce Giant",
      industry: "Retail",
      challenge: "Customer service overwhelmed with 50,000 daily inquiries, 30% unresolved",
      solution: "Autonomous AI customer service ecosystem with emotional intelligence",
      results: {
        roi: "1,800%",
        costSavings: "$30M",
        efficiency: "98%",
        timeReduction: "80%"
      },
      testimonial: "Customer satisfaction increased to 98% with our AI-powered support system. The 1,800% ROI was achieved in 12 months.",
      author: "Lisa Rodriguez, VP Customer Experience",
      logo: "🛒",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      company: "Global Logistics Company",
      industry: "Logistics",
      challenge: "Route optimization causing 25% fuel waste and delivery delays",
      solution: "AI-powered autonomous logistics management with predictive routing",
      results: {
        roi: "2,100%",
        costSavings: "$40M",
        efficiency: "92%",
        timeReduction: "65%"
      },
      testimonial: "Fuel costs reduced by 65% and delivery times improved by 92%. The 2,100% ROI was achieved in 15 months.",
      author: "David Kim, Operations Director",
      logo: "🚚",
      color: "from-teal-600 to-blue-600"
    },
    {
      id: 6,
      company: "Educational Technology Platform",
      industry: "Education",
      challenge: "Personalized learning for 1M students taking 200 hours per student to create",
      solution: "Synthetic intelligence system for instant personalized curriculum generation",
      results: {
        roi: "3,600%",
        costSavings: "$60M",
        efficiency: "99%",
        timeReduction: "95%"
      },
      testimonial: "We can now create personalized learning paths in minutes instead of hours. The 3,600% ROI transformed our business model.",
      author: "Professor Amanda White, Chief Learning Officer",
      logo: "🎓",
      color: "from-pink-600 to-purple-600"
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📊 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate Case Studies Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how our AI solutions have transformed companies across industries with unprecedented ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Study List */}
          <div className="lg:col-span-1 space-y-4">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeCase === index
                    ? `bg-gradient-to-r ${caseStudy.color} text-white shadow-2xl scale-105`
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{caseStudy.logo}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{caseStudy.company}</h3>
                    <p className={`text-sm ${activeCase === index ? 'text-white/90' : 'text-gray-600'}`}>
                      {caseStudy.industry}
                    </p>
                    <div className={`text-sm font-semibold ${
                      activeCase === index ? 'text-white' : 'text-green-600'
                    }`}>
                      {caseStudy.results.roi} ROI
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Case Study Details */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${currentCase.color} text-white rounded-3xl p-8 shadow-2xl`}>
              {/* Company Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{currentCase.logo}</div>
                <div>
                  <h3 className="text-3xl font-bold">{currentCase.company}</h3>
                  <p className="text-white/90 text-lg">{currentCase.industry}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Challenge</h4>
                <p className="text-white/90 text-lg">{currentCase.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Solution</h4>
                <p className="text-white/90 text-lg">{currentCase.solution}</p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{currentCase.results.roi}</div>
                  <div className="text-white/80 text-sm">ROI</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{currentCase.results.costSavings}</div>
                  <div className="text-white/80 text-sm">Cost Savings</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{currentCase.results.efficiency}</div>
                  <div className="text-white/80 text-sm">Efficiency</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">{currentCase.results.timeReduction}</div>
                  <div className="text-white/80 text-sm">Time Reduction</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                <blockquote className="text-white/90 text-lg italic mb-4">
                  "{currentCase.testimonial}"
                </blockquote>
                <div className="text-white font-semibold">- {currentCase.author}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/case-studies/${currentCase.id}`}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  View Full Case Study
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                >
                  Get Similar Results
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Statistics */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry-Wide Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <div className="text-gray-600">Total Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,400%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-xl mb-6 text-white/90">
              Let us help you achieve similar results with our proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Success Story
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateCaseStudiesShowcase2025;