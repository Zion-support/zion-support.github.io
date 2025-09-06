<<<<<<< HEAD
import React from 'react';
import Layout from '../components/Layout';

export default function TestPage() {
  return (
    <Layout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </Layout>;
  );
}
=======
import React from 'react'
import Head from 'next/head'
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <h1 className='text-4xl font-bold text-cyan-400'>Test Page Working</h1>
      </div>
    </>;
);
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
