import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'UUID Generator | Zion Tech Group',
  description: 'Generate RFC 4122 UUIDs.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/uuid-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="uuid-generator"
      title="UUID Generator"
      description="Generate RFC 4122 UUIDs."
    />
  );
}
