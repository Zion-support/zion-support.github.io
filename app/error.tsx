import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'



const Error Page: React.FC = () => {
  return (
    <>
      <div>
      <Helmet>
<title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred" />
      </Helmet>
      <div className="min-h-screen bg-gray-50flexitems-center justify-center">
        
        <div className="text-center">
        
          <h1 className="text-4xlfont-boldtext-gray-900mb-4">Something went wrong</h1>
          <p className="text-gray-600">Please try again later.</p>
          </div>
      </div>
    </>
  )
  }
  )
export default Error;; Page