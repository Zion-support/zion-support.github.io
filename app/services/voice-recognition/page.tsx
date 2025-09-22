import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice Recognition - Zion Tech Group',
  description: 'Professional voice recognition services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Voice Recognition</h1>
      <p>Professional voice recognition services tailored to your business needs.</p>
    </div>
  );
}