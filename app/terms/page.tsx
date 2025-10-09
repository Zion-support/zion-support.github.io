'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, AlertTriangle, CheckCircle, Clock, Users, Globe, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'December 8, 2024';

  const keyTerms = [
    {
      icon: CheckCircle,
      title: 'Service Agreement',
      description: 'Terms governing the use of our AI and IT services',
      details: ['Service availability', 'Performance standards', 'Support levels']
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'How we protect and handle your data',
      details: ['Privacy compliance', 'Data security', 'Confidentiality']
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Your obligations when using our services',
      details: ['Acceptable use', 'Compliance requirements', 'Account security']
    },
    {
      icon: Globe,
      title: 'Intellectual Property',
      description: 'Ownership and usage rights',
      details: ['IP ownership', 'License terms', 'Restrictions']
    }
  ];

  const serviceLevels = [
    {
      service: 'AI Services',
      availability: '99.9%',
      support: '24/7',
      response: '1 hour'
    },
    {
      service: 'IT Infrastructure',
      availability: '99.95%',
      support: '24/7',
      response: '30 minutes'
    },
    {
      service: 'Cloud Services',
      availability: '99.9%',
      support: 'Business hours',
      response: '4 hours'
    },
    {
      service: 'Consulting',
      availability: 'Business hours',
      support: 'Business hours',
      response: '24 hours'
    }
  ];

  const prohibitedUses = [
    'Illegal activities or violations of any laws',
    'Harmful, threatening, or abusive content',
    'Infringement of intellectual property rights',
    'Spam, phishing, or fraudulent activities',
    'Attempts to gain unauthorized access to systems',
    'Interference with service operations',
    'Violation of third-party terms of service',
    'Activities that could harm our reputation'
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and legal conditions for using our AI and IT solutions. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms, legal compliance" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Legal Terms & Conditions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              These terms and conditions govern your use of Zion Tech Group's AI and IT services. 
              Please read them carefully before using our services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Key Terms Overview */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Key Terms Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <term.icon className="w-8 h-8 text-cyan-400 mr-4" />
                  <h3 className="text-xl font-bold text-white">{term.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{term.description}</p>
                <ul className="space-y-2">
                  {term.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Service Level Agreements */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Level Agreements
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">Service</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Availability</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Support</th>
                    <th className="text-left py-4 px-6 text-white font-semibold">Response Time</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceLevels.map((level, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-6 text-cyan-400 font-medium">{level.service}</td>
                      <td className="py-4 px-6 text-white">{level.availability}</td>
                      <td className="py-4 px-6 text-white">{level.support}</td>
                      <td className="py-4 px-6 text-white">{level.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Description
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-4">
                We provide comprehensive artificial intelligence solutions including machine learning, 
                natural language processing, computer vision, and predictive analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Solutions</li>
                <li>• Predictive Analytics</li>
                <li>• AI Automation Tools</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-4">
                Our IT services include infrastructure management, cloud solutions, cybersecurity, 
                and technical support for enterprise clients.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Infrastructure</li>
                <li>• Cybersecurity Solutions</li>
                <li>• Network Management</li>
                <li>• Database Administration</li>
                <li>• Technical Support</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Consulting Services</h3>
              <p className="text-gray-300 mb-4">
                Strategic consulting to help organizations implement AI and IT solutions 
                that drive business growth and operational efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI Strategy Development</li>
                <li>• Digital Transformation</li>
                <li>• Technology Assessment</li>
                <li>• Implementation Planning</li>
                <li>• Change Management</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Support Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive support and maintenance services to ensure optimal performance 
                and reliability of your AI and IT systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 24/7 Technical Support</li>
                <li>• System Monitoring</li>
                <li>• Performance Optimization</li>
                <li>• Security Updates</li>
                <li>• Training & Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            User Responsibilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Account Security</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Maintain secure passwords and enable two-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Keep account information up to date</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Report any security incidents immediately</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Use services only for authorized purposes</span>
                </li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Compliance Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Follow data protection requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                  <span>Maintain appropriate insurance coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prohibited Uses */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Prohibited Uses
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
              <h3 className="text-xl font-bold text-white">You may not use our services for:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-300">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Payment Terms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Billing</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Monthly or annual billing cycles</li>
                <li>• Payment due within 30 days of invoice</li>
                <li>• Late fees may apply for overdue payments</li>
                <li>• All prices are in USD unless otherwise specified</li>
                <li>• Taxes are additional where applicable</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Refunds</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 30-day money-back guarantee for new services</li>
                <li>• Refunds processed within 10 business days</li>
                <li>• No refunds for custom development work</li>
                <li>• Service credits available for downtime</li>
                <li>• Contact support for refund requests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Limitation of Liability
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <p className="text-gray-300 text-lg mb-6">
              To the maximum extent permitted by law, Zion Tech Group's liability for any claims 
              arising from or related to our services is limited to the amount you paid for the 
              services in the 12 months preceding the claim.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Exclusions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Indirect or consequential damages</li>
                  <li>• Loss of profits or business opportunities</li>
                  <li>• Data loss or corruption</li>
                  <li>• Third-party claims</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Exceptions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Death or personal injury</li>
                  <li>• Fraud or fraudulent misrepresentation</li>
                  <li>• Violations of consumer protection laws</li>
                  <li>• Gross negligence or willful misconduct</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Termination
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">By You</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• 30-day written notice required</li>
                <li>• All outstanding fees must be paid</li>
                <li>• Data export available upon request</li>
                <li>• Service access ends on termination date</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">By Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Immediate termination for violations</li>
                <li>• 30-day notice for other reasons</li>
                <li>• Right to suspend for non-payment</li>
                <li>• Data retention per privacy policy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Governing Law & Disputes
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Governing Law</h3>
                <p className="text-gray-300 mb-4">
                  These terms are governed by the laws of Delaware, United States, 
                  without regard to conflict of law principles.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Delaware state law applies</li>
                  <li>• Federal law where applicable</li>
                  <li>• International law for global services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Dispute Resolution</h3>
                <p className="text-gray-300 mb-4">
                  We encourage resolving disputes through good faith negotiation. 
                  If necessary, disputes will be resolved through binding arbitration.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Good faith negotiation first</li>
                  <li>• Binding arbitration if needed</li>
                  <li>• Individual claims only</li>
                  <li>• Delaware jurisdiction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
              Questions About These Terms?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              If you have any questions about these terms of service or need clarification 
              on any provisions, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">legal@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">We'll respond within 48 hours</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Write Us</h3>
                <p className="text-cyan-400 font-medium">Middletown, DE</p>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 neon-text">
              Terms Updates
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              We may update these terms of service from time to time to reflect changes in our 
              services, legal requirements, or business practices. We will notify you of any 
              material changes by posting the updated terms on this page.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;