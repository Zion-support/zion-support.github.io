import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
export default function SpaceTechPage() {
  return (
    <Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta name="description" content="Advanced space technology solutions and services" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Space Technology
            </h1>
            <p className="text-xl text-gray-600">
              Space technology page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
