import { Metadata } from 'next';

const app = 'healthtech-compliance';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${app.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} — Zion Tech Group`,
    description: 'AI-powered solution for your business.',
  };
}

export default function Page() {
  return (
    <div className="container">
      <h1>{app.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
      <p>AI-powered solution for your business.</p>
    </div>
  );
}
