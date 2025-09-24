import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  FileText,;
  Shield, ;
  Lock, ;
  Eye, ;
  Scale, ;
  CheckCircle,;
  ArrowRight,;
  BookOpen,;
  UserCheck,;
  Globe,;
  Database,;
  Server,;
  Mail,;
  Phone;
} from "lucide-react"
const Legal: React.FC = () => {
  const legalDocuments = [;
    {;
      title: 'Terms of Service',description: 'Our terms and conditions for using Zion Tech Group services',href: '/terms',icon: FileText,category: 'Service Terms'
    };
    {;
      title: 'Privacy Policy',description: 'How we collect, use, and protect your personal information',;
      href: '/privacy',icon: Shield,category: 'Data Protection'
    };
    {;
      title: 'Cookie Policy',description: 'Information about cookies and how we use them',href: '/cookies',icon: Lock,category: 'Data Protection'
    };
    {;
      title: 'Data Processing Agreement',description: 'Terms for processing personal data on behalf of customers',href: '/data-processing-agreement',icon: Database,category: 'Data Protection'
    };
    {;
      title: 'Service Level Agreement',description: 'Our commitment to service quality and availability',href: '/sla',icon: CheckCircle,category: 'Service Terms'
    };
    {;
      title: 'Acceptable Use Policy',description: 'Guidelines for acceptable use of our services',href: '/acceptable-use',icon: UserCheck,category: 'Service Terms'
    };
  ];
  const legalCategories = [;
    {;
      name: 'Service Terms',description: 'Terms and conditions for using our services',icon: FileText,color: 'from-blue-500 to-cyan-500'
    };
    {;
      name: 'Data Protection',description: 'Privacy and data handling policies',icon: Shield,color: 'from-green-500 to-emerald-500'
    };
    {;
      name: 'Compliance',description: 'Regulatory and industry compliance documents',icon: Scale,color: 'from-purple-500 to-pink-500'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Legal & Privacy - Zion Tech Group"
        description="Access all legal documents, privacy policies, and terms of service for Zion Tech Group. Stay informed about your rights and our commitments."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container-responsive py-20 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Legal & Privacy;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Access all legal documents, privacy policies, and terms of service. ;
              We believe in transparency and protecting your rights.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-cyan-400">;
                <[^>]*/>
                <span>GDPR Compliant</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-cyan-400">;
                <[^>]*/>
                <span>Regular Updates</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-cyan-400">;
                <[^>]*/>
                <span>Transparent</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Legal Categories */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Legal Document Categories;
            </[^>]*>
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Our legal documents are organized into clear categories to help you find what you need quickly.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">;
            {legalCategories.map((category, index) => (;
              <motion.div
                key={category.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</[^>]*>
                <p className="text-gray-300">{category.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Legal Documents */};
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              All Legal Documents;
            </[^>]*>
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Browse and download all our legal documents, policies, and agreements.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {legalDocuments.map((document, index) => (;
              <motion.div
                key={document.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">;
                    {document.category};
                  </[^>]*>
                </[^>]*>
                ;
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                  {document.title};
                </[^>]*>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">;
                  {document.description};
                </[^>]*>
                ;
                <Link;
                  to={document.href};
                  className="[^"]*"
                >;
                  <span className="text-sm font-medium">View Document</[^>]*>
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Additional Information */};
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container-responsive">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6 }};
              viewport={{ once: true }};
            >;
              <h2 className="text-3xl font-bold text-white mb-6">;
                Your Rights & Our Commitments;
              </[^>]*>
              <div className="space-y-4">;
                <div className="flex items-start gap-3">;
                  <[^>]*/>
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right to Access</[^>]*>
                    <p className="text-gray-300 text-sm">Request access to your personal data at any time</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start gap-3">;
                  <[^>]*/>
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right to Rectification</[^>]*>
                    <p className="text-gray-300 text-sm">Correct inaccurate or incomplete personal data</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start gap-3">;
                  <[^>]*/>
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right to Erasure</[^>]*>
                    <p className="text-gray-300 text-sm">Request deletion of your personal data</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start gap-3">;
                  <[^>]*/>
                  <div>;
                    <h4 className="text-white font-medium mb-1">Data Portability</[^>]*>
                    <p className="text-gray-300 text-sm">Receive your data in a structured format</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h3 className="text-xl font-semibold text-white mb-4">Need Legal Assistance?</[^>]*>
              <p className="text-gray-300 mb-6">;
                If you have questions about our legal documents or need clarification on any terms;
                our legal team is here to help.;
              </[^>]*>
              <div className="space-y-3">;
                <div className="flex items-center gap-3 text-gray-300">;
                  <[^>]*/>
                  <span>legal@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-3 text-gray-300">;
                  <[^>]*/>
                  <span>+1 302 464 0950</[^>]*>
                </[^>]*>
              </[^>]*>
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Contact Legal Team</[^>]*>
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-16">;
        <div className="container-responsive text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Stay Informed About Legal Updates;
            </[^>]*>
            <p className="text-gray-300 mb-8">;
              We regularly update our legal documents to ensure compliance and transparency. ;
              Subscribe to receive notifications about important changes.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <span>Contact Legal Team</[^>]*>
                <[^>]*/>
              </[^>]*>
              <Link;
                to="/privacy"
                className="[^"]*"
              >;
                <[^>]*/>
                <span>Privacy Policy</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Legal;