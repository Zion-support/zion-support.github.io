import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Zap, 
  Settings, 
  Bot, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe,
  BarChart3,
  Database
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const automationServices = [
  {
    title: "Process Automation",
    description: "Automate repetitive business processes to increase efficiency and reduce errors",
    icon: Workflow,
    features: [
      "Workflow Design",
      "Task Automation",
      "Approval Processes",
      "Document Processing",
      "Email Automation",
      "Data Entry Automation"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "RPA Solutions",
    description: "Robotic Process Automation for complex business operations",
    icon: Bot,
    features: [
      "Bot Development",
      "Screen Scraping",
      "Data Extraction",
      "Form Filling",
      "Report Generation",
      "System Integration"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "API Integration",
    description: "Connect disparate systems with seamless API integrations",
    icon: Settings,
    features: [
      "System Integration",
      "Data Synchronization",
      "Real-time Updates",
      "Error Handling",
      "Monitoring & Alerts",
      "Custom Connectors"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Workflow Management",
    description: "Streamline complex workflows with intelligent automation",
    icon: Zap,
    features: [
      "Visual Workflow Designer",
      "Conditional Logic",
      "Parallel Processing",
      "Exception Handling",
      "Performance Monitoring",
      "Scalable Architecture"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "Data Automation",
    description: "Automate data processing, transformation, and analysis",
    icon: Database,
    features: [
      "ETL Processes",
      "Data Validation",
      "Report Generation",
      "Data Quality Checks",
      "Scheduled Processing",
      "Error Recovery"
    ],
    price: "Starting at $1,600/month"
  },
  {
    title: "Business Intelligence Automation",
    description: "Automate reporting and analytics for real-time insights",
    icon: BarChart3,
    features: [
      "Automated Reporting",
      "Dashboard Updates",
      "Alert Systems",
      "KPI Monitoring",
      "Trend Analysis",
      "Custom Metrics"
    ],
    price: "Starting at $2,500/month"
  }
];

const automationTypes = [
  {
    title: "IT Operations",
    description: "Server monitoring, backup automation, and system maintenance",
    icon: "💻"
  },
  {
    title: "HR Processes",
    description: "Employee onboarding, payroll processing, and performance tracking",
    icon: "👥"
  },
  {
    title: "Finance & Accounting",
    description: "Invoice processing, expense management, and financial reporting",
    icon: "💰"
  },
  {
    title: "Customer Service",
    description: "Ticket routing, response automation, and customer support workflows",
    icon: "🎧"
  },
  {
    title: "Marketing",
    description: "Campaign management, lead nurturing, and social media automation",
    icon: "📢"
  },
  {
    title: "Sales",
    description: "Lead qualification, follow-up automation, and pipeline management",
    icon: "📈"
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual work by up to 80% with intelligent automation",
    icon: "⚡"
  },
  {
    title: "Cost Savings",
    description: "Lower operational costs through reduced manual labor",
    icon: "💰"
  },
  {
    title: "Error Reduction",
    description: "Minimize human errors with consistent automated processes",
    icon: "🎯"
  },
  {
    title: "24/7 Operations",
    description: "Run automated processes around the clock without interruption",
    icon: "🕐"
  }
];

export default function AutomationPage() {
  const automationFeatures = [
    {
      title: "Autonomous Cloud Management",
      description: "Self-managing cloud infrastructure that monitors, scales, and optimizes automatically.",
      icon: "☁️",
      benefits: ["24/7 monitoring", "Auto-scaling", "Cost optimization"]
    },
    {
      title: "AI Content Generation",
      description: "Automated content creation that learns from your brand and generates relevant material.",
      icon: "✍️",
      benefits: ["SEO optimization", "Brand consistency", "Scalable content"]
    },
    {
      title: "Intelligent DevOps",
      description: "Self-healing CI/CD pipelines that detect and fix issues automatically.",
      icon: "🔄",
      benefits: ["Error detection", "Auto-fixing", "Deployment optimization"]
    },
    {
      title: "Smart Security",
      description: "Proactive security systems that identify and respond to threats in real-time.",
      icon: "🔒",
      benefits: ["Threat detection", "Auto-response", "Vulnerability scanning"]
    }
  ];

  return (
    <>
      <Head>
        <title>Automation | Zion - Autonomous Cloud Systems</title>
        <meta name="description" content="Discover Zion's autonomous cloud automation systems that run without human intervention." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Autonomous Cloud Automation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Systems that run themselves, learn from experience, and continuously improve without human intervention
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Impact</h2>
              <p className="text-xl text-gray-600">See how our autonomous systems are transforming operations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">227</div>
                <div className="text-gray-600">Active Automations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Operation</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience True Automation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the future of autonomous cloud systems and see how Zion can transform your operations.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}