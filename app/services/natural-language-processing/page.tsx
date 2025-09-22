import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natural Language Processing - Zion Tech Group',
  description: 'Professional natural language processing services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Natural Language Processing</h1>
      <p>Professional natural language processing services tailored to your business needs.</p>
    </div>
  );
}