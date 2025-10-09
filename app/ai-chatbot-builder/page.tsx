import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Zap, Users, Shield, BarChart, Clock, CheckCircle, ArrowRight, Star, Award, Brain, Target, Smartphone, Globe } from 'lucide-react';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots with our drag-and-drop interface. No programming skills required.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Advanced natural language processing understands context and provides human-like responses.',
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy chatbots across websites, mobile apps, social media, and messaging platforms.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically with intelligent conversation flows and forms.',
      color: 'text-orange-400'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Track performance with detailed analytics on conversations, satisfaction, and conversions.',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, compliance features, and role-based access.',
      color: 'text-pink-400'
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
        'Basic templates',
        'Email support',
        'Standard integrations'
      ],
      color: 'border-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '5 chatbots',
        '10,000 conversations/month',
        'Custom AI training',
        'Priority support',
        'Advanced integrations',
        'Analytics dashboard'
      ],
      color: 'border-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
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
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solution',
        'On-premise deployment'
      ],
      color: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  const platforms = [
    { name: 'Website', logo: '🌐', description: 'Embed on any website' },
    { name: 'Facebook Messenger', logo: '💬', description: 'Connect to Facebook' },
    { name: 'WhatsApp', logo: '📱', description: 'WhatsApp Business API' },
    { name: 'Telegram', logo: '✈️', description: 'Telegram Bot API' },
    { name: 'Slack', logo: '💼', description: 'Team collaboration' },
    { name: 'Microsoft Teams', logo: '🏢', description: 'Enterprise communication' },
    { name: 'Discord', logo: '🎮', description: 'Gaming communities' },
    { name: 'Twilio', logo: '📞', description: 'SMS and voice' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'E-commerce Store',
      role: 'Customer Success Manager',
      content: 'Our customer support response time improved by 90%. The chatbot handles 80% of inquiries automatically.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      company: 'SaaS Company',
      role: 'Marketing Director',
      content: 'Lead generation increased by 150% with our AI chatbot. It qualifies leads better than our sales team.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Healthcare Clinic',
      role: 'Operations Manager',
      content: 'Patients can book appointments 24/7. The chatbot understands medical terminology perfectly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            AI-Powered Chatbot Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Chatbot Builder
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Create intelligent chatbots without coding
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Build, deploy, and manage AI-powered chatbots across multiple channels. 
            Increase customer engagement, generate leads, and provide 24/7 support with our no-code platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Build Your Bot
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Faster Response</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>
              <div className="text-gray-300 text-sm">More Leads</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Availability</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">No-Code</div>
              <div className="text-gray-300 text-sm">Setup</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Chatbot Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to create intelligent conversational experiences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className={`w-12 h-12 ${feature.color} mb-4`}>
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Deploy Anywhere
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Connect your chatbot to all your favorite platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="quantum-card p-6 text-center energy-pulse">
                <div className="text-4xl mb-3">{platform.logo}</div>
                <div className="text-white font-medium text-sm mb-2">{platform.name}</div>
                <div className="text-gray-400 text-xs">{platform.description}</div>
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
            Start free, scale as you grow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 energy-pulse relative ${plan.color} ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
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
                
                <button className={`w-full py-3 px-6 ${plan.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Success Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See how businesses are transforming with AI chatbots
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="quantum-card p-12 energy-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building your intelligent chatbot today. No coding required. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilderPage;