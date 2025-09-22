import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Database Optimization - Zion Tech Group',
  description: 'Professional database optimization services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Database Optimization</h1>
      <p>Professional database optimization services tailored to your business needs.</p>
    </div>
  );
}