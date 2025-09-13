import React from 'react';
import { Link } from 'react-router-dom';

const QuantumComputingCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "Fortune 500 Financial Services",
      industry: "Financial Services",
      challenge: "Complex portfolio optimization taking weeks to solve",
      solution: "Quantum-AI Fusion Platform",
      results: {
        roi: "8000%",
        timeReduction: "99.9%",
        accuracy: "99.7%",
        costSavings: "$50M annually"
      },
      testimonial: "Quantum computing transformed our portfolio optimization from weeks to seconds, delivering unprecedented accuracy and massive cost savings.",
      author: "Sarah Chen, CTO",
      image: "/fortune-500-financial.jpg",
      featured: true
    },
    {
      id: 2,
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Supply chain optimization across 50+ countries",
      solution: "Quantum Supply Chain Optimization",
      results: {
        roi: "3500%",
        timeReduction: "95%",
        accuracy: "96.5%",
        costSavings: "$30M annually"
      },
      testimonial: "Our global supply chain optimization went from impossible to optimal in real-time, reducing costs by $30M annually.",
      author: "Michael Rodriguez, VP Operations",
      image: "/global-manufacturing.jpg",
      featured: true
    },
    {
      id: 3,
      company: "Healthcare Innovation Inc",
      industry: "Healthcare",
      challenge: "Drug discovery and molecular simulation",
      solution: "Quantum Machine Learning Suite",
      results: {
        roi: "3000%",
        timeReduction: "90%",
        accuracy: "98.5%",
        costSavings: "$20M annually"
      },
      testimonial: "Quantum machine learning accelerated our drug discovery process by 10x, bringing life-saving treatments to market faster.",
      author: "Dr. Emily Watson, Chief Scientist",
      image: "/healthcare-innovation.jpg",
      featured: false
    },
    {
      id: 4,
      company: "Tech Startup Unicorn",
      industry: "Technology",
      challenge: "Real-time fraud detection at scale",
      solution: "Quantum Security Framework",
      results: {
        roi: "2500%",
        timeReduction: "85%",
        accuracy: "99.99%",
        costSavings: "$15M annually"
      },
      testimonial: "Quantum security gave us unbreakable fraud detection, protecting millions of users with unprecedented accuracy.",
      author: "Alex Kim, Security Director",
      image: "/tech-startup.jpg",
      featured: false
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-lg font-bold mb-6">
            🏆 QUANTUM COMPUTING SUCCESS STORIES
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
            Proven Quantum Results
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how leading companies are achieving unprecedented success with our quantum computing solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                study.featured ? 'ring-4 ring-indigo-100 border-2 border-indigo-200' : ''
              }`}
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-t-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {study.industry === 'Financial Services' ? '💰' :
                     study.industry === 'Manufacturing' ? '🏭' :
                     study.industry === 'Healthcare' ? '🏥' :
                     '💻'}
                  </div>
                </div>
                {study.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {study.company}
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-4">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                    <div className="text-sm text-green-800">ROI</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{study.results.timeReduction}</div>
                    <div className="text-sm text-blue-800">Time Reduction</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{study.results.accuracy}</div>
                    <div className="text-sm text-purple-800">Accuracy</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-orange-600">{study.results.costSavings}</div>
                    <div className="text-sm text-orange-800">Cost Savings</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                      {study.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">{study.author}</div>
                      <div className="text-sm text-gray-600">{study.company}</div>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/case-studies/quantum-${study.id}`}
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Join these successful companies and transform your business with quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/quantum-computing-consultation"
              className="bg-white text-indigo-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Quantum Journey
            </Link>
            <Link
              to="/quantum-computing-case-studies"
              className="bg-white/20 text-white px-12 py-5 rounded-full font-bold text-xl border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingCaseStudies;