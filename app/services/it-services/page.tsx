import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'It Services - Zion Tech Group',
  description: 'Professional it services services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>It Services</h1>
      <p>Professional it services services tailored to your business needs.</p>
    </div>
  );
}