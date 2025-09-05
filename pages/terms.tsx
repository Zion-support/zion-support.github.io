import React from 'react',
      ]
    },
<<<<<<< HEAD
    {
      title: 'Quantum Technology Services',
      terms: [
        'Quantum computing resources are allocated based on service tierUsers must comply with export control regulationsPerformance metrics are provided for informational purposes onlyService interruptions may occur during quantum system calibration'
      ]
    },
    {
      title: 'Cybersecurity Services',
      terms: [
        'Security assessments are conducted according to industry standardsVulnerability reports are confidential and must not be sharedPenetration testing requires written authorizationIncident response follows our established protocols'
import Layout from '../components/layout/Layout',
import SEOOptimizer from '../components/SEOOptimizer',
import AnalyticsTracker from '../components/AnalyticsTracker',
import ErrorBoundary from '../components/ErrorBoundary',
import { motion } from 'framer-motion',
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  User, Lock, Globe, Scale, Clock, Mail
} from 'lucide-react',

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025',
=======
    {_title: 'Quantum Technology Services', _terms: [
        'Quantum computing resources are allocated based on service tier', _'Users must comply with export control regulations', _'Performance metrics are provided for informational purposes only', _'Service interruptions may occur during quantum system calibration'
      ]},
    {_title: 'Cybersecurity Services', _terms: [
        'Security assessments are conducted according to industry standards', _'Vulnerability reports are confidential and must not be shared', _'Penetration testing requires written authorization', _'Incident response follows our established protocols'
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { 
  FileText, _Shield, _AlertTriangle, _CheckCircle, _User, _Lock, _Globe, _Scale, _Clock, _Mail} from 'lucide-react';

const TermsPage: React.FC = () => {_const _lastUpdated = 'January 17, _2025';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _termsSections = [
    {
<<<<<<< HEAD
      title: 'Acceptance of Terms',
      icon: <CheckCircle className=&quot;w-8 h-8&quot; />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'By accessing or using our services, you agree to be bound by these termsIf you do not agree to these terms, do not use our servicesWe may modify these terms at any time with noticeContinued use after changes constitutes acceptance of new terms'
      ]
    },
    {
      title: 'Service Description',
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'AI and machine learning solutionsQuantum computing servicesIT infrastructure and consultingMicro SAAS applicationsBusiness automation servicesTechnical support and maintenance'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <User className=&quot;w-8 h-8&quot; />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide accurate and complete informationMaintain security of your account credentialsComply with applicable laws and regulationsUse services for lawful purposes onlyRespect intellectual property rights'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: <Lock className=&quot;w-8 h-8&quot; />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Our services and content are protected by copyrightYou retain rights to your own contentNo transfer of intellectual property rightsLicense to use our services as intendedProhibition of reverse engineering'
      ]
    }
  ],

  const prohibitedActivities = [
import { motion } from 'framer-motion',
import { 
  FileText, Shield, CheckCircle, AlertTriangle,
  Globe, Calendar, Scale, Users, ArrowRight,
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react',

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 py-20&quot;>
        <div className=&quot;container mx-auto px-4 text-center&quot;>
          <h1 className=&quot;text-5xl font-bold text-white mb-6&quot;>Terms of Service</h1>
          <p className=&quot;text-xl text-blue-100 max-w-3xl mx-auto&quot;>
=======
      title: 'Acceptance of Terms', _icon: <CheckCircle className="w-8 h-8" />, _color: 'from-cyan-500 to-blue-500', _content: [
        'By accessing or using our services, _you agree to be bound by these terms', _'If you do not agree to these terms, _do not use our services', _'We may modify these terms at any time with notice', _'Continued use after changes constitutes acceptance of new terms'
      ]},
    {_title: 'Service Description', _icon: <Globe className="w-8 h-8" />, _color: 'from-purple-500 to-pink-500', _content: [
        'AI and machine learning solutions', _'Quantum computing services', _'IT infrastructure and consulting', _'Micro SAAS applications', _'Business automation services', _'Technical support and maintenance'
      ]},
    {_title: 'User Responsibilities', _icon: <User className="w-8 h-8" />, _color: 'from-green-500 to-emerald-500', _content: [
        'Provide accurate and complete information', _'Maintain security of your account credentials', _'Comply with applicable laws and regulations', _'Use services for lawful purposes only', _'Respect intellectual property rights'
      ]},
    {_title: 'Intellectual Property', _icon: <Lock className="w-8 h-8" />, _color: 'from-orange-500 to-red-500', _content: [
        'Our services and content are protected by copyright', _'You retain rights to your own content', _'No transfer of intellectual property rights', _'License to use our services as intended', _'Prohibition of reverse engineering'
      ]}
  ];

  const _prohibitedActivities = [
import {_FileText, _Shield, _CheckCircle, _AlertTriangle, _Globe, _Calendar, _Scale, _Users, _ArrowRight, _BookOpen, _Lock, _Zap, _Building, _Brain, _Rocket} from 'lucide-react';

      {_/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

<<<<<<< HEAD
import { motion } from 'framer-motion',
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react',
import Layout from '../components/layout/Layout',
const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      icon: <FileText className=&quot;w-6 h-6 text-purple-400&quot; />
    },
    {
      title: 'Use License',
<<<<<<< HEAD
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on Zion Tech Group's website, remove any copyright or other proprietary notations from the materials, or transfer the materials to another person or "mirror" the materials on any other server.`,
      icon: <Lock className="w-6 h-6 text-blue-400" />
=======
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Zion Tech Group's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or &quot;mirror&quot; the materials on any other server.`,
      icon: <Lock className=&quot;w-6 h-6 text-blue-400&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    },
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
      icon: <Globe className=&quot;w-6 h-6 text-green-400&quot; />
    },
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`,
      icon: <Users className=&quot;w-6 h-6 text-yellow-400&quot; />
    },
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`,
      icon: <Eye className=&quot;w-6 h-6 text-cyan-400&quot; />
    },
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`,
      icon: <Shield className=&quot;w-6 h-6 text-red-400&quot; />
    }
  ],

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    },
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ],

  return (
    <Layout>
      <div className=&quot;min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900&quot;>
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
import { motion } from 'framer-motion',
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',
=======
        <section className=&quot;relative pt-32 pb-20 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: <CheckCircle className=&quot;w-6 h-6 text-green-400&quot; />,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  },
  {
    title: 'Use License',
    icon: <Scale className=&quot;w-6 h-6 text-blue-400&quot; />,
    content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.'
  },
  {
    title: 'Disclaimer',
    icon: <AlertTriangle className=&quot;w-6 h-6 text-orange-400&quot; />,
    content: 'The materials on our website are provided on an &quot;as is&quot; basis. We make no warranties, expressed or implied.'
  },
  {
    title: 'Limitations',
    icon: <Shield className=&quot;w-6 h-6 text-purple-400&quot; />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  }
],
=======
import Layout from '../components/layout/Layout';

const Terms: React.FC = () => {_const _sections = [
    {
      title: 'Acceptance of Terms', _content: `By accessing and using the Zion Tech Group website and services, _you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, _please do not use this service.`, _icon: <FileText className="w-6 h-6 text-purple-400" />},
    {_title: 'Use License', _content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, _non-commercial transitory viewing only. This is the grant of a license, _not a transfer of title, _and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on Zion Tech Group's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.`, _icon: <Lock className="w-6 h-6 text-blue-400" />},
    {_title: 'Service Description', _content: `Zion Tech Group provides AI consciousness technology, _quantum computing solutions, _autonomous systems, _and related consulting services. We reserve the right to modify, _suspend, _or discontinue any aspect of our services at any time.`, _icon: <Globe className="w-6 h-6 text-green-400" />},
    {_title: 'User Responsibilities', _content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, _or in any way that violates applicable laws or regulations.`, _icon: <Users className="w-6 h-6 text-yellow-400" />},
    {_title: 'Privacy and Data Protection', _content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, _which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`, _icon: <Eye className="w-6 h-6 text-cyan-400" />},
    {_title: 'Intellectual Property Rights', _content: `All content on this website, _including but not limited to text, _graphics, _logos, _images, _software, _and other materials, _is the property of Zion Tech Group or its licensors and is protected by copyright, _trademark, _and other intellectual property laws.`, _icon: <Shield className="w-6 h-6 text-red-400" />}
  ];

  const _importantNotices = [
    {_title: 'AI Technology Risks', _content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.', _type: 'warning'},
    {_title: 'Quantum Computing Limitations', _content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.', _type: 'info'},
    {_title: 'Service Availability', _content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.', _type: 'info'}
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {_/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const _termsSections = [
  {_title: 'Acceptance of Terms', _icon: <CheckCircle className="w-6 h-6 text-green-400" />, _content: 'By accessing and using our services, _you accept and agree to be bound by the terms and provision of this agreement.'},
  {_title: 'Use License', _icon: <Scale className="w-6 h-6 text-blue-400" />, _content: 'Permission is granted to temporarily use our services for personal, _non-commercial transitory viewing only.'},
  {_title: 'Disclaimer', _icon: <AlertTriangle className="w-6 h-6 text-orange-400" />, _content: 'The materials on our website are provided on an "as is" basis. We make no warranties, _expressed or implied.'},
  {_title: 'Limitations', _icon: <Shield className="w-6 h-6 text-purple-400" />, _content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function Terms() {_return (
    <Layout>
      <SEO
<<<<<<< HEAD
        title=&quot;Terms of Service | Zion Tech Group&quot;
        description=&quot;Read Zion Tech Group's Terms of Service, including usage policies, user agreements, and legal conditions for accessing our technology services.&quot;
        keywords={[&quot;terms of service&quot;, &quot;user agreement&quot;, &quot;legal terms&quot;, &quot;conditions of use&quot;, &quot;service agreement&quot;, &quot;Zion Tech Group&quot;]}
      />

      <div className=&quot;min-h-screen bg-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20&quot;></div>
          <div className=&quot;relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service, _including usage policies, _user agreements, _and legal conditions for accessing our technology services."
        keywords={["terms of service", _"user agreement", _"legal terms", _"conditions of use", _"service agreement", _"Zion Tech Group"]}
      />

      <div className="min-h-screen bg-black text-white">
        {_/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Key Terms & Conditions
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                These terms govern your use of our services and establish our mutual rights and obligations.
              </p>
              <p className=&quot;text-gray-600&quot;>
                These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group's website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>1. Acceptance of Terms</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                By accessing or using our website, services, or any content provided by Zion Tech Group, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>2. Description of Services</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Zion Tech Group provides technology solutions and services including, but not limited to:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>Cloud computing and infrastructure services</li>
                <li>Blockchain technology solutions</li>
                <li>Data analytics and business intelligence</li>
                <li>Web and mobile application development</li>
                <li>Technology consulting and advisory services</li>
              </ul>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>3. User Accounts and Registration</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Some of our services may require you to create an account. You are responsible for:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>4. Acceptable Use</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services to transmit harmful or malicious code</li>
                <li>Attempt to reverse engineer or copy our technology</li>
              </ul>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>5. Intellectual Property Rights</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className=&quot;text-gray-600 mb-4&quot;>
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>6. Privacy and Data Protection</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>7. Service Availability and Modifications</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We strive to provide reliable and continuous service, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Modify or discontinue services at any time</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Update or change our services to improve functionality</li>
              </ul>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>8. Limitation of Liability</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Any damages resulting from the use of our services</li>
              </ul>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>9. Indemnification</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from and against any claims, damages, losses, and expenses arising from:
              </p>
              <ul className=&quot;list-disc pl-6 text-gray-600 mb-4&quot;>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>10. Termination</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time.
              </p>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Upon termination, your right to use our services will cease immediately, and we may delete or remove any content associated with your account.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>11. Governing Law and Dispute Resolution</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>12. Changes to Terms</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date.
              </p>
              <p className=&quot;text-gray-600 mb-4&quot;>
                Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>13. Severability</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>14. Entire Agreement</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Zion Tech Group regarding your use of our services.
              </p>
            </div>

            <div className=&quot;mb-8&quot;>
              <h2 className=&quot;text-3xl font-bold text-gray-900 mb-4&quot;>15. Contact Information</h2>
              <p className=&quot;text-gray-600 mb-4&quot;>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className=&quot;bg-gray-50 p-6 rounded-lg&quot;>
                <p className=&quot;text-gray-700 mb-2&quot;>
                  <strong>Zion Tech Group</strong><br />
                  Email: legal@ziontechgroup.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* User Obligations Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* User Obligations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                User Obligations
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                By using our services, you agree to fulfill these obligations.
              </p>
            </motion.div>

            <div className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                <div>
<<<<<<< HEAD
                  <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Your Responsibilities:</h3>
                  <ul className=&quot;space-y-3&quot;>
                    {userObligations.map((obligation, index) => (
                      <li key={index} className=&quot;flex items-start gap-3 text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mt-0.5 flex-shrink-0&quot; />
                        <span>{obligation}</span>
=======
                  <h3 className="text-2xl font-bold text-white mb-6">Your Responsibilities:</h3>
                  <ul className="space-y-3">
                    {_userObligations.map(_(obligation, _index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{_obligation}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Consequences of Non-Compliance:</h3>
                  <div className=&quot;space-y-4&quot;>
                    <div className=&quot;bg-gray-800/50 rounded-xl p-4&quot;>
                      <h4 className=&quot;font-semibold text-yellow-400 mb-2&quot;>Warning</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>
                        First violations may result in warnings and temporary service restrictions.
                      </p>
                    </div>
                    <div className=&quot;bg-gray-800/50 rounded-xl p-4&quot;>
                      <h4 className=&quot;font-semibold text-orange-400 mb-2&quot;>Suspension</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>
                        Repeated violations may lead to temporary service suspension.
                      </p>
                    </div>
                    <div className=&quot;bg-gray-800/50 rounded-xl p-4&quot;>
                      <h4 className=&quot;font-semibold text-red-400 mb-2&quot;>Termination</h4>
                      <p className=&quot;text-gray-300 text-sm&quot;>
                        Severe or repeated violations may result in permanent service termination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Liability Limitations */}
        {/* Intellectual Property Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Liability Limitations */}
        {_/* Intellectual Property Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Liability & Limitations
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Intellectual Property
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Understanding our intellectual property rights and your usage permissions.
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                Additional Terms
              </h2>
              <p className=&quot;text-lg text-gray-300&quot;>
                Additional terms that apply to specific services or situations.
              </p>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8}}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Limitation of Liability</h3>
                <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>
                  Our total liability to you for any claims arising from the use of our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
                </p>
              </motion.div>

              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.1}}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Governing Law</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of the United States.
                </p>
              </motion.div>

              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Changes to Terms</h3>
                <p className=&quot;text-gray-300 leading-relaxed mb-4&quot;>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Limitation of Liability Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Limitation of Liability Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
                Questions About Terms?
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Limitation of Liability
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Understanding the scope of our liability and your rights as a user.
              </p>
            </motion.div>

            <div className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50&quot;>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                <div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Service Limitations:</h3>
                  <ul className=&quot;space-y-3&quot;>
                    <li className=&quot;flex items-start gap-3 text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0&quot; />
                      <span>Services are provided &quot;as-is&quot; without warranties</span>
                    </li>
                    <li className=&quot;flex items-start gap-3 text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0&quot; />
                      <span>We are not liable for indirect or consequential damages</span>
                    </li>
                    <li className=&quot;flex items-start gap-3 text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0&quot; />
                      <span>Liability is limited to the amount paid for services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Force Majeure:</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>
                    We are not liable for delays or failures due to circumstances beyond our control, including:
                  </p>
                  <ul className=&quot;space-y-2 text-gray-400&quot;>
                    <li>• Natural disasters and extreme weather</li>
                    <li>• Government actions and regulations</li>
                    <li>• Infrastructure failures and cyber attacks</li>
                    <li>• Global pandemics and health emergencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        {/* Contact Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        {/* Contact Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
=======
        {_/* CTA Section */}
        {_/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {_/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Questions About These Terms?
              </h2>
              <p className=&quot;text-xl text-gray-400 mb-8&quot;>
                We're here to clarify any questions about our terms of service and help ensure compliance.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;mailto:legal@ziontechgroup.com&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Contact Legal Team
                  <FileText className=&quot;w-5 h-5 ml-2&quot; />
                </Link>
                <a 
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300&quot;
                >
                  General Contact
                </Link>
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
                Questions About These Terms?
              </h2>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                If you have any questions about these Terms of Service, please contact us.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Contact Support
                </motion.button>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Download Terms PDF
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
<<<<<<< HEAD
      {/* Terms Overview */}
      <section id=&quot;terms-sections&quot; className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Terms Overview */}
      <section id="terms-sections" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Terms Overview
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Key sections of our terms of service and what they cover
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=&quot;group cursor-pointer&quot;
              >
                <div className=&quot;p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300&quot;>
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <h3 className=&quot;text-xl font-semibold mb-2&quot;>{section.title}</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>{section.description}</p>
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_termsSections.map(_(section, _index) => (
              <motion.div
                key={section.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={_`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {_section.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{_section.title}</h3>
                  <p className="text-gray-300 text-sm">{_section.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
              Service Categories & Terms
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Detailed terms for each category of services we provide
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=&quot;group&quot;
              >
                <div className=&quot;bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden&quot;>
                  <div className=&quot;h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center&quot;>
                    <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center&quot;>
                      {service.icon}
                    </div>
                  </div>
                  <div className=&quot;p-6&quot;>
                    <h3 className=&quot;text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                      {service.category}
                    </h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                    
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-cyan-400 mb-2&quot;>Features:</h4>
                      <ul className=&quot;text-sm text-gray-300 space-y-1&quot;>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-start gap-2&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 mt-0.5 flex-shrink-0&quot; />
                            {feature}
=======
          <div className="grid lg:grid-cols-2 gap-8">
            {_serviceCategories.map(_(service, _index) => (_<motion.div
                key={service.category}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      {_service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {_service.category}
                    </h3>
                    <p className="text-gray-300 mb-4">{_service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {_service.features.map((feature, _featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
<<<<<<< HEAD
                      <h4 className=&quot;text-sm font-semibold text-yellow-400 mb-2&quot;>Restrictions:</h4>
                      <ul className=&quot;text-sm text-gray-300 space-y-1&quot;>
                        {service.restrictions.map((restriction, restrictionIndex) => (
                          <li key={restrictionIndex} className=&quot;flex items-start gap-2&quot;>
                            <AlertTriangle className=&quot;w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0&quot; />
                            {restriction}
=======
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {_service.restrictions.map(_(restriction, _restrictionIndex) => (
                          <li key={restrictionIndex} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {_restriction}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </li>
                        ))}
                      </ul>
    'Unauthorized access to our systems or networksInterference with service operationDistribution of malware or harmful codeViolation of third-party rightsAttempts to gain unauthorized accessUse of services for illegal activities'
  ],

<<<<<<< HEAD
  const limitations = [
<<<<<<< HEAD
    'Services provided "as is" without warrantiesNo guarantee of uninterrupted serviceLimitation of liability for damagesNo responsibility for third-party contentService availability subject to changeTechnical support during business hours only'
  ],
=======
    'Services provided &quot;as is&quot; without warranties',
=======
  const _limitations = [
    'Services provided "as is" without warranties',
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    'No guarantee of uninterrupted service',
    'Limitation of liability for damages',
    'No responsibility for third-party content',
    'Service availability subject to change',
    'Technical support during business hours only'
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (_<ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
<<<<<<< HEAD
        <main className=&quot;relative z-10 pt-8&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto text-center&quot;>
=======
        <main className="relative z-10 pt-8">
          {_/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
              >
                <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                  Terms of Service
                </h1>
                <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                  Please read these terms carefully before using our services. They govern your use of Zion Tech Group's technology solutions.
                </p>
<<<<<<< HEAD
                <div className=&quot;flex items-center justify-center gap-4 text-gray-400&quot;>
                  <FileText className=&quot;w-6 h-6&quot; />
                  <span>Last updated: {lastUpdated}</span>
=======
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <FileText className="w-6 h-6" />
                  <span>Last updated: {_lastUpdated}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </motion.div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Overview */}
          <section className=&quot;py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <div className=&quot;grid lg:grid-cols-2 gap-12 items-center&quot;>
=======
          {_/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <motion.div
                  initial={_{ opacity: 0, _x: -20}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.6}}
                >
                  <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                    Understanding Our Terms
                  </h2>
                  <p className=&quot;text-lg text-gray-300 mb-6 leading-relaxed&quot;>
                    These Terms of Service establish the rules and guidelines for using Zion Tech Group's 
                    services. They protect both you and us, _ensuring a clear understanding of our relationship 
                    and responsibilities.
                  </p>
<<<<<<< HEAD
                  <p className=&quot;text-lg text-gray-300 mb-6 leading-relaxed&quot;>
                    By using our services, you acknowledge that you have read, understood, and agree to 
                    be bound by these terms. If you have any questions, please contact us before proceeding.
=======
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    By using our services, _you acknowledge that you have read, _understood, _and agree to 
                    be bound by these terms. If you have any questions, _please contact us before proceeding.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                  <div className=&quot;flex items-center gap-4 text-cyan-400&quot;>
                    <Scale className=&quot;w-6 h-6&quot; />
                    <span className=&quot;font-medium&quot;>Clear and fair terms</span>
                  </div>
                </motion.div>
                
                <motion.div
<<<<<<< HEAD
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className=&quot;relative&quot;
=======
                  initial={_{ opacity: 0, _x: 20}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.6, _delay: 0.2}}
                  className="relative"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30&quot;>
                    <div className=&quot;text-center space-y-6&quot;>
                      <div className=&quot;w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                        <FileText className=&quot;w-12 h-12 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white&quot;>Legal Framework</h3>
                      <p className=&quot;text-gray-300&quot;>Protecting your rights and ours</p>
                      
                      <div className=&quot;grid grid-cols-2 gap-4 text-sm&quot;>
                        <div className=&quot;text-center&quot;>
                          <div className=&quot;text-2xl font-bold text-cyan-400&quot;>100%</div>
                          <div className=&quot;text-gray-400&quot;>Transparent</div>
                        </div>
                        <div className=&quot;text-center&quot;>
                          <div className=&quot;text-2xl font-bold text-purple-400&quot;>24/7</div>
                          <div className=&quot;text-gray-400&quot;>Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Key Terms */}
          <section className=&quot;py-20 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=&quot;text-center mb-16&quot;
=======
          {_/* Key Terms */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h2 className=&quot;text-4xl font-bold mb-4 text-white&quot;>Key Terms and Conditions</h2>
                <p className=&quot;text-xl text-gray-300&quot;>Essential information about using our services</p>
              </motion.div>
              
<<<<<<< HEAD
              <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
                {termsSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50&quot;
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className=&quot;text-white&quot;>
                        {section.icon}
                      </div>
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{section.title}</h3>
                    <ul className=&quot;space-y-3&quot;>
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className=&quot;flex items-start gap-3&quot;>
                          <div className=&quot;w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0&quot;></div>
                          <span className=&quot;text-gray-300&quot;>{item}</span>
=======
              <div className="grid md:grid-cols-2 gap-8">
                {_termsSections.map((section, _index) => (_<motion.div
                    key={section.title}
                    initial={_{ opacity: 0, _y: 20}}
                    whileInView={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.6, _delay: index * 0.1}}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={_`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {_section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{_section.title}</h3>
                    <ul className="space-y-3">
                      {_section.content.map((item, _itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{_item}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Prohibited Activities */}
          <section className=&quot;py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=&quot;text-center mb-16&quot;
=======
          {_/* Prohibited Activities */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h2 className=&quot;text-4xl font-bold mb-4 text-white&quot;>Prohibited Activities</h2>
                <p className=&quot;text-xl text-gray-300&quot;>Activities that are not allowed when using our services</p>
              </motion.div>
              
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=&quot;bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 0.2}}
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex items-center gap-4 mb-6&quot;>
                  <AlertTriangle className=&quot;w-8 h-8 text-red-400&quot; />
                  <h3 className=&quot;text-2xl font-bold text-white&quot;>What You Cannot Do</h3>
                </div>
<<<<<<< HEAD
                <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0&quot;></div>
                      <span className=&quot;text-gray-300&quot;>{activity}</span>
=======
                <div className="grid md:grid-cols-2 gap-4">
                  {_prohibitedActivities.map(_(activity, _index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{_activity}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>
                <div className=&quot;mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg&quot;>
                  <p className=&quot;text-red-400 text-sm&quot;>
                    <strong>Note:</strong> Violation of these prohibitions may result in immediate suspension 
                    or termination of your access to our services, and may be reported to appropriate authorities.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Service Limitations */}
          <section className=&quot;py-20 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=&quot;text-center mb-16&quot;
=======
          {_/* Service Limitations */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <h2 className=&quot;text-4xl font-bold mb-4 text-white&quot;>Service Limitations and Disclaimers</h2>
                <p className=&quot;text-xl text-gray-300&quot;>Important information about service availability and warranties</p>
              </motion.div>
              
              <motion.div
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=&quot;bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 0.2}}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex items-center gap-4 mb-6&quot;>
                  <Shield className=&quot;w-8 h-8 text-yellow-400&quot; />
                  <h3 className=&quot;text-2xl font-bold text-white&quot;>Service Limitations</h3>
                </div>
<<<<<<< HEAD
                <div className=&quot;grid md:grid-cols-2 gap-4&quot;>
                  {limitations.map((limitation, index) => (
                    <div key={index} className=&quot;flex items-start gap-3&quot;>
                      <div className=&quot;w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0&quot;></div>
                      <span className=&quot;text-gray-300&quot;>{limitation}</span>
=======
                <div className="grid md:grid-cols-2 gap-4">
                  {_limitations.map(_(limitation, _index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{_limitation}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  ))}
                </div>
                <div className=&quot;mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg&quot;>
                  <p className=&quot;text-yellow-400 text-sm&quot;>
                    <strong>Important:</strong> These limitations are designed to set realistic expectations 
                    and protect both parties. We strive to provide excellent service but cannot guarantee 
                    perfection in all circumstances.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Detailed Terms */}
          <section className=&quot;py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=&quot;space-y-12&quot;
=======
          {_/* Detailed Terms */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
                className="space-y-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div>
                  <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>Detailed Terms and Conditions</h2>
                  
                  <div className=&quot;space-y-8&quot;>
                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>1. Service Agreement</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        This agreement is between Zion Tech Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and you (&quot;user,&quot; 
                        &quot;client,&quot; or &quot;customer&quot;). By using our services, you agree to these terms and 
                        acknowledge that you have read and understood them.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        We reserve the right to modify these terms at any time. Changes will be effective 
                        immediately upon posting on our website. Your continued use of services after changes 
                        constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>2. Service Description and Availability</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        Our services include AI and machine learning solutions, quantum computing services, 
                        IT infrastructure consulting, micro SAAS applications, business automation, and 
                        technical support.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        We strive to maintain high service availability but cannot guarantee uninterrupted 
                        access. Services may be temporarily unavailable due to maintenance, updates, or 
                        circumstances beyond our control.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>3. User Accounts and Responsibilities</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        You are responsible for maintaining the confidentiality of your account credentials 
                        and for all activities that occur under your account. You must notify us immediately 
                        of any unauthorized use.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        You agree to provide accurate, current, and complete information when creating 
                        accounts and using our services. You must use services only for lawful purposes 
                        and in compliance with applicable laws and regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>4. Payment Terms and Billing</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        Service fees are billed according to the pricing schedule in effect at the time 
                        of service. All fees are non-refundable except as expressly stated in our refund policy.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        We may change our pricing with 30 days' notice. Late payments may result in service 
                        suspension or termination. You are responsible for all applicable taxes.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>5. Intellectual Property Rights</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        Our services, including software, content, and technology, are protected by copyright, 
                        trademark, and other intellectual property laws. You retain rights to your own content.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        You may not copy, modify, distribute, sell, or lease any part of our services without 
                        our written permission. You may not reverse engineer or attempt to extract source code.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>6. Data Privacy and Security</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        We are committed to protecting your privacy and data security. Our collection and 
                        use of personal information is governed by our Privacy Policy.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        We implement appropriate security measures to protect your data, but cannot guarantee 
                        absolute security. You are responsible for maintaining the security of your own systems.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>7. Limitation of Liability</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        To the maximum extent permitted by law, our liability for any claims arising from 
                        the use of our services is limited to the amount you paid for services in the 
                        12 months preceding the claim.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        We are not liable for indirect, incidental, special, consequential, or punitive 
                        damages, including lost profits, data, or business opportunities.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>8. Termination and Suspension</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        Either party may terminate this agreement with written notice. We may suspend or 
                        terminate services immediately for violations of these terms or for non-payment.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        Upon termination, your access to services will cease, and we may delete your data 
                        in accordance with our data retention policies.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>9. Governing Law and Disputes</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        These terms are governed by the laws of Delaware, United States. Any disputes will 
                        be resolved through binding arbitration in accordance with the rules of the American 
                        Arbitration Association.
                      </p>
                      <p className=&quot;text-gray-300 leading-relaxed&quot;>
                        You agree to resolve disputes individually and waive any right to participate in 
                        class action lawsuits or class-wide arbitration.
                      </p>
                    </div>

                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>10. Contact Information</h3>
                      <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                        For questions about these terms or our services, please contact us at:
                      </p>
                      <div className=&quot;bg-gray-800/50 rounded-lg p-4 space-y-2&quot;>
                        <p className=&quot;text-gray-300&quot;>
                          <strong>Email:</strong> kleber@ziontechgroup.com
                        </p>
                        <p className=&quot;text-gray-300&quot;>
                          <strong>Phone:</strong> +1 302 464 0950
                        </p>
                        <p className=&quot;text-gray-300&quot;>
                          <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <FileText className=&quot;w-16 h-16 text-cyan-400 mx-auto mb-6&quot; />
              <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Terms of Service
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Please read these terms and conditions carefully before using our services.
              </p>
              <div className=&quot;flex items-center justify-center space-x-2 text-sm text-gray-400&quot;>
                <Clock className=&quot;w-4 h-4&quot; />
                <span>Last updated: January 1, 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Terms Overview */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Terms Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl font-bold mb-6&quot;>Terms Overview</h2>
              <p className=&quot;text-xl text-gray-400 leading-relaxed&quot;>
                These Terms of Service govern your use of Zion Tech Group's website and services. 
                By using our services, you agree to these terms.
              </p>
            </motion.div>

<<<<<<< HEAD
            {/* Key Terms Points */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 mb-16&quot;>
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl&quot;
                >
                  <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                    {section.icon}
                    <h3 className=&quot;text-xl font-semibold&quot;>{section.title}</h3>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{section.content}</p>
=======
            {_/* Key Terms Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {_termsSections.map(_(section, _index) => (
                <motion.div
                  key={section.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {_section.icon}
                    <h3 className="text-xl font-semibold">{_section.title}</h3>
                  </div>
                  <p className="text-gray-300">{_section.content}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Detailed Terms */}
        <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;space-y-12&quot;
=======
        {_/* Detailed Terms */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="space-y-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;text-center mb-16&quot;>
                <h2 className=&quot;text-4xl font-bold mb-4&quot;>Detailed Terms and Conditions</h2>
                <p className=&quot;text-xl text-gray-400&quot;>
                  Complete terms governing your use of our services.
                </p>
              </div>

<<<<<<< HEAD
              {/* Section 1: Definitions */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-cyan-400 mb-4&quot;>1. Definitions</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 1: Definitions */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">1. Definitions</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    The following terms shall have the meanings set forth below:
                  </p>
                  <ul className=&quot;list-disc list-inside space-y-2 ml-4&quot;>
                    <li><strong>&quot;Company&quot;</strong> refers to Zion Tech Group</li>
                    <li><strong>&quot;Services&quot;</strong> refers to our website, platforms, and technology solutions</li>
                    <li><strong>&quot;User&quot;</strong> refers to any individual or entity using our services</li>
                    <li><strong>&quot;Content&quot;</strong> refers to all text, data, information, software, and other materials</li>
                    <li><strong>&quot;Agreement&quot;</strong> refers to these Terms of Service</li>
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 2: Acceptance */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-purple-400 mb-4&quot;>2. Acceptance of Terms</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 2: Acceptance */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2. Acceptance of Terms</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    By accessing, browsing, or using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to these terms, please do not use our services. We reserve the 
                    right to modify these terms at any time, and such modifications will be effective 
                    immediately upon posting.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 3: Use of Services */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-emerald-400 mb-4&quot;>3. Use of Services</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Permitted Use</h4>
=======
              {_/* Section 3: Use of Services */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">3. Use of Services</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Permitted Use</h4>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    You may use our services for lawful purposes only. You agree not to use the services:
                  </p>
                  <ul className=&quot;list-disc list-inside space-y-2 ml-4&quot;>
                    <li>In any way that violates applicable laws or regulations</li>
                    <li>To transmit or distribute viruses, malware, or other harmful code</li>
                    <li>To interfere with or disrupt the integrity or performance of our services</li>
                    <li>To attempt to gain unauthorized access to our systems</li>
                    <li>To impersonate any person or entity or misrepresent your affiliation</li>
                  </ul>
                  
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Account Security</h4>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials 
                    and for all activities that occur under your account.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 4: Intellectual Property */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-orange-400 mb-4&quot;>4. Intellectual Property Rights</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 4: Intellectual Property */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">4. Intellectual Property Rights</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    All content, features, and functionality of our services are owned by Zion Tech Group 
                    and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>License Grant</h4>
                  <p>
                    Subject to these terms, we grant you a limited, non-exclusive, non-transferable license 
                    to access and use our services for your personal or business use.
                  </p>
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Restrictions</h4>
                  <ul className=&quot;list-disc list-inside space-y-2 ml-4&quot;>
                    <li>You may not reproduce, distribute, or create derivative works</li>
                    <li>You may not reverse engineer or attempt to extract source code</li>
                    <li>You may not remove or alter any proprietary notices</li>
                  </ul>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 5: Privacy */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-pink-400 mb-4&quot;>5. Privacy</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 5: Privacy */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">5. Privacy</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of our services, to understand our practices.
                  </p>
                  <p>
                    By using our services, you consent to the collection and use of information as 
                    outlined in our Privacy Policy.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 6: Disclaimers */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-red-400 mb-4&quot;>6. Disclaimers and Limitations</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Service Availability</h4>
=======
              {_/* Section 6: Disclaimers */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-red-400 mb-4">6. Disclaimers and Limitations</h3>
                <div className="text-gray-300 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Service Availability</h4>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    We strive to maintain service availability but do not guarantee uninterrupted access. 
                    Services may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                  
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Disclaimer of Warranties</h4>
                  <p>
                    Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, 
                    either express or implied, including but not limited to warranties of merchantability 
                    or fitness for a particular purpose.
                  </p>
                  
                  <h4 className=&quot;text-lg font-semibold text-white&quot;>Limitation of Liability</h4>
                  <p>
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages arising from your 
                    use of our services.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 7: Termination */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-yellow-400 mb-4&quot;>7. Termination</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 7: Termination */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">7. Termination</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice, for any reason whatsoever, including breach of these terms.
                  </p>
                  <p>
                    Upon termination, your right to use our services will cease immediately, and you 
                    must discontinue all use of our services.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 8: Governing Law */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-indigo-400 mb-4&quot;>8. Governing Law</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 8: Governing Law */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">8. Governing Law</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the 
                    State of Delaware, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                    of the courts located in Delaware.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              {/* Section 9: Contact Information */}
              <div className=&quot;prose prose-invert max-w-none&quot;>
                <h3 className=&quot;text-2xl font-bold text-cyan-400 mb-4&quot;>9. Contact Information</h3>
                <div className=&quot;text-gray-300 space-y-4&quot;>
=======
              {_/* Section 9: Contact Information */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">9. Contact Information</h3>
                <div className="text-gray-300 space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className=&quot;bg-gray-900/50 border border-gray-700 rounded-lg p-6&quot;>
                    <h4 className=&quot;text-lg font-semibold text-white mb-3&quot;>Zion Tech Group</h4>
                    <div className=&quot;space-y-2&quot;>
                      <p>Email: legal@ziontechgroup.com</p>
                      <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                      <p>Phone: +1 302 464 0950</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Agreement Section */}
        <section className=&quot;py-20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl&quot;
=======
        {_/* Agreement Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Scale className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Agreement Acknowledgment</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>
                By using our services, you acknowledge that you have read and understood these Terms of Service 
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.
              </p>
              <p className=&quot;text-sm text-gray-400&quot;>
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
},

export default Terms,
            </div>
          </section>

<<<<<<< HEAD
          {/* Contact Information */}
          <section className=&quot;py-20 px-4&quot;>
            <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
          {_/* Contact Information */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
              >
                <h2 className=&quot;text-4xl font-bold mb-6 text-white&quot;>
                  Questions About These Terms?
                </h2>
                <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                  If you have any questions about these Terms of Service or need clarification on any 
                  provision, please don't hesitate to reach out to us.
                </p>
<<<<<<< HEAD
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
                <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <a
                    href=&quot;mailto:kleber@ziontechgroup.com&quot;
                    className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2&quot;
                  >
                    <Mail className=&quot;w-5 h-5&quot; />
                    Email Us
                  </Link>
                  <a
                    href=&quot;/contact&quot;
                    className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2&quot;
                  >
                    <User className=&quot;w-5 h-5&quot; />
                    Contact Form
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  )
},

export default TermsPage,
