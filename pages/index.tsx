import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered IT Services</title>
        <meta name="description" content="Leading provider of AI-powered IT services and solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="hero">
          <h1>Zion Tech Group</h1>
          <p>AI-Powered IT Services</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </main>
    </>
  );
}