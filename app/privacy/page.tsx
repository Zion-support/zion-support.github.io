'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, company information, and other contact details you provide when contacting us or using our services.',
        'Usage Data: Information about how you use our website and services, including pages visited, time spent, and interactions with our content.',
        'Technical Data: IP address, browser type, operating system, device information, and other technical details collected automatically.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze website performance.'
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our AI and IT services.',
        'Communication: To respond to your inquiries, send service updates, and provide customer support.',
        'Marketing: To send you relevant information about our services, with your consent.',
        'Analytics: To analyze website usage and improve our services and user experience.',
        'Legal Compliance: To comply with applicable laws and regulations.'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties.',
        'We may share information with trusted service providers who assist us in operating our business, subject to confidentiality agreements.',
        'We may disclose information when required by law or to protect our rights and safety.',
        'In case of business transfers, your information may be transferred as part of the business assets.'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information.',
        'All data is encrypted in transit and at rest using advanced encryption technologies.',
        'We regularly review and update our security practices to maintain the highest standards.',
        'Access to personal information is restricted to authorized personnel only.'
      ]
    },
    {
      icon: Eye,
      title: 'Your Rights',
      content: [
        'Access: You can request access to your personal information we hold.',
        'Correction: You can request correction of inaccurate or incomplete information.',
        'Deletion: You can request deletion of your personal information, subject to legal obligations.',
        'Portability: You can request a copy of your data in a structured format.',
        'Opt-out: You can unsubscribe from marketing communications at any time.'
      ]
    }
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
