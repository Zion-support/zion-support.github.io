import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Settings, Zap, Users, BarChart3, Shield, Database } from 'lucide-react'

export default function DevOpsCICDPage() {
  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      title: 'Automated CI/CD',
      description: 'Streamline your development workflow with automated continuous integration and deployment pipelines.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Fast Deployment',
      description: 'Deploy code changes quickly and safely with automated testing and rollback capabilities.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Collaboration',
      description: 'Improve collaboration between development and operations teams with shared tools and processes.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Monitor application performance and infrastructure health with comprehensive dashboards.'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Security Integration',
      description: 'Integrate security testing and compliance checks into your CI/CD pipeline.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency, version control, and automation.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DevOps & CI/CD Services - Zion Tech Group</title>
        <meta name="description" content="Accelerate your development with DevOps and CI/CD services. Automated deployment, monitoring, and infrastructure management." />
        <meta name="keywords" content="DevOps services, CI/CD, continuous integration, continuous deployment, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              DevOps & CI/CD Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Accelerate your development with automated CI/CD pipelines, infrastructure management, 
              and comprehensive monitoring solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to modernize your development workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your development process with our DevOps and CI/CD solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}