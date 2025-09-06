import React from 'react';
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

export default function TestPage() {
=======
}export default function TestPage() {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  return (
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>
<<<<<<< HEAD
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
