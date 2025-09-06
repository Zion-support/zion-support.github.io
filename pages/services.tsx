import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore the advanced IT and AI services offered by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Advanced Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            At Zion Tech Group, we offer a comprehensive suite of IT and AI services designed to propel your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">
                Harness the power of artificial intelligence for automation, data analysis, and intelligent decision-making.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">
                Scalable and secure cloud infrastructure, migration, and management services.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Web & Mobile Development</h3>
              <p className="text-gray-400">
                Crafting modern, responsive, and high-performance web and mobile applications.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-gray-400">
                Robust security solutions to protect your digital assets from evolving threats.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-gray-400">
                Transforming raw data into actionable insights for strategic business growth.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">IT Consulting</h3>
              <p className="text-gray-400">
                Expert guidance and strategic planning to optimize your technology landscape.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </main>
      </div>
    </>
  );
}