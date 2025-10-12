import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "E-commerce AI Optimization",
      description: "Increased conversion rates by 40% using AI-powered product recommendations",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Healthcare Data Analytics",
      description: "Reduced patient wait times by 60% through intelligent scheduling systems",
      icon: <Users className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Manufacturing Automation",
      description: "Improved production efficiency by 35% with smart automation solutions",
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementations." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our successful AI and IT implementations that have transformed businesses across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center mb-6 mx-auto`}>
                  {study.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{study.title}</h3>
                <p className="text-gray-300 text-center">{study.description}</p>
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

export default CaseStudiesPage
