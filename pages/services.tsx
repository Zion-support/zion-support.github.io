import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Award,
  Clock,
  Globe,
  Target,
  TrendingUp,
  Settings
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business operations.",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots", "Voice Recognition", "Image Analysis", "Data Mining"],
    pricing: "Starting at $2,000/project",
    count: "25+ AI Solutions",
    popular: true
  },
  {
    title: "IT Services",
    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, network management, and system administration to keep your business running smoothly.",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Infrastructure", "Cybersecurity", "Network Management", "System Administration", "DevOps", "Database Management", "IT Consulting", "24/7 Support"],
    pricing: "Starting at $120/hour",
    count: "15+ IT Solutions",
    popular: true
  },
  {
    title: "Micro SaaS",
    description: "Innovative software as a service solutions including AI-powered tools, blockchain applications, smart energy management, and specialized business automation platforms.",
    icon: Cloud,
    href: "/micro-saas",
    features: ["AI-Powered Tools", "Blockchain Analytics", "Smart Energy Management", "Voice AI Assistants", "Predictive Maintenance", "Smart Contracts", "Green Technology", "Advanced Automation"],
    pricing: "Starting at $29/month",
    count: "45+ Products",
    popular: true
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Proven Expertise",
    description: "500+ successful projects delivered across various industries"
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "99.9% uptime guarantee with enterprise-grade security"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ certified professionals with cutting-edge expertise"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions and client satisfaction"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile development with rapid deployment"
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Round-the-clock technical support"
  }
];

const industries = [
  { name: 'Healthcare', icon: Target, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: TrendingUp, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: Globe, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: Users, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Network, description: 'Autonomous systems and route optimization' }
];

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, and Micro SaaS products. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT services, Micro SaaS, technology solutions, cloud computing, software development" />
      </Head>

      <div className="min-h-screen bg-white">
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
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From AI-powered solutions to comprehensive IT services, we provide everything you need to succeed in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                      service.popular ? 'ring-2 ring-blue-200' : ''
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.count}
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and unwavering commitment to client success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our solutions are tailored to meet the unique needs of various industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600">
                      {industry.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and explore how we can help you achieve your goals with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}