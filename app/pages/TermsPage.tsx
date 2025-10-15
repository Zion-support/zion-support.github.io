import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, AlertTriangle, Mail, Phone, Calendar } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Description of Service',
      content: 'Zion Tech Group provides AI and IT solutions including but not limited to micro SAAS applications, cloud infrastructure services, mobile development, data analytics, and consulting services. We reserve the right to modify or discontinue the service at any time.'
    },
    {
      title: 'User Accounts',
      content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.'
    },
    {
      title: 'Acceptable Use',
      content: 'You agree not to use the service for any unlawful purpose or any purpose prohibited under this clause. You may not use the service in any manner that could damage, disable, overburden, or impair any server, or the network(s) connected to any server.'
    },
    {
      title: 'Intellectual Property Rights',
      content: 'The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'
    },
    {
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'
    },
    {
      title: 'Payment Terms',
      content: 'Payment for services is due as specified in your service agreement. We reserve the right to change our fees at any time. All fees are non-refundable unless otherwise specified in writing.'
    },
    {
      title: 'Service Level Agreement',
      content: 'We strive to provide reliable services with 99.9% uptime. However, we do not guarantee uninterrupted service and are not liable for any downtime or service interruptions.'
    },
    {
      title: 'Limitation of Liability',
      content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees).'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.'
    },
    {
      title: 'Changes to Terms',
      content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.'
    },
    {
      title: 'Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com or call us at +1 302 464 0950.'
    }
  ];

  const keyPoints = [
    {
      icon: Shield,
      title: 'Service Availability',
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service'
    },
    {
      icon: Users,
      title: 'User Responsibility',
      description: 'Users are responsible for maintaining account security and compliance'
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      description: 'All service content and features remain our exclusive property'
    },
    {
      icon: FileText,
      title: 'Payment Terms',
      description: 'Fees are non-refundable unless otherwise specified in writing'
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting harmful or malicious code',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with the proper functioning of the service',
    'Using the service for any unlawful or prohibited purpose',
    'Impersonating another person or entity',
    'Collecting user information without consent'
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand your rights and obligations when using our AI and IT solutions." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Terms of
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of 
              Zion Tech Group's services and website.
            </p>
            <div className="flex items-center justify-center text-gray-400 mb-8">
              <Calendar className="w-5 h-5 mr-2" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/privacy"
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <Shield className="w-5 h-5 mr-2" />
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Points</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important highlights from our Terms of Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Prohibited Uses</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You may not use our service for any of the following purposes or activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-4 flex-shrink-0 mt-1" />
                  <span className="text-white font-medium">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Questions About Our Terms?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Send us an email with your legal questions</p>
                <a
                  href="mailto:legal@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  legal@ziontechgroup.com
                </a>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our legal team directly</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Important Notice</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    These Terms of Service are effective as of {lastUpdated}. We may update these terms from time to time 
                    to reflect changes in our services or for other operational, legal, or regulatory reasons. 
                    We will notify you of any material changes by posting the updated terms on our website.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    By continuing to use our services after any changes to these Terms of Service, you acknowledge 
                    that you have read and understood the updated terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;