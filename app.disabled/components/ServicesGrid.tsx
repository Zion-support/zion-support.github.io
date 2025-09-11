import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'AI Solutions',
    description:
      'Advanced AI tools and platforms to automate and optimize your business processes.',
    href: '/services/ai-services',
    icon: '🤖',
  },
  {
    title: 'Blockchain Technology',
    description:
      'Secure, decentralized solutions for modern business needs and digital transformation.',
    href: '/services/blockchain',
    icon: '⛓️',
  },
  {
    title: 'Micro SaaS',
    description:
      'Scalable software solutions designed to grow with your business.',
    href: '/services/micro-saas',
    icon: '💼',
  },
];

export default function ServicesGrid() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
      {services.map((service, index) => (
        <div
          key={index}
          className='bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition duration-300 group'
        >
          <div className='text-4xl mb-4'>{service.icon}</div>
          <h3 className='text-xl font-semibold text-white mb-4'>
            {service.title}
          </h3>
          <p className='text-gray-300 mb-4'>{service.description}</p>
          <Link
            href={service.href}
            className='text-blue-400 hover:text-blue-300 transition duration-300 group-hover:underline'
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
}
