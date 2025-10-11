'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Shield, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Target,
  Brain,
  Database,
  Lock,
  Globe,
  Settings,
  FileText,
  MessageCircle,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    'Quantum algorithm development and optimization',
    'Quantum machine learning implementations',
    'Quantum cryptography and security solutions',
    'Quantum simulation for complex systems',
    'Quantum annealing for optimization problems',
    'Quantum error correction and fault tolerance',
    'Hybrid classical-quantum computing architectures',
    'Quantum cloud computing platforms',
    'Quantum networking and communication',
    'Quantum sensing and metrology applications'
  ];

  const benefits = [
    'Exponential speedup for specific computational problems',
    'Revolutionary breakthroughs in cryptography and security',
    'Advanced optimization for complex business problems',
    'Breakthrough capabilities in drug discovery and materials science',
    'Next-generation artificial intelligence and machine learning',
    'Unprecedented data processing and analysis capabilities',
    'Future-proof technology investment',
    'Competitive advantage in emerging markets',
    'Research and development acceleration',
    'Innovation leadership in quantum technologies'
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, fraud detection, and algorithmic trading with quantum speedup',
      icon: DollarSign,
      applications: ['Portfolio optimization', 'Risk modeling', 'Fraud detection', 'High-frequency trading']
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'Drug discovery, molecular simulation, genetic analysis, and personalized medicine development',
      icon: Brain,
      applications: ['Drug discovery', 'Molecular simulation', 'Genetic analysis', 'Protein folding']
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Route optimization, inventory management, supply chain optimization, and resource allocation',
      icon: Globe,
      applications: ['Route optimization', 'Inventory management', 'Supply chain optimization', 'Resource allocation']
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant cryptography, secure communications, and advanced threat detection',
      icon: Shield,
      applications: ['Quantum cryptography', 'Secure communications', 'Threat detection', 'Data protection']
    },
    {
      title: 'Manufacturing',
      description: 'Process optimization, quality control, predictive maintenance, and materials discovery',
      icon: Settings,
      applications: ['Process optimization', 'Quality control', 'Predictive maintenance', 'Materials discovery']
    },
    {
      title: 'Research & Development',
      description: 'Scientific simulation, climate modeling, energy research, and fundamental physics',
      icon: BarChart,
      applications: ['Scientific simulation', 'Climate modeling', 'Energy research', 'Physics research']
    }
  ];

  const pricing = [
    {
      name: 'Quantum Consulting',
      price: '$5,000',
      period: '/month',
      description: 'Strategic quantum computing consultation and planning',
      features: [
        'Quantum readiness assessment',
        'Technology roadmap development',
        'Use case identification',
        'ROI analysis and planning',
        'Vendor evaluation and selection',
        'Implementation strategy'
      ],
      popular: false
    },
    {
      name: 'Quantum Development',
      price: '$15,000',
      period: '/month',
      description: 'Custom quantum algorithm development and implementation',
      features: [
        'Custom quantum algorithm design',
        'Quantum software development',
        'Hybrid classical-quantum solutions',
        'Performance optimization',
        'Testing and validation',
        'Documentation and training'
      ],
      popular: true
    },
    {
      name: 'Quantum Platform',
      price: '$50,000',
      period: '/month',
      description: 'Complete quantum computing platform and infrastructure',
      features: [
        'Quantum cloud infrastructure',
        'Quantum development environment',
        'Quantum algorithm library',
        'Quantum simulation capabilities',
        '24/7 technical support',
        'Dedicated quantum experts'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions powered by AI. Transform your business with quantum algorithms, quantum machine learning, and quantum optimization." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum algorithms, quantum machine learning, quantum optimization, quantum cryptography" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Quantum Computing
              <span className="block text-4xl md:text-5xl text-cyan-400 mt-2">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum computing combined with artificial intelligence to solve 
              complex problems that are impossible for classical computers. Transform your business 
              with quantum algorithms, quantum machine learning, and quantum optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quantum Consultation
              </Link>
              <a 
                href="tel:+13024640950"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced quantum computing solutions that leverage the principles of quantum mechanics 
                to deliver unprecedented computational power and problem-solving capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing can revolutionize your industry with 
                breakthrough applications and unprecedented computational capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quantum computing offers revolutionary advantages that can transform 
                your business operations and competitive position.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing solution that best fits your business needs 
                and budget. All plans include expert consultation and support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-4">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness Quantum Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our quantum computing experts to discuss how quantum solutions 
                can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Quantum Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free quantum readiness assessment • ✓ Custom quantum strategy • ✓ Expert implementation support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiQuantumComputingPage;