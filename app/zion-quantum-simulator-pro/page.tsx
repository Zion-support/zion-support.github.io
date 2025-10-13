import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Atom, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Calculator,
  Layers,
  Target,
  Lock,
  Globe,
  Activity,
  DollarSign,
  AlertTriangle,
  Database,
  Network,
  Microscope
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionQuantumSimulatorProPage = () => {
  const features = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Circuit Simulator",
      description: "Advanced quantum circuit simulation with support for up to 32 qubits, quantum gates, and entanglement visualization with real-time state analysis.",
      benefit: "Simulate complex quantum algorithms"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Enhanced Optimization",
      description: "Machine learning algorithms optimize quantum circuits, reduce gate counts, and suggest improvements for better performance and efficiency.",
      benefit: "Improve circuit efficiency by 60%"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Quantum Algorithm Library",
      description: "Pre-built implementations of Shor's algorithm, Grover's search, VQE, QAOA, and other quantum algorithms with customizable parameters.",
      benefit: "Accelerate quantum development"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Platform Support",
      description: "Simulate quantum circuits for IBM Qiskit, Google Cirq, Microsoft Q#, Amazon Braket, and Rigetti Forest with seamless integration.",
      benefit: "Work across all quantum platforms"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quantum Error Correction",
      description: "Advanced error correction simulation with surface codes, stabilizer codes, and fault-tolerant quantum computing protocols.",
      benefit: "Build robust quantum systems"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Comprehensive performance metrics, fidelity analysis, and benchmarking tools to optimize your quantum algorithms and circuits.",
      benefit: "Maximize quantum advantage"
    }
  ];

  const pricingPlans = [
    {
      name: "Researcher",
      price: "$99",
      period: "/month",
      description: "Perfect for quantum researchers and students",
      features: [
        "Up to 16 qubits simulation",
        "Basic quantum gates",
        "Standard algorithms library",
        "Community support",
        "Export to Qiskit/Cirq",
        "Basic analytics"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for quantum developers and companies",
      features: [
        "Up to 32 qubits simulation",
        "Advanced quantum gates",
        "Full algorithms library",
        "Priority support",
        "All platform exports",
        "Advanced analytics",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large quantum computing projects",
      features: [
        "Unlimited qubits simulation",
        "Custom quantum gates",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced error correction",
        "Team collaboration"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const supportedPlatforms = [
    { name: "IBM Qiskit", logo: "🔵" },
    { name: "Google Cirq", logo: "🔴" },
    { name: "Microsoft Q#", logo: "🟡" },
    { name: "Amazon Braket", logo: "🟠" },
    { name: "Rigetti Forest", logo: "🟢" },
    { name: "PennyLane", logo: "🟣" },
    { name: "Qiskit Metal", logo: "⚫" },
    { name: "Qiskit Nature", logo: "⚪" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Quantum Simulator Pro - Advanced Quantum Computing Platform | Zion Tech Group"
        description="Professional quantum computing simulation platform with AI optimization, multi-platform support, and comprehensive quantum algorithm library. Start building quantum applications today!"
        keywords="quantum computing, quantum simulator, quantum algorithms, quantum circuits, quantum programming, quantum development"
        canonicalUrl="https://ziontechgroup.com/zion-quantum-simulator-pro"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
              <Atom className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">Quantum Computing Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Quantum Simulator Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced quantum computing simulation platform with AI optimization, multi-platform support, 
              and comprehensive quantum algorithm library for the next generation of quantum applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum computing tools powered by cutting-edge simulation technology and AI optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm text-green-400 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum-Ready Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing journey. All plans include our core simulation features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-indigo-500/50 ring-2 ring-indigo-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Platform Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly work with all major quantum computing platforms and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {supportedPlatforms.map((platform, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.logo}
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Quantum Computing Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of researchers and developers using Zion Quantum Simulator Pro to build the future of computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionQuantumSimulatorProPage;
