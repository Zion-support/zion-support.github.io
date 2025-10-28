'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div>
      <Navigation />
      <main>
        <h1>Page Title</h1>
        <p>Page content goes here.</p>
      </main>
      <Footer />
    </div>
  );
}