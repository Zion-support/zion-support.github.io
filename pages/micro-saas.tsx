import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Rocket, 
  DollarSign,
  BarChart3,
  Users,
  Settings,
  CheckCircle,
  Star,
  Award,
  Globe,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';

const microSaasProducts = [
  {
    icon: Zap,
    title: 'TaskFlow Pro',
    description: 'Streamline your workflow with our intelligent task management and automation platform.',
    features: [
      'Smart Task Automation',
      'Team Collaboration',
      'Progress Tracking',
      'Integration APIs',
      'Mobile App'
    ],
    pricing: '$29/month',
    category: 'Productivity'
  },
  {
    icon: BarChart3,
    title: 'AnalyticsHub',
    description: 'Powerful analytics and reporting tools for small to medium businesses.',
    features: [
      'Real-time Dashboards',
      'Custom Reports',
      'Data Visualization',
      'Export Options',
      'API Access'
    ],
    pricing: '$49/month',
    category: 'Analytics'
  },
  {
    icon: Users,
    title: 'TeamSync',
    description: 'Collaborative workspace solution for remote and hybrid teams.',
    features: [
      'Video Conferencing',
      'File Sharing',
      'Project Management',
      'Time Tracking',
      'Team Chat'
    ],
    pricing: '$39/month',
    category: 'Collaboration'
  },
  {
    icon: Shield,
    title: 'SecureVault',
    description: 'Enterprise-grade security and compliance management for small businesses.',
    features: [
      'Security Monitoring',
      'Compliance Reports',
      'Risk Assessment',
      'Incident Response',
      'Training Modules'
    ],
    pricing: '$59/month',
    category: 'Security'
  },
  {
    icon: Globe,
    title: 'LocalSEO Pro',
    description: 'Complete local SEO management and optimization platform.',
    features: [
      'Local Listings',
      'Review Management',
      'Citation Building',
      'Rank Tracking',
      'Competitor Analysis'
    ],
    pricing: '$79/month',
    category: 'Marketing'
  },
  {
    icon: Settings,
    title: 'CodeDeploy',
    description: 'Automated deployment and CI/CD pipeline for small development teams.',
    features: [
      'Automated Deployments',
      'Environment Management',
      'Rollback Capabilities',
      'Integration Testing',
      'Monitoring'
    ],
    pricing: '$99/month',
    category: 'Development'
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Affordable solutions that provide maximum value for your investment.'
  },
  {
    icon: Rocket,
    title: 'Quick Setup',
    description: 'Get up and running in minutes with our easy-to-use platforms.'
  },
  {
    icon: Layers,
    title: 'Scalable',
    description: 'Grow with your business with flexible pricing and feature options.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support to help you succeed with our products.'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 users',
      'Basic features',
      'Email support',
      '5GB storage',
      'Mobile app access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced features',
      'Priority support',
      '50GB storage',
      'API access',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'All features',
      'Dedicated support',
      'Unlimited storage',
      'Custom development',
      'SLA guarantee'
    ],
    popular: false
  }
];

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS products designed to solve specific business problems with simple, affordable solutions." />
        <meta name="keywords" content="micro SaaS, SaaS products, business software, productivity tools, analytics, collaboration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/micro-saas" className="text-white font-semibold">Micro SaaS</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Micro
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SaaS
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Simple, powerful software solutions that solve specific business problems. 
                No complexity, no bloat - just tools that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#products" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Micro SaaS Products */}
        <section id="products" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Focused solutions that address specific business needs without unnecessary complexity.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <product.icon className="h-12 w-12 text-blue-400" />
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-400">{product.pricing}</div>
                    <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Micro SaaS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Micro SaaS products offer focused solutions that are easy to use, affordable, and effective.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <benefit.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features and support.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Simplify Your Workflow?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Discover how our micro SaaS products can streamline your business operations and boost productivity.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-white font-semibold">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}