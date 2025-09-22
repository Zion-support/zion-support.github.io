import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Professional services services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Services</h1>
      <p>Professional services services tailored to your business needs.</p>
    </div>
  );
}