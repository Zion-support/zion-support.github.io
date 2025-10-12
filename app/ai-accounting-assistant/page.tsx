<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
=======
import { Calculator, FileText, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';

const AiAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="w-8 h-8 text-cyan-400" />,
      title: 'Automated Bookkeeping',
      description: 'AI-powered transaction categorization and reconciliation',
      benefits: ['95% accuracy in categorization', 'Saves 20+ hours per week', 'Real-time reconciliation']
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Smart Invoice Processing',
      description: 'Automated invoice creation, sending, and payment tracking',
      benefits: ['50% faster invoice processing', 'Reduced payment delays', 'Automated follow-ups']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Financial Forecasting',
      description: 'AI-driven cash flow predictions and budget planning',
      benefits: ['90% accurate predictions', 'Proactive financial planning', 'Risk mitigation']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Compliance Management',
      description: 'Automated tax calculations and regulatory compliance',
      benefits: ['100% compliance rate', 'Reduced audit risk', 'Automated reporting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
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
      features: [
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
      features: [
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
    { number: '10,000+', label: 'Businesses Served', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6 text-green-400" /> },
    { number: '20+', label: 'Hours Saved Weekly', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-red-400" /> }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-33de

export default function AiaccountingassistantPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai accounting assistant services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Ai Accounting Assistant</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai accounting assistant services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
=======
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Ai Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai accounting assistant services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center">
        </div>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Accounting Assistant</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai accounting assistant services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us
    <>
          <ArrowRight className="w-5h-5ml-2" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        </Link>
      </div>
  );
}
    </>