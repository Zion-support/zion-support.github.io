import React from 'react';
<<<<<<< HEAD

export default function API() {
	return (
		<div className="min-h-screen bg-background text-foreground py-16">
			<div className="container mx-auto px-4 max-w-3xl">
				<h1 className="text-3xl font-bold mb-4">API Reference</h1>
				<p className="text-muted-foreground">Developer documentation is coming soon.</p>
			</div>
		</div>
	);
}
=======
import { Helmet } from 'react-helmet-async';

const API: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description" content="Access Zion Tech Group's API documentation and integration guides for developers." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate with Zion Tech Group services using our comprehensive API documentation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              API documentation coming soon. We're building comprehensive integration guides.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default API;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
