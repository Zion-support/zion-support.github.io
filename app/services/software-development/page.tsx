import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Development - Zion Tech Group',
  description: 'Professional software development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Software Development</h1>
      <p>Professional software development services tailored to your business needs.</p>
    </div>
  );
}