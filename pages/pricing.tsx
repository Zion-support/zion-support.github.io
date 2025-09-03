<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
=======
import { Check, Star, ArrowRight, Zap, Shield, Users, Clock } from 'lucide-react';

>>>>>>> main
export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with technology',
      features: [
        'Basic AI consultation',
        'IT support (8 hours/month)',
        'Email support',
        'Basic security monitoring',
        'Monthly reporting',
        'Up to 5 users'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { Check, Star, ArrowRight, Zap, Users, Building, Crown } from 'lucide-react';
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, Phone, Mail } from 'lucide-react';
>>>>>>> main

const Pricing = () => {
  const plans = [
    {
<<<<<<< HEAD
      name: "Starter", description: "Perfect for small businesses and startups",
      price: "$2, 500",
      period: "per month", icon: Zap,
      color: "blue", features: [
        "Basic website development",
        "Up to 5 pages", "Mobile responsive design",
        "Basic SEO optimization", "Email support",
        "3 months maintenance included"
      ], popular: false
    },
    {
      name: "Professional", description: "Ideal for growing businesses",
      price: "$5, 000",
      period: "per month", icon: Users,
      color: "purple", features: [
        "Custom web application development",
        "Up to 15 pages", "Advanced features and integrations",
        "Advanced SEO optimization", "Priority email support",
        "6 months maintenance included", "Performance optimization",
        "Analytics setup"
      ], popular: true
    },
    {
      name: "Enterprise", description: "For large organizations and complex projects",
      price: "Custom", period: "quote",
      icon: Building, color: "green",
      features: [
        "Full-stack enterprise solutions", "Unlimited pages and features",
        "Custom integrations and APIs", "Advanced security features",
        "Dedicated project manager", "24/7 phone and email support",
        "12 months maintenance included", "Custom training and documentation",
        "SLA guarantees"
      ], popular: false
=======
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 team members',
        'Basic AI services',
        'Email support',
        'Standard hosting',
        'Basic analytics',
        'Monthly reports'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
>>>>>>> main
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
<<<<<<< HEAD
      description: 'Ideal for growing businesses with advanced technology needs',
      features: [
        'Advanced AI services',
        'IT support (20 hours/month)',
        'Priority support',
        'Advanced security monitoring',
        'Weekly reporting',
        'Up to 25 users',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact?plan=professional'
=======
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI services',
        'Priority support',
        'Premium hosting',
        'Advanced analytics',
        'Weekly reports',
        'Custom integrations',
        'API access'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600'
>>>>>>> main
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
<<<<<<< HEAD
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Full AI implementation',
        'Dedicated IT team',
        '24/7 support',
        'Enterprise security',
        'Real-time reporting',
        'Unlimited users',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
=======
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite',
        '24/7 dedicated support',
        'Enterprise hosting',
        'Custom analytics',
        'Real-time reports',
        'Unlimited integrations',
        'Full API access',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-green-500 to-green-600'
>>>>>>> main
>>>>>>> main
    }
  ];

  const addOns = [
    {
<<<<<<< HEAD
      name: 'Micro SaaS Development',
      price: '$15,000',
      description: 'Custom micro SaaS solution development and deployment',
      features: ['Custom development', 'Cloud deployment', '3 months support']
    },
    {
      name: 'AI Model Training',
      price: '$8,000',
      description: 'Custom AI model training for your specific use case',
      features: ['Data preparation', 'Model training', 'Performance optimization']
    },
    {
      name: 'Security Audit',
      price: '$5,000',
      description: 'Comprehensive security assessment and recommendations',
      features: ['Vulnerability assessment', 'Compliance review', 'Action plan']
=======
<<<<<<< HEAD
      service: "AI Development", description: "Custom AI solutions and machine learning models",
      startingPrice: "$10, 000",
      features: ["Custom AI models", "Data analysis", "Integration support", "Training and documentation"]
    }, {
      service: "Cloud Services",
      description: "Cloud migration and infrastructure management", startingPrice: "$5,000", features: ["Cloud migration", "Infrastructure setup", "Monitoring and maintenance", "Security implementation"]
    }, {
      service: "Mobile Development",
      description: "Native and cross-platform mobile applications", startingPrice: "$8,000", features: ["iOS and Android apps", "Cross-platform solutions", "App store deployment", "Ongoing updates"]
    }, {
      service: "Blockchain Solutions",
      description: "Blockchain development and smart contracts", startingPrice: "$15,000", features: ["Smart contract development", "Blockchain integration", "Security auditing", "Deployment support"]
=======
      name: 'Additional AI Credits',
      price: '$0.10',
      description: 'Per AI request beyond plan limits',
      icon: Zap
    },
    {
      name: 'Premium Support',
      price: '$500',
      description: 'Per month for priority support',
      icon: Shield
    },
    {
      name: 'Custom Development',
      price: '$150',
      description: 'Per hour for custom features',
      icon: Users
    },
    {
      name: 'Training Sessions',
      price: '$200',
      description: 'Per hour for team training',
      icon: Globe
>>>>>>> main
>>>>>>> main
    }
  ];

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for Zion Tech Group's technology services. Choose the plan that fits your business needs and budget."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Simple
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and support.
          </p>
        </div>
      </section>
=======
>>>>>>> main
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS development. Choose the plan that fits your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Head>
      
<<<<<<< HEAD
=======
      <Navigation />
      
>>>>>>> main
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
<<<<<<< HEAD
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core services 
                with the flexibility to scale as you grow.
=======
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the plan that fits your business needs. All plans include our core services with no hidden fees.
>>>>>>> main
              </p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
<<<<<<< HEAD
                <div key={index} className={`relative rounded-lg p-8 ${
                  plan.popular 
                    ? 'bg-blue-50 border-2 border-blue-600 shadow-lg' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href} className="block">
                    <div className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      {plan.cta}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

=======
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
                } overflow-hidden`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className={`block w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </div>
                </div>
<<<<<<< HEAD

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover: from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
=======
              ))}
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* Service Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service-Specific Pricing</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePricing.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">Starting at {service.startingPrice}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-blue-600 hover: text-blue-700 font-semibold flex items-center"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Crown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We deliver high-quality solutions using the latest technologies and best practices in the industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced developers and designers work closely with you to bring your vision to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of time and deliver projects on schedule without compromising quality.
              </p>
=======
>>>>>>> main
        {/* Add-ons Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
<<<<<<< HEAD
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enhance your plan with these specialized services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{addon.price}</div>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional value through our comprehensive approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
                <p className="text-gray-600">Quick deployment and setup with minimal disruption to your business operations.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards to protect your data and systems.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600">Dedicated support team with deep expertise in AI, IT, and software development.</p>
              </div>
=======
              <p className="text-lg text-gray-600">
                Enhance your plan with these optional add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <addon.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{addon.name}</h3>
                      <p className="text-2xl font-bold text-blue-600">{addon.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              ))}
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in support?</h3>
                <p className="text-gray-600">Support includes email assistance, phone support (for Professional and Enterprise plans), and access to our knowledge base.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer custom solutions?</h3>
                <p className="text-gray-600">Yes, our Enterprise plan includes custom development and we can create tailored solutions for your specific needs.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees for any of our plans. You only pay the monthly subscription fee.</p>
=======
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>

<<<<<<< HEAD
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s included in maintenance?</h3>'
              <p className="text-gray-600">
                Maintenance includes bug fixes, security updates, performance optimization, and minor feature enhancements as specified in your plan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change my plan later?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. We&apos;ll work with you to ensure a smooth transition.'
              </p>
            </div>
=======
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
>>>>>>> main

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a free trial available?</h3>
                <p className="text-gray-600">Yes, we offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-600">We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional credits as needed.</p>
>>>>>>> main
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote that fits your budget.
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Free Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View Services
            </Link>
=======
>>>>>>> main
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
              Contact us today to discuss your needs and find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
=======
              Contact our team to discuss your specific needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
              <Link href="/pricing-guide" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Detailed Pricing Guide
              </Link>
            </div>
>>>>>>> main
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Pricing;
>>>>>>> main
