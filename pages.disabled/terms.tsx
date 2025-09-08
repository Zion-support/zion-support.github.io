
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const termsSections = [
  {
    title: "Acceptance of Terms",
    description: "By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.",
    content: "These Terms of Service ('Terms') govern your use of our website and services provided by Zion Tech Group ('we', 'us', or 'our'). By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services."
  },
  {
    title: "Description of Service",
    description: "We provide technology consulting, AI services, cloud solutions, and related services to businesses and organizations.",
    content: "Zion Tech Group provides comprehensive technology solutions including but not limited to artificial intelligence services, cloud computing solutions, cybersecurity services, data analytics, software development, and IT consulting. Our services are designed to help businesses transform digitally and achieve their technology goals."
  },
  {
    title: "User Responsibilities",
    description: "Users are responsible for their use of our services and must comply with applicable laws and regulations.",
    content: "You are responsible for: (1) Providing accurate and complete information when using our services; (2) Maintaining the confidentiality of your account credentials; (3) Complying with all applicable laws and regulations; (4) Not using our services for any illegal or unauthorized purpose; (5) Not interfering with or disrupting our services or servers."
  },
  {
    title: "Intellectual Property",
    description: "All content, trademarks, and intellectual property rights belong to Zion Tech Group or our licensors.",
    content: "The content, trademarks, logos, and other intellectual property displayed on our website and services are owned by Zion Tech Group or our licensors. You may not use, reproduce, or distribute any content without our express written permission. Any unauthorized use of our intellectual property may result in legal action."
  },
  {
    title: "Privacy and Data Protection",
    description: "We are committed to protecting your privacy and handling your data in accordance with our Privacy Policy.",
    content: "Your privacy is important to us. We collect, use, and protect your personal information in accordance with our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy."
  },
  {
    title: "Service Availability",
    description: "We strive to provide reliable services but cannot guarantee uninterrupted access or availability.",
    content: "While we strive to provide reliable and uninterrupted services, we cannot guarantee that our services will always be available or free from errors. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We are not liable for any loss or damage resulting from service interruptions."
  },
  {
    title: "Limitation of Liability",
    description: "Our liability is limited to the maximum extent permitted by law.",
    content: "To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim."
  },
  {
    title: "Termination",
    description: "Either party may terminate the service agreement under certain circumstances.",
    content: "We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately. You may also terminate your use of our services at any time by discontinuing use and contacting us to close your account."
  },
  {
    title: "Governing Law",
    description: "These Terms are governed by the laws of the State of New York, United States.",
    content: "These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts of New York County, New York."
  }
];

const keyPoints = [
  {
    icon: CheckCircle,
    title: "Clear Communication",
    description: "We communicate our terms clearly and transparently to ensure you understand your rights and obligations."
  },
  {
    icon: Shield,
    title: "Fair Practices",
    description: "Our terms are designed to be fair and reasonable, protecting both your interests and ours."
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Our terms comply with applicable laws and regulations in all jurisdictions where we operate."
  },
  {
    icon: Users,
    title: "User Protection",
    description: "We include provisions to protect users' rights and ensure a positive experience with our services."
  }
];

const prohibitedUses = [
  "Using our services for any illegal or unauthorized purpose",
  "Violating any applicable laws or regulations",
  "Infringing on intellectual property rights",
  "Transmitting viruses, malware, or other harmful code",
  "Attempting to gain unauthorized access to our systems",
  "Interfering with or disrupting our services",
  "Collecting user information without permission",
  "Engaging in any form of harassment or abuse"
];

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to providing fair, transparent, and legally compliant terms of service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Terms and Conditions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed terms and conditions governing your use of our services.
              </p>
            </motion.div>

            <div className="space-y-8">
              {termsSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{section.description}</p>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Uses */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prohibited Uses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The following uses of our services are strictly prohibited and may result in immediate termination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">Important Notice</h3>
              </div>
              <p className="text-red-700 mb-6">
                Violation of these prohibited uses may result in immediate termination of your account and legal action.
              </p>
              <ul className="space-y-3">
                {prohibitedUses.map((use, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {use}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If you have any questions about these Terms of Service, please contact us for clarification.
              </p>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 123 Technology Drive, Suite 100, New York, NY 10001</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> These terms may be updated from time to time. We will notify users of any material changes via email or through our website.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

