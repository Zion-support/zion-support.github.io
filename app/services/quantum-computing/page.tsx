import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Target, Users, TrendingUp, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Computing Services | Zion Tech Group',
  description: 'Transform your business with quantum computing solutions. Expert quantum algorithms, optimization, and implementation services for enterprises.',
  keywords: 'quantum computing, quantum algorithms, quantum optimization, quantum services, enterprise quantum',
  openGraph: {
    title: 'Quantum Computing Services | Zion Tech Group',
    description: 'Expert quantum computing solutions for enterprise transformation and competitive advantage.',
    type: 'website',
  },
};

export default function QuantumComputingServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Computing Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Unlock the power of quantum computing for your business. Our expert team delivers quantum solutions that solve complex problems impossible for classical computers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center"
              >
                Get Quantum Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quantum computing offers exponential speedup for specific problems, enabling breakthroughs in optimization, simulation, and machine learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exponential Speedup</h3>
              <p className="text-gray-600">Solve complex problems in minutes instead of years</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">Find optimal solutions for logistics, finance, and operations</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Advantage</h3>
              <p className="text-gray-600">Stay ahead with cutting-edge quantum technology</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Proof</h3>
              <p className="text-gray-600">Prepare for the quantum era of computing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Quantum Computing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From quantum algorithm development to full-scale implementation, we provide end-to-end quantum computing solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Algorithm Development</h3>
              <p className="text-gray-600 mb-4">
                Custom quantum algorithms designed for your specific business problems and optimization challenges.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Optimization algorithms</li>
                <li>• Machine learning models</li>
                <li>• Simulation algorithms</li>
                <li>• Cryptography solutions</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Optimization</h3>
              <p className="text-gray-600 mb-4">
                Solve complex optimization problems in supply chain, logistics, finance, and resource allocation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Supply chain optimization</li>
                <li>• Portfolio optimization</li>
                <li>• Route optimization</li>
                <li>• Resource allocation</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance on quantum computing adoption, feasibility assessment, and implementation planning.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Feasibility studies</li>
                <li>• Technology assessment</li>
                <li>• Implementation planning</li>
                <li>• ROI analysis</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Simulation</h3>
              <p className="text-gray-600 mb-4">
                Molecular simulation, material science, and complex system modeling using quantum computers.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Molecular dynamics</li>
                <li>• Material properties</li>
                <li>• Chemical reactions</li>
                <li>• Drug discovery</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Security</h3>
              <p className="text-gray-600 mb-4">
                Quantum-resistant cryptography and secure communication systems for the quantum era.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Post-quantum cryptography</li>
                <li>• Quantum key distribution</li>
                <li>• Security assessment</li>
                <li>• Migration planning</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning models leveraging quantum computing for enhanced performance.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quantum neural networks</li>
                <li>• Pattern recognition</li>
                <li>• Data classification</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quantum Computing Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously impossible problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Portfolio Optimization:</strong> Find optimal investment strategies with quantum algorithms
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Risk Analysis:</strong> Complex risk modeling and stress testing scenarios
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Fraud Detection:</strong> Advanced pattern recognition for anomaly detection
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Algorithmic Trading:</strong> High-frequency trading optimization
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturing & Logistics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Supply Chain Optimization:</strong> Complex multi-variable optimization problems
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Route Optimization:</strong> Delivery and logistics route planning
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Production Scheduling:</strong> Optimal resource allocation and scheduling
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Quality Control:</strong> Advanced defect detection and quality assurance
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare & Life Sciences</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Drug Discovery:</strong> Molecular simulation and drug design
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Protein Folding:</strong> Understanding protein structures and functions
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Genomics:</strong> DNA sequence analysis and genetic research
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Medical Imaging:</strong> Advanced image processing and analysis
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy & Environment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Energy Grid Optimization:</strong> Smart grid management and optimization
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Climate Modeling:</strong> Complex climate simulation and prediction
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Material Science:</strong> New material discovery and optimization
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Carbon Capture:</strong> Optimization of carbon capture technologies
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quantum Computing Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our quantum computing implementations across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Logistics Optimization</h3>
              <p className="text-blue-800 mb-4">
                Helped a global logistics company optimize delivery routes using quantum algorithms, reducing fuel costs by 30% and improving delivery times by 25%.
              </p>
              <div className="text-sm text-blue-700">
                <strong>Results:</strong> 30% fuel cost reduction, 25% faster deliveries, $2M annual savings
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Financial Portfolio</h3>
              <p className="text-green-800 mb-4">
                Developed quantum portfolio optimization for a hedge fund, achieving 15% better returns while reducing risk by 20% compared to classical methods.
              </p>
              <div className="text-sm text-green-700">
                <strong>Results:</strong> 15% better returns, 20% risk reduction, $50M additional profit
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Drug Discovery</h3>
              <p className="text-purple-800 mb-4">
                Accelerated drug discovery process for a pharmaceutical company using quantum simulation, reducing development time from 5 years to 18 months.
              </p>
              <div className="text-sm text-purple-700">
                <strong>Results:</strong> 70% time reduction, $100M cost savings, 3 new drug candidates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Quantum Computing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to quantum computing implementation that ensures success and maximizes ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Evaluate your business problems and determine quantum computing feasibility and potential benefits.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Develop a comprehensive quantum computing strategy with clear objectives, timelines, and success metrics.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Build and deploy quantum algorithms, integrate with existing systems, and train your team.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Monitor performance, optimize algorithms, and scale successful implementations across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the quantum revolution and transform your business with cutting-edge quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Quantum Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}