import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'String Case Converter | Zion Tech Group',
  description: 'Convert between common string cases.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/string-case-converter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="string-case-converter"
      title="String Case Converter"
      description="Convert between common string cases."
    />
  );
}
