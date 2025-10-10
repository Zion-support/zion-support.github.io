'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Home, Zap, Settings, Shield, Clock, Award, Target, BarChart, Globe, Heart, Video, Palette, Code, Music, Camera, Headphones, MessageSquare, Smile, Activity, Brain, Users, Database, Lock, Eye, Search, FileText, Wifi, Thermometer, Lightbulb, Volume2, Camera as CameraIcon, Lock as LockIcon, Sun, Moon, Cloud, Snowflake } from 'lucide-react';
import Footer from '../components/Footer';

const AISmartHomeControllerPage: React.FC = () => {
  const features = [
    "Voice Control Integration",
    "Automated Routines",
    "Energy Optimization",
    "Security Monitoring",
    "Climate Control",
    "Lighting Management",
    "Appliance Control",
    "Motion Detection",
    "Remote Access",
    "Energy Usage Analytics",
    "Custom Automation Rules",
    "Multi-Device Integration"
  ];

  const deviceCategories = [
    {
      title: "Lighting Control",
      icon: Lightbulb,
      description: "Smart lighting with color control, scheduling, and automation",
      devices: [
        "Smart bulbs and switches",
        "Color-changing LEDs",
        "Dimmer controls",
        "Motion-activated lights",
        "Sunrise/sunset automation"
      ]
    },
    {
      title: "Climate Management",
      icon: Thermometer,
      description: "Intelligent temperature and humidity control",
      devices: [
        "Smart thermostats",
        "HVAC systems",
        "Air purifiers",
        "Humidity sensors",
        "Zone-based control"
      ]
    },
    {
      title: "Security Systems",
      icon: Shield,
      description: "Comprehensive home security and monitoring",
      devices: [
        "Smart door locks",
        "Security cameras",
        "Motion sensors",
        "Door/window sensors",
        "Alarm systems"
      ]
    },
    {
      title: "Entertainment",
      icon: Volume2,
      description: "Audio and video entertainment control",
      devices: [
        "Smart speakers",
        "TV and streaming devices",
        "Multi-room audio",
        "Gaming consoles",
        "Projectors"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter Home",
      price: "$29",
      period: "/month",
      description: "Perfect for apartments and small homes",
      features: [
        "Up to 20 devices",
        "Basic automation",
        "Voice control",
        "Mobile app access",
        "Basic security",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Smart Home",
      price: "$79",
      period: "/month",
      description: "Ideal for medium-sized homes with advanced features",
      features: [
        "Up to 50 devices",
        "Advanced automation",
        "AI learning",
        "Energy optimization",
        "Security monitoring",
        "Priority support",
        "Custom routines",
        "Multi-user access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Smart Mansion",
      price: "$199",
      period: "/month",
      description: "For large homes and estates with premium features",
      features: [
        "Unlimited devices",
        "Premium automation",
        "AI concierge",
        "Advanced analytics",
        "Professional monitoring",
        "Dedicated support",
        "Custom integrations",
        "White-label solution",
        "SLA guarantee",
        "On-site installation"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Robert Johnson",
      role: "Homeowner",
      company: "Suburban Residence",
      content: "The AI Smart Home Controller has transformed our daily routines. Everything from lighting to temperature is perfectly automated, and the energy savings have been incredible. We've reduced our electricity bill by 40%.",
      rating: 5,
      avatar: "RJ"
    },
    {
      name: "Lisa Chen",
      role: "Tech Professional",
      company: "Silicon Valley",
      content: "As someone who works from home, having an intelligent home system that adapts to my schedule is amazing. The AI learns my patterns and creates the perfect environment for productivity and relaxation.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "Michael Rodriguez",
      role: "Family Man",
      company: "Family of Five",
      content: "With three kids, managing our home was chaotic. The AI controller handles everything from morning routines to bedtime, and the security features give us peace of mind when we're away.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const automationScenarios = [
    {
      title: "Good Morning Routine",
      icon: Sun,
      description: "Wake up to a perfectly orchestrated morning",
      actions: [
        "Lights gradually brighten",
        "Temperature adjusts to comfortable level",
        "Coffee maker starts brewing",
        "News briefing plays on speakers",
        "Blinds open automatically"
      ]
    },
    {
      title: "Away Mode",
      icon: LockIcon,
      description: "Secure your home when you're away",
      actions: [
        "All lights turn off",
        "Security system activates",
        "Temperature adjusts for energy savings",
        "Cameras start monitoring",
        "Door locks engage"
      ]
    },
    {
      title: "Movie Night",
      icon: Video,
      description: "Create the perfect entertainment environment",
      actions: [
        "Lights dim to theater level",
        "TV and sound system power on",
        "Temperature adjusts for comfort",
        "Phone notifications silenced",
        "Snack bar lights activate"
      ]
    },
    {
      title: "Sleep Mode",
      icon: Moon,
      description: "Wind down for a restful night",
      actions: [
        "Lights gradually dim",
        "Temperature drops for sleep",
        "Security system arms",
        "White noise or music plays",
        "All non-essential devices power down"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              <span>Smart Home Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Smart Home Controller
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your home into an intelligent ecosystem with AI-powered automation, 
              energy optimization, and seamless device control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-gray-400">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-400">Device Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50k+</div>
                <div className="text-gray-400">Happy Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Categories Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Home Control
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage every aspect of your home with intelligent device integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deviceCategories.map((category, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.devices.map((device, deviceIndex) => (
                    <div key={deviceIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {device}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Scenarios Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Automation Scenarios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pre-built automation routines that adapt to your lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationScenarios.map((scenario, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                    <scenario.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
                    <p className="text-gray-300">{scenario.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {scenario.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Smart Home Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI technology that learns and adapts to your preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Intelligent home automation with AI-powered optimization and seamless device integration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Home Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your home size and automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-blue-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Home Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI controller has transformed homes around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Home Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial and experience the future of home automation. 
            No installation required, works with your existing devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Questions? Contact us at <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
            <p>or email <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISmartHomeControllerPage;