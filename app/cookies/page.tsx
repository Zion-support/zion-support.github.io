import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Our cookie usage and preferences." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-left">
            <p className="text-gray-300 mb-6">
              This website uses cookies to enhance your browsing experience and provide personalized content. 
              By continuing to use this site, you consent to our use of cookies.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Essential cookies for website functionality</li>
              <li>• Analytics cookies to understand user behavior</li>
              <li>• Marketing cookies for personalized content</li>
            </ul>
            <p className="text-gray-300">
              You can manage your cookie preferences through your browser settings or contact us for more information.
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

export default CookiesPage
