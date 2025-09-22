import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computer Vision Solutions - Zion Tech Group',
  description: 'Professional computer vision solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Computer Vision Solutions</h1>
      <p>Professional computer vision solutions services tailored to your business needs.</p>
    </div>
  );
}