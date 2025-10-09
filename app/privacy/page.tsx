'use client';
import React from 'react';
import { Brain, Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin, CheckCircle, ArrowRight, Zap, Settings, Code, BarChart, Cloud, Target, MessageSquare, Cpu, FileText, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Home, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Personal Information',
          items: [
            'Name, email address, phone number, and mailing address',
            'Company information and job title',
            'Payment and billing information',
            'Account credentials and preferences'
          ]
        },
        {
          subtitle: 'Usage Information',
          items: [
            'Website usage patterns and interactions',
            'Service usage data and performance metrics',
            'Device information and browser details',
            'IP address and location data'
          ]
        },
        {
          subtitle: 'AI and Machine Learning Data',
          items: [
            'Data processed through our AI services',
            'Model training data (anonymized)',
            'Performance analytics and insights',
            'User interaction patterns with AI features'
          ]
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Target,
      content: [
        {
          subtitle: 'Service Delivery',
          items: [
            'Provide and maintain our AI and IT services',
            'Process transactions and manage accounts',
            'Deliver customer support and technical assistance',
            'Customize and improve user experience'
          ]
        },
        {
          subtitle: 'Communication',
          items: [
            'Send service-related notifications and updates',
            'Respond to inquiries and support requests',
            'Share important policy changes and security updates',
            'Provide marketing communications (with consent)'
          ]
        },
        {
          subtitle: 'Business Operations',
          items: [
            'Analyze usage patterns and improve services',
            'Conduct research and development',
            'Ensure security and prevent fraud',
            'Comply with legal and regulatory requirements'
          ]
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Technical Safeguards',
          items: [
            'End-to-end encryption for data transmission',
            'Secure data storage with industry-standard encryption',
            'Regular security audits and vulnerability assessments',
            'Access controls and authentication protocols'
          ]
        },
        {
          subtitle: 'Operational Safeguards',
          items: [
            'Employee training on data protection',
            'Strict access controls and need-to-know basis',
            'Regular security monitoring and incident response',
            'Third-party security assessments and certifications'
          ]
        },
        {
          subtitle: 'AI-Specific Security',
          items: [
            'Secure model training and deployment environments',
            'Data anonymization and pseudonymization techniques',
            'Regular model security audits and testing',
            'Compliance with AI ethics and safety standards'
          ]
        }
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      icon: Users,
      content: [
        {
          subtitle: 'Service Providers',
          items: [
            'Cloud infrastructure providers (AWS, Azure, GCP)',
            'Payment processors and financial institutions',
            'Customer support and communication tools',
            'Analytics and monitoring services'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          items: [
            'Compliance with court orders and legal processes',
            'Protection of rights and safety of users',
            'Prevention of fraud and illegal activities',
            'Regulatory compliance and reporting'
          ]
        },
        {
          subtitle: 'Business Transfers',
          items: [
            'Mergers, acquisitions, or asset sales',
            'Corporate restructuring or reorganization',
            'Transfer of business operations',
            'Successor entity obligations'
          ]
        }
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: Settings,
      content: [
        {
          subtitle: 'Access and Control',
          items: [
            'Access your personal information',
            'Update or correct inaccurate data',
            'Download your data in portable formats',
            'Delete your account and associated data'
          ]
        },
        {
          subtitle: 'Communication Preferences',
          items: [
            'Opt-out of marketing communications',
            'Choose communication channels and frequency',
            'Manage notification preferences',
            'Update contact information'
          ]
        },
        {
          subtitle: 'Data Processing',
          items: [
            'Object to certain data processing activities',
            'Request data portability',
            'Restrict processing of personal data',
            'Withdraw consent where applicable'
          ]
        }
      ]
    },
    {
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: 'Transfer Mechanisms',
          items: [
            'Standard Contractual Clauses (SCCs)',
            'Adequacy decisions by relevant authorities',
            'Binding Corporate Rules (BCRs)',
            'Certification schemes and codes of conduct'
          ]
        },
        {
          subtitle: 'Safeguards',
          items: [
            'Data protection impact assessments',
            'Regular review of transfer mechanisms',
            'Technical and organizational safeguards',
            'Compliance with applicable data protection laws'
          ]
        }
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Data Protection Officer',
      name: 'Sarah Chen',
      email: 'privacy@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'General Inquiries',
      name: 'Support Team',
      email: 'support@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      title: 'Legal Department',
      name: 'Legal Team',
      email: 'legal@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and protection."
        keywords={['privacy policy', 'data protection', 'GDPR', 'privacy rights', 'Zion Tech Group', 'data security']}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 2024
          </div>
        </section>

        {/* Introduction */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 neon-text">Introduction</h2>
          <p className="text-gray-300 mb-4">
            Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI and IT services, 
            visit our website, or interact with us in any way.
          </p>
          <p className="text-gray-300">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="cyber-card p-8">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2>
              </div>
              
              <div className="space-y-8">
                {section.content.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">{subsection.subtitle}</h3>
                    <ul className="space-y-3">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Cookies and Tracking */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Cookies and Tracking Technologies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Types of Cookies We Use</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Essential Cookies:</strong> Required for basic website functionality and security</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and content</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Managing Cookies</h3>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our services.
              </p>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Cookie Settings:</strong> You can manage your cookie preferences through our cookie consent banner or by contacting us directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Children's Privacy</h2>
          <p className="text-gray-300 mb-4">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
          </p>
          <p className="text-gray-300">
            If we discover that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Changes to This Privacy Policy</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. 
            We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
          </p>
          <p className="text-gray-300">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        {/* Contact Information */}
        <section className="cyber-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{contact.title}</h3>
                <p className="text-white font-medium mb-2">{contact.name}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${contact.phone}`} className="hover:text-cyan-400 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Zion Tech Group, 364 E Main St STE 1008, Middletown, DE 19709, United States</span>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="cyber-card p-8">
          <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Basis for Processing (GDPR)</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Consent</h3>
              <p className="text-gray-300">We process your personal data based on your explicit consent for specific purposes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Contract Performance</h3>
              <p className="text-gray-300">We process data necessary to perform our contractual obligations to you.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Legitimate Interests</h3>
              <p className="text-gray-300">We process data based on our legitimate business interests, balanced against your privacy rights.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Legal Compliance</h3>
              <p className="text-gray-300">We process data to comply with legal obligations and regulatory requirements.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;