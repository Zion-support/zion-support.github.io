import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Password Generator | Zion Tech Group',
  description: 'Generate secure random passwords.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/password-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="password-generator"
      title="Password Generator"
      description="Generate secure random passwords."
    />
  );
}
