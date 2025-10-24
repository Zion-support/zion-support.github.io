import React from 'react';

import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Multi-Language Support',
      description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-Powered Responses',
      description: 'Leverage advanced NLP and machine learning for intelligent, context-aware conversations',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing systems, websites, and messaging platforms',
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Custom Branding',
      description: 'Customize the chatbot appearance to match your brand identity and design guidelines',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with instant responses to common queries',
      icon: MessageCircle,
      benefits: ['Reduce support tickets by 60%', '24/7 availability', 'Instant responses']
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations',
      icon: Target,
      benefits: ['Increase lead quality by 40%', 'Automated qualification', 'Higher conversion rates']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and guide them through purchases',
      icon: ShoppingCart,
      benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    },
    {
      title: 'Internal HR Bot',
      description: 'Answer employee questions about policies, benefits, and company information',
      icon: Users,
      benefits: ['Reduce HR workload', 'Consistent information', 'Employee satisfaction']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with more needs',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Priority support',
        'Custom branding',
        'Advanced analytics',
        'Multi-language support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited conversations',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced integrations',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Chatbots Created', icon: MessageCircle },
    { number: '50+', label: 'Languages Supported', icon: Globe },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Server },
    { number: '24/7', label: 'Customer Support', icon: Clock }
  ];
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d

export default function AiChatbotBuilderPage() {
  return (
    <>
      <title>AiChatbotBuilder - Zion Tech Group</title>
        <meta name="description" content="Professional aichatbotbuilder services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">AiChatbotBuilder</h1>
          <p className="text-lg text-gray-300 mb-8">Professional aichatbotbuilder services by Zion Tech Group.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>
  );
}