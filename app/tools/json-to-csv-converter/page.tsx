import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'JSON to CSV Converter',
  description: 'Convert JSON arrays to CSV instantly.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/json-to-csv-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="json-to-csv-converter"
      title="JSON to CSV Converter"
      description="Convert JSON arrays to CSV instantly."
    />
  );
}
