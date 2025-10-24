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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16"></section>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Email Marketing
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Transform your email marketing with AI-powered content generation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Coming soon - Advanced AI email marketing automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Notified
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
      </div>
    </>
  )
}

export default AIEmailMarketingPage
