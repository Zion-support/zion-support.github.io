import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cloud Infrastructure</h1>
          <p className="text-lg text-gray-600">
            Scalable cloud infrastructure solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </>
  );
}