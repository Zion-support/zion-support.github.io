<<<<<<< HEAD
<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: ['Basic AI Tools', 'Email Support', '5GB Storage', 'Monthly Reports']
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: ['Advanced AI Tools', 'Priority Support', '50GB Storage', 'Weekly Reports', 'Custom Integrations']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Full AI Suite', '24/7 Support', 'Unlimited Storage', 'Real-time Reports', 'Custom Development', 'Dedicated Account Manager']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 ${index === 1 ? 'ring-2 ring-purple-500' : ''}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
=======
export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic AI Solutions",
        "Email Support",
        "5GB Storage",
        "Standard Security"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Solutions",
        "Priority Support",
        "50GB Storage",
        "Enhanced Security",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Full AI Suite",
        "24/7 Dedicated Support",
        "Unlimited Storage",
        "Enterprise Security",
        "Custom Development",
        "SLA Guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Choose the perfect plan for your business needs with Zion Tech Group's flexible pricing options." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
              index === 1 ? 'border-cyan-500' : 'border-white/20'
            }`}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                <div className="text-gray-300">{plan.period}</div>
                <p className="text-gray-300 mt-4">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                index === 1 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                  : 'border border-white/20 text-white hover:bg-white/10'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing plans for Zion Tech Group services" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Standard templates
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 ring-2 ring-blue-500">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Priority support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom templates
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$999<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  All AI features
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Custom development
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  White-label solution
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageTsxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page.Tsx - Zion Tech Group</title>
        <meta name="description" content="Advanced page.tsx solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page.Tsx</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page.tsx solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======
}
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
