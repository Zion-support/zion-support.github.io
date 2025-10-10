'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cpu, 
  Atom, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  AlertTriangle,
  ArrowRight,
  Download,
  Upload,
  Settings,
  Bell,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  Eye,
  EyeOff,
  Target,
  BarChart3,
  DollarSign,
  FileText,
  Monitor,
  Coffee,
  Briefcase,
  LineChart,
  TrendingDown,
  Calculator,
  Search,
  Filter,
  RefreshCw,
  Layers,
  CircuitBoard,
  Microscope,
  FlaskConical
} from 'lucide-react';

const AIQuantumComputingSolutions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'Quantum AI Algorithms',
      items: [
        'Quantum machine learning models',
        'Quantum neural networks',
        'Quantum optimization algorithms',
        'Quantum data processing',
        'Quantum error correction',
        'Quantum annealing solutions'
      ]
    },
    {
      category: 'Quantum Computing Infrastructure',
      items: [
        'Quantum cloud access',
        'Quantum simulator environments',
        'Quantum hardware integration',
        'Quantum software development kits',
        'Quantum circuit optimization',
        'Quantum resource management'
      ]
    },
    {
      category: 'Advanced Applications',
      items: [
        'Cryptography and security',
        'Financial modeling and risk analysis',
        'Drug discovery and molecular simulation',
        'Supply chain optimization',
        'Climate modeling and simulation',
        'Artificial intelligence acceleration'
      ]
    },
    {
      category: 'Research & Development',
      items: [
        'Quantum algorithm research',
        'Custom quantum solutions',
        'Quantum software development',
        'Quantum hardware testing',
        'Academic partnerships',
        'Patent and IP development'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for academic research and startups',
      features: [
        'Up to 100 quantum hours/month',
        'Basic quantum algorithms',
        'Quantum simulator access',
        'Research support',
        'Documentation and tutorials',
        'Email support',
        '30-day free trial'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For growing companies and enterprises',
      features: [
        'Everything in Research',
        'Unlimited quantum hours',
        'Advanced quantum algorithms',
        'Quantum hardware access',
        'Custom development',
        'Priority support',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Government',
      price: '$24,999',
      period: '/month',
      description: 'For government agencies and large corporations',
      features: [
        'Everything in Enterprise',
        'On-premise quantum systems',
        'Custom quantum solutions',
        'White-label development',
        '24/7 dedicated support',
        'Security clearance support',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '1000x Speed Improvement',
      description: 'Quantum algorithms solve complex problems exponentially faster'
    },
    {
      icon: Brain,
      title: 'Breakthrough AI',
      description: 'Quantum AI enables previously impossible machine learning tasks'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides ultimate data protection'
    },
    {
      icon: Target,
      title: 'Future-Ready',
      description: 'Stay ahead with cutting-edge quantum technology'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      role: 'Chief Quantum Officer, TechInnovation',
      content: 'AI Quantum Computing Solutions has revolutionized our drug discovery process. We\'ve accelerated molecular simulations by 1000x.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO, FinanceCorp',
      content: 'The quantum optimization algorithms have transformed our portfolio management. We\'ve achieved 40% better risk-adjusted returns.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'Research Director, ClimateTech',
      content: 'Quantum climate modeling has given us unprecedented insights into climate patterns. The accuracy is remarkable.',
      rating: 5
    }
  ];

  const quantumApplications = [
    { name: 'Drug Discovery', speedup: '1000x', icon: FlaskConical },
    { name: 'Financial Modeling', speedup: '500x', icon: DollarSign },
    { name: 'Cryptography', security: 'Unbreakable', icon: Shield },
    { name: 'Optimization', efficiency: '99.9%', icon: Target },
    { name: 'Climate Modeling', accuracy: '95%', icon: Globe },
    { name: 'AI Training', speedup: '100x', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quantum Computing Solutions - Next-Gen Quantum AI | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your business with AI Quantum Computing Solutions. Quantum machine learning, optimization, and cryptography. 1000x speed improvement guaranteed." />
        <meta name="keywords" content="quantum computing, quantum AI, quantum machine learning, quantum cryptography, quantum optimization, quantum algorithms" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-quantum-computing-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum-Powered AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your business with quantum-powered artificial intelligence. 
              Achieve 1000x speed improvements with quantum machine learning, optimization, and cryptography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Quantum Applications */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {quantumApplications.map((app, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <app.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-lg font-semibold text-white mb-1">{app.name}</div>
                <div className="text-sm text-green-400 font-medium">
                  {app.speedup || app.security || app.efficiency || app.accuracy}
                </div>
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
              Revolutionary Quantum AI Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing to solve the most complex problems in AI and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Grade Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your quantum computing needs. All plans include 30-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-purple-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Quantum Computing Solutions?
            </h2>
            <p className="text-xl text-gray-300">
              Join leading organizations who trust our quantum AI for their most complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Quantum Leaders
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Quantum Computing Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Enter the Quantum Era?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 100+ organizations who trust AI Quantum Computing Solutions for their most complex challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions about our quantum AI platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumComputingSolutions;