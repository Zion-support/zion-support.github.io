import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperCollaborate() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Collaborate - AI Generated</title>
        <meta name="description" content="Collaborate on AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Collaborate</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Invite Collaborators</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <select className="w-full border rounded-lg px-3 py-2">
                    <option>Editor</option>
                    <option>Viewer</option>
                    <option>Commenter</option>
                  </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Send Invitation
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Current Collaborators</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">john@example.com</p>
                    <p className="text-sm text-gray-600">Editor</p>
                  </div>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">jane@example.com</p>
                    <p className="text-sm text-gray-600">Viewer</p>
                  </div>
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}