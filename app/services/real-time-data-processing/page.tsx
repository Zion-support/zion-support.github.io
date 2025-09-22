import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Time Data Processing - Zion Tech Group',
  description: 'Professional real time data processing services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Real Time Data Processing</h1>
      <p>Professional real time data processing services tailored to your business needs.</p>
    </div>
  );
}