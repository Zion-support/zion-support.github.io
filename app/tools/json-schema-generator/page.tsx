import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'JSON Schema Generator | Zion Tech Group',
  description: 'Generate a JSON Schema from sample JSON.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/json-schema-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="json-schema-generator"
      title="JSON Schema Generator"
      description="Generate a JSON Schema from sample JSON."
    />
  );
}
