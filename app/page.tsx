import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
};

export default function Home() {
  return (
    <div>
      <h1>Welcome to Zion Tech Group</h1>
      <p>Your AI-powered technology solutions partner.</p>
    </div>
  );
}