import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import {CheckCircle, Star, Users, TrendingUp, Clock, MessageSquare, Bot, Phone} from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3a03
=======
import { Helmet } from 'react-helmet-async';
import { Bot, MessageSquare, Users, BarChart, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-55cf
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportBotPage: React.FC = () => {
  const _features = [
    {
      icon: Bot,
      title: '24/7 AI Support',
      description: 'Round-the-clock customer support with intelligent AI chatbot capabilities',
      benefits: ['90% response time reduction', 'Instant responses', 'Always available']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for understanding and responding to customer queries naturally',
      benefits: ['Human-like conversations', 'Context awareness', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues arise',
      benefits: ['Smart escalation', 'Seamless transitions', 'Expert support']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and improve customer experience',
      benefits: ['Real-time analytics', 'Performance tracking', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Basic analytics',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI responses',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Premium AI features',
        '24/7 support',
        'Custom analytics',
        'White-label options',
        'API access',
        'Custom training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '1,000+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '90%', label: 'Response Time Reduction' },
    { icon: Clock, value: '45%', label: 'Satisfaction Increase' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Support Bot | Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with our AI-powered support bot. 24/7 assistance, natural language processing, and seamless human handoff." />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Customer Support Bot</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Provide exceptional customer support 24/7 with our intelligent AI chatbot that understands 
            natural language and escalates complex issues to human agents seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6">
              <feature.icon className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your support needs and get a custom AI solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Schedule Demo
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
}

export default AiCustomerSupportBotPage;
=======
export default AICustomerSupportBotPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-55cf
