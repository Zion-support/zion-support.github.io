'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Heart, Brain, Users, Shield, Clock, Award, Target, BarChart, Globe, Home, Video, Palette, Code, Music, Camera, Headphones, MessageSquare, Smile, Activity, Zap, Settings, Database, Lock, Eye, Search, FileText } from 'lucide-react';
import Footer from '../components/Footer';

const AIMentalHealthCompanionPage: React.FC = () => {
  const features = [
    "24/7 Emotional Support",
    "Personalized Therapy Sessions",
    "Mood Tracking & Analytics",
    "Crisis Intervention Support",
    "Meditation & Mindfulness",
    "Cognitive Behavioral Therapy",
    "Sleep Quality Monitoring",
    "Stress Management Tools",
    "Progress Tracking",
    "Professional Therapist Network",
    "Privacy & Confidentiality",
    "Multi-language Support"
  ];

  const therapyModules = [
    {
      title: "Anxiety Management",
      icon: Brain,
      description: "Evidence-based techniques to manage anxiety and panic attacks",
      techniques: [
        "Breathing exercises",
        "Progressive muscle relaxation",
        "Cognitive restructuring",
        "Exposure therapy",
        "Mindfulness meditation"
      ]
    },
    {
      title: "Depression Support",
      icon: Heart,
      description: "Comprehensive support for managing depression and low mood",
      techniques: [
        "Behavioral activation",
        "Thought challenging",
        "Activity scheduling",
        "Gratitude practice",
        "Social connection"
      ]
    },
    {
      title: "Stress Relief",
      icon: Activity,
      description: "Tools and techniques to reduce stress and build resilience",
      techniques: [
        "Stress identification",
        "Relaxation techniques",
        "Time management",
        "Boundary setting",
        "Self-care planning"
      ]
    },
    {
      title: "Sleep Improvement",
      icon: Clock,
      description: "Sleep hygiene and techniques for better rest and recovery",
      techniques: [
        "Sleep schedule optimization",
        "Relaxation routines",
        "Sleep environment setup",
        "Sleep restriction therapy",
        "Dream journaling"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Basic Support",
      price: "$19",
      period: "/month",
      description: "Essential mental health support for individuals",
      features: [
        "Daily mood check-ins",
        "Basic meditation library",
        "Mood tracking",
        "Crisis support",
        "Community access",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Therapy Plus",
      price: "$49",
      period: "/month",
      description: "Comprehensive therapy and support for serious mental health needs",
      features: [
        "Unlimited therapy sessions",
        "Personalized treatment plans",
        "Advanced mood analytics",
        "Sleep monitoring",
        "Stress management tools",
        "Priority support",
        "Progress tracking",
        "Therapist matching"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Family Plan",
      price: "$99",
      period: "/month",
      description: "Mental health support for the whole family",
      features: [
        "Up to 6 family members",
        "Individual therapy sessions",
        "Family therapy sessions",
        "Child-specific support",
        "Parenting guidance",
        "Family progress tracking",
        "Dedicated support",
        "Crisis intervention",
        "Educational resources",
        "Custom family plans"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Startup",
      content: "The AI Mental Health Companion has been a lifesaver during my anxiety episodes. The 24/7 support and personalized techniques have helped me manage my mental health much better than traditional therapy alone.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Student",
      company: "University of California",
      content: "As a student dealing with depression, this app provided me with accessible mental health support when I needed it most. The AI companion is surprisingly empathetic and the techniques actually work.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Clinical Psychologist",
      company: "Mental Health Clinic",
      content: "I recommend this AI companion to my patients as a supplement to traditional therapy. The evidence-based techniques and 24/7 availability make it an excellent tool for ongoing mental health support.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const safetyFeatures = [
    { name: "HIPAA Compliant", description: "Full compliance with healthcare privacy regulations", icon: Shield },
    { name: "Crisis Detection", description: "AI-powered crisis intervention and emergency support", icon: AlertTriangle },
    { name: "Professional Oversight", description: "Licensed therapists monitor and guide AI responses", icon: Users },
    { name: "Data Encryption", description: "End-to-end encryption for all personal data", icon: Lock },
    { name: "Anonymous Support", description: "Option for completely anonymous mental health support", icon: Eye },
    { name: "Emergency Contacts", description: "Automatic emergency contact notification when needed", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>AI Mental Health Support</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Mental Health Companion
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Your personal AI companion for mental health support. Available 24/7 with evidence-based 
              therapy techniques, crisis intervention, and personalized care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat Now
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Always Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-400">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">50k+</div>
                <div className="text-gray-400">Lives Improved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">HIPAA</div>
                <div className="text-gray-400">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Modules Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Evidence-Based Therapy Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive mental health support based on proven therapeutic techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapyModules.map((module, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {module.techniques.map((technique, techniqueIndex) => (
                    <div key={techniqueIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {technique}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology combined with proven therapeutic techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Professional-grade mental health support with AI-powered personalization and 24/7 availability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy & Safety Matter
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We prioritize your mental health and privacy with industry-leading security measures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
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
              Mental Health Support Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that's right for you or your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-green-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
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
                      ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from people whose lives have been improved by our AI mental health companion
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
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

      {/* Crisis Support Section */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Crisis Support Available 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you're experiencing a mental health crisis, our AI companion can provide immediate support 
            and connect you with professional help when needed.
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">National Suicide Prevention Lifeline</h4>
                <p className="text-gray-300 mb-2">Call or text 988 for 24/7 crisis support</p>
                <a href="tel:988" className="text-red-400 hover:text-red-300 font-medium">Call 988</a>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Crisis Text Line</h4>
                <p className="text-gray-300 mb-2">Text HOME to 741741 for crisis support</p>
                <a href="sms:741741&body=HOME" className="text-red-400 hover:text-red-300 font-medium">Text HOME to 741741</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              Chat with AI Companion
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIMentalHealthCompanionPage;