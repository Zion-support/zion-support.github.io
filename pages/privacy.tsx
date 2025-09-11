


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
origin/automation-improvements-final

==============


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";


import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
import {

import {
  Shield
  Lock
  Eye
  Database
  Mail
  Phone
  MapPin
  Users
=======
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
  Users,;

=======} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
ursor/fix-lint-push-and-merge-to-main-ae4e
import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
} from 'lucide-react';


=======
  const privacySections = [
    {
      title: 'Information We Collect',      icon: <Database className='w-8 h-8' />,
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
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
=======      icon: <Eye className='w-6 h-6' />,
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className='w-6 h-6' />,
    },
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
      icon: <Settings className='w-6 h-6' />,
    },
      icon: <Eye className="w-6 h-6" />
    };
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
      icon: <Settings className="w-6 h-6" />
    }
  ];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield
  Lock
  Eye
  Database
  Mail
  Phone
  MapPin
  Users
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
export default function PrivacyPage() {
export default function PrivacyPage() {;
  return (



=======
origin/automation-improvements-final

export default function PrivacyPage() {
=======
export default function PrivacyPage() {;  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
      canonical="https://ziontechgroup && ziontechgroup.com/privacy">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Privacy Policy;
              </h1>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
                Your privacy is important to us. Learn how we collect, use, and;
                protect your information.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;



=======
=======

=======



=======

                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>



=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h2 className="text-2xl font-bold mb-6 mt-12">
                  Information Sharing
                </h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.
=======


                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.

                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">

                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.

                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
<p className="text-sm text-gray-600 mt-8">
=======
                <p className="text-sm text-gray-600 mt-8">
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className='w-8 h-8' />,
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
    },  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: <Eye className='w-6 h-6' />,
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className='w-6 h-6' />,
    },
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
      icon: <Settings className='w-6 h-6' />,
    },  ];

  return (
ursor/integrate-build-improve-and-re-verify-8f7d
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className='relative z-10 pt-8'>
          {/* Hero Section */}
          <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto text-center'>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                  Privacy Policy
                </h1>
                <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                  Your privacy is our priority. Learn how we protect and handle
                  your personal information.
                </p>
                <div className='flex items-center justify-center gap-4 text-gray-400'>
                  <Shield className='w-6 h-6' />                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>
    </MainLayout>
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12">;
              <div className="prose prose-lg max-w-none">;
                <h2 className="text-2xl font-bold mb-6">;
                  Information We Collect;
                </h2>;
                <p className="mb-6">;
=======
import React from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
  Users,
} from './lucide-react';
import MainLayout from "../components / layout / MainLayout";
;
export default /**
 * PrivacyPage - Function description
 */
function PrivacyPage() {
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/integrate-build-improve-and-re-verify-8f7d
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className='relative z-10 pt-8'>
          {/* Hero Section */}
          <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto text-center'>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                  Privacy Policy
                </h1>
                <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                  Your privacy is our priority. Learn how we protect and handle
                  your personal information.
                </p>
                <div className='flex items-center justify-center gap-4 text-gray-400'>
                  <Shield className='w-6 h-6' />                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>
                  We collect information you provide directly to us, such as;
                  when you create an account, use our services, or contact us;
                  for support.;
                </p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <h3 className="text - xl font - semibold mb - 4">;
                  Personal Information;
                </h3>;
                <ul className="list - disc pl - 6 mb - 6">;
                  <li > Name and contact information</li>;
                  <li > Email address</li>;
                  <li > Phone number</li>;
                  <li > Company information</li>;
                  <li > Payment information</li>;
                </ul>;
                <h3 className="text - xl font - semibold mb - 4">;
                  Usage Information;
                </h3>;
                <ul className="list - disc pl - 6 mb - 6">;
                  <li > How you use our services</li>;
                  <li > Device information</li>;
                  <li > IP address</li>;
                  <li > Browser type and version</li>;
                  <li > Operating system</li>;
                </ul>;
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">;
                  How We Use Your Information;
                </h2>;
                <p className="mb - 6">;
                  We use the information we collect to provide, maintain, and;
                  improve our services.;
                </p>;
                <ul className="list - disc pl - 6 mb - 6">;
                  <li > Provide and maintain our services</li>;
                  <li > Process transactions</li>;
                  <li > Send you technical notices and support messages</li>;
                  <li > Respond to your comments and questions</li>;
                  <li > Improve our services and develop new features</li>;
                  <li > Monitor and analyze usage and trends</li>;
                </ul>;
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">;
                  Information Sharing;
                </h2>;
                <p className="mb - 6">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  We do not sell, trade, or otherwise transfer your personal;
                  information to third parties without your consent, except as;
                  described in this policy.;
                </p>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Data Security</h2>;
                <p className="mb - 6">;
                  We implement appropriate security measures to protect your;
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.;
                </p>;
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Your Rights</h2>;
                <p className="mb - 6">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  You have the right to access, update, or delete your personal;
                  information. You may also opt out of certain communications;
                  from us.;
                </p>;
} from 'lucide-react';

  const _privacySections = [
    {
      title: 'Information We Collect',
icon: <Database className=&quot;w-8 h-8&quot; />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'Personal information (name, email, phone number, company)Business information (company size, industry, project requirements)Technical information (IP address, browser type, device information)Usage data (website interactions, service usage patterns)Communication records (emails, phone calls, support tickets)'
      ]
},
    {
      title: 'How We Use Your Information',
      icon: <Settings className=&quot;w-8 h-8&quot; />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide and improve our servicesCommunicate with you about our servicesProcess payments and manage accountsSend marketing communications (with consent)Analyze usage patterns and improve user experienceComply with legal obligations'
      ]
},
    {
      title: 'Information Sharing',
      icon: <Globe className=&quot;w-8 h-8&quot; />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'We do not sell, trade, or rent your personal informationShare with trusted service providers under strict confidentialityComply with legal requirements and court ordersProtect our rights, property, and safetyBusiness transfers (with notice and choice)'
      ]
},
    {
      title: 'Data Security',
      icon: <Lock className=&quot;w-8 h-8&quot; />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Industry-standard encryption for data in transit and at restRegular security audits and vulnerability assessmentsAccess controls and authentication measuresEmployee training on data protectionIncident response and breach notification procedures'
      ]
    }
],
  ];

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
icon: <Eye className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
icon: <CheckCircle className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
icon: <AlertTriangle className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
icon: <Database className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal information',
icon: <User className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing activities',
icon: <Settings className=&quot;w-6 h-6&quot; />
    }
  ],

  return (_<ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className=&quot;relative z-10 pt-8&quot;>
          {/* Hero Section */}
          <section className=&quot;py-20 px-4&quot;>
            <div className=&quot;max-w-6xl mx-auto text-center&quot;>
              <motion.div
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6}}
              >
                <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                  Privacy Policy
                </h1>
                <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                  Your privacy is our priority. Learn how we protect and handle your personal information.
                </p>
                <div className=&quot;flex items-center justify-center gap-4 text-gray-400&quot;>
                  <Shield className=&quot;w-6 h-6&quot; />

                  <span>Last updated: {lastUpdated}</span>
  ];

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield
  Lock
  Eye
  Database
  Mail
  Phone
  MapPin
  Users
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

