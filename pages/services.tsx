import React from "react";
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
  Award,
  Clock,
  Shield,
  Zap,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Cpu,
  Bot,
  FileText,
  MessageSquare,
  Search,
  Eye,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Calendar,
  MapPin,
  Phone,
  Headphones,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    pricing: "Starting at $2,000/month",
    count: "15+ Services",
    popular: true
  },
  {
    title: "IT Services",
    description: "Comprehensive IT solutions for modern businesses",
    icon: Settings,
    href: "/it-services",
    features: ["Cloud Migration", "Cybersecurity", "System Integration", "IT Consulting"],
    pricing: "Starting at $150/hour",
    count: "20+ Services",
    popular: true
  },
  {
    title: "Micro SaaS",
    description: "Specialized software solutions for specific business needs",
    icon: Package,
    href: "/micro-saas",
    features: ["Custom Development", "API Integration", "Scalable Architecture", "24/7 Support"],
    pricing: "Starting at $99/month",
    count: "25+ Products",
    popular: true
  }
];

const mainServices = [
  {
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions to transform your business operations",
    icon: Brain,
    href: "/ai-services",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Chatbots",
      "Process Automation"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "IT Services",
    description: "Comprehensive information technology solutions for modern businesses",
    icon: Network,
    href: "/it-services",
    features: [
      "Cloud Migration",
      "Infrastructure Management",
      "Network Security",
      "System Integration",
      "IT Consulting",
      "24/7 Support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Micro SaaS",
    description: "Scalable software as a service solutions for specific business needs",
    icon: Cloud,
    href: "/micro-saas",
    features: [
      "Custom Applications",
      "API Development",
      "Data Management",
      "User Analytics",
      "Scalable Architecture",
      "Multi-tenant Solutions"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const additionalServices = [
  {
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions",
    icon: Shield,
    features: ["Threat Detection", "Data Encryption", "Security Audits", "Compliance"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services",
    icon: Server,
    features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Monitoring"]
  },
  {
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    icon: BarChart3,
    features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Reporting"]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
    features: ["iOS/Android Apps", "React Native", "Flutter", "App Store Optimization"]
  },
  {
    title: "Database Solutions",
    description: "Optimized database design and management",
    icon: Database,
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"]
  },
  {
    title: "IoT Solutions",
    description: "Internet of Things integration and development",
    icon: Cpu,
    features: ["Sensor Integration", "Real-time Monitoring", "Edge Computing", "Device Management"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your requirements and propose the best solution for your needs"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Development",
    description: "Build and implement your solution with regular updates and communication"
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launch your solution with full support, training, and ongoing maintenance"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "50+", label: "Expert Team Members" },
  { number: "24/7", label: "Support Available" }
];

export default function ServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions to transform your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{service.pricing}</span>
                    <Link
                      href={service.href}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
