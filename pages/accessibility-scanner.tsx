import React from 'react';
import Head from 'next/head';

export default function AccessibilityScanner() {
  return (
    <>
      <Head>
        <title>Accessibility Scanner - Zion Tech Group</title>
        <meta name="description" content="Scan your website for accessibility issues" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Accessibility Scanner</h1>
        <p className="text-lg mb-6">
          Our accessibility scanner helps identify and fix accessibility issues on your website.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>WCAG 2.1 compliance checking</li>
            <li>Color contrast analysis</li>
            <li>Keyboard navigation testing</li>
            <li>Screen reader compatibility</li>
          </ul>
        </div>
      </div>
    </>
  );
}