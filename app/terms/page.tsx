'use client';
import React from 'react';
<<<<<<< HEAD
import { FileText, Shield, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {,
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms'
      icon: CheckCircle;
      content: [
        {,
          subtitle: 'Agreement to Terms',
          items: [,
            'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.',
            'If you do not agree to abide by the above, please do not use this service.',
            'These terms apply to all visitors, users, and others who access or use the service.'
          ]
        }
      ]
    },
    {
      title: 'Service Description'
      icon: FileText;
      content: [
        {
          subtitle: 'Our Services',
          items: [,
            'AI-powered enterprise solutions and consulting services',
            'IT infrastructure design, implementation, and management',
            'Micro SAAS tools and applications',
            'Cloud migration and digital transformation services',
            'Custom software development and integration'
          ]
        },
        {
          subtitle: 'Service Availability',
          items: [,
            'We strive to maintain 99.9% uptime for our services',
            'Scheduled maintenance will be announced in advance',
            'We reserve the right to modify or discontinue services with notice',
            'Service availability may vary based on your subscription plan'
          ]
        }
      ]
    },
    {
      title: 'User Responsibilities'
      icon: Shield;
      content: [
        {
          subtitle: 'Account Security',
          items: [,
            'You are responsible for maintaining the confidentiality of your account credentials',
            'You must notify us immediately of any unauthorized use of your account',
            'You are responsible for all activities that occur under your account',
            'You must use strong passwords and enable two-factor authentication when available'
          ]
        },
        {
          subtitle: 'Acceptable Use',
          items: [,
            'Use our services only for lawful purposes and in accordance with these terms',
            'Do not attempt to gain unauthorized access to our systems or other users\' accounts',
            'Do not use our services to transmit malicious code or engage in harmful activities',
            'Respect intellectual property rights and do not infringe on others\' rights'
          ]
        }
      ]
    },
    {
      title: 'Payment Terms'
      icon: FileText;
      content: [
        {
          subtitle: 'Billing and Payment',
          items: [,
            'Fees are billed in advance on a monthly or annual basis',
            'Payment is due within 30 days of invoice date',
            'Late payments may result in service suspension or termination',
            'All fees are non-refundable unless otherwise specified'
          ]
        },
        {
          subtitle: 'Price Changes',
          items: [,
            'We may change our prices with 30 days\' notice',
            'Price changes will be communicated via email and posted on our website',
            'Existing customers may be grandfathered at current rates for a limited time',
            'Continued use of services after price changes constitutes acceptance'
          ]
        }
      ]
    },
    {
      title: 'Intellectual Property'
      icon: Shield;
      content: [
        {,
          subtitle: 'Our Intellectual Property',
          items: [,
            'All content, trademarks, and intellectual property on our platform remain our property',
            'You may not copy, modify, or distribute our proprietary materials without permission',
            'Our AI models, algorithms, and methodologies are protected by intellectual property laws',
            'Any custom solutions developed for you remain your property'
          ]
        },
        {
          subtitle: 'Your Content',
          items: [,
            'You retain ownership of any content you provide to us',
            'You grant us a license to use your content to provide our services',
            'You are responsible for ensuring you have rights to any content you provide',
            'We will not use your content for purposes other than providing our services'
          ]
        }
      ]
    },
    {
      title: 'Limitation of Liability'
      icon: AlertTriangle;
      content: [
        {
          subtitle: 'Service Limitations',
          items: [,
            'Our services are provided "as is" without warranties of any kind',
            'We do not guarantee that our services will be uninterrupted or error-free',
            'We are not liable for any indirect, incidental, or consequential damages',
            'Our total liability is limited to the amount you paid for our services in the past 12 months'
          ]
        },
        {
          subtitle: 'Force Majeure',
          items: [,
            'We are not liable for delays or failures due to circumstances beyond our control',
            'This includes natural disasters, government actions, or third-party failures',
            'We will make reasonable efforts to minimize the impact of such events',
            'Service credits may be provided for extended outages'
          ]
        }
      ]
    },
    {
      title: 'Termination'
      icon: AlertTriangle;
      content: [
        {
          subtitle: 'Termination by You',
          items: [,
            'You may terminate your account at any time through your account settings',
            'Termination will be effective at the end of your current billing period',
            'You are responsible for any outstanding fees at the time of termination',
            'We will provide assistance with data export during the transition period'
          ]
        },
        {
          subtitle: 'Termination by Us',
          items: [,
            'We may terminate your account for violation of these terms',
            'We will provide reasonable notice before termination when possible',
            'Immediate termination may occur for serious violations or illegal activities',
            'We will provide data export assistance when legally required'
          ]
        }
      ]
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Terms of Service<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.<div className="text-sm text-gray-400">Last updated: {lastUpdated}</div>
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */})
        <section className="text-center mb-16">)
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">)
            Terms of Service;)
          </h1>),
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">),
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: {lastUpdated}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Terms of Service</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Introduction</h2><p className="text-gray-300 mb-4 leading-relaxed">These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and applications (collectively, the "Service") operated by Zion Tech Group ("us", "we", or "our").</p><p className="text-gray-300 leading-relaxed">By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.</p>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="space-y-12">{sections.map((section, index) => (</section>
            <div key={index} className="cyber-card p-8"></section>
              <div className="flex items-center mb-6"></div>
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2><div className="space-y-6">{section.content.map((subsection, subIndex) => (</section>
                  <div key={subIndex}></div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{subsection.subtitle}</h3><ul className="space-y-2">{subsection.items.map((item, itemIndex) => (</ul>
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">{item}</span>
                        </span>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us<p className="text-gray-300 mb-6">If you have any questions about these Terms of Service, please contact us:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us</h2><p className="text-gray-300 mb-6">If you have any questions about these Terms of Service, please contact us:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300">
                  <p>364 E Main St STE 1008<p>Middletown, DE 19709<p>United States</p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p><p>United States</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">legal@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Updates */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Changes to Terms</h2><p className="text-gray-300 mb-4">We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p><p className="text-gray-300">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
            </p>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, AlertTriangle, Users, Globe, Mail, Phone, CheckCircle, XCircle, Clock } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service outlining the terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, legal terms" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Acceptance of Terms
                  </h2>
                  <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    2. Use License
                  </h2>
                  <p>Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>This is the grant of a license, not a transfer of title</li>
                    <li>You may not modify or copy the materials</li>
                    <li>You may not use the materials for any commercial purpose</li>
                    <li>You may not attempt to reverse engineer any software</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    3. Service Availability
                  </h2>
                  <p>We strive to provide continuous service availability, but we cannot guarantee uninterrupted access to our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Services may be temporarily unavailable for maintenance</li>
                    <li>We reserve the right to modify or discontinue services</li>
                    <li>We are not liable for service interruptions</li>
                    <li>We will provide reasonable notice of planned maintenance</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                    4. Disclaimer
                  </h2>
                  <p>The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    5. Limitations
                  </h2>
                  <p>In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-cyan-400 mr-3" />
                    6. Revisions
                  </h2>
                  <p>Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                    7. Governing Law
                  </h2>
                  <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                    8. Contact Information
                  </h2>
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      Email: legal@ziontechgroup.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      Phone: (302) 464-0950
                    </p>
                    <p className="flex items-center">
                      <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                      Website: ziontechgroup.com
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Important Notice
                  </h3>
                  <p className="text-gray-300">
                    By using our services, you acknowledge that you have read and understood these terms of service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TermsPage;
=======
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';
  
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.'
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.'
    },
    {
      title: 'Privacy Policy',
      icon: Lock,
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.'
    },
    {
      title: 'Intellectual Property',
      icon: Database,
      content: 'All content, trademarks, and other intellectual property on this website are the property of Zion Tech Group.'
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: 'We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.'
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the United States.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <div className="flex items-center justify-center text-sm text-blue-200">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {index + 1}. {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">(302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Zion Tech Group Legal Team</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                By using our services, you acknowledge that you have read and understood these terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/resolve-merge-conflicts
