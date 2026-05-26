import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain & Web3 Solutions',
  description: 'Enterprise blockchain development, smart contract auditing, DeFi platforms, NFT marketplaces, and Web3 infrastructure.',
  openGraph: { title: 'Blockchain & Web3 Solutions | Zion Tech Group', description: 'Enterprise blockchain and Web3 development.', type: 'website' },
  alternates: { canonical: '/blockchain-solutions/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}