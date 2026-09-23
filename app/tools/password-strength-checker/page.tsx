import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Password Strength Checker | Zion Tech Group',
  description: 'Analyze password strength locally.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/password-strength-checker' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="password-strength-checker"
      title="Password Strength Checker"
      description="Analyze password strength locally."
    />
  );
}
