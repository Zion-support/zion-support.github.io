import React from 'react';
<<<<<<< HEAD
export default function Page() {
  return (
    <div className='min-h-[60vh] px-6 py-24'>
      <SEO
        title='AI Creativity Studio | Zion Tech Group'
        description='AI tools for creative workflows'
      />
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          AI Creativity Studio
        </h1>
        <p className='text-gray-300'>
          Creative automation tools for content, video, and design. Details
          coming soon.
        </p>
      </div>
    </div>
  );
=======
import Head from 'next/head';

export default function AICreativityStudioPage() {
  return (
    <div className="min-h-[60vh] px-6 py-24">
      <Head>
        <title>AI Creativity Studio | Zion Tech Group</title>
        <meta name="description" content="AI tools for creative workflows" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Creativity Studio</h1>
        <p className="text-gray-300">Creative automation tools for content, video, and design. Details coming soon.</p>
      </div>
    </div>
  );
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
