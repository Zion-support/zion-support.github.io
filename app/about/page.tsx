import React from 'react';
import { Metadata } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Users, Shield, Globe, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
import { Users, Shield, Globe, Brain } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81

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

<<<<<<< HEAD
<<<<<<< HEAD

export default function AboutPage() {
<<<<<<< HEAD
=======
export default function AboutPage() {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2b81
  const _values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized support and expertise.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.'
    }
  ];

  const _stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======

<<<<<<< HEAD
export default function AboutPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
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
};

export default AboutPage;