import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Users, Target, Award } from "lucide-react"

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company dedicated to transforming businesses through innovative AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative AI and IT solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
              <p className="text-gray-300">Expert professionals with years of experience in AI and IT</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
              <p className="text-gray-300">To empower businesses with cutting-edge technology solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
              <p className="text-gray-300">To be the global leader in AI-powered business transformation</p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default AboutPage
