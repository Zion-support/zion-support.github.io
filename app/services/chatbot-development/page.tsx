import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatbot Development - Zion Tech Group',
  description: 'Professional chatbot development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Chatbot Development</h1>
      <p>Professional chatbot development services tailored to your business needs.</p>
    </div>
  );
}