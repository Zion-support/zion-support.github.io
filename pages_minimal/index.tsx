import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Advanced IT Solutions & AI Services</p>
        <Link href="/services">View Our Services</Link>
      </main>
    </div>
  );
}
,