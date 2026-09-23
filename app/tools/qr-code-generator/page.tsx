import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'QR Code Generator | Zion Tech Group',
  description: 'Generate a QR code for any text or URL.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/qr-code-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="qr-code-generator"
      title="QR Code Generator"
      description="Generate a QR code for any text or URL."
    />
  );
}
