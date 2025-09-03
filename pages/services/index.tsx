import React from 'react';

const services = [
  { name: 'AI Development', href: '/services/ai-development' },
  { name: 'Cloud Services', href: '/services/cloud-services' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile Development', href: '/services/mobile-development' },
  { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
  { name: 'IoT Platforms', href: '/services/iot-platforms' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
];

export default function ServicesIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <ul className="space-y-2">
        {services.map(s => (
          <li key={s.href}>
            <a href={s.href} className="text-blue-600 hover:underline">{s.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

