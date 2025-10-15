import { Helmet } from 'react-helmet-async';

export default function DigitalTransformationPage() {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Digital Transformation</h1>
          <p className="text-lg text-gray-600">
            Transform your business with our comprehensive digital transformation services.
          </p>
        </div>
      </div>
    </>
  );
}