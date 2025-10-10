'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
=======
      icon: Cpu,
      title: 'Quantum AI Algorithms',
      description: 'Advanced quantum machine learning algorithms that leverage quantum superposition and entanglement for exponential computational speedup.',
      benefits: ['Exponential speedup', 'Quantum advantage', 'Parallel processing', 'Optimization solutions']
    },
    {
      icon: Brain,
      title: 'Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks that process information using quantum states for superior pattern recognition and learning.',
      benefits: ['Quantum learning', 'Enhanced accuracy', 'Faster training', 'Complex pattern recognition']
    },
    {
      icon: Zap,
      title: 'Quantum Optimization',
      description: 'Quantum annealing and variational algorithms for solving complex optimization problems in logistics, finance, and research.',
      benefits: ['NP-hard problem solving', 'Global optimization', 'Real-time solutions', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Quantum key distribution and quantum-resistant encryption for ultra-secure communication and data protection.',
      benefits: ['Unbreakable security', 'Quantum key distribution', 'Future-proof encryption', 'Secure communication']
    },
    {
      icon: Database,
      title: 'Quantum Database Search',
      description: 'Grover\'s algorithm implementation for searching unsorted databases with quadratic speedup over classical methods.',
      benefits: ['Quadratic speedup', 'Faster searches', 'Database optimization', 'Information retrieval']
    },
    {
      icon: Target,
      title: 'Quantum Simulation',
      description: 'Quantum simulation of complex systems for drug discovery, materials science, and climate modeling.',
      benefits: ['Molecular simulation', 'Drug discovery', 'Materials design', 'Climate modeling']
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading.',
      icon: CreditCard,
      useCases: ['Portfolio optimization', 'Risk assessment', 'Algorithmic trading', 'Fraud detection']
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum simulation for molecular modeling and pharmaceutical research.',
      icon: Stethoscope,
      useCases: ['Molecular simulation', 'Drug design', 'Protein folding', 'Chemical reactions']
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Quantum optimization for complex routing and supply chain management.',
      icon: Truck,
      useCases: ['Route optimization', 'Inventory management', 'Supply chain planning', 'Resource allocation']
    },
    {
      title: 'Climate Science',
      description: 'Quantum simulation for climate modeling and environmental research.',
      icon: Globe,
      useCases: ['Climate modeling', 'Weather prediction', 'Carbon capture', 'Renewable energy']
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant cryptography and quantum key distribution.',
      icon: Lock,
      useCases: ['Quantum encryption', 'Secure communication', 'Data protection', 'Identity verification']
    },
    {
      title: 'Artificial Intelligence',
      description: 'Quantum-enhanced machine learning and AI algorithms.',
      icon: Brain,
      useCases: ['Quantum ML', 'Pattern recognition', 'Optimization', 'Neural networks']
    }
  ];

  const quantumAdvantages = [
    {
      metric: '1000 x',
      description: 'Faster optimization for complex problems',
      icon: Zap,
    },
    {
      metric: '99.9%',
      description: 'Security improvement over classical encryption',
      icon: Shield,
    },
    {
      metric: '50%',
      description: 'Reduction in computational time for simulations',
      icon: Clock3,
    },
    {
      metric: '10 x',
      description: 'Better accuracy in pattern recognition',
      icon: Target,
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$2,999/month',
      description: 'For research institutions and startups',
      features: [,
        'Up to 10 quantum algorithms',
        'Basic quantum simulation',
        'Standard optimization',
        'Email support',
        'Cloud quantum access',
        'Documentation & tutorials'
      ],
      popular: false,
    },
    {
      name: 'Quantum Professional',
      price: '$9,999/month',
      description: 'For enterprises and advanced research',
      features: [,
        'Unlimited quantum algorithms',
        'Advanced quantum simulation',
        'Custom optimization solutions',
        'Priority support',
        'Dedicated quantum hardware',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true,
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      description: 'For large-scale quantum computing needs',
      features: [,
        'Custom quantum algorithms',
        'On-premise quantum hardware',
        'Dedicated quantum team',
        '24/7 support',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting',
        'Quantum consulting services'
      ],
      popular: false,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Cpu className="w-4 h-4" />
              <span>Next-Generation Quantum AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              AI Quantum</h1> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Harness the power of quantum computing with AI to solve complex problems that are impossible for classical computers.</p>
              Experience exponential speedup and breakthrough capabilities.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">Explore Quantum AI</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Demo</a>
              </a>
            </div>
          </div>

          {/* Quantum Advantages */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">{quantumAdvantages.map((advantage, index) => (</div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"></h1>
              AI Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Explore Quantum AI;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                Schedule Demo;
              </a>
            </div>,
          </div>)
)
          {/* Quantum Advantages */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">),
            {quantumAdvantages.map((advantage, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <advantage.icon className="w-8 h-8 text-cyan-400" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{advantage.metric}</div><div className="text-gray-300">{advantage.description}</div>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
=======
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Quantum AI Features<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our quantum computing platform combines the power of quantum mechanics with artificial intelligence</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Quantum AI Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our quantum computing platform combines the power of quantum mechanics with artificial intelligence</p>
              to deliver unprecedented computational capabilities.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Quantum AI Features;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum AI Applications<p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how quantum AI is transforming industries and solving previously impossible problems.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum AI Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how quantum AI is transforming industries and solving previously impossible problems.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum AI Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum AI is transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <app.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p><div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Target>
                    </Target>
                  ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
=======
      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Plans<p className="text-xl text-gray-300 max-w-3xl mx-auto">Access cutting-edge quantum computing resources with flexible pricing options.<div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Access cutting-edge quantum computing resources with flexible pricing options.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Computing Plans;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>Get Started</a>
                  plan.popular;
                    ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'}
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}
                }`}>
                  Get Started;
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
=======
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Quantum AI?</h2><p className="text-xl text-gray-300 mb-8">Join the quantum revolution and unlock the power of quantum computing with AI.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Quantum Journey</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Consultation</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Quantum Journey;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Consultation;
            </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;