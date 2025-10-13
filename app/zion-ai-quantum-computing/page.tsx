import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cpu, Brain, Zap, Shield, CheckCircle, ArrowRight, Star, Target, Award, Globe, BarChart3, Sparkles } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ZionAiQuantumComputingPage = () => {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms for exponentially faster machine learning and pattern recognition",
      icon: <Brain className="w-6 h-6" />,
      stats: "1000x faster processing"
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems using quantum annealing and variational algorithms",
      icon: <Target className="w-6 h-6" />,
      stats: "Exponential speedup"
    },
    {
      title: "Quantum Cryptography",
      description: "Ultra-secure communication using quantum key distribution and quantum-resistant encryption",
      icon: <Shield className="w-6 h-6" />,
      stats: "Unbreakable security"
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems for drug discovery, materials science, and financial modeling",
      icon: <Cpu className="w-6 h-6" />,
      stats: "Molecular-level precision"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for research institutions and startups exploring quantum computing",
      features: [
        "10 quantum computing hours",
        "Basic quantum algorithms",
        "Standard support",
        "Quantum simulator access",
        "Documentation & tutorials"
      ],
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for enterprises with advanced quantum computing needs",
      features: [
        "50 quantum computing hours",
        "Advanced quantum algorithms",
        "Priority support",
        "Real quantum hardware access",
        "Custom algorithm development",
        "Dedicated quantum engineer"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations requiring maximum quantum computing power",
      features: [
        "Unlimited quantum computing hours",
        "Custom quantum algorithms",
        "24/7 dedicated support",
        "Exclusive quantum hardware",
        "White-label solutions",
        "Quantum consulting services"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Quantum Research Labs",
      role: "Chief Quantum Officer",
      content: "Zion AI Quantum Computing has revolutionized our research capabilities. We've achieved breakthroughs that would have taken years with classical computing.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Financial Services Corp",
      role: "Head of Quantitative Research",
      content: "The quantum optimization algorithms have transformed our portfolio optimization. We're seeing results that were impossible with traditional methods.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Johnson",
      company: "Pharmaceutical Research",
      role: "Director of Drug Discovery",
      content: "Quantum simulation has accelerated our drug discovery process by 10x. We can now model complex molecular interactions with unprecedented accuracy.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const stats = [
    { number: "50+", label: "Quantum Algorithms", icon: <Cpu className="w-6 h-6" /> },
    { number: "1000x", label: "Speed Improvement", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Quantum Fidelity", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Quantum Access", icon: <Globe className="w-6 h-6" /> }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Simulate molecular interactions for faster drug development and discovery",
      icon: <Brain className="w-6 h-6" />,
      benefit: "10x faster drug discovery"
    },
    {
      title: "Financial Modeling",
      description: "Optimize portfolios and risk management using quantum algorithms",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Exponential optimization gains"
    },
    {
      title: "Materials Science",
      description: "Design new materials with quantum properties for advanced applications",
      icon: <Target className="w-6 h-6" />,
      benefit: "Revolutionary material design"
    },
    {
      title: "Cryptography",
      description: "Implement quantum-resistant security for future-proof encryption",
      icon: <Shield className="w-6 h-6" />,
      benefit: "Unbreakable security"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Quantum Computing - Next-Generation Quantum Solutions | Zion Tech Group</title>
        <meta name="description" content="Harness the power of quantum computing with Zion AI Quantum Computing. Advanced quantum algorithms, machine learning, optimization, and cryptography solutions. Starting at $999/month." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum machine learning, quantum optimization, quantum cryptography, quantum simulation, quantum hardware, quantum software" />
        <meta property="og:title" content="Zion AI Quantum Computing - Next-Generation Quantum Solutions" />
        <meta property="og:description" content="Harness the power of quantum computing with advanced algorithms, machine learning, optimization, and cryptography solutions. Starting at $999/month." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-quantum-computing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-quantum-computing.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Quantum Computing - Next-Generation Quantum Solutions" />
        <meta name="twitter:description" content="Harness the power of quantum computing with advanced algorithms, machine learning, optimization, and cryptography solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-quantum-computing.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Zion AI Quantum Computing - Advanced Quantum Solutions Platform | Zion Tech Group"
          description="Harness the power of quantum computing with our advanced platform. Features quantum machine learning, optimization algorithms, cryptography, and simulation capabilities. Starting at $999/month."
          keywords="quantum computing, quantum algorithms, quantum machine learning, quantum optimization, quantum cryptography, quantum simulation, quantum hardware, quantum software, quantum annealing, quantum key distribution"
          canonical="https://ziontechgroup.com/ai-quantum-computing"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Quantum Computing Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of Computing is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Quantum
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock unprecedented computational power with our quantum computing platform. 
              Solve complex problems exponentially faster using quantum algorithms, machine learning, and optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Explore Quantum Computing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Quantum Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our quantum computing platform combines cutting-edge quantum hardware with advanced algorithms to deliver unprecedented computational power.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is transforming industries and solving previously impossible problems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400">
                      {useCase.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing plan that matches your computational needs and research goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Quantum Researchers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading researchers and organizations say about our quantum computing platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Harness Quantum Power?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum revolution and solve problems that were previously impossible. 
              Start your quantum computing journey with our advanced platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cpu className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiQuantumComputingPage;