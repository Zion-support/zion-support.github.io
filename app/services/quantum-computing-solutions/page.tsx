// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Lock, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Globe,
  Settings,
  Database,
  Bot,
  Smartphone,
  Mail,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Layers,
  Wifi,
  Camera,
  Package,
  Truck,
  Brain,
  Cloud
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum Computing Solutions | Zion Tech Group - Next-Gen Computing',
  description: 'Revolutionary quantum computing solutions for optimization, cryptography, drug discovery, and financial modeling. Harness quantum advantage for breakthrough results.',
  keywords: 'quantum computing, quantum algorithms, quantum cryptography, optimization, drug discovery, financial modeling, quantum advantage',
};

export default function QuantumComputingSolutionsPage() {
  const quantumServices = [
    {
      title: 'Quantum Optimization Solutions',
      description: 'Solve complex optimization problems exponentially faster with quantum algorithms',
      icon: Target,
      category: 'Optimization',
      pricing: '$5,000 - $25,000/project',
      delivery: '2-4 weeks',
      features: [
        'Supply chain optimization with quantum annealing',
        'Portfolio optimization for financial institutions',
        'Route optimization for logistics companies',
        'Resource allocation optimization',
        'Quantum-inspired classical algorithms',
        'Hybrid quantum-classical approaches'
      ],
      benefits: [
        'Exponential speedup for certain problem classes',
        'Better solutions than classical methods',
        'Handles millions of variables efficiently',
        'Real-world implementation ready'
      ],
      useCases: [
        'Logistics and transportation optimization',
        'Financial portfolio management',
        'Manufacturing process optimization',
        'Energy grid optimization'
      ],
      link: '/services/quantum-computing-solutions/optimization',
      popularity: 92,
      savings: 'Up to 90% faster computation'
    },
    {
      title: 'Quantum Cryptography & Security',
      description: 'Unbreakable security solutions using quantum key distribution and post-quantum cryptography',
      icon: Shield,
      category: 'Security',
      pricing: '$10,000 - $50,000/project',
      delivery: '4-8 weeks',
      features: [
        'Quantum Key Distribution (QKD) implementation',
        'Post-quantum cryptographic algorithms',
        'Quantum random number generation',
        'Quantum-resistant encryption protocols',
        'Secure quantum communication networks',
        'Quantum authentication systems'
      ],
      benefits: [
        'Theoretically unbreakable encryption',
        'Future-proof security against quantum attacks',
        'Enhanced data protection',
        'Compliance with emerging quantum security standards'
      ],
      useCases: [
        'Government and military communications',
        'Financial institution security',
        'Healthcare data protection',
        'Critical infrastructure security'
      ],
      link: '/services/quantum-computing-solutions/cryptography',
      popularity: 88,
      savings: '100% quantum-resistant security'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Accelerate machine learning with quantum algorithms and quantum neural networks',
      icon: Brain,
      category: 'AI/ML',
      pricing: '$8,000 - $35,000/project',
      delivery: '3-6 weeks',
      features: [
        'Quantum neural network implementation',
        'Quantum support vector machines',
        'Quantum clustering algorithms',
        'Quantum feature mapping',
        'Variational quantum eigensolvers',
        'Quantum generative models'
      ],
      benefits: [
        'Exponential speedup for specific ML tasks',
        'Better pattern recognition capabilities',
        'Reduced computational complexity',
        'Novel learning paradigms'
      ],
      useCases: [
        'Drug discovery and molecular modeling',
        'Financial risk analysis',
        'Image and signal processing',
        'Natural language processing'
      ],
      link: '/services/quantum-computing-solutions/machine-learning',
      popularity: 85,
      savings: 'Up to 1000x speedup for specific tasks'
    },
    {
      title: 'Quantum Financial Modeling',
      description: 'Advanced financial modeling and risk analysis using quantum algorithms',
      icon: BarChart3,
      category: 'Finance',
      pricing: '$15,000 - $75,000/project',
      delivery: '4-10 weeks',
      features: [
        'Monte Carlo simulation acceleration',
        'Portfolio optimization with quantum algorithms',
        'Risk assessment and stress testing',
        'Derivative pricing models',
        'Market prediction algorithms',
        'Fraud detection systems'
      ],
      benefits: [
        'Faster Monte Carlo simulations',
        'More accurate risk assessments',
        'Better portfolio optimization',
        'Real-time market analysis'
      ],
      useCases: [
        'Investment banking',
        'Hedge fund management',
        'Insurance risk modeling',
        'Cryptocurrency analysis'
      ],
      link: '/services/quantum-computing-solutions/financial-modeling',
      popularity: 90,
      savings: 'Up to 100x faster financial calculations'
    },
    {
      title: 'Quantum Drug Discovery',
      description: 'Accelerate pharmaceutical research with quantum molecular simulation',
      icon: Atom,
      category: 'Healthcare',
      pricing: '$20,000 - $100,000/project',
      delivery: '6-12 weeks',
      features: [
        'Quantum molecular dynamics simulation',
        'Protein folding prediction',
        'Drug-target interaction modeling',
        'Quantum chemistry calculations',
        'Material property prediction',
        'Catalyst design optimization'
      ],
      benefits: [
        'Exponentially faster molecular simulations',
        'More accurate drug-target predictions',
        'Reduced R&D costs and time',
        'Novel drug discovery pathways'
      ],
      useCases: [
        'Pharmaceutical R&D',
        'Biotechnology research',
        'Materials science',
        'Chemical engineering'
      ],
      link: '/services/quantum-computing-solutions/drug-discovery',
      popularity: 87,
      savings: 'Up to 10 years reduction in drug development time'
    },
    {
      title: 'Quantum Cloud Computing',
      description: 'Access quantum computing resources through our cloud platform',
      icon: Cloud,
      category: 'Infrastructure',
      pricing: '$500 - $5,000/month',
      delivery: '1-2 weeks',
      features: [
        'Access to multiple quantum hardware providers',
        'Quantum circuit optimization',
        'Hybrid quantum-classical workflows',
        'Real-time quantum job monitoring',
        'Quantum algorithm libraries',
        'Expert quantum consulting'
      ],
      benefits: [
        'No upfront hardware investment',
        'Access to latest quantum technologies',
        'Scalable quantum computing resources',
        'Expert support and guidance'
      ],
      useCases: [
        'Research and development',
        'Proof-of-concept projects',
        'Educational purposes',
        'Startup quantum applications'
      ],
      link: '/services/quantum-computing-solutions/cloud-computing',
      popularity: 78,
      savings: '90% cost reduction vs. building quantum infrastructure'
    }
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$2,500',
      period: '/project',
      description: 'Perfect for proof-of-concept projects',
      features: [
        'Basic quantum algorithm implementation',
        'Access to quantum simulators',
        'Standard quantum circuit optimization',
        'Email support',
        'Basic documentation and tutorials'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$8,500',
      period: '/project',
      description: 'Ideal for production applications',
      features: [
        'Advanced quantum algorithm development',
        'Access to real quantum hardware',
        'Custom quantum circuit design',
        'Priority support',
        'Comprehensive documentation',
        'Performance optimization',
        'Integration with existing systems'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: '$25,000',
      period: '/project',
      description: 'For large-scale quantum initiatives',
      features: [
        'Full quantum computing suite',
        'Custom quantum hardware access',
        'Dedicated quantum engineering team',
        '24/7 support',
        'White-label solutions',
        'Advanced security and compliance',
        'Training and knowledge transfer',
        'Ongoing optimization and maintenance'
      ],
      popular: false
    }
  ];

  const industries = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, and fraud detection',
      icon: CreditCard,
      applications: [
        'High-frequency trading optimization',
        'Credit risk assessment',
        'Monte Carlo simulations',
        'Cryptocurrency analysis'
      ]
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      description: 'Drug discovery, molecular modeling, and treatment optimization',
      icon: Package,
      applications: [
        'Protein folding prediction',
        'Drug-target interaction modeling',
        'Personalized medicine',
        'Medical imaging enhancement'
      ]
    },
    {
      title: 'Logistics & Transportation',
      description: 'Route optimization, supply chain management, and resource allocation',
      icon: Truck,
      applications: [
        'Vehicle routing optimization',
        'Supply chain optimization',
        'Fleet management',
        'Traffic flow optimization'
      ]
    },
    {
      title: 'Energy & Utilities',
      description: 'Grid optimization, renewable energy management, and resource planning',
      icon: Zap,
      applications: [
        'Smart grid optimization',
        'Energy storage optimization',
        'Renewable energy forecasting',
        'Power distribution optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing for optimization, cryptography, drug discovery, 
              and financial modeling. Experience exponential speedups and breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Explore Quantum Solutions
              </Link>
              <Link to="#consultation" 
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive quantum solutions across multiple industries and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Pricing:</span>
                    <span className="font-semibold text-gray-900">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Delivery:</span>
                    <span className="font-semibold text-gray-900">{service.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Popularity:</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${service.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{service.popularity}%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-indigo-800 font-semibold">
                    💡 {service.savings}
                  </p>
                </div>

                <Link to={service.link}
                  className="w-full block text-center bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options for quantum computing projects of any scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-indigo-600 shadow-lg' : 'shadow-md'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quantum computing solutions across diverse industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <industry.icon className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness Quantum Advantage?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join the quantum revolution and solve problems that were previously impossible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Quantum Project
            </Link>
            <Link to="mailto:kleber@ziontechgroup.com" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}