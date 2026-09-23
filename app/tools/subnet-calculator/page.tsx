import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Subnet Calculator | Zion Tech Group',
  description: 'Calculate CIDR subnet ranges.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/subnet-calculator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="subnet-calculator"
      title="Subnet Calculator"
      description="Calculate CIDR subnet ranges."
    />
  );
}
