import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Unix Timestamp Converter',
  description: 'Convert Unix timestamps and dates.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/timestamp-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="timestamp-converter"
      title="Unix Timestamp Converter"
      description="Convert Unix timestamps and dates."
    />
  );
}
