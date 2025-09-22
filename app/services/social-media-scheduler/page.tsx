import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Scheduler - Zion Tech Group',
  description: 'Professional social media scheduler services by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>Social Media Scheduler</h1>
      <p>Professional social media scheduler services tailored to your business needs.</p>
    </div>
  );
}