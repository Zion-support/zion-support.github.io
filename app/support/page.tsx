
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Phone, Mail, MessageCircle, FileText, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Simply contact our sales team through the contact form or schedule a consultation. We\'ll assess your needs and provide a customized solution.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 2 hours during business hours and within 24 hours for urgent issues outside business hours.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for critical issues and our live chat is available around the clock for immediate assistance.'
    },
    {
      question: 'Can I schedule a technical consultation?',
      answer: 'Absolutely! You can schedule a technical consultation with our experts to discuss your specific requirements and get personalized recommendations.'
    }
  ];
=======
import React from "react";
import { Helmet } from "react-helmet-async";


export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get help and support for our AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );

}

