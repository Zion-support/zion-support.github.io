import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms and conditions for our services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left">
            <p className="text-gray-300 mb-6">
              These terms and conditions govern your use of our services and website. By using our services, you agree to these terms.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Service Usage</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• You may use our services for lawful purposes only</li>
              <li>• You are responsible for maintaining the confidentiality of your account</li>
              <li>• You agree not to misuse our services or attempt to gain unauthorized access</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
            <p className="text-gray-300">
              These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsPage
