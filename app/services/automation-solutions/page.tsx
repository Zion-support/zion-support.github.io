import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Solutions - Zion Tech Group',
  description: 'Professional automation solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Automation Solutions</h1>
      <p>Professional automation solutions services tailored to your business needs.</p>
    </div>
  );
}