




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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";


  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
  Users,;





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

} from "lucide-react";
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
origin/automation-improvements-final

export default function PrivacyPage() {

  return (
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







>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements
        {/* Content Section */}
        <section className="py-16 px-4">;
          <div className="max-w-4xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                </h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support.
                </p>


                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Payment information</li>
                </ul>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                <ul className="list-disc pl-6 mb-6">
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                <h2 className="text-2xl font-bold mb-6 mt-12">
                  How We Use Your Information
                </h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and
                  improve our services.
                </p>







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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

                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-4b36

                <p className="text-sm text-gray-600 mt-8">
>>>>>>> origin/automation-improvements-final



>>>>>>> origin/feature/merge-conflicts-and-improvements
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>



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

                  We do not sell, trade, or otherwise transfer your personal;
                  information to third parties without your consent, except as;
                  described in this policy.;
                </p>;

                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Data Security</h2>;
                <p className="mb - 6">;
                  We implement appropriate security measures to protect your;
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction.;
                </p>;
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Your Rights</h2>;
                <p className="mb - 6">;

                  You have the right to access, update, or delete your personal;
                  information. You may also opt out of certain communications;
                  from us.;
                </p>;






                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>

  );
};
export default PrivacyPage;


  )
};

export default PrivacyPage;

 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4






>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba





>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

