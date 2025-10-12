'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Clock, Target, BarChart3 } from 'lucide-react';

export default function AICustomerSupportChatbot() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context, intent, and provides human-like responses'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: '24/7 Availability',
      description: 'Provide instant support around the clock without additional staffing costs'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Intelligent Routing',
      description: 'Automatically route complex queries to the right human agents when needed'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Analytics & Insights',
      description: 'Track customer satisfaction, response times, and identify improvement opportunities'
    }
  ];

  const chatbotFeatures = [
    {
      category: 'Conversation Management',
      items: ['Multi-language Support', 'Context Awareness', 'Sentiment Analysis', 'Conversation History', 'Quick Responses', 'Escalation Rules']
    },
    {
      category: 'Integration',
      items: ['Website Widget', 'Mobile Apps', 'Social Media', 'Email Integration', 'CRM Systems', 'Help Desk Tools']
    },
    {
      category: 'Customization',
      items: ['Brand Styling', 'Custom Responses', 'Knowledge Base', 'FAQ Management', 'Personality Settings', 'Response Templates']
    },
    {
      category: 'Analytics',
      items: ['Response Metrics', 'Customer Satisfaction', 'Resolution Rates', 'Popular Queries', 'Performance Reports', 'ROI Tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Website integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced analytics',
        'Multi-channel support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Lisa Chen',
      company: 'E-commerce Store',
      content: 'AI Customer Support Chatbot reduced our support tickets by 60% and improved customer satisfaction by 40%.',
      rating: 5
    },
    {
      name: 'John Martinez',
      company: 'SaaS Company',
      content: 'The chatbot handles 80% of our support queries automatically. Our team can focus on complex issues.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Service Provider',
      content: '24/7 support without additional costs. Our customers love the instant responses and availability.',
      rating: 5
    }
  ];

  return (
      </div>
      </div>
      </div>
      </div>
    </>
  );
}