import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI solutions, micro SaaS development, and IT services.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}