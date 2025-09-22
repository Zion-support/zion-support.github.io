import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Expense Tracker - Zion Tech Group',
  description: 'Professional AI expense tracking services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Expense Tracker</h1>
      <p>Professional AI expense tracking services tailored to your business needs.</p>
    </div>
  );
}