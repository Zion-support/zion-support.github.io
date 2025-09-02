import React from 'react';
import Link from 'next/link';

export default function Cybersecurity() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Cybersecurity</h1>
        <p className="mt-4 text-lg text-gray-600">
          Practical, prioritized security programs: risk assessments, Zero Trust, appsec, cloud security, and managed detection.
        </p>
      </section>

      <section className="bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {[
            { title: 'Security Assessment', desc: 'NIST/ISO-aligned, threat modeling, prioritized roadmap.', price: '$6,000–$25,000' },
            { title: 'Cloud Security', desc: 'CIS benchmarks, IAM hardening, detection-as-code.', price: '$8,000–$40,000' },
            { title: 'Application Security', desc: 'SDLC, SAST/DAST, secrets, SCA, threat modeling.', price: '$5,000–$25,000' },
            { title: 'vCISO', desc: 'Program leadership, policies, audits, compliance.', price: '$5,000–$15,000/mo' },
            { title: 'Incident Response', desc: 'Retainer and playbooks, tabletop exercises.', price: '$4,000–$12,000' },
            { title: 'Red/Blue/Purple Team', desc: 'Pen tests, attack simulations, detection tuning.', price: '$8,000–$35,000' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
              <p className="mt-4 text-gray-900 font-medium">Typical budget: {item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Standards & Platforms</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
          {['NIST CSF', 'ISO 27001', 'SOC 2', 'OWASP ASVS', 'CIS Benchmarks', 'OSQuery', 'Falco', 'Wazuh', 'Cloudflare', 'Defender for Cloud'].map((t) => (
            <div key={t} className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-center">{t}</div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Book a security assessment</Link>
        </div>
      </section>
    </div>
  );
}

