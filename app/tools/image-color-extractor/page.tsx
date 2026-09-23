import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Image Color Extractor | Zion Tech Group',
  description: 'Extract dominant colors from an image.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/image-color-extractor' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="image-color-extractor"
      title="Image Color Extractor"
      description="Extract dominant colors from an image."
    />
  );
}
