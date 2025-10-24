import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Users, Shield, Globe, Brain } from 'lucide-react';

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
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Collaboration',
      description: 'We work closely with your team to understand your unique business needs.'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with scalable, cloud-based solutions.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are a leading technology company specializing in AI and IT solutions that drive
          growth and efficiency for our clients.
        </p>
      </div>
    </div>
  );
}