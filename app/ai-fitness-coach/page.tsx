import { Helmet } from 'react-helmet-async';

export default function AifitnesscoachPage() {
  return (
    <>
      <Helmet>
        <title>Ai Fitness Coach - Zion Tech Group</title>
        <meta name="description" content="Professional ai fitness coach solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Fitness Coach</h1>
          <p className="text-lg text-gray-600">
            Professional ai fitness coach solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
