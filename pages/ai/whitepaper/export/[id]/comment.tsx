import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperComment() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Comments - AI Generated</title>
        <meta name="description" content="Comments for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Comments</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Add Comment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Comment</label>
                  <textarea
                    rows={4}
                    placeholder="Enter your comment..."
                    className="w-full border rounded-lg px-3 py-2"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Section</label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Introduction</option>
                    <option>Methodology</option>
                    <option>Results</option>
                    <option>Conclusion</option>
                  </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Add Comment
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                  <p className="text-gray-700">Great work on the methodology section! Very clear and well-structured.</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-blue-500 hover:text-blue-700">Reply</button>
                    <button className="text-green-500 hover:text-green-700">Like</button>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                  <p className="text-gray-700">Could you add more details about the data collection process?</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-blue-500 hover:text-blue-700">Reply</button>
                    <button className="text-green-500 hover:text-green-700">Like</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}