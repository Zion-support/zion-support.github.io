import { Helmet } from 'react-helmet-async';

export default function NetworkInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Robust network infrastructure solutions for reliable connectivity." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Network Infrastructure</h1>
          <p className="text-lg text-gray-600">
            Robust network infrastructure solutions for reliable business connectivity.
          </p>
        </div>
      </div>
    </>
  );
}