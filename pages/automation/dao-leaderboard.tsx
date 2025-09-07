import React from 'react';
import Head from 'next/head';

export default function DaoLeaderboard() {
  return (
    <>
      <Head>
        <title>dao-leaderboard | Zion Tech Group</title>
        <meta name="description" content="dao-leaderboard page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              dao-leaderboard
            </h1>
            <p className="text-xl text-gray-600">
              This is the dao-leaderboard page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}