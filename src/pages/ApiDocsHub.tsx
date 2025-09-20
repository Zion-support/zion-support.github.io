import React from 'react';
<<<<<<< HEAD

export default function ApiDocsHub() {
return (
<div className="min-h-screen bg-zion-blue">
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-white mb-6">API Documentation Hub</h1>
<p className="text-zion-slate-light">
Welcome to the API documentation hub. Here you'll find comprehensive guides and references for our APIs.
</p>
</div>
</div>
);
=======
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';

export default function ApiDocsHub() {
  return (
    <>
      <SEO title="API Documentation Hub" description="Comprehensive API documentation for developers" />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              API Documentation Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive API documentation for developers to integrate with our services.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <p className="text-gray-600">
                API documentation is coming soon. Please check back later for detailed integration guides.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
>>>>>>> pr-22690
}