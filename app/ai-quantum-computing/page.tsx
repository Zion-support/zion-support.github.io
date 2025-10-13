import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  BoltIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function AIQuantumComputingPage() {
  const quantumServices = [
    {
      title: "Quantum Machine Learning",
      description: "Revolutionary quantum algorithms for machine learning that can process exponentially larger datasets and solve complex optimization problems.",
      icon: CpuChipIcon,
      features: [
        "Quantum neural networks",
        "Quantum optimization algorithms",
        "Exponential speedup for ML tasks",
        "Quantum feature mapping",
        "Quantum kernel methods",
        "Hybrid quantum-classical models"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $15,000/month",
      benefits: ["1000x faster processing", "Exponential scalability", "Quantum advantage"],
      useCases: ["Drug discovery", "Financial modeling", "Climate simulation"],
      href: "/ai-quantum-ml"
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable quantum encryption solutions using quantum key distribution for ultimate data security.",
      icon: ShieldCheckIcon,
      features: [
        "Quantum key distribution (QKD)",
        "Quantum random number generation",
        "Post-quantum cryptography",
        "Quantum secure communication",
        "Quantum digital signatures",
        "Quantum authentication"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $12,000/month",
      benefits: ["Unbreakable encryption", "Quantum security", "Future-proof"],
      useCases: ["Government communications", "Financial transactions", "Healthcare data"],
      href: "/ai-quantum-crypto"
    },
    {
      title: "Quantum Optimization",
      description: "Advanced quantum optimization algorithms for solving complex business problems with exponential speedup.",
      icon: ChartBarIcon,
      features: [
        "Quantum annealing",
        "Variational quantum eigensolver",
        "Quantum approximate optimization",
        "Portfolio optimization",
        "Supply chain optimization",
        "Logistics optimization"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $10,000/month",
      benefits: ["Exponential speedup", "Global optimization", "Real-time solutions"],
      useCases: ["Supply chain", "Financial portfolio", "Resource allocation"],
      href: "/ai-quantum-optimization"
    },
    {
      title: "Quantum Simulation",
      description: "Quantum simulation platforms for modeling complex systems in chemistry, physics, and materials science.",
      icon: BeakerIcon,
      features: [
        "Molecular simulation",
        "Material property prediction",
        "Chemical reaction modeling",
        "Quantum chemistry calculations",
        "Drug interaction simulation",
        "Catalyst design"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $18,000/month",
      benefits: ["Exact quantum simulation", "Chemical accuracy", "Scalable modeling"],
      useCases: ["Pharmaceutical research", "Materials science", "Chemical engineering"],
      href: "/ai-quantum-simulation"
    },
    {
      title: "Quantum AI Analytics",
      description: "Quantum-enhanced analytics for processing massive datasets and discovering hidden patterns.",
      icon: EyeIcon,
      features: [
        "Quantum data analysis",
        "Pattern recognition",
        "Anomaly detection",
        "Quantum clustering",
        "Dimensionality reduction",
        "Quantum feature selection"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $8,000/month",
      benefits: ["Massive data processing", "Hidden pattern discovery", "Quantum advantage"],
      useCases: ["Big data analytics", "Scientific research", "Market analysis"],
      href: "/ai-quantum-analytics"
    },
    {
      title: "Quantum Cloud Computing",
      description: "Access to quantum computing power through our cloud platform for various quantum applications.",
      icon: CloudIcon,
      features: [
        "Quantum cloud access",
        "Multiple quantum processors",
        "Quantum programming interfaces",
        "Real-time quantum execution",
        "Quantum algorithm library",
        "Hybrid cloud integration"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $5,000/month",
      benefits: ["On-demand quantum access", "Multiple processors", "Easy integration"],
      useCases: ["Research projects", "Algorithm development", "Quantum education"],
      href: "/ai-quantum-cloud"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI quantum computing solutions including quantum machine learning, cryptography, optimization, and simulation. Transform your business with quantum advantage." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Quantum Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The Future of Computing is Here
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Harness the power of quantum computing combined with artificial intelligence to solve 
              problems that are impossible for classical computers. Experience exponential speedup 
              and quantum advantage in your business applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Quantum Journey
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Quantum Demo
                <RocketLaunchIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum computing solutions powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {quantumServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Quantum Advantages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Quantum Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why quantum computing will revolutionize your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BoltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exponential Speedup</h3>
              <p className="text-gray-300">
                Solve complex problems in seconds that would take classical computers years to complete.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Unbreakable Security</h3>
              <p className="text-gray-300">
                Quantum cryptography provides theoretically unbreakable encryption for ultimate data security.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BeakerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Perfect Simulation</h3>
              <p className="text-gray-300">
                Simulate quantum systems with perfect accuracy for scientific and industrial applications.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimization Mastery</h3>
              <p className="text-gray-300">
                Find optimal solutions to complex optimization problems that are impossible for classical computers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Be among the first to experience the power of quantum computing
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule Quantum Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Quantum Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}