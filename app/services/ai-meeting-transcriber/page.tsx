import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Meeting Transcriber - Zion Tech Group',
  description: 'Professional ai meeting transcriber services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Meeting Transcriber</h1>
      <p>Professional ai meeting transcriber services tailored to your business needs.</p>
    </div>
  );
}