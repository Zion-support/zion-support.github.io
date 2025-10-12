import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, File Text, Trending Up, Shield, Clock, Check Circle, Arrow Right, Users, Target } from 'lucide-react';

const Ai Accounting Assistant Page: React.F C = () => {
  const features = [
    {
      icon: <C alculatorclass Name="w-8 h-8 t e xt-c y an-400" />,
      title: 'Automated Bookkeeping',
      description: 'A I-powered transaction categorization and reconciliation',
      benefits: ['95% accuracy in categorization', 'Saves 20+ hours per week', 'Real-time reconciliation']
    },
    {
      icon: <F ile Textclass Name="w-8 h-8 t e xt-p u rple-400" />,
      title: 'Smart Invoice Processing',
      description: 'Automated invoice creation, sending, and payment tracking',
      benefits: ['50% faster invoice processing', 'Reduced payment delays', 'Automated follow-ups']
    },
    {
      icon: <T rending Upclass Name="w-8 h-8 t e xt-g r een-400" />,
      title: 'Financial Forecasting',
      description: 'A I-driven cash flow predictions and budget planning',
      benefits: ['90% accurate predictions', 'Proactive financial planning', 'Risk mitigation']
    },
    {
      icon: <S hieldclass Name="w-8 h-8 t e xt-r e d-400" />,
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
        'A P I integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Businesses Served', icon: <U sersclass Name="w-6 h-6 t e xt-c y an-400" /> },
    { number: '95%', label: 'Accuracy Rate', icon: <T argetclass Name="w-6 h-6 t e xt-g r een-400" /> },
    { number: '20+', label: 'Hours Saved Weekly', icon: <C lockclass Name="w-6 h-6 t e xt-p u rple-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <S hieldclass Name="w-6 h-6 t e xt-r e d-400" /> }
  ];

export default function Aiaccountingassistant Page() {
  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Ai Accounting Assistant - Zion Tech Group</t itle>
        <m eta name="description" content="Professional ai accounting assistant services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </H elmet>
      <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6 lg:px-8py-16 text-center">
        </d iv>
        <h1 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ai Accounting Assistant</h1>
        <p c lass Name="t e x t-lgtext-gray-300 mb-8">Professional ai accounting assistant services coming soon.</p>
        <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-centermx-autow-fit" />
          Contact Us

          <A rrow Rightclass Name="w-5h-5m l-2" />
        </L ink>
      </d iv>
  );
}
