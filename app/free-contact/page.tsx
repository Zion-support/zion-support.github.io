import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Request a free consultation with Zion Tech Group. Tell us about your project and we will propose the right AI and IT services.',
  alternates: { canonical: '/contact/' },
};

export default function FreeContactPage() {
  redirect('/contact/');
}
