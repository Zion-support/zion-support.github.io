import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Globe, CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Information We Collect
                  </h2>
                  <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Business information (company name, job title, industry)</li>
                    <li>Communication records (emails, phone calls, support tickets)</li>
                    <li>Usage data (website visits, service interactions)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                    2. How We Use Your Information
                  </h2>
                  <p>We use the information we collect to provide, maintain, and improve our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Provide and deliver our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-cyan-400 mr-3" />
                    3. Information Sharing
                  </h2>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                    4. Data Security
                  </h2>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    5. Your Rights
                  </h2>
                  <p>You have certain rights regarding your personal information, including:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                    6. International Transfers
                  </h2>
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                    7. Changes to This Policy
                  </h2>
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                    8. Contact Us
                  </h2>
                  <p>If you have any questions about this privacy policy, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      Email: privacy@ziontechgroup.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      Phone: (302) 464-0950
                    </p>
                    <p className="flex items-center">
                      <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                      Website: ziontechgroup.com
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Your Privacy Matters
                  </h3>
                  <p className="text-gray-300">
                    We are committed to protecting your privacy and ensuring the security of your personal information. 
                    If you have any concerns or questions about how we handle your data, please don't hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PrivacyPage;