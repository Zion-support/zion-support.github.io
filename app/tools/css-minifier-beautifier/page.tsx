import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'CSS Minifier & Beautifier',
  description: 'Minify or beautify CSS code.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/css-minifier-beautifier' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="css-minifier-beautifier"
      title="CSS Minifier & Beautifier"
      description="Minify or beautify CSS code."
    />
  );
}
