
import React from 'react';
import { Link } from 'react-router-dom';

import { Calculator, FileText, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';


const AiAccountingAssistantPage: React.FC = () => {
  const feat ures = [
    {
      i con: <Calculator c las sNa me="w-8 h-8 t ext-c yan-400" />,
      t itle: 'Automated Bookkeeping',
      description: 'AI-powered transaction categorization and reconciliation',
      benefits: ['95% accuracy in categorization', 'Saves 20+ hours per week', 'Real-time reconciliation']
    },
    {
      i con: <FileText c las sNa me="w-8 h-8 t ext-p urp le-400" />,
      t itle: 'Smart Invoice Processing',
      description: 'Automated invoice creation, sending, and payment tracking',
      benefits: ['50% faster invoice processing', 'Reduced payment delays', 'Automated follow-ups']
    },
    {
      i con: <TrendingUp c las sNa me="w-8 h-8 t ext-g reen-400" />,
      t itle: 'Financial Forecasting',
      description: 'AI-driven cash flow predictions and budget planning',
      benefits: ['90% accurate predictions', 'Proactive financial planning', 'Risk mitigation']
    },
    {
      i con: <Shield c las sNa me="w-8 h-8 t ext-red-400" />,
      t itle: 'Compliance Management',
      description: 'Automated tax calculations and regulatory compliance',
      benefits: ['100% compliance rate', 'Reduced audit risk', 'Automated reporting']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      feat ures: [
        'Up to 1,000 transactions/month',
        'Basic AI categorization',
        'Invoice generation',
        'Basic reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses',
      feat ures: [
        'Up to 10,000 transactions/month',
        'Advanced AI categorization',
        'Automated invoice processing',
        'Financial forecasting',
        'Multi-currency support',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations',
      feat ures: [
        'Unlimited transactions',
        'Custom AI training',
        'Advanced analytics',
        'API integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '10,000+', l abel: 'B usinesses S erv ed', i con: <Users c las sNa me="w-6 h-6 t ext-c yan-400" /> },
    { number: '95%', l abel: 'Accuracy R ate', i con: <Target c las sNa me="w-6 h-6 t ext-g reen-400" /> },
    { number: '20+', l abel: 'H ours Saved W eek ly', i con: <Clock c las sNa me="w-6 h-6 t ext-p urp le-400" /> },
    { number: '99.9%', l abel: 'U ptime G uarant ee', i con: <Shield c las sNa me="w-6 h-6 t ext-red-400" /> }
  ];



export default function AiaccountingassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4 xl font-boldtext-white mb-6"  >Ai Accounting Assistant</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai accounting assistant services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
      </div>
    </div>

  );
}