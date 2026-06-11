import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'IoT & Edge Services | Zion Tech Group',
  description: 'IoT and edge computing services — device management, edge AI, sensor networks, and industrial IoT solutions.',
  alternates: { canonical: 'https://ziontechgroup.com/services/?category=iot' },
};

export default function IoTServicesPage() {
  redirect('/services/?category=iot');
}
