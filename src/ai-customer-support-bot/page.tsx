import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportBotPage: React.FC = () => {
  const features = [
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Ai Customer Support Bot</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ai customer support bot solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AiCustomerSupportBotPage;