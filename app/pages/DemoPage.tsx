import React from 'react'}
import { Helmet } from 'react-helmet-async'}

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Demo</h1>
            <p className="text-xl text-gray-300">
              Experience our solutions through interactive demos.
            </p>
          </div>
        </div>
      </div>
    </>}
)
}