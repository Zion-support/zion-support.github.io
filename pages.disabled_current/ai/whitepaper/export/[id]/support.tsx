import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperSupport() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Support - AI Generated</title>
        <meta name="description" content="Support for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Support</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">How do I export my whitepaper?</h3>
                  <p className="text-gray-600">You can export your whitepaper in multiple formats including PDF, Word, and Markdown. Use the export options in the toolbar.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Can I collaborate with others?</h3>
                  <p className="text-gray-600">Yes, you can invite collaborators to view, comment, or edit your whitepaper. Use the collaborate feature to manage permissions.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">How do I share my whitepaper?</h3>
                  <p className="text-gray-600">You can share your whitepaper via direct link, social media, or embed it on your website. All sharing options are available in the share menu.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter subject..."
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your issue..."
                    className="w-full border rounded-lg px-3 py-2"
                  ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}