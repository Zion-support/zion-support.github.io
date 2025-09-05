import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Users,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const services = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    href: '/ai-services',
    features: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'AI Strategy']
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions including cloud computing and cybersecurity',
    icon: Cloud,
    href: '/it-services',
    features: ['Cloud Migration', 'DevOps', 'Cybersecurity', 'Data Analytics']
  },
  {
    title: 'Micro SaaS',
    description: 'Custom software solutions designed for small and medium businesses',
    icon: Zap,
    href: '/micro-saas',
    features: ['SaaS Development', 'API Integration', 'User Management', 'Payment Processing']
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Focused Solutions',
    description: 'Tailored technology solutions that address your specific business needs'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Rapid development and deployment to get you to market quickly'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance for all our solutions'
  },
  {
    icon: BarChart3,
    title: 'Proven Results',
    description: 'Track record of delivering measurable business value'
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'kleber@ziontechgroup.com',
    href: 'mailto:kleber@ziontechgroup.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 302 464 0950',
    href: 'tel:+13024640950'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '364 E Main St STE 1008, Middletown DE 19709',
    href: '#'
  }
];

export default function HomePage() {
  return (
    <Layout
      title="Zion Tech Group - AI, IT, and Micro SaaS Solutions"
      description="Leading provider of AI, IT services, and Micro SaaS solutions. Transform your business with cutting-edge technology."
      keywords="AI services, IT services, Micro SaaS, technology solutions, business transformation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We deliver cutting-edge AI, IT, and Micro SaaS solutions that drive growth, 
                efficiency, and innovation for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver technology solutions that drive real business value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <benefit.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your project and discover how we can help transform your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}