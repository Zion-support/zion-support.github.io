'use client';
import React from 'react';
import { Cpu, Brain, Zap, Shield, Database, Target, ArrowRight, CheckCircle, Lock, Search, CreditCard, Stethoscope, Clock3, Navigation, Zap, Target, Shield, CheckCircle, ArrowRight, Truck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIQuantumComputingPage: React.FC = () => {
  const features = [
    {
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
      icon: Zap
    },
    {
      metric: '99.9%',
      description: 'Security improvement over classical encryption',
      icon: Shield
    },
    {
      metric: '50%',
      description: 'Reduction in computational time for simulations',
      icon: Clock3
    },
    {
      metric: '10 x',
      description: 'Better accuracy in pattern recognition',
      icon: Target
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$2,999/month',
      description: 'For research institutions and startups',
      features: [
        'Up to 10 quantum algorithms',
        'Basic quantum simulation',
        'Standard optimization',
        'Email support',
        'Cloud quantum access',
        'Documentation & tutorials'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$9,999/month',
      description: 'For enterprises and advanced research',
      features: [
        'Unlimited quantum algorithms',
        'Advanced quantum simulation',
        'Custom optimization solutions',
        'Priority support',
        'Dedicated quantum hardware',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      description: 'For large-scale quantum computing needs',
      features: [
        'Custom quantum algorithms',
        'On-premise quantum hardware',
        'Dedicated quantum team',
        '24/7 support',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting',
        'Quantum consulting services'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="pt-24 pb-16 px-4"></sectio>
        <div className="container mx-auto max-w-6 xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Cpu className="w-4 h-4" /></Cp>
              <<<<span>Next</span></span>-Generation Quantum AI</span>
            </div>
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6"></h1></<<<h1>AI</h1></<<h1>Quantum</h1> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span></<<<span>Computing</span></span><p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Harness the power of quantum computing with AI to solve complex problems that are impossible for classical computers.</p></<<<p>Experience</p></<<p>exponential</p> speedup and breakthrough capabilities.</p>
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
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <advantage.icon className="w-8 h-8 text-cyan-400" /></advantag>
                <div className="text-3 xl font-bold text-cyan-400 mb-2"></div>{advantage.metric}<div className="text-gray-300">{advantage.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4"></sectio>
        <div className="container mx-auto max-w-6 xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Revolutionary</h2></<<h2>Quantum</h2> AI Features<p className="text-xl text-gray-300 max-w-3 xl mx-auto">Our quantum computing platform combines the power of quantum mechanics with artificial intelligence</p></<<<p>to</p></<<p>deliver</p> unprecedented computational capabilities.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" /></featur>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h>
                <p className="text-gray-300 mb-4"></p>{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</u>
                    <li key={idx} className="flex items-center text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30"></sectio>
        <div className="container mx-auto max-w-6 xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Quantum</h2></<<h2>AI</h2> Applications<p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Discover</p></<<p>how</p> quantum AI is transforming industries and solving previously impossible problems.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" /></ap>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h>
                <p className="text-gray-300 mb-4"></p>{app.description}<div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Targe>
                    </Target>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></sectio>
        <div className="container mx-auto max-w-6 xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Quantum</h2></<<h2>Computing</h2> Plans<p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p></<<<p>Access</p></<<p>cutting</p>-edge quantum computing resources with flexible pricing options.<div className="grid md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</spa>
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<div className="text-4 xl font-bold text-cyan-400 mb-2"></div>{plan.price}<p className="text-gray-300"></p>{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</u>
                    <li key={idx} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30"></sectio>
        <div className="container mx-auto max-w-4 xl text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Experience Quantum AI?<p className="text-xl text-gray-300 mb-8">Join the quantum revolution and unlock the power of quantum computing with AI.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Quantum Journey</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Consultation</a>
            </a>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AIQuantumComputingPage;