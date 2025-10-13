import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Activity,
  BarChart3,
  Clock,
  Shield,
  Star,
  Award,
  Brain,
  TrendingUp,
  Users,
  Settings,
  Monitor,
  Database,
  Network,
  Layers,
  Atom
} from 'lucide-react';

export default function QuantumComputingSolutions() {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Processing Units",
      description: "Advanced quantum processors with 1000+ qubits for complex computational tasks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Algorithm Optimization",
      description: "Custom quantum algorithms optimized for specific business applications and use cases"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced AI models for exponentially faster machine learning computations"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Database Systems",
      description: "Quantum-accelerated database operations for massive data processing and analysis"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Quantum Cloud Infrastructure",
      description: "Scalable quantum computing resources delivered through secure cloud platforms"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$5,999",
      period: "/month",
      description: "Perfect for research institutions and startups",
      features: [
        "Up to 50 qubits",
        "Basic quantum algorithms",
        "Standard quantum cloud access",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$15,999",
      period: "/month",
      description: "Ideal for enterprises and government agencies",
      features: [
        "Up to 500 qubits",
        "Advanced quantum algorithms",
        "Priority quantum cloud access",
        "Dedicated support team",
        "Custom quantum solutions",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations requiring maximum quantum power",
      features: [
        "1000+ qubits",
        "Custom quantum hardware",
        "On-premise quantum systems",
        "24/7 dedicated support",
        "Full customization",
        "Quantum consulting services"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "10,000x",
      description: "Faster Processing",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "1000+",
      description: "Qubits Available",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      metric: "99.9%",
      description: "Uptime Guarantee",
      icon: <Shield className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Quantum Support",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing infrastructure with 1000+ qubits. Advanced quantum algorithms, cryptography, and machine learning for enterprise applications." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, quantum cloud, quantum infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Atom className="w-5 h-5 mr-2 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Quantum Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing with our advanced infrastructure featuring 1000+ qubits. Experience 10,000x faster processing for complex computational tasks, cryptography, and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Watch Quantum Demo
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the potential of quantum computing with our comprehensive suite of quantum technologies and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect quantum computing solution for your computational needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
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
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Start Quantum Computing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Enter the Quantum Era?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using quantum computing to solve complex problems and gain competitive advantages in today's data-driven world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Experience Quantum Computing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
