'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Users, Target, BarChart, Clock, CheckCircle, AlertCircle, TrendingUp, Zap, Brain, ArrowRight, Phone, Mail, MapPin, Star, Shield, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIProjectManagerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with resource optimization and timeline prediction',
      benefits: ['Reduce planning time by 60%', 'Improve accuracy by 85%', 'Optimize resource allocation']
    },
    {
      icon: Target,
      title: 'Smart Task Management',
      description: 'Automated task assignment, priority setting, and progress tracking',
      benefits: ['Increase productivity by 40%', 'Reduce missed deadlines by 70%', 'Improve team coordination']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-driven insights for project success prediction and risk management',
      benefits: ['Identify risks 3x earlier', 'Improve success rate by 50%', 'Optimize budget allocation']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team communication and collaboration with AI assistance',
      benefits: ['Improve communication by 65%', 'Reduce conflicts by 45%', 'Boost team morale']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 team members',
        '10 active projects',
        'Basic AI planning',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Up to 25 team members',
        'Unlimited projects',
        'Advanced AI planning',
        'Predictive analytics',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Full AI suite',
        'Custom AI training',
        'White-label options',
        'Dedicated support',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, TechCorp',
      content: 'AI Project Manager has revolutionized how we handle complex projects. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content: 'We reduced project delays by 70% and improved team productivity significantly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director, GlobalCorp',
      content: 'The predictive analytics helped us identify potential issues before they became problems. Game changer!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Project Manager - Intelligent Project Management Solution | Zion Tech Group"
        description="Transform your project management with AI-powered planning, predictive analytics, and intelligent task management. Increase productivity by 40% and reduce project delays by 70%."
        keywords={['AI project management', 'project planning', 'team collaboration', 'predictive analytics', 'task management', 'project optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI-Powered Project Management
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Project Manager
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your project management with intelligent planning, predictive analytics, and automated task management. 
                Achieve 40% higher productivity and 70% fewer project delays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Productivity Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                <div className="text-gray-300">Fewer Delays</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
                <div className="text-gray-300">Planning Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your project management workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-slate-800/50" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and project complexity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Project Manager ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of teams already using AI Project Manager to transform their workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven project management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Project Manager Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIProjectManagerPage;
