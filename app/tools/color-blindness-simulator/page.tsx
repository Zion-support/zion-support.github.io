import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Color Blindness Simulator',
  description: 'Simulate color blindness on a hex color.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/color-blindness-simulator' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="color-blindness-simulator"
      title="Color Blindness Simulator"
      description="Simulate color blindness on a hex color."
    />
  );
}
