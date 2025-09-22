import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Services - Zion Tech Group',
  description: 'Professional cloud services services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cloud Services</h1>
      <p>Professional cloud services services tailored to your business needs.</p>
    </div>
  );
}