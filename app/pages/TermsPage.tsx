import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-74b7
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
<<<<<<< HEAD
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <FileText className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Legal Document</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-purple-400">Service</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Points</h2>
            <p className="text-xl text-gray-300">Important highlights from our terms of service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-slate-700 border border-slate-600">
                <div className="text-purple-400 mb-4 flex justify-center">
                  <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-slate-700 pb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Prohibited Uses</h2>
            <p className="text-xl text-gray-300">The following activities are strictly prohibited</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {prohibitedUses.map((use, index) => (
              <div key={index} className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these Terms of Service, please don't hesitate to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-colors"
            >
              <Shield className="w-5 h-5 mr-2" />
              Privacy Policy
            </Link>
          </div>
        </div>
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-6743
      </section>
    </>
  );
};

export default TermsPage;