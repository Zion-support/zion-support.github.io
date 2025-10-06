import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Post(): React.JSX.Element {
  const { slug } = useParams();

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      <Helmet>
        <title>Post - Zion Website</title>
        <meta name='description' content='Read our latest blog post.' />
      </Helmet>

      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>Blog Post</h1>
          <p className='text-xl text-gray-600 mb-8'>Post slug: {slug}</p>

          <div className='bg-white rounded-lg shadow-lg p-8'>
            <p className='text-gray-600'>
              This is a placeholder for the blog post content. The actual
              content would be loaded based on the slug parameter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
