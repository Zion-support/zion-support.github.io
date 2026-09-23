import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'JSON Diff Viewer',
  description: 'Compare two JSON documents side by side.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/json-diff-viewer' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="json-diff-viewer"
      title="JSON Diff Viewer"
      description="Compare two JSON documents side by side."
    />
  );
}
