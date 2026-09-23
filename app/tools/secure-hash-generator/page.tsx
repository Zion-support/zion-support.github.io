import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Secure Hash Generator | Zion Tech Group',
  description: 'Generate SHA-256 hashes in the browser.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/secure-hash-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="secure-hash-generator"
      title="Secure Hash Generator"
      description="Generate SHA-256 hashes in the browser."
    />
  );
}
