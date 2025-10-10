'use client';
import React from 'react';
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
      <Navigation />
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
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Introduction</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and applications (collectively, the "Service") operated by Zion Tech Group ("us", "we", or "our").
            </p>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{subsection.subtitle}</h3>
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
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
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">legal@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Updates */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-300">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;