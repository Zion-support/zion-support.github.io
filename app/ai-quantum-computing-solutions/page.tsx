import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Atom, Brain, Zap, Shield, BarChart3, Cpu, Database, Target, Star, ArrowRight, CheckCircle, Activity, Lock, Globe } from 'lucide-react';

export default function AIQuantumComputingSolutions() {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms for exponentially faster machine learning and pattern recognition across massive datasets",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant security protocols",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems in logistics, finance, and resource allocation with quantum algorithms",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Simulation",
      description: "Simulate molecular structures, chemical reactions, and physical systems with unprecedented accuracy",
      icon: <Atom className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const applications = [
    {
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulation and drug design",
      icon: <Atom className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental impact analysis using quantum computing",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize complex logistics networks and supply chain operations with quantum algorithms",
      icon: <Activity className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and academic projects",
      features: [
        "Up to 10 quantum computing hours/month",
        "Basic quantum algorithms",
        "Standard support",
        "Research collaboration tools",
        "Academic pricing available"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Advanced quantum solutions for large organizations",
      features: [
        "Up to 100 quantum computing hours/month",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom quantum applications",
        "Dedicated quantum engineers",
        "API access"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      description: "Tailored quantum computing solutions",
      features: [
        "Unlimited quantum computing access",
        "Everything in Enterprise",
        "Custom quantum hardware",
        "Dedicated quantum team",
        "White-label solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Institute",
      role: "Director of Quantum Computing",
      content: "Zion's quantum computing solutions have revolutionized our research capabilities. We've achieved breakthroughs that would have taken years with classical computing.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      company: "Global Investment Bank",
      role: "Head of Quantitative Research",
      content: "The quantum optimization algorithms have transformed our trading strategies. We've seen significant improvements in portfolio performance and risk management.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Dr. Elena Rodriguez",
      company: "Pharmaceutical Company",
      role: "Chief Scientific Officer",
      content: "Quantum molecular simulation has accelerated our drug discovery process by 10x. We're now able to explore chemical spaces that were previously impossible.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Solutions - Next-Generation Quantum AI Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your business with AI-powered quantum computing solutions. Quantum machine learning, cryptography, optimization, and simulation. Starting at $2,999/month." />
        <meta name="keywords" content="quantum computing AI, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation, quantum algorithms" />
        <meta property="og:title" content="AI Quantum Computing Solutions - Next-Generation Quantum AI Platform" />
        <meta property="og:description" content="Revolutionize your business with AI-powered quantum computing solutions and advanced quantum algorithms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quantum-computing-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Atom className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Quantum AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Quantum Computing Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of quantum computing combined with artificial intelligence to solve the world's most complex problems. Experience exponential speedup in optimization, simulation, and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Atom className="w-5 h-5 mr-2" />
                Start Quantum Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10^18</div>
              <div className="text-gray-300">Operations/Second</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Quantum Algorithms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quantum AI Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the combined power of quantum computing and artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real-World Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with quantum computing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${application.color} mb-4`}>
                  {application.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Computing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access cutting-edge quantum computing resources and AI algorithms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Quantum Pioneers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about AI Quantum Computing Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Enter the Quantum Era?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock unprecedented computational power for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Atom className="w-5 h-5 mr-2" />
              Start Quantum Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <Brain className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}