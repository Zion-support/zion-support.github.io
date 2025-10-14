import React from 'react''
import { Helmet } from 'react-helmet-async'
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>"
        <meta name="description" content="Professional ad management services by Zion Tech Group. Expert digital advertising solutions and campaign optimization." />"
        <meta name="keywords" content="ad management, digital advertising, campaign optimization, ad analytics" />
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-8">
            Ad Management
          </h1>"
          <p className="text-xl text-gray-300 mb-8">
            Professional ad management solutions tailored to your business needs.
          </p>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-500/20 border border-blue-200/30 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-white mb-2">
                Expert Solutions
              </h3>"
              <p className="text-gray-300">
                Our team of experts delivers cutting-edge ad management solutions.
              </p>
            </div>"
            <div className="bg-green-500/20 border border-green-200/30 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Implementation
              </h3>"
              <p className="text-gray-300">
                Tailored ad management implementations for your specific requirements.
              </p>
            </div>"
            <div className="bg-purple-500/20 border border-purple-200/30 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-white mb-2">
                24/7 Support
              </h3>"
              <p className="text-gray-300">
                Round-the-clock support for all your ad management needs.
              </p>
            </div>
          </div>"
          <div className="mt-12">"
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}'"