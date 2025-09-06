import React from 'react',;
import Head from 'next/head',;
;
export default function ApiDocsPage() {;
  return (;
    <>;
      <Head>;
        <title>API Docs | Zion Tech Group</title>;
        <meta name="description" content="API reference and guides." />;
        <link rel="canonical" href="https://ziontechgroup.com/api-docs" />;
      </Head>;
      <div className="container mx-auto px-4 py-16 text-gray-200">;
        <h1 className="text-4xl md:text-6xl font-bold mb-4">API Docs</h1>;
        <p className="text-gray-300">See <a href="/api-docs" className="text-cyan-400 underline">API Documentation</a> for the full reference.</p>;
      </div>;
    </>;
  );}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function APIDocsPage() {
  return (
    <Layout 
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for all our services"
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for all our services
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
 <> <Head> <title>API Docs | Zion Tech Group</title> </Head> <div className="container mx-auto px-4 py-16 text-gray-200" > <h1 className="text-4xl md:text-6xl font-bold mb-4" >API Docs</h1> <p className="text-gray-300" >See <a href="/api-docs" className="text-cyan-400 underline" >API Documentation</Link> for the full reference.</p> </div> </> 
