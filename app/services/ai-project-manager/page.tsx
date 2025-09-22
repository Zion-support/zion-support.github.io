import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Project Manager - Zion Tech Group',
  description: 'Professional AI project management services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Project Manager</h1>
      <p>Professional AI project management services tailored to your business needs.</p>
    </div>
  );
}