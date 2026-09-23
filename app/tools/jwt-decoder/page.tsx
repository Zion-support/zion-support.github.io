import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'JWT Decoder',
  description: 'Decode JWT header and payload client-side.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/jwt-decoder' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="jwt-decoder"
      title="JWT Decoder"
      description="Decode JWT header and payload client-side."
    />
  );
}
