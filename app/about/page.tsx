import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group | AI & IT Solutions',
  description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
  keywords: 'about us, AI solutions, IT services, technology company, digital transformation',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission, values, and team. We\'re dedicated to delivering cutting-edge AI and IT solutions that transform businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/about'
  }
};


export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a leading provider of AI and IT solutions, helping businesses transform 
          their operations through cutting-edge technology.
        </p>
        <p className="text-lg text-gray-600">
          Our team of experts is dedicated to delivering innovative solutions that drive 
          growth and efficiency for our clients.
        </p>
      </div>
    </div>
  );
}