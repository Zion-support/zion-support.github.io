import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {Check, Star, ArrowRight, Zap, Shield, Users} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PricingPage: React.FC = () => {const features = [
    {
      ico, n: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {name: 'Professional',
      ],
      popular: true,
      icon: Star} ,
    {name: 'Enterprise',
      ],
      popular: false,
      icon: Shield} ]

  const addOns = [
    {name: 'Additional Users',
      description: 'Add more team members to your plan',
      price: { monthl, y: 50, yearly: 500} },
    {name: 'Priority Support',
      description: 'Get faster response times and dedicated support',
      price: { monthl, y: 200, yearly: 2000} },
    {name: 'Custom Development',
      description: 'Bespoke solutions tailored to your needs',
      price: { monthl, y: 1000, yearly: 10000} },
    {name: 'Training & Onboarding',
      description: 'Comprehensive training for your team',
      price: { monthl, y: 500, yearly: 5000} }
  ]

  const addOns = [
    {name: 'AI Chatbot',
      price: '$500/month',
      description: 'Intelligent customer support chatbot'} ,
    {name: 'Data Analytics Pro',
      price: '$800/month',
      description: 'Advanced business intelligence dashboard'} ,
    {name: 'Cybersecurity Suite',
      price: '$1,200/month',
      description: 'Comprehensive security monitoring'} ,
    {name: 'Custom Development',
      price: '$150/hour',
      description: 'Tailored solutions for your business'} ]
  return (
    <>
</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12"
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'} `}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly'
    </>
  )
                className="
    s: ring-offset-2 focu, s:ring-offset-slate-900"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'} `}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full"
                  Save 20%
                </span>
              )}
            </div>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
                  <p className="text-gray-600 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2"
                        {benefit}
                      </li>
                    ))}
                  </ul>
              ))}
            </div>

        <section className="py-20 bg-gray-100"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Experience the benefits of working with industry leaders.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-3 gap-8"
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg"
                  <div className="flex items-center"
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3"
                    <span className="text-lg font-medium text-gray-900"
                  </div>
              ))}
            </div>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                Contact Us
              </button>
              <button className="
    ,
    r: bg-blue-600 hove, r:text-white transition-colors"
                Schedule Demo
              </button>
      
      <Footer />
    </div>
  );
};


  </Footer>
