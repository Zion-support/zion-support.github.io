import React from 'react';

const SuccessStoriesShowcase2026: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual processes causing 40% efficiency loss and high operational costs",
      solution: "Implemented autonomous AI agents for end-to-end process automation",
      results: {
        efficiency: "+340%",
        costReduction: "-45%",
        timeToMarket: "-60%",
        roi: "450%"
      },
      image: "🏭",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Powered Financial Optimization",
      company: "Investment Bank International",
      industry: "Finance",
      challenge: "Complex portfolio optimization taking days to complete",
      solution: "Deployed quantum AI computing platform for real-time optimization",
      results: {
        processingTime: "-95%",
        accuracy: "+25%",
        revenue: "+$50M",
        roi: "320%"
      },
      image: "💰",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Healthcare Breakthrough",
      company: "Advanced Medical Systems",
      industry: "Healthcare",
      challenge: "Limited mobility assistance for patients with neurological conditions",
      solution: "Developed brain-computer interface system for enhanced patient care",
      results: {
        patientOutcomes: "+80%",
        treatmentTime: "-50%",
        accuracy: "+90%",
        satisfaction: "98%"
      },
      image: "🏥",
      featured: false
    },
    {
      id: 4,
      title: "Autonomous Supply Chain Revolution",
      company: "Global Logistics Network",
      industry: "Logistics",
      challenge: "Supply chain disruptions causing $100M+ annual losses",
      solution: "Implemented autonomous AI system for predictive logistics management",
      results: {
        disruptions: "-85%",
        costs: "-35%",
        deliveryTime: "-40%",
        customerSatisfaction: "+60%"
      },
      image: "🚚",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Intelligence Research Platform",
      company: "Tech Innovation Lab",
      industry: "Research",
      challenge: "Research discovery process too slow for competitive advantage",
      solution: "Deployed synthetic intelligence platform for accelerated research",
      results: {
        discoverySpeed: "+200%",
        accuracy: "+75%",
        patents: "+150%",
        roi: "280%"
      },
      image: "🔬",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable AI Energy Optimization",
      company: "Green Energy Solutions",
      industry: "Energy",
      challenge: "Energy consumption optimization across multiple facilities",
      solution: "Implemented sustainable AI systems for energy management",
      results: {
        energySavings: "-40%",
        carbonFootprint: "-55%",
        costs: "-30%",
        efficiency: "+65%"
      },
      image: "🌱",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading organizations are transforming their operations with our cutting-edge technology solutions.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.filter(study => study.featured).map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-6xl">{study.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-500">{study.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                <p className="text-gray-600">{study.solution}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(study.results).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <a 
                href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Read Full Case Study →
              </a>
            </div>
          ))}
        </div>

        {/* All Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.filter(study => !study.featured).map((study) => (
            <div key={study.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
              <div className="text-4xl mb-4">{study.image}</div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {study.challenge.substring(0, 100)}...
              </p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Object.entries(study.results).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-600">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              <a 
                href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="text-purple-600 font-semibold hover:text-purple-700 text-sm"
              >
                Read Case Study →
              </a>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across Industries</h3>
            <p className="text-lg text-gray-600">Our solutions deliver measurable impact across diverse sectors</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$2B+</div>
              <div className="text-gray-600">Client Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join the ranks of successful organizations that have revolutionized their operations with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/case-studies"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Case Studies
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2026;