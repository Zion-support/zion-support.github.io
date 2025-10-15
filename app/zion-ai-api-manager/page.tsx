import { Helmet } from 'react-helmet-async';

export default function ZionAiApiManagerPage() {
  return (
    <>
      <Helmet>
        <title>Zion Ai Api Manager - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai api manager solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Zion Ai Api Manager</h1>
          <p className="text-lg text-gray-600">
            Professional zion ai api manager solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
