import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Campaign Manager - Zion Tech Group',
  description: 'Professional email campaign manager services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Email Campaign Manager</h1>
      <p>Professional email campaign manager services tailored to your business needs.</p>
    </div>
  );
}