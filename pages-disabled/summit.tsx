import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
export default function Summit() {
  return (
    <Layout>
      <Head>
        <title>Zion Global Summit 2025 | Zion Tech Group</title>
        <meta name="description" content="Join us at the Zion Global Summit 2025 for the latest in technology and innovation." />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Zion Global Summit 2025</h1>
          <p className="text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </Layout>
  )
}