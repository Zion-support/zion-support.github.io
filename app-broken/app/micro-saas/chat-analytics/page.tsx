import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Settings, ArrowRight } from 'lucide-react'
const MicroSaaSPage: React.FC = () => {
  const serviceName = 'chat-analytics'
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return (
    <>
      <Helmet>
        <title>{title} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta name="description" content={`Powerful ${title.toLowerCase()} micro SaaS solution for modern businesses.`} />
        <link rel="canonical" href={`https://ziontechgroup.com/micro-saas/${serviceName}`} />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings className="w-4 h-4" />
              <span>{title}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
              {title} </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Solution</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Demo
              </button>

            </div>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're developing powerful {title.toLowerCase()} solutions. Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default MicroSaaSPage
</button>