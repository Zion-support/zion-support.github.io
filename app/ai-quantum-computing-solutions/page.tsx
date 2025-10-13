import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award, Cloud, Code, Database, Mail, Clock, DollarSign, Globe, Monitor, FileText, MessageSquare, TrendingUp, Target, Settings, Brain, Eye, Heart, Layers, Mic, Video, Image, Calculator, Atom, CircuitBoard, Cpu as Quantum } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIQuantumComputingSolutionsPage = () => {
  const services = [
    {
      id: 'quantum-ai-optimization',
      title: 'Quantum AI Optimization Engine',
      description: 'Revolutionary quantum-powered AI that solves complex optimization problems 1000x faster than classical computers.',
      icon: Quantum,
      features: ['Quantum Speedup', 'Complex Optimization', 'Real-time Processing', 'Exponential Performance'],
      price: 'Starting at $2,999/month',
      category: 'Quantum AI',
      rating: 4.9,
      reviews: 156,
      featured: true
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning Platform',
      description: 'Advanced quantum machine learning algorithms for pattern recognition and data analysis with unprecedented accuracy.',
      icon: Brain,
      features: ['Quantum ML Algorithms', 'Pattern Recognition', 'Data Analysis', 'Superior Accuracy'],
      price: 'Starting at $1,999/month',
      category: 'Quantum ML',
      rating: 4.8,
      reviews: 234,
      featured: true
    },
    {
      id: 'quantum-cryptography',
      title: 'Quantum Cryptography Suite',
      description: 'Unbreakable quantum encryption and secure communication systems using quantum key distribution.',
      icon: Shield,
      features: ['Quantum Key Distribution', 'Unbreakable Encryption', 'Secure Communication', 'Future-Proof Security'],
      price: 'Starting at $3,499/month',
      category: 'Quantum Security',
      rating: 4.9,
      reviews: 189,
      featured: true
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation Environment',
      description: 'Advanced quantum simulation platform for molecular modeling, drug discovery, and material science.',
      icon: Atom,
      features: ['Molecular Modeling', 'Drug Discovery', 'Material Science', 'Quantum Simulation'],
      price: 'Starting at $4,999/month',
      category: 'Quantum Simulation',
      rating: 4.9,
      reviews: 98,
      featured: true
    },
    {
      id: 'quantum-finance',
      title: 'Quantum Financial Modeling',
      description: 'Quantum algorithms for portfolio optimization, risk assessment, and high-frequency trading.',
      icon: BarChart3,
      features: ['Portfolio Optimization', 'Risk Assessment', 'High-Frequency Trading', 'Quantum Algorithms'],
      price: 'Starting at $2,499/month',
      category: 'Quantum Finance',
      rating: 4.8,
      reviews: 145,
      featured: false
    },
    {
      id: 'quantum-logistics',
      title: 'Quantum Logistics Optimizer',
      description: 'Quantum-powered supply chain optimization and route planning for maximum efficiency.',
      icon: Globe,
      features: ['Supply Chain Optimization', 'Route Planning', 'Logistics Efficiency', 'Quantum Algorithms'],
      price: 'Starting at $1,799/month',
      category: 'Quantum Logistics',
      rating: 4.7,
      reviews: 167,
      featured: false
    }
  ];

  const capabilities = [
    {
      title: 'Quantum Supremacy',
      description: 'Achieve computational advantages impossible with classical computers',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Entanglement',
      description: 'Leverage quantum entanglement for instant information transfer',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Interference',
      description: 'Use quantum interference for enhanced computational power',
      icon: <CircuitBoard className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Tunneling',
      description: 'Exploit quantum tunneling for breakthrough problem solving',
      icon: <Quantum className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: "Quantum Qubits", value: "1000+", icon: Quantum },
    { label: "Speed Improvement", value: "1000x", icon: Zap },
    { label: "Accuracy Rate", value: "99.9%", icon: Star },
    { label: "Uptime", value: "99.99%", icon: Shield }
  ];

  const testimonials = [
    {
      name: "Dr. Elena Rodriguez",
      company: "Quantum Research Labs",
      role: "Chief Quantum Scientist",
      content: "The Quantum AI Optimization Engine has revolutionized our research. We've achieved breakthroughs that would have taken years with classical computing.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "James Chen",
      company: "Global Financial Corp",
      role: "CTO",
      content: "Quantum Financial Modeling has given us unprecedented insights into market behavior. Our trading algorithms are now 1000x more efficient.",
      rating: 5,
      avatar: "JC"
    },
    {
      name: "Dr. Sarah Kim",
      company: "Pharmaceutical Innovations",
      role: "Research Director",
      content: "The Quantum Simulation Environment has accelerated our drug discovery process by 100x. We're developing life-saving treatments faster than ever.",
      rating: 5,
      avatar: "SK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Quantum Computing Solutions - Zion Tech Group | Next-Generation Quantum AI"
        description="Revolutionary AI quantum computing solutions for optimization, machine learning, cryptography, and simulation. Experience the power of quantum AI technology."
        keywords="quantum computing, quantum AI, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation, quantum algorithms"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing combined with artificial intelligence to solve 
              the most complex problems with unprecedented speed and accuracy.
            </p>
            <FuturisticButton
              href="#services"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Explore Quantum AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <FuturisticCard key={index} className="text-center p-6">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Quantum Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary quantum technologies that redefine what's possible in computing
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center`}>
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-300">
                  {capability.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge quantum AI solutions for the most demanding computational challenges
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <FuturisticCard key={service.id} className="p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 font-bold text-lg">{service.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  <Link
                    to={`/${service.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how quantum AI is transforming industries and solving impossible problems
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Quantum Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                Schedule Quantum Demo
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIQuantumComputingSolutionsPage;
