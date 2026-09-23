import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'XML Formatter & Validator | Zion Tech Group',
  description: 'Format and validate XML documents.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/xml-formatter-validator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="xml-formatter-validator"
      title="XML Formatter & Validator"
      description="Format and validate XML documents."
    />
  );
}
