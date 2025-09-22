import React from 'react';
import MainLayout from '../components/layout/MainLayout';
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
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are transparent about what data we collect, how we use it, and who we share it with. You have the right to know and control your data."
  },
  {
    icon: Lock,
    title: "Data Minimization",
    description: "We only collect the minimum amount of personal data necessary to provide our services and improve your experience."
  },
  {
    icon: Database,
    title: "Secure Storage",
    description: "Your data is stored securely using encryption and other security measures, and we regularly audit our systems for vulnerabilities."
  },
  {
    icon: UserCheck,
    title: "User Control",
    description: "You have control over your personal data, including the right to access, correct, delete, or port your information."
  },
  {
    icon: AlertTriangle,
    title: "Breach Notification",
    description: "In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours."
  }
];

const dataTypes = [
  {
    category: "Personal Information",
    description: "Information that can be used to identify you directly",
    examples: [
      "Name and contact information (email, phone, address)",
      "Account credentials and profile information",
      "Payment and billing information",
      "Communication preferences"
    ]
  },
  {
    category: "Usage Data",
    description: "Information about how you interact with our services",
    examples: [
      "Website usage patterns and preferences",
      "Service usage statistics and analytics",
      "Device information and browser details",
      "IP addresses and location data"
    ]
  },
  {
    category: "Technical Data",
    description: "Information collected automatically through our services",
    examples: [
      "Log files and error reports",
      "Performance metrics and system data",
      "Security and authentication logs",
      "Cookies and similar technologies"
    ]
  }
];

