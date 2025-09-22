import React from 'react';
import Link from 'next/link';

const SuccessStoriesShowcase: React.FC = () => {
  const stories = [
    {
      company: "Fortune 500 Tech Company",
      industry: "Technology",
      challenge: "Manual data processing causing 40% efficiency loss",
      solution: "AI-powered automation system",
      results: {
        efficiency: "+340%",
        cost: "-60%",
        time: "-75%"
      },
      testimonial: "Zion Tech Group transformed our operations. The AI automation system increased our efficiency by 340% and reduced costs by 60%.",
      author: "Sarah Chen, CTO",
      logo: "🏢"
    },
    {
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Predictive maintenance failures costing $2M annually",
      solution: "Quantum-neural predictive analytics",
      results: {
        efficiency: "+280%",
        cost: "-45%",
        time: "-80%"
      },
      testimonial: "The predictive analytics system prevented equipment failures before they happened, saving us millions annually.",
      author: "Michael Rodriguez, VP Operations",
      logo: "🏭"
    },
    {
      company: "Financial Services Inc",
      industry: "Finance",
      challenge: "Fraud detection accuracy at only 78%",
      solution: "Advanced AI security monitoring",
      results: {
        efficiency: "+420%",
        cost: "-55%",
        time: "-90%"
      },
      testimonial: "Our fraud detection accuracy improved to 99.8% with Zion's AI security system. Game-changing technology.",
      author: "Jennifer Park, Chief Risk Officer",
      logo: "🏦"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading organizations achieved extraordinary results with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{story.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                    <span className="text-sm text-gray-500">{story.industry}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{story.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{story.results.efficiency}</div>
                    <div className="text-xs text-gray-500">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{story.results.cost}</div>
                    <div className="text-xs text-gray-500">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{story.results.time}</div>
                    <div className="text-xs text-gray-500">Time Saved</div>
                  </div>
                </div>

                <blockquote className="bg-white rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                  <p className="text-gray-700 italic text-sm">"{story.testimonial}"</p>
                  <cite className="text-xs text-gray-500 mt-2 block">- {story.author}</cite>
                </blockquote>

                <Link 
                  href="/case-studies"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Success Stories
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase;