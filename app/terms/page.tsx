'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using Zion Tech Group\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.'
      ]
    },
    {
      title: 'Description of Service',
      icon: FileText,
      content: [
        'Zion Tech Group provides AI-powered enterprise solutions, quantum computing services, autonomous systems, and digital transformation consulting.',
        'Our services include but are not limited to: AI development, IT consulting, cloud migration, cybersecurity solutions, and business intelligence.',
        'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Users,
      content: [
        'You are responsible for maintaining the confidentiality of your account and password.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.',
        'You agree to use our services only for lawful purposes and in accordance with these terms.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      icon: Shield,
      content: [
        'All content, trademarks, service marks, trade names, logos, and other intellectual property on our website are owned by Zion Tech Group or our licensors.',
        'You may not use, reproduce, distribute, or create derivative works from our intellectual property without written permission.',
        'Any content you submit to us becomes our property and may be used for business purposes.',
        'You retain ownership of your data, but grant us a license to use it for service delivery.'
      ]
    },
    {
      title: 'Payment Terms',
      icon: Scale,
      content: [
        'Payment terms are specified in individual service agreements and invoices.',
        'All fees are non-refundable unless otherwise specified in writing.',
        'We reserve the right to change our pricing with 30 days notice.',
        'Late payments may result in service suspension or termination.',
        'You are responsible for all taxes associated with your use of our services.'
      ]
    },
    {
      title: 'Service Level Agreement',
      icon: CheckCircle,
      content: [
        'We strive to maintain 99.9% uptime for our services, excluding scheduled maintenance.',
        'Support response times vary by service tier and are detailed in individual agreements.',
        'We provide regular backups and disaster recovery procedures.',
        'Service credits may be available for qualifying downtime incidents.'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the services in the 12 months preceding the claim.',
        'We are not responsible for any loss of data, profits, or business opportunities.',
        'Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you.'
      ]
    },
    {
      title: 'Indemnification',
      icon: Shield,
      content: [
        'You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from your use of our services.',
        'This includes claims related to your violation of these terms or applicable laws.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification.',
        'You agree to cooperate with our defense of such claims.'
      ]
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: [
        'Either party may terminate service agreements with 30 days written notice.',
        'We may terminate services immediately for breach of these terms.',
        'Upon termination, your right to use our services ceases immediately.',
        'We may retain your data for a reasonable period as required by law or business needs.',
        'Termination does not relieve you of payment obligations for services already provided.'
      ]
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: [
        'These terms are governed by the laws of the State of Delaware, United States.',
        'Any disputes shall be resolved in the courts of Delaware.',
        'If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in effect.',
        'These terms constitute the entire agreement between you and Zion Tech Group.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
              Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Service") operated by Zion Tech Group ("us", "we", or "our").
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
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Prohibited Uses */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Prohibited Uses</h2>
            <p className="text-gray-300 mb-4">You may not use our services:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                For any unlawful purpose or to solicit others to perform unlawful acts
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To infringe upon or violate our intellectual property rights or the intellectual property rights of others
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To submit false or misleading information
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                To upload or transmit viruses or any other type of malicious code
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300">
                  <p>364 E Main St STE 1008</p>
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
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
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