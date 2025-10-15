import { Helmet } from 'react-helmet-async';

export default function DevopsadvancedPage() {
  return (
    <>
      <Helmet>
        <title>Devops Advanced - Zion Tech Group</title>
        <meta name="description" content="Professional devops advanced solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Devops Advanced</h1>
          <p className="text-lg text-gray-600">
            Professional devops advanced solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
