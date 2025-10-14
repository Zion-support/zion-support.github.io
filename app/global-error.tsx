import React from "react"
import { Helmet } from "react-helmet-async"
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to excellence in AI and IT solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions, 
            committed to delivering excellence and innovation to our clients.
          </p>
        </div>
      </div>
    </div>
  )}
export default AboutPage