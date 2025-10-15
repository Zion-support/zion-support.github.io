import { Helmet } from 'react-helmet-async';

export default function PartnershipsPage() {
  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group</title>
        <meta name="description" content="Partner with us to deliver exceptional technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Partnerships</h1>
          <p className="text-lg text-gray-600">
            Partner with us to deliver exceptional technology solutions to your clients.
          </p>
        </div>
      </div>
    </>
  );
}