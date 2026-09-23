import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Base64 Encoder / Decoder | Zion Tech Group',
  description: 'Encode and decode Base64 strings.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/base64' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="base64"
      title="Base64 Encoder / Decoder"
      description="Encode and decode Base64 strings."
    />
  );
}
