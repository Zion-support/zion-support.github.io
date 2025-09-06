import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn more about Zion Tech Group, our mission, and our vision for the future of technology." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a pioneering technology company dedicated to delivering advanced IT solutions and cutting-edge AI services. Our mission is to empower businesses with innovative technology that drives growth, efficiency, and competitive advantage.
          </p>
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">Our Vision</h2>
            <p className="text-lg text-gray-200">
              To be a global leader in technological innovation, creating a future where AI and advanced IT seamlessly integrate to solve complex challenges and unlock unprecedented opportunities for humanity.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Join Our Journey
          </Link>
        </main>
      </div>
    </>
  );
}