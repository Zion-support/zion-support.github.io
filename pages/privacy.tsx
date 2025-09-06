import React from 'react';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Globe,
  User,
  Settings,
  AlertTriangle,
  CheckCircle,
<<<<<<< HEAD
  Mail,;} from 'lucide-react';
=======
  Mail,;
import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
ursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className='w-8 h-8' />,
<<<<<<< HEAD
=======
      icon: <Database className="w-8 h-8" />,
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      color: 'from-cyan-500 to-blue-500',
      content: [
        'Personal information (name, email, phone number, company)',
        'Business information (company size, industry, project requirements)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (website interactions, service usage patterns)',
        'Communication records (emails, phone calls, support tickets)',
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: <Settings className='w-8 h-8' />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide and improve our services',
        'Communicate with you about our services',
        'Process payments and manage accounts',
        'Send marketing communications (with consent)',
        'Analyze usage patterns and improve user experience',
        'Comply with legal obligations',
      ],
    },
    {
      title: 'Information Sharing',
      icon: <Globe className='w-8 h-8' />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Share with trusted service providers under strict confidentiality',
        'Comply with legal requirements and court orders',
        'Protect our rights, property, and safety',
        'Business transfers (with notice and choice)',
      ],
    },
    {
      title: 'Data Security',
      icon: <Lock className='w-8 h-8' />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Industry-standard encryption for data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication measures',
        'Employee training on data protection',
        'Incident response and breach notification procedures',
      ],
<<<<<<< HEAD
    },  ];
=======
    },
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'Personal information (name, email, phone number, company)Business information (company size, industry, project requirements)Technical information (IP address, browser type, device information)Usage data (website interactions, service usage patterns)Communication records (emails, phone calls, support tickets)'
      ]
    };
    {
      title: 'How We Use Your Information',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide and improve our servicesCommunicate with you about our servicesProcess payments and manage accountsSend marketing communications (with consent)Analyze usage patterns and improve user experienceComply with legal obligations'
      ]
    };
    {
      title: 'Information Sharing',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'We do not sell, trade, or rent your personal informationShare with trusted service providers under strict confidentialityComply with legal requirements and court ordersProtect our rights, property, and safetyBusiness transfers (with notice and choice)'
      ]
    };
    {
      title: 'Data Security',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Industry-standard encryption for data in transit and at restRegular security audits and vulnerability assessmentsAccess controls and authentication measuresEmployee training on data protectionIncident response and breach notification procedures'
      ]
    }
        'Industry-standard encryption for data in transit and at restRegular security audits and vulnerability assessmentsAccess controls and authentication measuresEmployee training on data protectionIncident response and breach notification procedures'
      ]
    }
ursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: <Eye className='w-6 h-6' />,
    },
<<<<<<< HEAD
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className='w-6 h-6' />,
    },
=======
      icon: <Eye className="w-6 h-6" />
    };
ursor/integrate-build-improve-and-re-verify-b76c
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className="w-6 h-6" />
    };
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: <AlertTriangle className="w-6 h-6" />
    };
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: <Database className="w-6 h-6" />
    };
    {
      title: 'Objection',
      description: 'Object to processing of your personal information',
      icon: <User className="w-6 h-6" />
    };
    {
      title: 'Restriction',
      description: 'Request restriction of processing activities',
      icon: <Settings className='w-6 h-6' />,
    },
      icon: <Eye className="w-6 h-6" />
    };
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className="w-6 h-6" />
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: <AlertTriangle className='w-6 h-6' />,
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: <Database className='w-6 h-6' />,
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal information',
      icon: <User className='w-6 h-6' />,
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing activities',
<<<<<<< HEAD
      icon: <Settings className='w-6 h-6' />,
    },  ];
=======
      icon: <Settings className="w-6 h-6" />
    }
      icon: <Settings className="w-6 h-6" />
    }
ursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className='relative z-10 pt-8'>
          {/* Hero Section */}
          <section className='py-20 px-4'>
