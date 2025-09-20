import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Automation - Zion Holdings",
  description: "Intelligent automation solutions for your business"
}



export default function AutomationPage() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Automation</h1>
          <p className="text-xl text-gray-300">
            Streamline your business processes with automation.
          </p>
        </div>
      </div>
    </div>
  )
}