import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Brain, Shield, BarChart3, Zap, Globe, ArrowRight, CheckCircle, Star, Users, Award, Cpu, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutonomousSystemsPage = () => {
  const features = [
    {
      title: "Autonomous Vehicles",
      description: "AI-powered self-driving systems with advanced perception, decision-making, and navigation capabilities",
      icon: <Bot className="w-8 h-8" />,
      benefits: ["Level 5 autonomy", "Real-time decision making", "Safety-first design"]
    },
    {
      title: "Autonomous Drones",
      description: "Intelligent drone systems for delivery, surveillance, and inspection with autonomous flight planning",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Autonomous flight", "Mission planning", "Collision avoidance"]
    },
    {
      title: "Autonomous Robotics",
      description: "Self-managing robotic systems for manufacturing, healthcare, and service applications",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Adaptive behavior", "Learning capabilities", "Human collaboration"]
    },
    {
      title: "Autonomous Security",
      description: "AI-powered security systems with autonomous threat detection and response capabilities",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["24/7 monitoring", "Threat detection", "Automated response"]
    }
  ];

  const pricing = [
    {
      name: "Autonomous Starter",
      price: "$3,999",
      period: "per month",
      description: "Basic autonomous systems for small applications",
      features: [
        "Single system control",
        "Basic AI algorithms",
        "Standard sensors",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Autonomous Professional",
      price: "$12,999",
      period: "per month",
      description: "Advanced autonomous systems for enterprise applications",
      features: [
        "Multi-system management",
        "Advanced AI algorithms",
        "High-end sensors",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Autonomous Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Complete autonomous infrastructure for large organizations",
      features: [
        "Fleet management",
        "Custom AI models",
        "Dedicated support team",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Transportation",
      description: "Autonomous vehicles for passenger transport, freight delivery, and logistics",
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Manufacturing",
      description: "Autonomous robots for assembly, quality control, and material handling",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Agriculture",
      description: "Autonomous farming equipment for planting, harvesting, and crop monitoring",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Autonomous medical devices and robotic assistants for patient care",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Systems | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous systems. Self-driving vehicles, autonomous drones, robotics, and intelligent security systems." />
        <meta name="keywords" content="AI autonomous, autonomous systems, self-driving, autonomous drones, robotics, autonomous vehicles, AI robotics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-systems" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Bot className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Autonomy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              AI Autonomous Systems
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create intelligent autonomous systems that can operate independently, make decisions, 
            and adapt to changing environments with advanced AI capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Bot className="w-5 h-5" />}
            >
              Build Autonomous Future
            </FuturisticButton>
            <FuturisticButton
              href="#features"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Capabilities
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Autonomous AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered autonomous systems designed to operate independently 
              and intelligently in complex, dynamic environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous AI systems are transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {application.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {application.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {application.description}
                </p>
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
              Autonomous AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect autonomous AI solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                  : 'border-white/20 hover:border-purple-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the autonomous revolution and create intelligent systems that can 
            operate independently and adapt to any environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Bot className="w-5 h-5" />}
            >
              Build Autonomous Future
            </FuturisticButton>
            <FuturisticButton
              href="/ai-services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore AI Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIAutonomousSystemsPage;