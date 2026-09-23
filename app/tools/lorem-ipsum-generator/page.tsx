import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Lorem Ipsum Generator',
  description: 'Generate placeholder paragraphs.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/lorem-ipsum-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="lorem-ipsum-generator"
      title="Lorem Ipsum Generator"
      description="Generate placeholder paragraphs."
    />
  );
}