export default function PrivacyPage() {
  return (

    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
      canonical="https://ziontechgroup.com/privacy"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and
                protect your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none">
<h2 className="text-2xl font-bold mb-6">
                  Information We Collect

                </h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support.
                </p>
<h3 className="text-xl font-semibold mb-4">
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Usage Information
                </h3>

                <h3 className="text-xl font-semibold mb-4">
                  Usage Information
                </h3>

                <ul className="list-disc pl-6 mb-6">
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">
                  How We Use Your Information
                </h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and
                  improve our services.
                </p>

                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 mt-12">
                  Information Sharing
                </h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.

                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration
                  disclosure, or destruction.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>

                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p>Zion Tech Group</p>
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>

<p className="text-sm text-gray-600 mt-8">
                <p className="text-sm text-gray-600 mt-8">

<p className="text-sm text-gray-600 mt-8">

                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</MainLayout>
  );
}

                </div>
              </motion.div>
            </div>
          </section>
{/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
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
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
{/* Privacy Principles */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Privacy Principles</h2>
                <p className="text-xl text-gray-300">The foundation of how we handle your data</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {privacySections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
{/* Your Rights */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Your Privacy Rights</h2>
                <p className="text-xl text-gray-300">You have control over your personal information</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {right.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
{/* Detailed Policy */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Privacy Information</h2>
                  <div className="space-y-8">
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
                        services and provide a better user experience.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Usage and Purpose</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use your information to provide, maintain, and improve our services, process 
                        transactions, send you technical notices and support messages, and respond to your 
                        comments and questions.
                      </p>
<p className="text-gray-300 leading-relaxed">
                        With your consent, we may also use your information to send you marketing communications 
                        about our services, special offers, and updates. You can opt out of these communications 
                        at any time.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        With your consent, we may also use your information to
                        send you marketing communications about our services,
                        special offers, and updates. You can opt out of these
                        communications at any time.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We do not sell, trade, or otherwise transfer your personal information to third parties 
                        without your consent, except as described in this policy. We may share your information 
                        with trusted third-party service providers who assist us in operating our business.
                      </p>
<p className="text-gray-300 leading-relaxed">
                        These service providers are contractually obligated to keep your information confidential 
                        and use it only for the purposes for which we disclose it to them.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        These service providers are contractually obligated to
                        keep your information confidential and use it only for
                        the purposes for which we disclose it to them.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect 
                        your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These measures include encryption, access controls, regular security assessments;
                        and employee training on data protection best practices.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        These measures include encryption, access controls,
                        regular security assessments, and employee training on
                        data protection best practices.                      </p>
                    </div>
                    <div>
<h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services;
                        comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When we no longer need your information, we will securely delete or anonymize it 
                        in accordance with our data retention policies.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        When we no longer need your information, we will
                        securely delete or anonymize it in accordance with our
                        data retention policies.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">International Data Transfers</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure that such transfers comply with applicable data protection laws and that 
                        appropriate safeguards are in place.
                      </p>
<p className="text-gray-300 leading-relaxed">
                        For transfers to countries outside the European Economic Area, we rely on adequacy 
                        decisions, standard contractual clauses, or other appropriate safeguards.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        For transfers to countries outside the European Economic
                        Area, we rely on adequacy decisions, standard
                        contractual clauses, or other appropriate safeguards.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We use cookies and similar tracking technologies to enhance your experience on our 
                        website, analyze usage patterns, and provide personalized content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You can control cookie settings through your browser preferences. However, disabling 
                        certain cookies may affect the functionality of our services.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        You can control cookie settings through your browser
                        preferences. However, disabling certain cookies may
                        affect the functionality of our services.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Children's Privacy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services are not intended for children under the age of 13. We do not knowingly 
                        collect personal information from children under 13.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        If you believe we have collected information from a child under 13, please contact 
                        us immediately, and we will take steps to remove such information.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        If you believe we have collected information from a
                        child under 13, please contact us immediately, and we
                        will take steps to remove such information.                      </p>
                    </div>
<div>
                      <h3 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our 
                        practices or applicable laws. We will notify you of any material changes by posting 
                        the updated policy on our website.
                      </p>
<p className="text-gray-300 leading-relaxed">
                        Your continued use of our services after such changes constitutes acceptance of 
                        the updated policy. We encourage you to review this policy periodically.
                      </p>
                      <p className='text-gray-300 leading-relaxed'>
                        Your continued use of our services after such changes
                        constitutes acceptance of the updated policy. We
                        encourage you to review this policy periodically.                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
{/* Contact Information */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
<h2 className="text-4xl font-bold mb-6 text-white">
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
                    <User className='w-5 h-5' />                    Contact Form
                  </a>
    </MainLayout>;
  );
}

                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </Link>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    Contact Form
</a>
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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>


  )
};

export default PrivacyPage;
 

                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;
 

 
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

==============>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

>>>>>>> origin/main
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <p className="mb - 6">;
                  If you have any questions about this Privacy Policy, please;
                  contact us at:;
                </p>;
                <div className="bg - gray - 50 rounded - lg p - 6">;
                  <div className="flex items - center mb - 4">;
                    <Mail className="w - 5 h - 5 text - blue - 600 mr - 3" />;
                    <span > kleber@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items - center mb - 4">;
                    <Phone className="w - 5 h - 5 text - blue - 600 mr - 3" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items - start">;
                    <Users className="w - 5 h - 5 text - blue - 600 mr - 3 mt - 1" />;
                    <div>;
                      <p > Zion Tech Group</p>;
                      <p > 364 E Main St STE 1008</p>;
                      <p > Middletown, DE 19709</p>;
                    </div>;
                  </div>;
                </div>;
<p className="text - sm text - gray - 600 mt - 8">;
                  Last updated: January 2024;
                </p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}

 
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
