import React from 'react';
import Link from 'next/link';
ArrowRightTrendingUpUsersDollarSignClockCheckCircleStar

const SuccessStoriesShowcase2026 = () => {
  const successStories = [
    {
      company: "TechCorp Global",
      industry: "Manufacturing",
      challenge: "Manual quality control processes causing 15% defect rate",
      solution: "AI-powered computer vision quality control system",
      results: {
        roi: 350,
        timeSaved: 80,
        costReduction: 45,
        accuracy: 99.2
      },
      testimonial: "The AI system transformed our quality control. We went from 15% defects to less than 1% in just 3 months.",
      author: "Sarah ChenCTO",
      logo: "🏭"
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual loan processing taking 5-7 days per application",
      solution: "Automated AI loan processing and risk assessment",
      results: {
        roi: 280,
        timeSaved: 90,
        costReduction: 60,
        accuracy: 98.5
      },
      testimonial: "We can now process loans in under 2 hours instead of days. Our customer satisfaction has skyrocketed.",
      author: "Michael RodriguezCEO",
      logo: "🏦"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Patient data analysis taking weeksdelaying treatment decisions",
      solution: "AI-powered medical data analysis and diagnosis support",
      results: {
        roi: 420,
        timeSaved: 85,
        costReduction: 35,
        accuracy: 99.7
      },
      testimonial: "Our AI system helps doctors make fastermore accurate diagnoses. We've saved countless lives.",
      author: "Dr. Emily WatsonChief Medical Officer",
      logo: "🏥"
    },
    {
      company: "RetailMax Chain",
      industry: "Retail",
      challenge: "Inventory management causing stockouts and overstock issues",
      solution: "Predictive AI inventory management system",
      results: {
        roi: 310,
        timeSaved: 70,
        costReduction: 50,
        accuracy: 97.8
      },
      testimonial: "Our inventory is now perfectly optimized. We've eliminated stockouts and reduced waste by 50%.",
      author: "David KimOperations Director",
      logo: "🛍️"
    }
  ];

  const overallStats = [
    { label: "Average ROI"value: "340%"icon: TrendingUp },
    { label: "Time Saved"value: "81%"icon: Clock },
    { label: "Cost Reduction"value: "48%"icon: DollarSign },
    { label: "Client Satisfaction"value: "98%"icon: Star }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real businessesreal results. Discover how companies across industries 
            achieved remarkable transformations with our AI solutions.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {overallStats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {successStories.map((storyindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{story.logo}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{story.company}</h3>
                  <p className="text-green-400 font-semibold">{story.industry}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                <p className="text-gray-300 mb-4">{story.challenge}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                <p className="text-gray-300 mb-4">{story.solution}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-xl">{story.results.roi}%</div>
                  <div className="text-green-300 text-sm">ROI</div>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3">
                  <div className="text-blue-400 font-bold text-xl">{story.results.timeSaved}%</div>
                  <div className="text-blue-300 text-sm">Time Saved</div>
                </div>
                <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-3">
                  <div className="text-purple-400 font-bold text-xl">{story.results.costReduction}%</div>
                  <div className="text-purple-300 text-sm">Cost Reduction</div>
                </div>
                <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-3">
                  <div className="text-yellow-400 font-bold text-xl">{story.results.accuracy}%</div>
                  <div className="text-yellow-300 text-sm">Accuracy</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <p className="text-gray-300 italic mb-2">"{story.testimonial}"</p>
                <p className="text-white font-semibold">- {story.author}</p>
              </div>

              <div className="flex items-center text-green-400">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold">Verified Results</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed with our AI solutions. 
            Let us help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesShowcase2026;