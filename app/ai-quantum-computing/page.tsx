import { ArrowRight, Brain, Atom, Zap, Target, BarChart3, Users, CheckCircle, Star, Award, Rocket, Sparkles, Phone, Mail, MapPin, Cpu, Database, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIQuantumComputing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Solutions - Revolutionary Quantum AI Platform | Zion Tech Group</title>
        <meta name="description" content="Breakthrough AI quantum computing solutions that solve complex optimization problems, accelerate machine learning, and unlock unprecedented computational power. The future of AI is here." />
        <meta name="keywords" content="AI quantum computing, quantum machine learning, quantum optimization, quantum algorithms, quantum AI, quantum computing services, quantum solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Next-Generation Quantum AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of quantum computing with our revolutionary AI platform that solves complex optimization problems, 
              accelerates machine learning, and delivers unprecedented computational performance. The future of AI is quantum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">1000x Faster Processing</span>
              </div>
              <div className="flex items-center text-blue-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Quantum Supremacy</span>
              </div>
              <div className="flex items-center text-purple-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-semibold">Pilot Program Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform combines the power of quantum mechanics with advanced AI algorithms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Accelerate machine learning algorithms using quantum computing for exponential speed improvements.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum neural networks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum feature maps
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Optimization</h3>
              <p className="text-gray-300 mb-4">
                Solve complex optimization problems that are impossible for classical computers to handle efficiently.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Portfolio optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Supply chain optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Route optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Simulation</h3>
              <p className="text-gray-300 mb-4">
                Simulate complex quantum systems and molecular structures for drug discovery and materials science.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Molecular simulation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Drug discovery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Materials design
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Cryptography</h3>
              <p className="text-gray-300 mb-4">
                Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum key distribution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Post-quantum cryptography
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum random numbers
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Data Processing</h3>
              <p className="text-gray-300 mb-4">
                Process massive datasets using quantum algorithms for pattern recognition and data analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Quantum search algorithms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Pattern recognition
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Big data analytics
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quantum AI Research</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge research in quantum AI algorithms and applications for next-generation computing.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Algorithm development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Research partnerships
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Patent development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum AI Applications
            </h2>
            <p className="text-xl text-gray-300">
              Transform industries with quantum-powered AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Drug Discovery</h3>
              <p className="text-gray-300">Accelerate pharmaceutical research with quantum molecular simulation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Financial Modeling</h3>
              <p className="text-gray-300">Revolutionary portfolio optimization and risk analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Supply Chain</h3>
              <p className="text-gray-300">Optimize complex logistics with quantum algorithms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-300">Unbreakable quantum encryption and security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Access to cutting-edge quantum computing resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Research</h3>
                <p className="text-gray-400 mb-4">For academic and research institutions</p>
                <div className="text-4xl font-bold text-white mb-2">$2,999<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-sm text-gray-400">Billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10 hours quantum compute time
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic quantum algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Documentation access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
              >
                Request Access
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-purple-100 mb-4">For commercial applications</p>
                <div className="text-4xl font-bold text-white mb-2">$9,999<span className="text-lg text-purple-100">/month</span></div>
                <p className="text-sm text-purple-100">Billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  50 hours quantum compute time
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced quantum algorithms
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Dedicated resources
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center block"
              >
                Contact Sales
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
                <p className="text-gray-400 mb-4">Tailored quantum solutions</p>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <p className="text-sm text-gray-400">Contact for pricing</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited compute time
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom quantum algorithms
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Research collaboration
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution with our cutting-edge AI quantum computing solutions. 
              Contact us to discuss your quantum computing needs and explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}