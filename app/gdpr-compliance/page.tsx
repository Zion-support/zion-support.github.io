import React from 'react'

import Layout from '../layout'

const GDPRCompliancePage: React.FC = () => {
  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Learn about Zion Tech Group's commitment to GDPR compliance and data protection."
      keywords="GDPR compliance, data protection, privacy rights, EU data protection, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300">
              Our commitment to data protection and privacy rights
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">What is GDPR?</h2>
              <p className="text-gray-300 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect 
                on May 25, 2018, in the European Union. It strengthens and unifies data protection for individuals within 
                the EU and addresses the export of personal data outside the EU.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group is committed to protecting the privacy and personal data of our users. We have implemented 
                comprehensive measures to ensure GDPR compliance:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Data minimization and purpose limitation</li>
                <li>• Transparent data processing practices</li>
                <li>• Strong security measures to protect personal data</li>
                <li>• Regular privacy impact assessments</li>
                <li>• Data breach notification procedures</li>
                <li>• User rights implementation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">Under GDPR, you have the following rights:</p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>Right to Access:</strong> Request copies of your personal data</li>
                <li>• <strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li>• <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li>• <strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li>• <strong>Right to Object:</strong> Object to processing of your personal data</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about our GDPR compliance or wish to exercise your rights, please contact us:
              </p>
              <div className="text-gray-300">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GDPRCompliancePage