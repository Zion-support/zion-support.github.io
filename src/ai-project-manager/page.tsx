'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Target, Calendar, FileText, MessageSquare, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Settings, Database, Cloud, Code, Smartphone, Award, Lock, Globe, Eye, Sparkles, Activity, PieChart, TrendingDown, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Music, Camera, Bot, Palette, Search } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import './styles/futuristic.css';

const AIProjectManagerPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with machine learning algorithms that analyze historical data and predict optimal timelines.',
      benefits: ['40% more accurate timelines', 'Risk prediction', 'Resource optimization', 'Automated scheduling']
    },
    {
      icon: Target,
      title: 'Smart Task Management',
      description: 'AI-driven task prioritization and assignment based on team capabilities, workload, and project requirements.',
      benefits: ['Automated task assignment', 'Priority optimization', 'Workload balancing', 'Skill matching']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that forecast project outcomes, identify bottlenecks, and suggest improvements.',
      benefits: ['Real-time insights', 'Bottleneck detection', 'Performance forecasting', 'ROI prediction']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication tools and automated status updates.',
      benefits: ['Smart notifications', 'Automated reporting', 'Team insights', 'Communication optimization']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'AI-powered risk analysis that identifies potential issues before they impact project delivery.',
      benefits: ['Early risk detection', 'Mitigation strategies', 'Impact analysis', 'Preventive measures']
    },
    {
      icon: Calculator,
      title: 'Budget Optimization',
      description: 'Intelligent budget management with cost prediction and optimization recommendations.',
      benefits: ['Cost forecasting', 'Budget alerts', 'Resource optimization', 'ROI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI planning',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      description: 'Advanced features for growing teams and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI planning',
        'Predictive analytics',
        'Risk assessment',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Custom AI models',
        'Advanced reporting',
        'Dedicated support',
        'White-label options',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Director',
      company: 'TechCorp Solutions',
      content: 'AI Project Manager Pro has revolutionized how we plan and execute projects. The AI predictions are incredibly accurate, and we\'ve reduced project delays by 70%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Manager',
      company: 'InnovateLab',
      content: 'The smart task management feature has optimized our team\'s productivity. We\'re completing projects 40% faster with better quality outcomes.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Dynamics',
      content: 'The predictive analytics help us identify issues before they become problems. It\'s like having a crystal ball for project management.',
      rating: 5
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_project_manager_phone'
      });
    }
  };

  return (
    <>
      <SEOOptimizer
        title="AI Project Manager Pro - Intelligent Project Planning & Management"
        description="Transform your project management with AI-powered planning, smart task management, predictive analytics, and team collaboration tools. Achieve 40% productivity increase and 70% fewer delays."
        keywords={['AI project management', 'intelligent planning', 'predictive analytics', 'smart task management', 'team collaboration', 'project optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field relative overflow-hidden">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Project Manager Pro">
                AI Project Manager Pro
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Intelligent Project Planning & Management
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your project management with AI-powered planning, smart task management, 
                predictive analytics, and team collaboration tools. Achieve unprecedented efficiency 
                and project success rates.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">📊</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">40% Productivity Increase</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">AI-powered optimization delivers measurable productivity gains</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">70% Fewer Delays</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Predictive analytics prevent project delays before they happen</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🎯</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">85% Planning Accuracy</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Machine learning ensures highly accurate project planning</p>
                </div>
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">💰</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg neon-text">30% Cost Reduction</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Optimized resource allocation reduces project costs significantly</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced AI capabilities that transform how you manage projects
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Flexible pricing options for teams of all sizes
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'cyber-button' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                  >
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Join thousands of teams already using AI Project Manager Pro
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-cyan-400/20 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start your free trial today and experience the power of AI-driven project management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIProjectManagerPage;