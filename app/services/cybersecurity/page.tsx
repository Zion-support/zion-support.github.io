import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Zion Tech Group',
  description:
    'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.',
};

export default function CybersecurityPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Cybersecurity Services
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Comprehensive cybersecurity solutions to protect your business from
            evolving threats.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Threat Detection
            </h3>
            <p className='text-gray-300'>
              Advanced threat detection and response systems to identify and
              neutralize cyber threats.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Security Audits
            </h3>
            <p className='text-gray-300'>
              Comprehensive security assessments to identify vulnerabilities and
              strengthen your defenses.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Compliance Management
            </h3>
            <p className='text-gray-300'>
              Ensure compliance with industry standards and regulations for data
              protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
