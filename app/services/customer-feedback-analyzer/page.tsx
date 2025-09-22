import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Feedback Analyzer - Zion Tech Group',
  description: 'Professional customer feedback analyzer services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Customer Feedback Analyzer</h1>
      <p>Professional customer feedback analyzer services tailored to your business needs.</p>
    </div>
  );
}