<<<<<<< HEAD
            <div className='max-w-6xl mx-auto text-center'>              <motion.div
=======
            <div className='max-w-6xl mx-auto text-center'>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
ursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
<<<<<<< HEAD
=======
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Privacy Policy
                </h1>
                <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                  Your privacy is our priority. Learn how we protect and handle
                  your personal information.
                </p>
                <div className='flex items-center justify-center gap-4 text-gray-400'>
<<<<<<< HEAD
                  <Shield className='w-6 h-6' />                  <span>Last updated: {lastUpdated}</span>
=======
                  <Shield className='w-6 h-6' />
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Your privacy is our priority. Learn how we protect and handle your personal information.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Shield className="w-6 h-6" />
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Shield className="w-6 h-6" />
ursor/integrate-build-improve-and-re-verify-b76c
                  <span>Last updated: {lastUpdated}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview */}
          <section className='py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50'>
            <div className='max-w-6xl mx-auto'>
<<<<<<< HEAD
              <div className='grid lg:grid-cols-2 gap-12 items-center'>                <motion.div
=======
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
ursor/integrate-build-improve-and-re-verify-b76c
                <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className='text-4xl font-bold mb-6 text-white'>
<<<<<<< HEAD
=======
                  <h2 className="text-4xl font-bold mb-6 text-white">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    Our Commitment to Privacy
                  </h2>
                  <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                    At Zion Tech Group, we are committed to protecting your
                    privacy and ensuring the security of your personal
                    information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use
                    our services.
                  </p>
                  <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                    We believe in transparency and want you to understand how
                    your information is handled. This policy applies to all
                    users of our website, services, and applications.
                  </p>
                  <div className='flex items-center gap-4 text-cyan-400'>
                    <Lock className='w-6 h-6' />
                    <span className='font-medium'>
                      Your data is safe with us
                    </span>
                  </div>
                </motion.div>
<<<<<<< HEAD
=======

                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
                    of your personal information. This Privacy Policy explains how we collect, use, disclose;
                    and safeguard your information when you use our services.
                  </p>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We believe in transparency and want you to understand how your information is handled. 
                    This policy applies to all users of our website, services, and applications.
                  </p>
                  <div className="flex items-center gap-4 text-cyan-400">
                    <Lock className="w-6 h-6" />
                    <span className="font-medium">Your data is safe with us</span>
                  </div>
                </motion.div>

ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='relative'
<<<<<<< HEAD
=======
                  className="relative"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30'>
                    <div className='text-center space-y-6'>
                      <div className='w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto'>
                        <Shield className='w-12 h-12 text-white' />
                      </div>
                      <h3 className='text-2xl font-bold text-white'>
                        Data Protection
                      </h3>
                      <p className='text-gray-300'>
                        Enterprise-grade security for your information
                      </p>

                      <div className='grid grid-cols-2 gap-4 text-sm'>
                        <div className='text-center'>
                          <div className='text-2xl font-bold text-cyan-400'>
                            256-bit
                          </div>
                          <div className='text-gray-400'>Encryption</div>
                        </div>
                        <div className='text-center'>
                          <div className='text-2xl font-bold text-purple-400'>
                            99.9%
                          </div>
<<<<<<< HEAD
                          <div className='text-gray-400'>Uptime</div>                        </div>
=======
                          <div className='text-gray-400'>Uptime</div>
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <Shield className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Data Protection</h3>
                      <p className="text-gray-300">Enterprise-grade security for your information</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">256-bit</div>
                          <div className="text-gray-400">Encryption</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">99.9%</div>
                          <div className="text-gray-400">Uptime</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">99.9%</div>
                          <div className="text-gray-400">Uptime</div>
ursor/integrate-build-improve-and-re-verify-b76c
                        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Privacy Principles */}
          <section className='py-20 px-4'>
<<<<<<< HEAD
            <div className='max-w-6xl mx-auto'>              <motion.div
