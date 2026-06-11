import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Security Services | Zion Tech Group',
  description: 'Enterprise cybersecurity services — threat detection, zero trust, compliance, and security monitoring.',
  alternates: { canonical: 'https://ziontechgroup.com/services/?category=security' },
};

export default function SecurityServicesPage() {
  redirect('/services/?category=security');
}
