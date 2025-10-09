'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, MessageSquare, Headphones, Globe, Languages } from 'lucide-react';

const AICustomerSupportBotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding and responding to customer queries naturally',
      benefits: ['90% response time reduction', 'Human-like conversations', 'Context understanding']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support with instant responses and escalation capabilities',
      benefits: ['45% satisfaction increase', 'Instant responses', 'No downtime']
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues require personal attention',
      benefits: ['80% queries handled automatically', 'Smart escalation', 'Seamless transition']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and improve customer experience',
      benefits: ['Real-time insights', 'Performance tracking', 'Continuous improvement']
    }
  ];

  const integrations = [
    { name: 'Website', icon: Globe, color: 'text-blue-500' },
    { name: 'Facebook Messenger', icon: MessageSquare, color: 'text-blue-600' },
    { name: 'WhatsApp', icon: MessageSquare, color: 'text-green-500' },
    { name: 'Slack', icon: MessageSquare, color: 'text-purple-500' },
    { name: 'Microsoft Teams', icon: MessageSquare, color: 'text-blue-400' },
    { name: 'API', icon: Code, color: 'text-cyan-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1,000 conversations/month',
        'Basic NLP capabilities',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 conversations/month',
        'Advanced NLP capabilities',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        'Custom training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      role: 'Customer Success Manager',
      company: 'TechCorp Inc.',
      content: 'AI Customer Support Bot reduced our response time by 90% and increased customer satisfaction by 45%. Our team can now focus on complex issues.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'E-commerce Plus',
      content: 'The 24/7 availability has been a game-changer. Our customers get instant help, and our support team is more efficient than ever.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Director',
      company: 'Service Company',
      content: 'The human handoff feature works perfectly. Complex issues are escalated seamlessly, and customers get the help they need quickly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Bot - Zion Tech Group</title>
        <meta name="description" content="Provide 24/7 intelligent customer support with AI-powered chatbot. Achieve 90% response time reduction and 45% satisfaction increase." />
        <meta name="keywords" content="AI chatbot, customer support, 24/7 support, natural language processing, customer service automation" />
        <meta property="og:title" content="AI Customer Support Bot - Zion Tech Group" />
        <meta property="og:description" content="Transform your customer support with AI-powered chatbot that provides 24/7 intelligent assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-bot" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Bot className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">AI-Powered Customer Support</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Customer Support Bot
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Provide 24/7 intelligent customer support with AI-powered chatbot. Achieve 90% response time reduction, 
                45% satisfaction increase, and 80% queries handled automatically.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
                  <div className="text-gray-300">Response Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">45%</div>
                  <div className="text-gray-300">Satisfaction Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
                  <div className="text-gray-300">Queries Handled Automatically</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Integrations
              </h2>
              <p className="text-xl text-gray-300">
                Connect with your customers on their preferred platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <integration.icon className={`w-12 h-12 ${integration.color} mx-auto mb-3`} />
                  <h3 className="text-white font-semibold">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Customer Support Bot combines cutting-edge artificial intelligence with customer service expertise to provide exceptional support experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">
                    <feature.icon className="w-12 h-12 text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
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
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-r from-green-900/50 to-blue-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer support needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Customer Support Bot`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their customer support with AI.
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
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-green-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven customer support. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Customer Support Bot - Free Trial Request"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-green-100">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSupportBotPage;