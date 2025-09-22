import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development - Zion Tech Group',
  description: 'Professional mobile app development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Mobile App Development</h1>
      <p>Professional mobile app development services tailored to your business needs.</p>
    </div>
  );
}