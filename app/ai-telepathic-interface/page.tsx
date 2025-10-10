'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, Calculator, Calendar, Compass, PieChart, TrendingDown, Phone, Mail, MapPin, MessageSquare, Headphones, Mic, Eye, Cpu, Layers } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AITelepathicInterfacePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interface for seamless thought-to-action communication",
      benefits: ["Thought control", "Neural feedback", "Direct communication"]
    },
    {
      icon: MessageSquare,
      title: "Telepathic Communication",
      description: "Send and receive messages through pure thought with AI-powered translation",
      benefits: ["Silent communication", "Instant messaging", "Multi-language support"]
    },
    {
      icon: Eye,
      title: "Visual Thought Processing",
      description: "Convert mental images and visualizations into digital content instantly",
      benefits: ["Image generation", "Visual thinking", "Creative expression"]
    },
    {
      icon: Cpu,
      title: "AI Mind Integration",
      description: "Seamless integration with AI systems through direct neural pathways",
      benefits: ["AI collaboration", "Enhanced cognition", "Superhuman capabilities"]
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$399",
      period: "per month",
      description: "Perfect for early adopters and researchers",
      features: [
        "Basic neural interface",
        "Simple thought commands",
        "Limited AI integration",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for professionals and advanced users",
      features: [
        "Advanced neural interface",
        "Full telepathic communication",
        "Complete AI integration",
        "Priority support",
        "API access",
        "Custom neural models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,599",
      period: "per month",
      description: "Comprehensive solution for organizations",
      features: [
        "Premium neural interface",
        "Team telepathic networks",
        "Advanced AI collaboration",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Neural security suite"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable instant telepathic communication between team members",
      benefits: ["Silent meetings", "Instant coordination", "Enhanced productivity"]
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Code directly with AI through thought-based programming",
      benefits: ["Thought coding", "AI pair programming", "Faster development"]
    },
    {
      icon: Video,
      title: "Creative Production",
      description: "Create content directly from mental visualizations",
      benefits: ["Mental storyboarding", "Visual creation", "Creative flow"]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Secure neural communication with advanced encryption",
      benefits: ["Encrypted thoughts", "Privacy protection", "Secure channels"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Neuroscientist",
      company: "Future Mind Labs",
      content: "The AI Telepathic Interface has revolutionized how we think about human-computer interaction. It's like having a direct connection to the digital world.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "Neural Tech Corp",
      content: "Coding with my thoughts has made development incredibly intuitive. The AI understands my intentions perfectly and helps me build faster than ever.",
      rating: 5
    },
    {
      name: "Elena Watson",
      role: "Creative Director",
      company: "Imagination Studios",
      content: "This technology has unlocked new levels of creativity. I can visualize and create content directly from my imagination without any barriers.",
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
            <span className="text-purple-400 font-medium">AI Telepathic Interface</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced">
            Think It, Do It
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's first AI-powered telepathic interface. Control computers, communicate with AI, 
            and create content directly through thought with our revolutionary neural technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0ms</div>
              <div className="text-gray-300">Thought Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Revolutionary Neural Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of human-computer interaction with direct neural interfaces
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
              Transform Your Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how telepathic interfaces can revolutionize your work and creativity
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
              Choose Your Neural Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your telepathic interface needs
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
              Trusted by Pioneers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what researchers and innovators say about our telepathic interface
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
            Ready to Think the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the pioneers who are already communicating with AI through pure thought
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Journey
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

export default AITelepathicInterfacePage;