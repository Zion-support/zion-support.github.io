import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT solutions." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </div>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Go Back Home
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Or try one of these popular pages:</p>
              <div className="mt-2 space-x-4">
                <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
                <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
                <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact</div>
        </>
  )
  }
export default NotFoundPage
              </Link>
            </div>
          </div>
        </p>
      </div>
    </div>
  </meta>
</meta>