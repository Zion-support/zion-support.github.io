import { ArrowRight, Atom, Brain, Zap, Shield, Star, CheckCircle, Cpu, Database, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiQuantumComputing() {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning applications"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing for advanced AI models and pattern recognition"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Optimization",
      description: "Solve complex optimization problems exponentially faster than classical computers"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Simulation",
      description: "Simulate quantum systems for drug discovery, materials science, and financial modeling"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Database Search",
      description: "Exponentially faster database searches using Grover's algorithm and quantum techniques"
    }
  ];

  const applications = [
    "Drug Discovery & Molecular Simulation",
    "Financial Portfolio Optimization",
    "Cryptographic Security Solutions",
    "Supply Chain Optimization",
    "Machine Learning Acceleration",
    "Climate Modeling & Simulation",
    "Traffic Flow Optimization",
    "Cryptocurrency Mining",
    "Protein Folding Analysis",
    "Risk Assessment & Modeling",
    "Quantum Machine Learning",
    "Quantum Internet Development"
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research projects",
      features: [
        "Up to 10 quantum hours/month",
        "Basic quantum algorithms",
        "Standard support",
        "Research documentation",
        "Basic simulation tools",
        "10GB quantum data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 50 quantum hours/month",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom algorithm development",
        "Advanced simulation tools",
        "100GB quantum data storage",
        "API access",
        "Quantum consulting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited quantum hours",
        "Custom quantum solutions",
        "Dedicated quantum team",
        "24/7 quantum support",
        "White-label solutions",
        "Unlimited storage",
        "Advanced integrations",
        "Quantum strategy consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Pharmaceutical Research",
      role: "Chief Scientist",
      content: "Zion's quantum computing solutions accelerated our drug discovery process by 1000x. We identified promising compounds in weeks instead of years.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Financial Services",
      role: "Quantitative Analyst",
      content: "The quantum optimization algorithms revolutionized our portfolio management. We achieved 40% better returns with significantly reduced risk.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      company: "Materials Science Lab",
      role: "Research Director",
      content: "Quantum simulation capabilities helped us design new materials with unprecedented properties. The breakthrough wouldn't have been possible with classical computing.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Services - Advanced Quantum Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Harness the power of quantum computing with AI integration. Quantum algorithms, machine learning, optimization, and cryptography solutions for breakthrough applications."
        />
        <meta
          name="keywords"
          content="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation, quantum AI"
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
                AI Quantum Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the exponential power of quantum computing combined with artificial intelligence. 
              Solve complex problems, optimize algorithms, and achieve breakthroughs in minutes instead of years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Quantum Journey
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
                <div className="text-gray-300">Quantum Accuracy</div>
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
                Revolutionary Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Breakthrough quantum computing solutions powered by artificial intelligence.
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

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with quantum-powered solutions and AI integration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{application}</span>
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
                Access cutting-edge quantum computing resources. All plans include quantum consultation.
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
                    Start Quantum Journey
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
                See what leading researchers say about our quantum computing solutions
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
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution with Zion Tech Group's cutting-edge quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Quantum Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}