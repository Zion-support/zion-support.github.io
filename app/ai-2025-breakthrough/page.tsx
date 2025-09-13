'use client';

import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import { 
  ArrowLeft, 
  Brain, 
  Zap, 
  Target, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  Globe,
  CheckCircle,
  Star,
  Rocket
} from 'lucide-react';

export default function AI2025BreakthroughPage() {
  const breakthroughFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "Neural Architecture Revolution",
      description: "Our AI system uses a completely new neural architecture that mimics human brain patterns while processing information 1000x faster than traditional systems.",
      benefits: [
        "Human-like reasoning capabilities",
        "Real-time learning and adaptation",
        "Emotional intelligence integration",
        "Creative problem solving"
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Quantum Processing Integration",
      description: "Revolutionary quantum computing integration that enables our AI to solve problems previously thought impossible, with exponential speed improvements.",
      benefits: [
        "Exponential processing power",
        "Quantum encryption security",
        "Parallel universe calculations",
        "Instant complex problem solving"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: "Precision Decision Making",
      description: "Advanced decision-making algorithms that achieve 99.99% accuracy across all scenarios, from simple choices to complex strategic planning.",
      benefits: [
        "Perfect accuracy in decisions",
        "Risk assessment optimization",
        "Predictive outcome modeling",
        "Strategic planning excellence"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Advanced Security Framework",
      description: "Military-grade security protocols that protect your data and operations with quantum-level encryption and threat detection.",
      benefits: [
        "Quantum encryption protection",
        "Real-time threat detection",
        "Zero-trust architecture",
        "Compliance automation"
      ]
    }
  ];

  const impactStats = [
    { label: "Productivity Increase", value: "300%", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Cost Reduction", value: "75%", icon: <Target className="w-8 h-8" /> },
    { label: "Error Rate", value: "0.01%", icon: <CheckCircle className="w-8 h-8" /> },
    { label: "Global Adoption", value: "200+", icon: <Globe className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      company: "TechVision Corp",
      content: "This breakthrough represents the most significant advancement in AI technology since the invention of neural networks. It's truly revolutionary.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      company: "FutureLabs Inc",
      content: "We've seen a 400% improvement in our operational efficiency since implementing this AI system. The results are beyond our wildest expectations.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Innovation",
      company: "DataFlow Systems",
      content: "The precision and speed of decision-making is incredible. This AI doesn't just assist us—it transforms how we think about problem-solving.",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <SEO
        title="AI 2025 Revolutionary Breakthrough - Zion Tech Group"
        description="Discover the most advanced AI breakthrough of 2025. Revolutionary neural architecture, quantum processing, and precision decision-making that's transforming industries worldwide."
        keywords="AI breakthrough 2025, neural architecture, quantum computing, artificial intelligence, machine learning, automation"
        url="/ai-2025-breakthrough"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-5 h-5 mr-2" />
              REVOLUTIONARY BREAKTHROUGH 2025
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI That Changes
              </span>
              <br />
              <span className="text-5xl md:text-7xl">Everything</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-200 max-w-5xl mx-auto mb-8 leading-relaxed">
              Experience the most advanced artificial intelligence system ever created. 
              Our revolutionary breakthrough technology is already transforming industries 
              and reshaping the future of human-AI collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                href="/demo" 
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Rocket className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Watch Live Demo
                <ArrowLeft className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Users className="mr-3 w-6 h-6" />
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breakthrough Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Revolutionary Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the breakthrough technologies that make our AI system the most advanced ever created
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {breakthroughFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl mr-6">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Proven Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from companies already using our revolutionary AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Industry Leaders Trust Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the experts who are already experiencing the revolutionary impact of our AI breakthrough
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-blue-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-16 backdrop-blur-sm border border-white/20">
            <h2 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join the AI revolution and be among the first to experience this groundbreaking technology. 
              The future of artificial intelligence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/demo" 
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-xl rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Rocket className="mr-3 w-6 h-6" />
                Schedule Your Demo
                <ArrowLeft className="ml-3 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-12 py-6 border-2 border-green-400 text-green-300 font-bold text-xl rounded-xl hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <Users className="mr-3 w-6 h-6" />
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}