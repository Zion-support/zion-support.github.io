import React from 'react';

export const ClientSuccessStoriesSection = () => {
  const stories = [
    {
      client: "TechStart Inc.",
      industry: "E-commerce",
      challenge: "Struggling with low conversion rates and high cart abandonment",
      solution: "Implemented AI-powered recommendation engine and personalized shopping experience",
      results: ["45% increase in conversion rates", "60% reduction in cart abandonment", "30% improvement in customer lifetime value"],
      icon: "🛒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      client: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Facing increasing cybersecurity threats and compliance requirements",
      solution: "Deployed comprehensive security framework with AI-powered threat detection",
      results: ["99.9% threat prevention rate", "100% compliance achievement", "Zero security breaches in 2 years"],
      icon: "🏦",
      color: "from-green-500 to-emerald-500"
    },
    {
      client: "Global Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain and production processes",
      solution: "Digital transformation with IoT sensors and predictive analytics",
      results: ["35% reduction in operational costs", "50% improvement in production efficiency", "25% faster delivery times"],
      icon: "🏭",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real clients who achieved remarkable results with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{story.icon}</span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30 mb-2">
                  {story.industry}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {story.client}
                </h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge:</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {story.challenge}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution:</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {story.solution}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Results:</h4>
                <div className="space-y-2">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};