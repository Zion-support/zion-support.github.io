import React, { useState } from 'react';
import Head from 'next/head';
import {
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  Bot,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Crown,
  Rocket,
  Target,
  Users,
  Building2,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot as BotIcon,
  ChevronRight as ChevronRightIcon,
} from 'lucide-react';

import { Button } from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: 99, yearly: 990 },
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 AI services',
        'Basic cloud infrastructure',
        'Email support',
        'Standard security',
        '1TB storage',
        'Basic analytics'
      ],
      popular: false,
      icon: Rocket
    },
    {
      name: 'Professional',
      price: { monthly: 299, yearly: 2990 },
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 AI services',
        'Advanced cloud infrastructure',
        'Priority support',
        'Enhanced security',
        '10TB storage',
        'Advanced analytics',
        'Custom integrations',
        'API access'
      ],
      popular: true,
      icon: Crown
    },
    {
      name: 'Enterprise',
      price: { monthly: 999, yearly: 9990 },
      description: 'For large organizations',
      features: [
        'Unlimited AI services',
        'Enterprise cloud infrastructure',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Custom analytics',
        'White-label solutions',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      icon: Building2
    }
  ];

  const microSaasPricing = [
    {
      category: 'Simple Tools',
      price: '$5,000 - $15,000',
      features: ['Basic functionality', 'Simple UI', 'Standard hosting', '3 months support'],
      examples: ['URL shortener', 'QR generator', 'Simple calculator']
    },
    {
      category: 'Dashboard Apps',
      price: '$10,000 - $40,000',
      features: ['Advanced UI', 'Database integration', 'User authentication', '6 months support'],
      examples: ['Analytics dashboard', 'Project management', 'CRM system']
    },
    {
      category: 'MVP Applications',
      price: '$20,000 - $70,000',
      features: ['Full-stack development', 'Mobile responsive', 'API integration', '12 months support'],
      examples: ['E-commerce platform', 'SaaS application', 'Marketplace']
    },
    {
      category: 'Enterprise Solutions',
      price: '$80,000+',
      features: ['Custom architecture', 'Scalable infrastructure', 'Advanced security', 'Ongoing support'],
      examples: ['Large-scale platforms', 'Complex integrations', 'Custom enterprise tools']
    }
  ];

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Choose the perfect plan for your business needs. All plans include our core services with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <UltraFuturisticCard
                  key={plan.name}
                  className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <plan.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-slate-400">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Check className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </UltraFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 px-4 bg-slate-900/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Micro SaaS Development</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Custom pricing for micro SaaS applications based on complexity and requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasPricing.map((category, index) => (
                <UltraFuturisticCard key={category.category} className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{category.price}</div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm text-slate-400 mb-6">
                    <p className="font-semibold mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex}>• {example}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-slate-700 hover:bg-slate-600">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </UltraFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Contact us for a custom quote tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="bg-slate-700 hover:bg-slate-600 px-8 py-4">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}