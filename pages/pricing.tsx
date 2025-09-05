import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Shield,
  Users,
  Clock
} from 'lucide-react';
import Layout from './components/Layout';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$2,500",
    period: "/month",
    features: [
      "Basic AI/ML Solutions",
      "Cloud Infrastructure Setup",
      "Email Support",
      "Monthly Reports",
      "Basic Security",
      "5 Team Members"
    ],
    limitations: [
      "Limited Customization",
      "Basic Analytics",
      "Standard SLA"
    ],
    popular: false,
    cta: "Get Started",
    color: "blue"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$5,000",
    period: "/month",
    features: [
      "Advanced AI/ML Solutions",
      "Full Cloud Migration",
      "Priority Support",
      "Real-time Analytics",
      "Advanced Security",
      "15 Team Members",
      "Custom Integrations",
      "API Access"
    ],
    limitations: [
      "Limited Custom Development",
      "Standard Training"
    ],
    popular: true,
    cta: "Most Popular",
    color: "purple"
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$10,000",
    period: "/month",
    features: [
      "Custom AI/ML Solutions",
      "Multi-Cloud Strategy",
      "24/7 Dedicated Support",
      "Advanced Analytics & BI",
      "Enterprise Security",
      "Unlimited Team Members",
      "Custom Development",
      "Dedicated Account Manager",
      "Training & Workshops",
      "SLA Guarantee"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
    color: "indigo"
  }
];

const servicePricing = [
  {
    service: "AI/ML Development",
    starter: "$2,500/month",
    professional: "$5,000/month",
    enterprise: "Custom"
  },
  {
    service: "Cloud Solutions",
    starter: "$1,800/month",
    professional: "$3,500/month",
    enterprise: "Custom"
  },
  {
    service: "Cybersecurity",
    starter: "$2,000/month",
    professional: "$4,000/month",
    enterprise: "Custom"
  },
  {
    service: "Data Analytics",
    starter: "$2,200/month",
    professional: "$4,500/month",
    enterprise: "Custom"
  },
  {
    service: "Micro SaaS Development",
    starter: "$1,500/month",
    professional: "$3,000/month",
    enterprise: "Custom"
  },
  {
    service: "IT Services",
    starter: "$1,200/month",
    professional: "$2,500/month",
    enterprise: "Custom"
  }
];

const faqs = [
  {
    question: "What's included in the monthly fee?",
    answer: "Our monthly fee includes all development work, infrastructure costs, support, and maintenance. There are no hidden fees or additional charges."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. We'll prorate the billing and ensure a smooth transition."
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Absolutely! For enterprise clients with specific needs, we offer custom pricing and solutions tailored to your requirements."
  },
  {
    question: "What's your cancellation policy?",
    answer: "You can cancel your subscription at any time with 30 days notice. We'll help with the transition and data migration if needed."
  },
  {
    question: "Do you offer discounts for annual payments?",
    answer: "Yes, we offer 10% discount for annual payments and 15% discount for multi-year commitments."
  },
  {
    question: "What support is included?",
    answer: "All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support."
  }
];

export default function PricingPage() {
  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for our technology solutions. Choose the plan that fits your business needs. No hidden fees, flexible options."
      keywords="pricing, technology solutions, AI development, cloud computing, cybersecurity, transparent pricing, flexible plans"
      canonical="https://ziontechgroup.com/pricing"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transparent 
              <span className="text-emerald-400"> Pricing</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-emerald-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the plan that fits your business needs. No hidden fees, 
              flexible options, and transparent pricing for all our technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing options for businesses of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-emerald-500 transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <X className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Pricing</h2>
            <p className="text-xl text-gray-600">Detailed pricing for individual services</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {servicePricing.map((service, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">{service.service}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{service.starter}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{service.professional}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{service.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Compare features across all plans</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Starter Plan</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic AI/ML Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Monthly Reports</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 ring-2 ring-emerald-500">
              <h3 className="text-xl font-semibold mb-4 text-center">Professional Plan</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced AI/ML Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full Cloud Migration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Real-time Analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom Integrations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Enterprise Plan</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom AI/ML Solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Multi-Cloud Strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced Analytics & BI</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>SLA Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common pricing questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Contact us today to discuss your specific needs and get a custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Custom Quote
            </Link>
            <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Request Proposal
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}