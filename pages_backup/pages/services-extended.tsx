<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>services-extended | Zion Tech Group</title>,
        <meta name="description" content="services-extended - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">services-extended</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  TrendingUp, 
  Clock, 
  DollarSign,
  BarChart3,
  Settings,
  Code,
  Database,
  Server,
  MessageSquare,
  FileText,
  Mic,
  Search,
  Calendar,
  Package,
  ClipboardList,
  ShoppingCart
} from 'lucide-react';
import Layout from '../components/Layout';

const allServices = [
  // AI Services
  {
    category: "AI Services",
    icon: Brain,
    color: "from-purple-500 to-purple-700",
    services: [
      {
        title: "Machine Learning Models",
        description: "Custom ML models for predictive analytics and intelligent decision-making",
        price: "$3,500/month",
        marketPrice: "$5,000-12,000/month",
        features: ["Custom model development", "Real-time prediction APIs", "A/B testing", "Model monitoring"],
        benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase"]
      },
      {
        title: "AI-Powered Business Automation",
        description: "Intelligent automation for repetitive tasks and business processes",
        price: "$1,800/month",
        marketPrice: "$3,000-6,000/month",
        features: ["Workflow automation", "Customer service automation", "Lead qualification", "Process optimization"],
        benefits: ["70-85% manual work reduction", "90% faster response time", "40% lead conversion increase"]
      },
      {
        title: "AI Content Generation & Marketing",
        description: "Automated content creation and marketing campaign optimization",
        price: "$1,500/month",
        marketPrice: "$2,500-5,000/month",
        features: ["Content generation", "SEO optimization", "Social media automation", "Performance analytics"],
        benefits: ["50+ pieces daily", "60% engagement increase", "80% cost reduction"]
      },
      {
        title: "AI Data Analytics & Insights",
        description: "Advanced data analysis and predictive insights powered by AI",
        price: "$2,000/month",
        marketPrice: "$3,500-8,000/month",
        features: ["Predictive analytics", "Customer behavior analysis", "Real-time processing", "Custom dashboards"],
        benefits: ["3x faster trend identification", "65% decision accuracy", "25-40% revenue increase"]
      }
    ]
  },
  // IT Services
  {
    category: "IT Services",
    icon: Network,
    color: "from-blue-500 to-blue-700",
    services: [
      {
        title: "Cloud Infrastructure & Migration",
        description: "Comprehensive cloud solutions with seamless migration and optimization",
        price: "$1,800/month",
        marketPrice: "$3,500-8,000/month",
        features: ["AWS, Azure, GCP migration", "Container orchestration", "Auto-scaling", "Disaster recovery"],
        benefits: ["40% cost reduction", "300% scalability improvement", "99.9% uptime"]
      },
      {
        title: "Advanced Cybersecurity Solutions",
        description: "Enterprise-grade security services protecting against modern threats",
        price: "$2,500/month",
        marketPrice: "$5,000-15,000/month",
        features: ["Security audits", "Penetration testing", "Zero-trust architecture", "Compliance management"],
        benefits: ["90% incident reduction", "100% compliance", "99.9% threat protection"]
      },
      {
        title: "DevOps & CI/CD Automation",
        description: "Modern DevOps practices with automated deployment and monitoring",
        price: "$2,000/month",
        marketPrice: "$4,000-10,000/month",
        features: ["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Performance optimization"],
        benefits: ["10x faster deployment", "95% error reduction", "60% productivity increase"]
      },
      {
        title: "Managed IT Services",
        description: "Complete IT management and support for small to medium businesses",
        price: "$1,200/month",
        marketPrice: "$2,500-6,000/month",
        features: ["24/7 help desk", "Proactive monitoring", "Security management", "Asset management"],
        benefits: ["60% overhead reduction", "90% reliability improvement", "Free up internal resources"]
      }
    ]
  },
  // Micro SaaS Services
  {
    category: "Micro SaaS Solutions",
    icon: Cloud,
    color: "from-green-500 to-green-700",
    services: [
      {
        title: "AI-Powered Lead Generation",
        description: "Automated lead discovery, qualification, and nurturing using AI",
        price: "$1,200/month",
        marketPrice: "$2,500-5,000/month",
        features: ["AI lead scoring", "Automated research", "Multi-channel capture", "CRM integration"],
        benefits: ["300% lead increase", "60% cost reduction", "25 hours/week saved"]
      },
      {
        title: "Smart Appointment Scheduling",
        description: "Intelligent scheduling with AI optimization and automated reminders",
        price: "$800/month",
        marketPrice: "$1,500-3,000/month",
        features: ["AI time optimization", "Multi-calendar integration", "Automated reminders", "Payment processing"],
        benefits: ["70% no-show reduction", "45% booking increase", "15 hours/week saved"]
      },
      {
        title: "Customer Support Automation",
        description: "AI-powered customer service with intelligent routing and responses",
        price: "$1,000/month",
        marketPrice: "$2,000-4,500/month",
        features: ["AI chatbot", "Intelligent routing", "Multi-channel support", "Sentiment analysis"],
        benefits: ["90% faster response", "80% automatic handling", "60% satisfaction improvement"]
      },
      {
        title: "Financial Analytics & Forecasting",
        description: "AI-powered financial insights and predictive analytics for businesses",
        price: "$1,800/month",
        marketPrice: "$3,500-7,000/month",
        features: ["Automated reporting", "Cash flow forecasting", "Expense tracking", "Risk assessment"],
        benefits: ["95% accuracy improvement", "70% time reduction", "25% profitability increase"]
      }
    ]
  }
];

const stats = [
  { number: '305+', label: 'Services & Solutions' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$800-1,500/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic AI automation",
      "Essential IT support",
      "Standard micro SaaS tools",
      "Email support",
      "Monthly reporting"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$1,500-3,500/month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced AI solutions",
      "Comprehensive IT services",
      "Full micro SaaS suite",
      "Priority support",
      "Weekly reporting",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$3,500+/month",
    description: "For large organizations and enterprises",
    features: [
      "Custom AI development",
      "Enterprise IT infrastructure",
      "Bespoke SaaS solutions",
      "24/7 dedicated support",
      "Real-time monitoring",
      "Custom development",
      "Dedicated account manager"
    ],
    popular: false
  }
];

export default function ServicesExtendedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>services-extended | Zion Tech Group</title>
        <meta name="description" content="services-extended - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">services-extended</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default services-extended;