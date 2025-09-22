import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Development - Zion Tech Group',
  description: 'Professional mobile development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Mobile Development</h1>
      <p>Professional mobile development services tailored to your business needs.</p>
    </div>
  );
}