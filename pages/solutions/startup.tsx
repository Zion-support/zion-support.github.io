import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Zap, DollarSign, TrendingUp, CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const startupFeatures = [
  {
    title: "Rapid Deployment",
    description: "Get your startup running in days, not months",
    icon: Zap,
    benefits: ["Quick setup", "Pre-built templates", "Automated deployment", "Instant scaling"]
  },
  {
    title: "Cost Effective",
    description: "Startup-friendly pricing that grows with your business",
    icon: DollarSign,
    benefits: ["Flexible pricing", "No upfront costs", "Pay as you grow", "Free tier available"]
  },
  {
    title: "Scalable Growth",
    description: "Solutions that scale from MVP to enterprise",
    icon: TrendingUp,
    benefits: ["Auto-scaling", "Performance optimization", "Growth planning", "Future-proof architecture"]
  },
  {
    title: "Expert Guidance",
    description: "Access to experienced startup advisors",
    icon: Users,
    benefits: ["Startup mentors", "Technical advisors", "Best practices", "24/7 support"]
  }
];

const startupPackages = [
  {
    name: "MVP Launch",
    price: "$2,999",
    period: "one-time",
    description: "Perfect for validating your idea",
    features: [
      "Basic web application",
      "User authentication",
      "Database setup",
      "Hosting for 3 months",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Growth Ready",
    price: "$4,999",
    period: "one-time",
    description: "Ideal for scaling startups",
    features: [
      "Full-stack application",
      "Advanced features",
      "Mobile responsive",
      "Analytics integration",
      "Priority support",
      "3 months hosting"
    ],
    popular: true
  },
  {
    name: "Enterprise Bound",
    price: "$9,999",
    period: "one-time",
    description: "For serious growth companies",
    features: [
      "Enterprise-grade app",
      "Advanced security",
      "Custom integrations",
      "Performance optimization",
      "Dedicated support",
      "6 months hosting"
    ],
    popular: false
  }
];

const startupStats = [
  { number: "500+", label: "Startups Launched" },
  { number: "48hrs", label: "Average Setup Time" },
  { number: "95%", label: "Success Rate" },
  { number: "$0", label: "Setup Fee" }
];

export default function StartupSolutionsPage() {
  return (
    <MainLayout
      title="Startup Solutions - Zion Tech Group"
      description="Fast, affordable technology solutions for startups. Get your MVP launched quickly with our startup-friendly packages."
      keywords="startup solutions, MVP development, startup technology, rapid deployment, cost effective"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Startup{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Fast, affordable technology solutions designed specifically for startups. 
                Launch your MVP quickly and scale efficiently as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Your Startup
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {startupStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Built for Startups
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our solutions are specifically designed to meet the unique needs of startups: 
                speed, affordability, and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startupFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Startup Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package for your startup stage. All packages include free consultation and setup.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {startupPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-gray-500 text-sm">{pkg.period}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join hundreds of successful startups that launched with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Journey
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}