'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Bot, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Globe, Users, Settings, BarChart } from 'lucide-react';

const AIChatbotBuilder: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Bot,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any programming knowledge',
      benefits: ['Drag & drop interface', 'Visual flow builder', 'Pre-built templates']
    },
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Natural language processing for human-like conversations',
      benefits: ['Context awareness', 'Sentiment analysis', 'Multi-language support']
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description: 'Deploy chatbots in multiple languages for global reach',
      benefits: ['Auto-translation', 'Cultural adaptation', 'Local dialects']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Track performance with detailed analytics and insights',
      benefits: ['Conversation metrics', 'User satisfaction', 'Conversion tracking']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Connect with your existing tools and platforms',
      benefits: ['CRM integration', 'Live chat handoff', 'API access']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data protection and compliance',
      benefits: ['GDPR compliant', 'SOC 2 certified', 'End-to-end encryption']
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer service with instant responses',
      icon: MessageCircle,
      benefits: ['Reduce support tickets by 70%', 'Instant response time', '24/7 availability']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify and capture leads automatically',
      icon: Users,
      benefits: ['Qualify leads instantly', 'Capture contact information', 'Schedule appointments']
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process',
      icon: BarChart,
      benefits: ['Product recommendations', 'Price inquiries', 'Order processing']
    },
    {
      title: 'Internal Support',
      description: 'Help employees with HR and IT questions',
      icon: Settings,
      benefits: ['HR policy questions', 'IT troubleshooting', 'Employee onboarding']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1 chatbot',
        '1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom AI training',
        '24/7 phone support',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Customer Success Manager, TechFlow',
      content: 'Our chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'Marketing Director, GrowthHub',
      content: 'The lead generation chatbot has increased our qualified leads by 250%. Setup was incredibly easy.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO, StartupXYZ',
      content: 'We saved $50,000 annually in support costs. The AI responses are so natural, customers love it.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">AI Chatbot Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Chatbot Builder
          </h1>
          
          <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
            Create Intelligent Chatbots in Minutes
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build powerful AI chatbots for customer support, lead generation, and sales automation. 
            No coding required. Deploy in 50+ languages with enterprise-grade security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              Start Building Free
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Reduction in Support Tickets</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages Supported</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5 min</div>
              <div className="text-gray-300">Setup Time</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-green-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="hologram-card-enhanced p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-green-400">
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Simple Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`hologram-card-enhanced p-8 relative ${
                plan.popular ? 'ring-2 ring-green-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Customer Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="hologram-card-enhanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our platform to automate customer interactions and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilder;