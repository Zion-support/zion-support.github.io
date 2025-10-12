import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import { ArrowRight, Atom, Cpu, Shield, Database, CheckCircle, Star, Zap, Globe, TrendingUp } from 'lucide-react'

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6 text-cyan-400" />,
      title: "Quantum Processing",
      description: "Leverage quantum algorithms for complex computational problems and optimization"
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-400" />,
      title: "Hybrid Computing",
      description: "Seamless integration of quantum and classical computing for maximum efficiency"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Quantum Security",
      description: "Advanced quantum cryptography and quantum key distribution for ultimate security"
    },
    {
      icon: <Database className="w-6 h-6 text-yellow-400" />,
      title: "Quantum Databases",
      description: "Quantum-enhanced database systems for faster data processing and retrieval"
    }
  ]

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      features: [
        "Basic quantum access",
        "Standard algorithms",
        "Research support",
        "Documentation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      features: [
        "Advanced quantum processing",
        "Custom algorithm development",
        "Dedicated quantum resources",
        "Priority support",
        "API access",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      features: [
        "Fully customized solution",
        "On-premise deployment",
        "White-label quantum system",
        "Dedicated team",
        "24/7 support",
        "Custom integrations"
      ],
      popular: false
    }
  ]

  return (
    <Layout
      title="Quantum Computing Solutions - Zion Tech Group"
      description="Revolutionary quantum computing solutions for complex problem solving, optimization, and advanced security. Harness the power of quantum technology."
      keywords="quantum computing, quantum algorithms, quantum security, quantum cryptography, quantum optimization, quantum technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Unlock the power of quantum computing for complex problem solving, optimization, 
              and advanced security. Experience the next generation of computational technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Quantum Algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Security Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Quantum Access</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Financial Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Portfolio optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Risk analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Fraud detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Algorithmic trading
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Drug Discovery</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Molecular simulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Protein folding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Drug optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Chemical analysis
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Logistics & Supply Chain</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Route optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Supply chain optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Demand forecasting
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Quantum Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Exponential Speed</h3>
                <p className="text-gray-300">Solve complex problems 1000x faster than classical computers with quantum processing power.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Future-Proof Technology</h3>
                <p className="text-gray-300">Stay ahead of the competition with cutting-edge quantum computing capabilities.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">Transform industries and solve world-class problems with quantum technology.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Harness Quantum Power?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational capabilities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuantumComputingSolutionsPage