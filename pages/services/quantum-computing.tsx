import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Atom, 
  Zap, 
  Brain, 
  Shield, 
  Database, 
  Globe,
  CheckCircle,
  BarChart3,
  Network,
  Server,
  Cpu,
  Cloud,
  ArrowRight
} from 'lucide-react';

const QuantumComputing = () => {
  const quantumCapabilities = [
    {
      icon: Atom,
      title: "Quantum Algorithms",
      description: "Custom quantum algorithms for optimization, machine learning, and cryptography"
    },
    {
      icon: Zap,
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for research and development"
    },
    {
      icon: Brain,
      title: "Quantum Machine Learning",
      description: "AI and ML enhanced with quantum computing capabilities"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution"
    },
    {
      icon: Database,
      title: "Quantum Databases",
      description: "Quantum-enhanced database search and optimization"
    },
    {
      icon: Globe,
      title: "Quantum Networks",
      description: "Secure quantum communication networks and protocols"
    }
  ];

  const benefits = [
    "Solve complex problems 1000x faster than classical computers",
    "Breakthrough in cryptography and security",
    "Revolutionary drug discovery and materials science",
    "Optimization problems solved in minutes, not years",
    "Quantum advantage in machine learning and AI",
    "Future-proof your business with quantum technology"
  ];

  const quantumVsClassical = [
    {
      aspect: "Problem Solving",
      classical: "Sequential processing, limited by Moore's Law",
      quantum: "Parallel processing, exponential speedup potential"
    },
    {
      aspect: "Cryptography",
      classical: "RSA, ECC - potentially breakable",
      quantum: "Quantum-resistant algorithms, unbreakable encryption"
    },
    {
      aspect: "Optimization",
      classical: "Heuristic approaches, local optima",
      quantum: "Global optimization, quantum annealing"
    },
    {
      aspect: "Machine Learning",
      classical: "Linear scaling with data",
      quantum: "Exponential scaling with quantum features"
    }
  ];

  const industryApplications = [
    {
      industry: "Finance",
      description: "Portfolio optimization, risk assessment, and algorithmic trading",
      useCases: ["Portfolio optimization", "Risk modeling", "Trading algorithms"]
    },
    {
      industry: "Healthcare",
      description: "Drug discovery, protein folding, and personalized medicine",
      useCases: ["Drug discovery", "Protein folding", "Genomic analysis"]
    },
    {
      industry: "Manufacturing",
      description: "Supply chain optimization, materials science, and logistics",
      useCases: ["Supply chain optimization", "Materials research", "Logistics planning"]
    },
    {
      industry: "Energy",
      description: "Grid optimization, renewable energy, and climate modeling",
      useCases: ["Grid optimization", "Climate modeling", "Energy storage"]
    },
    {
      industry: "Transportation",
      description: "Route optimization, traffic flow, and autonomous systems",
      useCases: ["Route optimization", "Traffic modeling", "Autonomous navigation"]
    },
    {
      industry: "Research",
      description: "Scientific computing, physics simulations, and AI research",
      useCases: ["Physics simulations", "AI research", "Scientific computing"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Director, QuantumTech Labs",
      content: "Zion Tech Group's quantum computing services enabled us to solve complex optimization problems that were previously impossible.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CTO, FinTech Innovations",
      content: "The quantum algorithms for portfolio optimization delivered results 100x faster than our classical approaches. Revolutionary technology.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Lead Scientist, BioTech Solutions",
      content: "Quantum simulation helped us understand protein folding mechanisms that were impossible to model with classical computers.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Quantum Computing Services | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge Quantum Computing services. Quantum algorithms, simulation, and machine learning." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum simulation, quantum machine learning, quantum cryptography" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of quantum mechanics to solve the world's most complex problems. 
                Experience computing power beyond classical limitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Quantum Solutions
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum Capabilities Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum computing platform provides access to cutting-edge quantum technologies and algorithms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumCapabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Advantage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the revolutionary benefits of quantum computing technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum vs Classical Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum vs Classical Computing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand the fundamental differences and advantages of quantum computing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quantumVsClassical.map((comparison, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">{comparison.aspect}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Classical</h4>
                    <p className="text-gray-300 text-sm">{comparison.classical}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Quantum</h4>
                    <p className="text-gray-300 text-sm">{comparison.quantum}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum computing solutions tailored for your industry's unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryApplications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{application.industry}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{application.description}</p>
                  <ul className="space-y-2">
                    {application.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300 text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from businesses using our quantum computing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be among the first to harness the power of quantum computing. 
                Our quantum experts are ready to help you solve the impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Quantum Journey
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputing;