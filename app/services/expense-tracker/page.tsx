import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense Tracker - Zion Tech Group',
  description: 'Professional expense tracker services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>Professional expense tracker services tailored to your business needs.</p>
    </div>
  );
}