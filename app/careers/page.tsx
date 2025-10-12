import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Code, Brain, Shield } from "lucide-react"

const CareersPage = () => {
  const positions = [
    {
      title: "AI Engineer",
      department: "Engineering",
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      icon: <Code className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      icon: <Shield className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Be part of the future of technology. Join our team of AI and IT experts working on cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${position.color} flex items-center justify-center mb-6 mx-auto`}>
                  {position.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{position.title}</h3>
                <p className="text-gray-300 text-center mb-4">{position.department}</p>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${position.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
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

export default CareersPage
