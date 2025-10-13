import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserIcon,
  CogIcon
} from '@heroicons/react/24/outline'
export default function PrivacyPage() {
  const lastUpdated = "January 15, 2024"

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, privacy rights" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-lg text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Commitment to Privacy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
                <p className="text-gray-300">
                  We implement industry-standard security measures to protect your data from unauthorized access.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transparency</h3>
                <p className="text-gray-300">
                  We are transparent about what data we collect and how we use it to provide our services.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LockClosedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Your Control</h3>
                <p className="text-gray-300">
                  You have control over your personal information and can manage your privacy preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-8">Information We Collect</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <UserIcon className="w-6 h-6 text-purple-400" />
                  Personal Information
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Name, email address, and phone number when you contact us</li>
                  <li>• Company information and job title for business inquiries</li>
                  <li>• Billing and payment information for service subscriptions</li>
                  <li>• Communication preferences and support history</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CogIcon className="w-6 h-6 text-cyan-400" />
                  Technical Information
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• IP address and device information for security purposes</li>
                  <li>• Website usage data and analytics to improve our services</li>
                  <li>• Cookies and similar technologies for functionality and personalization</li>
                  <li>• System logs and error reports for troubleshooting</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Service Delivery</h3>
                  <p className="text-gray-300">
                    We use your information to provide, maintain, and improve our AI and IT services, 
                    process transactions, and communicate with you about your account.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Communication</h3>
                  <p className="text-gray-300">
                    We may contact you about service updates, security alerts, support requests, 
                    and marketing communications (with your consent).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
                  <p className="text-gray-300">
                    We use your information to ensure the security of our services, comply with 
                    legal obligations, and protect against fraud and abuse.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">Data Sharing and Disclosure</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal obligations or court orders</li>
                  <li>• To protect our rights, property, or safety, or that of our users</li>
                  <li>• With trusted service providers who assist us in operating our business</li>
                  <li>• In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">Data Security</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Security Measures</h3>
                  <p className="text-gray-300">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Data Encryption</h3>
                  <p className="text-gray-300">
                    All data is encrypted in transit and at rest using industry-standard encryption protocols. 
                    We regularly review and update our security practices.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">Your Rights</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• <strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li>• <strong>Rectification:</strong> Correct inaccurate or incomplete personal information</li>
                  <li>• <strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li>• <strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li>• <strong>Restriction:</strong> Limit how we process your personal information</li>
                  <li>• <strong>Objection:</strong> Object to certain types of processing</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">Cookies and Tracking</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 mb-8">
                <p className="text-gray-300 mb-6">
                  We use cookies and similar technologies to enhance your experience on our website. 
                  You can control cookie preferences through your browser settings.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Essential Cookies</h4>
                    <p className="text-gray-300">Required for basic website functionality and security.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h4>
                    <p className="text-gray-300">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h4>
                    <p className="text-gray-300">Used to deliver relevant advertisements and track campaign performance.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1-302-464-0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're here to help you understand and exercise your privacy rights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/contact"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}