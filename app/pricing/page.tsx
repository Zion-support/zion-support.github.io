import { Helmet } from 'react-helmet-async';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="View our competitive pricing for AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>
          <p className="text-lg text-gray-600">
            Competitive pricing for all our services.
          </p>
        </div>
      </div>
    </>
  );
}