const rights = [
  {
    title: "Right to Access",
    description: "You can request a copy of all personal data we hold about you."
  },
  {
    title: "Right to Rectification",
    description: "You can request correction of inaccurate or incomplete personal data."
  },
  {
    title: "Right to Erasure",
    description: "You can request deletion of your personal data under certain circumstances."
  },
  {
    title: "Right to Portability",
    description: "You can request a copy of your data in a machine-readable format."
  },
  {
    title: "Right to Object",
    description: "You can object to processing of your personal data for certain purposes."
  },
  {
    title: "Right to Restrict Processing",
    description: "You can request restriction of processing of your personal data."
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}


ursor/fix-website-loading-errors-and-merge-6662
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

import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail

ursor/fix-website-loading-errors-and-merge-6662
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
ursor/fix-website-loading-errors-and-merge-6662
origin/automation-improvements-final


origin/automation-improvements-final

export default function PrivacyPage() {
export default function PrivacyPage() {;
  return (
    <MainLayout title="Privacy Policy - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the privacy policy page.
        </p>
      </div>
    </MainLayout>




ursor/fix-website-loading-errors-and-merge-6662


ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
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

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and
                protect your information.
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
origin/automation-improvements-final
              </p>
            </motion.div>
          </div>
        </section>

import React from 'react';
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
return (

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





ursor/fix-website-loading-errors-and-merge-6662





        {/* Content Section */}
        <section className="py-16 px-4">;
          <div className="max-w-4xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
import React from 'react',
import Layout from '../components/layout/Layout',
import SEOOptimizer from '../components/SEOOptimizer',
import AnalyticsTracker from '../components/AnalyticsTracker',
import ErrorBoundary from '../components/ErrorBoundary',
import { motion } from 'framer-motion',
import {
  Shield, Lock, Eye, Database, Globe,
  User, Settings, AlertTriangle, CheckCircle, Mail
} from 'lucide-react',
const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025',
  const privacySections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'Personal information (name, email, phone number, company)Business information (company size, industry, project requirements)Technical information (IP address, browser type, device information)Usage data (website interactions, service usage patterns)Communication records (emails, phone calls, support tickets)'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'Provide and improve our servicesCommunicate with you about our servicesProcess payments and manage accountsSend marketing communications (with consent)Analyze usage patterns and improve user experienceComply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'We do not sell, trade, or rent your personal informationShare with trusted service providers under strict confidentialityComply with legal requirements and court ordersProtect our rights, property, and safetyBusiness transfers (with notice and choice)'
      ]
    },
    {
      title: 'Data Security',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Industry-standard encryption for data in transit and at restRegular security audits and vulnerability assessmentsAccess controls and authentication measuresEmployee training on data protectionIncident response and breach notification procedures'
      ]
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal information',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Correction',
      description: 'Request correction of inaccurate information',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Deletion',
      description: 'Request deletion of your personal information',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Portability',
      description: 'Request transfer of your data to another service',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal information',
      icon: <User className="w-6 h-6" />
    },
    {
      title: 'Restriction',
      description: 'Request restriction of processing activities',
      icon: <Settings className="w-6 h-6" />
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  return (
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
  Mail,;
} from 'lucide-react';

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
    },
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
  ];

  return (
origin/cursor/automate-test-improve-and-merge-code-2533
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Your privacy is our priority. Learn how we protect and handle your personal information.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Shield className="w-6 h-6" />
<main className='relative z-10 pt-8'>
          {/* Hero Section */}
          <section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto text-center'>
              <motion.div
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
                  <Shield className='w-6 h-6' />
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Overview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Our Commitment to Privacy
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    At Zion Tech Group, we are committed to protecting your privacy and ensuring the security
                    of your personal information. This Privacy Policy explains how we collect, use, disclose,
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
                  initial={{ opacity: 0, x: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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

          {/* Overview */}
<section className='py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50'>
            <div className='max-w-6xl mx-auto'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
<h2 className='text-4xl font-bold mb-6 text-white'>
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
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
className='relative'
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
                          <div className='text-gray-400'>Uptime</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* Privacy Principles */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Our Privacy Principles</h2>
                <p className="text-xl text-gray-300">The foundation of how we handle your data</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {privacySections.map((section, index) => (
                  <motion.div
                    key={section.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {section.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </ul>;
                  </motion.div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Your Rights */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4 text-white">Your Privacy Rights</h2>
                <p className="text-xl text-gray-300">You have control over your personal information</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rights.map((right, index) => (
                  <motion.div
                    key={right.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">
                        {right.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </motion.div>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Detailed Policy */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Privacy Information</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Information Collection</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We collect information you provide directly to us, such as when you create an account,
                        request a quote, or contact our support team. We also automatically collect certain
                        information about your device and how you interact with our services.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        This may include your IP address, browser type, operating system, referring URLs,
                        access times, and pages viewed. We use this information to improve our services
                        and provide a better user experience.
                      </p>
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
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect
                        your personal information against unauthorized access, alteration, disclosure, or destruction.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        These measures include encryption, access controls, regular security assessments,
                        and employee training on data protection best practices.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We retain your personal information for as long as necessary to provide our services,
                        comply with legal obligations, resolve disputes, and enforce our agreements.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        When we no longer need your information, we will securely delete or anonymize it
                        in accordance with our data retention policies.
                      </p>
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Questions About Privacy?


ursor/fix-website-loading-errors-and-merge-6662

          {/* Privacy Principles */}
<section className='py-20 px-4'>
            <div className='max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className='text-center mb-16'
              >
                <h2 className='text-4xl font-bold mb-4 text-white'>
                  Our Privacy Principles
origin/cursor/automate-test-improve-and-merge-code-2533
                </h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as
                  when you create an account, use our services, or contact us
                  for support.
                </p>






                <h3 className="text-xl font-semibold mb-4">
                  Personal Information
                </h3>
                <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>





                <h3 className="text-xl font-semibold mb-4">
                  Usage Information
                </h3>

                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
origin/automation-improvements-final


origin/automation-improvements-final
                <h3 className="text-xl font-semibold mb-4">
                  Usage Information
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
                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
origin/automation-improvements-final
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





ursor/fix-website-loading-errors-and-merge-6662

                <h2 className="text-2xl font-bold mb-6 mt-12">
                  How We Use Your Information
              </motion.div>

              <div className='grid md:grid-cols-2 gap-8'>
                {privacySections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50'
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
                          <span className='text-gray-300'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Your Rights */}
<section className='py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50'>
            <div className='max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className='text-center mb-16'
              >
                <h2 className='text-4xl font-bold mb-4 text-white'>
                  Your Privacy Rights
origin/cursor/automate-test-improve-and-merge-code-2533
                </h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and
                  improve our services.
                </p>



                <h2 className="text-2xl font-bold mb-6 mt-12">How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and improve our services.
                </p>
                

origin/automation-improvements-final
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>





ursor/fix-website-loading-errors-and-merge-6662

                <h2 className="text-2xl font-bold mb-6 mt-12">
                  Information Sharing
                </h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.



                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.

                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">

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
origin/automation-improvements-final
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration
                  disclosure, or destruction.
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
origin/automation-improvements-final
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us.
                  You have the right to access, update, or delete your personal information. You may also 
                  opt out of certain communications from us.
origin/automation-improvements-final
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>

                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                

origin/automation-improvements-final
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



                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
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
              </motion.div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {rights.map((right, index) => (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center'
                  >
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                      <div className='text-white'>{right.icon}</div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {right.title}
                    </h3>
                    <p className='text-gray-300 text-sm'>{right.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Policy */}
<section className='py-20 px-4'>
            <div className='max-w-4xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
className='space-y-12'
              >
                <div>
                  <h2 className='text-3xl font-bold text-white mb-6'>
                    Detailed Privacy Information
                  </h2>

                  <div className='space-y-8'>
origin/cursor/automate-test-improve-and-merge-code-2533
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
                        services and provide a better user experience.
                      </p>
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
                        communications at any time.
                      </p>
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
                        the purposes for which we disclose it to them.
                      </p>
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
                        data protection best practices.
                      </p>
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
                        data retention policies.
                      </p>
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
                        contractual clauses, or other appropriate safeguards.
                      </p>
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
                        affect the functionality of our services.
                      </p>
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
                        will take steps to remove such information.
                      </p>
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
                        encourage you to review this policy periodically.
                      </p>
                    </div>
                  </div>
                </div>




ursor/fix-website-loading-errors-and-merge-6662
<p className="text-sm text-gray-600 mt-8">
                <p className="text-sm text-gray-600 mt-8">
origin/automation-improvements-final
main
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </MainLayout>;
  );
}

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

              transition={{ duration: 0 && 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12">;
              <div className="prose prose-lg max-w-none">;
                <h2 className="text-2xl font-bold mb-6">;
                  Information We Collect;
                </h2>;
                <p className="mb-6">;
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
} from './lucide-react';
import MainLayout from "../components / layout / MainLayout";
;
export default /**
 * PrivacyPage - Function description
 */
function PrivacyPage() {
  return (
    <MainLayout;
      title="Privacy Policy - Zion Tech Group";
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information.";
      keywords="privacy policy, data protection, personal information, GDPR compliance";
      canonical="https://ziontechgroup.com / privacy";
    >;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;
          <div className="max - w-7xl mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Privacy Policy;
              </h1>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
                Your privacy is important to us. Learn how we collect, use, and;
                protect your information.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Content Section */}
        <section className="py - 16 px - 4">;
          <div className="max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg - white rounded - 2xl shadow - lg p - 8 md:p - 12";
            >;
              <div className="prose prose - lg max - w-none">;
                <h2 className="text - 2xl font - bold mb - 6">;
                  Information We Collect;
                </h2>;
                <p className="mb - 6">;

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

    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Layout>
        <main className="relative z-10 pt-8">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Your privacy is our priority. Learn how we protect and handle your personal information.
                </p>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <Shield className="w-6 h-6" />
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

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
];

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and handling your personal data with care and respect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We collect different types of information to provide and improve our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {dataTypes.map((dataType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{dataType.category}</h3>
                  <p className="text-gray-600 mb-6">{dataType.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                    <ul className="space-y-2">
                      {dataType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use your personal information for legitimate business purposes and to improve our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Delivery</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide and maintain our services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Process transactions and payments
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Communicate with you about our services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide customer support
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Improvement & Analytics</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyze usage patterns and trends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improve our services and user experience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop new features and products
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conduct research and analytics
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have certain rights regarding your personal information under applicable privacy laws.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{right.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 123 Technology Drive, Suite 100, New York, NY 10001</p>
                </div>
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
              </motion.div>
            </div>
          </section>

          {/* Contact Information */}
<section className='py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50'>
            <div className='max-w-4xl mx-auto text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
<h2 className='text-4xl font-bold mb-6 text-white'>
                  Questions About Privacy?
                </h2>
                <p className='text-xl text-gray-300 mb-8'>
                  If you have any questions about this Privacy Policy or our
                  data practices, please don't hesitate to contact us.
                </p>
origin/cursor/automate-test-improve-and-merge-code-2533
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
                  </Link>
                  <a
                    href=&quot;/contact&quot;
                    className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2&quot;
                  >
                    <User className=&quot;w-5 h-5&quot; />
                    Contact Form
                  </Link>

                    <User className='w-5 h-5' />
                    Contact Form
                  </a>
origin/cursor/automate-test-improve-and-merge-code-2533
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





                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;
<h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;
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
origin/cursor/automate-test-improve-and-merge-code-20a4
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2";
                  >;
                    <Mail className="w-5 h-5" />;
                    Email Us;
                  </a>;
                  <a;
                    href="/contact";
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2";
                  >;
                    <User className="w-5 h-5" />;
                    Contact Form;
                  </a>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>;
  );
},;
export default PrivacyPage;
main
);
};
export default PrivacyPage;
origin/cursor/automate-test-improve-and-merge-code-2533
}
