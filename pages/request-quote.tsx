import React from 'react';
import Head from 'next/head';

const RequestQuotePage = () => {
  return (
    <>
      <Head>
        <title>Request a Quote - Zion Tech Group</title>
        <meta name="description" content="Request a custom quote for your project." />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Request a Quote</h1>
        <p className="text-gray-600 mb-8">Tell us about your project and our team will get back to you with a tailored proposal.</p>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-gray-600">Contact form will be implemented here.</p>
        </div>
      </main>
    </>
  );
};

export default RequestQuotePage;