import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, File Text, Trending Up, Shield, Clock, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';

const Ai Accounting Assistant Page: React.F C = () => {
  const features = [
    {
      icon: <C alculator class Name="w-8 h-8 t ext-cyan-400" />,
      title: 'Automated Bookkeeping',
      description: 'A I-powered transaction categorization and reconciliation',
      benefits: ['95% accuracy in categorization', 'Saves 20+ hours per week', 'Real-time reconciliation']
    },
    {
      icon: <F ile Text class Name="w-8 h-8 t ext-purple-400" />,
      title: 'Smart Invoice Processing',
      description: 'Automated invoice creation, sending, and payment tracking',
      benefits: ['50% faster invoice processing', 'Reduced payment delays', 'Automated follow-ups']
    },
    {
      icon: <T rending Up class Name="w-8 h-8 t ext-green-400" />,
      title: 'Financial Forecasting',
      description: 'A I-driven cash flow predictions and budget planning',
      benefits: ['90% accurate predictions', 'Proactive financial planning', 'Risk mitigation']
    },
    {
      icon: <S hield class Name="w-8 h-8 t ext-red-400" />,
      title: 'Compliance Management',
      description: 'Automated tax calculations and regulatory compliance',
      benefits: ['100% compliance rate', 'Reduced audit risk', 'Automated reporting']
    }
  ];

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 transactions/month',
        'Basic A I categorization',
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
        'Advanced A I categorization',
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
        'Custom A I training',
        'Advanced analytics',
        'A PI integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Businesses Served', icon: <U sers class Name="w-6 h-6 t ext-cyan-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <T arget class Name="w-6 h-6 t ext-green-400" /> },
    { number: '20+', label: 'Hours Saved Weekly', icon: <C lock class Name="w-6 h-6 t ext-purple-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <S hield class Name="w-6 h-6 t ext-red-400" /> }
  ];

export default function Aiaccountingassistant Page() {
  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Ai Accounting Assistant - Zion Tech Group</t itle>
        <m eta name="description" content="Professional ai accounting assistant services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </H elmet>
      <d iv class Name="m ax-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-16text-center">
        </d iv>
        <h1 c lass Name="t ext-4 xl font-boldtext-whitemb-6">Ai Accounting Assistant</h1>
        <p c lass Name="t ext-lgtext-gray-300mb-8">Professional ai accounting assistant services coming soon.</p>
        <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us

          <A rrow Right class Name="w-5h-5m l-2" />
        </L ink>
      </d iv>
  );
}
