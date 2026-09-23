import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Color Contrast Checker | Zion Tech Group',
  description: 'Check WCAG contrast ratios.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/color-contrast-checker' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="color-contrast-checker"
      title="Color Contrast Checker"
      description="Check WCAG contrast ratios."
    />
  );
}
