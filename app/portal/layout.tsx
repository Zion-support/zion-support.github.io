import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s — Client Portal | Zion Tech Group',
    default: 'Client Portal — Zion Tech Group',
  },
  description:
    'Secure client portal for Zion Tech Group customers. Access dashboards, support tickets, billing, projects, and knowledge base.',
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
