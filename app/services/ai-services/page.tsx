import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Services - Zion Tech Group',
  description: 'Professional ai services services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Services</h1>
      <p>Professional ai services services tailored to your business needs.</p>
    </div>
  );
}