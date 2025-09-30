import React from 'react';
import Link from 'next/link';

const EnterpriseSuccessStories2026 = () => {
  const successStories = [
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      logo: "🏭",
      challenge: "Complex supply chain optimization with 50+ suppliers",
      solution: "AI-powered supply chain orchestration platform",
      results: {
        costReduction: "65%",
        efficiencyGain: "90%",
        savings: "$15M annually",
        timeline: "6 months"
      },
      testimonial: "Zion Tech Group's AI solution transformed our entire supply chain. We achieved 65% cost reduction and $15M in annual savings within just 6 months.",
      author: "Sarah Chen, CTO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "FinTech Innovations Ltd",
      industry: "Financial Services",
      logo: "💳",
      challenge: "Manual fraud detection causing 15% false positives",
      solution: "AI-powered fraud detection and risk assessment",
      results: {
        costReduction: "80%",
        efficiencyGain: "95%",
        savings: "$8M annually",
        timeline: "4 months"
      },
      testimonial: "The AI fraud detection system reduced false positives by 95% while catching 99.7% of actual fraud attempts. Our operational costs dropped by 80%.",
      author: "Michael Rodriguez, Head of Security",
      color: "from-green-500 to-teal-500"
    },
    {
      company: "HealthTech Solutions Inc",
      industry: "Healthcare",
      logo: "🏥",
      challenge: "Patient data processing taking 40 hours per week",
      solution: "AI-powered medical data analytics and automation",
      results: {
        costReduction: "75%",
        efficiencyGain: "85%",
        savings: "$12M annually",
        timeline: "8 months"
      },
      testimonial: "Our patient data processing time went from 40 hours to 6 hours per week. The AI system improved accuracy by 85% and saved us $12M annually.",
      author: "Dr. Emily Watson, Chief Medical Officer",
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "RetailMax Corporation",
      industry: "Retail & E-commerce",
      logo: "🛒",
      challenge: "Inventory management causing 30% stockouts",
      solution: "AI-driven demand forecasting and inventory optimization",
      results: {
        costReduction: "70%",
        efficiencyGain: "88%",
        savings: "$20M annually",
        timeline: "5 months"
      },
      testimonial: "AI-powered inventory management reduced stockouts by 88% and increased revenue by 25%. We saved $20M in operational costs.",
      author: "David Kim, VP of Operations",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Enterprise Success Stories 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {' '}Real Enterprises
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how leading enterprises across industries are achieving unprecedented success 
            with our AI-powered solutions. Join the ranks of companies transforming their operations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {story.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                  <div className="text-sm text-gray-500">{story.industry}</div>
                </div>
              </div>
              
              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>
              </div>
              
              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{story.results.costReduction}</div>
                  <div className="text-xs text-gray-600">Cost Reduction</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{story.results.efficiencyGain}</div>
                  <div className="text-xs text-gray-600">Efficiency Gain</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{story.results.savings}</div>
                  <div className="text-xs text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{story.results.timeline}</div>
                  <div className="text-xs text-gray-600">Implementation</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic mb-3">"{story.testimonial}"</p>
                <div className="text-sm font-semibold text-gray-900">— {story.author}</div>
              </div>
              
              <Link
                href={`/case-studies/${story.company.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline"
              >
                Read Full Case Study →
              </Link>
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Join 500+ Enterprises Already Transforming with AI
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5B+</div>
              <div className="text-blue-100">Total Savings Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-blue-100">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Success Story
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSuccessStories2026;