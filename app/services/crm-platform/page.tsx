import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM Platform - Zion Tech Group',
  description: 'Professional CRM platform services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>CRM Platform</h1>
      <p>Professional CRM platform services tailored to your business needs.</p>
    </div>
  );
}