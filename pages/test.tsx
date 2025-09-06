import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
import Head from 'next/head';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import Layout from '../components/Layout';

export default function TestPage() {
  return (
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
  );
<<<<<<< HEAD
}
>>>>>>> origin/main
export default function TestPage() {
=======
}export default function TestPage() {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  return (
<<<<<<< HEAD
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>
=======
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
<<<<<<< HEAD
>>>>>>> origin/main
  );
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
=======
  );      <div className="min-h-screen bg-black text-white flex items-center justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> origin/main
