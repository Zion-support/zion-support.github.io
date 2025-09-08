import React from 'react'
import { Link } from 'react-router-dom'


const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Zap, Shield, ArrowRight, CheckCircle, Users, Globe, Award, Cpu, Star, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Countries Served' }
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
];

const services = [
  {
    title: 'AI Services',
<<<<<<< HEAD
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
=======
    description: '20+ cutting-edge AI solutions including machine learning, computer vision, NLP, and quantum AI',
    icon: Brain,
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    stats: '20+ AI Solutions',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'IT Services',
    description: '25+ comprehensive IT services from cloud infrastructure to quantum computing and 6G networks',
    icon: Network,
    link: '/it-services',
    color: 'from-green-500 to-blue-600',
    stats: '25+ IT Services',
    pricing: 'Starting at $1,999/month'
  },
  {
    title: 'Micro SAAS',
    description: '30+ innovative micro SaaS solutions for modern businesses across all industries',
    icon: Cloud,
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600',
    stats: '30+ SaaS Solutions',
    pricing: 'Starting at $15/month'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, migration services, and DevOps automation',
    icon: Globe,
    link: '/cloud-solutions',
    color: 'from-indigo-500 to-cyan-600',
    stats: 'Multi-Cloud Support',
    pricing: 'Starting at $1,800/month'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions with AI-powered threat detection and zero-trust architecture',
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
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
<<<<<<< HEAD
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
=======
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
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

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Business?
						</h2>
						<p className="mt-6 text-xl text-blue-100">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
							>
								Get Started Today
							</Link>
							<Link
								to="/about"
								className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
							>
								Learn More About Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</
	)
}>