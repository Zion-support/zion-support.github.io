import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react';
import Layout from './components/Layout';

const pricingPlans = [
  {
    name: "Starter",
    price: "$800-1,500",
    period: "per month",
    description: "Perfect for small businesses and startups getting started with technology solutions",
    icon: "🚀",
    color: "from-green-500 to-green-700",
    features: [
      "Basic AI automation tools",
      "Essential IT support (8x5)",
      "2-3 Micro SaaS solutions",
      "Email support",
      "Monthly reporting",
      "Basic security features",
      "Up to 5 users",
      "Standard integrations"
    ],
    limitations: [
      "Limited customization",
      "Basic analytics",
      "Standard response time"
    ],
    popular: false,
    cta: "Get Started",
    href: "/contact?plan=starter"
  },
  {
    name: "Professional",
    price: "$1,500-3,500",
    period: "per month",
    description: "Ideal for growing businesses that need comprehensive technology solutions",
    icon: "⭐",
    color: "from-blue-500 to-blue-700",
    features: [
      "Advanced AI solutions (10+ tools)",
      "Comprehensive IT services (24/7)",
      "Full Micro SaaS suite (15+ tools)",
      "Priority support",
      "Weekly reporting & analytics",
      "Advanced security & compliance",
      "Up to 25 users",
      "Custom integrations",
      "Dedicated account manager",
      "Performance optimization",
      "Training & onboarding"
    ],
    limitations: [
      "Limited custom development",
      "Standard SLA"
    ],
    popular: true,
    cta: "Most Popular",
    href: "/contact?plan=professional"
  },
  {
    name: "Enterprise",
    price: "$3,500+",
    period: "per month",
    description: "For large organizations requiring custom solutions and dedicated support",
    icon: "🏢",
    color: "from-purple-500 to-purple-700",
    features: [
      "Custom AI development",
      "Enterprise IT infrastructure",
      "Bespoke SaaS solutions",
      "24/7 dedicated support",
      "Real-time monitoring & alerts",
      "Custom development & integrations",
      "Unlimited users",
      "Dedicated account manager",
      "SLA guarantees",
      "Advanced analytics & reporting",
      "Compliance & security audits",
      "Custom training programs",
      "White-label solutions"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
    href: "/contact?plan=enterprise"
  }
];

const serviceCategories = [
  {
    name: "AI Services",
    icon: "🧠",
    pricing: [
      { service: "Machine Learning Models", price: "$3,500/month", market: "$5,000-12,000/month" },
      { service: "AI Business Automation", price: "$1,800/month", market: "$3,000-6,000/month" },
      { service: "AI Content Generation", price: "$1,500/month", market: "$2,500-5,000/month" },
      { service: "AI Data Analytics", price: "$2,000/month", market: "$3,500-8,000/month" },
      { service: "Computer Vision", price: "$2,800/month", market: "$4,000-8,000/month" },
      { service: "Natural Language Processing", price: "$2,200/month", market: "$3,500-7,500/month" }
    ]
  },
  {
    name: "IT Services",
    icon: "🖥️",
    pricing: [
      { service: "Cloud Infrastructure", price: "$1,800/month", market: "$3,500-8,000/month" },
      { service: "Cybersecurity Solutions", price: "$2,500/month", market: "$5,000-15,000/month" },
      { service: "DevOps & Automation", price: "$2,000/month", market: "$4,000-10,000/month" },
      { service: "Database Management", price: "$1,500/month", market: "$3,000-7,500/month" },
      { service: "Managed IT Services", price: "$1,200/month", market: "$2,500-6,000/month" },
      { service: "IT Consulting", price: "$1,500/month", market: "$3,000-8,000/month" }
    ]
  },
  {
    name: "Micro SaaS",
    icon: "☁️",
    pricing: [
      { service: "AI Lead Generation", price: "$1,200/month", market: "$2,500-5,000/month" },
      { service: "Smart Scheduling", price: "$800/month", market: "$1,500-3,000/month" },
      { service: "Customer Support AI", price: "$1,000/month", market: "$2,000-4,500/month" },
      { service: "Financial Analytics", price: "$1,800/month", market: "$3,500-7,000/month" },
      { service: "Inventory Management", price: "$1,400/month", market: "$2,500-5,500/month" },
      { service: "Social Media AI", price: "$1,200/month", market: "$2,200-4,800/month" }
    ]
  }
];

const faqs = [
  {
    question: "What's included in the pricing?",
    answer: "All pricing includes implementation, setup, training, ongoing support, and regular updates. No hidden fees or surprise costs."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. We'll prorate any changes and ensure a smooth transition."
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Absolutely! For enterprise clients with specific needs, we offer custom pricing based on your requirements and scope of work."
  },
  {
    question: "What's the contract length?",
    answer: "We offer flexible month-to-month contracts with no long-term commitments. Annual contracts receive a 15% discount."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 30-day free trial for all our services so you can experience the value before committing."
  },
  {
    question: "What support is included?",
    answer: "All plans include email support. Professional and Enterprise plans include priority support, phone support, and dedicated account managers."
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs. What you see is what you pay."
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get started in 1-2 weeks with our streamlined onboarding process."
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "30-day money-back guarantee if you're not satisfied with our services."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Expert support team available to help you succeed with our solutions."
  }
];

export default function PricingPage() {
  return (
    <Layout
      title="Pricing - Zion Tech Group | Transparent Technology Service Pricing"
      description="Transparent pricing for AI services, IT solutions, and micro SaaS platforms. Competitive rates with no hidden fees. Get started from $800/month."
      keywords="pricing, AI services pricing, IT services cost, micro SaaS pricing, technology consulting rates"
      canonical="https://ziontechgroup.com/pricing"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transparent{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Competitive pricing for our comprehensive technology services. No hidden fees, no surprises. 
                Choose the plan that fits your business needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Flexible pricing plans designed to scale with your business. All plans include our core services with transparent pricing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-blue-500 relative scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Limitations:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx}>• {limitation}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={plan.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Category Pricing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Individual Service Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Detailed pricing for individual services. Mix and match based on your specific needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-gray-50 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-6">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.pricing.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{service.service}</h4>
                          <div className="text-right">
                            <div className="text-blue-600 font-bold text-sm">{service.price}</div>
                            <div className="text-gray-500 text-xs line-through">{service.market}</div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 font-medium">Save up to 50% vs market</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our Pricing?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We believe in transparent, fair pricing that delivers exceptional value for your investment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about our pricing and services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom quote tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Quote
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
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
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}