import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Application Development - Zion Tech Group',
  description: 'Professional web application development services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Web Application Development</h1>
      <p>Professional web application development services tailored to your business needs.</p>
    </div>
  );
}