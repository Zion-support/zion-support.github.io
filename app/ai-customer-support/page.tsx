import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  MessageCircle, 
  Bot, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Headphones,
  Smartphone,
  Globe,
  BarChart3,
  Settings,
  Brain
} from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: '24/7 AI Chatbots',
      description: 'Intelligent chatbots that handle 80% of customer inquiries instantly with natural language processing.',
      price: '$199/month'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Unified support across email, chat, phone, social media, and messaging platforms.',
      price: '$299/month'
    },
    {
      icon: Brain,
      title: 'Sentiment Analysis',
      description: 'Real-time emotion detection and response optimization for better customer satisfaction.',
      price: '$149/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into customer interactions, response times, and satisfaction metrics.',
      price: '$99/month'
    },
    {
      icon: Zap,
      title: 'Auto-Escalation',
      description: 'Smart routing of complex issues to human agents with full context and history.',
      price: '$179/month'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built-in.',
      price: 'Included'
    }
  ];

  const benefits = [
    'Reduce support costs by up to 60%',
    'Improve response time by 90%',
    'Increase customer satisfaction by 40%',
    'Handle 10x more inquiries simultaneously',
    '24/7 availability across all time zones',
    'Seamless integration with existing systems'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1 AI chatbot',
        '500 conversations/month',
        'Email & chat support',
        'Basic analytics',
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
        '3 AI chatbots',
        '2,000 conversations/month',
        'Multi-channel support',
        'Advanced analytics',
        'Sentiment analysis',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited chatbots',
        'Unlimited conversations',
        'All channels included',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Customer Support
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Customer Support
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer service with intelligent AI that never sleeps. 
            Reduce costs, improve satisfaction, and scale effortlessly with our 
            cutting-edge AI customer support solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center"
            >
              <Headphones className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
              <div className="text-gray-300">Higher Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-purple-400 font-semibold">{feature.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our AI Customer Support?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-purple-400 scale-105' 
                  : 'border-white/20 hover:border-purple-400'
              }`}>
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI customer support 
              to deliver exceptional service experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;