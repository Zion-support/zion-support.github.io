'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const TeamPage: React.FC = () =>{
  return (
    <React.Fragment&gt; <Helmet&gt; <title&gt;Our Team - Zion Tech Group</title&gt; <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, technology, and business solutions." />
      </Helmet&gt; <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div&gt; <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div&gt; <div className="max-w-4xl mx-auto"></div&gt; <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Team</h1&gt; </h1&gt; <div className="prose prose-lg max-w-none"></div&gt; <p className="text-xl text-gray-600 mb-8">Meet the experts behind our success.
                </p&gt; <p className="text-gray-700 mb-6">Coming soon - stay tuned to meet our team!
                </p&gt; </div&gt; </div&gt; </div&gt; </main&gt; <Footer />
      </div&gt; </React.Fragment>}
export default TeamPage