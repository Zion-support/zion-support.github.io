import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Security Audit - Zion Tech Group',
  description: 'Professional cloud security audit services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Cloud Security Audit</h1>
      <p>Professional cloud security audit services tailored to your business needs.</p>
    </div>
  );
}