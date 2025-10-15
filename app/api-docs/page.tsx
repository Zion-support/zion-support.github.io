import { Helmet } from 'react-helmet-async';

export default function APIDocsPage() {
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">API Documentation</h1>
          <p className="text-lg text-gray-600">
            Comprehensive API documentation for integrating with our services.
          </p>
        </div>
      </div>
    </>
  );
}