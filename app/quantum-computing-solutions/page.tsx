import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Atom, Zap, Star, ArrowRight, CheckCircle, Users, Clock, Shield, Brain, Code, Sparkles, BarChart3, Globe, Smartphone } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const QuantumComputingSolutions = () => {
  const features = [
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning applications",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Simulation",
      description: "Advanced quantum simulations for research, drug discovery, and materials science",
      icon: <Atom className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Security",
      description: "Quantum-resistant cryptography and quantum key distribution systems",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced machine learning models for superior performance",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      name: "Quantum Algorithm Consulting",
      price: "From $500/hour",
      description: "Expert guidance on quantum algorithm design and implementation",
      features: [
        "Quantum optimization algorithms",
        "Quantum machine learning",
        "Quantum cryptography",
        "Quantum error correction",
        "Performance analysis"
      ]
    },
    {
      name: "Quantum Software Development",
      price: "From $25,000",
      description: "Custom quantum software solutions for your specific needs",
      features: [
        "Quantum circuit design",
        "Quantum simulation software",
        "Quantum API development",
        "Integration with classical systems",
        "Testing and optimization"
      ]
    },
    {
      name: "Quantum Security Assessment",
      price: "From $10,000",
      description: "Comprehensive quantum security evaluation and recommendations",
      features: [
        "Quantum threat analysis",
        "Post-quantum cryptography",
        "Quantum key distribution",
        "Security recommendations",
        "Implementation guidance"
      ]
    },
    {
      name: "Quantum Research Partnership",
      price: "Custom Pricing",
      description: "Collaborative research projects in quantum computing",
      features: [
        "Joint research initiatives",
        "Publication support",
        "Patent development",
        "Technology transfer",
        "Long-term partnership"
      ]
    }
  ];

  const applications = [
    {
      title: "Financial Services",
      description: "Quantum algorithms for portfolio optimization, risk analysis, and fraud detection",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Drug discovery, protein folding, and personalized medicine applications",
      icon: <Atom className="w-8 h-8" />
    },
    {
      title: "Logistics",
      description: "Supply chain optimization, route planning, and resource allocation",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and quantum key distribution systems",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Quantum Computing Solutions - Quantum Algorithms & Software Development | Zion Tech Group"
        description="Leading quantum computing solutions including algorithm development, quantum software, and security assessment. From $500/hour. Contact us for consultation."
        keywords="quantum computing, quantum algorithms, quantum software, quantum security, quantum machine learning, quantum simulation"
      />
      
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-computing-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Atom className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-medium">Quantum Computing Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing with our cutting-edge solutions. We develop quantum algorithms, 
              software, and security systems that solve complex problems exponentially faster than classical computers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                <Atom className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                View Research
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">Quantum Algorithms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000x</div>
                <div className="text-gray-400">Speed Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum solutions for the most challenging computational problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional quantum computing services for research and industry applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications where quantum computing provides exponential advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how quantum computing can solve your most complex challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              View Research Papers
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="font-semibold text-white mb-2">Phone</div>
              <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="font-semibold text-white mb-2">Address</div>
              <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions;