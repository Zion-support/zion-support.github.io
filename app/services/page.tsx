import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services</title>
        <meta name="description" content="Discover our comprehensive AI and IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive AI and IT solutions
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700">
                This page is currently under development. Please check back later for more content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}