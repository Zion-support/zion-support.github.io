import React from 'react'
import React from 'react';
import { Phone } from 'lucide-react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Phone } from 'lucide-react'

const Page: React.FC = () => {
  return (
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
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16"></section>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Service Coming Soon
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              This service is currently under development
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              We're working hard to bring you this amazing service. Contact us to learn more about our development timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us
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
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
    </>
  )
}

export default Page
