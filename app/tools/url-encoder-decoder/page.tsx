import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/url-encoder-decoder' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="url-encoder-decoder"
      title="URL Encoder / Decoder"
      description="Encode and decode URL components."
    />
  );
}
