
=======import React from 'react';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




==============
const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' }
  { number: '24/7', label: 'Security Monitoring' }
  { number: '0', label: 'Security Breaches' }
  { number: '100%', label: 'Data Encryption' }
];
export default function SecurityPage() {

=======

=======const securityFeatures = [;
  {;
    title: 'Data Encryption',;
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',;
    icon: Lock,;
    details: ['AES-256 encryption', 'TLS 1 && 1.3 for data in transit', 'End-to-end encryption', 'Key management'];
  },;
  {;
    title: 'Access Controls',;
    description: 'Multi-factor authentication and role-based access controls ensure only authorized users can access your data',;
    icon: Users,;
    details: ['Multi-factor authentication', 'Role-based permissions', 'Single sign-on (SSO)', 'Session management'];
  },;
  {;
    title: 'Security Monitoring',;
    description: '24/7 security monitoring and threat detection to protect against cyber attacks',;
    icon: Eye,;
    details: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts'];
  },;
  {;
    title: 'Compliance',;
    description: 'We maintain compliance with industry standards and regulations to protect your data',;
    icon: Shield,;
    details: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'HIPAA compliance'];
  },;
  {;
    title: 'Data Backup',;
    description: 'Regular automated backups ensure your data is always protected and recoverable',;
    icon: Database,;
    details: ['Automated backups', 'Multiple backup locations', 'Point-in-time recovery', 'Data retention policies'];
  },;
  {;
    title: 'Incident Response',;
    description: 'Comprehensive incident response procedures to quickly address any security issues',;
    icon: AlertTriangle,;
    details: ['24/7 incident response', 'Security team on standby', 'Rapid containment', 'Post-incident analysis'];
  }
];

const securityStats = [;
  { number: '99 && 99.9%', label: 'Uptime Guarantee' },;
  { number: '24/7', label: 'Security Monitoring' },;
  { number: '0', label: 'Security Breaches' },;
  { number: '100%', label: 'Data Encryption' }
];

