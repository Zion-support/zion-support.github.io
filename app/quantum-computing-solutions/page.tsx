import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Atom, Cpu, Shield, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Globe } from 'lucide-react';

const QuantumComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for your specific computational challenges and optimization problems"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Hardware Integration",
      description: "Seamless integration with leading quantum computers including IBM, Google, and IonQ systems"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Security Solutions",
      description: "Post-quantum cryptography and quantum key distribution for ultra-secure communications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hybrid Classical-Quantum Systems",
      description: "Optimal combination of classical and quantum computing for maximum performance and efficiency"
    }
  ];

  const applications = [
    "Financial Portfolio Optimization",
    "Drug Discovery & Molecular Simulation",
    "Cryptographic Security",
    "Supply Chain Optimization",
    "Machine Learning Acceleration",
    "Climate Modeling",
    "Traffic Flow Optimization",
    "Material Science Research",
    "Risk Analysis",
    "Quantum Machine Learning",
    "Cryptocurrency Mining",
    "Artificial Intelligence"
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "Perfect for academic research",
      features: [
        "Up to 100 quantum compute hours/month",
        "Basic quantum algorithms",
        "Standard quantum hardware access",
        "Email support",
        "Research documentation",
        "Basic quantum simulation"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month", 
      description: "Ideal for corporate R&D",
      features: [
        "Up to 500 quantum compute hours/month",
        "Advanced quantum algorithms",
        "Premium quantum hardware access",
        "Priority support",
        "Custom algorithm development",
        "Quantum software development",
        "API integration",
        "Dedicated quantum consultant"
      ],
      popular: true
    },
    {
      name: "Government",
      price: "$24,999",
      period: "/month",
      description: "For government and defense",
      features: [
        "Unlimited quantum compute hours",
        "Cutting-edge quantum algorithms",
        "All quantum hardware platforms",
        "24/7 dedicated support",
        "Custom quantum solutions",
        "White-label quantum services",
        "On-premise quantum deployment",
        "SLA guarantee",
        "Security clearance support"
      ],
      popular: false
    }
  ];

  const quantumPlatforms = [
    "IBM Quantum Network", "Google Quantum AI", "IonQ", "Rigetti Computing",
    "D-Wave Systems", "Honeywell Quantum", "Microsoft Azure Quantum", "Amazon Braket"
  ];

  const benefits = [
    "Exponential computational speedup",
    "Revolutionary problem-solving capabilities",
    "Future-proof technology investment",
    "Competitive advantage in R&D",
    "Access to cutting-edge quantum hardware",
    "Expert quantum algorithm development",
    "Hybrid classical-quantum optimization",
    "Post-quantum security solutions"
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group | Next-Gen Computing</title>
        <meta name="description" content="Revolutionary quantum computing solutions for optimization, cryptography, and AI. Access cutting-edge quantum hardware and algorithms for breakthrough results." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum hardware, post-quantum cryptography, quantum machine learning, optimization" />
        <meta property="og:title" content="Quantum Computing Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation quantum computing solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of quantum computing to solve complex optimization problems, accelerate AI, 
                and revolutionize your computational capabilities with next-generation quantum technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Explore Quantum Solutions
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Quantum Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum computing solutions powered by the latest quantum hardware and algorithms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with quantum computing solutions across diverse applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {application}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock unprecedented computational power and solve previously intractable problems
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Platforms Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Supported Quantum Platforms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access to leading quantum computing platforms and hardware providers
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {quantumPlatforms.map((platform, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect quantum computing plan for your research and development needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300 text-lg">Faster Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-gray-300 text-lg">Quantum Platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-lg">Quantum Algorithms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Enter the Quantum Era?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the quantum computing revolution and solve problems that were previously impossible. 
                Start your quantum journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Quantum Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Quantum Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;