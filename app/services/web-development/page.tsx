import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development - Zion Tech Group',
  description: 'Professional web development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Web Development</h1>
      <p>Professional web development services tailored to your business needs.</p>
    </div>
  );
}