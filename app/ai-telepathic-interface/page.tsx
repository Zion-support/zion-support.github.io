import React from 'react';
import { Link } from "react-router-dom";
import { Brain, Zap, Users, Shield, CheckCircle, Star, ArrowRight, Eye, Hand, Globe, Sparkles, MessageCircle } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AITelepathicInterfacePage = () => {
  const features = [
    {
      title: "Direct Neural Communication",
      description: "Revolutionary brain-computer interface enabling direct thought-to-text and thought-to-action communication",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Mind-to-Mind Connection",
      description: "Enable direct communication between human minds through AI-powered neural translation and amplification",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Thought Enhancement",
      description: "Amplify cognitive abilities and enable complex thought processing with AI-powered neural enhancement",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Secure Neural Network",
      description: "Advanced encryption and privacy protection for all neural communications and data transmission",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Thought-to-text conversion",
    "Mind-to-mind communication",
    "Neural data encryption",
    "Cognitive enhancement",
    "Telepathic messaging",
    "Neural privacy protection",
    "AI thought translation",
    "Brain activity monitoring"
  ];

  const pricingPlans = [
    {
      name: "Neural Starter",
      price: "$799",
      period: "per month",
      description: "Basic telepathic interface for personal communication and thought enhancement",
      features: [
        "Basic thought-to-text",
        "Simple mind messaging",
        "Neural privacy protection",
        "Email support",
        "Mobile app access",
        "1,000 neural interactions/month"
      ],
      popular: false
    },
    {
      name: "Telepathic Pro",
      price: "$1,499",
      period: "per month",
      description: "Advanced telepathic communication for professionals and teams",
      features: [
        "Advanced thought processing",
        "Group mind communication",
        "AI thought enhancement",
        "Priority support",
        "API access",
        "10,000 interactions/month",
        "Custom neural models"
      ],
      popular: true
    },
    {
      name: "Neural Master",
      price: "$2,999",
      period: "per month",
      description: "Complete telepathic interface suite for organizations and power users",
      features: [
        "Full telepathic capabilities",
        "Enterprise mind networks",
        "Advanced AI enhancement",
        "24/7 dedicated support",
        "Unlimited interactions",
        "On-premise deployment",
        "Custom integrations",
        "Neural consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Neural Research Institute",
      role: "Director of Brain-Computer Interfaces",
      content: "The telepathic interface has revolutionized human communication. We can now share complex thoughts and ideas directly, creating unprecedented levels of understanding and collaboration.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "Future Tech Corp",
      role: "CEO",
      content: "This technology has transformed how our team communicates. Complex technical concepts that used to take hours to explain can now be shared instantly through direct thought transmission.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Medical Research Center",
      role: "Lead Neuroscientist",
      content: "The neural enhancement capabilities are extraordinary. Our research team can process complex medical data and share insights at the speed of thought, accelerating breakthrough discoveries.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Telepathic Interface - Direct Neural Communication | Zion Tech Group"
        description="Revolutionary AI-powered telepathic interface enabling direct mind-to-mind communication. Experience thought-to-text conversion, neural enhancement, and secure brain-computer interaction."
        keywords="telepathic interface, neural communication, brain-computer interface, thought-to-text, mind-to-mind communication, neural enhancement, BCI technology"
        canonical="https://ziontechgroup.com/ai-telepathic-interface"
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
            <span className="text-cyan-400 text-sm font-medium">Revolutionary Neural Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Telepathic Interface
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of human communication with our revolutionary AI-powered telepathic interface. 
            Enable direct mind-to-mind communication, thought-to-text conversion, and neural enhancement technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Connect Your Mind
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Try Telepathic Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Neural Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the next evolution of human communication with our cutting-edge telepathic interface technology.
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
              Advanced Neural Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive telepathic communication tools powered by advanced artificial intelligence and neural technology.
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
              Choose Your Neural Interface Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every level of telepathic communication and neural enhancement needs.
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
                  Connect Your Mind
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
              Trusted by Neural Pioneers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what researchers and professionals say about our telepathic interface technology.
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
              Enter the Age of Telepathic Communication
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the neural revolution and experience the future of human communication. 
              Our telepathic interface technology enables direct mind-to-mind connection and unprecedented levels of understanding.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Connect Now
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                Neural Assessment
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AITelepathicInterfacePage;