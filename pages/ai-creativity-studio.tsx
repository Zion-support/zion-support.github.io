import React from 'react';
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