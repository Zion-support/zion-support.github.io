import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperWebhook() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Webhook Configuration - AI Generated</title>
        <meta name="description" content="Configure webhooks for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Webhook Configuration</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Webhook URL</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Endpoint URL</label>
                  <input
                    type="url"
                    placeholder="https://your-domain.com/webhook"
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Secret Key</label>
                  <input
                    type="text"
                    placeholder="Enter secret key..."
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Save Webhook
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Webhook Events</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Whitepaper Generated</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Whitepaper Updated</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Whitepaper Deleted</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Export Completed</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}