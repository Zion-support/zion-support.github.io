import React from 'react';
import { Shield, Lock, Eye, UserCheck, Download, Mail } from 'lucide-react';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            GDPR Compliance
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and data protection rights under the General Data Protection Regulation (GDPR).
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Your Rights Under GDPR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Access</h3>
                    <p className="text-gray-300 text-sm">Request a copy of your personal data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Rectification</h3>
                    <p className="text-gray-300 text-sm">Correct inaccurate personal data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Erasure</h3>
                    <p className="text-gray-300 text-sm">Request deletion of your data</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Download className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Portability</h3>
                    <p className="text-gray-300 text-sm">Transfer your data to another service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Object</h3>
                    <p className="text-gray-300 text-sm">Object to processing of your data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Right to Complain</h3>
                    <p className="text-gray-300 text-sm">Lodge a complaint with supervisory authority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">How to Exercise Your Rights</h2>
            <p className="text-gray-300 mb-4">
              To exercise any of your GDPR rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-white font-medium">Data Protection Officer</p>
              <p className="text-gray-300">Email: dpo@ziontechgroup.com</p>
              <p className="text-gray-300">Phone: +1 (302) 464-0950</p>
            </div>
          </div>

          <div className="cyber-card hologram-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Data Processing Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Legal Basis for Processing</h3>
                <p className="text-gray-300">We process your personal data based on legitimate interests, consent, and contractual necessity.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Retention</h3>
                <p className="text-gray-300">We retain your personal data only as long as necessary for the purposes outlined in our Privacy Policy.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Security</h3>
                <p className="text-gray-300">We implement appropriate technical and organizational measures to protect your personal data.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              For more detailed information, please read our full Privacy Policy.
            </p>
            <a 
              href="/privacy"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
