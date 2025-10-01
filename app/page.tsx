import Ultimate2025ContentShowcaseBanner from '../components/Ultimate2025ContentShowcaseBanner';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation',
};

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
      <p className="text-lg text-gray-600 mb-6">
        Enterprise-grade AI, micro SaaS, and IT solutions.
      </p>
      <a href="/blog" className="text-blue-600 underline">
        Read the latest
      </a>
    </div>
  );
}