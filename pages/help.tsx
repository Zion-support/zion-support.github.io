import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to create and configure your account",
        type: "Tutorial",
        readTime: "10 min"
      }
    ]
  },
  {
    title: "Account Management",
    icon: User,
    articles: [
      {
        title: "Managing Your Profile",
        description: "Update your personal information and preferences",
        type: "Guide",
        readTime: "3 min"
      },
      {
        title: "Security Settings",
        description: "Configure two-factor authentication and security options",
        type: "Guide",
        readTime: "7 min"
      }
    ]
  },
  {
    title: "Billing & Payments",
    icon: CreditCard,
    articles: [
      {
        title: "Understanding Your Bill",
        description: "Learn how to read and understand your monthly statement",
        type: "Guide",
        readTime: "4 min"
      },
      {
        title: "Payment Methods",
        description: "Add, update, and manage your payment methods",
        type: "Tutorial",
        readTime: "5 min"
      }
    ]
  },
  {
    title: "Technical Support",
    icon: Settings,
    articles: [
      {
        title: "Troubleshooting Common Issues",
        description: "Solutions to frequently encountered problems",
        type: "Guide",
        readTime: "8 min"
      },
      {
        title: "System Requirements",
        description: "Check if your system meets our requirements",
        type: "Reference",
        readTime: "3 min"
      }
    ]
  }
];

const quickLinks = [
  { title: 'API Documentation', href: '/docs/api' },
  { title: 'Video Tutorials', href: '/tutorials' },
  { title: 'Download Resources', href: '/downloads' },
  { title: 'Community Forum', href: '/community' }
]

const faqs = [
  {
    question: "How do I get started with your AI services?",
    answer: "Getting started is easy! First, create an account, then choose a plan that fits your needs. You can start with our free trial to explore our AI capabilities before committing to a paid plan."
  },
  {
    question: "What programming languages do you support?",
    answer: "We support all major programming languages including Python, JavaScript, Java, C#, Go, and more. Our APIs are language-agnostic and can be integrated with any technology stack."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with industry standards like SOC 2 and GDPR, and implement strict access controls to protect your data."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to your services until the end of your current billing period."
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with our services, find tutorials, and access support resources." />
      </Head>
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers, tutorials, and support resources
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}