import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'HTML to JSX Converter',
  description: 'Convert HTML markup to React JSX.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/html-to-jsx' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="html-to-jsx"
      title="HTML to JSX Converter"
      description="Convert HTML markup to React JSX."
    />
  );
}
