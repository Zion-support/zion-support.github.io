import React from 'react'
import Head from 'next/head'
export default function TestPage() {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231