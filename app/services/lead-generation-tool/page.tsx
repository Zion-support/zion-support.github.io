import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Generation Tool - Zion Tech Group',
  description: 'Professional lead generation tool services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Lead Generation Tool</h1>
      <p>Professional lead generation tool services tailored to your business needs.</p>
    </div>
  );
}