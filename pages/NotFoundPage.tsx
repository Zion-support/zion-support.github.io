import React from 'react';import { Helmet } from 'react-helmet-async';

const NotFoundPage: "React.FC = () => {
  return (
    <>
      <Helmet>        <title>Page Not Found | Zion Tech Group</title>        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>      <div className="min-h-screen bg-gray-50 flex items-center justify-center">        <div className="text-center">          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>          <p className="text-xl text-gray-600">Page not found</p>
        </div>
      </div>
    </>
  );"};

export default NotFoundPage;
