import React from 'react'
import React from 'react';
import { Phone } from 'lucide-react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Phone } from 'lucide-react'

const AIEmailMarketingPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
=======
    <>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          <section className=&quot;text-center mb-16&quot;></section>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
              AI Email Marketing
            </h1>
            <p className=&quot;text-xl text-cyan-400 mb-8&quot;>
              Transform your email marketing with AI-powered content generation
            </p>
            <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Coming soon - Advanced AI email marketing automation platform.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Get Notified
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}

export default AIEmailMarketingPage
