import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperEmail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Email Whitepaper - AI Generated</title>
        <meta name="description" content="Email AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Email Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Recipient Email</label>
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter email subject..."
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Enter email message..."
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}