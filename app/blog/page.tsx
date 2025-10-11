import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, IT services, and digital transformation." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest insights on AI, IT services, and digital transformation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage