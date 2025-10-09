'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIProjectManagerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['Predictive timeline estimation', 'Resource allocation optimization', 'Risk assessment and mitigation']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive project analytics with real-time insights and performance tracking',
      benefits: ['Live project dashboards', 'Performance metrics', 'Progress visualization']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced team collaboration tools with AI-assisted communication and task management',
      benefits: ['Smart task assignment', 'Automated notifications', 'Team performance insights']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Intelligent goal setting and tracking with milestone management and progress monitoring',
      benefits: ['Smart milestone detection', 'Progress forecasting', 'Achievement analytics']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk identification and mitigation strategies for project success',
      benefits: ['Risk prediction algorithms', 'Mitigation recommendations', 'Early warning systems']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automated project workflows and intelligent process optimization',
      benefits: ['Workflow automation', 'Process optimization', 'Smart scheduling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI planning',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI planning',
        'Real-time analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        'Premium AI features',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      color: 'pink'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager has revolutionized how we plan and execute projects. The predictive analytics have helped us reduce project delays by 40%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The automation features have saved us countless hours. Our team productivity has increased by 60% since implementing this tool.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The risk management capabilities are outstanding. We\'ve avoided 3 major project failures thanks to the early warning system.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Managed', icon: Target },
    { number: '95%', label: 'Success Rate', icon: CheckCircle },
    { number: '40%', label: 'Time Saved', icon: Clock },
    { number: '60%', label: 'Productivity Boost', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">📊</span>
              <span className="text-cyan-400 font-medium">AI Project Manager</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Project Manager">
              AI Project Manager
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Intelligent Project Planning & Management
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your project management with AI-powered planning, real-time analytics, and intelligent automation. 
              Achieve 95% project success rate and 40% time savings with our advanced AI project management platform.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">
                    <stat.icon className="w-8 h-8 mx-auto text-cyan-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg sm:text-xl neon-text">{stat.number}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Advanced AI capabilities designed to revolutionize your project management workflow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center cyber-scan-line">
                  <feature.icon className="w-12 h-12 mx-auto text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center neon-text">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your project management needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join thousands of project managers who have transformed their workflow with AI Project Manager
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-driven project management. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIProjectManagerPage;
