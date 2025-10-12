import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and data protection practices." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left">
            <p className="text-gray-300 mb-6">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Personal information you provide when contacting us</li>
              <li>• Usage data to improve our services</li>
              <li>• Cookies and similar technologies for website functionality</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• To provide and improve our services</li>
              <li>• To communicate with you about our offerings</li>
              <li>• To comply with legal obligations</li>
            </ul>
            <p className="text-gray-300">
              We do not sell or share your personal information with third parties without your consent, except as required by law.
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

export default PrivacyPage
