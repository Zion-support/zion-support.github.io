import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Star, ArrowRight, Zap, Users, Building } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for small businesses getting started",
      icon: Zap,
      features: [
        "Basic AI integration",
        "Cloud hosting setup",
        "Email support",
        "Monthly reporting",
        "Basic analytics",
        "SSL certificate"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      icon: Users,
      features: [
        "Advanced AI solutions",
        "Custom cloud architecture",
        "Priority support",
        "Weekly reporting",
        "Advanced analytics",
        "API integrations",
        "Custom development",
        "Performance monitoring"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      icon: Building,
      features: [
        "Full AI transformation",
        "Multi-cloud architecture",
        "24/7 dedicated support",
        "Real-time reporting",
        "Enterprise analytics",
        "Custom integrations",
        "Dedicated team",
        "SLA guarantees",
        "Security compliance",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      price: "$5,000",
      description: "Custom AI model development and training"
    },
    {
      name: "Cloud Migration",
      price: "$10,000",
      description: "Complete cloud infrastructure migration"
    },
    {
      name: "Security Audit",
      price: "$3,500",
      description: "Comprehensive security assessment and recommendations"
    },
    {
      name: "Performance Optimization",
      price: "$2,500",
      description: "System performance analysis and optimization"
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>Pricing — Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's technology solutions. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that fits your business needs. All plans include our core services 
              with the flexibility to scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white p-8 rounded-2xl shadow-lg ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Enhance your plan with these specialized services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{addon.price}</div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected 
                in your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the setup fee?
              </h3>
              <p className="text-gray-600">
                Setup includes initial configuration, integration, testing, and training for your team. 
                The exact scope depends on your chosen plan.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our Enterprise plan is fully customizable, and we can create tailored 
                solutions for your specific business requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600">
                Support varies by plan: Starter includes email support, Professional includes priority 
                support, and Enterprise includes 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your needs and find the perfect solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Contact Sales
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}