import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Api Development - Zion Tech Group',
  description: 'Professional api development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Api Development</h1>
      <p>Professional api development services tailored to your business needs.</p>
    </div>
  );
}