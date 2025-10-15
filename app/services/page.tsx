import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a wide range of AI and IT services to help your business grow.
          </p>
        </div>
      </div>
    </>
  );
}