'use client';
import React from 'react';
import { CheckCircle, Star, MessageCircle, Clock, Users, Shield } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: '24/7 AI Chat Support',
      description: 'Provide instant, intelligent customer support with our advanced AI chatbot that understands context and resolves issues automatically.',
      benefits: ['Instant responses', 'Context awareness', 'Multi-language support', 'Escalation to humans']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time Optimization',
      description: 'Reduce average response time from hours to seconds with intelligent routing and automated responses.',
      benefits: ['90% faster responses', 'Smart routing', 'Priority queuing', 'Auto-escalation']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human-AI Collaboration',
      description: 'Seamlessly blend AI automation with human expertise for complex issues that require personal touch.',
      benefits: ['Smart handoffs', 'Context preservation', 'Agent assistance', 'Quality assurance']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, GDPR compliance, and SOC 2 certification.',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses with basic support needs',
      features: [
        '1,000 conversations/month',
        'Basic AI chatbot',
        'Email integration',
        'Standard analytics',
        'Email support',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with moderate support volume',
      features: [
        '5,000 conversations/month',
        'Advanced AI chatbot',
        'Multi-channel support',
        'Advanced analytics',
        'Priority support',
        '25 team members',
        'Custom integrations',
        'Knowledge base'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with high support volume',
      features: [
        'Unlimited conversations',
        'Premium AI chatbot',
        'All channels supported',
        'Custom analytics',
        '24/7 phone support',
        'Unlimited team members',
        'Custom integrations',
        'Advanced knowledge base',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

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

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '90%', label: 'Faster Response Time' },
    { number: '80%', label: 'Issues Resolved Automatically' },
    { number: '24/7', label: 'Always Available' }
  ];


  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with AI-powered support solutions including chatbots and automated assistance." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Customer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional customer support with AI-powered chatbots, automated responses, and intelligent assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Intelligent Chatbots</h3>
              <p className="text-gray-600">AI-powered chatbots that understand and respond to customer queries.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ticket Routing</h3>
              <p className="text-gray-600">Automated ticket classification and routing to appropriate agents.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sentiment Analysis</h3>
              <p className="text-gray-600">Real-time customer sentiment analysis and response optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiCustomerSupportPage;
