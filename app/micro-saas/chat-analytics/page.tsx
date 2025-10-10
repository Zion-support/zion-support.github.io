import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Settings, ArrowRight } from 'lucide-react'
const MicroSaaSPage: React.FC = () => {
    const serviceName = 'chat-analytics'
  const title = serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
return (
    <>,
      <Helmet>
  }
        <title>{title} | Zion Tech Group - Micro SaaS Solutions</title>
        <meta>
        <link>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-24 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Settings>
              <span>{title}</span>
            </div>
            <h1>
              {title} </h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Solution</span>
            </h1>
            <p>
              Powerful {title.toLowerCase()} micro SaaS solution designed for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>
                <span>Get Started</span>
                <ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">View Demo,
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We're developing powerful {title.toLowerCase()} solutions. Stay tuned for updates!</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default MicroSaaSPage;