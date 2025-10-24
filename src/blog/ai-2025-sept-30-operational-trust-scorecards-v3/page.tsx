import React from 'react';

const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <div className="text-gray-600 mb-6">
            <p>This blog post is under construction and will be available soon.</p>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700">
              We are working hard to bring you valuable content. Please check back later.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PagePage;