'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Globe,
  FileText,
  Smartphone,
  Mail,
  MapPin,
  Phone,
  Lock,
  Server,
  Network,
  HardDrive,
  Wifi,
  Settings,
  Users,
  Clock,
  TrendingUp,
  Layers,
  CircuitBoard,
  Atom,
  Brain,
  Rocket
} from 'lucide-react';

const QuantumCloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Atom,
      title: 'Quantum Computing Infrastructure',
      description: 'Deploy quantum computing resources on cloud infrastructure with unprecedented processing power',
      features: [
        'Quantum processor access',
        'Quantum algorithm optimization',
        'Hybrid classical-quantum workflows',
        'Quantum error correction',
        'Quantum networking',
        'Quantum security protocols'
      ],
      impact: '1000x faster computation',
      pricing: 'Starting at $25,000/month',
      category: 'Quantum Computing'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Quantum Platform',
      description: 'Seamlessly integrate quantum resources across AWS, Azure, Google Cloud, and IBM Quantum',
      features: [
        'Cross-cloud quantum access',
        'Unified quantum APIs',
        'Quantum workload orchestration',
        'Cost optimization',
        'Security compliance',
        'Global quantum network'
      ],
      impact: '99.9% uptime guarantee',
      pricing: 'Starting at $15,000/month',
      category: 'Cloud Integration'
    },
    {
      icon: Shield,
      title: 'Quantum-Secure Infrastructure',
      description: 'Future-proof your infrastructure with quantum-resistant security and encryption',
      features: [
        'Post-quantum cryptography',
        'Quantum key distribution',
        'Quantum random number generation',
        'Zero-trust architecture',
        'Quantum threat detection',
        'Compliance automation'
      ],
      impact: '100% quantum-safe security',
      pricing: 'Starting at $20,000/month',
      category: 'Quantum Security'
    },
    {
      icon: Database,
      title: 'Quantum Database Systems',
      description: 'Revolutionary database technology leveraging quantum principles for massive data processing',
      features: [
        'Quantum database queries',
        'Exponential data processing',
        'Quantum machine learning',
        'Real-time analytics',
        'Quantum compression',
        'Distributed quantum storage'
      ],
      impact: '10,000x faster queries',
      pricing: 'Starting at $30,000/month',
      category: 'Quantum Databases'
    },
    {
      icon: Network,
      title: 'Quantum Networking Solutions',
      description: 'Ultra-secure quantum communication networks with instant data transmission',
      features: [
        'Quantum entanglement networks',
        'Instant quantum communication',
        'Quantum teleportation protocols',
        'Quantum internet backbone',
        'Quantum satellite networks',
        'Quantum mesh networking'
      ],
      impact: 'Instant global communication',
      pricing: 'Starting at $40,000/month',
      category: 'Quantum Networking'
    },
    {
      icon: Brain,
      title: 'AI-Quantum Hybrid Platform',
      description: 'Combine artificial intelligence with quantum computing for unprecedented problem-solving capabilities',
      features: [
        'Quantum machine learning',
        'Quantum neural networks',
        'Quantum optimization algorithms',
        'Quantum pattern recognition',
        'Quantum natural language processing',
        'Quantum computer vision'
      ],
      impact: 'Exponential AI capabilities',
      pricing: 'Starting at $35,000/month',
      category: 'AI-Quantum Hybrid'
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$10,000',
      period: '/month',
      description: 'Perfect for research institutions and startups exploring quantum computing',
      features: [
        'Basic quantum processor access',
        'Standard quantum algorithms',
        'Email support',
        'Up to 10 users',
        'Monthly quantum credits',
        'Basic documentation'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Quantum Professional',
      price: '$50,000',
      period: '/month',
      description: 'Comprehensive quantum cloud solution for enterprises',
      features: [
        'Advanced quantum processors',
        'Custom quantum algorithms',
        'Priority support',
        'Up to 100 users',
        'API access',
        'Advanced analytics',
        'Quantum security suite',
        'Training & consulting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Quantum Enterprise',
      price: '$150,000',
      period: '/month',
      description: 'Complete quantum infrastructure for large organizations',
      features: [
        'Dedicated quantum processors',
        'Custom quantum solutions',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label options',
        'On-premise quantum deployment',
        'SLA guarantee',
        'Dedicated quantum team',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const capabilities = [
    {
      title: 'Unprecedented Performance',
      description: 'Solve complex problems that are impossible with classical computers',
      impact: '1000x faster',
      icon: Zap
    },
    {
      title: 'Quantum Security',
      description: 'Future-proof security with quantum-resistant encryption',
      impact: '100% quantum-safe',
      icon: Shield
    },
    {
      title: 'Global Scale',
      description: 'Deploy quantum resources across multiple cloud providers worldwide',
      impact: '99.9% uptime',
      icon: Globe
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce computational costs through quantum efficiency',
      impact: '70% cost reduction',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Kim',
      role: 'Chief Technology Officer',
      company: 'QuantumTech Solutions',
      content: 'The quantum cloud infrastructure has transformed our research capabilities. We\'ve solved optimization problems that would have taken years in just days.',
      rating: 5
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Research Director',
      company: 'Advanced Computing Institute',
      content: 'The quantum security features are outstanding. We can now protect our data against future quantum attacks, giving us a significant competitive advantage.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of AI Research',
      company: 'Global AI Corp',
      content: 'The AI-quantum hybrid platform is revolutionary. We\'ve achieved breakthroughs in machine learning that were previously impossible.',
      rating: 5
    }
  ];

  const caseStudies = [
    {
      company: 'FinTech Quantum',
      industry: 'Financial Services',
      challenge: 'Complex portfolio optimization taking days to compute',
      solution: 'Implemented quantum optimization algorithms on cloud infrastructure',
      results: ['99% faster optimization', '50% better portfolio returns', 'ROI of 500% in 12 months'],
      image: '/images/case-studies/fintech-quantum.jpg'
    },
    {
      company: 'PharmaQuantum Labs',
      industry: 'Pharmaceuticals',
      challenge: 'Drug discovery simulations requiring massive computational power',
      solution: 'Deployed quantum machine learning for molecular simulation',
      results: ['1000x faster simulations', '3 new drug candidates identified', '60% reduction in R&D costs'],
      image: '/images/case-studies/pharma-quantum.jpg'
    },
    {
      company: 'LogisticsQuantum',
      industry: 'Logistics',
      challenge: 'Route optimization for global supply chains',
      solution: 'Quantum optimization for complex logistics networks',
      results: ['40% reduction in delivery times', '30% cost savings', '99.9% on-time delivery'],
      image: '/images/case-studies/logistics-quantum.jpg'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-full mb-6">
              <Atom className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300 font-medium">Quantum Cloud Infrastructure</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The Future of Computing is
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Quantum</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Deploy quantum computing resources on cloud infrastructure with unprecedented processing power. 
              Solve complex problems, secure your data, and accelerate innovation with quantum technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-lg">
                <Atom className="w-5 h-5 text-indigo-400" />
                <span className="text-white font-medium">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Multi-Cloud Platform</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">Quantum Security</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-bold hover:bg-indigo-400 hover:text-white transition-all inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quantum Cloud Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive quantum computing infrastructure and services for the next generation of applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <span className="text-sm text-indigo-400 font-medium">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-indigo-400">{service.impact}</div>
                  <div className="text-sm text-gray-400">{service.pricing}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quantum Advantages
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock the power of quantum computing with our advanced cloud infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.impact}</div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Quantum Platform
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your quantum computing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                    : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Quantum Pioneers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what industry leaders say about our quantum cloud infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-indigo-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quantum Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from companies using our quantum cloud infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    {study.company.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-indigo-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-indigo-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Enter the Quantum Era?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution. Start your free trial today and experience the future of computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center">
              <Atom className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-indigo-100">
            <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
            <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumCloudInfrastructurePage;