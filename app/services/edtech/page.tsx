import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'edtech - Zion Tech Group',
  description: 'Professional edtech services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>edtech</h1>
      <p>Professional edtech services tailored to your business needs.</p>
    </div>
  );
}
