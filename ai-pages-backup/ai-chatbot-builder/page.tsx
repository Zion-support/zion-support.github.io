import React from 'react';

import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [;
    {
      title: title,
  description: description,
  icon: Zap,
  color: 'from-cyan-500 to-blue-500'
    }
    {
      title: title,
  description: description,
  icon: Globe,
  color: 'from-green-500 to-emerald-500'
    }
    {
      title: title,
  description: description,
  icon: BarChart,
  color: 'from-purple-500 to-pink-500'
    }
    {
      title: title,
  description: description,
  icon: Brain,
  color: 'from-orange-500 to-red-500'
    }
    {
      title: title,
  description: description,
  icon: Workflow,
  color: 'from-blue-500 to-cyan-500'
    }
    {
      title: title,
  description: description,
  icon: Settings,
  color: 'from-indigo-500 to-purple-500'
    };
  ];

  const useCases = [;
    {
      title: title,
  description: description,
  icon: MessageCircle,
  benefits: ['Reduce support tickets by 60%', '24/7 availability', 'Instant responses']
    }
    {
      title: title,
  description: description,
  icon: Target,
  benefits: ['Increase lead quality by 40%', 'Automated qualification', 'Higher conversion rates']
    }
    {
      title: title,
  description: description,
  icon: ShoppingCart,
  benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations']
    }
    {
      title: title,
  description: description,
  icon: Users,
  benefits: ['Reduce HR workload', 'Consistent information', 'Employee satisfaction']
    };
  ];

  const pricing = [;
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: true
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false
    };
  ];

  const stats = [;
    { number: '10,000+', label: 'Chatbots Created', icon: MessageCircle }
    { number: '50+', label: 'Languages Supported', icon: Globe }
    { number: '99.9%', label: 'Uptime Guarantee', icon: Server }
    { number: '24/7', label: 'Customer Support', icon: Clock };
  ];
import { ArrowRight } from 'lucide-react';

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
</>;
  )}