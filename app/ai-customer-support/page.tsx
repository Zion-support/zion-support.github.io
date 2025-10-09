'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      benefits: ['99.9% uptime', 'Instant responses', 'Multi-language support']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Support',
      description: 'Seamless customer support across all channels - email, chat, phone, social media, and messaging apps.',
      benefits: ['Unified experience', 'Context preservation', 'Cross-platform sync']
    },
    {
      icon: Headphones,
      title: 'Human-AI Hybrid',
      description: 'Smart escalation to human agents when AI cannot resolve issues, maintaining the personal touch.',
      benefits: ['Smart routing', 'Seamless handoff', 'Agent assistance']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on customer interactions, satisfaction scores, and support performance.',
      benefits: ['Real-time metrics', 'Trend analysis', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, GDPR compliance, and data protection.',
      benefits: ['SOC 2 compliance', 'Data encryption', 'Privacy protection']
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Intelligent automation of routine tasks, ticket routing, and follow-up processes.',
      benefits: ['Reduced workload', 'Faster resolution', 'Consistent quality']
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
        'Basic AI chatbot',
        'Email & chat support',
        'Standard analytics',
        'Email support'
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
        'Advanced AI with learning',
        'Omnichannel support',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations'
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
        'Custom AI training',
        'All channels + voice',
        'Real-time analytics dashboard',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
<<<<<<< HEAD
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Customer Success Manager',
      company: 'E-commerce Plus',
      content: 'Our customer satisfaction increased by 40% after implementing Zion Tech Group\'s AI support. Response times went from 2 hours to 30 seconds.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'VP of Operations',
      company: 'TechStart Inc.',
      content: 'The AI handles 80% of our support tickets automatically, allowing our team to focus on complex issues. It\'s been a game-changer.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Customer Experience',
      company: 'Global Services',
      content: 'The multilingual support capability helped us expand to 15 new markets without hiring additional support staff.',
      rating: 5
    }
  ];
=======

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Customer Support
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Transform customer service with intelligent AI that never sleeps
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Provide instant, intelligent customer support 24/7 with our advanced AI platform. 
              Reduce response times by 90% while increasing customer satisfaction by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to provide exceptional customer support at scale
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple setup, powerful results in just 3 steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect & Configure</h3>
              <p className="text-gray-300">
                Connect your existing support channels and configure the AI with your knowledge base and brand voice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Learns & Responds</h3>
              <p className="text-gray-300">
                The AI analyzes customer queries and provides intelligent responses, escalating complex issues to human agents.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-slate-900">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimize & Scale</h3>
              <p className="text-gray-300">
                Monitor performance, gather insights, and continuously improve your customer support experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your support needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
=======
    <>
      <SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Customer Support Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform your customer service with intelligent AI that never sleeps
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered customer support platform combines advanced chatbots, omnichannel communication, 
                and intelligent automation to deliver exceptional customer experiences while reducing costs by up to 60%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
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
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 500+ companies already using our AI customer support solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
<<<<<<< HEAD
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their support operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start providing 24/7 intelligent customer support today. 
            Join thousands of businesses already using our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free 14-day trial • ✓ No setup fees • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
=======
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8b7d
  );
};
export default AICustomerSupportPage;