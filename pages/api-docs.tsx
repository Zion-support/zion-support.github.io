import React from 'react';
import Head from 'next/head';

export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;API reference and guides.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/api-docs&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-16 text-gray-200&quot;>
        <h1 className=&quot;text-4xl md:text-6xl font-bold mb-4&quot;>API Docs</h1>
        <p className=&quot;text-gray-300&quot;>See <a href=&quot;/api-docs&quot; className=&quot;text-cyan-400 underline&quot;>API Documentation</Link> for the full reference.</p>
      </div>
    </>
  );
}