import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Number Base Converter',
  description: 'Convert binary, octal, decimal, and hex.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/number-base-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="number-base-converter"
      title="Number Base Converter"
      description="Convert binary, octal, decimal, and hex."
    />
  );
}
