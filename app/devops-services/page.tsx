import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'DevOps Services | Zion Tech Group',
  description: 'DevOps and platform engineering services — CI/CD, infrastructure as code, containerization, and site reliability.',
  alternates: { canonical: 'https://ziontechgroup.com/services/?category=devops' },
};

export default function DevOpsServicesPage() {
  redirect('/services/?category=devops');
}
