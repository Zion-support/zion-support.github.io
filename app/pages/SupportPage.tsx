import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: DocumentTextIcon },
    { id: 'technical', name: 'Technical Support', icon: InformationCircleIcon },
    { id: 'billing', name: 'Billing & Account', icon: CheckCircleIcon },
    { id: 'general', name: 'General Questions', icon: ChatBubbleLeftRightIcon },
    { id: 'emergency', name: 'Emergency Support', icon: ExclamationTriangleIcon }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your AI solutions?",
      answer: "Getting started is easy! Contact our team for a free consultation where we'll assess your needs and recommend the best AI solutions for your business. We'll guide you through the entire implementation process.",
      category: 'technical'
    },
    {
      id: 2,
      question: "What is your response time for support requests?",
      answer: "We offer different response times based on your support tier. Standard support: 24-48 hours, Priority support: 4-8 hours, Emergency support: 1-2 hours. All emergency issues are handled immediately.",
      category: 'general'
    },
    {
      id: 3,
      question: "How do I update my billing information?",
      answer: "You can update your billing information through your account dashboard or by contacting our billing team directly. We accept all major credit cards and offer flexible payment options.",
      category: 'billing'
    },
    {
      id: 4,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
      category: 'technical'
    },
    {
      id: 5,
      question: "Can I schedule a training session for my team?",
      answer: "Absolutely! We offer comprehensive training sessions for all our solutions. You can schedule group training, one-on-one sessions, or request custom training materials for your specific needs.",
      category: 'general'
    },
    {
      id: 6,
      question: "What happens if I experience a system outage?",
      answer: "In case of a system outage, our emergency support team is immediately notified and works around the clock to restore services. We also provide regular updates and have backup systems in place.",
      category: 'emergency'
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      availability: "24/7",
      responseTime: "Immediate",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: PhoneIcon,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: EnvelopeIcon,
      availability: "24/7",
      responseTime: "Within 24 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session for complex issues",
      icon: VideoCameraIcon,
      availability: "By appointment",
      responseTime: "Scheduled",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>SupportPage - Zion Tech Group</title>
        <meta name="description" content="SupportPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">SupportPage</h1>
          <p className="text-lg text-gray-300">
            This is the SupportPage page for Zion Tech Group.
          </p>
        </div>
      </div>
)
    </>)
  )
}
export default SupportPag;e;
';