=======
            <div className='max-w-6xl mx-auto'>
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
ursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-16'
<<<<<<< HEAD
=======
                className="text-center mb-16"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <h2 className='text-4xl font-bold mb-4 text-white'>
                  Our Privacy Principles
                </h2>
                <p className='text-xl text-gray-300'>
                  The foundation of how we handle your data
                </p>
              </motion.div>

<<<<<<< HEAD
              <div className='grid md:grid-cols-2 gap-8'>                {privacySections.map((section, index) => (
=======
              <div className='grid md:grid-cols-2 gap-8'>
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Privacy Principles</h2>
                <p className="text-xl text-gray-300">The foundation of how we handle your data</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
              
              <div className="grid md:grid-cols-2 gap-8">
ursor/integrate-build-improve-and-re-verify-b76c
                {privacySections.map((section, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50'
<<<<<<< HEAD
=======
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <div className='text-white'>{section.icon}</div>
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-4'>
                      {section.title}
                    </h3>
                    <ul className='space-y-3'>
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className='flex items-start gap-3'>
                          <div className='w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0'></div>
<<<<<<< HEAD
                          <span className='text-gray-300'>{item}</span>                        </li>
=======
                          <span className='text-gray-300'>{item}</span>
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
ursor/integrate-build-improve-and-re-verify-b76c
                        </li>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className='py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50'>
<<<<<<< HEAD
            <div className='max-w-6xl mx-auto'>              <motion.div
=======
            <div className='max-w-6xl mx-auto'>
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
ursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-16'
<<<<<<< HEAD
=======
                className="text-center mb-16"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <h2 className='text-4xl font-bold mb-4 text-white'>
                  Your Privacy Rights
                </h2>
                <p className='text-xl text-gray-300'>
                  You have control over your personal information
                </p>
              </motion.div>

<<<<<<< HEAD
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>                {rights.map((right, index) => (
=======
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Your Privacy Rights</h2>
                <p className="text-xl text-gray-300">You have control over your personal information</p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
ursor/integrate-build-improve-and-re-verify-b76c
                {rights.map((right, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center'
<<<<<<< HEAD
=======
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  >
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                      <div className='text-white'>{right.icon}</div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {right.title}
                    </h3>
<<<<<<< HEAD
                    <p className='text-gray-300 text-sm'>{right.description}</p>                  </motion.div>
=======
                    <p className='text-gray-300 text-sm'>{right.description}</p>
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {right.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
ursor/integrate-build-improve-and-re-verify-b76c
                  </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Policy */}
          <section className='py-20 px-4'>
<<<<<<< HEAD
            <div className='max-w-4xl mx-auto'>              <motion.div
=======
            <div className='max-w-4xl mx-auto'>
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
ursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='space-y-12'
<<<<<<< HEAD
=======
                className="space-y-12"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div>
                  <h2 className='text-3xl font-bold text-white mb-6'>
                    Detailed Privacy Information
                  </h2>

                  <div className='space-y-8'>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Information Collection
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We collect information you provide directly to us, such
                        as when you create an account, request a quote, or
                        contact our support team. We also automatically collect
                        certain information about your device and how you
                        interact with our services.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        This may include your IP address, browser type,
                        operating system, referring URLs, access times, and
                        pages viewed. We use this information to improve our
<<<<<<< HEAD
                        services and provide a better user experience.                      </p>
=======
                        services and provide a better user experience.
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Privacy Information</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Information Collection</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We collect information you provide directly to us, such as when you create an account;
                        request a quote, or contact our support team. We also automatically collect certain 
                        information about your device and how you interact with our services.
                      </p>
ursor/integrate-build-improve-and-re-verify-b76c
                      <p className="text-gray-300 leading-relaxed">
                        This may include your IP address, browser type, operating system, referring URLs;
                        access times, and pages viewed. We use this information to improve our services 
                        and provide a better user experience.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Data Usage and Purpose
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We use your information to provide, maintain, and
                        improve our services, process transactions, send you
                        technical notices and support messages, and respond to
                        your comments and questions.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        With your consent, we may also use your information to
                        send you marketing communications about our services,
                        special offers, and updates. You can opt out of these
<<<<<<< HEAD
                        communications at any time.                      </p>
=======
                        communications at any time.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Usage and Purpose</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use your information to provide, maintain, and improve our services, process 
                        transactions, send you technical notices and support messages, and respond to your 
                        comments and questions.
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Usage and Purpose</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use your information to provide, maintain, and improve our services, process 
                        transactions, send you technical notices and support messages, and respond to your 
                        comments and questions.
                      </p>
ursor/integrate-build-improve-and-re-verify-b76c
                      <p className="text-gray-300 leading-relaxed">
                        With your consent, we may also use your information to send you marketing communications 
                        about our services, special offers, and updates. You can opt out of these communications 
                        at any time.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Data Sharing and Disclosure
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We do not sell, trade, or otherwise transfer your
                        personal information to third parties without your
                        consent, except as described in this policy. We may
                        share your information with trusted third-party service
                        providers who assist us in operating our business.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        These service providers are contractually obligated to
                        keep your information confidential and use it only for
<<<<<<< HEAD
                        the purposes for which we disclose it to them.                      </p>
=======
                        the purposes for which we disclose it to them.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy. We may share your information 
                        with trusted third-party service providers who assist us in operating our business.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These service providers are contractually obligated to keep your information confidential 
                        and use it only for the purposes for which we disclose it to them.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy. We may share your information 
                        with trusted third-party service providers who assist us in operating our business.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These service providers are contractually obligated to keep your information confidential 
                        and use it only for the purposes for which we disclose it to them.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Data Security Measures
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We implement appropriate technical and organizational
                        security measures to protect your personal information
                        against unauthorized access, alteration, disclosure, or
                        destruction.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        These measures include encryption, access controls,
                        regular security assessments, and employee training on
<<<<<<< HEAD
                        data protection best practices.                      </p>
=======
                        data protection best practices.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect 
                        your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These measures include encryption, access controls, regular security assessments;
                        and employee training on data protection best practices.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect 
                        your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These measures include encryption, access controls, regular security assessments;
                        and employee training on data protection best practices.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Data Retention
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We retain your personal information for as long as
                        necessary to provide our services, comply with legal
                        obligations, resolve disputes, and enforce our
                        agreements.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        When we no longer need your information, we will
                        securely delete or anonymize it in accordance with our
<<<<<<< HEAD
                        data retention policies.                      </p>
=======
                        data retention policies.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services;
                        comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When we no longer need your information, we will securely delete or anonymize it 
                        in accordance with our data retention policies.
                      <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services;
                        comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When we no longer need your information, we will securely delete or anonymize it 
                        in accordance with our data retention policies.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        International Data Transfers
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        Your information may be transferred to and processed in
                        countries other than your own. We ensure that such
                        transfers comply with applicable data protection laws
                        and that appropriate safeguards are in place.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        For transfers to countries outside the European Economic
                        Area, we rely on adequacy decisions, standard
<<<<<<< HEAD
                        contractual clauses, or other appropriate safeguards.                      </p>
=======
                        contractual clauses, or other appropriate safeguards.
                      <h3 className="text-2xl font-bold text-white mb-4">International Data Transfers</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure that such transfers comply with applicable data protection laws and that 
                        appropriate safeguards are in place.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        For transfers to countries outside the European Economic Area, we rely on adequacy 
                        decisions, standard contractual clauses, or other appropriate safeguards.
                      <h3 className="text-2xl font-bold text-white mb-4">International Data Transfers</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure that such transfers comply with applicable data protection laws and that 
                        appropriate safeguards are in place.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        For transfers to countries outside the European Economic Area, we rely on adequacy 
                        decisions, standard contractual clauses, or other appropriate safeguards.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Cookies and Tracking Technologies
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We use cookies and similar tracking technologies to
                        enhance your experience on our website, analyze usage
                        patterns, and provide personalized content.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        You can control cookie settings through your browser
                        preferences. However, disabling certain cookies may
<<<<<<< HEAD
                        affect the functionality of our services.                      </p>
=======
                        affect the functionality of our services.
                      <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on our 
                        website, analyze usage patterns, and provide personalized content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You can control cookie settings through your browser preferences. However, disabling 
                        certain cookies may affect the functionality of our services.
                      <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on our 
                        website, analyze usage patterns, and provide personalized content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You can control cookie settings through your browser preferences. However, disabling 
                        certain cookies may affect the functionality of our services.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Children's Privacy
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        Our services are not intended for children under the age
                        of 13. We do not knowingly collect personal information
                        from children under 13.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        If you believe we have collected information from a
                        child under 13, please contact us immediately, and we
<<<<<<< HEAD
                        will take steps to remove such information.                      </p>
=======
                        will take steps to remove such information.
                      <h3 className="text-2xl font-bold text-white mb-4">Children's Privacy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services are not intended for children under the age of 13. We do not knowingly 
                        collect personal information from children under 13.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        If you believe we have collected information from a child under 13, please contact 
                        us immediately, and we will take steps to remove such information.
                      <h3 className="text-2xl font-bold text-white mb-4">Children's Privacy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services are not intended for children under the age of 13. We do not knowingly 
                        collect personal information from children under 13.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        If you believe we have collected information from a child under 13, please contact 
                        us immediately, and we will take steps to remove such information.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-white mb-4'>
                        Changes to This Policy
                      </h3>
                      <p className='text-gray-300 mb-4 leading-relaxed'>
                        We may update this Privacy Policy from time to time to
                        reflect changes in our practices or applicable laws. We
                        will notify you of any material changes by posting the
                        updated policy on our website.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        Your continued use of our services after such changes
                        constitutes acceptance of the updated policy. We
<<<<<<< HEAD
                        encourage you to review this policy periodically.                      </p>
=======
                        encourage you to review this policy periodically.
                      <h3 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our 
                        practices or applicable laws. We will notify you of any material changes by posting 
                        the updated policy on our website.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Your continued use of our services after such changes constitutes acceptance of 
                        the updated policy. We encourage you to review this policy periodically.
                      <h3 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our 
                        practices or applicable laws. We will notify you of any material changes by posting 
                        the updated policy on our website.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Your continued use of our services after such changes constitutes acceptance of 
                        the updated policy. We encourage you to review this policy periodically.
ursor/integrate-build-improve-and-re-verify-b76c
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
          <section className='py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50'>
<<<<<<< HEAD
            <div className='max-w-4xl mx-auto text-center'>              <motion.div
=======
            <div className='max-w-4xl mx-auto text-center'>
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
ursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-4xl font-bold mb-6 text-white'>
<<<<<<< HEAD
=======
                <h2 className="text-4xl font-bold mb-6 text-white">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Questions About Privacy?
                </h2>
                <p className='text-xl text-gray-300 mb-8'>
                  If you have any questions about this Privacy Policy or our
                  data practices, please don't hesitate to contact us.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2'
                  >
                    <Mail className='w-5 h-5' />
                    Email Us
                  </a>
                  <a
                    href='/contact'
                    className='border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2'
                  >
<<<<<<< HEAD
                    <User className='w-5 h-5' />                    Contact Form
=======
                    <User className='w-5 h-5' />
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About Privacy?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  If you have any questions about this Privacy Policy or our data practices,
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    <User className="w-5 h-5" />
ursor/integrate-build-improve-and-re-verify-b76c
                    Contact Form
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>
  );
<<<<<<< HEAD
};
export default PrivacyPage;
=======
  )
ursor/integrate-build-improve-and-re-verify-b76c
};

export default PrivacyPage;
  )
};

export default PrivacyPage;

ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
