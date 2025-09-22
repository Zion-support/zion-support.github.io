import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ai Powered Tools - Zion Tech Group',
  description: 'Professional ai powered tools services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Ai Powered Tools</h1>
      <p>Professional ai powered tools services tailored to your business needs.</p>
    </div>
  );
}