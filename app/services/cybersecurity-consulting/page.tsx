import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Consulting - Zion Tech Group',
  description: 'Professional cybersecurity consulting services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cybersecurity Consulting</h1>
      <p>Professional cybersecurity consulting services tailored to your business needs.</p>
    </div>
  );
}