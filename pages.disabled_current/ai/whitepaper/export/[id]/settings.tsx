import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WhitepaperSettings() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Settings - AI Generated</title>
        <meta name="description" content="Settings for AI generated whitepaper" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Whitepaper Settings</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Visibility</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="visibility" value="public" className="mr-2" defaultChecked />
                  <span>Public - Anyone can view</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="visibility" value="unlisted" className="mr-2" />
                  <span>Unlisted - Only with link</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="visibility" value="private" className="mr-2" />
                  <span>Private - Only you</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Access Control</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Require login to view</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Allow comments</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Allow sharing</span>
                </label>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Export Options</h2>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Allow PDF export</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Allow Word export</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span>Allow Markdown export</span>
                </label>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}