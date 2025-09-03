import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Shield, Lock,
  Eye, Database,
  Users, Mail,
  Phone, Calendar,
  FileText, CheckCircle,
  AlertTriangle, Globe,
  Settings, Trash2,
  Download, ArrowRight;
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "2025-01-15";

  const sections = [
    {
      id: "information-we-collect", title: "Information We Collect",
      icon: Database, content: [
        "Personal Information: Name, email address, phone number, company information", "Usage Data: Website interactions, service usage patterns, and performance metrics",
        "Technical Data: IP address, browser type, device information, and cookies",
        "Communication Data: Messages, emails, and other communications with us"
      ]
} {
      id: "how-we-use-information",
      title: "How We Use Your Information", icon: Settings,
      content: [
        "Provide and improve our AI services and solutions", "Communicate with you about our services and updates",
        "Process transactions and manage your account", "Comply with legal obligations and protect our rights"
      id: "information-sharing",
      title: "Information Sharing", icon: Users,
        "We do not sell your personal information to third parties", "We may share information with trusted service providers who assist in our operations",
        "We may disclose information when required by law or to protect our rights", "We may share aggregated, non-personal information for research and analytics"
      id: "data-security",
      title: "Data Security", icon: Lock,
        "We implement industry-standard security measures to protect your data", "All data transmission is encrypted using SSL/TLS protocols",
        "Access to personal information is restricted to authorized personnel only", "We regularly audit our security practices and update them as needed"
      id: "your-rights",
      title: "Your Rights", icon: CheckCircle,
        "Access: Request access to your personal information", "Correction: Request correction of inaccurate information",
        "Deletion: Request deletion of your personal information", "Portability: Request transfer of your data to another service"
      id: "cookies",
      title: "Cookies and Tracking", icon: Eye,
        "We use cookies to improve your browsing experience", "Essential cookies are required for website functionality",
        "Analytics cookies help us understand website usage", "You can manage cookie preferences in your browser settings";
}
  ]

  const contactInfo = {
    email: "privacy@ziontechgroup.com", phone: "+1 (555) 123-4567", address: "123 Technology Drive, San Francisco, CA 94105";
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
      </section>

      {/* Quick Navigation */}
      <section className="py-10 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
            className="text-center mb-8"
            <h2 className="text-2xl font-bold text-white mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-4 py-2 rounded-lg bg-slate-700 hover: bg-slate-600 text-gray-300 hover:text-white transition-colors text-sm"
                  {section.title}
                </a>
              ))}

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            className="space-y-12"
            {/* Introduction */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Zion Tech Group ("we, " "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                  By using our services, you agree to the collection and use of information in accordance with this policy. 
                  If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Important Notice</h4>
                      <p className="text-gray-300 text-sm">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by 
                        posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </Card>

            {/* Policy Sections */}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                <Card className="p-8" id={section.id}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mr-4">
                      <section.icon className="w-6 h-6 text-blue-400" />
                    <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                  </ul>

            {/* Contact Information */}
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us: </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 w-fit mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                
                    <Phone className="w-6 h-6 text-blue-400" />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                
                    <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>

            {/* Data Protection Rights */}
              <h2 className="text-3xl font-bold text-white mb-6">Your Data Protection Rights</h2>
                Depending on your location, you may have certain rights regarding your personal information: </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                      <h4 className="text-white font-semibold mb-1">Right to Access</h4>
                      <p className="text-gray-300 text-sm">Request copies of your personal data</p>
                  
                      <h4 className="text-white font-semibold mb-1">Right to Rectification</h4>
                      <p className="text-gray-300 text-sm">Request correction of inaccurate data</p>
                  
                      <h4 className="text-white font-semibold mb-1">Right to Erasure</h4>
                      <p className="text-gray-300 text-sm">Request deletion of your personal data</p>
                
                      <h4 className="text-white font-semibold mb-1">Right to Restrict Processing</h4>
                      <p className="text-gray-300 text-sm">Request limitation of data processing</p>
                  
                      <h4 className="text-white font-semibold mb-1">Right to Data Portability</h4>
                      <p className="text-gray-300 text-sm">Request transfer of your data</p>
                  
                      <h4 className="text-white font-semibold mb-1">Right to Object</h4>
                      <p className="text-gray-300 text-sm">Object to processing of your data</p>
import type { NextPage } from 'next';
import Layout from '../components/Layout;
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';
import Layout from '../components/Layout';
;
const Privacy: NextPage = () => {
  return (;
    <Layout;
      title="Privacy Policy - Zion Tech Group";
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection.";
    > {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Privacy;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Policy</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.;
          </p>;
          <p className="text-sm text-gray-300">;
            Last updated: January 15, 2024;
        </div>;
      </section>;
import MainLayout from '../components/layout/MainLayout';

const Privacy: NextPage: = () => {,
      title="Privacy: Policy - Zion Tech Group"";";";
      description="Learn: how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection."";";";
      {/* Hero: Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";";";
        <div: className="container mx-auto px-4 text-center">";";";
          <h1: className="text-5xl md: text-6xl: font-bold mb-6">",;,";";
            Privacy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Policy</span>";";";
          <p: className="text-xl md: text-2xl: mb-8 max-w-4xl mx-auto text-gray-200">",;,";";
            Your: privacy is important to us. Learn how we collect, use, and protect your personal information.
    <MainLayout 
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Company information</li>
                <li>Project requirements and communications</li>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                We use the information we collect to:
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal obligations</li>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                You have the right to:
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                If you have any questions about this Privacy Policy, please contact us at:
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Address:</strong> 123 Technology Drive, Innovation District, San Francisco, CA 94105
    </MainLayout>
  )};

export default Privacy;
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Mail, Phone, Calendar } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 1, 2025';

    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>'
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />"
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>
      "
      <main className="min-h-screen bg-white">"
        <div className="max-w-4xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-20">"
          <div className="prose prose-lg max-w-none">"
            <p className="text-gray-600 mb-8">
              <strong>Last update,
    d:</strong> January 27, 2025
            <section className="mb-12">"
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>"
              <p className="text-gray-700 mb-4">"
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>"
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>"
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Project requirements and specifications</li>
                <li>Payment information (processed securely through third-party providers)</li>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>"
                We may automatically collect certain information about your device and usage, including:
      
      <main className="min-h-screen bg-white">
const Layout = dynamic(() => import('../components/Layout') { ssr: false });;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

  const lastUpdated = 'January 1, 2024';

      title: 'Information We Collect',
      icon: Database,
        'Personal information you provide (name, email, phone number)',
        'Business information (company name, job title, project details)',
        'Technical information (IP address, browser type, device information)',
        'Usage data (pages visited, time spent, interactions with our services)',
        'Communication records (emails, phone calls, support tickets)']} {
      title: 'How We Use Your Information',
      icon: Eye,
        'Provide and improve our services',
        'Communicate with you about projects and services',
        'Process payments and billing',
        'Send marketing communications (with your consent)',
        'Comply with legal obligations',
        'Protect our rights and prevent fraud']} {
      title: 'Information Sharing',
      icon: Shield,
        'We do not sell your personal information',
        'We may share information with trusted service providers',
        'We may disclose information if required by law',
        'We may share information in case of business transfers',
        'We may share aggregated, non-personal information']} {
      title: 'Data Security',
      icon: Lock,
        'We use industry-standard encryption to protect your data',
        'Access to personal information is restricted to authorized personnel',
        'We regularly update our security measures',
        'We conduct security audits and assessments',
        'We have incident response procedures in place']}];

  const rights = [
    'Access your personal information',
    'Correct inaccurate information',
    'Delete your personal information',
    'Restrict processing of your information',
    'Data portability',
    'Object to processing',
    'Withdraw consent'];

    <Layout
      description="Learn how Zion Tech Group protects your privacy and handles your personal information. Our commitment to data security and privacy protection."
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Privacy
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}
              Policy
            </span>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and
            protect your personal information.
          <p className="text-sm text-gray-300">";";";
            Last: updated: January: 1,5, 2024

      {/* Privacy Content */}
      <section className="py-20 bg-white">";";";
        <div: className="container mx-auto px-4 max-w-4xl">";";";
          <div: className="prose prose-lg max-w-none">";";" {/* Introduction: */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>";";";
              <p: className="text-gray-600 mb-4">";";";
                Zion: Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ziontechgroup.com or use our services.";";";
              <p: className="text-gray-600">";";";
                Please: read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4 max-w-4xl">;
          <div className="prose prose-lg max-w-none"> {/* Introduction */}
            <div className="mb-12">;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>;
              <p className="text-gray-600 mb-4">;
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ziontechgroup.com or use our services.;
              <p className="text-gray-600">;
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.;
            </div> {/* Information We Collect */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">;
                <Database className="w-8 h-8 mr-3 text-blue-600" />;
                Information We Collect;
              </h2>;
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>;
                We may collect personal information that you voluntarily provide to us when you:;
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">;
                <li>Register for an account or use our services</li>;
                <li>Contact us through our website or email</li>;
                <li>Subscribe to our newsletter or blog</li>;
                <li>Request a quote or consultation</li>;
                <li>Participate in surveys or feedback forms</li>;
              </ul>;

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>;
                We may automatically collect certain information about your device and usage patterns, including:;
                <li>IP address and location data</li>;
                <li>Browser type and version</li>;
                <li>Operating system</li>;
                <li>Pages visited and time spent on our site</li>;
                <li>Referring website information</li>;
                <li>Device identifiers</li>;
            </div> {/* How We Use Information */}
                <Eye className="w-8 h-8 mr-3 text-blue-600" />;
                How We Use Your Information;
                We use the information we collect for various purposes, including:;
                <li>Providing and maintaining our services</li>;
                <li>Processing transactions and delivering products</li>;
                <li>Communicating with you about our services</li>;
                <li>Improving our website and services</li>;
                <li>Analyzing usage patterns and trends</li>;
                <li>Preventing fraud and ensuring security</li>;
                <li>Complying with legal obligations</li>;
            </div> {/* Information Sharing */}
                <UserCheck className="w-8 h-8 mr-3 text-blue-600" />;
                Information Sharing and Disclosure;
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:;
                <li>With trusted service providers who assist us in operating our website and conducting our business</li>;
                <li>When required by law or to protect our rights and safety</li>;
                <li>In connection with a business transfer or acquisition</li>;
                <li>With your explicit consent</li>;
            </div> {/* Data Security */}
                <Lock className="w-8 h-8 mr-3 text-blue-600" />;
                Data Security;
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:;
                <li>SSL encryption for data transmission</li>;
                <li>Secure data storage and backup systems</li>;
                <li>Regular security audits and updates</li>;
                <li>Access controls and authentication protocols</li>;
                <li>Employee training on data protection</li>;
            </div> {/* Your Rights */}
                <Shield className="w-8 h-8 mr-3 text-blue-600" />;
                Your Rights and Choices;
                Depending on your location, you may have certain rights regarding your personal information:;
                <li>Access to your personal information</li>;
                <li>Correction of inaccurate information</li>;
                <li>Deletion of your personal information</li>;
                <li>Restriction of processing</li>;
                <li>Data portability</li>;
                <li>Objection to processing</li>;
                <li>Withdrawal of consent</li>;
            </div> {/* Cookies */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>;
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.;
            </div> {/* Third-Party Links */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>;
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.;
            </div> {/* Children's Privacy */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>;
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.;
            </div> {/* Changes to Policy */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>;
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.;
            </div> {/* Contact Information */}
                <FileText className="w-8 h-8 mr-3 text-blue-600" />;
                Contact Us;
                If you have any questions about this Privacy Policy or our data practices, please contact us:;
              <div className="bg-gray-50 rounded-lg p-6">;
                <p className="text-gray-700 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>;
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (302) 464-0950</p>;
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>;
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
                Zion Tech Group ("we," "our, " or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website ziontechgroup.com or use our services.
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site or use our services.
            {/* Information We Collect */}
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <Database: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Information: We Collect
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>";";";
                We: may collect personal information that you voluntarily provide to us when you: </p,>,
              <ul: className="list-disc list-inside text-gray-600 mb-6 space-y-2">";";";
                <li>Register: for an account or use our services</li>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
                We may collect personal information that you voluntarily provide
                to us when you:{' '}
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Register for an account or use our services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletter or blog</li>
                <li>Request a quote or consultation</li>
                <li>Participate in surveys or feedback forms</li>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>";";";
                We: may automatically collect certain information about your device and usage patterns, including: </p,>,
                <li>IP: address and location data</li>
                Automatically Collected Information
                We may automatically collect certain information about your
                device and usage patterns, including:{' '}
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device identifiers</li>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>"
                We use the information we collect t,
    o:
                <li>Provide and improve our services</li>
                <li>Communicate with you about projects and services</li>
                <li>Process payments and transactions</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Protect against fraud and security threats</li>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>"
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in our operations</li>
            {/* How We Use Information */}
                <Eye: className="w-8 h-8 mr-3 text-blue-600" />";";";
                How: We Use Your Information
              <p className="text-gray-600 mb-4">";";";
                We: use the information we collect for various purposes, including: </p,>,
                <li>Providing: and maintaining our services</li>
                We use the information we collect for various purposes,
                including:{' '}
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and delivering products</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
            {/* Information Sharing */}
                <UserCheck: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Information: Sharing and Disclosure
                We: do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances: </p,>,
                <li>With: trusted service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:{' '}
                <li>
                  With trusted service providers who assist us in operating our
                  website and conducting our business
                  When required by law or to protect our rights and safety
                <li>In connection with a business transfer or acquisition</li>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>"
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>"
                Depending on your location, you may have the following rights regarding your personal information:
            {/* Data Security */}
                <Lock: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Data: Security
                We: implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include: </p,>,
                <li>SSL: encryption for data transmission</li>
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                These measures include:{' '}
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and backup systems</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
            {/* Your Rights */}
                <Shield: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Your: Rights and Choices
                Depending: on your location, you may have certain rights regarding your personal information: </p,>,
                <li>Access: to your personal information</li>
                Depending on your location, you may have certain rights
                regarding your personal information:{' '}
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>

            {/* Cookies */}
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>";";";
                We: use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.

            {/* Third-Party Links */}
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>";";";
                Our: website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.

            {/* Children's Privacy */};
            <div: className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>;
                Our: services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.

            {/* Changes to Policy */}
              <h2: className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>";";";
                We: may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.";";";
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>"
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>"
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>'
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>"
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>"
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at: </p>"
              <div className="bg-gray-50 p-6 rounded-lg">"
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                  <strong>Phon,
    e:</strong> +1 (302) 464-0950
                <p className="text-gray-700">
                  <strong>Addres,
    s:</strong> Delaware, USA
                Cookies and Tracking Technologies
                We use cookies and similar tracking technologies to enhance your
                experience on our website. You can control cookie settings
                through your browser preferences.
                Third-Party Links
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review their privacy
                policies.
            {/* Children&apos;s Privacy */}'
                Children&apos;s Privacy
              '
                Our services are not intended for children under 13 years of
                age. We do not knowingly collect personal information from
                children under 13.
                Changes to This Privacy Policy
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.

            {/* Contact: Information */}
                <FileText: className="w-8 h-8 mr-3 text-blue-600" />";";";
                Contact: Us
                If: you have any questions about this Privacy Policy or our data practices, please contact us: </p,>,
              <div: className="bg-gray-50 rounded-lg p-6">";";";
                <p: className="text-gray-700 mb-2"><strong>Email: </strong> kleber@ziontechgroup.com</p>",;,";";
                <p: className="text-gray-700 mb-2"><strong>Phone: </strong> +1: (302) 464-0950</p>",;,";";
                <p: className="text-gray-700 mb-2"><strong>Address: </strong> 364: E Main St STE 100,8, Middletown, DE 19709</p>";";" {/* Contact Information */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                Contact Us
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:{' '}
              <div className="bg-gray-50 rounded-lg p-6">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                  <strong>Phone:</strong> +1 (302) 464-0950
                  <strong>Address: </strong> 364 E Main St STE 1008, Middletown,
                  DE 19709
        <meta
          name="description"
          content="Learn how Zion Tech Group protects your privacy and handles your personal information. Our comprehensive privacy policy explains our data practices."
        <link rel="canonical" href="https: //ziontechgroup.com/privacy" />

      <Header />

      <main className="min-h-screen bg-white pt-16">
        <meta name="description" content="Zion Tech Group's Privacy Policy - Learn how we collect, use, and protect your personal information." />
      
      <Navigation />
      
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <Shield className="w-12 h-12 text-white" />
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              <div className="flex items-center justify-center text-sm text-gray-500">
                Last updated: {lastUpdated}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your personal information.
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}

      {/* CTA: Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";";";
          <h2: className="text-4xl font-bold mb-6">Questions About Your Privacy?</h2>";";";
          <p: className="text-xl mb-8 max-w-3xl mx-auto">";";";
            We're: here to help. Contact us if you have any questions about how we handle your personal information.;
          <div: className="flex flex-col sm: flex-row: justify-center gap-4">",;,";";
            <a: href="mailto: kleber@ziontechgroup.com" className="bg-white: text-blue-600 hover:bg-gray-100: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;,";";
              Learn: More
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <h2 className="text-4xl font-bold mb-6">Questions About Your Privacy?</h2>;
          <p className="text-xl mb-8 max-w-3xl mx-auto">;
            We're here to help. Contact us if you have any questions about how we handle your personal information.;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
            </a>;
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Learn More;
    </Layout>;
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Questions About Your Privacy?
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to help. Contact us if you have any questions about
            how we handle your personal information.'
          <div className="flex flex-col sm: flex-row justify-center gap-4">
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg"
              Learn More
        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                      We may collect personal information that you provide directly to us, such as:
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Company information and job title</li>
                      <li>Communication preferences</li>
                      <li>Information you provide when contacting us or requesting services</li>
                  
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                      We automatically collect certain information when you visit our website:
                      <li>IP address and browser information</li>
                      <li>Device and operating system information</li>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                visit our website or use our services.
                By using our website or services, you agree to the collection
                and use of information in accordance with this policy. If you do
                not agree with our policies and practices, please do not use our
                services.

        {/* Privacy Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="space-y-12">
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3"
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
              
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Payment and billing information</li>
                  
                  <h3 className="text-lg font-semibold mb-4 mt-6">Technical Information</h3>
                    <li>IP address and device information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Your Privacy Rights
              Depending on your location, you may have certain rights regarding
              your personal information:{' '}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
            <p className="text-gray-600 mt-6">
              To exercise any of these rights, please contact us using the
              information provided below.

              Cookies and Tracking
              experience on our website. Cookies are small data files stored on
              your device that help us:
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-gray-600">
                  Remember your preferences and settings
                  Analyze website traffic and usage patterns
                  Improve website performance and functionality
                  Provide personalized content and advertisements
              You can control cookies through your browser settings. However,
              disabling cookies may affect the functionality of our website.

        {/* Data Retention */}
              Data Retention
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. We will
              delete or anonymize your personal information when it is no longer
              needed.
              The retention period may vary depending on the type of information
              and the purpose for which it was collected. For example, we may
              retain customer information for the duration of our business
              relationship and for a reasonable period thereafter.

        {/* International Transfers */}
              International Data Transfers
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              different data protection laws than your country.
              When we transfer your information internationally, we ensure
              appropriate safeguards are in place to protect your information in
              accordance with applicable data protection laws.

              this page and updating the "Last updated" date at the top of this
              policy.
              We encourage you to review this Privacy Policy periodically for
              any changes. Changes to this Privacy Policy are effective when
              they are posted on this page.

              If you have any questions about this Privacy Policy or our privacy
            <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    kleber@ziontechgroup.com
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+1 (302) 464-0950</span>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                    </svg>
                    364 E Main St STE 1008
                    <br />
                    Middletown, DE 19709
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Service Delivery</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Provide and maintain our services</li>
                      <li>• Process transactions and payments</li>
                      <li>• Deliver customer support</li>
                      <li>• Send service-related communications</li>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Business Operations</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Improve our services and products</li>
                      <li>• Conduct analytics and research</li>
                      <li>• Marketing and promotional activities</li>
                      <li>• Legal compliance and security</li>

                  Data Protection & Security
                    We implement industry-standard security measures to protect your personal information:
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication systems</li>
                    <li>Incident response and breach notification procedures</li>

                  <UserCheck className="w-6 h-6 mr-3 text-blue-600" />
                  Your Rights
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <h4 className="font-semibold">Access & Portability</h4>
                        <p className="text-gray-600 text-sm">Request access to your data and receive it in a portable format</p>
                        <h4 className="font-semibold">Correction</h4>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate personal information</p>
                        <h4 className="font-semibold">Deletion</h4>
                        <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                        <h4 className="font-semibold">Opt-out</h4>
                        <p className="text-gray-600 text-sm">Unsubscribe from marketing communications</p>

                  <li>Respond to your inquiries and requests</li>
                  <li>Send you important updates about our services</li>
                  <li>Analyze website usage to improve user experience</li>

                  Information Sharing
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                  Depending on your location, you may have certain rights regarding your personal information:
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Cookies & Tracking
                    We use cookies and similar technologies to enhance your experience:
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">E</span>
                      <h4 className="font-semibold mb-2">Essential</h4>
                      <p className="text-sm text-gray-600">Required for website functionality</p>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">A</span>
                      <h4 className="font-semibold mb-2">Analytics</h4>
                      <p className="text-sm text-gray-600">Help us understand website usage</p>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 font-bold">M</span>
                      <h4 className="font-semibold mb-2">Marketing</h4>
                      <p className="text-sm text-gray-600">Personalize content and ads</p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">privacy@ziontechgroup.com</span>
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  <div className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    123 Technology Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>

      </main>
    </>
  )}"

      <Footer />
  )}
export default Privacy

export default Privacy}
