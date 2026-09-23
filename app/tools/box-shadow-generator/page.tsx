import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Box Shadow Generator',
  description: 'Create CSS box-shadow with live preview.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/box-shadow-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="box-shadow-generator"
      title="Box Shadow Generator"
      description="Create CSS box-shadow with live preview."
    />
  );
}
