import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Shield, 
  Rocket, 
  Building, 
  Users, 
  Brain, 
  Network, 
  Lock, 
  TrendingUp, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
  BarChart3,
  Settings,
  Cloud,
  Database,
  Code,
  Wifi,
  Smartphone,
  Laptop,
  Monitor,
  Server,
  Cpu,
  HardDrive,
  Activity,
  RefreshCw,
  Layers,
  Compass,
  Award,
  DollarSign,
  Heart,
  Home,
  Phone,
  Mail,
  MapPin,
  Eye,
  FileText,
  BookOpen,
  Search,
  ShoppingCart,
  MessageSquare,
  Video,
  PlayCircle,
  Download,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  Calendar,
  Camera,
  CreditCard,
  Gamepad2,
  PieChart,
  Truck,
  ClipboardList,
  Bot,
  GraduationCap,
  Calculator
} from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Solutions',
    icon: Shield,
    description: 'Comprehensive enterprise-grade solutions designed for large organizations with complex requirements.',
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Scalable Architecture',
      'Enterprise Security',
      '24/7 Support',
      'Custom Integration',
      'Compliance Management',
      'Advanced Analytics'
    ],
    benefits: [
      'Reduced Operational Costs',
      'Enhanced Security',
      'Improved Efficiency',
      'Better Compliance'
    ],
    pricing: 'Custom Pricing',
    timeline: '3-12 months',
    popular: true
  },
  {
    title: 'Startup Solutions',
    icon: Rocket,
    description: 'Rapid deployment solutions designed to help startups scale quickly and efficiently.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'Rapid Deployment',
      'Cost-effective Pricing',
      'Scalable Infrastructure',
      'Quick Setup',
      'Essential Features',
      'Growth Support'
    ],
    benefits: [
      'Fast Time to Market',
      'Lower Initial Investment',
      'Scalable Growth',
      'Expert Guidance'
    ],
    pricing: 'Starting at $999/month',
    timeline: '1-4 weeks',
    popular: true
  },
  {
    title: 'AI-Powered Solutions',
    icon: Brain,
    description: 'Cutting-edge AI solutions that transform your business operations and decision-making.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automated Decision Making',
      'Real-time Insights'
    ],
    benefits: [
      'Increased Automation',
      'Better Decision Making',
      'Reduced Manual Work',
      'Enhanced Customer Experience'
    ],
    pricing: 'Starting at $2,499/month',
    timeline: '2-8 weeks',
    popular: true
  },
  {
    title: 'Cloud Solutions',
    icon: Cloud,
    description: 'Scalable cloud infrastructure solutions for modern businesses.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Cloud Migration',
      'Auto-scaling',
      'High Availability',
      'Disaster Recovery',
      'Cost Optimization',
      'Security Compliance'
    ],
    benefits: [
      'Reduced Infrastructure Costs',
      'Improved Reliability',
      'Enhanced Security',
      'Global Accessibility'
    ],
    pricing: 'Starting at $1,499/month',
    timeline: '2-6 weeks',
    popular: false
  },
  {
    title: 'IoT Solutions',
    icon: Wifi,
    description: 'Internet of Things solutions for connected devices and smart systems.',
    color: 'from-orange-500 to-red-500',
    features: [
      'Device Management',
      'Real-time Monitoring',
      'Data Analytics',
      'Remote Control',
      'Predictive Maintenance',
      'Integration APIs'
    ],
    benefits: [
      'Operational Efficiency',
      'Predictive Maintenance',
      'Real-time Insights',
      'Cost Reduction'
    ],
    pricing: 'Starting at $1,999/month',
    timeline: '4-12 weeks',
    popular: false
  },
  {
    title: 'Blockchain Solutions',
    icon: Lock,
    description: 'Secure blockchain solutions for transparent and decentralized operations.',
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Smart Contracts',
      'Decentralized Applications',
      'Cryptocurrency Integration',
      'Supply Chain Tracking',
      'Identity Management',
      'Secure Transactions'
    ],
    benefits: [
      'Enhanced Security',
      'Transparency',
      'Reduced Fraud',
      'Decentralized Control'
    ],
    pricing: 'Starting at $3,999/month',
    timeline: '6-16 weeks',
    popular: false
  }
];

const industries = [
  {
    title: 'Healthcare',
    icon: Heart,
    description: 'HIPAA-compliant solutions for healthcare providers',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Finance',
    icon: DollarSign,
    description: 'Secure financial technology solutions',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'Educational technology and learning platforms',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Manufacturing',
    icon: Settings,
    description: 'Industrial automation and smart manufacturing',
    color: 'from-gray-500 to-slate-500'
  },
  {
    title: 'Retail',
    icon: ShoppingCart,
    description: 'E-commerce and retail technology solutions',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Transportation',
    icon: Truck,
    description: 'Logistics and transportation management systems',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function SolutionsPage() {
  return (
    <Layout title="Solutions - ZionTech Group" description="Comprehensive technology solutions for your business">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Technology Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your business with our comprehensive suite of technology solutions designed for modern enterprises
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${solution.color} text-white mb-6`}>
                    <solution.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900">{solution.pricing}</span>
                      {solution.popular && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Timeline: {solution.timeline}</p>
                    <Link 
                      href="/contact" 
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized solutions tailored to specific industries and their unique requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${industry.color} text-white mb-6`}>
                    <industry.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {industry.description}
                  </p>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}