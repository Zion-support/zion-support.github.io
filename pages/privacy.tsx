import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <>
      <SEOHead
        title="Privacy Policy - Zion Tech Group | Data Protection & Privacy"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices and your rights."
        keywords="privacy policy, data protection, GDPR, privacy rights, data security, Zion Tech Group privacy"
        canonical="https://ziontechgroup.com/privacy"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl w-fit mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Transparency</h3>
                  <p className="text-gray-300">We're transparent about what data we collect and how we use it.</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl w-fit mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                  <p className="text-gray-300">Your data is protected with enterprise-grade security measures.</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Control</h3>
                  <p className="text-gray-300">You have control over your data and can manage your privacy settings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment and billing information</li>
                    <li>Communications with our support team</li>
                    <li>Feedback and survey responses</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Usage Information</h3>
                  <p className="text-gray-300 mb-4">
                    We automatically collect certain information about your use of our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Device information and IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our services</li>
                    <li>API usage and performance metrics</li>
                    <li>Error logs and crash reports</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze usage and trends</li>
                    <li>Detect, investigate, and prevent security incidents</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To service providers who assist us in operating our services</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
                  
                  <p className="text-gray-300 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar technologies to enhance your experience and analyze usage. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">7. Data Retention</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We retain your personal information for as long as necessary to provide our services 
                    and fulfill the purposes outlined in this policy, unless a longer retention period is 
                    required by law.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">8. International Transfers</h2>
                  
                  <p className="text-gray-300 mb-4">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">9. Children's Privacy</h2>
                  
                  <p className="text-gray-300 mb-4">
                    Our services are not intended for children under 13. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">10. Changes to This Policy</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any 
                    material changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                      privacy@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;