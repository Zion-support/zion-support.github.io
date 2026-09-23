import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'CSS Gradient Generator | Zion Tech Group',
  description: 'Build CSS gradients with a live preview.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/css-gradient-generator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="css-gradient-generator"
      title="CSS Gradient Generator"
      description="Build CSS gradients with a live preview."
    />
  );
}