export default function SecurityPage() {;
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}

        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function Security(req, res) {
  try {
  const securityMeasures = [;
    {;
      id: 'data-protection';
      title: 'Data Protection';
      icon: Database;
      features: [;
        'End-to-end encryption for all data in transitAES-256 encryption for data at restRegular automated backups with encryptionSecure data centers with 24/7 monitoringData residency compliance for global clients';
      ];
    };
    {;
      id: 'access-control',;
      title: 'Access Control',;
      icon: Key,;
      features: [;
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)Principle of least privilege implementationRegular access reviews and deprovisioningSingle sign-on (SSO) integration';
      ];
    },;
    {;
      id: 'infrastructure',;
      title: 'Infrastructure Security',;
      icon: Server,;
      features: [;
        'Network segmentation and firewallsIntrusion detection and prevention systemsRegular vulnerability assessmentsAutomated security patchingDDoS protection and rate limiting';
      ];
    },;
    {;
      id: 'monitoring',;
      title: 'Security Monitoring',;
      icon: Eye,;
      features: [;
        '24/7 security operations center (SOC)Real-time threat detection and responseComprehensive audit loggingSecurity incident response teamContinuous security monitoring tools';
      ];
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const certifications = [;
    { name: 'SOC 2 Type II', status: 'Certified' },;
    { name: 'ISO 27001', status: 'Certified' },;
    { name: 'GDPR', status: 'Compliant' },;
    { name: 'HIPAA', status: 'Compliant' };
    { name: 'PCI DSS', status: 'Compliant'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <EnhancedNavigation />
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======            <motion.div
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
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="flex items-center justify-center mb-6"
            >
              <Shield className="w-16 h-16 text-cyan-400" />
            </motion.div>
            <motion.h1
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
              transition={{ duration: 0.8, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Security First
            </motion.h1>
            <motion.p
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
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
            </motion.p>
          </div>
        </section>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.
              </p>
            </motion.div>
          </div>
        </section>
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Security Stats */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            </div>;
          </div>;
        </section>;


import Link from 'next / link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components / Layout';
;
const security_features = [;
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry - standard encryption protocols',
    icon: Lock,
    details: ['AES - 256 encryption', 'TLS 1.3 for data in transit', 'End - to - end encryption', 'Key management'];
  },
  {
    title: 'Access Controls',
    description: 'Multi - factor authentication and role - based access controls ensure only authorized users can access your data',
    icon: Users,
    details: ['Multi - factor authentication', 'Role - based permissions', 'Single sign - on (SSO)', 'Session management'];
  },
  {
    title: 'Security Monitoring',
    description: '24 / 7 security monitoring and threat detection to protect against cyber attacks',
    icon: Eye,
    details: ['Real - time monitoring', 'Threat detection', 'Incident response', 'Security alerts'];
  },
  {
    title: 'Compliance',
    description: 'We maintain compliance with industry standards and regulations to protect your data',
    icon: Shield,
    details: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'HIPAA compliance'];
  },
  {
    title: 'Data Backup',
    description: 'Regular automated backups ensure your data is always protected and recoverable',
    icon: Database,
    details: ['Automated backups', 'Multiple backup locations', 'Point - in - time recovery', 'Data retention policies'];
  },
  {
    title: 'Incident Response',
    description: 'Comprehensive incident response procedures to quickly address any security issues',
    icon: AlertTriangle,
    details: ['24 / 7 incident response', 'Security team on standby', 'Rapid containment', 'Post - incident analysis'];
  }
];
;
const security_stats = [;
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24 / 7', label: 'Security Monitoring' },
  { number: '0', label: 'Security Breaches' },
  { number: '100%', label: 'Data Encryption' }
];
;
export default /**
 * SecurityPage - Function description
 */
function SecurityPage() {
  return (
    <Layout;
      title="Security - Zion Tech Group";
      description="Learn about our comprehensive security measures and how we protect your data and systems.";
      keywords="security, data protection, encryption, compliance, cybersecurity";
    >;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - blue - 900 via - purple - 900 to - indigo - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - blue - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
            <div className="absolute -bottom - 8 left - 20 w - 72 h - 72 bg - indigo - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 4000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Security & <span className="text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - purple - 400">Protection</span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Security Stats */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              {security_stats.map ((stat, index) => (
                <motion.div;
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Security Features;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We implement multiple layers of security to protect your data and ensure business continuity.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {securityFeatures && securityFeatures.map((feature, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">;
                  <div className="flex items-center mb-4">;
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">;
                      <feature && feature.icon className="w-6 h-6 text-blue-600" />;
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900">{feature && feature.title}</h3>;
                  </div>;

                  <p className="text-gray-600 mb-4 leading-relaxed">;
                    {feature && feature.description}
                  </p>;

                  <div className="space-y-2">;
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>;
                    <ul className="space-y-1">;
                      {feature && feature.details.map((detail, idx) => (;
                        <li key={idx} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />;

                          {detail}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </motion && motion.div>;
              ))}

            </div>;
          </div>;
        </section>;


        {/* Compliance Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Compliance & Certifications;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We maintain compliance with industry standards and regulations to ensure your data is protected.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              <div className="text-center">;
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Shield className="w-8 h-8 text-green-600" />;
                </div>;
                <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Type II</h3>;
                <p className="text-gray-600 text-sm">Service Organization Control 2 Type II compliance</p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Lock className="w-8 h-8 text-blue-600" />;
                </div>;
                <h3 className="text-lg font-bold text-gray-900 mb-2">ISO 27001</h3>;
                <p className="text-gray-600 text-sm">Information Security Management System</p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Eye className="w-8 h-8 text-purple-600" />;
                </div>;
                <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR</h3>;
                <p className="text-gray-600 text-sm">General Data Protection Regulation compliance</p>;
              </div>;

              <div className="text-center">;
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                  <Database className="w-8 h-8 text-orange-600" />;
                </div>;
                <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA</h3>;
                <p className="text-gray-600 text-sm">Health Insurance Portability and Accountability Act</p>;
=======
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <motion.div

                  key={measure.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                  transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"

ursor/integrate-build-improve-and-re-verify-8f7d
import Head from 'next/head';
import {motion} from 'framer-motion';
import {Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin,} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [
        'End-to-end encryption for all data in transit',
        'AES-256 encryption for data at rest',
        'Regular automated backups with encryption',
        'Secure data centers with 24/7 monitoring',
        'Data residency compliance for global clients',
      ],
    },    {
      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA) required',
        'Role-based access control (RBAC)',
        'Principle of least privilege implementation',
        'Regular access reviews and deprovisioning',
        'Single sign-on (SSO) integration',
      ],
    },    {
      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        'Network segmentation and firewalls',
        'Intrusion detection and prevention systems',
        'Regular vulnerability assessments',
        'Automated security patching',
        'DDoS protection and rate limiting',
      ],
    },    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [
        '24/7 security operations center (SOC)',
        'Real-time threat detection and response',
        'Comprehensive audit logging',
        'Security incident response team',
        'Continuous security monitoring tools',
      ],
    },  ];

  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta
          name='description'
          content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className='pt-32 pb-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex items-center justify-center mb-6'
            >
              <Shield className='w-16 h-16 text-cyan-400' />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6'
            >
              Security First
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Your security and privacy are our top priorities. Learn about our
              comprehensive security measures and industry-leading practices.            </motion.p>
          </div>
        </section>

        {/* Security Overview */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Enterprise-Grade Security
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                We implement multiple layers of security controls to protect
                your data and ensure business continuity.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8 mb-16'>              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300'
                >
                  <div className='flex items-center mb-6'>
                    <measure.icon className='w-8 h-8 text-cyan-400 mr-4' />
                    <h3 className='text-2xl font-bold text-white'>
                      {measure.title}
                    </h3>
                  </div>

                  <ul className='space-y-3'>
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-start'>
                        <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300 leading-relaxed'>
                          {feature}
                        </span>                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6 text-center'>
                Security Certifications & Compliance
              </h3>

              <div className='grid md:grid-cols-5 gap-6'>                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='text-center p-4 bg-slate-800/50 rounded-xl border border-white/10'
                  >
                    <CheckCircle className='w-8 h-8 text-green-400 mx-auto mb-3' />
                    <h4 className='text-white font-semibold mb-1'>
                      {cert.name}
                    </h4>
                    <p className='text-cyan-400 text-sm'>{cert.status}</p>                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Incident Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mb-16'
                </Link>
                <Link
                  href="/compliance"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Compliance Details
</Link>
                  <ul className="space-y-3">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
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
            {/* Certifications */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
              transition={{ duration: 0.8, delay: 0.5 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16"
            >
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Certifications & Compliance</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, scale: 0.9 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-cyan-400 text-sm">{cert.status}</p>
                  </motion.div>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </motion.div>;
            {/* Security Incident Response */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
              transition={{ duration: 0.8, delay: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mb-16"
            >
              <h3 className='text-3xl font-bold text-white mb-6'>
                Incident Response
              </h3>
              <div className='bg-slate-800/50 rounded-2xl p-8 border border-white/10'>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-4 flex items-center'>
                      <Eye className='w-5 h-5 text-cyan-400 mr-2' />
                      Detection & Response
                    </h4>
                    <ul className='space-y-2 text-gray-300'>                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry standards and regulations to ensure your data is protected.
              </p>
            </motion.div>
            {/* Contact Security Team */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <motion.div;
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
              transition={{ duration: 0.8, delay: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 text-red-400 mr-4" />
                Report Security Issues
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Security Email</p>
                    <p className="text-gray-300">security@ziontechgroup.com</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Service Organization Control 2 Type II compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                </Link>
import Head from 'next/head';
import { motion } from 'framer-motion';
import Head from 'next/head';
import {motion} from 'framer-motion';
import {Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin,} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [
        'End-to-end encryption for all data in transit',
        'AES-256 encryption for data at rest',
        'Regular automated backups with encryption',
        'Secure data centers with 24/7 monitoring',
        'Data residency compliance for global clients',
      ],
    },    {
      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA) required',
        'Role-based access control (RBAC)',
        'Principle of least privilege implementation',
        'Regular access reviews and deprovisioning',
        'Single sign-on (SSO) integration',
      ],
    },    {
      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        'Network segmentation and firewalls',
        'Intrusion detection and prevention systems',
        'Regular vulnerability assessments',
        'Automated security patching',
        'DDoS protection and rate limiting',
      ],
    },    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [
        '24/7 security operations center (SOC)',
        'Real-time threat detection and response',
        'Comprehensive audit logging',
        'Security incident response team',
        'Continuous security monitoring tools',
      ],
    },  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' },  ];

  return (
    <>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta
          name='description'
          content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className='pt-32 pb-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='flex items-center justify-center mb-6'
            >
              <Shield className='w-16 h-16 text-cyan-400' />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6'
            >
              Security First
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              Your security and privacy are our top priorities. Learn about our
              comprehensive security measures and industry-leading practices.            </motion.p>
          </div>
        </section>

        {/* Security Overview */}
        <section className='py-20 px-6'>
          <div className='max-w-6xl mx-auto'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Enterprise-Grade Security
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                We implement multiple layers of security controls to protect
                your data and ensure business continuity.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-8 mb-16'>              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300'
                >
                  <div className='flex items-center mb-6'>
                    <measure.icon className='w-8 h-8 text-cyan-400 mr-4' />
                    <h3 className='text-2xl font-bold text-white'>
                      {measure.title}
                    </h3>
                  </div>

                  <ul className='space-y-3'>
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-start'>
                        <CheckCircle className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300 leading-relaxed'>
                          {feature}
                        </span>                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6 text-center'>
                Security Certifications & Compliance
              </h3>

              <div className='grid md:grid-cols-5 gap-6'>                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='text-center p-4 bg-slate-800/50 rounded-xl border border-white/10'
                  >
                    <CheckCircle className='w-8 h-8 text-green-400 mx-auto mb-3' />
                    <h4 className='text-white font-semibold mb-1'>
                      {cert.name}
                    </h4>
                    <p className='text-cyan-400 text-sm'>{cert.status}</p>                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Incident Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6'>
                Incident Response
              </h3>
              <div className='bg-slate-800/50 rounded-2xl p-8 border border-white/10'>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-4 flex items-center'>
                      <Eye className='w-5 h-5 text-cyan-400 mr-2' />
                      Detection & Response
                    </h4>
                    <ul className='space-y-2 text-gray-300'>                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-4 flex items-center'>
                      <Lock className='w-5 h-5 text-cyan-400 mr-2' />
                      Business Continuity
                    </h4>
                    <ul className='space-y-2 text-gray-300'>                      <li>• Disaster recovery plans</li>
                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vulnerability Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Regular Scanning
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Continuous automated vulnerability scanning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Penetration Testing
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Annual third-party security assessments
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Rapid Remediation
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Quick patching and vulnerability resolution
                    </p>                  </div>
                </div>
              </div>
            </motion.div>
{/* Contact Security Team */}
              className='mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6'>
                Vulnerability Management
              </h3>
              <div className='bg-slate-800/50 rounded-2xl p-8 border border-white/10'>
                <p className='text-gray-300 leading-relaxed mb-6'>
                  We maintain a proactive approach to identifying and addressing
                  security vulnerabilities:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Eye className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Regular Scanning
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Continuous automated vulnerability scanning
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Shield className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Penetration Testing
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Annual third-party security assessments
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Rapid Remediation
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Quick patching and vulnerability resolution
                    </p>                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Security Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className='text-white font-semibold'>Security Email</p>
                    <p className='text-gray-300'>security@ziontechgroup.com</p>
                  </div>
                </div>
              className='bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20'
            >
              <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-8 h-8 text-red-400 mr-4' />
                Report Security Issues
              </h3>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you discover a security vulnerability, please report it to
                our security team immediately:
              </p>

              <div className='grid md:grid-cols-3 gap-6'>
                <div className='flex items-center'>
                  <Mail className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>Security Email</p>
                    <p className='text-gray-300'>security@ziontechgroup.com</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <Phone className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>
                      Emergency Hotline
                    </p>
                    <p className='text-gray-300'>+1 (555) 123-HELP</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <Key className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>PGP Key</p>
                    <p className='text-gray-300'>Available on request</p>                  </div>
                </div>
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className='text-white font-semibold'>
                      Emergency Hotline
                    </p>
                    <p className='text-gray-300'>+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Key className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">PGP Key</p>
                    <p className="text-gray-300">Available on request</p>


</Link>
                  </div>
                </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
</Link>
origin/main
origin/automation-improvements-final
</Link>
                  </div>
                </div>
=======

=======
</Link>>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
</Link>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </section>
    </>
=======

=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  View Compliance Details;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;



  );

  )

=======  )
}
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Questions About Our Security?;
              </h2>;
              <p className="text - xl mb - 8 max - w-2xl mx - auto">;
                Our security team is available to answer any questions about our security measures and compliance.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold inline - flex items - center justify - center";
                >;
                  Contact Security Team;
                </Link>;
                <Link;
                  href="/compliance";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  View Compliance Details;
</Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}  );
}
);
}
        <EnhancedFooter />
      </div>
    </Layout>;
  );
}  )
}
)
    </>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  );
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
)
}
origin/main
  )
}
ursor/fix-lint-push-and-merge-to-main-ae4e
<<<<<<< HEAD
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
