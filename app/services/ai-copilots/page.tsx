import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Copilots - Zion Tech Group',
  description: 'Professional AI copilot services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Copilots</h1>
      <p>Professional AI copilot services tailored to your business needs.</p>
    </div>
  );
}