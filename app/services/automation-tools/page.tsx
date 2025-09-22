import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Tools - Zion Tech Group',
  description: 'Professional automation tools services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Automation Tools</h1>
      <p>Professional automation tools services tailored to your business needs.</p>
    </div>
  );
}