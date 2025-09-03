import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  FileText, Scale
  AlertTriangle, CheckCircle
  Calendar, Globe
  Mail, Phone
  ArrowRight, Shield
  Users, DollarSign
  Clock, BookOpen
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "2025-01-15";

  const sections = [
    {
      id: "acceptance-of-terms", title: "Acceptance of Terms",
      icon: CheckCircle, content: [
        "By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service", "If you do not agree to these terms, you may not access or use our services", "These terms apply to all visitors, users, and others who access or use our services",
      "We reserve the right to modify these terms at any time without prior notice"
      ]
    }, {
      id: "service-description",
      title: "Service Description", icon: BookOpen,
      content: [
        "Zion Tech Group provides AI-powered solutions, consulting services, and technology products", "Our services include but are not limited to AI development, cloud migration, and cybersecurity solutions",
      "We reserve the right to modify, suspend, or discontinue any part of our services at any time", "Service availability may vary based on geographic location and technical requirements"
      ]
    }, {
      id: "user-responsibilities",
      title: "User Responsibilities", icon: Users,
      content: [
        "Provide accurate and complete information when using our services", "Maintain the confidentiality of your account credentials",
      "Use our services in compliance with applicable laws and regulations", "Not engage in any activities that may harm or disrupt our services"
      ]
    }, {
      id: "payment-terms",
      title: "Payment Terms", icon: DollarSign,
      content: [
        "Payment terms are specified in individual service agreements", "All fees are non-refundable unless otherwise specified",
      "We reserve the right to change pricing with 30 days notice", "Late payments may result in service suspension or termination"
      ]
    }, {
      id: "intellectual-property",
      title: "Intellectual Property", icon: Shield,
      content: [
        "All content, trademarks, and intellectual property belong to Zion Tech Group", "Users retain ownership of their data and content",
      "We grant limited license to use our services as specified in these terms", "Unauthorized use of our intellectual property is strictly prohibited"
      ]
    }, {
      id: "limitation-of-liability",
      title: "Limitation of Liability", icon: AlertTriangle,
      content: [
        "Our services are provided 'as is' without warranties of any kind", "We are not liable for any indirect, incidental, or consequential damages",
      "Our total liability is limited to the amount paid for the specific service", "Some jurisdictions may not allow limitation of liability, so these limitations may not apply"
      ]
    }
  ];

  const contactInfo = {
    email: "legal@ziontechgroup.com", phone: "+1 (555) 123-4567", address: "123 Technology Drive, San Francisco, CA 94105"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read our Terms of Service to understand the terms and conditions for using Zion Tech Group&apos;s AI services and solutions."''
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Scale className="w-4 h-4 mr-2" />
              Legal Terms
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group&apos;s services and solutions.''
            </p>
            <div className="flex items-center justify-center text-gray-400">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: {new Date(lastUpdated).toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-10 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 rounded-lg bg-slate-700 hover: bg-slate-600 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-300 mb-4">
                  Please read these Terms carefully before using our services. If you disagree with any part of 
                  these terms, then you may not access our services.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Important Notice</h4>
                      <p className="text-gray-300 text-sm">
                        These Terms may be updated from time to time. Continued use of our services after 
                        changes constitutes acceptance of the new Terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-8" id={section.id}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mr-4">
                      <section.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}

            {/* Termination */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or 
                  liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-300 mb-4">
                  Upon termination, your right to use the services will cease immediately. If you wish to 
                  terminate your account, you may simply discontinue using the services.
                </p>
                <p className="text-gray-300">
                  All provisions of the Terms which by their nature should survive termination shall survive 
                  termination, including, without limitation, ownership provisions, warranty disclaimers
                  indemnity, and limitations of liability.
                </p>
              </div>
            </Card>

            {/* Governing Law */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  These Terms shall be interpreted and governed by the laws of the State of California
                  United States, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-300 mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a 
                  waiver of those rights.
                </p>
                <p className="text-gray-300">
                  If any provision of these Terms is held to be invalid or unenforceable by a court
                  the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us: </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 w-fit mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 w-fit mx-auto mb-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 w-fit mx-auto mb-3">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </Card>

const Terms: NextPage: = () => ,{
  return (
    <Layout;
      title="Terms: of Service - Zion Tech Group"";";";
      description="Read: Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services."";";";
    >
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Terms: of,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Service</span>";";";

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">

                <li>AI and machine learning solutions</li>
                <li>Web and mobile application development</li>
                <li>Cloud architecture and migration</li>
                <li>Cybersecurity services</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Client Responsibilities</h2>"
              <p className="text-gray-700 mb-4">
                As a client, you agree to: </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information necessary for project execution</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>"
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>Services may be suspended for non-payment</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>"
              <p className="text-gray-700 mb-4">
                Unless otherwise specified in a separate agreemen
    t:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Client retains ownership of their existing intellectual property</li>
                <li>Zion Tech Group retains ownership of pre-existing intellectual property</li>
                <li>Work product ownership will be specified in individual service agreements</li>"
                <li>Both parties agree to respect each other's intellectual property rights</li>
              </ul>
            </section>
'
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>"
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain the confidentiality of sensitive information shared during the course of business. This includes but is not limited t
    o:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Business strategies and plans</li>
                <li>Technical specifications and designs</li>
                <li>Customer and vendor information</li>
                <li>Financial information</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>"
              <p className="text-gray-700 mb-4">"
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>
'
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer</h2>"
              <p className="text-gray-700 mb-4">"
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
'
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>"
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All outstanding payments become immediately due</li>
                <li>Confidentiality obligations continue</li>
                <li>Work product will be delivered as specified in the agreement</li>
                <li>Each party will return or destroy confidential information</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>"
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>"
              <p className="text-gray-700 mb-4">
                Zion Tech Group reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>"
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at: </p>"
              <div className="bg-gray-50 p-6 rounded-lg">"
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>"
                <p className="text-gray-700 mb-2">
                  <strong>Phon
    e:</strong> +1 (302) 464-0950
                </p>"
                <p className="text-gray-700">
                  <strong>Addres
    s:</strong> Delaware, USA
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;


      {/* Terms Content */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4 max-w-4xl">";";";
          <div: className="prose prose-lg max-w-none">";";";
            {/* Introduction: */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <FileText: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Agreement: to Terms
              </h2>
              <p className="text-gray-600 mb-4">";";";
                These: Terms of Service ("Terms") govern your use of the Zion Tech Group website located at ziontechgroup.com and our services. By accessing or using our website and services, you agree to be bound by these Terms.";";";
              </p>
              <p: className="text-gray-600">";";";
                If: you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                Zion: Tech Group provides technology consulting and development services, including but not limited to: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>AI: and Machine Learning Development</li>
                <li>Cloud Services and Architecture</li>
                <li>Web and Mobile Application Development</li>
                <li>Blockchain Solutions</li>
                <li>IoT Platform Development</li>
                <li>Cybersecurity Services</li>
                <li>Technology Consulting</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <Shield: className="w-8 h-8 mr-3 text-blue-600" />";";";
                User: Responsibilities,
              </h2>
              <p className="text-gray-600 mb-4">";";";
                When: using our services, you agree to: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Provide: accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any illegal or harmful activities</li>
                <li>Maintain the confidentiality of any credentials provided</li>
                <li>Notify us of any security breaches or unauthorized access</li>
              </ul>
            </div>


            {/* Prohibited Uses */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <XCircle: className="w-8 h-8 mr-3 text-red-600" />";";";
                Prohibited: Uses,
              </h2>
              <p className="text-gray-600 mb-4">";";";
                You: may not use our services for any of the following purposes: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Violating: any applicable laws or regulations</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the proper functioning of our services</li>
                <li>Collecting user information without consent</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Infringing on intellectual property rights</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                All: content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Copy, modify, or: distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our intellectual property</li>
              </ul>
            </div>

            {/* Service Availability */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: strive to maintain high availability of our services, but we cannot guarantee uninterrupted access. We reserve the right to: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Modify: or discontinue services with reasonable notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update or upgrade our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                For: paid services, the following terms apply: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Payment: is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices may change with reasonable notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <AlertTriangle: className="w-8 h-8 mr-3 text-yellow-600" />";";";
                Limitation: of Liability
              </h2>
              <p className="text-gray-600 mb-4">";";";
                To: the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Loss: of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                You: agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Your: use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Your: right to use our services will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding obligations</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>


            {/* Governing Law */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <Scale: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Governing: Law,
              </h2>
              <p className="text-gray-600 mb-4">";";";
                These: Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: reserve the right to modify these Terms at any time. We will notify users of any material changes by: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Posting: the updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p className="text-gray-600">";";";
                Continued: use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                If: you have any questions about these Terms of Service, please contact us: </p,>
              <div: className="bg-gray-50 rounded-lg p-6">";";";
                <p: className="text-gray-700 mb-2"><strong>Email: </strong> kleber@ziontechgroup.com</p>",;,";";
                <p: className="text-gray-700 mb-2"><strong>Phone: </strong> +1: (302) 464-0950</p>",;,";";
                <p: className="text-gray-700 mb-2"><strong>Address: </strong> 364: E Main St STE 100,8, Middletown, DE 19709</p>";";";
              </div>
            </div>

            {/* Acknowledgment: */}
            <div className="mb-12 bg-blue-50 border-l-4 border-blue-400 p-6">";";";
              <div: className="flex items-center mb-4">";";";
                <CheckCircle: className="w-6 h-6 text-blue-600 mr-2" />";";";
                <h3: className="text-lg font-semibold text-blue-800">Acknowledgment</h3>";";";
              </div>
              <p: className="text-blue-700">";";";
                By: using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />

              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                These terms govern your use of our services and website. Please read them carefully.

              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>

            </div>
          </div>
        </section>







