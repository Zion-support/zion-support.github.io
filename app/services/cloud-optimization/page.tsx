import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Optimization - Zion Tech Group',
  description: 'Professional cloud optimization services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cloud Optimization</h1>
      <p>Professional cloud optimization services tailored to your business needs.</p>
    </div>
  );
}