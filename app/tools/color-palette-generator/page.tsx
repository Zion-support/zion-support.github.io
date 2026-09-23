import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Color Palette Generator | Zion Tech Group',
  description: 'Generate harmonious color palettes.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/color-palette-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="color-palette-generator"
      title="Color Palette Generator"
      description="Generate harmonious color palettes."
    />
  );
}
