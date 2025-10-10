'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code, Calculator, Calendar, Compass, PieChart, TrendingDown, Phone, Mail, MapPin, Eye, Layers, Cpu, Monitor, Smartphone, Headphones, Camera, Wifi, Bluetooth, Battery } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIHolographicWorkspacePage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "3D Holographic Display",
      description: "Immersive 3D workspace with holographic projections and spatial computing",
      benefits: ["True 3D visualization", "Spatial interaction", "Immersive experience"]
    },
    {
      icon: Layers,
      title: "Multi-Dimensional Interface",
      description: "Work in multiple dimensions with floating panels and 3D data visualization",
      benefits: ["Floating panels", "3D data visualization", "Multi-dimensional workflow"]
    },
    {
      icon: Cpu,
      title: "AI-Powered Navigation",
      description: "Intelligent workspace management with AI-driven organization and optimization",
      benefits: ["Smart organization", "Auto-optimization", "Predictive layouts"]
    },
    {
      icon: Monitor,
      title: "Seamless Integration",
      description: "Connect with all your devices and applications in one unified holographic space",
      benefits: ["Device integration", "App synchronization", "Unified workspace"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$199",
      period: "per month",
      description: "Perfect for creative professionals and designers",
      features: [
        "Basic holographic display",
        "Up to 5 floating panels",
        "Standard 3D tools",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "per month",
      description: "Ideal for teams and advanced users",
      features: [
        "Advanced holographic display",
        "Unlimited floating panels",
        "Full 3D workspace suite",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Premium holographic display",
        "Custom 3D environments",
        "Advanced AI features",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Video,
      title: "3D Design & Modeling",
      description: "Create and manipulate 3D models in a fully immersive holographic environment",
      benefits: ["3D modeling", "Real-time rendering", "Spatial design tools"]
    },
    {
      icon: BarChart,
      title: "Data Visualization",
      description: "Visualize complex data in 3D space with interactive holographic charts and graphs",
      benefits: ["3D data visualization", "Interactive charts", "Spatial analytics"]
    },
    {
      icon: Users,
      title: "Virtual Collaboration",
      description: "Collaborate with team members in shared holographic workspaces",
      benefits: ["Virtual meetings", "Shared workspaces", "Real-time collaboration"]
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Build and train AI models in an immersive 3D development environment",
      benefits: ["3D coding", "Visual AI training", "Immersive debugging"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Chen",
      role: "3D Designer",
      company: "Holographic Studios",
      content: "The AI Holographic Workspace has revolutionized how I design. Working in true 3D space with holographic projections is like nothing I've experienced before.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      role: "Data Scientist",
      company: "Quantum Analytics",
      content: "Visualizing complex datasets in 3D space has given me insights I never would have found with traditional 2D tools. The spatial interaction is incredible.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "VR Developer",
      company: "Immersive Tech",
      content: "This is the future of computing. The AI-powered workspace management and seamless integration make it incredibly powerful for development work.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 cyber-grid-advanced"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-8">
            <Eye className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">AI Holographic Workspace</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-text-enhanced">
            The Future of Work is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Step into the future with our revolutionary AI-powered holographic workspace. 
            Work in true 3D space with immersive holographic projections and spatial computing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">360°</div>
              <div className="text-gray-300">Holographic View</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4K</div>
              <div className="text-gray-300">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">120fps</div>
              <div className="text-gray-300">Refresh Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Revolutionary Holographic Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of computing with immersive holographic interfaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
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
              Discover how holographic technology can revolutionize your work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card-ultra p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Choose Your Holographic Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your holographic workspace needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-ultra p-8 relative ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  plan.popular 
                    ? 'neon-button-ultra' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-cyan-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
              Trusted by Visionaries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what innovators and creators say about our holographic workspace
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
                  <div className="text-cyan-400">{testimonial.role}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-enhanced">
            Ready to Step Into the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the pioneers who are already working in the holographic future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="neon-button-ultra text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIHolographicWorkspacePage;