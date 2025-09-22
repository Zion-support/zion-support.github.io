import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Management Suite - Zion Tech Group',
  description: 'Professional project management suite services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Project Management Suite</h1>
      <p>Professional project management suite services tailored to your business needs.</p>
    </div>
  );
}