import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iot Solutions - Zion Tech Group',
  description: 'Professional iot solutions services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Iot Solutions</h1>
      <p>Professional iot solutions services tailored to your business needs.</p>
    </div>
  );
}