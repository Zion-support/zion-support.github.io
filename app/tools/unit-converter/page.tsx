import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature, and data units.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/unit-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="unit-converter"
      title="Unit Converter"
      description="Convert length, weight, temperature, and data units."
    />
  );
}
