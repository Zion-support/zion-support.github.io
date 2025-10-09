'use client';
import React, { useState, useEffect } from 'react';
import { MessageCircle, Bot, Users, BarChart, Zap, CheckCircle, Star, ArrowRight, Clock, Target, TrendingUp, Shield, Headphones, Globe, Smartphone } from 'lucide-react';

const AICustomerChatbotPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Conversations",
      description: "AI-powered chatbot that understands context, intent, and provides human-like responses.",
      benefit: "95% customer satisfaction"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support with instant responses in multiple languages.",
      benefit: "Never miss a customer"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into customer interactions, satisfaction, and common issues.",
      benefit: "Data-driven improvements"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Resolution",
      description: "Resolve 80% of customer queries instantly with intelligent FAQ and knowledge base integration.",
      benefit: "Reduce support tickets by 80%"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless Handoff",
      description: "Smart escalation to human agents when complex issues require personal attention.",
      benefit: "Perfect human-AI balance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR compliance and data protection.",
      benefit: "100% secure & compliant"
    }
  ];

  const integrations = [
    { name: 'Website', icon: <Globe className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'Facebook Messenger', icon: <MessageCircle className="w-6 h-6" />, color: 'text-blue-600' },
    { name: 'Mobile App', icon: <Smartphone className="w-6 h-6" />, color: 'text-purple-400' },
    { name: 'Slack', icon: <MessageCircle className="w-6 h-6" />, color: 'text-pink-400' },
    { name: 'Email', icon: <MessageCircle className="w-6 h-6" />, color: 'text-gray-400' }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI responses",
        "Website integration",
        "Email support",
        "Basic analytics",
        "1 language support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with learning",
        "Multi-channel integration",
        "Priority support",
        "Advanced analytics",
        "5 language support",
        "Custom branding",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Advanced AI automation",
        "All integrations",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited languages",
        "White-label options",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Thompson",
      company: "E-commerce Store",
      role: "Customer Success Manager",
      content: "AI Customer Chatbot reduced our support tickets by 80% and increased customer satisfaction to 95%. It's like having a team of support agents working 24/7!",
      rating: 5
    },
    {
      name: "Robert Wilson",
      company: "SaaS Company",
      role: "VP of Operations",
      content: "The intelligent conversations and seamless handoff to human agents created the perfect customer experience. Our response time improved by 90%.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Online Retailer",
      role: "Head of Customer Service",
      content: "The multi-language support and 24/7 availability helped us serve customers globally. Revenue increased by 25% due to better customer experience.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Customer Chatbot
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Revolutionize Customer Support with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your customer support with our AI-powered chatbot platform. 
              Achieve 95% customer satisfaction, reduce support tickets by 80%, and provide 
              24/7 intelligent support across all channels with seamless human handoff.
            </p>
            
            {/* Integration Support */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-white mb-6">Integrates With</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800/50 ${integration.color}`}>
                    {integration.icon}
                    <span className="font-medium">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-gray-300">Support Tickets Reduced</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
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
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
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
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Customer Chatbot to improve their support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerChatbotPage;