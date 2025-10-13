import { ArrowRight, Atom, Brain, Zap, Shield, CheckCircle, Star, Cpu, Database, Lock, Globe, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function QuantumComputingSolutions() {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning applications"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced ML models for pattern recognition and complex data analysis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Simulation",
      description: "High-fidelity quantum simulations for materials science, chemistry, and physics research"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Cryptography",
      description: "Unbreakable quantum encryption and secure communication protocols"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Hardware Integration",
      description: "Integration with leading quantum computers and quantum processing units"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Database Optimization",
      description: "Quantum-enhanced database queries and data processing for massive datasets"
    }
  ];

  const quantumFeatures = [
    "Quantum Circuit Design",
    "Quantum Error Correction",
    "Quantum State Preparation",
    "Quantum Gate Optimization",
    "Quantum Annealing",
    "Quantum Approximate Optimization Algorithm (QAOA)",
    "Variational Quantum Eigensolver (VQE)",
    "Quantum Fourier Transform",
    "Quantum Teleportation",
    "Quantum Entanglement",
    "Quantum Interference",
    "Quantum Superposition"
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions",
      features: [
        "Basic quantum algorithms",
        "Simulation tools",
        "Email support",
        "1 quantum computer access",
        "Standard documentation",
        "Up to 10 qubits"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Advanced quantum algorithms",
        "Custom algorithm development",
        "Priority support",
        "Multiple quantum computers",
        "Advanced simulation",
        "Up to 50 qubits",
        "API access"
      ],
      popular: true
    },
    {
      name: "Institution",
      price: "$24,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full quantum suite",
        "Custom quantum hardware",
        "24/7 phone support",
        "White-label solution",
        "Dedicated quantum team",
        "Unlimited qubits",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Rodriguez",
      company: "Quantum Research Institute",
      role: "Director of Quantum Computing",
      content: "Zion Quantum Computing Solutions has revolutionized our research capabilities. The quantum algorithms have solved optimization problems that were previously impossible with classical computers.",
      rating: 5
    },
    {
      name: "Prof. James Chen",
      company: "Tech University",
      role: "Quantum Physics Professor",
      content: "The quantum simulation capabilities are extraordinary. We've been able to model complex molecular interactions with unprecedented accuracy, opening new possibilities in drug discovery.",
      rating: 5
    },
    {
      name: "Dr. Sarah Kim",
      company: "Financial Services Corp",
      role: "Chief Innovation Officer",
      content: "The quantum cryptography implementation has given us the highest level of security possible. Our financial transactions are now protected by the laws of quantum physics.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Advanced Quantum Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your computing with Zion Quantum Computing Solutions - the ultimate quantum computing platform. Quantum algorithms, machine learning, simulation, and cryptography for next-generation applications."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum algorithms, quantum machine learning, quantum simulation, quantum cryptography, quantum hardware, quantum software, quantum research"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Atom className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">Next-Generation Quantum Computing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Quantum Computing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your computing with the world's most advanced quantum computing platform. 
              Quantum algorithms, machine learning, simulation, and cryptography for next-generation applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">1000x</div>
                <div className="text-gray-300">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Algorithm Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Quantum Algorithms</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Quantum Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to harness the power of quantum computing for your applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Features List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Quantum Computing Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to develop and deploy quantum applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quantumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing solution that fits your research needs. All plans include 30-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Quantum Researchers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what quantum computing researchers say about Zion Quantum Computing Solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading researchers and organizations using Zion Quantum Computing Solutions to solve the world's most complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}