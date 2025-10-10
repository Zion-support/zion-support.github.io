import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, Mail, ArrowRight, Brain, Target, BarChart, Globe, Database, Smartphone, Lock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      icon: Settings;
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
'use client';
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp, Brain, Zap } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AIAutomationPage: React.FC = React.memo((props) => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap;
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI systems',
      icon: Zap,
    },
    {
      title: 'Workflow Optimization',
      description: 'Optimize business processes for maximum efficiency',
      icon: Settings,
      features: ['Process mapping', 'Bottleneck identification', 'Performance metrics', 'Continuous improvement'],
      color: 'from-purple-400 to-pink-500'
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Error handling'],
      benefits: ['80% time savings', 'Reduced errors', '24/7 operation', 'Cost reduction'],
      price: 'Starting at $299/month'
    },
    {
      icon: Shield;
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock;
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
    }
  ];

  const benefits = [
    'Reduce operational costs by 60%',
    'Increase process efficiency by 80%',
    'Eliminate human error completely',
    'Scale operations without additional staff',
    '24/7 automated operations',
    'Real-time monitoring and alerts'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small businesses',
      features: [,
        'Up to 10 automated processes',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account'
      ],
      popular: false},
      popular: false;
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing companies',
      features: [,
        'Up to 50 automated processes',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Up to 10 user accounts',
        'API access',
        'Real-time monitoring'
      ],
      popular: true},
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large organizations',
      features: [,
        'Unlimited processes',
        'Premium AI capabilities',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label solution',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false}
      popular: false;
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      icon: 'headphones',
      examples: ['Chatbot responses', 'Ticket classification', 'Escalation routing', 'Knowledge base updates']
    },
    {
      title: 'Sales & Marketing',
      description: 'Automate lead scoring, email campaigns, and customer segmentation',
      icon: 'trending-up',
      examples: ['Lead qualification', 'Email sequences', 'Social media posting', 'Campaign optimization']
    },
    {
      title: 'Finance & Accounting',
      description: 'Automate invoice processing, expense management, and financial reporting',
      icon: 'dollar-sign',
      examples: ['Invoice processing', 'Expense categorization', 'Financial reporting', 'Compliance checks']
    },
    {
      title: 'HR & Operations',
      description: 'Automate recruitment, onboarding, and employee management processes',
      icon: 'users',
      examples: ['Resume screening', 'Interview scheduling', 'Onboarding workflows', 'Performance tracking']
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and support systems for enhanced customer experience',
      icon: Users,
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
  );
};

export default AIAutomationPage;