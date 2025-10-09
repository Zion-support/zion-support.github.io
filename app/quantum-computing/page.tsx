'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cpu as Processor, Brain as Mind, Target as Aim, BarChart as Analytics, TrendingUp as Growth, Shield as Security, Lock as Secure, Database as Storage, Cloud as CloudStorage, Code as Programming, Smartphone as Mobile, Settings as Config, FileText as Document, Search as Find, Bot as Robot, Palette as Colors, Camera as Photo, Music as Audio, Video as Movie, Gamepad2 as Gaming, ShoppingCart as Cart, CreditCard as Payment, Building as Office, Factory as Industrial, Car as Vehicle, Plane as Aircraft, Ship as Vessel, Train as Railway, Home as House, Heart as Love, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Art, Scissors as CutTool, BookOpen as Book, Calculator as Math, Calendar as Schedule, Clock3 as Time, Compass as Direction, Navigation as Nav, PieChart as Chart, TrendingDown as Decline, Activity as Stats, Atom, Zap as Flash, Brain as Mind, Cpu as Processor, Shield as Protection, Globe as World, Users as Team, Award as Trophy, Lock as Secure, Database as Storage, Cloud as CloudStorage, Code as Programming, Smartphone as Mobile, Settings as Config, FileText as Document, Search as Find, Bot as Robot, Palette as Colors, Camera as Photo, Music as Audio, Video as Movie, Gamepad2 as Gaming, ShoppingCart as Cart, CreditCard as Payment, Building as Office, Factory as Industrial, Car as Vehicle, Plane as Aircraft, Ship as Vessel, Train as Railway, Home as House, Heart as Love, Stethoscope as Medical, GraduationCap as Education, Briefcase as Business, Wrench as Tools, Hammer as Construction, Paintbrush as Art, Scissors as CutTool, BookOpen as Book, Calculator as Math, Calendar as Schedule, Clock3 as Time, Compass as Direction, Navigation as Nav, PieChart as Chart, TrendingDown as Decline, Activity as Stats } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for complex problem solving',
      price: 'Included'
    },
    {
      icon: Cpu,
      title: 'Quantum Hardware',
      description: 'Access to cutting-edge quantum computing hardware',
      price: 'Included'
    },
    {
      icon: Brain,
      title: 'Quantum AI',
      description: 'Quantum machine learning and AI optimization',
      price: 'Included'
    },
    {
      icon: Database,
      title: 'Quantum Databases',
      description: 'Quantum-enhanced database systems and queries',
      price: 'Included'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum cryptography and secure communications',
      price: 'Included'
    },
    {
      icon: BarChart,
      title: 'Quantum Analytics',
      description: 'Quantum-powered data analysis and insights',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: 'Custom',
      period: '/month',
      description: 'Perfect for research institutions and universities',
      features: [
        'Basic quantum access',
        'Research support',
        'Academic pricing',
        'Email support',
        'Basic documentation',
        'Community forum'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/month',
      description: 'Ideal for large corporations and government agencies',
      features: [
        'Full quantum access',
        'Dedicated support',
        'Custom solutions',
        'Priority access',
        'Advanced documentation',
        'Training & onboarding',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Government',
      price: 'Custom',
      period: '/month',
      description: 'For government agencies and defense contractors',
      features: [
        'Unlimited quantum access',
        'Classified support',
        'Custom security',
        'Dedicated infrastructure',
        'Compliance tools',
        'White-label solution',
        '24/7 support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const quantumTypes = [
    {
      title: 'Optimization',
      description: 'Solve complex optimization problems with quantum algorithms',
      icon: Target,
      examples: ['Supply chain optimization', 'Portfolio optimization', 'Route planning', 'Resource allocation']
    },
    {
      title: 'Simulation',
      description: 'Simulate complex systems and molecules',
      icon: Atom,
      examples: ['Molecular simulation', 'Material science', 'Drug discovery', 'Climate modeling']
    },
    {
      title: 'Cryptography',
      description: 'Quantum-safe encryption and secure communications',
      icon: Shield,
      examples: ['Quantum key distribution', 'Post-quantum cryptography', 'Secure communications', 'Blockchain security']
    },
    {
      title: 'Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms',
      icon: Brain,
      examples: ['Quantum neural networks', 'Pattern recognition', 'Data classification', 'Predictive modeling']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Next-Generation Computing Power
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Harness the power of quantum computing to solve complex problems that are impossible 
              for classical computers. Access cutting-edge quantum hardware and algorithms.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300">Faster Processing</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Quantum Algorithms</div>
              </div>
              <div className="futuristic-glow neural-pattern p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Quantum Access</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to harness quantum computing power
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-cyan-400">
                <feature.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-cyan-400 font-medium">{feature.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quantum Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Quantum Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive quantum computing solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quantumTypes.map((quantumType, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-cyan-400">
                  <quantumType.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{quantumType.title}</h3>
                  <p className="text-gray-300 mb-4">{quantumType.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {quantumType.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Custom Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Contact us for custom quantum computing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`quantum-card p-8 ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Harness Quantum Power?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your quantum computing needs and get a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingPage;