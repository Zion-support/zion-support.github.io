import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Server, 
  Shield, 
  Cloud, 
  Database,
  Wifi,
  Monitor,
  Smartphone,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Lock,
  Globe,
  Settings
} from 'lucide-react';

const itServices = [
  {
    icon: Server,
    title: 'Infrastructure Management',
    description: 'Complete IT infrastructure setup, monitoring, and maintenance for optimal performance.',
    features: [
      'Server Setup & Configuration',
      'Network Design & Implementation',
      'Hardware Procurement',
      'Performance Monitoring',
      '24/7 Support'
    ],
    pricing: 'Starting at $2,000/month'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrate to the cloud with our comprehensive cloud strategy and implementation services.',
    features: [
      'Cloud Migration',
      'Multi-Cloud Strategy',
      'Cost Optimization',
      'Security Implementation',
      'Backup & Recovery'
    ],
    pricing: 'Starting at $1,500/month'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security solutions and threat monitoring.',
    features: [
      'Security Assessment',
      'Firewall Configuration',
      'Threat Detection',
      'Incident Response',
      'Security Training'
    ],
    pricing: 'Starting at $3,000/month'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure, efficient data storage and management solutions for your business needs.',
    features: [
      'Database Design',
      'Data Migration',
      'Backup Solutions',
      'Data Recovery',
      'Performance Tuning'
    ],
    pricing: 'Starting at $1,200/month'
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Reliable, secure network infrastructure designed for your business requirements.',
    features: [
      'Network Design',
      'WiFi Implementation',
      'VPN Setup',
      'Bandwidth Management',
      'Network Monitoring'
    ],
    pricing: 'Starting at $800/month'
  },
  {
    icon: Monitor,
    title: 'IT Support',
    description: 'Comprehensive IT support and helpdesk services to keep your business running smoothly.',
    features: [
      'Helpdesk Support',
      'Remote Assistance',
      'Software Installation',
      'Hardware Troubleshooting',
      'User Training'
    ],
    pricing: 'Starting at $1,000/month'
  }
];

const solutions = [
  {
    title: 'Small Business IT',
    description: 'Complete IT solutions for small businesses with limited resources.',
    icon: Smartphone,
    features: ['Basic Infrastructure', 'Cloud Services', 'Security Essentials', 'Support']
  },
  {
    title: 'Enterprise IT',
    description: 'Scalable IT solutions for large organizations with complex requirements.',
    icon: Server,
    features: ['Advanced Infrastructure', 'Enterprise Security', 'High Availability', 'Dedicated Support']
  },
  {
    title: 'Hybrid Cloud',
    description: 'Seamless integration between on-premises and cloud environments.',
    icon: Cloud,
    features: ['Cloud Migration', 'Hybrid Architecture', 'Data Synchronization', 'Cost Optimization']
  },
  {
    title: 'Managed Services',
    description: 'Complete IT management and monitoring for hands-off operation.',
    icon: Settings,
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Regular Updates', 'Performance Optimization']
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Improved Performance',
    description: 'Optimized IT infrastructure for faster, more reliable operations.'
  },
  {
    icon: Lock,
    title: 'Enhanced Security',
    description: 'Comprehensive security measures to protect your business data.'
  },
  {
    icon: Globe,
    title: 'Scalability',
    description: 'IT solutions that grow with your business needs.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated IT professionals available when you need them.'
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and IT support for businesses of all sizes." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, IT support, managed services" />
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
              <Link href="/it-services" className="text-white font-semibold">IT Services</Link>
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
                IT
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly. 
                From infrastructure management to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section id="services" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions designed to support your business operations and growth.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <service.icon className="h-12 w-12 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold mb-4">{service.pricing}</div>
                  <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">IT Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored IT solutions for businesses of all sizes and industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <solution.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our IT services are designed to provide reliable, secure, and scalable solutions 
                  that support your business objectives and growth.
                </p>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <benefit.icon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Let's discuss your IT needs and create a customized solution that works for your business. 
                  Our experts are ready to help you succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">10+ Years IT Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">100+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-200" />
                    <span className="text-blue-100">99% Uptime Guarantee</span>
                  </div>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your IT Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
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
                Ready to Optimize Your IT?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Today
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
                  <li><Link href="/it-services" className="text-white font-semibold">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
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