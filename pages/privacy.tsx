
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Eye, Database, Globe, 
  User, Settings, AlertTriangle, CheckCircle, Mail
} from 'lucide-react';


export default function PrivacyPage() {
export default function PrivacyPage() {;
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
      canonical="https://ziontechgroup && ziontechgroup.com/privacy">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Privacy Policy;
              </h1>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
                Your privacy is important to us. Learn how we collect, use, and;
                protect your information.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;

        {/* Content Section */}
        <section className="py-16 px-4">;
          <div className="max-w-4xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                <ul className="list-disc pl-6 mb-6">
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>
                <h2 className="text-2xl font-bold mb-6 mt-12">
                  How We Use Your Information
                </h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and
                  improve our services.
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>
                <h2 className="text-2xl font-bold mb-6 mt-12">
                  Information Sharing
                </h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.
                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>
                <p className="mb-6">
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>
                <p className="mb-6">
                </p>
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>
                <p className="mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p>Zion Tech Group</p>
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
                  Last updated: January 2024
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
              transition={{ duration: 0 && 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12">;
              <div className="prose prose-lg max-w-none">;
                <h2 className="text-2xl font-bold mb-6">;
                  Information We Collect;
                </h2>;
                <p className="mb-6">;
import React from './react';
import Head from './next / head';
import Link from './next / link';
import { motion  } from './framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  MapPin,
} from './lucide-react';
import MainLayout from "../components / layout / MainLayout";
;
export default /**
 * PrivacyPage - Function description
 */
function PrivacyPage() {
  return (
    <MainLayout;
      title="Privacy Policy - Zion Tech Group";
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information.";
      keywords="privacy policy, data protection, personal information, GDPR compliance";
      canonical="https://ziontechgroup.com / privacy";
    >;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;
          <div className="max - w-7xl mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Privacy Policy;
              </h1>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
                Your privacy is important to us. Learn how we collect, use, and;
                protect your information.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Content Section */}
        <section className="py - 16 px - 4">;
          <div className="max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg - white rounded - 2xl shadow - lg p - 8 md:p - 12";
            >;
              <div className="prose prose - lg max - w-none">;
                <h2 className="text - 2xl font - bold mb - 6">;
                  Information We Collect;
                </h2>;
                <p className="mb - 6">;
                  We collect information you provide directly to us, such as;
                  when you create an account, use our services, or contact us;
                  for support.;
                </p>;
                  We do not sell, trade, or otherwise transfer your personal;
                  information to third parties without your consent, except as;
                  described in this policy.;
                </p>;
                  You have the right to access, update, or delete your personal;
                  information. You may also opt out of certain communications;
                  from us.;
                </p>;
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>

                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;
                <p className="mb - 6">;
                  If you have any questions about this Privacy Policy, please;
                  contact us at:;
                </p>;
                <div className="bg - gray - 50 rounded - lg p - 6">;
                  <div className="flex items - center mb - 4">;
                    <Mail className="w - 5 h - 5 text - blue - 600 mr - 3" />;
                    <span > kleber@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items - center mb - 4">;
                    <Phone className="w - 5 h - 5 text - blue - 600 mr - 3" />;
                    <span>+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items - start">;
                    <Users className="w - 5 h - 5 text - blue - 600 mr - 3 mt - 1" />;
                    <div>;
                      <p > Zion Tech Group</p>;
                      <p > 364 E Main St STE 1008</p>;
                      <p > Middletown, DE 19709</p>;
                    </div>;
                  </div>;
                </div>;
<p className="text - sm text - gray - 600 mt - 8">;
                  Last updated: January 2024;
                </p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
