import React from 'react';
import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI solutions, micro SaaS development, and IT services. Contact us today for a consultation.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ContactForm />
    </div>
  );
}