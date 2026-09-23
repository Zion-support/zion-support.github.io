import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'HTML Minifier & Beautifier | Zion Tech Group',
  description: 'Minify or format HTML.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/html-minifier-beautifier' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="html-minifier-beautifier"
      title="HTML Minifier & Beautifier"
      description="Minify or format HTML."
    />
  );
}
