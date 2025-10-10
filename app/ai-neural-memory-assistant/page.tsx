'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, Calculator, Calendar, Compass, PieChart, TrendingDown, Phone, Mail, MapPin, Memory, Cpu, Layers, Database as DB, FileText, Search, BookOpen, Lightbulb, Target as Crosshair } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AINeuralMemoryAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Persistent Memory System",
      description: "Advanced neural networks that maintain context and learn from every interaction",
      benefits: ["Long-term memory retention", "Contextual understanding", "Continuous learning"]
    },
    {
      icon: Memory,
      title: "Intelligent Recall",
      description: "Instant access to relevant information with AI-powered search and retrieval",
      benefits: ["Instant information access", "Smart search algorithms", "Contextual suggestions"]
    },
    {
      icon: Layers,
      title: "Multi-Layer Processing",
      description: "Deep learning architecture for complex reasoning and problem-solving",
      benefits: ["Complex reasoning", "Pattern recognition", "Advanced problem solving"]
    },
    {
      icon: Cpu,
      title: "Real-Time Processing",
      description: "Lightning-fast neural processing for immediate responses and insights",
      benefits: ["Real-time responses", "High-speed processing", "Low latency"]
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$49",
      period: "per month",
      description: "Perfect for individuals and personal productivity",
      features: [
        "Up to 10GB memory storage",
        "Basic neural processing",
        "Personal assistant features",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for professionals and small teams",
      features: [
        "Up to 100GB memory storage",
        "Advanced neural algorithms",
        "Team collaboration features",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited memory storage",
        "Full neural processing power",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom neural models",
        "White-label solution",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Intelligent document organization and retrieval with natural language queries",
      benefits: ["Smart categorization", "Natural language search", "Automatic tagging"]
    },
    {
      icon: Search,
      title: "Knowledge Base",
      description: "Build and maintain comprehensive knowledge bases with AI-powered insights",
      benefits: ["Knowledge extraction", "Automatic updates", "Smart recommendations"]
    },
    {
      icon: BookOpen,
      title: "Learning Assistant",
      description: "Personalized learning experiences with adaptive content and progress tracking",
      benefits: ["Adaptive learning", "Progress tracking", "Personalized content"]
    },
    {
      icon: Lightbulb,
      title: "Idea Management",
      description: "Capture, organize, and develop ideas with AI-powered brainstorming assistance",
      benefits: ["Idea capture", "Smart organization", "Creative suggestions"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      role: "Research Director",
      company: "NeuralTech Labs",
      content: "The AI Neural Memory Assistant has transformed how we manage research data. Its persistent memory system remembers every detail and provides instant access to relevant information.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "Innovation Corp",
      content: "This is like having a photographic memory that never forgets. The AI remembers every conversation, document, and decision, making it incredibly valuable for complex projects.",
      rating: 5
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Scientist",
      company: "Quantum Research Institute",
      content: "The multi-layer processing capabilities are remarkable. It can handle complex reasoning tasks that would take humans hours to complete.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 cyber-grid-advanced"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-8">
            <Brain className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-medium">AI Neural Memory Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced">
            Never Forget Again
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's most advanced AI with persistent memory. Remember everything, learn continuously, 
            and access information instantly with our revolutionary neural memory system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300">Memory Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Recall Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Revolutionary Memory Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of AI with persistent memory and continuous learning capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-purple-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our neural memory assistant can transform your workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-pink-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Choose Your Memory Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your memory and processing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'border-2 border-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'neon-button-ultra' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Trusted by Memory Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what researchers and professionals say about our neural memory system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-ultra p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
            Ready to Never Forget Again?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who trust our neural memory assistant for their most important information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AINeuralMemoryAssistantPage;