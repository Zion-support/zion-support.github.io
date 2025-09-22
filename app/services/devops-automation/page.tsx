import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Devops Automation - Zion Tech Group',
  description: 'Professional devops automation services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Devops Automation</h1>
      <p>Professional devops automation services tailored to your business needs.</p>
    </div>
  );
}