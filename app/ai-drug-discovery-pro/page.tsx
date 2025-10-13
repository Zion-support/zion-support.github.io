import React from 'react';
import { Link } from "react-router-dom";
import { FlaskConical, Zap, Users, Shield, CheckCircle, Star, ArrowRight, Brain, Eye, Globe, Sparkles, Microscope } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AIDrugDiscoveryProPage = () => {
  const features = [
    {
      title: "Molecular AI Analysis",
      description: "Advanced AI algorithms analyze molecular structures and predict drug interactions with 99.7% accuracy",
      icon: <FlaskConical className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Accelerated Discovery",
      description: "Reduce drug discovery time from years to months with AI-powered molecular modeling and simulation",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Clinical Trial Optimization",
      description: "AI-powered patient matching and trial design optimization for faster, more effective clinical studies",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and regulatory documentation for FDA and international approvals",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    "Molecular structure prediction",
    "Drug-target interaction analysis",
    "Toxicity prediction",
    "Clinical trial design",
    "Regulatory compliance",
    "Patent analysis",
    "Market research",
    "Biomarker discovery"
  ];

  const pricingPlans = [
    {
      name: "Research Starter",
      price: "$999",
      period: "per month",
      description: "Essential AI tools for pharmaceutical research and drug discovery",
      features: [
        "Basic molecular analysis",
        "Drug interaction prediction",
        "Toxicity screening",
        "Email support",
        "Standard databases",
        "1,000 molecular simulations/month"
      ],
      popular: false
    },
    {
      name: "Discovery Pro",
      price: "$2,499",
      period: "per month",
      description: "Advanced drug discovery platform for pharmaceutical companies",
      features: [
        "Advanced molecular modeling",
        "Clinical trial optimization",
        "Regulatory compliance tools",
        "Priority support",
        "Premium databases",
        "10,000 simulations/month",
        "Custom model training"
      ],
      popular: true
    },
    {
      name: "Enterprise Pharma",
      price: "$4,999",
      period: "per month",
      description: "Complete drug discovery suite for large pharmaceutical organizations",
      features: [
        "Full AI discovery platform",
        "Custom drug development",
        "Dedicated support team",
        "24/7 technical support",
        "Unlimited simulations",
        "On-premise deployment",
        "Custom integrations",
        "Regulatory consulting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "Global Pharma Corp",
      role: "Head of Drug Discovery",
      content: "The AI drug discovery platform has revolutionized our research process. We've reduced discovery time by 70% and increased success rates by 40% in clinical trials.",
      rating: 5
    },
    {
      name: "Dr. James Chen",
      company: "Biotech Innovations",
      role: "Chief Scientific Officer",
      content: "This technology has accelerated our drug development pipeline dramatically. The molecular analysis accuracy is unprecedented and has led to breakthrough discoveries.",
      rating: 5
    },
    {
      name: "Dr. Maria Rodriguez",
      company: "Research Institute",
      role: "Director of Research",
      content: "The AI-powered clinical trial optimization has improved our patient recruitment and trial success rates significantly. This is the future of pharmaceutical research.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Drug Discovery Pro - Accelerate Pharmaceutical Research | Zion Tech Group"
        description="Revolutionary AI-powered drug discovery platform with 99.7% molecular analysis accuracy. Accelerate pharmaceutical research, optimize clinical trials, and discover breakthrough treatments faster."
        keywords="AI drug discovery, pharmaceutical research, molecular analysis, clinical trials, drug development, biotechnology, medical research, FDA compliance"
        canonical="https://ziontechgroup.com/ai-drug-discovery-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <FlaskConical className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">99.7% Molecular Analysis Accuracy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Drug Discovery Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Accelerate pharmaceutical research with our revolutionary AI-powered drug discovery platform. 
            Discover breakthrough treatments faster with advanced molecular analysis and clinical trial optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FlaskConical className="w-5 h-5" />}
            >
              Start Discovery
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Microscope className="w-5 h-5" />}
            >
              View Research Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Drug Discovery Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize pharmaceutical research with our cutting-edge AI-powered drug discovery technology.
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
              Comprehensive Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete drug discovery and development tools powered by advanced artificial intelligence.
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
              Choose Your Research Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every level of pharmaceutical research and drug discovery needs.
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
                  Start Research
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
              Trusted by Pharmaceutical Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what pharmaceutical professionals say about our AI drug discovery technology.
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
              Discover the Future of Medicine
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the pharmaceutical revolution and accelerate your drug discovery process. 
              Our AI-powered platform helps you discover breakthrough treatments faster and more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<FlaskConical className="w-5 h-5" />}
              >
                Start Discovery
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Microscope className="w-5 h-5" />}
              >
                Research Assessment
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIDrugDiscoveryProPage;