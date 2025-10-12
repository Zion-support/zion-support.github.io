import React from 'react'
import Layout from '../layout'
const GDPRCompliancePage: React.FC = () => {
  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to GDPR compliance and data protection."
      keywords="GDPR compliance, data protection, privacy rights, EU data protection, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300">
              Our commitment to data protection and privacy rights
            </p>
          </div>
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">What is GDPR?</h2>
              <p className="text-gray-300 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect 
                on May 25, 2018, in the European Union. It strengthens and unifies data protection for individuals within 
                the EU and addresses the export of personal data outside the EU.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group is committed to protecting the privacy and personal data of our users. We have implemented 
                comprehensive measures to ensure GDPR compliance:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Data minimization and purpose limitation</li>
                <li>• Transparent data processing practices</li>
                <li>• Strong security measures to protect personal data</li>
                <li>• Regular privacy impact assessments</li>
                <li>• Data breach notification procedures</li>
                <li>• User rights implementation</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">Under GDPR, you have the following rights:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>Right to Access:</strong> Request copies of your personal data</li>
                <li>• <strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li>• <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li>• <strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li>• <strong>Right to Object:</strong> Object to processing of your personal data</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us:
              </p>
              <div className="text-gray-300">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Shield, Lock, Eye, Download, Trash2, Edit, CheckCircle, ArrowRight, AlertCircle, FileText, Users, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
const GDPRCompliancePage: React.FC = () => {
  const principles = [
    {
      title: 'Lawfulness, Fairness, and Transparency',
      description: 'We process personal data lawfully, fairly, and in a transparent manner.',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Purpose Limitation',
      description: 'We collect personal data for specified, explicit, and legitimate purposes.',
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Data Minimization',
      description: 'We only collect data that is adequate, relevant, and limited to what is necessary.',
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Accuracy',
      description: 'We keep personal data accurate and up to date.',
      icon: <Edit className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Storage Limitation',
      description: 'We retain personal data only for as long as necessary.',
      icon: <Clock className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Security',
      description: 'We implement appropriate technical and organizational measures to protect data.',
      icon: <Lock className="w-6 h-6 text-indigo-500" />
    }
  ]
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to know what personal data we hold about you.',
      icon: <Eye className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.',
      icon: <Edit className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      icon: <Trash2 className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Right to Portability',
      description: 'You can request a copy of your data in a structured, machine-readable format.',
      icon: <Download className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can request that we limit how we use your personal data.',
      icon: <Lock className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your personal data for certain purposes.',
      icon: <AlertCircle className="w-6 h-6 text-yellow-500" />
    }
  ]
  const dataTypes = [
    {
      category: 'Contact Information',
      examples: ['Name', 'Email address', 'Phone number', 'Mailing address'],
      purpose: 'Communication and service delivery'
    },
    {
      category: 'Account Information',
      examples: ['Username', 'Password (encrypted)', 'Account preferences', 'Service history'],
      purpose: 'Account management and service provision'
    },
    {
      category: 'Usage Data',
      examples: ['Website interactions', 'Service usage patterns', 'Device information', 'IP address'],
      purpose: 'Service improvement and analytics'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing interactions', 'Survey responses'],
      purpose: 'Personalized marketing and communication'
    }
  ]
  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to GDPR compliance and how we protect your personal data. Understand your rights and our data protection practices."
      keywords="GDPR compliance, data protection, privacy rights, personal data, data security, privacy policy"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              GDPR
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your personal data and ensuring full compliance with the 
              General Data Protection Regulation (GDPR). Learn about your rights and our data protection practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/privacy-policy" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Privacy Policy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact DPO
              </Link>
            </div>
          </div>
        </section>
        {/* What is GDPR Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What is GDPR?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The General Data Protection Regulation is a comprehensive data protection law that gives you control over your personal data.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Commitment</h3>
                  <p className="text-gray-300 mb-4">
                    At Zion Tech Group, we take data protection seriously. We have implemented comprehensive 
                    measures to ensure full GDPR compliance and protect your personal information.
                  </p>
                  <p className="text-gray-300">
                    We regularly review and update our data protection practices to maintain the highest 
                    standards of privacy and security.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Your Rights</h3>
                  <p className="text-gray-300 mb-4">
                    Under GDPR, you have specific rights regarding your personal data. We respect these 
                    rights and have processes in place to help you exercise them.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Access to your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Correction of inaccurate data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Deletion of your data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Data Protection Principles Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Protection Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow the six key principles of GDPR to ensure your personal data is protected and used responsibly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {principle.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{principle.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Your Rights Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Data Protection Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Under GDPR, you have specific rights regarding your personal data. Here's how we help you exercise them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {right.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{right.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Data We Collect Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Personal Data We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are transparent about the types of personal data we collect and how we use it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Purpose:</h4>
                    <p className="text-gray-300 text-sm">{type.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How to Exercise Your Rights Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to Exercise Your Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us to exercise any of your data protection rights. We'll respond within 30 days.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Contact Our DPO</h3>
                <p className="text-gray-300 mb-4">
                  Our Data Protection Officer (DPO) is available to help you with any data protection 
                  questions or requests.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300">Email: dpo@ziontechgroup.com</p>
                  <p className="text-gray-300">Phone: +1 302 464 0950</p>
                  <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Request Process</h3>
                <p className="text-gray-300 mb-4">
                  When you make a request, we'll verify your identity and respond within 30 days.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">1. Contact us with your request</p>
                  <p className="text-gray-300 text-sm">2. We'll verify your identity</p>
                  <p className="text-gray-300 text-sm">3. We'll process your request</p>
                  <p className="text-gray-300 text-sm">4. We'll respond within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Questions About Your Data?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Contact our Data Protection Officer if you have any questions about your personal data or want to exercise your rights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact DPO
                  </Link>
                  <a 
                    href="mailto:dpo@ziontechgroup.com" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default GDPRCompliancePage