import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E Commerce Solutions - Zion Tech Group',
  description: 'Professional e commerce solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>E Commerce Solutions</h1>
      <p>Professional e commerce solutions services tailored to your business needs.</p>
    </div>
  );
}