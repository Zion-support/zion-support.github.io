'use client';
import React, { useState, useCallback } from 'react';
import { CheckCircle, Star, Users, Clock, TrendingUp, BarChart, Calendar, Target, Zap, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Award, Rocket, Brain, Cpu, Settings, FileText, MessageSquare, Eye, Sparkles } from 'lucide-react';
import FuturisticNavigation from '../components/FuturisticNavigation';
import FuturisticFooter from '../components/FuturisticFooter';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIProjectManagerPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isDemoRequested, setIsDemoRequested] = useState(false);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_project_manager_phone'
      });
    }
  }, []);

  const handleDemoRequest = useCallback(() => {
    setIsDemoRequested(true);
    setTimeout(() => setIsDemoRequested(false), 3000);
  }, []);

  const features = [
    {
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      icon: Brain,
      benefits: ['40% faster planning', '85% accuracy', 'Smart resource allocation']
    },
    {
      title: 'Smart Task Management',
      description: 'Automated task assignment and priority optimization based on team capacity',
      icon: Target,
      benefits: ['60% efficiency boost', 'Real-time updates', 'Smart notifications']
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-driven insights for timeline prediction and risk assessment',
      icon: BarChart,
      benefits: ['90% timeline accuracy', 'Early risk detection', 'Data-driven decisions']
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless team communication and collaboration tools',
      icon: Users,
      benefits: ['Unified workspace', 'Real-time chat', 'Document sharing']
    },
    {
      title: 'Risk Assessment',
      description: 'Automated risk identification and mitigation strategies',
      icon: Shield,
      benefits: ['Proactive risk management', 'Automated alerts', 'Mitigation plans']
    },
    {
      title: 'Budget Optimization',
      description: 'AI-powered budget tracking and cost optimization recommendations',
      icon: TrendingUp,
      benefits: ['30% cost reduction', 'Real-time tracking', 'Smart recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI planning',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      description: 'Most popular for growing teams',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI planning',
        'Priority support',
        'API access',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager Pro has revolutionized how we plan and execute projects. The AI predictions are incredibly accurate.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'We\'ve seen a 40% increase in project delivery speed and 70% reduction in delays. Game changer!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The predictive analytics help us identify risks before they become problems. Highly recommended.',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Project Manager Pro - Intelligent Project Planning & Management"
        description="Transform your project management with AI-powered planning, predictive analytics, and smart task management. Achieve 40% productivity increase and 70% fewer delays."
        keywords={['AI project management', 'project planning', 'task management', 'predictive analytics', 'team collaboration', 'project optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
      />
      <Analytics />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <FuturisticNavigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Project Manager Pro
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                Intelligent Project Planning & Management
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your project management with AI-powered planning, predictive analytics, and smart task management. 
                Achieve 40% productivity increase and 70% fewer delays.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={handleDemoRequest}
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  {isDemoRequested ? 'Demo Requested!' : 'Start Free Trial'}
                </button>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 neon-text">40%</div>
                  <div className="text-sm text-gray-300">Productivity Increase</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 neon-text">70%</div>
                  <div className="text-sm text-gray-300">Fewer Delays</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400 neon-text">85%</div>
                  <div className="text-sm text-gray-300">Planning Accuracy</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 neon-text">30%</div>
                  <div className="text-sm text-gray-300">Cost Reduction</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Everything you need to manage projects intelligently
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
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
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs
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
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400 neon-text">{plan.price}</span>
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
                  
                  <button className="cyber-button w-full py-3 font-semibold">
                    Get Started
                  </button>
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
              Join thousands of teams already using AI Project Manager Pro
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Start your free trial today and see the difference AI can make
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                </button>
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
        </main>

        <FuturisticFooter />
      </div>
    </>
  );
};

export default AIProjectManagerPage;