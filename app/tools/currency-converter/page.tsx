import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Currency Converter | Zion Tech Group',
  description: 'Estimate currency conversion rates.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/currency-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="currency-converter"
      title="Currency Converter"
      description="Estimate currency conversion rates."
    />
  );
}
