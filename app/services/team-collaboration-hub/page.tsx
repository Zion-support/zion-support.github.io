import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team Collaboration Hub - Zion Tech Group',
  description: 'Professional team collaboration hub services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Team Collaboration Hub</h1>
      <p>Professional team collaboration hub services tailored to your business needs.</p>
    </div>
  );
}