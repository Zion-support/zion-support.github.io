import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Dashboard - Zion Tech Group',
  description: 'Professional analytics dashboard services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <p>Professional analytics dashboard services tailored to your business needs.</p>
    </div>
  );
}