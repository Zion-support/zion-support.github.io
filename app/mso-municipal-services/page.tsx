import { Metadata } from 'next';

export async function generateMetadata({ params }: {
  readonly params: { readonly slug: string; };
}): Promise<Metadata> {
  return {
    title: `${app.replace(/-/g, ' ').replace(/\w/g, l => l.toUpperCase())} — Zion Tech Group`,
    description: 'AI-powered solution for your business.',
  };
}

export default function {slug}Page() {
  return (
    <div className="container">
      <h1>{app.replace(/-/g, ' ').replace(/\w/g, l => l.toUpperCase())}</h1>
      <p>AI-powered solution for your business.</p>
    </div>
  );
}
