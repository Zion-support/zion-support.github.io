"use client";
import React from "react";
import SEOHead from "../components/SEOHead";
import {
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Quantum Algorithm Development",
      description:
        "Custom quantum algorithms for optimization, cryptography, and machine learning applications.",
      benefits: [
        "Exponential speedup",
        "Quantum advantage",
        "Custom solutions",
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: "Quantum Cryptography",
      description:
        "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
      benefits: [
        "Unbreakable security",
        "Future-proof encryption",
        "Quantum key distribution",
      ],
    },
    {
      icon: SparklesIcon,
      title: "Quantum Machine Learning",
      description:
        "Advanced ML models leveraging quantum computing for pattern recognition and optimization.",
      benefits: [
        "Quantum neural networks",
        "Faster training",
        "Complex pattern recognition",
      ],
    },
    {
      icon: GlobeAltIcon,
      title: "Quantum Simulation",
      description:
        "Simulate complex quantum systems for research, drug discovery, and materials science.",
      benefits: ["Molecular modeling", "Drug discovery", "Materials research"],
    },
    {
      icon: CogIcon,
      title: "Quantum Optimization",
      description:
        "Solve complex optimization problems using quantum annealing and variational algorithms.",
      benefits: [
        "Logistics optimization",
        "Financial modeling",
        "Supply chain optimization",
      ],
    },
    {
      icon: DocumentTextIcon,
      title: "Quantum Consulting",
      description:
        "Expert guidance on quantum computing strategy, implementation, and integration.",
      benefits: [
        "Strategic planning",
        "Technology assessment",
        "Implementation roadmap",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and universities",
      features: [
        "10 quantum computing hours per month",
        "Basic quantum algorithms",
        "Simulation capabilities",
        "Research support",
        "Documentation and training",
        "Email support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Ideal for large enterprises and corporations",
      features: [
        "50 quantum computing hours per month",
        "Advanced quantum algorithms",
        "Custom algorithm development",
        "Quantum cryptography",
        "Dedicated support team",
        "Priority access",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Custom",
      price: "Custom",
      period: "",
      description: "Tailored solutions for specific needs",
      features: [
        "Unlimited quantum computing access",
        "Custom quantum hardware",
        "Dedicated quantum team",
        "On-premise deployment",
        "24/7 dedicated support",
        "Custom algorithm development",
        "Quantum consulting",
        "Training and education",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const useCases = [
    {
      title: "Financial Services",
      description:
        "Portfolio optimization, risk analysis, and fraud detection using quantum algorithms",
      icon: DocumentTextIcon,
      benefit: "1000x faster calculations",
    },
    {
      title: "Drug Discovery",
      description:
        "Molecular simulation and drug design using quantum computing power",
      icon: SparklesIcon,
      benefit: "Years of research in days",
    },
    {
      title: "Logistics Optimization",
      description:
        "Complex routing and supply chain optimization with quantum algorithms",
      icon: CogIcon,
      benefit: "30% cost reduction",
    },
  ];

  const quantumAdvantages = [
    "Exponential Speedup",
    "Quantum Supremacy",
    "Parallel Processing",
    "Quantum Entanglement",
    "Superposition States",
    "Quantum Interference",
    "Quantum Tunneling",
    "Quantum Coherence",
    "Error Correction",
    "Quantum Gates",
    "Quantum Circuits",
    "Quantum Algorithms",
  ];

  return (
    <>
      <SEOHead
        title="Quantum Computing Solutions - Next-Gen Computing Power | Zion Tech Group"
        description="Harness the power of quantum computing for optimization, cryptography, and machine learning. Custom quantum algorithms and solutions for enterprises. Contact us today!"
        keywords="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum optimization, quantum simulation, quantum consulting"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>

          {/* Quantum Particles */}
          <div className="quantum-particles">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="quantum-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Data Streams */}
          <div className="data-stream"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text holographic-glitch">
                  Quantum Computing Solutions
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Unlock the power of quantum computing with our advanced
                solutions. Experience exponential speedup in optimization,
                cryptography, and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 neon-pulse-multi">
                  <span className="relative z-10 flex items-center">
                    Contact Quantum Experts
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-400/25 neon-border-animated">
                  Schedule Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 holographic-float">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2">
                    1000x
                  </div>
                  <div className="text-gray-300 text-sm">Speedup</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 holographic-float">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                    100+
                  </div>
                  <div className="text-gray-300 text-sm">Qubits</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 holographic-float">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-300 text-sm">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 holographic-float">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300 text-sm">Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Quantum{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Harness the power of quantum mechanics to solve problems that
                are impossible for classical computers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 holographic-float"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-indigo-400 font-medium neon-text">
                      Quantum
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Advantages Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Quantum Advantages
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Experience the revolutionary benefits of quantum computing
                technology.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {quantumAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 group holographic-float"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From finance to healthcare, quantum computing is transforming
                industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="text-center group holographic-float"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="text-lg font-semibold text-purple-400 neon-text">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Quantum{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the quantum computing solution that fits your research
                and business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "ring-2 ring-indigo-500 shadow-indigo-500/20"
                      : ""
                  } holographic-float`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400 neon-text">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/25"
                        : "cyber-button"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join the quantum computing revolution and unlock unprecedented
              computational power for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25 neon-pulse-multi">
                <span className="relative z-10 flex items-center">
                  Contact Quantum Experts
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;
