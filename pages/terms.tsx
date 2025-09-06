import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {;
  const contact = {;
    phone: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    site: 'https://ziontechgroup && ziontechgroup.com';

=======
=======
      ]
    };
    {
      title: 'Quantum Technology Services',
      terms: [
        'Quantum computing resources are allocated based on service tierUsers must comply with export control regulationsPerformance metrics are provided for informational purposes onlyService interruptions may occur during quantum system calibration'
      ]
    };
    {
      title: 'Cybersecurity Services',
      terms: [
        'Security assessments are conducted according to industry standardsVulnerability reports are confidential and must not be sharedPenetration testing requires written authorizationIncident response follows our established protocols'
import Layout from '../components/layout/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  User, Lock, Globe, Scale, Clock, Mail
} from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 17, 2025';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      content: [
        'By accessing or using our services, you agree to be bound by these termsIf you do not agree to these terms, do not use our servicesWe may modify these terms at any time with noticeContinued use after changes constitutes acceptance of new terms'
      ]
    };
    {
      title: 'Service Description',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      content: [
        'AI and machine learning solutionsQuantum computing servicesIT infrastructure and consultingMicro SAAS applicationsBusiness automation servicesTechnical support and maintenance'
      ]
    };
    {
      title: 'User Responsibilities',
      icon: <User className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      content: [
        'Provide accurate and complete informationMaintain security of your account credentialsComply with applicable laws and regulationsUse services for lawful purposes onlyRespect intellectual property rights'
      ]
    };
    {
      title: 'Intellectual Property',
      icon: <Lock className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      content: [
        'Our services and content are protected by copyrightYou retain rights to your own contentNo transfer of intellectual property rightsLicense to use our services as intendedProhibition of reverse engineering'
      ]
    }
  ];

  const prohibitedActivities = [
import { motion } from 'framer-motion';
import { 
  FileText, Shield, CheckCircle, AlertTriangle, 
  Globe, Calendar, Scale, Users, ArrowRight;
  BookOpen, Lock, Zap, Building, Brain, Rocket
} from 'lucide-react';

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Lock, Eye, Users, Globe, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`;
      icon: <FileText className="w-6 h-6 text-purple-400" />
    };
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on Zion Tech Group's website, remove any copyright or other proprietary notations from the materials, or transfer the materials to another person or "mirror" the materials on any other server.`;
      icon: <Lock className="w-6 h-6 text-blue-400" />
    };
    {
      title: 'Service Description',
      content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`;
      icon: <Globe className="w-6 h-6 text-green-400" />
    };
    {
      title: 'User Responsibilities',
      content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`;
      icon: <Users className="w-6 h-6 text-yellow-400" />
    };
    {
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`;
      icon: <Eye className="w-6 h-6 text-cyan-400" />
    };
    {
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`;
      icon: <Shield className="w-6 h-6 text-red-400" />
    }
  ];

  const importantNotices = [
    {
      title: 'AI Technology Risks',
      content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
      type: 'warning'
    };
    {
      title: 'Quantum Computing Limitations',
      content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
      type: 'info'
    };
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
      type: 'info'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  };
  {
    title: 'Use License',
    icon: <Scale className="w-6 h-6 text-blue-400" />,
    content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.'
  };
  {
    title: 'Disclaimer',
    icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
    content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.'
  };
  {
    title: 'Limitations',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
  }
];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

import Head from 'next/head';
import Link from 'next/link';
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
export default function Terms() {
  const contact = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our micro SaaS products, AI services, and IT solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, zion tech group" />
        <link rel="canonical" href={`${contact.site}/terms`} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
              <p className="text-slate-300 mb-4">
                By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Use License</h2>
              <p className="text-slate-300 mb-4">
                Permission is granted to temporarily download one copy of Zion Tech Group&apos;s services for personal
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Service Availability</h2>
              <p className="text-slate-300 mb-4">
                Zion Tech Group strives to maintain high service availability but does not guarantee uninterrupted access.
                We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. User Responsibilities</h2>
              <p className="text-slate-300 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Maintaining the confidentiality of their account credentials</li>
                <li>All activities that occur under their account</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using the services for any unlawful or prohibited purpose</li>
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Payment Terms</h2>
              <p className="text-slate-300 mb-4">
                Payment terms vary by service. All fees are non-refundable unless otherwise specified.
                We reserve the right to change our pricing with 30 days notice to existing customers.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Limitation of Liability</h2>
              <p className="text-slate-300 mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the services, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Privacy Policy</h2>
              <p className="text-slate-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact Information</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-900/60 p-6 rounded-lg border border-white/10">
                <p className="text-slate-300 mb-2">
                  <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300">{contact.phone}</a>
                </p>
                <p className="text-slate-300 mb-2">
                  <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300">{contact.email}</a>
                </p>
                <p className="text-slate-300">
                  <strong>Address:</strong> {contact.address}
                </p>
              </div>
            </section>
          </div>
          <div className="mt-12 text-center">
            <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
=======
            <section className="mb-12">;
              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact Information</h2>;
              <p className="text-slate-300 mb-4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="bg-slate-900/60 p-6 rounded-lg border border-white/10">;
                <p className="text-slate-300 mb-2">;
                  <strong>Phone:</strong> <a href={`tel:${contact && contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300">{contact && contact.phone}</a>;
                </p>;
                <p className="text-slate-300 mb-2">;
                  <strong>Email:</strong> <a href={`mailto:${contact && contact.email}`} className="text-blue-400 hover:text-blue-300">{contact && contact.email}</a>;
                </p>;
                <p className="text-slate-300">;
                  <strong>Address:</strong> {contact && contact.address}
=======
import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Terms - Function description
 */
function Terms() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com';
  }
  return (
    <>;
      <Head>;
        <title > Terms of Service - Zion Tech Group</title>;
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our micro SaaS products, AI services, and IT solutions." />;
        <meta name="keywords" content="terms of service, terms and conditions, legal, zion tech group" />;
        <link rel="canonical" href={`${contact.site}/terms`} />;
      </Head>;
      <main className="min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white">;
        <div className="max - w-4xl mx - auto py - 20 px - 4">;
          <h1 className="text - 4xl md:text - 5xl font - extrabold tracking - tight mb - 8">;
            Terms of Service;
          </h1>;
          <div className="prose prose - invert max - w-none">;
            <p className="text - lg text - slate - 300 mb - 8">;
              Last updated: {new Date ().toLocaleDateString ()}
            </p>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">1. Acceptance of Terms</h2>;
              <p className="text - slate - 300 mb - 4">;
                By accessing and using Zion Tech Group & apos;s services, you accept and agree to be bound by the terms;
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">2. Use License</h2>;
              <p className="text - slate - 300 mb - 4">;
                Permission is granted to temporarily download one copy of Zion Tech Group & apos;s services for personal,
                non - commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:;
              </p>;
              <ul className="list - disc list - inside text - slate - 300 mb - 4 space - y-2">;
                <li > modify or copy the materials</li>;
                <li > use the materials for any commercial purpose or for any public display</li>;
                <li > attempt to reverse engineer any software contained on the website</li>;
                <li > remove any copyright or other proprietary notations from the materials</li>;
              </ul>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">3. Service Availability</h2>;
              <p className="text - slate - 300 mb - 4">;
                Zion Tech Group strives to maintain high service availability but does not guarantee uninterrupted access.;
                We reserve the right to modify, suspend, or discontinue any service at any time without notice.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">4. User Responsibilities</h2>;
              <p className="text - slate - 300 mb - 4">;
                Users are responsible for:;
              </p>;
              <ul className="list - disc list - inside text - slate - 300 mb - 4 space - y-2">;
                <li > Maintaining the confidentiality of their account credentials</li>;
                <li > All activities that occur under their account</li>;
                <li > Complying with all applicable laws and regulations</li>;
                <li > Not using the services for any unlawful or prohibited purpose</li>;
              </ul>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">5. Payment Terms</h2>;
              <p className="text - slate - 300 mb - 4">;
                Payment terms vary by service. All fees are non - refundable unless otherwise specified.;
                We reserve the right to change our pricing with 30 days notice to existing customers.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">6. Limitation of Liability</h2>;
              <p className="text - slate - 300 mb - 4">;
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability;
                to use the services, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified;
                orally or in writing of the possibility of such damage.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">7. Privacy Policy</h2>;
              <p className="text - slate - 300 mb - 4">;
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">8. Contact Information</h2>;
              <p className="text - slate - 300 mb - 4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="bg - slate - 900 / 60 p - 6 rounded - lg border border - white / 10">;
                <p className="text - slate - 300 mb - 2">;
                  <strong > Phone:</strong> <a href={`tel:${contact.phone.replace (/[^\d+]/g, '')}`} className="text - blue - 400 hover:text - blue - 300">{contact.phone}</a>;
                </p>;
                <p className="text - slate - 300 mb - 2">;
                  <strong > Email:</strong> <a href={`mailto:${contact.email}`} className="text - blue - 400 hover:text - blue - 300">{contact.email}</a>;
                </p>;
                <p className="text - slate - 300">;
                  <strong > Address:</strong> {contact.address}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                </p>;
              </div>;
            </section>;
          </div>;
              Back to Home;
            </Link>;
          </div>;
        </div>;
      </main>;
  );
}
export default function Terms() {;
  return (
    <Layout>;
      <SEO
        title="Terms of Service | Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service, including usage policies, user agreements, and legal conditions for accessing our technology services."
        keywords={["terms of service", "user agreement", "legal terms", "conditions of use", "service agreement", "Zion Tech Group"]}
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>;
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                  Address: 123 Tech Street, San Francisco, CA 94105;
                </p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* User Obligations Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
                        Severe or repeated violations may result in permanent service termination.;
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Liability Limitations */}
        {/* Intellectual Property Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
        {/* Limitation of Liability Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
                    </li>;
                  </ul>;
                </div>;
                <div>;
                    <li>• Natural disasters and extreme weather</li>;
                    <li>• Government actions and regulations</li>;
                    <li>• Infrastructure failures and cyber attacks</li>;
                    <li>• Global pandemics and health emergencies</li>;
                  </ul>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        {/* Contact Section */}
        <section className="py-20">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
          </div>;
        </section>;
      </div>;
    </Layout>;
      {/* Terms Overview */}
      <section id="terms-sections" className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                className="group cursor-pointer">;
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">;
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${section && section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>;
                    {section && section.icon}
                  </div>;
                  <h3 className="text-xl font-semibold mb-2">{section && section.title}</h3>;
                  <p className="text-gray-300 text-sm">{section && section.description}</p>;
                </div>;
              </motion && motion.div>;
            ))}
      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                key={service.category}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group";
              >;
                <div className="bg - gradient - to - br from - gray - 800 / 50 to - black / 50 rounded - 2xl border border - white / 10 hover:border - cyan - 500 / 30 transition - all duration - 300 overflow - hidden">;
                  <div className="h - 24 bg - gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 flex items - center justify - center">;
                    <div className="w - 12 h - 12 rounded - xl bg - gradient - to - r from - cyan - 500 to - blue - 600 flex items - center justify - center">;
                      {service.icon}
                    </div>;
                  </div>;
                  <div className="p - 6">;
                    <h3 className="text - xl font - bold mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300">;
                      {service.category}
                        ))}
                      </ul>;
                    </div>;

                    <div>;
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>;
                      <ul className="text-sm text-gray-300 space-y-1">;
                        {service && service.restrictions.map((restriction, restrictionIndex) => (;
                          <li key={restrictionIndex} className="flex items-start gap-2">;
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0" />;
                            {restriction}
                          </li>;
                        ))}
                      </ul>;
    'Unauthorized access to our systems or networksInterference with service operationDistribution of malware or harmful codeViolation of third-party rightsAttempts to gain unauthorized accessUse of services for illegal activities';
  ];
  ];
=======
                    </h3>;
                    <p className="text - gray - 300 mb - 4">{service.description}</p>;
                    <div className="mb - 4">;
                      <h4 className="text - sm font - semibold text - cyan - 400 mb - 2">Features:</h4>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {service.features.map ((feature, feature_index) => (
                          <li key={feature_index} className="flex items - start gap - 2">;
                            <CheckCircle className="w - 4 h - 4 text - green - 400 mt - 0.5 flex - shrink - 0" />;
                            {feature}
                          </li>))}
                      </ul>;
                    </div>;
                    <div>;
                      <h4 className="text - sm font - semibold text - yellow - 400 mb - 2">Restrictions:</h4>;
                      <ul className="text - sm text - gray - 300 space - y-1">;
                        {service.restrictions.map ((restriction, restriction_index) => (
                          <li key={restriction_index} className="flex items - start gap - 2">;
                            <AlertTriangle className="w - 4 h - 4 text - yellow - 400 mt - 0.5 flex - shrink - 0" />;
                            {restriction}
                          </li>))}
                      </ul>;
    'Unauthorized access to our systems or networks_interference with service operation_distribution of malware or harmful code_violation of third - party rights_attempts to gain unauthorized access_use of services for illegal activities';
  ];
;
  const limitations = [;
    'Services provided "as is" without warranties_no guarantee of uninterrupted service_limitation of liability for damages_no responsibility for third - party content_service availability subject to change_technical support during business hours only';
  ];
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <ErrorBoundary>;
      <SEOOptimizer />;
      <AnalyticsTracker />;
      <Layout>;
          {/* Overview */}
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">;
            <div className="max-w-6xl mx-auto">;
              <div className="grid lg:grid-cols-2 gap-12 items-center">;
                <motion&& motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                        </div>;
                      </div>;
                    </div>;
                  </div>;
          {/* Key Terms */}
          <section className="py-20 px-4">;
            <div className="max-w-6xl mx-auto">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">;
                    <div className={`w-16 h-16 bg-gradient-to-r ${section && section.color} rounded-2xl flex items-center justify-center mb-6`}>;
                      <div className="text-white">;
                        {section && section.icon}
                      </div>;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4">{section && section.title}</h3>;
                    <ul className="space-y-3">;
                      {section && section.content.map((item, itemIndex) => (;
                        <li key={itemIndex} className="flex items-start gap-3">;
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>;
                          <span className="text-gray-300">{item}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </motion && motion.div>;
                ))}
          {/* Prohibited Activities */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">;
            <div className="max-w-6xl mx-auto">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">;
                <div className="flex items-center gap-4 mb-6">;
                  <AlertTriangle className="w-8 h-8 text-red-400" />;
                  <h3 className="text-2xl font-bold text-white">What You Cannot Do</h3>;
                </div>;
                <div className="grid md:grid-cols-2 gap-4">;
                  {prohibitedActivities && prohibitedActivities.map((activity, index) => (;
                    <div key={index} className="flex items-start gap-3">;
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>;
                      <span className="text-gray-300">{activity}</span>;
                    </div>;
                  ))}
          {/* Service Limitations */}
          <section className="py-20 px-4">;
            <div className="max-w-6xl mx-auto">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30">;
                <div className="flex items-center gap-4 mb-6">;
                  <Shield className="w-8 h-8 text-yellow-400" />;
                  <h3 className="text-2xl font-bold text-white">Service Limitations</h3>;
                </div>;
                <div className="grid md:grid-cols-2 gap-4">;
                  {limitations && limitations.map((limitation, index) => (;
                    <div key={index} className="flex items-start gap-3">;
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>;
                      <span className="text-gray-300">{limitation}</span>;
                    </div>;
                  ))}
          {/* Detailed Terms */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">;
            <div className="max-w-4xl mx-auto">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                        </p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
        {/* Terms Overview */}
        <section className="py-20">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
            {/* Key Terms Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">;
              {termsSections && termsSections.map((section, index) => (;
                <motion&& motion.div
                  key={section && section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl">;
                  <div className="flex items-center space-x-3 mb-4">;
                    {section && section.icon}
                    <h3 className="text-xl font-semibold">{section && section.title}</h3>;
                  </div>;
                  <p className="text-gray-300">{section && section.content}</p>;
                </motion && motion.div>;
              ))}
        {/* Detailed Terms */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
                    <li><strong>"Company"</strong> refers to Zion Tech Group</li>;
                    <li><strong>"Services"</strong> refers to our website, platforms, and technology solutions</li>;
                    <li><strong>"User"</strong> refers to any individual or entity using our services</li>;
                    <li><strong>"Content"</strong> refers to all text, data, information, software, and other materials</li>;
                    <li><strong>"Agreement"</strong> refers to these Terms of Service</li>;
                  </ul>;
                </div>;
              </div>;
              {/* Section 2: Acceptance */}
              <div className="prose prose-invert max-w-none">;
                <h3 className="text-2xl font-bold text-purple-400 mb-4">2. Acceptance of Terms</h3>;
                <div className="text-gray-300 space-y-4">;
                  <p>;
                    By accessing, browsing, or using our services, you acknowledge that you have read;
>>>>>>> origin/automation-improvements-final
              </div>
            </motion.div>
          </div>
                    </div>;
                  </div>;
                </div>;
              </div>;

          <div className="mt-12 text-center">
            <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
=======
>>>>>>> origin/automation-improvements-final
        </section>
        {/* Agreement Section */}
        <section className="py-20">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
          {/* Contact Information */}
          <section className="py-20 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <motion&& motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  <a
                    href="mailto:kleber@ziontechgroup && ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">;
                    <Mail className="w-5 h-5" />;
                    Email Us;
                  </a>;
                  <a
                    href="/contact"
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
export default TermsPage;
}> <h2 className="text-4xl font-bold mb-6 text-white" > Questions About These Terms? </h2> <p className="text-xl text-gray-300 mb-8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <Mail className="w-5 h-5" /> Email Us </Link> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <User className="w-5 h-5" /> Contact Form </Link> </div> </motion.div> </div> </section> </main> </Layout> </ErrorBoundary>)
=======
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">;
                    <User className="w-5 h-5" />;
                    Contact Form;
                  </a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>;
  );
};

export default TermsPage;
}> <h2 className="text-4xl font-bold mb-6 text-white" > Questions About These Terms? </h2> <p className="text-xl text-gray-300 mb-8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <Mail className="w-5 h-5" /> Email Us </Link> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <User className="w-5 h-5" /> Contact Form </Link> </div> </motion && motion.div> </div> </section> </main> </Layout> </ErrorBoundary>) ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
};export default TermsPage;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default TermsPage;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
            </motion.div>;
          </div>;
        </section>;
        {/* Agreement Section */}
        <section className="py - 20">;
          <div className="max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p - 8 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 400 / 20 rounded - xl";
            >;
              <Scale className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" />;
              <h3 className="text - 2xl font - bold mb - 4">Agreement Acknowledgment</h3>;
              <p className="text - gray - 300 mb - 6">;
                By using our services, you acknowledge that you have read and understood these Terms of Service;
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.;
              </p>;
              <p className="text - sm text - gray - 400">;
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
;
export default Terms;
            </div>;
          </section>;
          {/* Contact Information */}
          <section className="py - 20 px - 4">;
            <div className="max - w-4xl mx - auto text - center">;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6 }}
              >;
                <h2 className="text - 4xl font - bold mb - 6 text - white">;
                  Questions About These Terms?;
                </h2>;
                <p className="text - xl text - gray - 300 mb - 8">;
                  If you have any questions about these Terms of Service or need clarification on any;
                  provision, please don't hesitate to reach out to us.;
                </p>;
                <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2";
                  >;
                    <Mail className="w - 5 h - 5" />;
                    Email Us;
                  </a>;
                  <a;
                    href="/contact";
                    className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - lg font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2";
                  >;
                    <User className="w - 5 h - 5" />;
                    Contact Form;
                  </a>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>);
}
export default TermsPage;
}> <h2 className="text - 4xl font - bold mb - 6 text - white" > Questions About These Terms? </h2> <p className="text - xl text - gray - 300 mb - 8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2" > <Mail className="w - 5 h - 5" /> Email Us </Link> <a href="/contact" className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - lg font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2" > <User className="w - 5 h - 5" /> Contact Form </Link> </div> </motion.div> </div> </section> </main> </Layout> </ErrorBoundary>);
}export default TermsPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
