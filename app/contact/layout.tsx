import React from 'react';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI solutions, automation services, and technology consulting. We provide comprehensive support and rapid response to all inquiries.',
  keywords: ['contact', 'AI consulting', 'technology support', 'business inquiry', 'project consultation'],
  openGraph: {
    title: 'Contact Us - Zion Tech Group',
    description: 'Get in touch with Zion Tech Group for AI solutions, automation services, and technology consulting.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}