import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Professional services for your business needs.',
  keywords: 'services, business, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Professional services for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional services for your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service page is under development. Please contact us for more information.
          </p>
import Link from 'next/link';

export const metadata = {
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, security audits, and incident response. Protect your business from cyber threats.',
  keywords: 'cybersecurity, threat detection, compliance management, security audits, incident response, penetration testing'
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-red-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your cybersecurity needs and how we can protect your business from evolving threats.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Cybersecurity Services Inquiry"
        className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Security Assessment
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function CybersecurityPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Protect your business with comprehensive cybersecurity solutions.
          From threat detection to compliance management, we keep your data secure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cybersecurity Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a comprehensive approach to identify, assess, and mitigate security risks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Security Assessment"
            description="Comprehensive evaluation of your current security posture and vulnerability analysis."
          />
          <ProcessStep
            step={2}
            title="Implementation & Monitoring"
            description="Deploying security solutions and establishing continuous monitoring systems."
          />
          <ProcessStep
            step={3}
            title="Ongoing Support & Updates"
            description="Regular security updates, incident response, and compliance management."
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cybersecurity Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions to protect your business from evolving cyber threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Threat Detection & Response"
            description="Advanced threat detection systems and rapid incident response capabilities."
            icon="🛡️"
          />
          <FeatureCard
            title="Security Audits & Assessments"
            description="Comprehensive security audits and penetration testing to identify vulnerabilities."
            icon="🔍"
          />
          <FeatureCard
            title="Compliance Management"
            description="Ensuring compliance with industry standards like SOC 2, ISO 27001, and GDPR."
            icon="📋"
          />
          <FeatureCard
            title="Network Security"
            description="Firewall configuration, network monitoring, and secure network architecture."
            icon="🌐"
          />
          <FeatureCard
            title="Data Protection"
            description="Encryption, data loss prevention, and secure data storage solutions."
            icon="🔐"
          />
          <FeatureCard
            title="Security Training"
            description="Employee security awareness training and phishing simulation programs."
            icon="🎓"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
