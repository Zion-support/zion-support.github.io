import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperReview() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Review - AI Generated</title>
        <meta name="description" content="Review AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Review Whitepaper</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Review Criteria</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Content Quality</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-100"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Clarity</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-100"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Accuracy</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-100"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Overall Feedback</h2>
              <textarea
                rows={6}
                placeholder="Enter your overall feedback..."
                className="w-full border rounded-lg px-3 py-2"
              ></textarea>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Improve introduction</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Add more examples</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Fix grammar issues</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Enhance conclusion</span>
                </label>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}