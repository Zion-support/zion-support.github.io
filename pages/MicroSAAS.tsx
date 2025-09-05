import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Database,
  Smartphone,
  Monitor,
  Server,
  Code,
  Settings,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Eye,
  MousePointer,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Headphones,
  Camera,
  Mic,
  Video,
  Image,
  FileText,
  Download,
  Upload,
  Share2,
  MessageSquare,
  Bell,
  Calendar,
  Clock as Time,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

export default function MicroSAAS() {
  const microSaasServices = [
    {
      title: "AI Content Marketing Suite",
      description: "Automated content creation, SEO optimization, and social media management powered by AI",
      features: [
        "AI-powered content generation",
        "SEO optimization tools",
        "Social media automation",
        "Analytics and reporting",
        "Multi-platform publishing"
      ],
      pricing: "$99/month",
      marketPrice: "$150-300/month",
      setupTime: "2-3 days",
      targetUsers: "Marketing agencies, content creators, small businesses",
      benefits: [
        "10x faster content creation",
        "Improved SEO rankings",
        "Consistent brand voice",
        "Reduced marketing costs",
        "Better engagement rates"
      ],
      link: "https://ziontechgroup.com/ai-content-marketing"
    },
    {
      title: "Smart Lead Management System",
      description: "AI-powered lead scoring, automated follow-ups, and CRM integration for better sales conversion",
      features: [
        "AI lead scoring",
        "Automated email sequences",
        "CRM integration",
        "Lead tracking and analytics",
        "Customizable workflows"
      ],
      pricing: "$79/month",
      marketPrice: "$120-250/month",
      setupTime: "1-2 days",
      targetUsers: "Sales teams, real estate agents, insurance brokers",
      benefits: [
        "40% higher conversion rates",
        "Automated follow-ups",
        "Better lead qualification",
        "Time savings",
        "Improved ROI"
      ],
      link: "https://ziontechgroup.com/smart-lead-management"
    },
    {
      title: "Cloud Cost Optimizer",
      description: "Automated cloud resource optimization to reduce costs by up to 60% while maintaining performance",
      features: [
        "Real-time cost monitoring",
        "Automated scaling",
        "Resource optimization",
        "Cost forecasting",
        "Multi-cloud support"
      ],
      pricing: "$149/month",
      marketPrice: "$200-500/month",
      setupTime: "3-5 days",
      targetUsers: "DevOps teams, cloud architects, CTOs",
      benefits: [
        "Up to 60% cost reduction",
        "Automated optimization",
        "Performance monitoring",
        "Predictive analytics",
        "ROI tracking"
      ],
      link: "https://ziontechgroup.com/cloud-cost-optimizer"
    },
    {
      title: "Smart Inventory Management",
      description: "AI-powered inventory optimization with demand forecasting and automated reordering",
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Stock level optimization",
        "Supplier management",
        "Real-time analytics"
      ],
      pricing: "$199/month",
      marketPrice: "$300-600/month",
      setupTime: "5-7 days",
      targetUsers: "Retailers, manufacturers, distributors",
      benefits: [
        "Reduced stockouts",
        "Lower inventory costs",
        "Improved cash flow",
        "Better supplier relationships",
        "Data-driven decisions"
      ],
      link: "https://ziontechgroup.com/smart-inventory"
    },
    {
      title: "Security Compliance Manager",
      description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOC2, and other regulations",
      features: [
        "Compliance monitoring",
        "Automated reporting",
        "Risk assessment",
        "Audit trails",
        "Regulatory updates"
      ],
      pricing: "$299/month",
      marketPrice: "$500-1000/month",
      setupTime: "7-10 days",
      targetUsers: "Compliance officers, legal teams, healthcare organizations",
      benefits: [
        "Reduced compliance costs",
        "Automated reporting",
        "Risk mitigation",
        "Audit readiness",
        "Regulatory updates"
      ],
      link: "https://ziontechgroup.com/security-compliance"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive Micro SaaS solutions for modern businesses. AI-powered tools, automation, and scalable platforms." />
        <meta name="keywords" content="micro saas, software as a service, business automation, AI tools, cloud solutions" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions that solve specific business problems with maximum efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized software solutions designed to address specific business challenges with precision and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Cloud className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Our Price:</span>
                      <span className="font-semibold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-gray-600 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Setup Time:</span>
                      <span className="text-sm text-gray-600">{service.setupTime}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={service.link}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your Micro SaaS needs and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}