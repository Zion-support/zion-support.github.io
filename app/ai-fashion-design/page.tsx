import { Helmet } from 'react-helmet-async';

export default function AifashiondesignPage() {
  return (
    <>
      <Helmet>
        <title>Ai Fashion Design - Zion Tech Group</title>
        <meta name="description" content="Professional ai fashion design solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Fashion Design</h1>
          <p className="text-lg text-gray-600">
            Professional ai fashion design solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
