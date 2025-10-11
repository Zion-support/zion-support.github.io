'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { MessageCircle, Brain, Zap, Shield, BarChart, Users, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Globe, Settings, Target, TrendingUp, Award, Headphones, Bot, MessageSquare, Send, ThumbsUp, ThumbsDown, AlertCircle, RefreshCw, Eye, Lock, Database, Cpu, Wifi, Smartphone, Monitor, Laptop, Tablet } from 'lucide-react';

const AiCustomerSupportProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Engine',
      description: 'GPT-4 powered conversational AI with 99.9% accuracy in understanding customer intent',
      benefits: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Sentiment analysis']
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Sub-second response times with intelligent routing and escalation capabilities',
      benefits: ['Real-time processing', 'Smart routing', 'Auto-escalation', 'Priority queuing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications',
      benefits: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Data privacy']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting with real-time insights and performance metrics',
      benefits: ['Real-time metrics', 'Custom reports', 'Performance tracking', 'ROI analysis']
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Unified support across all channels including chat, email, phone, and social media',
      benefits: ['Omnichannel support', 'Unified inbox', 'Cross-channel history', 'Seamless handoff']
    },
    {
      icon: Settings,
      title: 'Customizable Workflows',
      description: 'Flexible automation rules and workflows tailored to your business processes',
      benefits: ['Custom workflows', 'Automation rules', 'Integration APIs', 'White-label options']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email & chat support',
        'Standard analytics',
        '5 team members',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel support',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'Advanced integrations',
        'Priority support',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'All channels + voice support',
        'Real-time analytics dashboard',
        'Unlimited everything',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label solution',
        'SLA guarantee',
        'Custom training & onboarding'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: Database, description: 'CRM integration' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' },
    { name: 'Zendesk', icon: Headphones, description: 'Help desk platform' },
    { name: 'Slack', icon: MessageSquare, description: 'Team communication' },
    { name: 'Microsoft Teams', icon: Users, description: 'Enterprise collaboration' },
    { name: 'WhatsApp', icon: Smartphone, description: 'Messaging platform' },
    { name: 'Facebook Messenger', icon: Globe, description: 'Social media integration' },
    { name: 'Shopify', icon: Monitor, description: 'E-commerce platform' },
    { name: 'WordPress', icon: Globe, description: 'Website integration' },
    { name: 'API Access', icon: Settings, description: 'Custom integrations' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'Customer Success Manager',
      content: 'Zion AI Customer Support Pro reduced our response time by 80% and increased customer satisfaction to 98%. The AI understands context perfectly and escalates complex issues seamlessly.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Global Finance Ltd.',
      role: 'VP of Operations',
      content: 'We handle 50,000+ customer inquiries monthly. This AI system processes them all with 99.9% accuracy and provides insights that helped us optimize our entire support operation.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthTech Solutions',
      role: 'Head of Support',
      content: 'The multi-channel support and advanced analytics gave us complete visibility into our customer interactions. ROI was achieved in just 2 months with 60% cost reduction.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Accuracy Rate', icon: Target },
    { number: '<1s', label: 'Response Time', icon: Zap },
    { number: '50+', label: 'Integrations', icon: Settings },
    { number: '98%', label: 'Customer Satisfaction', icon: ThumbsUp },
    { number: '24/7', label: 'Availability', icon: Clock },
    { number: '500+', label: 'Happy Clients', icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Pro - Advanced AI-Powered Customer Service | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI customer support platform with GPT-4, multi-channel support, and enterprise-grade security. Reduce response time by 80% and boost satisfaction to 98%." />
        <meta name="keywords" content="AI customer support, chatbot, customer service automation, GPT-4, multi-channel support, enterprise AI" />
        <meta property="og:title" content="AI Customer Support Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered customer service platform with 99.9% accuracy and sub-second response times." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-pro" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI Customer Support Pro
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Customer Support
                </span>
                <br />
                <span className="text-4xl md:text-6xl">That Actually Works</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered customer support platform with GPT-4 technology, 
                multi-channel support, and enterprise-grade security. Reduce response time by 80% 
                and boost customer satisfaction to 98%.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>99.9% Accuracy Rate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Sub-Second Response Time</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>50+ Integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Enterprise Security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#demo" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-400 mr-1" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-1" />
                  <span>SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">AI Customer Support Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology combined with enterprise-grade features to deliver 
                exceptional customer support experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support 
                and 30-day money-back guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need a custom solution?</p>
              <a 
                href="/contact" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Contact our sales team →
              </a>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="text-cyan-400">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows. 50+ integrations available 
                with custom API access for enterprise needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 500+ companies that have transformed their customer support with our AI platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies using AI Customer Support Pro to deliver exceptional 
              customer experiences. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No credit card required • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiCustomerSupportProPage;