import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'YAML ⇄ JSON Converter | Zion Tech Group',
  description: 'Convert between YAML and JSON formats.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/yaml-json-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="yaml-json-converter"
      title="YAML ⇄ JSON Converter"
      description="Convert between YAML and JSON formats."
    />
  );
}
