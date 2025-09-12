import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

const QuantumComputingSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Quantum Financial Risk Assessment & Portfolio Optimization",
      price: "$3,500/month",
      marketPrice: "$5,000-12,000/month",
      description: "Improve risk assessment accuracy by 85% and reduce portfolio volatility by 30% with quantum algorithms.",
      features: [
        "Quantum risk modeling algorithms",
        "Real-time portfolio optimization",
        "Advanced market analysis",
        "Multi-dimensional risk assessment"
      ],
      icon: "💰",
      category: "Finance"
    },
    {
      title: "Quantum Cryptography Communication Platform",
      price: "$4,500/month",
      marketPrice: "$6,000-15,000/month",
      description: "Unbreakable encryption security with quantum key distribution and future-proof communication.",
      features: [
        "Quantum key distribution (QKD)",
        "Unbreakable encryption protocols",
        "Real-time secure communication",
        "Future-proof against quantum attacks"
      ],
      icon: "🔐",
      category: "Security"
    },
    {
      title: "Quantum Machine Learning Drug Discovery Platform",
      price: "$6,000/month",
      marketPrice: "$8,000-25,000/month",
      description: "Accelerate drug discovery by 10x and reduce development costs by 60% with quantum ML.",
      features: [
        "Quantum molecular modeling",
        "Drug interaction prediction",
        "Toxicity assessment algorithms",
        "Accelerated compound screening"
      ],
      icon: "🧬",
      category: "Healthcare"
    },
    {
      title: "Quantum AI Research Collaboration & Development Platform",
      price: "$2,800/month",
      marketPrice: "$3,500-9,500/month",
      description: "Accelerate research breakthroughs and foster industry collaboration with quantum computing.",
      features: [
        "Collaborative research tools",
        "Quantum algorithm development",
        "AI model training acceleration",
        "Multi-institution collaboration"
      ],
      icon: "🔬",
      category: "Research"
    },
    {
      title: "Quantum Optimization for Supply Chain Management",
      price: "$2,200/month",
      marketPrice: "$3,000-8,000/month",
      description: "Optimize complex supply chains with quantum algorithms for maximum efficiency and cost reduction.",
      features: [
        "Multi-variable optimization",
        "Route optimization algorithms",
        "Inventory management",
        "Demand forecasting"
      ],
      icon: "📦",
      category: "Logistics"
    },
    {
      title: "Quantum Computing as a Service (QCaaS)",
      price: "$1,500/month",
      marketPrice: "$2,000-5,000/month",
      description: "Access quantum computing power without the infrastructure investment through our cloud platform.",
      features: [
        "Cloud-based quantum access",
        "Multiple quantum algorithms",
        "Scalable computing power",
        "Expert quantum consulting"
      ],
      icon: "☁️",
      category: "Cloud"
    }
  ];

  const benefits = [
    {
      title: "Exponential Speed Improvements",
      description: "Solve complex problems that would take classical computers thousands of years in minutes.",
      icon: "⚡"
    },
    {
      title: "Future-Proof Security",
      description: "Quantum-resistant cryptography protects your data from future quantum attacks.",
      icon: "🛡️"
    },
    {
      title: "Revolutionary Insights",
      description: "Discover patterns and solutions impossible to find with classical computing.",
      icon: "💡"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with cutting-edge quantum technology solutions.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <SEO
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Revolutionary quantum computing solutions for finance, healthcare, security, and research. Unlock exponential computing power and future-proof your business."
        keywords="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum optimization, QCaaS"
        url="/quantum-computing-solutions"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚛️ QUANTUM REVOLUTION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Quantum Computing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Enter the quantum realm and unlock exponential computing power. Our quantum solutions 
            solve problems that are impossible for classical computers, giving you unprecedented competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Quantum Solutions
            </Link>
            <Link
              href="/resources/quantum-computing-guide"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              Download Quantum Guide
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{solution.icon}</div>
                <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                  {solution.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-green-600">{solution.price}</span>
                <span className="text-sm text-gray-500 line-through">{solution.marketPrice}</span>
              </div>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">⚛️</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Quantum Access
              </Link>
            </div>
          ))}
        </div>

        {/* Technology Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Quantum Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Quantum Algorithms</h3>
              <p className="text-gray-600">Custom quantum algorithms optimized for your specific use cases and industry requirements.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Cloud Platform</h3>
              <p className="text-gray-600">Access quantum computing power through our secure, scalable cloud infrastructure.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Quantum AI Integration</h3>
              <p className="text-gray-600">Combine quantum computing with AI for unprecedented problem-solving capabilities.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Quantum Revolution?</h2>
          <p className="text-lg opacity-90 mb-6">
            Be among the first to harness the power of quantum computing. Schedule a consultation 
            to explore how quantum solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Schedule Quantum Consultation
            </Link>
            <Link
              href="/resources/quantum-computing-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingSolutions;