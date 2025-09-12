import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export default function QuantumComputingSolutionsShowcase2026() {
  const quantumSolutions = [
    {
      title: "⚛️ Quantum Financial Risk Assessment Platform",
      description: "Revolutionary quantum algorithms for financial risk modeling and portfolio optimization",
      price: "$4,999/month",
      marketPrice: "$8,000-20,000/month",
      features: [
        "Quantum Monte Carlo simulations",
        "Real-time risk assessment",
        "Portfolio optimization algorithms",
        "Market volatility prediction",
        "Quantum machine learning models",
        "Multi-asset correlation analysis"
      ],
      benefits: [
        "Improve risk assessment accuracy by 85%",
        "Reduce portfolio volatility by 40%",
        "Faster calculations by 1000x",
        "Identify hidden market patterns"
      ],
      applications: [
        "Investment banking",
        "Hedge fund management", 
        "Insurance risk modeling",
        "Cryptocurrency trading"
      ]
    },
    {
      title: "🔐 Quantum Cryptography Communication System",
      description: "Unbreakable quantum encryption for ultra-secure communications",
      price: "$6,999/month",
      marketPrice: "$12,000-30,000/month",
      features: [
        "Quantum key distribution (QKD)",
        "Quantum random number generation",
        "Post-quantum cryptography",
        "Quantum secure direct communication",
        "Multi-party quantum protocols",
        "Quantum network infrastructure"
      ],
      benefits: [
        "Unbreakable encryption security",
        "Future-proof against quantum attacks",
        "Real-time secure communication",
        "Meet highest security standards"
      ],
      applications: [
        "Government communications",
        "Financial transactions",
        "Healthcare data transmission",
        "Military communications"
      ]
    },
    {
      title: "🧬 Quantum Drug Discovery Platform",
      description: "Accelerated pharmaceutical research using quantum computing",
      price: "$8,999/month",
      marketPrice: "$15,000-40,000/month",
      features: [
        "Quantum molecular modeling",
        "Drug interaction prediction",
        "Protein folding simulation",
        "Quantum chemistry calculations",
        "Toxicity assessment algorithms",
        "Personalized medicine optimization"
      ],
      benefits: [
        "Accelerate drug discovery by 10x",
        "Reduce development costs by 60%",
        "Improve success rates by 300%",
        "Enable personalized treatments"
      ],
      applications: [
        "Pharmaceutical companies",
        "Biotechnology research",
        "Academic institutions",
        "Clinical trial optimization"
      ]
    },
    {
      title: "🌐 Quantum Supply Chain Optimization",
      description: "Quantum algorithms for complex supply chain optimization",
      price: "$5,499/month",
      marketPrice: "$9,000-25,000/month",
      features: [
        "Quantum optimization algorithms",
        "Multi-objective optimization",
        "Real-time logistics optimization",
        "Demand forecasting",
        "Inventory optimization",
        "Route planning algorithms"
      ],
      benefits: [
        "Reduce logistics costs by 35%",
        "Improve delivery times by 50%",
        "Optimize inventory levels by 45%",
        "Handle complex constraints"
      ],
      applications: [
        "Global manufacturing",
        "Retail supply chains",
        "Food distribution",
        "Healthcare logistics"
      ]
    },
    {
      title: "🔬 Quantum Materials Science Platform",
      description: "Advanced quantum simulations for materials discovery",
      price: "$7,499/month",
      marketPrice: "$12,000-35,000/month",
      features: [
        "Quantum material simulations",
        "Crystal structure optimization",
        "Electronic property calculations",
        "Superconductor modeling",
        "Battery material research",
        "Catalyst optimization"
      ],
      benefits: [
        "Accelerate materials discovery by 20x",
        "Reduce research costs by 70%",
        "Enable breakthrough innovations",
        "Optimize material properties"
      ],
      applications: [
        "Semiconductor industry",
        "Renewable energy research",
        "Aerospace materials",
        "Consumer electronics"
      ]
    },
    {
      title: "🌍 Quantum Climate Modeling System",
      description: "Advanced quantum simulations for climate prediction and analysis",
      price: "$6,499/month",
      marketPrice: "$10,000-28,000/month",
      features: [
        "Quantum climate simulations",
        "Weather pattern prediction",
        "Carbon cycle modeling",
        "Ocean current analysis",
        "Atmospheric chemistry modeling",
        "Climate change impact assessment"
      ],
      benefits: [
        "Improve prediction accuracy by 60%",
        "Faster climate simulations by 500x",
        "Better policy decision support",
        "Enhanced disaster preparedness"
      ],
      applications: [
        "Government agencies",
        "Environmental research",
        "Insurance companies",
        "Agricultural planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <SEO
        title="Quantum Computing Solutions Showcase 2026 - Revolutionary Quantum Technologies"
        description="Explore the future of computing with our quantum solutions. From financial modeling to drug discovery, access cutting-edge quantum computing services with proven results."
        keywords="quantum computing 2026, quantum algorithms, quantum cryptography, quantum optimization, quantum machine learning, quantum simulation"
        url="/quantum-computing-solutions-showcase-2026"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              ⚛️ QUANTUM COMPUTING SOLUTIONS 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Revolutionary
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Quantum Technologies
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-6xl mx-auto leading-relaxed">
              Experience the future of computing with our quantum solutions. From financial modeling 
              to drug discovery, our quantum computing services deliver breakthrough results that 
              were previously impossible with classical computers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
              >
                ⚛️ Explore Quantum Solutions
              </Link>
              <Link
                href="/resources/quantum-computing-master-guide"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-xl font-bold hover:bg-purple-400 hover:text-black transition-all duration-300 text-lg"
              >
                📚 Quantum Master Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Advantage in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our quantum solutions deliver exponential speedups and breakthrough capabilities 
              that transform entire industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Exponential Speedup",
                description: "Up to 1000x faster calculations for complex problems"
              },
              {
                icon: "🔐",
                title: "Unbreakable Security",
                description: "Quantum cryptography provides ultimate security"
              },
              {
                icon: "🧠",
                title: "Breakthrough Insights",
                description: "Discover patterns impossible to find classically"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="text-6xl mb-4">{advantage.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Solutions Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive quantum computing services solve the most complex problems 
              across industries with unprecedented speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-purple-600">{solution.price}</span>
                    <span className="text-lg text-gray-500 line-through">{solution.marketPrice}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Save 60%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      ⚛️ Quantum Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      📈 Quantum Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    🎯 Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/resources/quantum-computing-master-guide"
                    className="flex-1 border-2 border-purple-500 text-purple-600 text-center py-3 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our quantum solutions are built on cutting-edge quantum hardware and software 
              from leading providers in the quantum computing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "IBM Quantum",
                description: "Leading quantum hardware and cloud access",
                features: ["127+ qubit systems", "Quantum cloud platform", "Qiskit framework"]
              },
              {
                name: "Google Quantum AI",
                description: "Advanced quantum processors and algorithms",
                features: ["Sycamore processor", "Cirq framework", "Quantum supremacy"]
              },
              {
                name: "Microsoft Azure Quantum",
                description: "Quantum development platform and tools",
                features: ["Q# programming", "Quantum simulators", "Hardware partnerships"]
              },
              {
                name: "IonQ",
                description: "Trapped ion quantum computers",
                features: ["High fidelity gates", "Scalable architecture", "Cloud access"]
              }
            ].map((provider, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{provider.name}</h3>
                <p className="text-gray-600 mb-4">{provider.description}</p>
                <ul className="space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quantum Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our structured approach ensures successful quantum computing implementation 
              with clear milestones and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                duration: "2-4 weeks",
                title: "Quantum Readiness Assessment",
                description: "Evaluate your current systems and quantum computing readiness"
              },
              {
                phase: "Phase 2",
                duration: "4-8 weeks", 
                title: "Quantum Algorithm Development",
                description: "Design and optimize quantum algorithms for your specific use case"
              },
              {
                phase: "Phase 3",
                duration: "6-12 weeks",
                title: "Quantum Implementation",
                description: "Deploy quantum solutions and integrate with existing systems"
              },
              {
                phase: "Phase 4",
                duration: "Ongoing",
                title: "Quantum Optimization",
                description: "Continuous monitoring, optimization, and scaling of quantum systems"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {phase.duration}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for the Quantum Revolution?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power. 
            Our quantum solutions deliver breakthrough results that transform entire industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              ⚛️ Start Quantum Journey
            </Link>
            <Link
              href="/resources/quantum-computing-master-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
            >
              📚 Download Quantum Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}