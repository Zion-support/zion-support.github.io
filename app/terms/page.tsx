'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const TermsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Service Availability</h2>
                <p className="text-gray-300 mb-6">
                  We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">4. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Maintaining the confidentiality of their account information</li>
                  <li>All activities that occur under their account</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for any unlawful or prohibited purpose</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property</h2>
                <p className="text-gray-300 mb-6">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. Privacy Policy</h2>
                <p className="text-gray-300 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">8. Revisions</h2>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. Governing Law</h2>
                <p className="text-gray-300 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">10. Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 mb-2">Email: legal@ziontechgroup.com</p>
                  <p className="text-gray-300 mb-2">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-300">Address: San Francisco, CA, United States</p>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <p className="text-sm text-gray-400">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions or concerns about these terms, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default TermsPage;