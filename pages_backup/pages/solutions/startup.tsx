import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  DollarSign, 
  Users, 
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Target,
  TrendingUp
} from 'lucide-react';
import Layout from '../../components/Layout';

const features = [
  {
    title: "Quick Setup",
    description: "Get up and running in days, not months",
    icon: Zap,
    benefits: [
      "Pre-built templates",
      "One-click deployment",
      "Automated configuration",
      "Instant scaling"
    ]
  },
  {
    title: "Cost Effective",
    description: "Affordable solutions that grow with your budget",
    icon: DollarSign,
    benefits: [
      "Pay-as-you-scale pricing",
      "No upfront costs",
      "Transparent billing",
      "Budget-friendly options"
    ]
  },
  {
    title: "Scalable Growth",
    description: "Solutions that grow with your startup",
    icon: TrendingUp,
    benefits: [
      "Auto-scaling infrastructure",
      "Modular architecture",
      "Easy upgrades",
      "Future-proof design"
    ]
  },
  {
    title: "Expert Guidance",
    description: "Get the support you need to succeed",
    icon: Users,
    benefits: [
      "Dedicated startup advisor",
      "Best practices guidance",
      "Technical support",
      "Growth strategy consulting"
    ]
  }
];

const packages = [
  {
    name: "Launch Package",
    price: "$2,999",
    duration: "1-2 weeks",
    description: "Perfect for MVP development and initial launch",
    features: [
      "Basic cloud setup",
      "Core functionality",
      "Security essentials",
      "1 month support"
    ],
    popular: false
  },
  {
    name: "Growth Package",
    price: "$7,999",
    duration: "2-4 weeks",
    description: "Ideal for scaling startups with growing user base",
    features: [
      "Advanced cloud infrastructure",
      "Analytics & monitoring",
      "API development",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Scale Package",
    price: "$19,999",
    duration: "4-8 weeks",
    description: "Complete solution for established startups",
    features: [
      "Enterprise-grade infrastructure",
      "Custom integrations",
      "Advanced security",
      "6 months support"
    ],
    popular: false
  }
];

const successStories = [
  {
    company: "TechStart Inc.",
    industry: "FinTech",
    growth: "300% user growth",
    description: "Scaled from 1K to 100K users in 6 months"
  },
  {
    company: "HealthTech Solutions",
    industry: "Healthcare",
    growth: "500% revenue increase",
    description: "Expanded to 5 new markets with our platform"
  },
  {
    company: "EduTech Platform",
    industry: "Education",
    growth: "1000% user growth",
    description: "Served 50K+ students with our learning platform"
  }
];

export default function StartupSolutionsPage() {
  return (
    <Layout 
      title="Startup Solutions - Zion Tech Group"
      description="Fast, affordable technology solutions for startups. Quick setup, cost-effective pricing, and expert guidance to help your startup succeed."
      keywords="startup solutions, MVP development, startup technology, affordable tech solutions, startup consulting"
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
              <div className="flex items-center justify-center mb-6">
                <Rocket className="w-16 h-16 text-green-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Startup Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Fast, affordable technology solutions designed specifically for startups. 
                Get to market quickly with our proven startup packages and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Startup Quote
                </Link>
                <Link href="/solutions" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
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
                Why Startups Choose Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We understand the unique challenges startups face and have designed our solutions 
                to help you succeed from day one.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* Packages Section */}
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
                Startup Packages
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the package that fits your startup's current needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                    pkg.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {pkg.price}
                  </div>
                  
                  <div className="text-gray-500 mb-4">
                    {pkg.duration}
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Startup Success Stories
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                See how we've helped startups achieve remarkable growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    {story.growth}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {story.company}
                  </div>
                  <div className="text-sm text-gray-400 mb-3">
                    {story.industry}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {story.description}
                  </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let's turn your startup idea into a reality with our proven technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
