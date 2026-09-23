import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Markdown Preview',
  description: 'Live preview for Markdown text.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/markdown-preview' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="markdown-preview"
      title="Markdown Preview"
      description="Live preview for Markdown text."
    />
  );
}
