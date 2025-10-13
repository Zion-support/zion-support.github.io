'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const CareersPage = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, IT specialist, technology careers, remote work" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the future of AI and IT solutions. We're looking for passionate individuals to join our innovative team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Job Opening 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Senior AI Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                Lead the development of cutting-edge AI solutions and machine learning models.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  Full-time
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Remote
                </span>
              </div>
              <a
                href="mailto:careers@ziontechgroup.com?subject=Senior AI Engineer Application"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Apply Now →
              </a>
            </div>

            {/* Job Opening 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 mb-4">
                Build scalable web applications and APIs using modern technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  Full-time
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Remote
                </span>
              </div>
              <a
                href="mailto:careers@ziontechgroup.com?subject=Full Stack Developer Application"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Apply Now →
              </a>
            </div>

            {/* Job Opening 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                DevOps Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                Manage cloud infrastructure and implement CI/CD pipelines for our applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  Full-time
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Remote
                </span>
              </div>
              <a
                href="mailto:careers@ziontechgroup.com?subject=DevOps Engineer Application"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Apply Now →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Innovation
                </h3>
                <p className="text-gray-600">
                  Work on cutting-edge AI and IT projects that shape the future of technology.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🌍 Remote Work
                </h3>
                <p className="text-gray-600">
                  Enjoy the flexibility of remote work with a global team of experts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  📈 Growth
                </h3>
                <p className="text-gray-600">
                  Continuous learning opportunities and career advancement in a fast-growing company.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  💰 Competitive Benefits
                </h3>
                <p className="text-gray-600">
                  Competitive salary, health insurance, and other benefits for our team members.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <a
              href="mailto:careers@ziontechgroup.com?subject=General Application"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareersPage