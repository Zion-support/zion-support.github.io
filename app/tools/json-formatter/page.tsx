import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'JSON Formatter & Validator',
  description: 'Format, validate, and beautify JSON in your browser.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/json-formatter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="json-formatter"
      title="JSON Formatter & Validator"
      description="Format, validate, and beautify JSON in your browser."
    />
  );
}
