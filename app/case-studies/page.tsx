"use client"

import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
          <p className="text-xl text-gray-600 mb-8">
            Real-world examples of our successful AI and IT implementations.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}