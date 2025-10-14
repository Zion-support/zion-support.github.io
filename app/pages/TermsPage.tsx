import React from 'react'
import { Helmet } from 'react-helmet-async'
const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Please read these terms of service carefully before using our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="text-gray-700 mb-6">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at support@ziontechgroup.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TermsPage