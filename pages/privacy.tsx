import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Shield, Lock
  Eye, Database
  Users, Mail
  Phone, Calendar
  FileText, CheckCircle
  AlertTriangle, Globe
  Settings, Trash2
  Download, ArrowRight
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "2025-01-15";

  const sections = [
    {
      id: "information-we-collect", title: "Information We Collect",
      icon: Database, content: [
        "Personal Information: Name, email address, phone number, company information", "Usage Data: Website interactions, service usage patterns, and performance metrics",
      "Technical Data: IP address, browser type, device information, and cookies"
        "Communication Data: Messages, emails, and other communications with us"
      ]
    }, {
      id: "how-we-use-information",
      title: "How We Use Your Information", icon: Settings,
      content: [
        "Provide and improve our AI services and solutions", "Communicate with you about our services and updates",
      "Process transactions and manage your account", "Comply with legal obligations and protect our rights"
      ]
    }, {
      id: "information-sharing",
      title: "Information Sharing", icon: Users,
      content: [
        "We do not sell your personal information to third parties", "We may share information with trusted service providers who assist in our operations",
      "We may disclose information when required by law or to protect our rights", "We may share aggregated, non-personal information for research and analytics"
      ]
    }, {
      id: "data-security",
      title: "Data Security", icon: Lock,
      content: [
        "We implement industry-standard security measures to protect your data", "All data transmission is encrypted using SSL/TLS protocols",
      "Access to personal information is restricted to authorized personnel only", "We regularly audit our security practices and update them as needed"
      ]
    }, {
      id: "your-rights",
      title: "Your Rights", icon: CheckCircle,
      content: [
        "Access: Request access to your personal information", "Correction: Request correction of inaccurate information",
      "Deletion: Request deletion of your personal information", "Portability: Request transfer of your data to another service"
      ]
    }, {
      id: "cookies",
      title: "Cookies and Tracking", icon: Eye,
      content: [
        "We use cookies to improve your browsing experience", "Essential cookies are required for website functionality",
      "Analytics cookies help us understand website usage", "You can manage cookie preferences in your browser settings"
      ]
    }
  ];

  const contactInfo = {
    email: "privacy@ziontechgroup.com", phone: "+1 (555) 123-4567", address: "123 Technology Drive, San Francisco, CA 94105"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Privacy Policy - Zion Tech Group" 
        description="Learn how Zion Tech Group collects, uses, and protects your personal information. Our commitment to privacy and data protection."
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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

      {/* Privacy Policy Content */}
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
                  Zion Tech Group ("we, " "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
                <p className="text-gray-300 mb-4">
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Important Notice</h4>
                      <p className="text-gray-300 text-sm">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by 
                        posting the new Privacy Policy on this page and updating the "Last Updated" date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Policy Sections */}
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

            {/* Contact Information */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us: </p>
              
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

            {/* Data Protection Rights */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Your Data Protection Rights</h2>
              <p className="text-gray-300 mb-6">
                Depending on your location, you may have certain rights regarding your personal information: </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Access</h4>
                      <p className="text-gray-300 text-sm">Request copies of your personal data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Rectification</h4>
                      <p className="text-gray-300 text-sm">Request correction of inaccurate data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Erasure</h4>
                      <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Restrict Processing</h4>
                      <p className="text-gray-300 text-sm">Request limitation of data processing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Data Portability</h4>
                      <p className="text-gray-300 text-sm">Request transfer of your data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Right to Object</h4>
                      <p className="text-gray-300 text-sm">Object to processing of your data</p>
                    </div>
                  </div>
                </div>

const Privacy: NextPage: = () => ,{
  return (
    <Layout;
      title="Privacy: Policy - Zion Tech Group"";";";
      description="Learn: how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection."";";";
    >
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Privacy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Policy</span>";";";
          </h1>
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Your: privacy is important to us. Learn how we collect, use, and protect your personal information.
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;


      {/* Privacy Content */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4 max-w-4xl">";";";
          <div: className="prose prose-lg max-w-none">";";";
            {/* Introduction: */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                Zion: Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ziontechgroup.com or use our services.";";";
              </p>
              <p: className="text-gray-600">";";";
                Please: read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
            </div>
            {/* Information We Collect */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <Database: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Information: We Collect
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: may collect personal information that you voluntarily provide to us when you: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Register: for an account or use our services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Request a quote or consultation</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: may automatically collect certain information about your device and usage patterns, including: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>IP: address and location data</li>
                <li>IP address and location data</li>

                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device identifiers</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>"
              <p className="text-gray-700 mb-4">
                We use the information we collect t
    o:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about projects and services</li>
                <li>Process payments and transactions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>"
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>Processing transactions and delivering products</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            {/* Information Sharing */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <UserCheck: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Information: Sharing and Disclosure
              </h2>
              <p className="text-gray-600 mb-4">";";";
                We: do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>With: trusted service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>

                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>"
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>"
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Secure data storage and backup systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
            {/* Your Rights */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <Shield: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Your: Rights and Choices
              </h2>
              <p className="text-gray-600 mb-4">";";";
                Depending: on your location, you may have certain rights regarding your personal information: </p,>
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Access: to your personal information</li>
                <li>Access to your personal information</li>

                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                Our: website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            {/* Children's Privacy */};
            <div: className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>;
              <p: className="text-gray-600 mb-4">";";";
                Our: services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                We: may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.";";";
              </p>
            </section>
"
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>"
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at: </p>"
              <div className="bg-gray-50 p-6 rounded-lg">"
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>"
                <p className="text-gray-700 mb-2">
                  <strong>Phon
    e:</strong> +1 (302) 464-0950
                </p>"
                <p className="text-gray-700">
                  <strong>Addres
    s:</strong> Delaware, USA
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />


              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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


      {/* CTA: Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h2: className="text-4xl font-bold mb-6">Questions About Your Privacy?</h2>";";";
          <p: className="text-xl mb-8 max-w-3xl mx-auto">";";";
            We're: here to help. Contact us if you have any questions about how we handle your personal information.;
          </p>
          <div: className="flex flex-col sm: flex-row: justify-center gap-4">",;,";";
            <a: href="mailto: kleber@ziontechgroup.com" className="bg-white: text-blue-600 hover:bg-gray-100: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Contact: Us,
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Learn: More,
            </a>

                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you important updates about our services</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.

                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">privacy@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    123 Technology Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>

  );
<<<<<<< HEAD
}"
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}






