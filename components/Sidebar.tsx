import Link from 'next/link';
import React from 'react';

export default function Sidebar(): JSX.Element {
  const sections: Array<{ title: string; links: { href: string; label: string }[] }> = [
    {
      title: 'Services',
      links: [
        { href: '/services/ai-analytics', label: 'AI Analytics' },
        { href: '/services/cybersecurity', label: 'Cybersecurity' },
        { href: '/services/cloud-devops', label: 'Cloud & DevOps' },
        { href: '/services/iot-edge', label: 'IoT & Edge' },
        { href: '/services/quantum-computing', label: 'Quantum Computing' },
        { href: '/services/blockchain', label: 'Blockchain' },
        { href: '/services/digital-twin', label: 'Digital Twin' },
        { href: '/services/sustainability', label: 'Sustainability' },
        { href: '/services/data-analytics', label: 'Data Analytics' },
        { href: '/services/infrastructure', label: 'Infrastructure' },
        { href: '/services/digital-transformation', label: 'Digital Transformation' },
        { href: '/services/consulting', label: 'Consulting' },
        { href: '/services/onsite-support', label: 'Onsite Support' },
        { href: '/services/5g-solutions', label: '5G Solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { href: '/micro-saas/ai-business-intelligence', label: 'AI Business Intelligence' },
        { href: '/micro-saas/customer-experience', label: 'Customer Experience' },
        { href: '/micro-saas/quantum-computing', label: 'Quantum Computing' },
        { href: '/micro-saas/supply-chain', label: 'Supply Chain' },
        { href: '/micro-saas/cybersecurity', label: 'Cybersecurity' },
        { href: '/micro-saas/iot-edge', label: 'IoT & Edge' },
        { href: '/micro-saas/content-creation', label: 'Content Creation' },
        { href: '/micro-saas/hr-platform', label: 'HR Platform' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { href: '/it-services/infrastructure', label: 'Infrastructure' },
        { href: '/it-services/digital-transformation', label: 'Digital Transformation' },
        { href: '/it-services/consulting', label: 'Consulting' },
        { href: '/it-services/onsite-support', label: 'Onsite Support' },
        { href: '/it-services/green-it', label: 'Green IT' },
        { href: '/it-services/5g-solutions', label: '5G Solutions' }
      ]
    }
  ];

  return (
    <aside style={{ width: 260, flex: '0 0 auto', padding: 16, borderRight: '1px solid #eee' }}>
      {sections.map((section) => (
        <div key={section.title} style={{ marginBottom: 20 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>{section.title}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {section.links.map((l) => (
              <li key={l.href} style={{ margin: '6px 0' }}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}