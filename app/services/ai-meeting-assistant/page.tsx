import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Meeting Assistant - Zion Tech Group',
  description: 'Professional ai meeting assistant services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Meeting Assistant</h1>
      <p>Professional ai meeting assistant services tailored to your business needs.</p>
    </div>
  );
}