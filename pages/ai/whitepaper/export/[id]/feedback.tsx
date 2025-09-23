import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperFeedback() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Feedback - AI Generated</title>
        <meta name="description" content="Feedback for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Feedback</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Rate Your Experience</h2>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-100 text-xl"
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">What did you like most?</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Content quality</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Ease of use</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Export options</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>AI accuracy</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">What could be improved?</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Content generation speed</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>User interface</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Export formats</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Customization options</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Additional Comments</h2>
              <textarea
                rows={4}
                placeholder="Share any additional feedback..."
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}