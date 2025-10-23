'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const CookiesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cookie Policy - Zion Tech Group</title>
        </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1>Cookie Policy</h1>
              </h1>
              <div className="prose prose-lg max-w-none"></div>
                <p>Last updated: {new Date().toLocaleDateString()}
                </p>
                <h2>What Are Cookies</h2>
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                </p>
                <h2>How We Use Cookies</h2>
                <p>We use cookies to improve your experience on our website, analyze site traffic, and personalize content.
                </p>
                <h2>Managing Cookies</h2>
                <p>You can control and/or delete cookies as you wish through your browser settings.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer> </Footer>div>
    </>
  )
}
export default CookiesPage