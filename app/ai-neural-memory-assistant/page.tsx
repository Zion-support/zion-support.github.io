import React from 'react';
import { Link } from "react-router-dom";
import { Brain, Zap, Users, Shield, CheckCircle, Star, ArrowRight, Eye, Hand, Globe, Sparkles, BookOpen } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AINeuralMemoryAssistantPage = () => {
  const features = [
    {
      title: "Neural Memory Enhancement",
      description: "AI-powered memory augmentation that helps you remember, organize, and recall information with perfect accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Knowledge Management",
      description: "Intelligent knowledge base that learns from your interactions and provides instant access to relevant information",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cognitive Enhancement",
      description: "Advanced cognitive training and memory exercises to improve your mental performance and learning speed",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Personal AI Tutor",
      description: "Your personal AI assistant that adapts to your learning style and helps you master new skills faster",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Perfect memory recall",
    "Intelligent note-taking",
    "Learning acceleration",
    "Knowledge synthesis",
    "Cognitive training",
    "Personal tutoring",
    "Memory visualization",
    "Skill development tracking"
  ];

  const pricingPlans = [
    {
      name: "Memory Starter",
      price: "$149",
      period: "per month",
      description: "Basic memory enhancement and knowledge management for personal use",
      features: [
        "Up to 10GB memory storage",
        "Basic AI tutoring",
        "Note organization",
        "Memory exercises",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Cognitive Pro",
      price: "$299",
      period: "per month",
      description: "Advanced memory enhancement and learning acceleration for professionals",
      features: [
        "Up to 100GB memory storage",
        "Advanced AI tutoring",
        "Knowledge synthesis",
        "Cognitive training programs",
        "Priority support",
        "API access",
        "Custom learning paths"
      ],
      popular: true
    },
    {
      name: "Neural Master",
      price: "$599",
      period: "per month",
      description: "Complete neural enhancement suite for organizations and power users",
      features: [
        "Unlimited memory storage",
        "Personal AI assistant",
        "Advanced cognitive training",
        "24/7 dedicated support",
        "Custom integrations",
        "Team collaboration",
        "Analytics dashboard",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Chen",
      company: "Neuroscience Institute",
      role: "Research Director",
      content: "The neural memory assistant has revolutionized how I process and retain information. My learning speed has increased by 300% and I can recall complex details with perfect accuracy.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      role: "CEO",
      content: "This AI assistant has become my second brain. It helps me remember everything from meeting notes to technical specifications, making me incredibly more productive.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Medical Research Center",
      role: "Lead Researcher",
      content: "The cognitive enhancement features have improved my research capabilities dramatically. I can process complex medical data faster and more accurately than ever before.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Neural Memory Assistant - Enhance Your Cognitive Abilities | Zion Tech Group"
        description="Revolutionary AI-powered memory enhancement and knowledge management system. Boost your cognitive abilities, accelerate learning, and never forget important information again."
        keywords="neural memory, AI memory assistant, cognitive enhancement, knowledge management, learning acceleration, memory training, AI tutoring"
        canonical="https://ziontechgroup.com/ai-neural-memory-assistant"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">300% Learning Acceleration</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Neural Memory Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enhance your cognitive abilities with our revolutionary AI-powered memory assistant. 
            Accelerate learning, perfect recall, and unlock your brain's full potential with intelligent knowledge management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Enhance Your Memory
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BookOpen className="w-5 h-5" />}
            >
              Try Memory Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cognitive Enhancement Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock your brain's full potential with our advanced AI-powered memory and learning enhancement technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cognitive enhancement tools powered by cutting-edge artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Memory Enhancement Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every level of cognitive enhancement and learning needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Enhance My Memory
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Cognitive Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what professionals say about our neural memory enhancement technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Unlock Your Brain's Full Potential
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't let important information slip through the cracks. Join thousands of users who have enhanced 
              their cognitive abilities and accelerated their learning with our AI neural memory assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Start Enhancing Now
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<BookOpen className="w-5 h-5" />}
              >
                Memory Assessment
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AINeuralMemoryAssistantPage;