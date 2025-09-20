import React from 'react';
import { Brain, Zap, Target, TrendingUp, Shield, Users, Globe, Cpu, Database, ArrowRight, Lightbulb, BarChart3, Atom, CircuitBoard } from 'lucide-react';

const QuantumNeuralNetwork: React.FC = () => {
  const quantumFeatures = [
    {
      icon: Atom,
      title: "Quantum Processing",
      description: "Leverage quantum computing power for neural network operations",
      features: ["Quantum superposition", "Entanglement processing", "Quantum parallelism", "Coherent computation"]
    },
    {
      icon: CircuitBoard,
      title: "Hybrid Architecture",
      description: "Combine classical and quantum computing for optimal performance",
      features: ["Classical-quantum interface", "Hybrid algorithms", "Optimized workflows", "Seamless integration"]
    },
    {
      icon: Brain,
      title: "Neural Optimization",
      description: "Advanced neural network architectures optimized for quantum systems",
      features: ["Quantum neural layers", "Optimized training", "Efficient inference", "Scalable networks"]
    },
    {
      icon: Zap,
      title: "Performance Enhancement",
      description: "Exponential speedup for complex neural network operations",
      features: ["Faster training", "Improved accuracy", "Better convergence", "Enhanced scalability"]
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum-enhanced molecular modeling",
      icon: Atom,
      benefits: ["Faster molecular simulations", "Improved drug efficacy", "Reduced development time", "Better target identification"]
    },
    {
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization using quantum algorithms",
      icon: TrendingUp,
      benefits: ["Complex risk calculations", "Portfolio optimization", "Market prediction", "Fraud detection"]
    },
    {
      title: "Climate Modeling",
      description: "Accurate climate predictions and environmental impact assessments",
      icon: Globe,
      benefits: ["Precise simulations", "Long-term forecasting", "Impact analysis", "Policy optimization"]
    },
    {
      title: "AI Training",
      description: "Train large-scale AI models with quantum-enhanced optimization",
      icon: Brain,
      benefits: ["Faster convergence", "Better accuracy", "Larger models", "Efficient training"]
    },
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption and secure communication systems",
      icon: Shield,
      benefits: ["Post-quantum security", "Advanced encryption", "Secure communications", "Future-proof systems"]
    },
    {
      title: "Logistics Optimization",
      description: "Complex routing and supply chain optimization problems",
      icon: Target,
      benefits: ["Route optimization", "Supply chain efficiency", "Cost reduction", "Resource allocation"]
    }
  ];

  const benefits = [
    "Exponential speedup for complex computations",
    "Improved accuracy in neural network training",
    "Ability to solve previously intractable problems",
    "Enhanced scalability for large-scale AI models",
    "Future-proof technology investment",
    "Competitive advantage in research and development"
  ];

  const implementation = [
    {
      phase: "Assessment",
      description: "Evaluate current systems and identify quantum opportunities",
      duration: "2-3 weeks"
    },
    {
      phase: "Architecture",
      description: "Design quantum-classical hybrid architecture",
      duration: "4-6 weeks"
    },
    {
      phase: "Development",
      description: "Build quantum neural network components",
      duration: "12-20 weeks"
    },
    {
      phase: "Integration",
      description: "Integrate with existing classical systems",
      duration: "4-8 weeks"
    },
    {
      phase: "Testing",
      description: "Validate quantum advantage and performance",
      duration: "3-6 weeks"
    },
    {
      phase: "Deployment",
      description: "Production deployment and user training",
      duration: "2-4 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Neural Networks</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum computing to revolutionize neural network 
              performance and solve previously intractable problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Features */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Quantum Neural Network solution combines cutting-edge quantum 
              computing with advanced neural network architectures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quantum Neural Networks excel in solving complex problems across 
              multiple industries and research domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300 mb-4">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Quantum Neural Networks?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our quantum-enhanced neural networks provide unprecedented 
                computational power and problem-solving capabilities.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quantum Advantage</h3>
                <p className="text-gray-300 mb-6">
                  Experience exponential speedup and solve problems that are 
                  impossible with classical computing alone.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• Quantum superposition</p>
                  <p>• Entanglement processing</p>
                  <p>• Exponential speedup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Implementation Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A structured approach to implementing quantum neural networks 
            with expert guidance and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-gray-300 mb-2">{phase.description}</p>
                <p className="text-sm text-indigo-400">{phase.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quantum AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your organization with the power of quantum computing 
            and advanced neural networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Quantum Journey
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetwork;