import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Quantum Computing Services - Revolutionary Quantum AI Solutions',
  description: 'Transform your business with quantum AI computing. 10,000x faster processing, quantum machine learning, and breakthrough optimization solutions.',
  keywords: 'quantum AI services, quantum computing, quantum machine learning, quantum optimization, quantum AI solutions',
};

export default function AIQuantumComputingServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Quantum Computing Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Harness the power of quantum computing to solve complex problems that are impossible for classical computers. 
          Achieve 10,000x speed improvements with quantum AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
          >
            Get Started Today
          </Link>
          <Link
            href="/blog/ai-quantum-supremacy-2026"
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Quantum AI Capabilities
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Machine Learning</h3>
            <p className="text-gray-600 mb-4">
              Leverage quantum algorithms for machine learning tasks with exponential speedups 
              and enhanced pattern recognition capabilities.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 10,000x faster training</li>
              <li>• Quantum neural networks</li>
              <li>• Enhanced optimization</li>
              <li>• Pattern recognition</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Optimization</h3>
            <p className="text-gray-600 mb-4">
              Solve complex optimization problems in seconds that would take classical 
              computers years to complete.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Portfolio optimization</li>
              <li>• Supply chain optimization</li>
              <li>• Resource allocation</li>
              <li>• Scheduling problems</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
            <p className="text-gray-600 mb-4">
              Unbreakable security using quantum principles. Protect your data with 
              quantum key distribution and quantum-resistant algorithms.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Quantum key distribution</li>
              <li>• Quantum-resistant encryption</li>
              <li>• Secure communication</li>
              <li>• Future-proof security</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Simulation</h3>
            <p className="text-gray-600 mb-4">
              Model complex molecular interactions and quantum systems with unprecedented 
              accuracy and speed.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Molecular simulation</li>
              <li>• Drug discovery</li>
              <li>• Materials science</li>
              <li>• Chemical reactions</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Search</h3>
            <p className="text-gray-600 mb-4">
              Search through massive datasets with quantum speedup algorithms, 
              finding solutions in exponentially fewer steps.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Grover's algorithm</li>
              <li>• Database search</li>
              <li>• Pattern matching</li>
              <li>• Data mining</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Cloud</h3>
            <p className="text-gray-600 mb-4">
              Access quantum computing power through our cloud platform. 
              No need for expensive hardware investments.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cloud-based access</li>
              <li>• Pay-per-use pricing</li>
              <li>• Scalable resources</li>
              <li>• Global availability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Industry Applications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💊 Pharmaceuticals</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Drug Discovery:</strong> Accelerate molecular design and testing</li>
              <li>• <strong>Protein Folding:</strong> Predict complex protein structures</li>
              <li>• <strong>Clinical Trials:</strong> Optimize trial design and patient selection</li>
              <li>• <strong>Personalized Medicine:</strong> Custom treatment optimization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Finance</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Portfolio Optimization:</strong> Maximize returns with quantum algorithms</li>
              <li>• <strong>Risk Assessment:</strong> Advanced risk modeling and prediction</li>
              <li>• <strong>Algorithmic Trading:</strong> High-frequency trading optimization</li>
              <li>• <strong>Fraud Detection:</strong> Quantum-enhanced security systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🏭 Manufacturing</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Supply Chain:</strong> Optimize complex logistics networks</li>
              <li>• <strong>Quality Control:</strong> Advanced defect detection algorithms</li>
              <li>• <strong>Process Optimization:</strong> Maximize efficiency and minimize waste</li>
              <li>• <strong>Predictive Maintenance:</strong> Prevent equipment failures</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Climate</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• <strong>Climate Modeling:</strong> Accurate weather and climate prediction</li>
              <li>• <strong>Carbon Capture:</strong> Optimize carbon sequestration strategies</li>
              <li>• <strong>Renewable Energy:</strong> Grid optimization and energy storage</li>
              <li>• <strong>Environmental Monitoring:</strong> Real-time environmental data analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Quantum Performance Advantages
        </h2>
        
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000x</div>
              <div className="text-lg opacity-90">Speed Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Qubit Systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Cloud Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Quantum AI Service Packages
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Starter</h3>
            <div className="text-3xl font-bold text-purple-600 mb-6">$4,999/month</div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Basic quantum computing access</li>
              <li>• Simple optimization problems</li>
              <li>• Quantum machine learning basics</li>
              <li>• Email support</li>
              <li>• 100 quantum hours/month</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Professional</h3>
            <div className="text-3xl font-bold text-purple-600 mb-6">$19,999/month</div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Advanced quantum algorithms</li>
              <li>• Custom optimization solutions</li>
              <li>• Quantum cryptography</li>
              <li>• Priority support</li>
              <li>• 1000 quantum hours/month</li>
              <li>• Dedicated quantum engineer</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Enterprise</h3>
            <div className="text-3xl font-bold text-purple-600 mb-6">Custom Pricing</div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Full quantum computing suite</li>
              <li>• Custom quantum algorithms</li>
              <li>• On-premise quantum systems</li>
              <li>• 24/7 dedicated support</li>
              <li>• Unlimited quantum hours</li>
              <li>• Quantum research partnership</li>
            </ul>
            <Link
              href="/contact"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Quantum AI Success Stories
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pharmaceutical Breakthrough</h3>
            <p className="text-gray-600 mb-4">
              A major pharmaceutical company used our quantum AI services to discover a new cancer treatment drug, 
              reducing discovery time from 10 years to 18 months.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Results:</strong> 85% faster drug discovery, $500M in potential revenue
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Optimization</h3>
            <p className="text-gray-600 mb-4">
              A global investment firm implemented quantum portfolio optimization, achieving 40% better 
              risk-adjusted returns while reducing computation time by 95%.
            </p>
            <div className="text-sm text-gray-500">
              <strong>Results:</strong> 40% better returns, 95% faster computation
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Harness Quantum AI Power?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join the quantum revolution and solve problems that were previously impossible with classical computing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Schedule Quantum Consultation
          </Link>
          <Link
            href="/blog/ai-quantum-supremacy-2026"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
          >
            Learn About Quantum AI
          </Link>
        </div>
        <div className="mt-8 text-sm opacity-75">
          <p>📞 Call +1 302 464 0950 for immediate assistance</p>
          <p>📧 Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}