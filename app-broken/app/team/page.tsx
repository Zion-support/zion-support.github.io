'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions.&quot; />
      </Helmet>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
        <Navigation />
        <main className=&quot;pt-20&quot;>
          <div className=&quot;container mx-auto px-4 py-16&quot;></div>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-5xl font-bold text-gray-900 mb-8&quot;>
                Our Team</h1>
              </h1>
              <div className=&quot;prose prose-lg max-w-none&quot;></div>
                <p className=&quot;text-xl text-gray-600 mb-8&quot;>
                  Meet the experts behind our success.
                </p>
                <p className=&quot;text-gray-700 mb-6&quot;>
                  Coming soon - stay tuned to meet our team!
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default TeamPage