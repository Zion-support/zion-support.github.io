'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
const AutonomousSystemsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Autonomous Systems - Zion Tech Group</title>
        </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Autonomous <span>Systems</span>
            </h1>
            <p>Advanced autonomous systems solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AutonomousSystemsPage