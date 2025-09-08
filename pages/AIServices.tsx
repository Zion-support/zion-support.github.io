import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Building,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Heart,
  DollarSign,
  BookOpen,
  ShoppingCart,
  Car,
  Clock,
  Users,
  Shield
} from 'lucide-react';
=======
import { Brain, CheckCircle, ArrowRight, Star } from 'lucide-react';
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e

const aiServices = [
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description: 'Comprehensive AI strategy development and implementation planning for your business',
    icon: Brain,
    features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'],
    pricing: 'Starting at $5,000/month'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Solutions',
    description: 'Custom ML models and algorithms tailored to your specific business needs',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Model Training'],
    pricing: 'Starting at $3,000/month'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis for various applications and industries',
    icon: Eye,
    features: ['Object Detection', 'Image Recognition', 'Video Analytics', 'Real-time Processing'],
    pricing: 'Starting at $4,000/month'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Text analysis and language understanding for chatbots and content processing',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development'],
    pricing: 'Starting at $2,500/month'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered medical diagnosis and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and algorithmic trading' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

const benefits = [
  {
    icon: ArrowRight,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline operations'
  },
  {
    icon: Star,
    title: 'Better Decision Making',
    description: 'Data-driven insights for strategic business decisions'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'AI systems that work around the clock'
  },
  {
    icon: Users,
    title: 'Scalable Solutions',
    description: 'Grow with your business needs'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced threat detection and prevention'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive reporting and insights'
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

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, automation"
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
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/case-studies"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold text-blue-600">
                    {service.pricing}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed for various industries and use cases
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="text-blue-400 mb-4">
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
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
                Why Choose Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive real business value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Contact us today to discuss your AI project requirements
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