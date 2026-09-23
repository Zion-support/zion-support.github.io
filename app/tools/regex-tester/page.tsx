import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Regex Tester | Zion Tech Group',
  description: 'Test regular expressions with live matches.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/regex-tester' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="regex-tester"
      title="Regex Tester"
      description="Test regular expressions with live matches."
    />
  );
}
